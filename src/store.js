import Vue from "vue";
import vuex from "vuex";
import axios from "axios";

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    posts: []
  },
  actions: {
    loadPosts () {
        console.log('load posts')
    }
  },
  mutations: {

  }
});
