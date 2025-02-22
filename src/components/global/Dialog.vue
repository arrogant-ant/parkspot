<template>
    <div v-if="visible" class="dialog-overlay">
        <div class="dialog-content">
            <b-field label="Refund Amount">
                <b-input
                    type="number"
                    v-model="refundAmount"
                    :max="paymentAmount"
                ></b-input>
            </b-field>
            <p v-if="refundAmount > paymentAmount" class="help is-danger">
                Refund amount cannot exceed payment amount.
            </p>

            <b-field>
                <b-checkbox v-model="securityDeposit"
                    >Security Deposit</b-checkbox
                >
            </b-field>

            <div class="buttons">
                <b-button @click="cancel">Cancel</b-button>
                <b-button
                    type="is-primary"
                    @click="confirm"
                    :disabled="refundAmount > paymentAmount"
                >
                    Confirm
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        visible: Boolean,
        paymentAmount: Number,
    },
    data() {
        return {
            refundAmount: null,
            securityDeposit: false,
        };
    },
    methods: {
        cancel() {
            this.$emit('cancel');
        },
        confirm() {
            this.$emit('confirm', {
                refundAmount: this.refundAmount,
                securityDeposit: this.securityDeposit,
            });
        },
    },
};
</script>

<style scoped>
.dialog-overlay {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 40;
}

.dialog-content {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    width: 28%;
}

.buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
}
</style>
