<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Customer, request } from "../webApiClient";

const customers = ref<Customer[]>([]);

const url = "https://my.api.mockaroo.com/customers.json?key=e95894a0" //?? "http://localhost:3000/customers";

function calculateAge(birthday: string) {
  var ageDifMs = Date.now() - Date.parse(birthday);
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
const lastFour = (value: string | undefined): string | undefined =>
  value?.slice(-4) ?? "";

onMounted(async () => {
  customers.value = await request<Customer[]>(url);
});
</script>

<template>
  <div class="container">
    <h1>All Customers</h1>
    <table class="table">
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
        <tr v-for="customer in customers">
          <td>{{ customer.customer_number }}</td>
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ (new Date(customer.date_birth)).toDateString() }}</td>
          <td>{{ lastFour(customer.ssn) }}</td>
          <td>{{ calculateAge(customer.date_birth) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
