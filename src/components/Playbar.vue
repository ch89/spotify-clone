<script setup>
	import { ref, computed } from "vue"
	import { useStore } from "vuex"
	import {
		getFirestore,
		doc,
		updateDoc,
		arrayRemove,
		arrayUnion,
		onSnapshot,
		collection,
		deleteDoc,
		setDoc
	} from "firebase/firestore"
	import { getAuth } from "firebase/auth"

	const store = useStore()
	const user = getAuth().currentUser

	let song = computed(() => store.state.songs[store.state.index])

	let audio = ref(null),
		paused = ref(true),
		progress = ref(0),
		duration = ref(0),
		dragging = ref(false),
		loop = ref(false),
		muted = ref(false)

	let format = time => {
		let minutes = Math.floor(time / 60),
			seconds = Math.floor(time % 60).toString().padStart(2, "0")

		return `${minutes}:${seconds}`
	}

	let favorited = computed(() => song.value.favorites?.includes(user.uid))

	let favorite = e => {
		updateDoc(doc(getFirestore(), `songs/${song.value.id}`), {
			favorites: favorited.value ? arrayRemove(user.uid) : arrayUnion(user.uid)
		})
	}
</script>

<template>
	<div class="bg-[#181818] border-t border-[#282828] col-span-2 grid grid-cols-3 p-6 text-[#b3b3b3]" v-if="song">
		<div class="flex items-center gap-4">
			<img :src="`/images/${song.name}.jpg`" alt="Song" class="w-12">
			<div>
				<h3 class="font-bold text-white">{{ song.title }}</h3>
				<p class="text-sm">{{ song.artist }}</p>
			</div>
			<button @click="favorite" :class="{ 'text-[#1ed760]': favorited }">
				<i class="fa-solid fa-heart"></i>
			</button>
			<button>
				<i class="fa-solid fa-image"></i>
			</button>
		</div>
		<div>
			<div class="flex items-center justify-center gap-4 mb-2">
				<button>
					<i class="fa-solid fa-shuffle"></i>
				</button>
				<button @click="store.commit('prev')">
					<i class="fa-solid fa-backward-step"></i>
				</button>
				<button class="text-4xl" @click="paused ? audio.play() : audio.pause()">
					<i class="fa-solid" :class="paused ? 'fa-circle-play' : 'fa-circle-pause'"></i>
				</button>
				<button @click="store.commit('next')">
					<i class="fa-solid fa-forward-step"></i>
				</button>
				<button @click="loop = ! loop" :class="{ 'text-[#1ed760]': loop }">
					<i class="fa-solid fa-rotate-right"></i>
				</button>
			</div>
			<div class="flex items-center gap-2">
				<div class="text-xs">{{ format(progress) }}</div>
				<input type="range" class="flex-1 cursor-pointer" step="any" :max="duration" v-model="progress" @mousedown="dragging = true" @change="dragging = false; audio.currentTime = progress">
				<div class="text-xs">{{ format(duration) }}</div>
			</div>
			<audio :src="`/songs/${song.name}.mp3`" ref="audio" autoplay @play="paused = false" @pause="paused = true" @timeupdate="dragging ? null : progress = $event.target.currentTime" @loadeddata="duration = $event.target.duration" @ended="store.commit('next')" :loop="loop" :muted="muted"></audio>
		</div>
		<div class="flex items-center gap-4 justify-end">
			<button>
				<i class="fa-solid fa-list"></i>
			</button>
			<button>
				<i class="fa-solid fa-tablet-screen-button"></i>
			</button>
			<button @click="muted = ! muted">
				<i class="fa-solid fa-fw" :class="muted ? 'fa-volume-xmark' : 'fa-volume-high'"></i>
			</button>
			<input type="range" step="any" max="1" class="cursor-pointer" @input="audio.volume = $event.target.value">
		</div>
	</div>
</template>