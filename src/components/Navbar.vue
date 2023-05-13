<script setup lang="ts">
import NavbarThemeButton from './NavbarThemeButton.vue';
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" :to="{ name: 'CustomersIndex' }">Home</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'CustomersIndex' }">All Customers</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'CustomersCreate' }">Create Customer</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <NavbarThemeButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
