<script>
import axios from 'axios'

export default{
    data(){
        return{
            city: '',
            error: '',
            info: null
        }
    },
    methods: {
        getWeather() {
            if (this.city.trim().length < 3){
                this.error = 'Invalid input'
                return false
            }

            this.error = ''
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=3d9de74844d28377e81415151cbe6a66`)
                .then(res => (this.info = res.data))

        }
    }
}

//библиотека axious
</script>

<template>
    <div class="wrapper">
        <h1>Weather request app</h1>
        <p>Learn the weather in {{ city == '' ? 'your city' : city }}</p>
        <input type="text" v-model="city" placeholder="city name" v-on:keypress.enter="getWeather">
        <!-- <button v-show="city !== ''">Узнать погоду</button> -->
        <button v-if="city !== '' " @click="getWeather()">Check the weather</button>
        <button disabled v-else>type your city</button>
        <p class="error">{{ error }}</p>

        <div v-if="info != null " class="information">
            <p>Temperature: {{ info.main.temp }}  &#8451;</p>
            <p>Feels like: {{ info.main.feels_like }} &#8451;</p>
            <p>Minimal temperature during the day: {{ info.main.temp_min }} &#8451;</p>
            <p>Maximal temperature during the day: {{ info.main.temp_max }} &#8451;</p>
            <p>Air pressure: {{ info.main.pressure }} mm Hg</p>
            <p>Humidity: {{ info.main.humidity }} &#37;</p>
            <p>Wind speed: {{ info.wind.speed }} m/s</p>
        </div>
        


    </div>
</template>

<style scoped>


</style>
