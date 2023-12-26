import { createStore } from 'vuex';
import Partie from '../classes/Partie.js';

const store = createStore({
    
    state: {
        partie: null,
    },

    mutations: {
        setPartieInstance(state, instance) {
            state.partie = instance;
        }
    },

    actions: {
        createPartieInstance({ commit }, { mode, players, backlogs }) {
            const partie = new Partie(mode, players, backlogs);
            commit('setPartieInstance', partie);
        },

        updatePartieInstance({ commit }, newPartie) {
            commit('setPartieInstance', newPartie);
        }
    },

    getters: {
        getPartieInstance: state => state.partie
    },

});

export default store;