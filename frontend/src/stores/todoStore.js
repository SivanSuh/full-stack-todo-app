import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo-store", {
  state: () => ({
    datas: [],
    name: "Merhaba",
  }),
  actions: {
    async getTodo() {
      try {
        const response = await fetch("http://localhost:3000/todo");
        const data = await response.json();
        this.datas = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addNewTodo(data) {
      try {
        const response = await fetch("http://localhost:3000/todo", {
          method: "POST",
          body: JSON.stringfy(data),
        });
      } catch (error) {}
    },
  },
});
