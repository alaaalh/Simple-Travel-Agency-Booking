<template>
  <div class="card">
    <Menubar :model="items" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { setLocale, t, locale } = useI18n();
const router = useRouter();
const localPath = useLocalePath()

const items = ref([
  {
    label: t("home_title"),
    icon: "pi pi-home",
    command: () => router.push(localPath("/")),
  },
  {
    label: t("language"),
    icon: "pi pi-globe",
    items: [
      {
        label: t("english"),
        icon: "pi pi-flag-gb",
        command: () => {
          setLocale("en");
        },
      },
      {
        label: t("arabic"),
        icon: "pi pi-flag-ar",
        command: () => {
          setLocale("ar");
        },
      },
    ],
  },
]);

watch(locale, () => {
  items.value[1].items[0].label = t("english");
  items.value[1].items[1].label = t("arabic");
  items.value[0].label = t("home_title");
  items.value[1].label = t("language");
  
});
</script>
