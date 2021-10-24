<template>
	<div class="py-20">
		<div class="container mx-auto px-4 lg:px-0">
			<div class="w-2/4 mx-auto p-6 bg-white rounded-md border border-gray-100">
				<h1 class="text-xl text-gray-800 font-semibold text-center">Login</h1>
				<form @submit.prevent="userLogin" class="space-y-4">
					<div class="space-y-1">
						<label for="Email">Email</label>
						<input v-model="login.email" type="email" name="email" class="h-10 w-full px-2 border border-gray-200 rounded-md bg-gray-100" placeholder="example@mail.com" />
					</div>
					<div class="space-y-1">
						<label for="Password">Password</label>
						<input v-model="login.password" type="password" name="password" class="h-10 w-full px-2 border border-gray-200 rounded-md bg-gray-100" placeholder="**********" />
					</div>
					<div class="text-center">
						<button type="submit" class="bg-green-500 text-white text-base font-medium px-4 py-2 rounded-md">Login</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			login: {
				email: "admin@mail.com",
				password: "password",
			},
		}
	},
	methods: {
		async userLogin() {
			try {
				let response = await this.$auth.loginWith("local", {data: this.login})
				console.log(response)
			} catch (err) {
				console.log(err)
			}
		},
	},
}
</script>

<style></style>
