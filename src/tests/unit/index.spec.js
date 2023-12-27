import { createApp } from 'vue';
import { mount } from '@vue/test-utils'

import Menu from '../../views/Menu.vue';
import store from '../../store';

describe('création de la vue Menu', () => {
    let wrapper;

    beforeEach(async () => {
        const app = createApp(Menu);
        app.use(store);

        wrapper = await mount(app);
    });

    it('renders without errors', () => {
        expect(wrapper).toBeTruthy();
    });
});