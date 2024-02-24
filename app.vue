<template>
  <NuxtLayout :dir="layoutDirection">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const layoutDirection = ref(locale === 'ar' ? 'rtl' : 'ltr');

watch(locale, (newLocale) => {
  layoutDirection.value = newLocale === 'ar' ? 'rtl' : 'ltr';
});
</script>
