import { VoteStrategyFactory } from './VoteStrategyFactory.js';

/**
 * La classe représentant une partie du jeu.
 * DESIGN PATTERN : SINGLETON
 */
class Partie {
    /**
     * Constructeur de la classe Partie.
     * @constructor
     */
    constructor() {
        if (!Partie.instance) {
            
            this.mode = "strict";
            this.voteStrategy = VoteStrategyFactory.createStrategy(this.mode);

            this.backlogs = [];
            this.currentBacklog = 0;

            this.players = [];
            this.currentPlayer = 0;

            this.showChart = true;
            this.infosForChart = {};
            
            this.nbCoffeeBreak = 0;
            
            Partie.instance = this;
        }

        return Partie.instance;
    }

    /**
     * Charge les données pour commencer une nouvelle partie.
     * @param {string} mode - Le mode de jeu.
     * @param {Array} players - Les joueurs participant à la partie.
     * @param {Array} backlogs - Les éléments de backlog.
     * @returns {Partie} - L'instance de Partie.
     */
    load(mode, players, backlogs) {
        
        this.mode = mode;
        this.voteStrategy = VoteStrategyFactory.createStrategy(this.mode);
            
        this.players = [];
        players.forEach(player => {
            this.players.push({"pseudo": player, "hasVoted": false});
        });

        this.backlogs = [];
        backlogs.forEach(backlog => {
            this.backlogs.push(backlog);
        });

        return Partie.instance;
    }

    /**
     * Enregistre le vote du joueur actuel.
     * @param {string} value - La valeur du vote.
     */
    currentPlayerVote(value) {
        this.players[this.currentPlayer]['hasVoted'] = value;
    }

    /**
     * Vérifie si tous les joueurs ont voté.
     * @returns {boolean} - True si tous les joueurs ont voté, sinon False.
     */
    allPlayersVoted() {
        return !(this.currentPlayer + 1 < this.players.length);
    }

    /**
     * Vérifie si tous les joueurs veulent une pause café.
     * @returns {boolean} - True si tous les joueurs veulent une pause café, sinon False.
     */
    allPlayersWantCoffee() {
        return this.players.every(player => player['hasVoted'] === 'coffee');
    }

    /**
     * Vérifie si tous les joueurs ont voté pour 'coffee' ou '?'.
     * @returns {boolean} - True si tous les joueurs ont voté soit 'coffee' soit '?', sinon False.
     */
    allPlayersDontKnow() {
        return this.players.every(player => player['hasVoted'] === 'coffee' || player['hasVoted'] === '?');
    }

    /**
     * Calcule le résultat du vote en fonction des stratégies définies.
     */
    computeVote() {
        if (this.allPlayersWantCoffee()) {
            this.nbCoffeeBreak++;
            this.players.forEach(player => {
                player['hasVoted'] = false;
            });
            this.currentPlayer = 0;
            return "coffee";
        }

        let voteResult = {};

        if (this.allPlayersDontKnow()) {
            voteResult = {'value': undefined, 'state': 2};
        } else {
            const playersWithNumericVotes = this.players.filter(player => {
                const vote = parseFloat(player.hasVoted);
                return !isNaN(vote);
            });

            voteResult = this.voteStrategy.computeVote(playersWithNumericVotes, this.players.length);
        }

        this.backlogs[this.currentBacklog]['value'] = voteResult.value;
        this.backlogs[this.currentBacklog]['state'] = voteResult.state;

        this.infosForChart = {};
        this.infosForChart.currentBacklogDisplay = this.currentBacklog + 1;
        this.infosForChart.currentBacklogLabel = this.backlogs[this.currentBacklog]['label'];
        this.infosForChart.currentBacklogState = this.backlogs[this.currentBacklog]['state'];
        this.infosForChart.votes = [];
        this.players.forEach(player => {
            this.infosForChart.votes.push(player['hasVoted']);
            player['hasVoted'] = false;
        });
        this.currentPlayer = 0;
    }

    /**
     * Vérifie si la partie est terminée.
     * @returns {boolean} - True si la partie est terminée, sinon False.
     */
    isOver() {
        if (this.getFirstNotProcessedBacklog() == -1) {
            return true;
        } else {
            this.currentBacklog = this.getFirstNotProcessedBacklog();
            return false;
        }
    }

    /**
     * Récupère le premier élément de backlog non traité.
     * @returns {number} - L'index du premier backlog non traité, sinon -1.
     */
    getFirstNotProcessedBacklog() {
        let output = -1;
        let index = 0;
        this.backlogs.forEach(backlog => {
            if (backlog['state'] !== 1) {
                output = index;
                return;
            }
            index++;
        });
        return output;
    }
}

export default Partie;