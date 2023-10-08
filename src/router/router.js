import Main from '@/pages/Main.vue'
import PostPage from '@/pages/PostPage.vue'
import PostPageWithStore from '@/pages/PostPageWithStore.vue'
import About from '@/pages/About.vue'
import PostIdPage from '@/pages/PostIdPage.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', component: Main},
    {path: '/posts', component: PostPage},
    {path: '/store', component: PostPageWithStore},
    {path: '/about', component: About},
    {path: '/posts/:id', component: PostIdPage},
]

const router = new createRouter({
    routes,
    history: createWebHistory()
})

export default router;