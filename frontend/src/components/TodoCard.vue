<script>
export default {
    props:{
        todo:String
    }
}
</script>

<template>
    <main class="card">
        <p class="todo">{{todo.name}}</p>
        <p class="">{{todo.description}}</p>
    </main>
</template>

<style>
.card {
    background-color: #F5F5F5;
    width: 150px;
    height: 150px;
    transition: transform .2s linear;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.todo {
    font-size: 20px;
    font-weight: bold;
    word-break: break-all;
    padding: 5px;
}
.card:hover{
    transform: scale(0.9);
}
</style>