import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

createApp(App).mount('#app')

const ticks = document.querySelectorAll('.tick')

for (const tick  of ticks){
    tick.addEventListener('click', function(){
        tick.classList.toggle('done')
    })
}