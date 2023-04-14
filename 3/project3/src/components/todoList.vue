<template>
<div>
    <ul>
        <todoListItem 
        v-for="td of list"
        v-bind:action="td"
        v-on:delite="deliteListItem"
        />
    </ul>
</div>


</template>

<script>
import todoListItem from './todoListItem.vue'

export default{
    props:['list'],
    components:{
        todoListItem
    },
    methods:{
        deliteListItem(id){
            this.$emit('deliteListItem', id)
        }
    }
}



</script >

<style scoped>

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

</style>