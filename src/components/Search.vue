<template>
  <div id="Search">
    <!-- loadsear(context, payload) -->
    <div class="container-holder">
      <div class="searchBar">
        <form @submit.prevent="$store.dispatch('loadsear', keyword)">
          <input
            type="text"
            v-model="keyword"
            class="searchBox pl-5"
            placeholder="Search for any kind of dogs"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Search",
  components: {},
  props: {},

  data() {
    return {
      populateDoggoSelect: "",
      keyword: "",
    };
  },

  computed: {
    ...mapState(["sear"]),
  },
  watch: {},
  mounted() {
    this.$store.dispatch("loadsear");
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.con {
  height: 50vh;
  display: flex;
  align-items: center;
}
.container-holder {
  background-color: rgb(33, 33, 33);
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.searchBar {
  width: 80%;
  margin: 0 auto;
}

.searchBox {
  width: 100%;
  padding: 10px 5px;
  border-radius: 5px;
  outline: none;
  border: none;
}

.searchBox:focus {
  border: 2px solid #84d2ff;
}
.nav-search {
  background-color: #dce2e9 !important;
}
.c {
  background-color: #ccc;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
}

@media screen and (min-width: 990px) {
  .c {
    grid-template-columns: repeat(3, 1fr);
  }
}

.c img {
  display: block;
  width: 100%;
  height: 60vh;
}

.image_grid {
  position: relative;
}

.detail {
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 30px;
  text-align: left;
}

.name {
  font-weight: 700;
}
</style>