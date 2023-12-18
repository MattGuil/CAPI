<template>
    <div>
        <div id="leftDiv">
            <div>
                <h1>ESTIMATIONS<br>FINALES</h1>
                <h2>par {{ listPlayers }}</h2>
            </div> 
            <div>
                <div v-for="(backlog, index) in backlogs" :key="index" class="backlogs">
                    <p>{{ backlog[0] }}</p>
                    <div>
                        <p>{{ backlog[1] }}</p>
                    </div>
                </div>
            </div>
            <div>
                <button>GÉNERER LE FICHIER JSON</button>
                <button @click="this.$router.push('/');">MENU</button>
            </div>
        </div>
        <div id="rightDiv">
            <div>
                <h3>STATS</h3>
                <p><strong>3</strong> TOURS</p>
                <p><strong>5</strong> PAUSES CAFÉ</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultsVue',
    data() {
        return {
            players: [
                "CAMILLE",
                "LUCAS",
                "ÉLÉONORE",
                "ANTOINE",
                "LÉA",
                "HUGO",
            ],
            backlogs: [],
        };
    },
    mounted() {
        this.backlogs = JSON.parse(localStorage.getItem('partie')).backlogs;
    },
    computed: {
        listPlayers() {
            return this.players.join(", ");
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
    justify-content: space-between;
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