<template>
  <RequestForm />
  <CardComponent :items="data" />
</template>

<script setup lang="ts">
const { t } = useI18n();

interface Card {
  title: string;
  subTitle: string;
  discription: string;
}

const data: Card[] = [
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
];
</script>
