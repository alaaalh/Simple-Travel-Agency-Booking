<script setup lang="ts">
import FooterComponent from '~/components/FooterComponent.vue';
</script>

<template>
    <div>
      <Navbar />
      <slot />
      <FooterComponent />
    </div>
  </template>
  