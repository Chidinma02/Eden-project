<template>
  <div id="Details" class="container">
    <h1 class="mt-3">Information about the dog you clicked</h1>

    <!-- <h1>{{ id }}</h1> -->
    <!-- <h1>{{ breed }}</h1> -->
    <div class="row">
      <div class="col-12">
        <img :src="`https://images.dog.ceo/breeds/${breed}/${id}.jpg`" />
        <br />
        <router-link to="/">
          <button class="mt-3 btn btn-lg btn-Success">Go back</button>
        </router-link>
      </div>
    </div>

    <h5 class="mt-3">Name of Dog : {{ breed }}</h5>
  </div>
</template>

<script>
export default {
  name: "Details",
  components: {},
  props: {},

  data() {
    return {
      id: null,
      breed: null,
    };
  },

  computed: {},
  watch: {},
  mounted() {
    this.id = this.$route.params.id;
    this.breed = this.$route.params.breed;
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>