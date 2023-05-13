<script setup lang="ts">
import { computed } from "vue";
import { Address } from "../webApiClient";
import { stateList } from "../helpers";

var props = defineProps<{ modelValue: Address }>();
var emit = defineEmits<{ (e: "update:modelValue", value: Address): void }>();

const address = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});


</script>

<template>
  <div class="form-floating mb-2">
    <input type="text" id="street-address" name="street-address" class="form-control" autocomplete="street-address"
      placeholder="123 Main Street" v-model="address.address_line_1" />
    <label for="street-address">Street address</label>

  </div>
  <div class="row g-2">
    <div class="col">
      <div class="form-floating mb-2">
        <input type="text" id="city" class="form-control" name="city" autocomplete="address-level2" v-model="address.city"
          placeholder="New York" />
        <label for="city">City</label>
      </div>
    </div>
    <div class="col-3">
      <div class="form-floating mb-2">
        <select id="state" name="state" class="form-select" autocomplete="address-level1" v-model="address.state">
          <option selected></option>
          <option v-for="state in stateList" value="state">{{ state }}</option>
        </select>
        <label for="state">State</label>
      </div>
    </div>
    <div class="col-4">
      <div class="form-floating mb-2">
        <input id="zip-code" class="form-control" name="zip-code" v-model="address.zip_code" autocomplete="postal-code"
          placeholder="12345" />
        <label for="zip-code">ZIP code</label>
      </div>
    </div>
  </div>
</template>
