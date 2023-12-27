import { createApp } from 'vue';
import { mount } from '@vue/test-utils'

import Menu from '../../views/Menu.vue';
import DashBoard from '../../views/DashBoard.vue';
import CardsBoard from '../../views/CardsBoard.vue';
import Chart from '../../views/Chart.vue';
import CoffeeBreak from '../../views/CoffeeBreak.vue';
import Results from '../../views/Results.vue';

import store from '../../store';


describe('Menu.vue', () => {
    let wrapper;

    beforeEach(async () => {
        const app = createApp(Menu);
        app.use(store);

        wrapper = await mount(app);
    });

    it('montée avec succès.', () => {
        expect(wrapper).toBeTruthy();
    });
});

describe('DashBoard.vue', () => {
    let wrapper;

    beforeEach(async () => {
        const app = createApp(DashBoard);
        app.use(store);

        wrapper = await mount(app);
    });

    it('montée avec succès.', () => {
        expect(wrapper).toBeTruthy();
    });
});

describe('CardsBoard.vue', () => {
    let wrapper;

    beforeEach(async () => {
        const app = createApp(CardsBoard);
        app.use(store);

        wrapper = await mount(app);
    });

    it('montée avec succès.', () => {
        expect(wrapper).toBeTruthy();
    });
});

describe('Chart.vue', () => {
    let wrapper;

    beforeEach(async () => {
        const app = createApp(Chart);
        app.use(store);

        wrapper = await mount(app);
    });

    it('montée avec succès.', () => {
        expect(wrapper).toBeTruthy();
    });
});

describe('CoffeeBreak.vue', () => {
    let wrapper;

    beforeEach(async () => {
        const app = createApp(CoffeeBreak);
        app.use(store);

        wrapper = await mount(app);
    });

    it('montée avec succès.', () => {
        expect(wrapper).toBeTruthy();
    });
});

describe('Results.vue', () => {
    let wrapper;

    beforeEach(async () => {
        const app = createApp(Results);
        app.use(store);

        wrapper = await mount(app);
    });

    it('montée avec succès.', () => {
        expect(wrapper).toBeTruthy();
    });
});