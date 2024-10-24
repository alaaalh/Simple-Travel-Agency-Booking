<template>
  <div class="header-container">
    <h1 class="main-title">
      <span class="text-navy">{{ $t('discover') }} </span>
      <span class="text-amber">{{ $t('our') }} </span>
      <span class="text-orange">{{ $t('paradise_worlds') }}</span>
    </h1>
    <h2 class="sub-title">
      <span class="text-navy">Trav</span>
      <span class="text-amber">el A</span>
      <span class="text-orange">nywhere Now!</span>
    </h2>
  </div>
  <Message :severity='severity' v-if="userMassage">{{ userMassage }}</Message>
  <form class="container mx-auto bg-white rounded-lg shadow-lg p-6">
    <div class="form__field">
      <div class="flex justify-center gap-4 mb-6">
        <label class="flex items-center">
          <input type="radio" name="tripType" value="one-way" v-model="data.tripType" class="mr-2" />
          One Way
        </label>
        <label class="flex items-center">
          <input type="radio" name="tripType" value="round" v-model="data.tripType" class="mr-2" />
          Round Trip
        </label>
      </div>

      <hr />
      <div>
        <Calendar v-model="data.dateFrom" :placeholder="$t('from')" aria-label="{{ $t('from') }}"
          :minDate="new Date()" />

        <Calendar v-model="data.dateTo" :placeholder="$t('to')" aria-label="{{ $t('to') }}"
          :minDate="new Date(data.dateFrom)" />
      </div>

      <div class="form__field-dropdown">
        <Dropdown v-model="data.ticketClass" :options="ticketClassOptions.slice()" :placeholder="$t('ticketClass')"
          aria-label="{{ $t('ticketClass') }}" />

        <!-- <Dropdown v-model="data.tripType" :options="tripTypesOptions.slice()" :placeholder="$t('tripType')"
          aria-label="{{ $t('tripType') }}" /> -->
      </div>

      <div class="form__field-number">
        <InputText v-model="data.passengers" type="number" :placeholder="$t('passengers')"
          aria-label="{{ $t('passengers') }}" />
      </div>

      <div class="submit-button">
        <Button :label="$t('submit')" aria-label="{{ $t('submit') }}" @click="handleSubmit" />
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
  passengers: any;
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

  if (!result.success) {
    userMassage.value = fromZodError(result.error);
    severity.value = "error"
  } else {
    userMassage.value = 'Success!'
    severity.value = "success"
  }
}
</script>

<style>
.header-title {
  text-align: center !important;
}

.container {
  /* display: flex; */
  /* justify-content: center; */
  margin-top: 40px;
  text-align: center;
}

.container hr {
  border: 1px solid rgb(252, 243, 228) !important;
  margin: 20px;
}

.container>div {
  border: 1px solid rgb(179, 209, 234);
  border-radius: 10px 0 10px 0;
  padding: 20px;
}

@media (max-width: 768px) {
  .container>div {
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

.submit-button {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.header-container {
  text-align: center;
  margin-bottom: 3rem;
}

.main-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.sub-title {
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.2;
}

.text-navy {
  color: #1e3a8a;
}

.text-amber {
  color: #b45309;
  background: -webkit-linear-gradient(left,#1e3a8a, #b45309);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-orange {
  color: rgb(234, 161, 33);
}
</style>
