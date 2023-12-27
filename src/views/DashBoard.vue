<template>
    <div>
        <div id="leftDiv">
            <p>mode : <strong>{{ mode }}</strong></p>
            <div>
                <h2>BACKLOG #{{ parseInt(currentBacklog) + 1 }}</h2>
                <h1>{{ currentBacklogLabel }}</h1>
            </div> 
            <div>
                <div v-for="(player, index) in players" :key="index" class="player-status">
                    <div :class="{ 'hasVoted': player['hasVoted'] }"></div>
                    <p>{{ player['pseudo'] }}</p>
                </div>
            </div>
            <div>
                <p><strong>{{ currentPlayerPseudo }}</strong>, à ton tour de voter.</p>
                <button @click="this.$router.push('/cardsboard');">></button>
            </div>
        </div>
        <div id="rightDiv">
            <div v-for="(backlog, index) in backlogs" 
                :key="index" 
                class="backlog-status"
                :class="{ 
                    'notProcessed': index != parseInt(currentBacklog) && backlog['state'] != 1 && backlog['state'] != 2,
                    'current': index == parseInt(currentBacklog),
                    'processed': backlog['state'] == 1,
                    'loop':  backlog['state'] == 2,
                }"
            >
                <div></div>
                <p>{{ backlog['label'] }}</p>
                <div>
                    <p v-if="backlog['state'] == 1">{{ backlog['value'] }}</p>
                    <img v-if="backlog['state'] == 2" src="../assets/icons/redo.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DashBoard',
    data() {
        return {
            partie: null,
            mode: undefined,
            currentBacklog: 0,
            currentPlayer: 0,
            backlogs: [],
            players: [],
            currentBacklogLabel: undefined,
            currentPlayerPseudo: undefined,
        };
    },
    mounted() {
        this.partie = this.$store.getters.getPartieInstance;
        this.mode = this.partie.mode;
        this.currentBacklog = this.partie.currentBacklog;
        this.currentPlayer = this.partie.currentPlayer;
        this.backlogs = this.partie.backlogs;
        this.players = this.partie.players;
        this.currentBacklogLabel = this.backlogs[this.currentBacklog]['label'];
        this.currentPlayerPseudo = this.players[this.currentPlayer]['pseudo'];
    },
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

#leftDiv {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#leftDiv > p {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(15%, 50%);
    font-family: ObjectSans-Slanted !important;
}

.player-status {
    display: flex;
    align-items: center;
    padding: 5px;
}

.player-status div {
    width: 24px;
    height: 24px;
    background-color: #333030;
    opacity: .34;
    border-radius: 5px;
    margin-right: 10px;
}

.player-status div.hasVoted {
    background-color: #88EB65;
    opacity: 1;
}

#leftDiv p {
    font-family: ObjectSans-HeavySlanted;
}

#leftDiv > div:last-child {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(81, 140, 229, .4);
    border-radius: 5px;
}

#leftDiv > div:last-child p {
    font-family: ObjectSans-Regular;
    margin-left: 25px;
    font-size: .9rem;
}

#leftDiv > div:last-child p strong {
    font-family: ObjectSans-Heavy;
}

#leftDiv > div:last-child button {
    width: 50px;
    padding: 0;
    font-size: 2rem;
}

h1 {
    font-family: ObjectSans-Heavy;
}

h2 {
    font-family: ObjectSans-Slanted;
    font-size: 1rem;
}

#rightDiv {
    background-color: #518CE5;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.backlog-status {
    position: relative;
    flex-grow: 1;
    font-family: ObjectSans-Heavy;
    display: flex;
    align-items: center;
    width: 80%;
    opacity: 1;
}

.backlog-status > div:first-child {
    width: 8px;
    height: 98%;
    background-color: white;
    margin-right: 40px;
}

.backlog-status > p {
    position: absolute;
    left: 8%;
}

.backlog-status > div:last-child {
    position: absolute;
    right: 45%;
    width: 32px;
    height: 32px;
    background-color: white;
    opacity: 1;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.backlog-status > div:last-child p {
    color: white;
}

.backlog-status > div:last-child img {
    width: 50%;
}

.backlog-status.notProcessed {
    opacity: .5;
}

.backlog-status.notProcessed > div:last-child, .backlog-status.current:not(.loop) > div:last-child {
    display: none;
}

.backlog-status.current > div:first-child {
    margin-left: 8px;
}

.backlog-status.processed {
    color: #88EB65;
}

.backlog-status.processed > div:first-child {
    background-color: #88EB65;
}

.backlog-status.processed > div:last-child {
    background-color: #88EB65;
}

.backlog-status.loop {
    color: #F88DF0;
}

.backlog-status.loop > div:first-child {
    background-color: #F88DF0;
}

.backlog-status.loop > div:last-child {
    background-color: #F88DF0;
}

</style>
