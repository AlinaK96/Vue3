<template>
<form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button type="submit">Create</button>
</form>


</template>

<script>
export default{
    data(){
        return{
            title: ''
        }
    },
    methods:{
        onSubmit(){
            if (this.title.trim() != ''){
                let newToDo = {
                    id:Date.now(),
                    title: this.title,
                }
            }

            this.$emit('add-todo', newToDo)
        }
    }
}

</script>

<style scoped>
form{
    display: flex;
    margin: 0 25%;

}

input{
    width: 400px;
    outline: none;
}

button{
    background-color: #FBCEB1;
    color: white;
    cursor: pointer;
    border: transparent;
    width: 120px;
    margin-left: 15px;
}
</style>