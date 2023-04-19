Vue.createApp({
    data(){
        return {
            title: 'Header',
            person: {
                name: 'Alina',
                surname: 'Helowowna',
                age: 26
            },
            items:[5,7,8,45,15,36,9,8,1]
        }
    },
    computed:{
        evenItems(){
            return this.items.filter(i => i % 2 === 0)
        },
        oddItems(){
            return this.items.filter( i => i % 2 !== 0)
        }
    }

}).mount('#app')