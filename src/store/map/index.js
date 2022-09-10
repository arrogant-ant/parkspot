import { mapBoxClient, mayaClient } from '@/services/api';
import _ from 'lodash';

const state = {
    locations: [],
    selectedLocation: {
        city: '',
        state: '',
        country: '',
        locName: '',
    },
    mapConfig: {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [77.5946, 12.9716], //  default bengaluru lat, lng.
        zoom: 11,
    },
    center: null,
    totalPages: 1, // default page number
    srpResults: [],
    paginateSrpResults: [],
    recentSearch: [],
    recentID: 0,
};

const getters = {
    getMapConfig(state) {
        return state.mapConfig;
    },

    getLocationName(state) {
        return state.locations;
    },

    getNewMapCenter(state) {
        return state.center;
    },

    getLocDetails(state) {
        return {
            locDetails: state.selectedLocation,
            lnglat: state.center,
        };
    },

    getSrpResults(state) {
        return state.srpResults;
    },

    getPaginateSrpResults(state) {
        return state.paginateSrpResults;
    },

    getTotalPages() {
        return state.totalPages;
    },
};

const mutations = {
    'update-location'(state, data) {
        const newData = [...state.recentSearch, ...data];
        state.locations = [...newData];
    },

    'update-selected-location'(state, data) {
        state.selectedLocation.locName = data.place_name;

        const lsRecentID = JSON.parse(localStorage.getItem('recentID'));
        if (lsRecentID !== undefined) {
            state.recentID = lsRecentID;
        }

        const objData = {
            id: state.recentID,
            fromLS: true,
            ...data,
        };

        state.recentID = state.recentID + 1;
        localStorage.setItem('recentID', state.recentID);

        // performing LIFO in size of 3.
        if (state.recentSearch.length >= 3) {
            state.recentSearch.pop();
            state.recentSearch.unshift(objData);
        } else {
            state.recentSearch.unshift(objData);
        }

        // JSON used to store array as string in LS
        localStorage.setItem('recent', JSON.stringify(state.recentSearch));
    },

    'update-selected-city'(state, data) {
        state.selectedLocation.city = data;
    },

    'update-selected-state'(state, data) {
        state.selectedLocation.state = data;
    },

    'update-selected-country'(state, data) {
        state.selectedLocation.country = data;
    },

    'update-map-config'(state, center) {
        state.mapConfig.center = center;
        state.center = center;
    },

    'update-total-pages'(state, data) {
        state.totalPages = data;
    },

    'update-srp-results'(state, data) {
        state.srpResults = data;
    },

    'update-map-center'(state, data) {
        state.center = data;
    },

    'update-paginated-srp-data'(state, pageNum) {
        state.paginateSrpResults = [];
        for (let i = (pageNum - 1) * 3; i < pageNum * 3; i++) {
            state.paginateSrpResults.push(state.srpResults[i]);
        }
    },
};

const actions = {
    async searchLocation({ commit }, query) {
        const token =
            'pk.eyJ1IjoiaWFtZmlhc2NvIiwiYSI6ImNrOWZiankzdjA5d2kzbWp3NGNzNmIwaHAifQ.E2UwYdvpjc6yNoCmBjfTaQ';
        const url = `/geocoding/v5/mapbox.places/${query}.json?access_token=${token}&proximity=77.4977,12.9716`;
        const data = await mapBoxClient.get(url);
        const result = _.get(data, 'features', []);
        commit('update-location', result);
    },

    async srpCall({ state, commit }) {
        const data = await mayaClient.get(
            `/search?lat=${state.center[1]}&long=${state.center[0]}&start=20201115t1250&end=20201115t1400`,
        );
        if (data && Object.prototype.hasOwnProperty.call(data, 'Sites')) {
            commit('update-srp-results', data.Sites);
            commit('update-total-pages', data.Sites.length);
            commit('update-paginated-srp-data', 1); // paginated srp result stored
            state.srpResults = data.Sites;
        } else {
            throw new Error(
                'Prensently we are not active on your location.\nNo worries, we are expanding rapidly',
            );
        }
    },

    updateCenterSrp({ state, commit }) {
        const ys = state.paginateSrpResults.reduce((long, site) => {
            return long + site.Long;
        }, 0);
        const xs = state.paginateSrpResults.reduce((a, site) => {
            return a + site.Lat;
        }, 0);
        commit('update-map-config', [
            ys / state.paginateSrpResults.length,
            xs / state.paginateSrpResults.length,
        ]);
    },

    getFromRecent({ state }) {
        state.recentSearch = JSON.parse(localStorage.getItem('recent'));
        if (state.recentSearch === null) {
            return (state.recentSearch = []);
        }
        return state.recentSearch;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
