import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import components from '@/components/UI'
import router from '@/router/router'
import directives from './directives'

const pinia = createPinia()
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

directives.forEach(directives => {
    app.directive(directives.name, directives)
})

app.use(pinia).use(router).mount('#app')
