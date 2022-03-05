<template>
	<div>hello<router-link to="login">a</router-link></div>
</template>

<script>
export default {
	props: {},
	created() {
		console.log(this.$store.getters.isAuth);
	},
};
</script>

<style scoped></style>
