// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";
// import store from "./store";
// import BootstrapVue from "bootstrap-vue";

// Vue.config.productionTip = false;
// Vue.use(BootstrapVue);
// new Vue({
// store,
// router,
// render: (h) => h(App),
// }).$mount("#app");
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.directive('image-lazy', {
  inserted: (el) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imageElement = entry.target;
          const imageUrl = imageElement.getAttribute('data-src');
          if (imageUrl) {
            setTimeout(() => {
              imageElement.src = imageUrl;
              observer.unobserve(imageElement);
            }, 600000); // Adjust the delay time as needed
          }
        }
      });
    });

    observer.observe(el);
  },
});






new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
