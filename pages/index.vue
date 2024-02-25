<template>
  <RequestForm />
  <CardComponent :items="data"/>
</template>

<script setup>
const data = ref([
  {
    title: "Card one",
    subTitle: "first",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
  },
  {
    title: "Card two",
    subTitle: "second",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
  },
  {
    title: "Card three",
    subTitle: "third",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
  },
]);
</script>
