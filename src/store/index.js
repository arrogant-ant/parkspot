import Vue from 'vue';
import Vuex from 'vuex';
import device from './device';
import blog from './blog';
import user from './user';
import map from './map';
import sdp from './sdp';
import config from './config';
import searchPortal from './searchPortal';
import bookingPortal from './bookingPortal';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        device,
        blog,
        user,
        map,
        sdp,
        searchPortal,
        bookingPortal,
        config,
    },
});

export default store;
