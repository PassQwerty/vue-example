<template>
    <form  @submit.prevent>
        <h2 style="font-size: 1.5rem;">Создание нового поста</h2>
        <div class="containerInput">
            <my-input v-focus v-model="post.title" placeholder="Название" />
            <my-input v-model="post.body" placeholder="Описание" />
        </div>
        <my-button 
                class="success btnSizeXL" 
                type="button"
                @click="createPost">
            Создать
        </my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            },
            mockVariable: "новая переменная",
            mockVariable1: 45,
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post, this.mockVariable, this.mockVariable1); // создание события
            this.post = {
                title: "",
                body: "",
            };
        },
    },
};
</script>   

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}
.containerInput{
    display: flex;
    flex-direction: column;
    gap: .3rem;
}

</style>