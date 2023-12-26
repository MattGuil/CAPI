import { VoteStrict, VoteMoyenne, VoteMediane, VoteMajoriteAbsolue, VoteMajoriteRelative } from './Votes.js';

class Partie {
    constructor() {
        if (!Partie.instance) {
            
            this.mode = "strict";
            this.players = [];
            this.backlogs = [];
            this.currentPlayer = 0;
            this.currentBacklog = 0;
            this.nbCoffeeBreak = 0;
            
            Partie.instance = this;
        }

        return Partie.instance;
    }

    load(mode, players, backlogs) {
        this.mode = mode;
            
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

    computeVote() {
        let voteResult = {};

        if (this.allPlayersWantCoffee()) {
            this.nbCoffeeBreak++;
            this.players.forEach(player => {
                player['hasVoted'] = false;
            });
            this.currentPlayer = 0;
            return "coffee";
        }

        switch(this.mode) {
            case "strict":
                voteResult = VoteStrict(this.players);
                break;
            case "moyenne":
                voteResult = VoteMoyenne(this.players);
                break;
            case "médiane":
                voteResult = VoteMediane(this.players);
                break;
            case "majorité absolue":
                voteResult = VoteMajoriteAbsolue(this.players);
                break;
            case "majorité relative":
                voteResult = VoteMajoriteRelative(this.players);
                break;
        }

        this.backlogs[this.currentBacklog]['value'] = voteResult.value;
        this.backlogs[this.currentBacklog]['state'] = voteResult.state;

        this.players.forEach(player => {
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