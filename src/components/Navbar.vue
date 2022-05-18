<script setup>
	import { ref } from "vue"

	const links = ref([
		{ title: "Home", icon: "fa-house", path: "/" },
		{ title: "Search", icon: "fa-magnifying-glass", path: "/search" },
		{ title: "Library", icon: "fa-book", path: "/library" },
		{ title: "Favorites", icon: "fa-heart", path: "/favorites" },
	])
</script>

<template>
	<div class="bg-black p-6 flex flex-col">
		<img src="/images/logo.png" alt="Logo" class="w-36 mb-6">
		<router-link v-for="link in links" :to="link.path" class="text-[#b3b3b3] px-4 py-2 rounded-lg flex items-center gap-4">
			<i class="fa-solid fa-fw text-lg" :class="link.icon"></i>
			<span class="text-sm font-bold">{{ link.title }}</span>
		</router-link>
	</div>
</template>

<style scoped>
	.router-link-exact-active {
		@apply text-white bg-[#282828];
	}
</style>