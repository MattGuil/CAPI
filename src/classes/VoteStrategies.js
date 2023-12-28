/**
 * La classe de base représentant une stratégie de vote.
 * <br>
 * DESIGN PATTERN : STRATEGY
 */
class VoteStrategy {
    /**
     * Méthode abstraite pour calculer le vote.
     * @param {Array} playersWithNumericVotes - Liste des joueurs avec des votes numériques.
     * @returns {Object} - Résultat du calcul du vote (valeur et état).
     */
    computeVote() {
        return;
    }
}

/**
 * Stratégie de vote strict où tous les votes doivent être identiques pour être valides.
 * <br>
 * DESIGN PATTERN : STRATEGY
 */
class VoteStrictStrategy extends VoteStrategy {
    /**
     * Calcule le vote selon la stratégie stricte.
     * @param {Array} playersWithNumericVotes - Liste des joueurs avec des votes numériques.
     * @returns {Object} - Résultat du calcul du vote (valeur et état).
     */
    computeVote(playersWithNumericVotes) {
        let state, value;
        let firstVote, currentVote;

        firstVote = parseFloat(playersWithNumericVotes[0].hasVoted);
        value = firstVote;
        state = 1;
        for (let i = 1; i < playersWithNumericVotes.length; i++) {
            currentVote = parseFloat(playersWithNumericVotes[i].hasVoted);
            if (isNaN(currentVote) || currentVote !== firstVote) {
                value = undefined;
                state = 2;
            }
        }

        return {'value': value, 'state': state};
    }
}

/**
 * Stratégie de vote moyenne qui calcule la moyenne des votes numériques.
 * <br>
 * DESIGN PATTERN : STRATEGY
 */
class VoteMoyenneStrategy extends VoteStrategy {
    /**
     * Calcule le vote selon la stratégie de moyenne.
     * @param {Array} playersWithNumericVotes - Liste des joueurs avec des votes numériques.
     * @returns {Object} - Résultat du calcul du vote (valeur et état).
     */
    computeVote(playersWithNumericVotes) {
        let sum = 0;
        
        playersWithNumericVotes.forEach(player => {
            sum += parseFloat(player.hasVoted);
        });
        
        let value = Math.floor(sum / playersWithNumericVotes.length);

        let state;
        if (value == 0) {
            state = 2;
        } else {
            state = 1;
        }

        return {'value': value, 'state': state};
    }
}

/**
 * Stratégie de vote médiane qui trouve la médiane des votes numériques.
 * <br>
 * DESIGN PATTERN : STRATEGY
 */
class VoteMedianeStrategy extends VoteStrategy {
    /**
     * Calcule le vote selon la stratégie de médiane.
     * @param {Array} playersWithNumericVotes - Liste des joueurs avec des votes numériques.
     * @returns {Object} - Résultat du calcul du vote (valeur et état).
     */
    computeVote(playersWithNumericVotes) {
        let state, value;
    
        playersWithNumericVotes.sort((a, b) => a.hasVoted - b.hasVoted);
        if (playersWithNumericVotes.length % 2 === 0) {
            value = (playersWithNumericVotes[(playersWithNumericVotes.length / 2) - 1].hasVoted + playersWithNumericVotes[playersWithNumericVotes.length / 2].hasVoted) / 2;
        } else {
            value = playersWithNumericVotes[Math.floor(playersWithNumericVotes.length / 2)].hasVoted;
        }
        state = 1;

        return {'value': value, 'state': state};
    }
}

/**
 * Stratégie de vote à majorité absolue qui vérifie si une valeur a plus de la moitié des votes.
 * <br>
 * DESIGN PATTERN : STRATEGY
 */
class VoteMajoriteAbsolueStrategy extends VoteStrategy {
    /**
     * Calcule le vote selon la stratégie de majorité absolue.
     * @param {Array} playersWithNumericVotes - Liste des joueurs avec des votes numériques.
     * @param {number} nbVotes - Nombre total de votes.
     * @returns {Object} - Résultat du calcul du vote (valeur et état).
     */
    computeVote(playersWithNumericVotes, nbVotes) {
        let state, value;
        let votes = {};
        let valeursVotes, maxVotes;

        playersWithNumericVotes.forEach(player => {
            if (votes[player.hasVoted]) {
                votes[player.hasVoted]++;
            } else {
                votes[player.hasVoted] = 1;
            }
        });
        valeursVotes = Object.values(votes);
        maxVotes = Math.max(...valeursVotes);
        if (maxVotes > nbVotes / 2) {
            value = parseInt(Object.keys(votes).find(key => votes[key] === maxVotes));
            state = 1;
        } else {
            value = undefined;
            state = 2;
        }

        return {'value': value, 'state': state};
    }
}

/**
 * Stratégie de vote à majorité relative qui vérifie si une valeur a plus de votes que les autres.
 * <br>
 * DESIGN PATTERN : STRATEGY
 */
class VoteMajoriteRelativeStrategy extends VoteStrategy {
    /**
     * Calcule le vote selon la stratégie de majorité relative.
     * @param {Array} playersWithNumericVotes - Liste des joueurs avec des votes numériques.
     * @returns {Object} - Résultat du calcul du vote (valeur et état).
     */
    computeVote(playersWithNumericVotes) {
        let state, value;
        let votes = {};
        let valeursVotes, maxVotes;

        playersWithNumericVotes.forEach(player => {
            if (votes[player.hasVoted]) {
                votes[player.hasVoted]++;
            } else {
                votes[player.hasVoted] = 1;
            }
        });
        valeursVotes = Object.values(votes);
        maxVotes = Math.max(...valeursVotes);
        if (Object.keys(votes).filter(key => votes[key] === maxVotes).length === 1) {
            value = Object.keys(votes).filter(key => votes[key] === maxVotes)[0];
            state = 1;
        } else {
            value = undefined;
            state = 2;
        }

        return {'value': value, 'state': state};
    }
}

export {
    VoteStrictStrategy,
    VoteMoyenneStrategy,
    VoteMedianeStrategy,
    VoteMajoriteAbsolueStrategy,
    VoteMajoriteRelativeStrategy
};