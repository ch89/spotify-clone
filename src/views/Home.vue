<script setup>
	import Song from "../components/Song.vue"
	import { ref } from "vue"
	import { useStore } from "vuex"

	const store = useStore()
</script>

<template>
	<div class="bg-[#121212] overflow-auto">
		<header class="flex items-center gap-2 p-6 sticky top-0 z-10 bg-[#121212]/50 backdrop-blur-sm">
			<button class="bg-black w-8 h-8 rounded-full">
				<i class="fa-solid fa-angle-left"></i>
			</button>
			<button class="bg-black w-8 h-8 rounded-full">
				<i class="fa-solid fa-angle-right"></i>
			</button>
			<button class="bg-black flex items-center gap-2 rounded-full p-2 ml-auto">
				<img src="/images/ch.png" alt="Avatar" class="avatar">
				<p class="text-sm font-bold">ch89</p>
				<i class="fa-solid fa-caret-down"></i>
			</button>
		</header>
		<div class="p-6 grid grid-cols-6 gap-6">
			<song v-for="song in store.state.songs" :key="song.id" :song="song"></song>
		</div>
	</div>
</template>