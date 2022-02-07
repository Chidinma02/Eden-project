<template>
  <div class="hello">
    <div class="container-fluid">
      <h3>Dogs</h3>

      <div class="">
        <div class="row">
          <div
            v-for="post in posts"
            :key="post.id"
            class="col-sm-12 col-md-3 col-lg-4"
          >
            <img v-bind:src="post" class="img-fluid img-cls mb-5" />
            <!-- <PhotoItem v-bind:image="image" :set-image="setImage" /> -->
          </div>
          <div
            v-for="post in posts"
            :key="post.id"
            class="col-sm-12 col-md-3 col-lg-4"
          >
            <img v-bind:src="post" class="img-fluid img-cls mb-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",

  props: {
    msg: String,
  },

  computed: {
    ...mapState(["posts"]),
  },

  // computed: mapGetters(["allTodos"]),
  mounted() {
    this.$store.dispatch("loadPosts");
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  paddding: 0px;
}

.img-cls {
  height: 75vh;
}
</style>