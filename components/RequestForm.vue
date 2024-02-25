<template>
  <Message :severity='severity' v-if="userMassage">{{userMassage}}</Message>
  <form class="container">
    <div class="form__field">
      <div>
        <Calendar v-model="data.dateFrom" :placeholder="$t('from')"  aria-label="{{ $t('from') }}" :minDate="new Date()" />
        
        <Calendar v-model="data.dateTo" :placeholder="$t('to')" aria-label="{{ $t('to') }}" :minDate="new Date(data.dateFrom)"/>
      </div>

      <div class="form__field-dropdown">
        <Dropdown
          v-model="data.ticketClass"
          :options="ticketClassOptions"
          :placeholder="$t('ticketClass')"
          aria-label="{{ $t('ticketClass') }}"
        />

        <Dropdown
          v-model="data.tripType"
          :options="tripTypesOptions"
          :placeholder="$t('tripType')"
          aria-label="{{ $t('tripType') }}"
        />
      </div>

      <div class="form__field-number">
        <InputText
          v-model="data.passengers"
          :placeholder="$t('passengers')"
          aria-label="{{ $t('passengers') }}"
          @input="data.passengers = parseInt(data.passengers)"
        />
      </div>

      <div class="submit-button">
        <Button :label="$t('submit')" aria-label="{{ $t('submit') }}" @click="handleSubmit"/>
    </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import z from 'zod';
import { fromZodError } from 'zod-validation-error';


const ticketClassOptions = ref(["Economy", "Business", "First"]);
const tripTypesOptions = ref(["One-way", "Round-trip"]);

const data = ref({
  dateFrom: null,
  dateTo: null,
  ticketClass: null,
  tripType: null,
  passengers: null,
});



const userSchema = z.object({
  dateFrom: z.date(),
  dateTo: z.date(),
  ticketClass: z.enum(ticketClassOptions.value),
  tripType: z.enum(tripTypesOptions.value),
  passengers: z.number()
});

const userMassage = ref('');
const severity = ref('')

const handleSubmit = () => {
  const result = userSchema.safeParse(data.value);

  if(!result.success){
    userMassage.value = fromZodError(result.error);
    severity.value = "error"
  }else{
    userMassage.value = 'Success!'
    severity.value = "success"
  }
}
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
