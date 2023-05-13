<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Address, Customer, api } from "../webApiClient";
import AddressForm from "../components/AddressForm.vue";
const router = useRouter();
const customer = ref<Customer>(
  new Customer({ primary_address: new Address() })
);

//const url = "https://my.api.mockaroo.com/customers.json?key=e95894a0" //??
const url = "http://localhost:3000/customers";

const handleSubmit = async () => {
  var sucess = await api.postCustomer(url, customer.value);
  if (sucess) {
    await router.push({ name: "CustomersIndex" });
  }
};
</script>

<template>
  <div class="container">
    <h1>Create New Customer</h1>
    <form @submit.prevent="handleSubmit">
      <label class="form-label">Customer number</label>
      <input
        type="number"
        min="10000"
        max="99999"
        class="form-control"
        v-model="customer.customer_number"
      />
      <label class="form-label">First Name</label>
      <input class="form-control" type="text" v-model="customer.first_name" />
      <label class="form-label">Last Name</label>
      <input class="form-control" type="text" v-model="customer.last_name" />
      <label class="form-label">Date of Birth</label>
      <input class="form-control" type="date" v-model="customer.date_birth" />
      <label class="form-label">SSN</label>
      <input class="form-control" type="text" v-model="customer.ssn" />
      <label class="form-label">Email address</label>
      <input class="form-control" type="email" v-model="customer.email" />
      <h6>Primary address</h6>
      <AddressForm
        v-if="customer.primary_address"
        v-model="customer.primary_address"
      />
      <label class="form-label">Mobile phone number</label>
      <input
        type="tel"
        class="form-control"
        v-model="customer.mobile_phone_number"
      />
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
