<script>
import PopupModal from './PopupModal.vue';
export default {
    data(){
        return {
            open:false,
           
        }
    },
    props: {
        todo: Object,
        deleteCard: Function
    },
    methods: {
        isVisible() {
            this.open = !this.open
        }
    },
    components: { PopupModal }
}
</script>

<template>
    <main class="card">
        <p class="todo">{{todo.name}}</p>
        <p class="">{{todo.description}}</p>
        <button @click="isVisible">
            Sil
        </button>
        <PopupModal :open="open" :todo="todo" />
    </main>
</template>

<style>
.card {
    background-color: #F5F5F5;
    max-width: 600px;
    width: 100%;
    height: 100px;
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
/* .card:hover{
    transform: scale(0.9);
} */
</style>