<script >
import TodoCard from "./TodoCard.vue";
import { useTodoStore } from "../stores/todoStore";

export default {
  data() {
    return {
      form: {
        name: "",
        description: "",
      },
    };
  },
  setup() {
    const todoStore = useTodoStore();
    return {
      todoStore
    };
  },
  methods: {
    async submitForm(){
      if(!this.form.description.trim() && !this.form.name.trim()){
        return 
      }
      else {
       await this.todoStore.addNewTodo(this.form)
        this.form = {
          description:"",
          name:""
        }
       await this.todoStore.getTodo()
      }
    },
    selectTodos(id){
      const data = this.todoStore.datas.find((item) => item._id === id)
      console.log("seçilen data ",data)
    }

  },
  async mounted(){
    this.todoStore.getTodo()
  },
  components: { TodoCard },
};
</script>

<template>
  <main>
    <form class="container" @submit.prevent="submitForm">
      <input class="input" v-model="form.name" name="name" placeholder="Enter Name" />
      <input
        class="input"
        v-model="form.description"
        placeholder="Enter Description"
        name="description"
      />
      <button type="submit" class="button">Ekle</button>
    </form>
    <div class="wrapper">
      <TodoCard :todo="da"  v-for="da in todoStore.datas" :key="da._id" />
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
