function VoteStrict(players) {
    let state, value;
    let firstVote, currentVote;

    if (players.length === 0)
        state = 1;
    firstVote = parseFloat(players[0].hasVoted);
    value = firstVote;
    state = 1;
    for (let i = 1; i < players.length; i++) {
        currentVote = parseFloat(players[i].hasVoted);
        if (isNaN(currentVote) || currentVote !== firstVote) {
            value = undefined;
            state = 2;
        }
    }

    return {'value': value, 'state': state};
}

function VoteMoyenne(players) {
    let state, value;
    let sum;

    players.forEach(player => {
        const v = parseFloat(player.hasVoted);
        if (!isNaN(v))
            sum += v;
    });
    value = Math.floor(sum / players.length);
    state = 1;

    return {'value': value, 'state': state};
}

function VoteMediane(players) {
    let state, value;
    
    players.sort((a, b) => a.hasVoted - b.hasVoted);
    if (players.length % 2 === 0) {
        value = (players[(players.length / 2) - 1].hasVoted + players[players.length / 2].hasVoted) / 2;
    } else {
        value = players[Math.floor(players.length / 2)].hasVoted;
    }
    state = 1;

    return {'value': value, 'state': state};
}

function VoteMajoriteAbsolue(players) {
    let state, value;
    let votes = {};
    let valeursVotes, maxVotes;

    players.forEach(player => {
        if (votes[player.hasVoted]) {
            votes[player.hasVoted]++;
        } else {
            votes[player.hasVoted] = 1;
        }
    });
    valeursVotes = Object.values(votes);
    maxVotes = Math.max(...valeursVotes);
    if (maxVotes > players.length / 2) {
        value = parseInt(Object.keys(votes).find(key => votes[key] === maxVotes));
        state = 1;
    } else {
        value = undefined;
        state = 2;
    }

    return {'value': value, 'state': state};
}

function VoteMajoriteRelative(players) {
    let state, value;
    let votes = {};
    let valeursVotes, maxVotes;

    players.forEach(player => {
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

export {
    VoteStrict,
    VoteMoyenne,
    VoteMediane,
    VoteMajoriteAbsolue,
    VoteMajoriteRelative
};