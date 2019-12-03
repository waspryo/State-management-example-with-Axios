import Vue from "vue";
import vuex from "vuex";
import axios from "axios";

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    posts: []
  },
  actions: {
    //   親のApp.vueコンポーネントに呼び出してもらう
    loadPosts () {
        console.log('load posts')
    }
  },
  mutations: {

  }
});
