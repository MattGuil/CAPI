<template>
    <div>
        <div id="leftDiv">
            <div>
                <p id="title">PLANNING<br>POKER</p>
            </div> 
            <div>
                <SlcModeJeu ref="SelecteurModeJeu"/>
                <SlcNbJoueurs ref="SelecteurNbJoueurs"/>
                <p>BACKLOGS</p>
            </div>
            <div>
                <button id="playButton" @click="generateJSON">JOUER</button>
            </div>
        </div>
        <div id="rightDiv">
            <InputsBacklogs ref="InputsBacklogs"/>
        </div>
    </div>
</template>

<script>
import SlcNbJoueurs from '../components/SelecteurNbJoueurs.vue'
import SlcModeJeu from '../components/SelecteurModeJeu.vue'
import InputsBacklogs from '../components/InputsBacklogs.vue';

export default {
name: 'MenuVue',
components: {
    SlcNbJoueurs,
    SlcModeJeu,
    InputsBacklogs
    // Cartes,
},
methods: {
    generateJSON() {
    console.log(JSON.parse(this.$refs.SelecteurModeJeu.generateJSON()));
    console.log(JSON.parse(this.$refs.SelecteurNbJoueurs.generateJSON()));
    console.log(JSON.parse(this.$refs.InputsBacklogs.generateJSON()));
    },
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
}

#leftDiv > div:first-child {
    justify-content: flex-start;
    align-items: center;
    padding-left: 10%;
}

#title {
    font-family: ObjectSans-Heavy;
    font-size: 3rem;
    line-height: .8;
}

#leftDiv > div:nth-child(2) {
    position: relative;
    width: 100%;
    padding-left: 10%;
}

#leftDiv > div:last-child {
    justify-content: center;
    align-items: center;
} 

#rightDiv {
    height: 100%;
    background-color: #518CE5;
    display: flex;
    justify-content: center;
    align-items: center;
}

#leftDiv > div:nth-child(2) > p {
    position: absolute;
    right: 10%; 
    transform-origin: 89% 50%;
    transform: rotate(-90deg);
}

</style>