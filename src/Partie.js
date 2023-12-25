// Singleton

class Partie {
    constructor() {
        if (!Partie.instance) {
            this.mode = "";
            this.players = [];
            this.backlogs = [];
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
            this.backlogs.push({"label": backlog, "state": -1, "value": undefined});
        });

        return JSON.stringify(Partie.instance);
    }

    getCurrentBacklog(backlogs) {
        backlogs.forEach((index, backlog) => {
            if (backlog['state'] == -1)
                return index;
        });
        return -1;
    }
}

export default Partie;