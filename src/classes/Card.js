/**
 * La classe représentant une carte.
 */
class Card {
    /**
     * Constructeur de la classe Card.
     * @param {string} fileName - Le nom du fichier associé à la carte.
     */
    constructor(fileName) {
        this.isSelected = false;
        this.fileName = fileName;
    }

    /**
     * Vérifie si la carte est sélectionnée.
     * @returns {boolean} - True si la carte est sélectionnée, sinon False.
     */
    isSelected() {
        return this.isSelected;
    }

    /**
     * Sélectionne la carte.
     */
    select() {
        this.isSelected = true;
    }

    /**
     * Désélectionne la carte.
     */
    deselect() {
        this.isSelected = false;
    }
}

export default Card;