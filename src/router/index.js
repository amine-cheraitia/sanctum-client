import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProductsView from "../views/ProductsView.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/amine",
		name: "amine",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AmineView.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: LoginView,
		beforeEnter: (to, from, next) => {
			if (store.getters.isAuth === true) {
				console.log(store.getters.isAuth);
				router.push("/");
			}
			console.log(store.getters.isAuth);
			console.log("non");
			next();
		},
	},
	{
		path: "/products",
		name: "products",
		component: ProductsView,
		/* 		beforeEnter: (to, from, next) => {
			if (!store.getters.isAuth === true) {
				router.push("/");
			}
			next();
		}, */
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
