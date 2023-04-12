const App = {
    data() {  //метод дата передаёт данные в HTML
        return {
            counter: 5,
            title: 'Счётчик'
        }
    }
}

// const app = Vue.createApp(App)
// app.mount('#app')  // в html выбираем область работы VUE и переаём при помощь метода

//без создания переменной
Vue.createApp(App).mount('#app')

const input = {
    data(){
        return {
            inputTitle: 'Список заметок',
            noNotes: 'У вас пока нет заметок',
            placeholder: 'Введите название заметки', //в атрибуты значения вносятся по другому v-bind:placeholder= "placeholder"
            inputValue: '',
            notes: ['Полить цветы', 'Купить бананы']
        }
    },
    methods:{
        SaveInput(event){
            this.inputValue = event.target.value

        },
        addNewNote() {
            if (this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }

        },

        removeNote(index){
            this.notes.splice(index, 1)
        }
    }
}

Vue.createApp(input).mount('#input')