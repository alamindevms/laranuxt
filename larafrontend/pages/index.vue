<template>
	<div v-if="loggedIn">
		<h1 class="text-2xl text-white font-extraBold">Welcome {{ user.name }}</h1>
	</div>
</template>

<script>
export default {
	created() {
		console.log("User", this.$auth.user)
		console.log("LoggedIn User", this.$auth.loggedIn)
	},
	computed: {
		user() {
			return this.$store.state.auth.user
		},
		loggedIn() {
			return this.$store.state.auth.loggedIn
		},
	},
}
</script>

<style></style>
