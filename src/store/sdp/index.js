import { mayaClient } from '@/services/api';
import { getPaymentAppTypeLabel } from '../../constant/enums';

const UPDATE_SITE_ENDPOINT = '/owner/update-site';
const state = {
    center: null,
    images: [],
    isAvailable: false,
    loading: true,
    ownerInfoDetails: null,
    paymentDetails: '',
    selectedSpot: [],
    spotDetails: null,
    thumbnail: [],
    title: '',
};

const getters = {};

const mutations = {
    'update-spot-details'(state, spotDetails) {
        state.spotDetails = spotDetails;
    },

    'update-owner-info-details'(state, ownerInfoDetails) {
        state.ownerInfoDetails = ownerInfoDetails;
    },

    'update-selected-spot'(state, spot) {
        state.selectedSpot = [];
        state.selectedSpot = [...state.selectedSpot, spot];
    },

    'update-is-available'(state, available) {
        if (available > 0) {
            state.isAvailable = true;
        } else {
            state.isAvailable = false;
        }
    },

    'update-loading'(state, loading) {
        state.loading = loading;
    },

    'update-image'(state, images) {
        state.images = [];
        state.images = images.map((img) => img.ImageURL);
    },

    'update-thumbnail-image'(state, image) {
        state.thumbnail = [];
        state.thumbnail = [image];
    },

    'update-title'(state, title) {
        state.title = title;
    },

    'update-map-center'(state, center) {
        state.center = center;
    },

    'update-payment-info'(state, paymentDetails) {
        state.paymentDetails = paymentDetails;
    },
};

const actions = {
    async getSpotDetails({ commit }, { spotId }) {
        commit('update-loading', true);
        const res = await mayaClient.get(`/site?site-id=${spotId}`);
        if (res.Site) {
            commit('update-spot-details', res.Site);
            commit('update-owner-info-details', res.User);
            // Extract account information
            let AccountDetails = res.Account;
            if (AccountDetails) {
                let paymentdetails = '';
                const paymentApp = getPaymentAppTypeLabel(
                    AccountDetails.PaymentApp,
                );
                if (
                    AccountDetails.account_number != '' &&
                    AccountDetails.ifsc_code != ''
                ) {
                    paymentdetails = `${AccountDetails.account_number}/${AccountDetails.ifsc_code}`;
                } else if (AccountDetails.UpiID != '') {
                    paymentdetails = `${AccountDetails.UpiID}/${paymentApp}`;
                } else if (AccountDetails.Mobile != '') {
                    paymentdetails = `${AccountDetails.Mobile}/${paymentApp}`;
                }
                commit('update-payment-info', paymentdetails);
            }
            const spot = {
                ID: res.Site.SiteID,
                Name: res.Site.Name,
                Address: res.Site.Address,
                Lat: res.Site.Lat,
                Long: res.Site.Long,
                Rate: res.Site.Rate,
                Distance: 0, // res.Site.Distance
            };
            commit('update-map-center', [spot.Long, spot.Lat]);
            commit('update-selected-spot', spot);
            commit('update-is-available', res.Site['SlotsAvailable']);
            commit('update-loading', false);
            commit('update-image', res.Site['SiteImages']);
            commit('update-thumbnail-image', res.Site['SiteImageURI']);
            commit('update-title', res.Site['Name']);
        } else {
            throw res.DisplayMsg;
        }
    },

    async updateAvailability({ state }, availableCount) {
        state.spotDetails.SlotsAvailable = availableCount;
        // Updating availabilty means agent connected with SO today.
        state.spotDetails.LastCallDate = new Date().toISOString();
        await mayaClient.post(UPDATE_SITE_ENDPOINT, state.spotDetails);
    },

    async updateLastCallDate({ state }, lastCallDate) {
        state.spotDetails.LastCallDate = lastCallDate.toISOString();
        await mayaClient.post(UPDATE_SITE_ENDPOINT, state.spotDetails);
    },

    async updateRemark({ state }, remark) {
        state.spotDetails.Remark = remark;
        await mayaClient.post(UPDATE_SITE_ENDPOINT, state.spotDetails);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
