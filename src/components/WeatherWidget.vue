<template>
  <div class="Background">
    <video autoplay muted loop src="../assets/anime.mp4" />
  </div>
  <q-page>
    <q-card flat bordered class="q-ma-md" style="max-width: 500px; border-radius: 20px; margin: 10 auto;">
      <q-card-section>
        <div class="text-h6">Cuaca</div>
        <q-input v-model="location" label="Cari Kota" @keyup.enter="getWeather" />
      </q-card-section>
      <q-card-section v-if="weather">
        <div class="text-subtitle1">{{ weather.name }}</div>
        <div class="text-body1">{{ weather.weather[0].description }}</div>
        <div class="text-body2">Temp: {{ weather.main.temp }}°C</div>
      </q-card-section>
    </q-card>

    <div class="city-cards-container">
      <q-card flat bordered class="q-ma-md city-card" v-if="jakartaWeather">
        <q-card-section>
          <div class="text-h6">Indonesia</div>
          <div class="text-subtitle1">{{ jakartaWeather.name }}</div>
          <div class="text-body1">{{ jakartaWeather.weather[0].description }}</div>
          <div class="text-body2">Temp: {{ jakartaWeather.main.temp }}°C</div>
        </q-card-section>
      </q-card>

      <q-card flat bordered class="q-ma-md city-card" v-if="jepangWeather">
        <q-card-section>
          <div class="text-h6">Jepang</div>
          <div class="text-subtitle1">{{ jepangWeather.name }}</div>
          <div class="text-body1">{{ jepangWeather.weather[0].description }}</div>
          <div class="text-body2">Temp: {{ jepangWeather.main.temp }}°C</div>
        </q-card-section>
      </q-card>

      <q-card flat bordered class="q-ma-md city-card" v-if="amerikaWeather">
        <q-card-section>
          <div class="text-h6">Amerika</div>
          <div class="text-subtitle1">{{ amerikaWeather.name }}</div>
          <div class="text-body1">{{ amerikaWeather.weather[0].description }}</div>
          <div class="text-body2">Temp: {{ amerikaWeather.main.temp }}°C</div>
        </q-card-section>
      </q-card>

      <q-card flat bordered class="q-ma-md city-card" v-if="chinaWeather">
        <q-card-section>
          <div class="text-h6">China</div>
          <div class="text-subtitle1">{{ chinaWeather.name }}</div>
          <div class="text-body1">{{ chinaWeather.weather[0].description }}</div>
          <div class="text-body2">Temp: {{ chinaWeather.main.temp }}°C</div>
        </q-card-section>
      </q-card>
    </div>
    <q-footer class="q-pa-md text-center" style="background-color: slategrey;">
      <div>© 2024 Ebby Arrahman Traif</div>
    </q-footer>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const location = ref('');
const weather = ref(null);
const jakartaWeather = ref(null);
const jepangWeather = ref(null);
const amerikaWeather = ref(null);
const chinaWeather = ref(null);
const apiKey = 'abdb7a4d5e99a4c5aa10c7c503d67065';

const getWeather = async () => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${apiKey}&units=metric`);
    weather.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const getCityWeather = async (city, state) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    state.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await getCityWeather('Jakarta', jakartaWeather);
  await getCityWeather('Tokyo', jepangWeather);
  await getCityWeather('Washington,US', amerikaWeather);
  await getCityWeather('Beijing', chinaWeather);
});
</script>

<style>
.q-page {
  z-index: 1;
}
.q-ma-md {
  margin: 20px auto;
  box-shadow: 0 0 0 10px white;
}
.q-card {
  margin-top: 100px;
  background-color: transparent;
  color: white;
  backdrop-filter: blur(5px);
}
.q-input {
  color: white;
}
label {
  color: white;
}
.city-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.city-card {
  max-width: 300px;
  margin: 10px;
}
.Background video {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 90%;
  min-width: 1500px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -2;
  object-fit: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  filter: brightness(0.8);
}
</style>
