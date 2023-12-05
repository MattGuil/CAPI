<template>
    <div>
        <div>
            <h2>BACKLOG #2</h2>
            <h1>barre de navigation</h1>
            <h3>Vote de <strong>LÉA</strong></h3>
        </div>
        <div id="cards">
            <div>
                <img
                    v-for="(card, index) in normalCards"
                    :key="index" 
                    :id="index"
                    :class="[{'selected' : isSelected(index)}]"
                    @click="selectCard(index)"
                    :src="'https://sgu.ovh/matt/CAPI/' + card"
                >
            </div>
            <div>
                <img
                    v-for="(card, index) in specialCards" 
                    :key="index" 
                    :id="index"
                    :class="[{'selected' : isSelected(index + 10)}]"
                    @click="selectCard(index + 10)"
                    :src="'https://sgu.ovh/matt/CAPI/' + card"
                >
            </div>
        </div>
        <div>
            <button @click="tovote">A VOTER !</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardsBoard',
    data() {
        return {
            cards: [
                'cartes_0.svg',
                'cartes_1.svg',
                'cartes_2.svg',
                'cartes_3.svg',
                'cartes_5.svg',
                'cartes_8.svg',
                'cartes_13.svg',
                'cartes_20.svg',
                'cartes_40.svg',
                'cartes_100.svg',
                'cartes_interro.svg',
                'cartes_cafe.svg'
            ],
            selectedCard: "",
        };
    },
    computed: {
        normalCards() {
            return this.cards.slice(0, 10);
        },
        specialCards() {
            return this.cards.slice(-2);
        },
    },
    methods: {
        isSelected(index) {
            return index == this.selectedCard;
        },
        selectCard(index) {
            this.selectedCard = index;
        },
        tovote() {
            if (this.selectedCard === 11) {
                this.$router.push('/coffeebreak');
            }
        }
    },
}
</script>

<style scoped>

h1, h2, h3 {
    padding-left: 5%;
    color: #1E1E1E;
}

h1 {
    font-family: ObjectSans-Heavy;
}

h2 {
    font-family: ObjectSans-Slanted;
    font-size: 1rem;
}

h3 {
    font-family: ObjectSans-Slanted;
    opacity: .8;
}

h3 strong {
    font-family: ObjectSans-HeavySlanted;
    font-size: 2rem;
}

#content {
    height: 100vh;
}

#content > div:first-child {
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

#content > div:nth-child(2) {
    height: 50%;
}

#content > div:last-child {
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 100px;
    margin: 8px;
    opacity: 50%;
    transition: all .2s ease;
}

img:hover {
    box-shadow: 4px 4px 4px 0px rgba(81, 140, 229, .8);
}

img.selected {
    opacity: 100;
    box-shadow: 8px 8px 4px 0px rgba(81, 140, 229, 0.40);
}

#cards {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#cards div:first-child {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-right: 50px;
}

#cards div:last-child {
    margin-left: 50px;
}

</style>