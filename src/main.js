import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";
new Vue({
	router,
	store,
	beforeCreate() {
		this.$store.commit("initializeAuth");
	},
	render: (h) => h(App),
}).$mount("#app");
