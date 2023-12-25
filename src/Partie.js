// Singleton

class Partie {
    constructor() {
        if (!Partie.instance) {
            this.mode = "strict";
            this.players = [
                {
                    "pseudo": "A",
                    "hasVoted": false
                },
                {
                    "pseudo": "B",
                    "hasVoted": false
                },
                {
                    "pseudo": "C",
                    "hasVoted": false
                },
            ];
            this.backlogs = [
                {
                    "label": "page d'accueil statique",
                    "state": 1,
                    "value": 3,
                },
                {
                    "label": "barre de navigation",
                    "state": 1,
                    "value": 5,
                },
                {
                    "label": "formulaire de contact",
                    "state": 1,
                    "value": 8,
                },
                {
                    "label": "intégration de contenu",
                    "state": 1,
                    "value": 5,
                },
                {
                    "label": "footer",
                    "state": 1,
                    "value": 5,
                },
                {
                    "label": "adaptabilité mobile",
                    "state": 1,
                    "value": 40,
                }
            ];
            Partie.instance = this;
        }
        return Partie.instance;
    }

    reload(mode, players, backlogs) {
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
}

export default Partie;