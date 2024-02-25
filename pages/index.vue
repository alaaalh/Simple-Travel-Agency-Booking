<template>
  <RequestForm />
  <CardComponent :items="data" />
</template>

<script setup>
const { t } = useI18n();
const data = ref([
  {
    title: t("titleOne"),
    subTitle: t("subtitleOne"),
    discription: t("discription"),
  },
  {
    title: t("titleTwo"),
    subTitle: t("subtitleTwo"),
    discription: t("discription"),
  },
  {
    title: t("titleThree"),
    subTitle: t("subtitleThree"),
    discription: t("discription"),
  },
]);
</script>
