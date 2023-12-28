<template>
    <div>
        <div id="leftDiv">
            <div>
                <h1>ESTIMATIONS<br>FINALES</h1>
                <h2>par {{ listPlayers }}</h2>
            </div> 
            <div>
                <div v-for="(backlog, index) in backlogs" :key="index" class="backlogs">
                    <p>{{ backlog['label'] }}</p>
                    <div>
                        <p>{{ backlog['value'] }}</p>
                    </div>
                </div>
            </div>
            <div>
                <button @click="generateFinalJSON">GÉNERER LE FICHIER JSON</button>
                <button @click="this.$router.push('/');">MENU</button>
            </div>
        </div>
        <div id="rightDiv">
            <div>
                <h3>STATS</h3>
                <p><strong>{{ nbCoffeeBreak }}</strong> PAUSES CAFÉ</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultsVue',
    data() {
        return {
            players: [],
            backlogs: [],
        };
    },
    mounted() {
        this.partie = this.$store.getters.getPartieInstance;
        this.nbCoffeeBreak = this.partie.nbCoffeeBreak;
        this.players = this.partie.players;
        this.backlogs = this.partie.backlogs;
    },
    computed: {
        listPlayers() {
            let playersTab = [];
            this.players.forEach(player => {
                playersTab.push(player['pseudo']);
            });
            return playersTab.join(', ');
        }
    },
    methods: {
        generateFinalJSON() {
            const mode = this.$store.getters.getPartieInstance ? this.$store.getters.getPartieInstance.mode : null;
            const backlogs = this.$store.getters.getPartieInstance? this.$store.getters.getPartieInstance.backlogs : null;

            if (mode && backlogs) {
                const data = { mode, backlogs };
                const jsonData = JSON.stringify(data);

                const blob = new Blob([jsonData], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'backlogs-completed.json';
                link.click();
                URL.revokeObjectURL(url);
            }
        }
    }
}
</script>

<style scoped>

#content {
    display: flex;
    width: 100%;
    height: 100%;
}

#leftDiv, #rightDiv {
    width: 50%;
}

#leftDiv > div {
    height: 33%;
    display: flex;
    flex-direction: column;
}

#leftDiv > div:first-child {
    justify-content: center;
}

#leftDiv > div:nth-child(2) {
    justify-content: center;
    align-items: center;
}

#leftDiv > div:last-child {
    justify-content: center;
    align-items: center;
}

#leftDiv > div:last-child button:first-child {
    margin-bottom: 10px;
    background-color: #F88DF0;
}

#leftDiv > div:last-child button:first-child:hover {
    box-shadow: 4px 4px 4px 0px rgba(248, 141, 240, .8);
}

h1, h2 {
    padding-left: 10%;
}

h1 {
    font-family: ObjectSans-Heavy;
    line-height: .8;
}

h2 {
    font-family: ObjectSans-Slanted;
    font-size: 1rem;
    opacity: .5;
    margin-top: 10px;
}

h3 {
    font-family: ObjectSans-Heavy;
}

.backlogs {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
}

.backlogs > div:last-child {
    width: 48px;
    height: 32px;
    background-color: #518CE5;
    color: white;
    font-family: ObjectSans-Heavy;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}

#rightDiv {
    background-color: #518CE5;
    color: white;
    display: flex;
    align-items: flex-end;
}

#rightDiv > div {
    margin: 5%;
    opacity: .8;
}

</style>