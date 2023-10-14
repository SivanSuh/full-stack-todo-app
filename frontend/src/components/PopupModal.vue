<script>
import { Transition, nextTick } from "vue";
import { useTodoStore } from "../stores/todoStore";

export default {
  props: {
    open: Boolean,
    todo:Object
  },
  setup(){
    const todoStore = useTodoStore();
    return {
      todoStore
    };
  },
  methods : {
    async deleteSelectTodo(id){
     await this.todoStore.deleteTodo(id);
      open = false
     await this.todoStore.getTodo()
    }
  },
  
  async mounted(){
    console.log("todoss",this.todo)
    this.todoStore.getTodo()
  },
  components: { Transition },
};

</script>

<template>
  <Transition>
    <div class="modal" v-if="open">
      <div class="modalAlan">
       <div class="closeContainer">
        <div>{{ todo._id  }}</div>
        <button @click="open = false" class="closeBtn">X</button>
       </div>
        <div style="text-align: center;padding-top: 20px;">
          <p><strong class="strong">{{ todo.name}}</strong> Silmek isteginize emin misiniz?</p>
          <button class="deleteButton" @click="deleteSelectTodo(todo._id)">Sil</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #c8c8c8;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.deleteButton {
  background-color: red;
  color: white;
  padding: 5px 10px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
}
.closeBtn {
  font-size: 25px;
}
.strong {
  font-weight: bold;
}
.closeContainer {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}
.modalAlan {
  position: fixed;
  width: 400px;
  height: 200px;
  background-color: white;
}
.modal-inner {
  background-color: white;
  border-radius: 0.5em;
  padding: 2em;
  margin: auto;
}
</style>
