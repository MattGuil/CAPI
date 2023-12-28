import {
    VoteStrictStrategy,
    VoteMoyenneStrategy,
    VoteMedianeStrategy,
    VoteMajoriteAbsolueStrategy,
    VoteMajoriteRelativeStrategy
} from './VoteStrategies.js';

/**
 * Factory permettant de créer des stratégies de vote en fonction du mode spécifié.
 * <br>
 * DESIGN PATTERN : FACTORY
 */
class VoteStrategyFactory {
    /**
     * Crée une stratégie de vote en fonction du mode spécifié.
     * @param {string} mode - Le mode de vote pour créer la stratégie (strict, moyenne, médiane, majorité absolue, majorité relative).
     * @returns {VoteStrictStrategy|VoteMoyenneStrategy|VoteMedianeStrategy|VoteMajoriteAbsolueStrategy|VoteMajoriteRelativeStrategy|null} - Une instance de la stratégie de vote correspondante ou null si aucun mode correspondant n'est trouvé.
     */
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