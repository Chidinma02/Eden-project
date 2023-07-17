import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Search from "../components/Search.vue";
import details from "../components/Details.vue";
Vue.use(VueRouter);


Vue.directive('image-lazy', {
  inserted: (el) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imageElement = entry.target;
          const imageUrl = imageElement.getAttribute('data-src');
          if (imageUrl) {
            imageElement.src = imageUrl;
            observer.unobserve(imageElement);
          }
        }
      });
    });

    observer.observe(el);
  },
});
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/details/:breed/:id/",
    name: "details",
    component: details,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
