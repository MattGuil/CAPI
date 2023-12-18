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
                <button id="playButton" @click="generatePartie">JOUER</button>
            </div>
        </div>
        <div id="rightDiv">
            <InputsBacklogs ref="InputsBacklogs"/>
        </div>
    </div>
</template>

<script>
import SlcNbJoueurs from '../components/SelecteurNbJoueurs.vue';
import SlcModeJeu from '../components/SelecteurModeJeu.vue';
import InputsBacklogs from '../components/InputsBacklogs.vue';

import Partie from '@/patterns.js';

export default {
name: 'MenuVue',
components: {
    SlcNbJoueurs,
    SlcModeJeu,
    InputsBacklogs
},
methods: {
    generatePartie() {
        // instanciation du Singleton Partie
        let partie = new Partie();

        // récupération du mode de jeu sélectionné, de la liste joueurs et des backlogs
        partie.mode = this.$refs.SelecteurModeJeu.generateJSON();
        partie.players = this.$refs.SelecteurNbJoueurs.generateJSON();
        partie.backlogs = this.$refs.InputsBacklogs.generateJSON();

        // sauvegarde de l'objet Partie dans le local storage
        localStorage.setItem('partie', JSON.stringify(partie));

        this.$router.push('/dashboard');
    },
    importBacklogs() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.addEventListener('change', event => {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = () => {
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

    position: absolute;
    right: 10%; 
    transform-origin: 89% 50%;
    transform: rotate(-90deg);
}

#rightDiv {
    height: 100%;
    background-color: #518CE5;
    display: flex;
    justify-content: center;
    align-items: center;
}

#rightDiv img {
    width: 32px;
    position: absolute;
    transform-origin: 89% 50%;
    top: 15px;
}
}

</style>