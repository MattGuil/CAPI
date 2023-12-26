class VoteStrategy {
    computeVote() {
        return;
    }
}

class VoteStrictStrategy extends VoteStrategy {
    computeVote(playersWithNumericVotes) {
        let state, value;
        let firstVote, currentVote;

        if (playersWithNumericVotes.length === 0)
            state = 1;
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

class VoteMoyenneStrategy extends VoteStrategy {
    computeVote(playersWithNumericVotes, nbVotes) {
        let sum = 0;
        
        playersWithNumericVotes.forEach(player => {
            sum += parseFloat(player.hasVoted);
        });
        
        let value = Math.floor(sum / nbVotes);

        let state;
        if (value == 0) {
            state = 2;
        } else {
            state = 1;
        }

        return {'value': value, 'state': state};
    }
}

class VoteMedianeStrategy extends VoteStrategy {
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

class VoteMajoriteAbsolueStrategy extends VoteStrategy {
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

class VoteMajoriteRelativeStrategy extends VoteStrategy {
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