<script>
import TodoCard from './TodoCard.vue';


export default {
    data() {
        return {
            text: "",
            todos: []
        };
    },
    methods: {
        incremant() {
            this.todos.push({
                name: this.text
            });
            this.text = "";
        }
    },
    components: { TodoCard }
}
</script>

<template>
    <main>

        <div class="container">
            <input class="input" v-model="text" placeholder="Enter Anythink" />
            <button @click="incremant" class="button">Ekle</button>
        </div>
        <div class="wrapper">
            <TodoCard :todo="data.name" v-for="data in todos" :key="data.name" />
        </div>
    </main>
</template>

<style>
.input {
    padding:5px;
    outline: none;
    width: 400px;
    
}
.button {
    padding: 5px;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px ;
}
</style>