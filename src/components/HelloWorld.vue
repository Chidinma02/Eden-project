<template>
  <div class="hello">
    <div class="container-fluid">
      <Search />
      <!-- <h3>Dogs</h3> -->

      <b-skeleton-wrapper :loading="$store.state.loading">
        <template #loading>
          <b-skeleton-img width="50%" height="50%"> </b-skeleton-img>
        </template>

        <div class="">
          <div class="row" v-if="!loading && posts.length >= 1">

            <div
              v-for="post in posts"
              :key="post.id"
              class="col-sm-12 col-md-4 col-lg-2"
              
            >
              <router-link
                :to="{
                  name: 'details',
                  params: { id: post.id, breed: post.breed },
                }"
              >
              <div class="image-container">
  <!-- Loop through the images from the Dog API and display them -->
  <div>
 
  <img v-bind:src="post.link" class="image" v-lazy="post.link"  v-image-lazy  />
</div>
</div>

                 <!-- <img v-bind:src="post.link" class="img-fluid img-cls mb-5" />  -->
                 <!-- <b-img v-bind:src="post.link" fluid alt="Fluid image"></b-img> -->
                
              </router-link>
              <button class="btn pl-3 pr-3 btn-success mt-3 mb-3"  @click="applyFilters">Apply Filters</button>  
            </div>

            <div
              v-for="(post,index) in posts"
              :key="post.id"
              class="col-sm-12 col-md-4 col-lg-2"
            >
              <router-link
                :to="{
                  name: 'details',
                  params: { id: post.id, breed: post.breed },
                }"
              >
              <img v-bind:src="post.link" class="image"  />
                 <!-- <img v-bind:src="post.link" class="img-fluid img-cls mb-5" />  -->
                 <!-- <b-img v-bind:src="post.link" fluid alt="Fluid image"></b-img> -->
                 
              </router-link>
              <button class="btn pl-3 pr-3 btn-success mt-3 mb-3"  @click="applyFilters(index)">Apply Filters</button>
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
 import lozad from "lozad";
 import cloudinary from 'cloudinary-core';

// import { mapState } from "vuex";
export default {


  methods: {
    applyFilters(index) {
      console.log("chi")
      console.log(index)
      const cloudinaryInstance = new cloudinary.Cloudinary({
        cloud_name: 'duyiomsdf', 
        api_key: '133149755151374',
        api_secret: '***************************' 
      });
      const postId = this.posts[index];
      // cloudinary.config(cloudinaryConfig);

      // Apply filters and retrieve transformed image URL
      const transformedImageUrl = cloudinaryInstance.url(postId, {
        transformation: [
          { effect: 'cartoonify' },
          { effect: 'grayscale' },
          { effect: 'sepia' }
        ]
      });

      // index = transformedImageUrl;
      console.log("Transformed Image URL:", transformedImageUrl);
   
     },
   
  },

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
    setTimeout(() => {
      const observer = lozad('.image');
      observer.observe();
    }, 1000000);
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
  border-radius: 10px;
}

image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 10px;
     background-color: lightgray;
  }
</style>