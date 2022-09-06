<script setup>
	import Navbar from "./components/Navbar.vue"
	import SpotifyHeader from "./components/SpotifyHeader.vue"
	import Playbar from "./components/Playbar.vue"
	import Login from "./components/Login.vue"
	import { useStore } from "vuex"
	import { getAuth, onAuthStateChanged } from "firebase/auth"

	const store = useStore()

	onAuthStateChanged(getAuth(), user => store.commit("auth", user))
</script>

<template>
	<main v-if="store.state.user" class="h-screen grid grid-cols-[1fr_5fr] grid-rows-[1fr]">
		<navbar></navbar>
		<div class="bg-[#121212] overflow-auto">
			<spotify-header></spotify-header>
			<router-view></router-view>
		</div>
		<playbar></playbar>
	</main>
	<login v-else></login>
</template>

<style>
	.avatar {
		@apply w-8 h-8 rounded-full object-cover;
	}
</style>