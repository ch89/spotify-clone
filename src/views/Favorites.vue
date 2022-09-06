<script setup>
	import {
		getFirestore, 
		onSnapshot, 
		collection, 
		where, 
		query,
		doc,
		updateDoc,
		arrayRemove
	} from "firebase/firestore"
	import { getAuth } from "firebase/auth"
	import { ref, onBeforeUnmount } from "vue"
	import Song from "../components/Song.vue"
	import { useStore } from "vuex"

	const store = useStore()

	let user = getAuth().currentUser,
		songs = ref([])

	let remove = song => updateDoc(doc(getFirestore(), `songs/${song.id}`), {
		favorites: arrayRemove(user.uid)
	})

	const unsubscribe = onSnapshot(
		query(
			collection(getFirestore(), "songs"), 
			where("favorites", "array-contains", user.uid)
		),
		snapshot => songs.value = snapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}))
	)

	onBeforeUnmount(unsubscribe)
</script>

<template>
	<div class="p-6">
		<div v-if="songs.length" v-for="song in songs" :key="song.id" class="grid grid-cols-[auto_1fr_1fr_1fr_auto] items-center gap-6 px-6 py-2 rounded-lg text-[#b3b3b3] cursor-pointer transition hover:bg-[#2a2a2a] hover:text-white">
			<button @click="store.commit('play', song.id)">
				<i class="fa-solid fa-play"></i>
			</button>
			<img :src="`/images/${song.name}.jpg`" alt="Song" class="w-12">
			<p class="text-sm">{{ song.title }}</p>
			<p class="text-sm">{{ song.artist }}</p>
			<button @click="remove(song)">
				<i class="fa-solid fa-heart text-[#1ed760]"></i>
			</button>
		</div>
		<p v-else>You haven't favorited any songs yet.</p>
	</div>
</template>