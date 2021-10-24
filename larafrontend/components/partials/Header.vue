<template>
	<div>
		<nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-0 py-4" aria-label="Global">
			<div class="flex items-center flex-1">
				<div class="flex items-center justify-between w-full md:w-auto">
					<NuxtLink to="/" class="text-2xl font-bold text-gray-800">
						<span class="sr-only">Workflow</span>
						<img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="" />
					</NuxtLink>
					<div class="-mr-2 flex items-center md:hidden">
						<button type="button" class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<!-- Heroicon name: outline/menu -->
							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
				<div class="hidden space-x-10 md:flex md:ml-10">
					<NuxtLink to="#" class="font-medium text-white hover:text-gray-300">Product</NuxtLink>

					<NuxtLink to="#" class="font-medium text-white hover:text-gray-300">Features</NuxtLink>

					<NuxtLink to="#" class="font-medium text-white hover:text-gray-300">Marketplace</NuxtLink>

					<NuxtLink to="#" class="font-medium text-white hover:text-gray-300">Company</NuxtLink>
				</div>
			</div>
			<div class="hidden md:flex gap-2">
				<NuxtLink :to="{name: 'dashboard'}" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
					Dashboard
				</NuxtLink>
				<NuxtLink to="/login" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
					Log in
				</NuxtLink>
				<NuxtLink to="/register" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
					Register
				</NuxtLink>
			</div>
		</nav>

		<!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
		<div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
			<div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
				<div class="px-5 pt-4 flex items-center justify-between">
					<div>
						<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
					</div>
					<div class="-mr-2">
						<button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
							<span class="sr-only">Close menu</span>
							<!-- Heroicon name: outline/x -->
							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
				<div class="px-2 pt-2 pb-3 space-y-1">
					<NuxtLink to="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</NuxtLink>

					<NuxtLink to="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</NuxtLink>

					<NuxtLink to="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</NuxtLink>

					<NuxtLink to="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</NuxtLink>
				</div>
				<NuxtLink to="/" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
					Log in
				</NuxtLink>
				<NuxtLink to="/register" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
					Register
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
