import { mount } from '@vue/test-utils'
import { describe } from 'vitest';

import Menu from "../../views/Menu.vue";
import Dashboard from "../../views/Dashboard.vue";
import Cardsboard from "../../views/Cardsboard.vue";
import CoffeeBreak from "../../views/CoffeeBreak.vue";
import Results from "../../views/Results.vue";

describe('Menu', () => {
    it('est monté avec succès', () => {
        const wrapper = mount(Menu);

        expect(wrapper.exists()).toBe(true);
    });
});

describe('Dashboard', () => {
    it('est monté avec succès', () => {
        const wrapper = mount(Dashboard);

        expect(wrapper.exists()).toBe(true);
    });
});

describe('Cardsboard', () => {
    it('est monté avec succès', () => {
        const wrapper = mount(Cardsboard);

        expect(wrapper.exists()).toBe(true);
    });
});

describe('CoffeeBreak', () => {
    it('est monté avec succès', () => {
        const wrapper = mount(CoffeeBreak);

        expect(wrapper.exists()).toBe(true);
    });
});

describe('Results', () => {
    it('est monté avec succès', () => {
        const wrapper = mount(Results);

        expect(wrapper.exists()).toBe(true);
    });
});