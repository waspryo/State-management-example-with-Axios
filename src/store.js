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
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }
  },
  mutations: {

  }
});
