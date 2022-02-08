<template>
  <div class="hello">
    <div class="container-fluid">
      <Search />
      <h3>Dogs</h3>

      <b-skeleton-wrapper :loading="$store.state.loading">
        <template #loading>
          <b-skeleton-img width="50%" height="50%"> </b-skeleton-img>
        </template>

        <div class="">
          <div class="row" v-if="!loading && posts.length >= 1">
            <div
              v-for="post in posts"
              :key="post.id"
              class="col-sm-12 col-md-3 col-lg-4"
            >
              <router-link
                :to="{
                  name: 'details',
                  params: { id: post.id, breed: post.breed },
                }"
              >
                <img v-bind:src="post.link" class="img-fluid img-cls mb-5" />
              </router-link>
            </div>
            <div
              v-for="post in posts"
              :key="post.id"
              class="col-sm-12 col-md-3 col-lg-4"
            >
              <!-- <router-link -->
              <!-- :to="'/details/' + post.id.substring(7, post.id.length)" -->
              <!-- > -->
              <!-- <img v-bind:src="post" class="img-fluid img-cls mb-5" /> -->
              <!-- </router-link> -->
            </div>
          </div>
          <div v-else>
            <h4 class="mt-5">
              ......ooppps,The name of dog you entered is not available,search
              again
            </h4>
          </div>
          <!-- <div v-else> -->
          <!-- <h1>loading....................</h1> -->
          <!-- <b-skeleton></b-skeleton> -->
          <!-- <b-skeleton-img></b-skeleton-img> -->
          <!-- </div> -->
        </div>
      </b-skeleton-wrapper>
    </div>
  </div>
</template>

<script>
// import store from "../store";
import Search from "./Search.vue";
// import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  components: {
    Search,
  },
  props: {
    msg: String,
  },

  computed: {
    // ...mapState(["posts"]),
    loading() {
      return this.$store.getters.loading;
    },
    posts() {
      return this.$store.getters.posts;
    },
  },

  // computed: mapGetters(["allTodos"]),
  mounted() {
    this.$store.dispatch("loadPosts");
  },
};
</script>

<style scoped>
* {
  margin: 0px !important;
  padding: 0px !important;
}

.img-cls {
  height: 75vh;
}
</style>