<template>
  <div class="containerPost">
    <h1>Страница с постами</h1>
    <my-input v-model="postsStore.searchQuery" placeholder="Поиск..." />
    <div class="appButtons">
      <my-button class="buttonOutline success btnSizeM" style="max-width: 10rem;" @click="postsStore.showDialog">
        Создать пост
      </my-button>
      <my-select v-model="postsStore.selectedSort" :options="postsStore.sortOptions" />
    </div>
    <my-dialog v-model:show="postsStore.dialogVisible">
      <PostForm @create="postsStore.createPost" />
    </my-dialog>
    <PostList v-if="postsStore.initialLoadComplete === true" :posts="postsStore.sortedAndSearchedPosts" @remove="postsStore.removePost" />
    <div v-else>
      <span class="loader"></span>
    </div>
    <div v-intersection="postsStore.fetchPosts" class="observer">
    </div>
  </div>
</template>

<!-- Options API -->
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { usePostsStore } from "@/store/posts";

export default {
  data() {
    return {
      postsStore: usePostsStore(),
    };
  },
  methods: {
    fetchPosts() {
      this.postsStore.fetchPosts();
    },
  },
  components: {
    PostForm,
    PostList,
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<!-- Composition API -->
<!-- <script setup>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { usePostsStore } from "@/store/posts";

const postsStore = usePostsStore();
postsStore.fetchPosts();

</script> -->


<style scoped>
.app {
  padding: 1rem;
}

.containerPost {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.appButtons {
  display: flex;
  justify-content: space-between;
}

.observer {}
</style>
