<template>
  <div id="Imageloop">
    <div
      v-for="post in posts"
      :key="post.id"
      class="col-sm-12 col-md-4 col-lg-4"
    >
      <!-- {{ post }} -->
      <!-- <img src="post" /> -->
      <img v-bind:src="post" class="img-fluid img-cls mb-5" />
      <!-- <PhotoItem v-bind:image="image" :set-image="setImage" /> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Imageloop",
  components: {},
  props: {},

  data() {
    return {};
  },

  computed: {
    ...mapState(["posts"]),
  },

  watch: {},

  mounted() {
    this.$store.dispatch("loadPosts");
  },

  methods: {}
};
</script>

<style lang="scss" scoped></style>