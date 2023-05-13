<script setup lang="ts">
import { computed } from "vue";
import { Address } from "../webApiClient";

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
  <div>
    <label class="form-label" for="street-address">Street address</label>
    <input
      type="text"
      id="street-address"
      name="street-address"
      class="form-control"
      autocomplete="street-address"
      v-model="address.address_line_1"
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
      v-model="address.city"
      enterkeyhint="next"
    />
  </div>
  <div>
    <label for="state" class="form-label">State</label>
    <input
      id="state"
      name="state"
      class="form-control"
      autocomplete="state"
      v-model="address.state"
    />
  </div>
  <div>
    <label for="postal-code" class="form-label">ZIP code</label>
    <input
      id="postal-code"
      class="form-control"
      name="postal-code"
      v-model="address.zip_code"
      autocomplete="postal-code"
    />
  </div>
</template>
