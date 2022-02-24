import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		authenticated: false,
		user: null,
	},
	getters: {},
	mutations: {
		setAuth(state, payload) {
			localStorage.setItem("authAmine", JSON.stringify(payload));
			state.authenticated = true;
			state.user = payload;
		},
		initializeAuth(state) {
			if (localStorage.getItem("authAmine")) {
				state.authenticated = true;
				state.user = JSON.parse(localStorage.getItem("authAmine"));
			}
		},
		disconnecte(state) {
			localStorage.removeItem("authAmine");
			state.authenticated = false;
			state.auser = null;
		},
	},
	actions: {},
	modules: {},
});
