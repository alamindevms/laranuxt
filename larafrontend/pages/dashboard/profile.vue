<template>
	<div>
		<h1 class="text-xl text-gray-800 font-semibold mb-4">Update Profile</h1>
		<form action="#" method="POST" class="space-y-6">
			<div>
				<label for="name" class="sr-only">Full name</label>
				<input type="text" name="name" id="name" autocomplete="name" placeholder="Full name" required class="block h-10 w-full px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md border" />
			</div>

			<div>
				<label for="email" class="sr-only">Email</label>
				<input type="text" name="email" id="email" autocomplete="email" placeholder="Email" required class="block h-10 w-full px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md border" />
			</div>

			<div>
				<label for="password" class="sr-only">Password</label>
				<input id="password" name="password" type="password" placeholder="Password" autocomplete="current-password" required class="block h-10 w-full px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md border" />
			</div>

			<div>
				<button type="submit" class="w-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					Update Profile
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
