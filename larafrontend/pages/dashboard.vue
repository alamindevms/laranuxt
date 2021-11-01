<template>
	<div>
		<div class="container mx-auto px-4 lg:px-0">
			<div class="my-10 p-6 rounded-md bg-gray-100 min-h-screen">
				<div class="flex gap-8">
					<div class="w-80 bg-white rounded-md p-4 space-y-2">
						<nuxt-link to="/dashboard" class="block bg-gray-50 p-2 text-blue-600 font-medium">Dashboard</nuxt-link>
						<nuxt-link :to="{name: 'dashboard-profile'}" class="block bg-gray-50 p-2 text-blue-600 font-medium">Profile</nuxt-link>
						<nuxt-link :to="{name: 'dashboard-customEvent'}" class="block bg-gray-50 p-2 text-blue-600 font-medium">Custom Event</nuxt-link>
						<nuxt-link :to="{name: 'dashboard-twoWayDataBinding'}" class="block bg-gray-50 p-2 text-blue-600 font-medium">Two Way Data Binding</nuxt-link>
						<nuxt-link :to="{name: 'dashboard-selectOption'}" class="block bg-gray-50 p-2 text-blue-600 font-medium">Select Option</nuxt-link>
						<nuxt-link :to="{name: 'dashboard-nextfocusedinput'}" class="block bg-gray-50 p-2 text-blue-600 font-medium">Next Focus Input</nuxt-link>
						<a @click.prevent="logout" class="block bg-gray-50 p-2 text-blue-600 font-medium cursor-pointer">Log Out</a>
					</div>

					<div class="flex-1 bg-white rounded-md p-4">
						<nuxt-child />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "empty",
	middleware: "auth",
	methods: {
		async logout() {
			await this.$auth.logout()
		},
	},
}
</script>

<style></style>
