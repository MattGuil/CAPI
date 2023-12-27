import { VoteStrategyFactory } from './VoteStrategyFactory.js';


class Partie {
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

    currentPlayerVote(value) {
        this.players[this.currentPlayer]['hasVoted'] = value;
    }

    allPlayersVoted() {
        return !(this.currentPlayer + 1 < this.players.length);
    }

    allPlayersWantCoffee() {
        return this.players.every(player => player['hasVoted'] === 'coffee');
    }

    allPlayersDontKnow() {
        return this.players.every(player => player['hasVoted'] === '?');
    }

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

    isOver() {
        if (this.getFirstNotProcessedBacklog() == -1) {
            return true;
        } else {
            this.currentBacklog = this.getFirstNotProcessedBacklog();
            return false;
        }
    }

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