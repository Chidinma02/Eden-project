import Vue from "vue";
import vuex from "vuex";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
// import vue from 'vue';

Vue.use(vuex, axios, BootstrapVue);

export default new vuex.Store({
  state: {
    // test: "test 123...",
    posts: [],
  },
  actions: {
    loadPosts({ commit }) {
      // console.log('load post');
      axios
        .get("https://dog.ceo/api/breeds/image/random/50")
        .then((data) => {
          console.log(data.data.message);
          let posts = data.data.message;
          commit("SET_POSTS", posts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
});
