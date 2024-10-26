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
    discription: '375$',
  },
  {
    title: t("titleTwo"),
    subTitle: t("subtitleTwo"),
    discription: '375$',
  },
  {
    title: t("titleThree"),
    subTitle: t("subtitleThree"),
    discription: '375$',
  },
  {
    title: t("titleFour"),
    subTitle: t("subtitleFour"),
    discription: '375$',
  },
];
</script>
