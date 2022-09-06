<script setup>
	import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
</script>

<template>
	<div class="bg-[#121212] h-screen grid place-items-center">
		<img src="/images/logo.png" alt="Logo" class="w-96">
		<button @click="signInWithPopup(getAuth(), new GoogleAuthProvider())" class="bg-[#1ed760] px-4 py-2 rounded-full font-bold">Sign In</button>
	</div>
</template>