<script>
import { useTodoStore } from '../stores/todoStore';

export default {
  setup(){
    const apps = useTodoStore()
    return {apps}
  },
  async mounted(){
   this.apps.selectTodo(this.$route.params.id)  
  }
}

</script>

<template>
    <div class="container">
        <router-link to="/">Back to</router-link>
        <form class="formContainer">
          <input class="input" placeholder="Enter Name" />
          <input class="input" placeholder="Enter Description" name="description" />
          <button type="submit" class="button">Ekle</button>
        </form>
    </div>
  
</template>

<style>
.input {
  padding: 5px;
  outline: none;
  width: 100%;
}
.formContainer {
  gap: 5px;
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
</style>
