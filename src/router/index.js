import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import main from "../components/main";
import igbo from "../components/igbo";

export default new VueRouter({
    base: "/",
    mode: "history",
    routes: [
        { path: "/", component: main },
        { path: "/igbo", component: igbo },
    ],
});