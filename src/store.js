import Vue from "vue";
import vuex from "vuex";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";

Vue.use(vuex, axios, BootstrapVue);

export default new vuex.Store({
  state: {
    posts: [],
    loading: false,
  },
  actions: {
    loadPosts({ commit }) {
      commit("UPDATE_LOAD_STATE", true);

      axios
        .get("https://dog.ceo/api/breeds/image/random/50")
        .then((data) => {
          // console.log("DATA DOG ANY: ", data.data.message);
          // let posts = data.data.message;
          let results = data.data.message;
          console.log(results[0]);
          const imageArray = results.map((result) => {
            const id = result.substring(30, result.length - 4);

            const idStringArray = id.split("/");
            console.log(idStringArray);
            return {
              breed: idStringArray[0],
              id: idStringArray[1],
              link: result,
            };
          });
          // console.log(imageArray);

          commit("SET_POSTS", imageArray);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          commit("UPDATE_LOAD_STATE", false);
        });
    },
    loadsear(context, payload) {
      let url = `https://dog.ceo/api/breed/${payload}/images`;
      context.commit("UPDATE_LOAD_STATE", true);
      axios
        .get(url)
        // let detailsarr = []
        .then((data) => {
          // console.log("DATA DOG HOUND: ", data.data.message);
          let results = data.data.message;
          console.log(results);
          const imageArray = results.map((result) => {
            const id = result.substring(30, result.length - 4);
            const idStringArray = id.split("/");
            //  console.log(id);
            return {
              // id: id,
              // link: result,
              breed: idStringArray[0],
              id: idStringArray[1],
              link: result,
            };
          });
          if (imageArray.length > 0) {
            context.commit("SET_POSTS", imageArray);
          } else {
            context.commit("SET_POSTS", []);
          }

          context.commit("UPDATE_LOAD_STATE", false);

          // commit("SETS_sear", sear);
        })
        .catch((error) => {
          console.log(error);
          context.commit("SET_POSTS", []);
          context.commit("UPDATE_LOAD_STATE", false);
        });
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SETS_sear(state, sear) {
      state.posts = sear;
    },
    UPDATE_LOAD_STATE(state, payload) {
      state.loading = payload;
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    posts(state) {
      return state.posts;
    },
  },
});
