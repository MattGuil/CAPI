<template>
    <div>
        <div>
            <h2>BACKLOG #{{ currentBacklogDisplay }}</h2>
            <h1>{{ currentBacklogLabel }}</h1>
            <h3>Vote de <strong>{{ currentPlayerPseudo }}</strong></h3>
        </div>
        <div id="cards">
            <div>
                <img
                    v-for="key in normalCards"
                    :key="key" 
                    :id="key"
                    :class="[{'selected' : cards[key].isSelected}]"
                    @click="clickOnCard(key)"
                    :src="'https://sgu.ovh/matt/CAPI/' + cards[key].fileName"
                >
            </div>
            <div>
                <img
                    v-for="key in specialCards" 
                    :key="key" 
                    :id="key"
                    :class="[{'selected' : cards[key].isSelected}]"
                    @click="clickOnCard(key)"
                    :src="'https://sgu.ovh/matt/CAPI/' + cards[key].fileName"
                >
            </div>
        </div>
        <div>
            <button @click="tovote" :disabled="selectedCard === undefined">A VOTÉ !</button>
        </div>
    </div>
</template>

<script>
import Card from '@/classes/Card.js';

export default {
    name: 'CardsBoard',
    data() {
        return {
            partie: null,
            currentBacklogDisplay: undefined,
            currentBacklogLabel: undefined,
            currentPlayerPseudo: undefined,
            cards: {
                0: new Card('cartes_0.png'),
                1: new Card('cartes_1.png'),
                2: new Card('cartes_2.png'),
                3: new Card('cartes_3.png'),
                5: new Card('cartes_5.png'),
                8: new Card('cartes_8.png'),
                13: new Card('cartes_13.png'),
                20: new Card('cartes_20.png'),
                40: new Card('cartes_40.png'),
                100: new Card('cartes_100.png'),
                '?': new Card('cartes_interro.png'),
                'coffee': new Card('cartes_cafe.png'),
            },
            selectedCard: undefined,
        };
    },
    mounted() {
        this.partie = this.$store.state.partie;
        this.currentBacklogDisplay = this.partie.currentBacklog + 1;
        this.currentBacklogLabel = this.partie.backlogs[this.partie.currentBacklog]['label'];
        this.currentPlayerPseudo = this.partie.players[this.partie.currentPlayer]['pseudo'];
    },
    computed: {
        normalCards() {
            return Object.keys(this.cards).filter(key => !isNaN(key));
        },
        specialCards() {
            return Object.keys(this.cards).filter(key => isNaN(key));
        },
    },
    methods: {
        isSelected(card) {
            return card.isSelected();
        },
        clickOnCard(key) {
            Object.keys(this.cards).forEach(key => {
                this.cards[key].deselect();
            });
            this.cards[key].select();
            this.selectedCard = key;
        },
        tovote() {
            this.partie.currentPlayerVote(this.selectedCard);
            this.$store.dispatch('updatePartieInstance', this.partie);

            if (!this.partie.allPlayersVoted()) {
                this.partie.currentPlayer++;
                this.$store.dispatch('updatePartieInstance', this.partie);
                this.$router.push('/dashboard');
            } else {
                this.partie.computeVote();
                this.$store.dispatch('updatePartieInstance', this.partie);
                if (!this.partie.isOver()) {
                    this.partie.currentBacklog++;
                    this.$store.dispatch('updatePartieInstance', this.partie);
                    this.$router.push('/dashboard');
                } else {
                    this.$router.push('/results');
                }
            }
        },
    },
}
</script>

<style scoped>

h1, h2, h3 {
    padding-left: 5%;
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