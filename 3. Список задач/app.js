Vue.createApp({
    data(){
        return {
            valueInput:'',
            placeholder: 'Введите новую задачу',
            tasks: [],
            deletedTasks: []
        }
    },
    methods: {
        newInput(event){
            this.valueInput = event.target.value
        },
        addTask(){
            if (this.valueInput === ''){return}
            this.tasks.push ({
                title: this.valueInput,
                id: Math.random()
            }),
            this.valueInput = ''
        },
        doCheck(index, type){
            if (type === 'need'){
                const competeTask = this.tasks.splice(index, 1)
                this.deletedTasks.push(...competeTask)
            }
            else{
                const notCompeleteTask = this.deletedTasks.splice(index, 1)
                this.tasks.push(...notCompeleteTask)
            }
        },
        removeTask(index, type){
            const deliting = type === 'need'? this.tasks : this.deletedTasks
            deliting.splice(index, 1)
        }
    }
}).mount('#app')