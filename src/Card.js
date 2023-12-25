// eslint-disable-next-line no-unused-vars
class Card {
    constructor(fileName) {
        this.isSelected = false;
        this.fileName = fileName;
    }

    isSelected() {
        return this.isSelected;
    }

    select() {
        this.isSelected = true;
    }

    deselect() {
        this.isSelected = false;
    }
}

export default Card;