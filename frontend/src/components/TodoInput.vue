<script>
import TodoCard from "./TodoCard.vue";
import { useTodoStore } from "../stores/todoStore";

export default {
  data() {
    return {
      form: {
        text: "",
        description: "",
      },
    };
  },
  methods: {
    submitForm(){
        console.log("form",this.form)
    }
  },
  setup() {
    const todoStore = useTodoStore();
    return {
      dataFunk: todoStore.getTodo(),
      data: todoStore.datas,
      name: todoStore.name,
    };
  },
  components: { TodoCard },
};
</script>

<template>
  <main>
    <form class="container" @submit.prevent="submitForm">
      <input class="input" v-model="form.text" placeholder="Enter Name" />
      <input
        class="input"
        v-model="form.description"
        placeholder="Enter Description"
      />
      <button type="submit" class="button">Ekle</button>
    </form>
    <div class="wrapper">
      <TodoCard :todo="da" v-for="da in data" :key="da._id" />
    </div>
  </main>
</template>

<style>
.input {
  padding: 5px;
  outline: none;
  width: 100%;
}
.button {
  padding: 5px;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  margin: auto;
}
.wrapper {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
}
</style>
