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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTodo(id) {
      const response = await fetch();
    },
  },
});
