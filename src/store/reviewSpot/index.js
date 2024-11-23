import { getSpotRequestStatusLabel as getSpotStatus } from "../../constant/enums";
import { getParkingSizeLabel as getParkingSize } from "../../constant/enums";
import { getRentUnitLabel as getRentUnit } from "../../constant/enums";
import { getSiteTypeLabel as getSiteType } from "../../constant/enums";
import { mayaClient } from '@/services/api';

const state = {
    editField: null,
    formdataSO: {
        userName: '',
        spotId: '',
        fullName: '',
        mobile: '',
        email: '',
        address: '',
        city: '',
        area: '',
        latitude: null,
        longitude: null,
      },
      formdataRent: {
        totalSlots: null,
        baseAmount: null,
        rentUnit: '',
        parkingSize: '',
        siteType: '',
      },
      formdataBooking: {
        startDate: '',
        endDate: '',
        lastCallDate: '',
        duration: '',
        spotrequestStatus: '',
        remark: '',
        },
    mobileError: '',
    latitudeError: '',
    longitudeError: '',
    hasError: false,
    errorMessage: '',
};
const mutations = {
    'set-error'(state, { field, message }) {
        state[field] = message;
    },
    'set-global-error'(state, errorMessage) {
        state.hasError = true;
        state.errorMessage = errorMessage;
    },
    'reset-global-Error'(state) {
        state.hasError = false;
        state.errorMessage = '';
    },
    'setFormData'(state, formData) {
        state.formdataSO = { ...state.formdataSO, ...formData.SO };
        state.formdataRent = { ...state.formdataRent, ...formData.Rent };
        state.formdataBooking = { ...state.formdataBooking, ...formData.Booking };
    },
};

const actions = {

    // Validate Latitude type
    validateLatitude({ commit, state }) {
        const latitudeValue = parseFloat(state.formdataSO.latitude);
        if (isNaN(latitudeValue)) {
            commit('set-error', {
                field: 'latitudeError',
                message: 'Latitude must be a valid float.',
            });
        } else {
            commit('set-error', { field: 'latitudeError', message: '' });
            state.formData.Latitude = latitudeValue;
        }
    },

    // Validate Longitude type
    validateLongitude({ commit, state }) {
        const longitudeValue = parseFloat(state.formdataSO.longitude);
        if (isNaN(longitudeValue)) {
            commit('set-error', {
                field: 'longitudeError',
                message: 'Longitude must be a valid float.',
            });
        } else {
            commit('set-error', { field: 'longitudeError', message: '' });
            state.formData.Longitude = longitudeValue;
        }
    },

    // Validate Mobile length
    validateMobile({ commit, state }) {
        const mobilePattern = /^\d{10}$/;
        if (!mobilePattern.test(state.formdataSO.mobile)) {
            commit('set-error', {
                field: 'mobileError',
                message: 'Mobile number must be exactly 10 digits.',
            });
        } else {
            commit('set-error', { field: 'mobileError', message: '' });
        }
    },

    getParkingSize(value) {
        return ParkingSizeEnum[value];
    },

    // Fetch data from API when the webpage is mounted
    initState({ commit }) {
        const spotInfo = mayaClient.get('/owner/spot-request?spot-id=' + this.formdataSO.spotId);
        const formData = {
            SO: {
                spotId: spotInfo.ID,
                userName: spotInfo.UserName,
                latitude: spotInfo.Latitude,
                longitude: spotInfo.Longitude,
                city: spotInfo.City,
                area: spotInfo.Area,
                fullName: spotInfo.FullName,
                mobile: spotInfo.Mobile,
                address: spotInfo.Address,
                email: spotInfo.EmailID,
            },
            Rent: {
                totalSlots: spotInfo.TotalSlots,
                baseAmount: spotInfo.BaseAmount, 
                rentUnit: getRentUnit(spotInfo.RentUnit),
                parkingSize: getParkingSize(spotInfo.Size),
                siteType: getSiteType(spotInfo.Type),
            },
            Booking: {
                duration: spotInfo.MinDuration,
                startDate: spotInfo.StartDate,
                endDate: spotInfo.EndDate,
                spotrequestStatus: getSpotStatus(spotInfo.Status),
                remark: spotInfo.Remark,
                lastCallDate: spotInfo.LastCallDate,
            },
        };
        console.log(spotInfo);
        commit('setFormData', formData);
    },

    // Validate all the Errors
    async validateFormFields({ dispatch }) {
        await Promise.all([
            dispatch('validateLatitude'),
            dispatch('validateLongitude'),
            dispatch('validateMobile'),
        ]);
    },

    // Check for errors in the state
    hasErrors({ state }) {
        return (
            state.mobileError ||
            state.latitudeError ||
            state.longitudeError
        );
    },
    // saveForm({ state }) {
    // }
    // -------------WORKING STAGE-------------------------
    
    // }
    // -------------------------------------------
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
};