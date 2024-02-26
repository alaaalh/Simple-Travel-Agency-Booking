<template>
  <div class="card-container">
    <Card style="width: 20rem; overflow: hidden; margin-top: 20px" v-for="item in items">
      <template #header>
        <img
          alt="user header"
          src="https://primefaces.org/cdn/primevue/images/usercard.png"
        />
      </template>
      <template #title>{{ item.title }}</template>
      <template #subtitle>{{ item.subTitle }}</template>
      <template #content>
        <p class="m-0">
          {{ item.discription }}
        </p>
      </template>
    </Card>
  </div>
</template>

<script setup>
    const props = defineProps(['items'])
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  margin: 40px 10px;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
}
</style>
