// DESIGN PATTERNS

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
                    "state": 2,
                    "value": undefined,
                },
                {
                    "label": "formulaire de contact",
                    "state": 0,
                    "value": undefined,
                },
                {
                    "label": "intégration de contenu",
                    "state": 0,
                    "value": undefined,
                },
                {
                    "label": "footer",
                    "state": 0,
                    "value": undefined,
                },
                {
                    "label": "adaptabilité mobile",
                    "state": 0,
                    "value": undefined,
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