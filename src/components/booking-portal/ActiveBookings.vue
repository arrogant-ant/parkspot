<template>
    <div class="root">
        <b-table
            :bordered="true"
            :data="activeBookings"
            :focusable="true"
            :hoverable="true"
            :mobile-cards="true"
            :narrowed="true"
            :paginated="true"
            :per-page="20"
            :sticky-header="true"
            height="500"
        >
            <b-table-column
                field="ID"
                label="ID"
                numeric
                sortable
                v-slot="props"
                width="56"
            >
                <div>
                    <a :href="bookingDetailsURL(props.row.ID)">
                        <div>
                            {{ props.row.ID }}
                        </div>
                    </a>
                </div>
            </b-table-column>

            <b-table-column
                cell-class="has-text-left"
                field="Name"
                label="VO Name"
                searchable
                sortable
                v-slot="props"
                width="168"
            >
                <div>
                    {{ props.row.Name }}
                </div>
            </b-table-column>

            <b-table-column
                cell-class="has-text-left"
                field="Mobile"
                label="VO Mobile"
                searchable
                sortable
                v-slot="props"
                width="132"
            >
                <div>
                    {{ props.row.Mobile }}
                </div>
            </b-table-column>

            <b-table-column
                cell-class="has-text-left"
                field="SOContactDetails.FullName"
                label="SO Name"
                searchable
                sortable
                v-slot="props"
                width="112"
            >
                <div>
                    {{ props.row.SOContactDetails.FullName }}
                </div>
            </b-table-column>

            <b-table-column
                cell-class="has-text-left"
                field="SOContactDetails.Mobile"
                label="SO Mobile"
                searchable
                sortable
                v-slot="props"
                width="132"
            >
                <div>
                    {{ props.row.SOContactDetails.Mobile }}
                </div>
            </b-table-column>

            <b-table-column
                cell-class="has-text-left"
                field="SiteID"
                label="SiteID"
                sortable
                v-slot="props"
            >
                <div>
                    <a :href="sdpURL(props.row.SiteID)" target="_blank">
                        <div>
                            {{ props.row.SiteID }}
                        </div>
                    </a>
                </div>
            </b-table-column>

            <b-table-column
                cell-class="has-text-left"
                field="Status"
                label="Status"
                sortable
                v-slot="props"
                width="100"
            >
                <div>
                    {{ getBookingStatusLabel(props.row.Status) }}
                </div>
            </b-table-column>

            <b-table-column
                field="Rent"
                label="Rent"
                numeric
                sortable
                v-slot="props"
                width="60"
            >
                <div>
                    {{ props.row.Rent }}
                </div>
            </b-table-column>
            <b-table-column
                cell-class="has-text-left"
                field="PaymentPeriod"
                label="Periodicity"
                sortable
                v-slot="props"
                width="112"
            >
                <div>
                    {{ getPaymentPeriodicityLabel(props.row.PaymentPeriod) }}
                </div>
            </b-table-column>
        </b-table>
    </div>
</template>

<script>
import {
    getPaymentPeriodicityLabel,
    getBookingStatusLabel,
} from '@/constant/enums';
export default {
    props: {
        activeBookings: Array,
    },
    methods: {
        sdpURL(siteId) {
            return this.$router.resolve({
                name: 'spot-detail',
                params: {
                    spotId: siteId,
                },
            }).href;
        },
        bookingDetailsURL(bookingId) {
            return this.$router.resolve({
                name: 'booking-portal',
                query: {
                    bookingId: bookingId,
                },
            }).href;
        },
        getPaymentPeriodicityLabel(paymentPeriodicity) {
            return getPaymentPeriodicityLabel(paymentPeriodicity);
        },
        getBookingStatusLabel(bookingStatus) {
            return getBookingStatusLabel(bookingStatus);
        },
    },
};
</script>

<style lang="scss" scoped>
.root {
    padding: 16px;
}
.header-row {
    justify-content: center;
    text-align: center;
}
</style>
