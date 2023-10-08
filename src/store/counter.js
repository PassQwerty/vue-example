import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  }, 
  // также может быть объявлено как
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})

// Пример:
// import { useCounterStore } from '@/stores/counter'

// const counter = useCounterStore()

// counter.count++
// // автозаполнение ✨
// counter.$patch({ count: counter.count + 1 })
// // или используете действие (action) вместо этого:
// counter.increment()
// </script>

// <template>
//   <!-- Обращайтесь к состоянию напрямую из хранилища -->
//   <div>Current Count: {{ counter.count }}</div>
// </template>