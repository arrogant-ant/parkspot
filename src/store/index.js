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
import registerRequest from './registerRequest';
<<<<<<< HEAD
import reviewSpot from './reviewSpot';
=======
import spotRequests from './spotRequests';
>>>>>>> f63bf4da8088150d1d54607d31f6d68d39b2cad7

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
        registerRequest,
<<<<<<< HEAD
        reviewSpot,
=======
        spotRequests
>>>>>>> f63bf4da8088150d1d54607d31f6d68d39b2cad7
    },
});

export default store;
