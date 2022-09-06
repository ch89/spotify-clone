<script setup>
	import { ref } from "vue"
	import { getAuth, signOut } from "firebase/auth"

	const user = getAuth().currentUser

	let show = ref(false)
</script>

<template>
	<header class="flex items-center gap-2 p-6 sticky top-0 z-10 bg-[#121212]/50 backdrop-blur-sm">
		<button class="bg-black w-8 h-8 rounded-full">
			<i class="fa-solid fa-angle-left"></i>
		</button>
		<button class="bg-black w-8 h-8 rounded-full">
			<i class="fa-solid fa-angle-right"></i>
		</button>
		<div class="ml-auto relative" @click="show = ! show">
			<button class="bg-black flex items-center gap-2 rounded-full p-2">
				<img :src="user.photoURL" alt="Avatar" class="avatar">
				<p class="text-sm font-bold">{{ user.displayName }}</p>
				<i class="fa-solid fa-caret-down"></i>
			</button>
			<transition enter-from-class="opacity-0" leave-to-class="opacity-0">
				<ul class="absolute right-0 mt-2 z-20 bg-[#282828] rounded-lg w-48 text-sm overflow-hidden transition" v-show="show" style="box-shadow: 0 16px 24px rgba(0,0,0,.3),0 6px 8px rgba(0,0,0,.2);">
					<li class="p-4 cursor-pointer hover:bg-[#3e3e3e] flex items-center justify-between">
						Account
						<i class="fa-solid fa-expand"></i>
					</li>
					<li class="p-4 cursor-pointer hover:bg-[#3e3e3e]">Profile</li>
					<li class="p-4 cursor-pointer hover:bg-[#3e3e3e]" @click="signOut(getAuth())">Sign Out</li>
				</ul>
			</transition>
		</div>
	</header>
</template>