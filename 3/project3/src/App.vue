<script>
import todoList from './components/todoList.vue'
import addComponent from './components/addComponent.vue'

export default {
  data(){
    return{
      ToDo: [
        {id: '1.', title: 'Water the plants'},
        {id: '2.', title: 'Do the groceries'},
        {id: '3.', title: 'Do homework'},
        {id: '4.', title: 'No pnone time'}
      ]
    }
  },
  components: {
    todoList,
    addComponent
  },
  methods:{
    deliteListItem(id){
      this.ToDo = this.ToDo.filter(t => t.id != id)
    },
    addTodo(todo){
      this.ToDo.push(todo)
    }
  }
}
</script>

<template>
 <div id="app">
  <h1>To do list: </h1>
  <addComponent 
    @add-todo="addTodo"
  />
  <hr>
  <todoList v-bind:list="ToDo"
            @deliteListItem="deliteListItem"
  />
 </div>
</template>

<style scoped>
h1{
  color: #3C9061;
  font-family: 'DynaPuff', cursive;
  text-align: center;
}
</style>
