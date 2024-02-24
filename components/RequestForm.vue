<template>
  <form class="flex justify-content-center">
    <div class="p-col-12 p-md-6">
      <Calendar v-model="data.dateFrom" placeholder="from"/>
    </div>
    <div class="p-col-12 p-md-6">
    <Calendar v-model="data.dateTo" placeholder="to" />
    </div>
    <div>
      <Dropdown
        v-model="data.ticketClass"
        :options="ticketClassOptions"
        placeholder="Ticket class"
      />

      <Dropdown
        v-model="data.typeType"
        :options="tripTypesOptions"
        placeholder="Trip type"
      />
    </div>

    

    <div class="card flex justify-content-center">
        <InputText type="number" v-model="passengers" placeholder="Passengers"/>
    </div>

        
  </form>
</template>

<script setup>
import { ref } from "vue";

const ticketClassOptions = ref(['Economy', 'Business', 'First']);
const tripTypesOptions = ref(['One-way', 'Round-trip'])

const data = ref({
    dateFrom: null,
    dateTo: null,
    ticketClass: null,
    typeType: null,
    passengers: null,
})

</script>


