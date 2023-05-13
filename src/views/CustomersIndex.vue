<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Customer, api } from "../webApiClient";
import ModalCustomer from "../components/ModalCustomer.vue";
import { useModal } from "vue-final-modal";
import { calculateAge, formatDate, lastFour } from "../helpers";

const customers = ref<Customer[]>([]);

const url = "https://my.api.mockaroo.com/customers.json?key=e95894a0"

const { open, patchOptions } = useModal({
  component: ModalCustomer
})

const showModal = (customer: Customer) => {
  patchOptions({
    attrs: {
      customer: customer
    }
  })
  open()
}
onMounted(async () => {
  customers.value = await api.getCustomers(url);
});
</script>

<template>
  <div class="container">
    <h1>All Customers</h1>
    <table class="table table-striped table-hover ">
      <thead>
        <tr>
          <th>Customer number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Last 4 of SSN</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" @click="showModal(customer)">
          <td>{{ customer.customer_number }}</td>
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ formatDate(customer.date_birth) }}</td>
          <td>{{ lastFour(customer.ssn) }}</td>
          <td>{{ calculateAge(customer.date_birth) }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
