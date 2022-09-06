<script setup>
	import Song from "../components/Song.vue"
	import { useStore } from "vuex"
	import { getFirestore, onSnapshot, collection } from "firebase/firestore"
	import { onBeforeUnmount } from "vue"

	const store = useStore()

	const unsubscribe = onSnapshot(collection(getFirestore(), "songs"), snapshot => {
		store.commit("songs", snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
	})

	onBeforeUnmount(unsubscribe)
</script>

<template>
	<div class="p-6 grid grid-cols-6 gap-6">
		<song v-for="song in store.state.songs" :key="song.id" :song="song"></song>
	</div>
</template>