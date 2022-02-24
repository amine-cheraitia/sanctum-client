<template>
	<div class="container">
		<form action="" method="" @submit.prevent="handleLogin">
			<div class="form-group">
				<label for="">Email</label>
				<input type="text" v-model="form.email" class="form-control" />
				<span class="text-danger" v-if="errors.email">{{
					errors.email[0]
				}}</span>
			</div>
			<div class="form-group">
				<label for="">Password</label>
				<input type="password" v-model="form.password" class="form-control" />
				<span class="text-danger" v-if="errors.password">
					{{ errors.password[0] }}</span
				>
			</div>

			<button type="submit" class="btn btn-primary mt-3">Se connecter</button>
		</form>
	</div>
</template>

<script>
import axios from "axios";
export default {
	/* name: "login-form", */
	data() {
		return {
			form: {
				email: null,
				password: null,
			},
			errors: {},
		};
	},
	methods: {
		async handleLogin() {
			try {
				await axios.get("/sanctum/csrf-cookie");
				await axios.post("/login", this.form);

				let response = await axios.get("/api/user");

				console.log(response);
				/* window.location = "/about"; */
				this.$router.push("/about");
			} catch (error) {
				this.errors = error.response.data.errors;
			}
		},
	},
	mounted() {
		console.log("Component mounted.");
	},
};
</script>
