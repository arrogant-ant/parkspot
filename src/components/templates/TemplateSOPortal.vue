<template>
    <RegisterRequestForm
        :formSubmitted="formSubmitted"
        @submitForm="submitForm"
    ></RegisterRequestForm>
</template>

<script>
import BodyWrapper from '../extras/BodyWrapper.vue';
import RegisterRequestForm from '../so-portal/RegisterRequestForm.vue';

export default {
    name: 'TemplateParkingSpot',
    components: {
        BodyWrapper,
        RegisterRequestForm,
    },
    emits: ['finalSubmit'],
    data() {
        return {
            formSubmitted: false,
        };
    },
    methods: {
        submitForm() {
            this.$emit('finalSubmit');
        },
    },
};
</script>

<style lang="scss" scoped></style>
