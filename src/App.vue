<script setup>
	import Navbar from "./components/Navbar.vue"
	import Playbar from "./components/Playbar.vue"
</script>

<template>
	<navbar></navbar>
	<router-view></router-view>
	<playbar></playbar>
</template>

<style>
	.avatar {
		@apply w-8 h-8 rounded-full object-cover;
	}
</style>