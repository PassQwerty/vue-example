import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore('posts', {
  state() {
    return {
      posts: [],
      dialogVisible: false,
      initialLoadComplete: false, // Добавлен флаг
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPage: 0,
    };
  },
  actions: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((currentPost) => currentPost.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
        this.initialLoadComplete = true;
      } catch (error) {
        alert(error);
      }
    },
  },
  getters: {
    isPostsLoading() {
      return !this.initialLoadComplete && this.page === 1;
    },
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((currPost) =>
        currPost.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
});