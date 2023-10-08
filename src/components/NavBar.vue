<template>
    <div class="wrapperNavBar">
        <div class="navMenu">
            <router-link active-class="activeLink" to="/"><my-logo height="2.2rem" /></router-link>
            <div class="links">
                <router-link
                    v-for="link in links"
                    :key="link.name"
                    :to="link.url"
                    active-class="activeLink"
                >
                    {{ link.name }}
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
import MyLogo from './MyLogo.vue'
import linksData from '@/config/urls.js';

export default {
    components: { MyLogo },
    data() {
        return {
            links: [],
        };
    },
    mounted(){
        this.links = linksData;
    }
}
</script>

<style>

.wrapperNavBar {
    margin-bottom: 1rem;
    background-color: rgb(0, 180, 0);
    border-bottom: 3px solid rgba(0, 0, 0, 0.445);
    
}

.navMenu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
}

.links {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.navMenu a {
    font-size: 1.2rem;
    text-decoration: none;
    color: var(--text-color-link);
    fill: var(--text-color-link);
    transition: color .15s ease-in-out;
}

.navMenu a:hover {
    color: var(--text-color-link-hover);
}

.activeLink {
    pointer-events: none;
    color: var(--text-color-link-hover) !important;
    fill: var(--text-color-link-hover) !important;
    font-weight: 600;
}
</style>