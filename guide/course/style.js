const App = {
    data (){
        return {
            title: 'Счётчик продуктов:',
            count: 1,
            maxCount: 15,
            minCount: 1,
            couch:'1.jpeg',
            firstName: 'Игнатий',
            secondName: 'Иларионович',
            lastName: 'Богатов',
            users: [
                {
                    firstName: 'Игнатий',
                    secondName: 'Иларионович',
                    lastName: 'Богатов'
                },
                {
                    firstName: 'Игнатий',
                    secondName: 'Иларионович',
                    lastName: 'Богатов'
                },
                {
                    firstName: 'Игнатий',
                    secondName: 'Иларионович',
                    lastName: 'Богатов'
                }
          
            ],
        }
    },
    methods: {
        increaseCount(){
            if(this.count < this.maxCount)
                this.count++
        },
        decreaseCount(){
            if (this.count > this.minCount){
                this.count--
            }
        },
        userData(user){
            return `${user.firstName} ${user.secondName} ${user.lastName}`
        }
    },
    computed:{
        getAuthorFullName() {
            return `${this.firstName}  ${this.secondName}  ${this.lastName}`
        }
    }
}

Vue.createApp(App).mount('#app')