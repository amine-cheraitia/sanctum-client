<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<span v-if="auth">
				<router-link to="/products">Products</router-link> |</span
			>

			<router-link to="/amine" v-if="this.$store.state.user"
				>{{ this.$store.state.user.name }} |</router-link
			>

			<router-link v-if="!auth" to="/login">Login</router-link>
			<button v-else @click="redirectme">logout</button>
		</nav>
		<router-view />
	</div>
</template>
<script>
import axios from "axios";

export default {
	data() {
		return {
			auth: false,
		};
	},
	created() {
		this.checkAuth();
	},
	updated() {
		this.checkAuth();
	},
	methods: {
		async redirectme() {
			await axios.post("/logout");
			this.auth = false;

			this.$store.commit("disconnecte");
			this.$router.push("/login");
		},
		async logout() {},
		checkAuth() {
			if (this.$store.state.authenticated) {
				return (this.auth = true);
			}
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a,
button {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active,
button {
	color: #42b983;
}
</style>
