<template>
   <!-- v-if="posts.length > 0" || v-else если нужно удалять по условию в DOM v-show просто скрывает -->
  <div v-if="posts.length > 0">
    <h2 class="title">Список постов</h2>
    <div class="containerList">
      <transition-group name="post-list">
        <post-item v-for="post in posts" :post="post" :key="post.id" @remove="deletePost(post)" />
      </transition-group>
    </div>
  </div>
  <h2 v-else style="color: tomato;" class="title">
    Список постов пуст
  </h2>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods:{
    deletePost(post){
      this.$emit('remove', post)
    }
  }
};
</script>

<style scoped>
.title{
    padding: 1rem 0;
}
.containerList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.6s ease;
}
</style>