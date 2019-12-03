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
    loadPosts ({commit}) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
            let posts = res.data
            commit('SET_POSTS', posts)
        }).catch(error => {
            console.log(error)
        })
    }
    // axtionsにmutationsにコミットするデータを定義し
    // mutationsにはstateのパラメーターを渡し新しく28nのようにapiのデータを使う
  },
  mutations: {
    SET_POSTS (state, posts) {
        state.posts = posts
    }
  }
});
