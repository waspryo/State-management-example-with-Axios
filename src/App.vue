<template>
  <div id="app">
    <h1 v-for="(item, index) in posts" :key="index">{{ item.body }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  mounted() {
    // activateするメソッドmounted
    // Storeのアクションメソッドを呼び出す
    this.$store.dispatch("loadPosts");
  },
  computed: {
    ...mapState([
      // storeのpostsメソッドから引っ張ってきたもの
      "posts"
    ])
  }
};
</script>