import { createStore } from 'vuex';
import Partie from '../classes/Partie.js';

const store = createStore({
    
    state: {
        partie: null,
    },

    mutations: {
        setPartieInstance(state, instance) {
            state.partie = instance;
        },
    },

    actions: {
        createPartieInstance({ commit }) {
            const partie = new Partie();
            commit('setPartieInstance', partie);
        },

        loadPartieInstance({ state, commit }, {mode, players, backlogs}) {
            let loadedPartie = state.partie.load(mode, players, backlogs);
            commit('setPartieInstance', loadedPartie);
        },

        updatePartieInstance({ commit }, updatedPartie) {
            commit('setPartieInstance', updatedPartie);
        },
    },

    getters: {
        getPartieInstance: state => state.partie
    },

});

export default store;