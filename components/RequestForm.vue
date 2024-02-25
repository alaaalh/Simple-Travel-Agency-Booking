<template>
  <form class="container">
    <div class="form__field">
      <div>
        <Calendar v-model="data.dateFrom" :placeholder="$t('from')" />
        <Calendar v-model="data.dateTo" :placeholder="$t('to')"  />
      </div>

      <div class="form__field-dropdown">
        <Dropdown
          v-model="data.ticketClass"
          :options="ticketClassOptions"
          :placeholder="$t('ticketClass')"
        />

        <Dropdown
          v-model="data.typeType"
          :options="tripTypesOptions"
          :placeholder="$t('tripType')"
        />
      </div>

      <div class="form__field-number">
        <InputText
          type="number"
          v-model="passengers"
          :placeholder="$t('passengers')"
        />
      </div>

      <div class="submit-button">
        <Button :label="$t('Submit')"/>
    </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const ticketClassOptions = ref(["Economy", "Business", "First"]);
const tripTypesOptions = ref(["One-way", "Round-trip"]);

const data = ref({
  dateFrom: null,
  dateTo: null,
  ticketClass: null,
  typeType: null,
  passengers: null,
});
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.container > div {
  border: 1px solid gray;
  width: 50%;
  border-radius: 4px;
  padding: 20px;
}

@media (max-width: 768px) {
  .container > div {
    width: 100%;
  }
}

.container .p-calendar {
  width: 50%;
  padding: 0 5px;
}

.form__field-dropdown {
  padding: 20px 5px;
  display: flex;
  justify-content: space-between;
}

.container .p-dropdown {
  width: 49.5%;
}

.form__field .p-inputtext {
  width: 100%;
}

.form__field-number {
  padding: 5px;
}

.submit-button{
    display: flex;
    justify-content: center;
    margin-top: 25px;
}
</style>
