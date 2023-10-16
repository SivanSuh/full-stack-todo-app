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
        <div class="buttonContainer">
            <router-link v-bind:to="`/update-page/${todo._id}`">Güncelle</router-link>
            <button @click="isVisible" class="DeleteBtn">
                Sil
            </button>
        </div>
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
.buttonContainer {
    display: flex;
    gap: 5px;
    margin: 10px auto;
}
.todo {
    font-size: 20px;
    font-weight: bold;
    word-break: break-all;
    padding: 5px;
}

.DeleteBtn {
    background-color: red;
    color: white;
    padding: 5px 10px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
}
</style>