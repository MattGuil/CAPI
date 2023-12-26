import { VoteStrict, VoteMoyenne, VoteMediane, VoteMajoriteAbsolue, VoteMajoriteRelative } from './Votes.js';

class Partie {
    constructor(mode, players, backlogs) {
        if (!Partie.instance) {
            
            this.mode = mode;
            
            this.players = [];
            players.forEach(player => {
                this.players.push({"pseudo": player, "hasVoted": false});
            });

            this.backlogs = [];
            backlogs.forEach(backlog => {
                this.backlogs.push({"label": backlog, "state": -1, "value": undefined});
            });
            
            this.currentPlayer = 0;
            
            this.currentBacklog = 0;
            
            Partie.instance = this;
        }

        return Partie.instance;
    }

    currentPlayerVote(value) {
        this.players[this.currentPlayer]['hasVoted'] = value;
    }

    allPlayersVoted() {
        return !(this.currentPlayer + 1 < this.players.length);
    }

    computeVote() {
        let voteResult = {};

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
        return !(this.currentBacklog + 1 < this.backlogs.length);
    }

    /*
    getCurrentBacklog() {
        let index = 0;
        this.backlogs.forEach(backlog => {
            if (backlog['state'] == -1)
                return index;
            index++;
        });
        return -1;
    }
    */
}

export default Partie;