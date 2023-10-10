<script setup>
import TodoInput from '../components/TodoInput.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
</script>

<template>
  <main>
    <NavbarComponent />
    <div class="alan">
      <TodoInput />
    </div>
  </main>
</template>

<style>
.alan {
  display: flex;
  justify-content: center;
  flex-direction: column;

}
</style>