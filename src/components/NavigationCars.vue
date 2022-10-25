<script setup>
import { ref } from 'vue'
const navLinks = 
	[
		['Home','/dashboard'],
		['Buy Vehicle','/dashboard'],
		['Sell Vehicle','/dashboard'],
		['My Inventory','/dashboard'],
		['Help','/dashboard'],
		['Contact Us','/dashboard'],
	]

</script>

<template>
<div class="flex justify-center h-screen w-screen lg:h-hero-height lg:w-full pt-2 bg-mobile-hero md:bg-desktop-hero bg-cover bg-right md:bg-center">
	<div class="flex justify-between md:justify-center w-11/12 h-16">
		<div class="flex items-center shrink-0 w-32 h-16">
			<img src="../assets/img/HeaderLogo.png" alt="website logo" class="w-full">
		</div>
		<nav class="hidden md:flex justify-around items-center w-full lg:w-4/6 text-sm h-16 space-x-2">
			<a v-for="([title, path]) in navLinks" :key="path" :href="path" 
			class="rounded-lg text-white font-bold hover:text-primaryButton">
				{{title}}
			</a>
		</nav>
		<div class="hidden lg:flex justify-center md:space-x-1 lg:space-x-5 items-center flex-shrink h-16 w-1/6 lg:w-2/6 text-white">
			<div class="flex justify-center w-1/3 p-1 rounded-md bg-primaryButton"><a href="#">Register</a></div>
			<div class="flex justify-center w-1/3 p-1 rounded-md bg-tertiaryButton"><a href="#">Login</a></div>
		</div>

		<div>

		</div>
	</div>	
</div>

</template>