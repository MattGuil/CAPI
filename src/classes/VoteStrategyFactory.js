import {
    VoteStrictStrategy,
    VoteMoyenneStrategy,
    VoteMedianeStrategy,
    VoteMajoriteAbsolueStrategy,
    VoteMajoriteRelativeStrategy
} from './VoteStrategies.js';


class VoteStrategyFactory {
    static createStrategy(mode) {
        switch (mode) {
            case "strict":
                return new VoteStrictStrategy();
            case "moyenne":
                return new VoteMoyenneStrategy();
            case "médiane":
                return new VoteMedianeStrategy();
            case "majorité absolue":
                return new VoteMajoriteAbsolueStrategy();
            case "majorité relative":
                return new VoteMajoriteRelativeStrategy();
            default:
                return null;
        }
    }
}

export { VoteStrategyFactory };