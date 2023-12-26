import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import store from './store';

// Récupération et réhydratation de l'état du store Vuex depuis le localStorage lors du chargement de l'application
const savedState = localStorage.getItem('vuexState');
if (savedState) {
    store.replaceState(JSON.parse(savedState));
}

// Sauvegarde de l'état du store Vuex dans le localStorage lorsque le store est modifié
store.subscribe((mutation, state) => {
    localStorage.setItem('vuexState', JSON.stringify(state));
});

createApp(App).use(router).use(store).mount('#app');