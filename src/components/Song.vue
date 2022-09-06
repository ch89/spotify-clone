<script setup>
	import { useStore } from "vuex"

	const store = useStore()

	defineProps(["song"])
</script>

<template>
	<div class="bg-[#282828] p-4 rounded-lg">
		<div class="relative">
			<img :src="`/images/${song.name}.jpg`" alt="Song" class="mb-4">
			<button @click="store.commit('play', song.id)" class="bg-[#1ed760] w-10 h-10 rounded-full absolute bottom-2 right-2 shadow-[0_8px_8px_rgba(0,0,0,0.3)]">
				<i class="fa-solid fa-play"></i>
			</button>
		</div>
		<h3 class="font-bold">{{ song.title }}</h3>
		<p class="text-sm text-[#b3b3b3]">{{ song.artist }}</p>
	</div>
</template>