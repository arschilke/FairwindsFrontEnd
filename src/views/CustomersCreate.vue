<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Address, Customer, api } from "../webApiClient";
import AddressForm from "../components/AddressForm.vue";
const router = useRouter();
const customer = ref<Customer>(
  new Customer({ primary_address: new Address() })
);

const url = "https://my.api.mockaroo.com/customers.json?key=e95894a0"

const handleSubmit = async () => {
  customer.value.customer_number = Math.floor(Math.random() * 99999) + 10000;
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
      <h6>Personal Details</h6>
      <div class="form-floating mb-2">
        <input name="firstName" id="firstName" class="form-control" type="text" v-model="customer.first_name"
          placeholder="Jane" />
        <label for="firstName" class="form-label">First Name</label>
      </div>
      <div class="form-floating mb-2">
        <input name="lastName" id="lastName" class="form-control" type="text" v-model="customer.last_name"
          placeholder="Doe" />
        <label for="lastName">Last Name</label>
      </div>
      <div class="form-floating mb-2">
        <input name="birthDate" id="birthDate" class="form-control" type="date" v-model="customer.date_birth" />
        <label for="birthDate">Date of Birth</label>
      </div>
      <div class="form-floating mb-2">
        <input class="form-control" type="text" v-model="customer.ssn" placeholder="111-11-1111" />
        <label class="form-label">SSN</label>
      </div>
      <div class="form-floating mb-2">
        <input id="email" name="email" class="form-control" type="email" v-model="customer.email"
          placeholder="jane_doe@example.com" />
        <label for="email">Email address</label>
      </div>
      <h6>Primary address</h6>
      <AddressForm v-if="customer.primary_address" v-model="customer.primary_address" />
      <div class="form-floating mb-2">
        <input name="phone" id="phone" type="tel" class="form-control" v-model="customer.mobile_phone_number"
          placeholder="555-555-5555" />
        <label for="phone">Mobile phone number</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
