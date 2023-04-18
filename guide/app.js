

const appPractice = Vue.createApp({
    data(){
        return {
            title: 'Hello world',
            styleCSS: '',
            value: 1,
            show: true,
            cars: [
                {model: 'Ford', speed: 160.5},
                {model: 'BMW', speed: 250.8},
                {model: 'Audi', speed: 240.21},
                {model: 'Porsche', speed: 240.21}
            ],
            message: 'Hello',
            change: true
        }
    },
    methods: {
        changeText(){
            this.title = 'Some new text'
        },
        increment(value){
            this.value = value
            if ( value == 25)
                alert('25')
        }
    },
    computed: {
        doubleValue(){
            return this.value * 2
        },
        hiddenMessage(){
            return this.message.toUpperCase()
        }
    }
}).mount('#app')



// Определяем новый глобальный компонент с именем button-counter
appPractice.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      Счётчик кликов — {{ count }}
    </button>`
})

appPractice.mount('#components-demo')

appPractice.component('carsList', {
  data() {
    return {
      carsList: [
        {model: 'Ford', speed: 160.5},
        {model: 'BMW', speed: 250.8},
        {model: 'Audi', speed: 240.21},
        {model: 'Porsche', speed: 238.21}
      ]
    }
  },
  template: `
    <div><div class='car' v-for="car in carsList"><p>{{car.model}}</p></div></div>
  `
})