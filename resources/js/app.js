import Vue from "vue";
Vue.component("Main", require("./components/Main").default);

const app = new Vue({
    el: "#app"
});
