<script setup lang="ts">
import { ref } from "vue";
import { Customer } from "../webApiClient";

/*
const customer = ref<Customer>({ joinDate: Date.now });


const handleSubmit = () => {

}

function isValidSSN(value: string) {
  let regex = new RegExp(/^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/);
  if (value == null) {
    return "false";
  }
  if (regex.test(value) == true) {
    return "true";
  }
  else {
    return "false";
  }
}

*/
</script>

<template>
  <div class="container">
    <h1>Create New Customer</h1>
    <form @submit.prevent="handleSubmit">
      <label class="form-label">Customer number</label>
      <input type="number" min="10000" max="99999" class="form-control" />
      <label class="form-label">First Name</label>
      <input class="form-control" type="text" />
      <label class="form-label">Last Name</label>
      <input class="form-control" type="text" />
      <label class="form-label">Date of Birth</label>
      <input class="form-control" type="date" />
      <label class="form-label">SSN</label>
      <input class="form-control" type="text" />
      <label class="form-label">Email address</label>
      <input class="form-control" type="email" />
      <h6>Primary address</h6>
      <div>
        <label class="form-label" for="street-address">Street address</label>
        <input
          type="text"
          id="street-address"
          name="street-address"
          class="form-control"
          autocomplete="street-address"
          required
        />
      </div>
      <div>
        <label for="postal-code" class="form-label"
          >ZIP or postal code (optional)</label
        >
        <input
          id="postal-code"
          class="form-control"
          name="postal-code"
          autocomplete="postal-code"
        />
      </div>
      <div>
        <label for="city" class="form-label">City</label>
        <input
          required
          type="text"
          id="city"
          class="form-control"
          name="city"
          autocomplete="address-level2"
          enterkeyhint="next"
        />
      </div>
      <div>
        <label for="country" class="form-label">Country or region</label>
        <input
          id="country"
          name="country"
          class="form-select"
          autocomplete="country"
          required
        />
      </div>
      <label class="form-label">Mobile phone number</label>
      <input type="phone" class="form-control" />
    </form>
  </div>
</template>
