<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { Customer } from '../webApiClient'
import { formatDate, lastFour } from '../helpers'

defineProps<{
    customer?: Customer
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>
<template>
    <VueFinalModal class="modal d-block" content-class="modal-dialog modal-lg"
        @update:model-value="(val) => emit('update:modelValue', val)">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    {{ customer?.first_name }} {{ customer?.last_name }}
                </h4>
                <button type="button" class="btn-close btn" aria-label="Close"
                    @click="emit('update:modelValue', false)"></button>
            </div>
            <div class="modal-body" v-if="customer">
                <div class="row row-cols-2">
                    <div class="col">
                        <h6>Customer Number:</h6>
                    </div>
                    <div class="col">
                        {{ customer.customer_number }}
                    </div>
                    <div class="col">
                        <h6>Email:</h6>
                    </div>
                    <div class="col">
                        {{ customer.email }}
                    </div>
                    <div class="col">
                        <h6>Address:</h6>
                    </div>
                    <div class="col">
                        <p>{{ customer.primary_address?.address_line_1 }}<br />

                            {{ customer.primary_address?.city }}, {{ customer.primary_address?.state }} {{
                                customer.primary_address?.zip_code }}</p>
                    </div>
                    <div class="col">
                        <h6>Moblie Phone Number:</h6>
                    </div>
                    <div class="col">
                        {{ customer.mobile_phone_number }}
                    </div>
                    <div class="col">
                        <h6>Join Date:</h6>
                    </div>
                    <div class="col">
                        {{ formatDate(customer.join_date) }}
                    </div>
                    <div class="col">
                        <h6>Birth Date:</h6>
                    </div>
                    <div class="col">{{ formatDate(customer.date_birth) }}</div>
                    <div class="col">
                        <h6>SSN:</h6>
                    </div>
                    <div class="col">***-**-{{ lastFour(customer.ssn) }}</div>

                </div>


            </div>
        </div>
    </VueFinalModal>
</template>