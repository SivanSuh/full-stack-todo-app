import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo-store", {
  state: () => ({
    datas: [],
    name: "Merhaba",
    selectData: null,
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
        console.log("response add", response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTodo(id) {
      try {
        const response = await fetch(`http://localhost:3000/todo/${id}`, {
          method: "DELETE",
        });

        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async updateTodo(id, body) {
      try {
        const response = await fetch(`http://localhost:3000/todo/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async selectTodo(id) {
      try {
        const select = await fetch(`http://localhost:3000/todo/${id}`);
        const data = await select.json();
        this.selectData = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
