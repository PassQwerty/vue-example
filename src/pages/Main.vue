<template>
  <h1>Main page</h1>
  <div class="storeWrapper">
    <h3>Current Count: {{ counter.count }}</h3>
    <div class="buttonWrapper">
      <my-button 
        class="buttonOutline success btnSizeM" 
        @click="counter.$patch({ count: counter.count + 1 })"
      >
        Увеличить на 1
      </my-button>

    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()
</script>

<script>
export default {

}
</script>

<style scoped>
.storeWrapper{
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 0.5rem;
}
.buttonWrapper{
  width: 10rem;
}
</style>