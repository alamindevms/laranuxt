<template>
	<div>
		<header>
			<nav class="container mx-auto px-4 lg:px-0 py-4 flex justify-between items-center">
				<div>
					<NuxtLink to="/" class="text-2xl font-bold text-gray-800">LaraNuxt</NuxtLink>
				</div>
				<ul class="flex items-center gap-4">
					<li>
						<NuxtLink to="/">Home</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/login">Login</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>
		<nuxt />
	</div>
</template>

<script>
export default {}
</script>

<style></style>
