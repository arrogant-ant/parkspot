<template>
    <section>
        <!-- payment link button -->
        <div class="payment-link-btn-wrapper">
            <AtomButton @click.native="getPaymentLink">
                Generate Payment Link
            </AtomButton>
        </div>
        <div class="payment-link-detail-container" v-if="paymentDetails">
            <p>
                {{ paymentDetails.PayUrl }}
            </p>
            <AtomTooltip :label="toolTipLabel">
                <AtomIcon
                    class="copy-icon"
                    :icon="'content-copy'"
                    @click.native="copyUrl"
                ></AtomIcon>
            </AtomTooltip>
        </div>
        <!---  Booking details-->
        <div class="booking-card">
            <div class="card-top">
                <h3 class="sub-heading">Booking Details</h3>
                <div class="action-group">
                    <span class="edit-icon">
                        <AtomIcon
                            @click.native="enableEdit('Booking Details')"
                            :icon="'pencil'"
                            size=""
                        >
                        </AtomIcon>
                    </span>
                    <span class="save-icon">
                        <AtomIcon
                            @click.native="saveField"
                            :icon="'content-save-outline'"
                            size=""
                        >
                        </AtomIcon>
                    </span>
                    <span class="cancel-icon">
                        <AtomIcon
                            @click.native="cancelField"
                            :icon="'close'"
                            size=""
                        >
                        </AtomIcon>
                    </span>
                </div>
            </div>
            <div class="card-body">
                <div class="col-wrapper">
                    <div class="field-col">
                        <p>
                            <strong> Booking ID: </strong>
                        </p>
                        <p>
                            <strong> Site ID:</strong>
                        </p>
                        <p>
                            <strong> Status:</strong>
                        </p>

                        <p>
                            <strong> Remark:</strong>
                        </p>
                    </div>
                    <div class="value-col">
                        <p>
                            {{ currBookingDetails.Booking.ID }}
                        </p>
                        <a :href="sdpURL" target="_blank">
                            <p>
                                {{ currBookingDetails.Booking.SiteID }}
                            </p>
                        </a>
                        <div
                            v-if="editField === 'Booking Details'"
                            class="select"
                        >
                            <select v-model="currBookingDetails.Booking.Status">
                                <option
                                    v-for="(
                                        label, index
                                    ) in bookingStatusLabels"
                                    :key="label"
                                    :value="index"
                                >
                                    {{ label }}
                                </option>
                            </select>
                        </div>
                        <p v-else>
                            {{
                                getBookingStatusLabel(
                                    currBookingDetails.Booking.Status,
                                )
                            }}
                        </p>
                        <span
                            class="input-field"
                            v-if="editField === 'Booking Details'"
                        >
                            <AtomInput
                                :size="'is-small'"
                                type="text"
                                v-model="currBookingDetails.Booking.Remark"
                            >
                            </AtomInput>
                        </span>
                        <p v-else>
                            {{ currBookingDetails.Booking.Remark }}
                        </p>
                    </div>
                </div>

                <div class="col-wrapper">
                    <div class="field-col">
                        <p>
                            <strong> Created At:</strong>
                        </p>

                        <p>
                            <strong> Started At:</strong>
                        </p>

                        <p>
                            <strong> End Date:</strong>
                        </p>

                        <p><strong> Agent </strong></p>
                    </div>
                    <div class="value-col">
                        <p>
                            {{
                                getFormattedDate(
                                    currBookingDetails.Booking.CreatedAt,
                                )
                            }}
                        </p>
                        <div
                            class="input-field"
                            v-if="editField === 'Booking Details'"
                        >
                            <AtomDatePicker
                                :size="'is-small'"
                                :assignedDate="
                                    currBookingDetails.Booking.StartTime
                                "
                                class="column-width"
                                @changed="onStartDateUpdate"
                            >
                            </AtomDatePicker>
                        </div>
                        <p v-else>
                            {{
                                getFormattedDate(
                                    currBookingDetails.Booking.StartTime,
                                )
                            }}
                        </p>
                        <div
                            class="input-field"
                            v-if="editField === 'Booking Details'"
                        >
                            <AtomDatePicker
                                :size="'is-small'"
                                :assignedDate="
                                    currBookingDetails.Booking.EndTime
                                "
                                class="column-width"
                                @changed="onEndDateUpdate"
                            >
                            </AtomDatePicker>
                        </div>
                        <p v-else>
                            {{
                                getFormattedDate(
                                    currBookingDetails.Booking.EndTime,
                                )
                            }}
                        </p>

                        <div
                            class="select"
                            v-if="editField === 'Booking Details'"
                        >
                            <select v-model="selectedAgent">
                                <option disabled value="">Select agent</option>
                                <option
                                    v-for="(label, index) in agents"
                                    :key="label.UserName"
                                    :value="index"
                                >
                                    {{ label.FullName.split(' ')[0] }}
                                </option>
                            </select>
                        </div>
                        <p v-else>
                            {{
                                getAgentName(
                                    agents,
                                    this.currBookingDetails.Booking
                                        .AgentUserName,
                                )
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- rent details-->
        <div class="booking-card">
            <div class="card-top">
                <h3 class="sub-heading">Rent Details</h3>
                <div class="action-group">
                    <span class="edit-icon">
                        <AtomIcon
                            @click.native="enableEdit('Rent Details')"
                            :icon="'pencil'"
                            size=""
                        >
                        </AtomIcon>
                    </span>
                    <span class="save-icon">
                        <AtomIcon
                            @click.native="saveField"
                            :icon="'content-save-outline'"
                            size=""
                        >
                        </AtomIcon>
                    </span>
                    <span class="cancel-icon">
                        <AtomIcon
                            @click.native="cancelField"
                            :icon="'close'"
                            size=""
                        >
                        </AtomIcon>
                    </span>
                </div>
            </div>
            <div class="card-body">
                <div class="col-wrapper">
                    <div class="field-col">
                        <p>
                            <strong> Rent: </strong>
                        </p>
                        <p>
                            <strong> SO Charges: </strong>
                        </p>
                        <p><strong> Priodicity: </strong></p>
                    </div>
                    <div class="value-col">
                        <div
                            class="input-field"
                            v-if="editField === 'Rent Details'"
                        >
                            <AtomInput
                                :size="'is-small'"
                                type="number"
                                v-model.number="currBookingDetails.Booking.Rent"
                                @input="validateRentInput"
                                :class="{ 'is-danger': rentValidationError }"
                            ></AtomInput>
                            <p
                                v-if="rentValidationError"
                                class="validation-error"
                            >
                                {{ rentValidationError }}
                            </p>
                        </div>
                        <p v-else>
                            {{ currBookingDetails.Booking.Rent }}
                        </p>
                        <div
                            class="input-field"
                            v-if="editField === 'Rent Details'"
                        >
                            <AtomInput
                                :size="'is-small'"
                                type="number"
                                v-model.number="
                                    currBookingDetails.Booking.BaseAmount
                                "
                                @input="validateSOChargesInput"
                                :class="{
                                    'is-danger': soChargesValidationError,
                                }"
                            ></AtomInput>
                            <p
                                v-if="soChargesValidationError"
                                class="validation-error"
                            >
                                {{ soChargesValidationError }}
                            </p>
                        </div>
                        <p v-else>
                            {{ currBookingDetails.Booking.BaseAmount }}
                        </p>
                        <div
                            class="input-field"
                            v-if="editField === 'Rent Details'"
                        >
                            <select
                                v-model="
                                    currBookingDetails.Booking.PaymentPeriod
                                "
                            >
                                <option
                                    v-for="(
                                        label, index
                                    ) in paymentPeriodicityLabels"
                                    :key="label"
                                    :value="index"
                                >
                                    {{ label }}
                                </option>
                            </select>
                        </div>
                        <p v-else>
                            {{
                                getPaymentPeriodicityLabel(
                                    currBookingDetails.Booking.PaymentPeriod,
                                )
                            }}
                        </p>
                    </div>
                </div>
                <div class="col-wrapper">
                    <div class="field-col">
                        <p>
                            <strong> ConvenienceFee: </strong>
                        </p>
                        <p>
                            <strong> Security Deposit: </strong>
                        </p>
                        <p>
                            <strong> Rent Cycle: </strong>
                        </p>
                    </div>
                    <div class="value-col">
                        <div
                            class="input-field"
                            v-if="editField === 'Rent Details'"
                        >
                            <AtomInput
                                :size="'is-small'"
                                type="number"
                                v-model.number="
                                    currBookingDetails.Booking.ConvenienceFee
                                "
                            ></AtomInput>
                        </div>
                        <p v-else>
                            {{ currBookingDetails.Booking.ConvenienceFee }}
                        </p>
                        <div
                            class="input-field"
                            v-if="editField === 'Rent Details'"
                        >
                            <AtomInput
                                :size="'is-small'"
                                type="number"
                                v-model.number="
                                    currBookingDetails.Booking.SecurityDeposit
                                "
                            ></AtomInput>
                        </div>
                        <p v-else>
                            {{ currBookingDetails.Booking.SecurityDeposit }}
                        </p>
                        <div
                            class="input-field"
                            v-if="editField === 'Rent Details'"
                        >
                            <AtomInput
                                :size="'is-small'"
                                type="number"
                                v-model.number="
                                    currBookingDetails.Booking.RentCycle
                                "
                            ></AtomInput>
                        </div>
                        <p v-else>
                            {{ currBookingDetails.Booking.RentCycle }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- VO details-->
        <div class="booking-card">
            <h3 class="sub-heading">VO Details</h3>
            <div class="card-body">
                <div class="col-wrapper">
                    <div class="field-col">
                        <p>
                            <strong> UserName: </strong>
                        </p>
                        <p>
                            <strong> Full Name: </strong>
                        </p>
                        <p>
                            <strong> Mobile: </strong>
                        </p>
                    </div>
                    <div class="value-col">
                        <p>
                            {{ currBookingDetails.Booking.UserName }}
                        </p>
                        <p>
                            {{ currBookingDetails.Booking.Name }}
                        </p>
                        <p>
                            {{ currBookingDetails.Booking.Mobile }}
                        </p>
                    </div>
                </div>
                <div class="col-wrapper">
                    <div class="field-col">
                        <p>
                            <strong> Vehicle Number:</strong>
                        </p>
                        <p>
                            <strong> Email: </strong>
                        </p>
                    </div>
                    <div class="value-col">
                        <p>
                            {{ currBookingDetails.Booking.VehicleNumber }}
                        </p>
                        <p>
                            {{ currBookingDetails.Booking.EmailID }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <hr />
        <!-- Payments-->
        <div class="payment-history-container">
            <h3 class="sub-heading">Payment Details</h3>
            <div class="table">
                <div class="row header">
                    <div class="cell"><strong> Payment ID </strong></div>
                    <div class="cell"><strong> CreatedAt </strong></div>
                    <div class="cell"><strong> ReceivedAt </strong></div>
                    <div class="cell"><strong> TransferredAt </strong></div>
                    <div class="cell"><strong> Payment Type </strong></div>
                    <div class="cell"><strong> Status </strong></div>
                    <div class="cell"><strong> Amount </strong></div>
                    <div class="cell" v-if="isAdmin">
                        <strong> Refund </strong>
                    </div>
                </div>
                <div v-if="currBookingDetails.Payments">
                    <div
                        v-for="payment in currBookingDetails.Payments"
                        :key="payment.PaymentID"
                        class="row"
                    >
                        <div class="cell">{{ payment.PaymentID }}</div>
                        <div class="cell">
                            {{ getFormattedDate(payment.CreatedAt) }}
                        </div>
                        <div class="cell">
                            {{ getFormattedDate(payment.SucceededAt) }}
                        </div>
                        <div class="cell">
                            {{ getFormattedDate(payment.TransferredAt) }}
                        </div>
                        <div class="update-payment" v-if="isAdmin">
                            <SelectInput
                                :defaultValue="
                                    getPaymentTypeLabel(payment.Type)
                                "
                                :list="paymentTypeLabels"
                                @change="
                                    updatePaymentType(
                                        $event.target.value,
                                        payment.PaymentID,
                                    )
                                "
                                name="updatePayment"
                            />
                        </div>
                        <div class="cell" v-else>
                            {{ getPaymentTypeLabel(payment.Type) }}
                        </div>
                        <div class="cell">
                            <div
                                class="status-indicator"
                                v-bind:class="getPaymentClass(payment.Status)"
                            >
                                <span class="status-label">
                                    {{ getPaymentStatusLabel(payment.Status) }}
                                </span>
                                <AtomIcon
                                    v-if="
                                        getPaymentClass(payment.Status) ==
                                        'payment-pending'
                                    "
                                    :icon="'refresh'"
                                    type="primary"
                                    size="is-small"
                                    @click.native="
                                        refreshPaymentStatus(payment.PaymentID)
                                    "
                                >
                                </AtomIcon>
                            </div>
                        </div>
                        <div class="cell">₹ {{ payment.Amount }}</div>
                        <div class="cell" v-if="isAdmin">
                            <div class="icon-cell">
                                <img
                                    alt="Refund Icon"
                                    class="refund-icon"
                                    :src="RefundIcon"
                                    @click="
                                        openRefundDialog(
                                            payment.PaymentID,
                                            payment.Amount,
                                        )
                                    "
                                    v-if="
                                        getPaymentClass(payment.Status) ===
                                        'payment-success'
                                    "
                                />
                            </div>
                        </div>
                        <RefundDialog
                            :paymentAmount="selectedPaymentAmount"
                            :visible="refundDialogVisible"
                            @cancel="closeRefundDialog"
                            @confirm="handleRefundConfirm"
                            v-if="refundDialogVisible"
                        />
                    </div>
                </div>
                <div v-else>No payment history found.</div>
            </div>
        </div>
    </section>
</template>

<script>
import { cloneDeep } from 'lodash';
import { mapActions, mapState } from 'vuex';
import RefundIcon from '/assets/refund.png';
import {
    BookingStatusLabels,
    getBookingStatusLabel,
    getPaymentPeriodicityLabel,
    getPaymentStatusLabel,
    getPaymentTypeLabel,
    getUserTypeLabel,
    PaymentPeriodicityLabels,
    PaymentStatus,
    PaymentTypeLabels,
} from '@/constant/enums';
import AtomButton from '@/components/atoms/AtomButton.vue';
import AtomIcon from '@/components/atoms/AtomIcon.vue';
import AtomTooltip from '@/components/atoms/AtomTooltip.vue';
import AtomDatePicker from '@/components/atoms/AtomDatePicker.vue';
import AtomInput from '@/components/atoms/AtomInput.vue';
import moment from 'moment';
import RefundDialog from '@/components/global/RefundDialog.vue';
import SelectInput from '@/components/global/SelectInput.vue';

export default {
    name: 'TemplateBookingPortal',
    components: {
        AtomButton,
        AtomIcon,
        AtomTooltip,
        AtomDatePicker,
        AtomInput,
        RefundDialog,
        SelectInput,
    },
    setup() {
        return { RefundIcon };
    },
    data() {
        return {
            bookingStatusLabels: BookingStatusLabels,
            currBookingDetails: null,
            editField: null,
            paymentID: null,
            paymentPeriodicityLabels: PaymentPeriodicityLabels,
            paymentTypeLabels: PaymentTypeLabels,
            refundDialogVisible: false,
            selectedPaymentAmount: null,
            toolTipLabel: 'Copy payment url!',
            rentValidationError: '',
            soChargesValidationError: '',
        };
    },
    beforeMount() {
        this.currBookingDetails = cloneDeep(this.bookingDetails); // make a local copy of bookingDetails
    },
    watch: {
        '$store.state.bookingPortal.bookingDetails'(val) {
            this.currBookingDetails = cloneDeep(val); // make a local copy of bookingDetails
        },
        '$store.state.bookingPortal.successMessage'(message) {
            if (message) {
                this.showSuccessMessage();
                setTimeout(() => {
                    this.$store.commit('bookingPortal/set-isField-updated', '');
                }, 2000);
            }
        },
    },
    computed: {
        ...mapState('bookingPortal', [
            'agents',
            'bookingDetails',
            'initialActiveBookingDetails',
            'isFieldUpdated',
            'paymentDetails',
            'status',
            'statusMessage',
            'successMessage',
            'updatedFields',
        ]),
        ...mapState('user', ['isAdmin']),
        sdpURL() {
            return this.$router.resolve({
                name: 'spot-detail',
                params: {
                    spotId: this.currBookingDetails.Booking.SiteID,
                },
            }).href;
        },
        selectedAgent: {
            get() {
                const index = this.agents.findIndex(
                    (item) =>
                        item.UserName ===
                        this.currBookingDetails.Booking.AgentUserName,
                );
                return index >= 0 ? index : '';
            },
            set(value) {
                this.currBookingDetails.Booking.AgentUserName =
                    this.agents[value].UserName;
            },
        },
        isRentValid() {
            const rent = this.currBookingDetails?.Booking?.Rent;
            return rent && rent > 0;
        },
    },
    mounted() {
        this.getUserProfile();
    },
    methods: {
        ...mapActions('bookingPortal', [
            'createRefund',
            'setUpdatedFields',
            'changePaymentType',
        ]),
        ...mapActions('user', ['getUserProfile']),

        getPaymentStatusLabel(paymentStatus) {
            return getPaymentStatusLabel(paymentStatus);
        },
        getPaymentPeriodicityLabel(paymentPeriodicity) {
            return getPaymentPeriodicityLabel(paymentPeriodicity);
        },
        getBookingStatusLabel(bookingStatus) {
            return getBookingStatusLabel(bookingStatus);
        },
        getPaymentTypeLabel(paymentType) {
            return getPaymentTypeLabel(paymentType);
        },
        getUserTypeLabel(userType) {
            return getUserTypeLabel(userType);
        },
        getAgentName(agents, agentUserName) {
            if (!agentUserName) {
                return 'Agent not assigned';
            }

            const agent = agents.find(
                (item) => item.UserName === agentUserName,
            );

            // if agent full name is available, return the username
            if (agent && agent.FullName) {
                return agent.FullName.split(' ')[0];
            }

            return agentUserName;
        },

        getPaymentClass(status) {
            if (
                status == PaymentStatus.PaymentSuccess ||
                status == PaymentStatus.PaymentTransferred
            ) {
                return 'payment-success';
            } else if (
                status == PaymentStatus.PaymentPending ||
                status == PaymentStatus.PaymentIncomplete
            ) {
                return 'payment-pending';
            }
            return 'payment-failed';
        },

        getPaymentLink() {
            this.toolTipLabel = 'Copy payment url!';
            const reqBody = {
                BookingID: this.currBookingDetails.Booking.ID.toString(),
                Discount: 0.0,
                Promocode: '',
            };

            this.$emit('payment-link', reqBody);
        },

        refreshPaymentStatus(paymentId) {
            this.$emit('refresh-payment-status', paymentId);
        },

        copyUrl() {
            navigator.clipboard
                .writeText(this.paymentDetails.PayUrl)
                .then(function () {
                    alert('Payment Url copied to clipboard');
                })
                .catch(function (error) {
                    console.error('Failed to copy text: ', error);
                });

            this.toolTipLabel = 'Copied!!';
        },

        getFormattedDate(date) {
            if (date == '0001-01-01T00:00:00Z') {
                return '--';
            }
            return moment(date).format('MMM Do YYYY');
        },

        enableEdit(fieldName) {
            this.editField = fieldName;
        },

        saveField() {
            this.rentValidationError = '';
            this.soChargesValidationError = '';

            if (this.editField === 'Rent Details') {
                const rent = this.currBookingDetails?.Booking?.Rent;
                const soCharges = this.currBookingDetails?.Booking?.BaseAmount;

                if (!rent || rent <= 0) {
                    this.rentValidationError = 'Rent must be greater than zero';
                    this.alertError(
                        'Rent cannot be zero or empty. Please enter a valid rent amount.',
                    );
                    return;
                }

                if (!soCharges || soCharges <= 0) {
                    this.soChargesValidationError =
                        'SO Charges must be greater than zero';
                    this.alertError(
                        'SO Charges cannot be zero or empty. Please enter a valid amount.',
                    );
                    return;
                }

                if (soCharges > rent) {
                    this.soChargesValidationError =
                        'SO Charges cannot be greater than Rent amount';
                    this.alertError(
                        'SO Charges cannot be greater than the Rent amount.',
                    );
                    return;
                }
            }

            this.editField = null;

            // Remove Payments field from currentBookingDetails.Booking object
            delete this.initialActiveBookingDetails.Payments;

            // Iterate through the loop to check for updated fields.
            const updatedArray = [];
            for (const key in this.initialActiveBookingDetails) {
                if (
                    !updatedArray.includes(key) &&
                    !this.onCompare(
                        this.initialActiveBookingDetails[key],
                        this.currBookingDetails.Booking[key],
                    )
                ) {
                    updatedArray.push(key);
                }
            }
            this.setUpdatedFields(updatedArray);
            this.$emit(
                'update-booking-details',
                this.currBookingDetails.Booking,
            );
        },

        cancelField() {
            this.editField = null;
            this.rentValidationError = '';
            this.soChargesValidationError = '';
            this.currBookingDetails = cloneDeep(this.bookingDetails);
        },

        onStartDateUpdate(updatedDate) {
            this.currBookingDetails.Booking.StartTime = updatedDate;
        },

        onEndDateUpdate(updatedEndDate) {
            this.currBookingDetails.Booking.EndTime = updatedEndDate;
        },
        // Function to compare initial value and current value
        onCompare(initialValue, currentValue) {
            if (Array.isArray(initialValue) && Array.isArray(currentValue)) {
                return (
                    JSON.stringify(initialValue) ===
                    JSON.stringify(currentValue)
                );
            } else {
                return initialValue === currentValue;
            }
        },

        updatePaymentType(value, paymentId) {
            const paymentType = this.paymentTypeLabels.indexOf(value);
            this.changePaymentType({ paymentID: paymentId, paymentType });
        },

        showSuccessMessage() {
            this.$buefy.toast.open({
                message: this.successMessage,
                type: 'is-success',
                duration: 2000,
            });
        },
        openRefundDialog(paymentID, paymentAmount) {
            this.selectedPaymentAmount = paymentAmount;
            this.paymentID = paymentID;
            this.refundDialogVisible = true;
        },
        closeRefundDialog() {
            this.refundDialogVisible = false;
        },
        handleRefundConfirm(refundData) {
            this.refundDialogVisible = false;
            const refundRequest = {
                PaymentID: this.paymentID,
                Amount: parseFloat(refundData.refundAmount),
                IsRefundingSecurity: refundData.isSecurityDeposit,
            };
            this.createRefund(refundRequest);
        },
        updatePaymentType(value, paymentId) {
            const paymentType = this.paymentTypeLabels.indexOf(value);
            this.changePaymentType({ paymentID: paymentId, paymentType });
        },
        alertError(msg) {
            this.$buefy.dialog.alert({
                ariaModal: true,
                ariaRole: 'alertdialog',
                hasIcon: true,
                icon: 'alert-circle',
                message: msg,
                title: 'Error',
                type: 'is-danger',
            });
        },
        alertSuccess(msg) {
            this.$buefy.dialog.alert({
                ariaModal: true,
                ariaRole: 'alertdialog',
                hasIcon: true,
                icon: 'check-circle',
                message: msg,
                title: 'Success',
                type: 'is-success',
            });
        },
        validateRentInput() {
            const rent = this.currBookingDetails?.Booking?.Rent;
            if (!rent || rent <= 0) {
                this.rentValidationError = 'Rent must be greater than zero';
            } else {
                this.rentValidationError = '';
            }
        },
        validateSOChargesInput() {
            const soCharges = this.currBookingDetails?.Booking?.BaseAmount;
            const rent = this.currBookingDetails?.Booking?.Rent;

            if (!soCharges || soCharges <= 0) {
                this.soChargesValidationError =
                    'SO Charges must be greater than zero';
            } else if (rent && soCharges > rent) {
                this.soChargesValidationError =
                    'SO Charges cannot be greater than Rent amount';
            } else {
                this.soChargesValidationError = '';
            }
        },
    },
    watch: {
        status(newStatus) {
            if (newStatus === 'error') {
                this.alertError(this.statusMessage);
            } else if (newStatus === 'success') {
                this.alertSuccess(this.statusMessage);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.sub-heading {
    margin-bottom: 24px;
    color: var(--secondary-color);
}

.payment-link-btn-wrapper {
    margin-bottom: 24px;
}

.payment-link-detail-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    flex-direction: column;
    background: var(--parkspot-white);

    .copy-icon {
        cursor: pointer;
        width: 50px;
        height: 50px;
        background: transparent;

        &:hover {
            border-radius: 50%;
            background: var(--primary-color);
        }
    }
}

.booking-card {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    background: var(--parkspot-white);

    .card-top {
        position: relative;

        .action-group {
            position: absolute;
            top: 0;
            right: 0;

            span {
                margin-left: 12px;
                cursor: pointer;
            }

            .edit-icon {
                color: var(--secondary-color);
            }

            .save-icon {
                color: var(--parkspot-green);
            }

            .cancel-icon {
                color: var(--parkspot-red);
            }
        }
    }

    .card-body {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        @media only screen and (max-width: 1024px) {
            flex-direction: column;
        }

        .input-field {
            margin-bottom: 6px;
        }
    }

    .col-wrapper {
        display: flex;
        justify-content: space-between;
        width: 50%;

        @media only screen and (max-width: 1024px) {
            width: 100%;
        }
    }

    .field-col {
        width: 30%;
        text-align: left;

        p {
            margin-bottom: 16px;
        }
    }

    .value-col {
        width: 70%;
        text-align: left;

        p {
            margin-bottom: 16px;
        }
    }

    .edit-col {
        width: 50%;
        text-align: left;

        p {
            margin-bottom: 16px;
        }

        span {
            margin-left: 12px;
            cursor: pointer;
        }

        .edit-icon {
            color: var(--primary-color);
        }

        .save-icon {
            color: var(--parkspot-green);
        }

        .cancel-icon {
            color: var(--parkspot-red);
        }
    }
}

.payment-history-container {
    .table {
        display: flex;
        flex-direction: column;
    }

    .header {
        background-color: #ebebfb;
    }

    .row {
        display: flex;
    }

    .cell {
        flex: 1;
        padding: 10px;
        border-bottom: 1px solid #eeeeee;
    }

    .status-indicator {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 5px;
        min-width: 108px;
    }

    .status-label {
        font-weight: 500;
        color: var(--parkspot-white);
    }

    /* Define different styles for different status labels */
    .payment-success {
        background-color: #b5fca1;
        min-width: 132px;

        .status-label {
            color: green;
        }
    }

    .payment-failed {
        background-color: #ffa5a5;
        min-width: 132px;

        .status-label {
            color: red;
        }
    }

    .payment-pending {
        background-color: #fce2c3;
        min-width: 132px;

        .status-label {
            color: orange;
        }
    }
}

.refund-icon {
    cursor: pointer;
    height: 28px;
    width: 28px;
}

.update-payment {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.validation-error {
    color: var(--parkspot-red, #ff3860);
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 8px;
}
.input-field {
    margin-bottom: 6px;

    .is-danger {
        border-color: var(--parkspot-red, #ff3860);
    }
}
</style>
