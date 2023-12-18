// DESIGN PATTERNS

// Singleton

class Partie {
    constructor() {
        if (!Partie.instance) {
            this.mode = null;
            this.players = null;
            this.backlogs = null;
            Partie.instance = this;
        }
        return Partie.instance;
    }
}

export default Partie;


/*
// Iterator
function BacklogsIterator(partie) {
    this.backlogs = partie.backlogs;
    this.index = 0;
}

BacklogsIterator.prototype.next = function () {
    if (this.index < this.backlogs.length) {
        const result = this.backlogs[this.index];
        this.index++;
        return { value: result, done: false };
    }
    return { done: true };
};
*/