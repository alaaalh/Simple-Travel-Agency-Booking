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
          :options="ticketClassOptions.slice()"
          :placeholder="$t('ticketClass')"
          aria-label="{{ $t('ticketClass') }}"
        />

        <Dropdown
          v-model="data.tripType"
          :options="tripTypesOptions.slice()"
          :placeholder="$t('tripType')"
          aria-label="{{ $t('tripType') }}"
        />
      </div>

      <div class="form__field-number">
        <InputText
          v-model="data.passengers"
          type="number"
          :placeholder="$t('passengers')"
          aria-label="{{ $t('passengers') }}"
        />
      </div>

      <div class="submit-button">
        <Button :label="$t('submit')" aria-label="{{ $t('submit') }}" @click="handleSubmit"/>
    </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import z from 'zod';
import { fromZodError } from 'zod-validation-error';


const ticketClassOptions = ["Economy", "Business", "First"] as const;
const tripTypesOptions = ["One-way", "Round-trip"] as const;

interface Data {
  dateFrom: Date | string; 
  dateTo: Date | null;
  ticketClass: string | null;
  tripType: string | null;
  passengers: any ;
}

const data: Ref<Data> = ref({
  dateFrom: '',
  dateTo: null,
  ticketClass: null,
  tripType: null,
  passengers: null,
});



const userSchema = z.object({
  dateFrom: z.date(),
  dateTo: z.date(),
  ticketClass: z.enum(ticketClassOptions),
  tripType: z.enum(tripTypesOptions),
  passengers: z.number()
});

const userMassage = ref<any>('');
const severity = ref<string>('')

const handleSubmit = () => {
  data.value.passengers = parseInt(data.value.passengers)
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
