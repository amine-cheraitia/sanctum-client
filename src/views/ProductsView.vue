<template>
	<div>
		<h1>List of products</h1>
		<div v-if="errors">errors</div>
		<ul v-else>
			<li v-for="(product, index) in products" :key="index">
				{{ product.id + " " + product.designation }}
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			products: null,
			errors: null,
		};
	},
	methods: {
		async retriveProducts() {
			try {
				await axios.get("/sanctum/csrf-cookie");

				let pdt = await axios.get("/api/products");
				this.products = pdt.data;
				console.log(this.products);
				let user = await axios.get("/api/user");
				console.log(user);
				/* let response = await axios.get("/api/user"); */

				/* this.$store.commit("setAuth", response.data); */
				/* console.log(response); */
				/* this.$router.push("/about"); */
			} catch (error) {
				this.errors = error.response.data.errors;
			}
		},
	},

	created() {
		this.retriveProducts();
	},
};
</script>

<style scoped></style>
