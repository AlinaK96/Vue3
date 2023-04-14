<template>
    <li>
        <span class="tick">
            <input type="checkbox" class="custom-checkbox">
            <strong>{{ action.id }}</strong>
            {{ action.title }}
        </span>

        <button class="remove" v-on:click="$emit('delite', action.id)">&times;</button>
    </li>
</template>

<script>
export default{
    props: {
        action:{
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>

li{
    border: 1px solid #9DF3C4;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
    font-family: 'Heebo', sans-serif;
    color: #07361c;
}

.remove{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-weight: bold;
    background-color: #FBCEB1;
    border: transparent;
    color: white;
}

.done{
    text-decoration: line-through;
}

input{
    margin: 0 1rm;
}

.custom-checkbox {
    display: inline-flex;
    align-items: center;
    user-select: none;
    margin-right: 10px;
}
  .custom-checkbox:before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: transparent;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
}

.custom-checkbox:checked:before {
    border-color: #FBCEB1;
    background-color: #FBCEB1;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}


</style>