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
          {{ $t('one_way') }}
        </label>
        <label class="flex items-center">
          <input type="radio" name="tripType" value="round" v-model="data.tripType" class="mr-2" />
          {{ $t('round_trip') }}
        </label>
      </div>

      <hr />

      <div class="inputs-container">
        <div>
          <div>
            <svg class="absolute left-3 top-3 h-5 w-5 text-yellow-400" style="color: rgb(234, 161, 33);" width="20px"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(234, 161, 33)" stroke="currentColor"
              stroke-width="2">
              <path d="M22 2 2 22M14.5 9.5 22 2M8.5 15.5 2 22M3 7l5 5M17 21l-5-5" />
            </svg>
            {{ $t('from') }}
          </div>
          <InputText v-model="data.from" placeholder="Flight from?" />
        </div>

        <div>
          <div>
            <svg class="absolute left-3 top-3 h-5 w-5 text-yellow-400" style="color: rgb(234, 161, 33);" width="20px"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(234, 161, 33)" stroke="currentColor"
              stroke-width="2">
              <path d="M22 2 2 22M14.5 9.5 22 2M8.5 15.5 2 22M3 7l5 5M17 21l-5-5" />
            </svg>
            {{ $t('to') }}
          </div>
          <InputText v-model="data.to" placeholder="Flight to?" />
        </div>
        <div>
          <div>
            <svg class="absolute left-3 top-3 h-5 w-5 text-yellow-400" style="color: rgb(234, 161, 33);" width="20px"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(234, 161, 33)" stroke="currentColor"
              stroke-width="2">
              <path d="M22 2 2 22M14.5 9.5 22 2M8.5 15.5 2 22M3 7l5 5M17 21l-5-5" />
            </svg>
            {{ $t('depart') }}
          </div>
          <Calendar v-model="data.depart" :minDate="new Date()" placeholder="dd-MM-yyyy" />
        </div>
        <div>
          <div>
            <svg class="absolute left-3 top-3 h-5 w-5 text-yellow-400" style="color: rgb(234, 161, 33);" width="20px"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(234, 161, 33)" stroke="currentColor"
              stroke-width="2">
              <path d="M22 2 2 22M14.5 9.5 22 2M8.5 15.5 2 22M3 7l5 5M17 21l-5-5" />
            </svg>
            {{ $t('return') }}
          </div>
          <Calendar v-model="data.return" placeholder="dd-MM-yyyy" :minDate="new Date(data.dateFrom)" />
        </div>
        <div>
          <div>
            <svg class="absolute left-3 top-3 h-5 w-5 text-yellow-400" style="color: rgb(234, 161, 33);" width="20px"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(234, 161, 33)" stroke="currentColor"
              stroke-width="2">
              <path d="M22 2 2 22M14.5 9.5 22 2M8.5 15.5 2 22M3 7l5 5M17 21l-5-5" />
            </svg>
            {{ $t('cabin_class') }}
          </div>
          <Dropdown v-model="data.ticketClass" :options="ticketClassOptions.slice()" :placeholder="$t('ticketClass')"
            aria-label="{{ $t('ticketClass') }}" />
        </div>

        <div class="search_container">

          <svg width="20px" style="color: white;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import z from 'zod';
import { fromZodError } from 'zod-validation-error';


const ticketClassOptions = ["Economy", "Business", "First"];
const tripTypesOptions = ["One-way", "Round-trip"];


const data = ref({});



const userSchema = z.object({
  dateFrom: z.date(),
  dateTo: z.date(),
  ticketClass: z.enum(ticketClassOptions),
  tripType: z.enum(tripTypesOptions),
  passengers: z.number()
});

const userMassage = ref('');
const severity = ref('')

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
  margin-top: 40px;
  text-align: center;
}

.container .p-inputtext {
  border: none;
  margin-top: 20px;
  box-shadow: none;
}

.container .p-calendar,
.container .p-inputwrapper {
  border: none;
  box-shadow: none;
}

.container .p-inputtext:enabled:focus
.container .p-calendar:enabled:focus,
.container .p-inputwrapper:enabled:focus,
.container .p-inputtext:enabled:focus{
  outline: none;
  border-bottom: 2px solid orange;
  border-radius: 0;
}

.container .p-icon {
  margin-top: 25px;
}

.container hr {
  border: 1px solid rgb(252, 243, 228) !important;
  margin: 20px;
}

.container>div {
  border: 1px solid rgb(155, 166, 175);
  border-radius: 10px 0 10px 0;
  padding: 40px 20px;
}

.inputs-container {
  display: flex;
    flex-wrap: wrap;
}

.inputs-container>div>div {
  text-align: start;
  margin: 10px 0 0 15px;
  width: 230px;
}

.search_container {
  margin: 10px 0 0 20px;
  width: 60px;
  height: 40px;
  background: orange;
  display: flex;
  justify-content: center;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .container>div {
    width: 100%;
  }
}

.container .p-calendar {
  padding: 0 5px;
}

.container > div{
  background-color: white;
}

.form__field-dropdown {
  padding: 20px 5px;
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
  margin: 100px 0;
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
  background: -webkit-linear-gradient(left, #1e3a8a, #b45309);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-orange {
  color: rgb(234, 161, 33);
}
</style>
