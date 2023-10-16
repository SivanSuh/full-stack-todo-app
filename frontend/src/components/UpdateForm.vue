<script>
import { useTodoStore } from '../stores/todoStore';

export default {
  setup(){
    const apps = useTodoStore()
    return {apps}
  },
  methods:{
    async submitForm(){
      const { _id,name,description} = this.apps.selectData;
      if(!description.trim() && !name.trim()){
        return 
      }
      else {
       await this.apps.updateTodo(_id,this.apps.selectData)
       await this.apps.getTodo()
      }
    },
  },
  async mounted(){
   await this.apps.selectTodo(this.$route.params.id)  
  },
}

</script>

<template>
    <div class="container">
        <router-link to="/">Back to</router-link>
        <form class="formContainer" @submit.prevent="submitForm">
          <input v-model="apps.selectData.name " class="input" name="name"  placeholder="Enter Name" />
          <input v-model="apps.selectData.description " class="input"  placeholder="Enter Description" name="description" />
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
  display: flex;
  flex-direction: column;
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
