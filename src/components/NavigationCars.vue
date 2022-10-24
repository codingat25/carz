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
<div class="flex justify-center w-full h-hero-height pt-3 bg-desktop-hero bg-bottom bg-cover">
	<div class="flex justify-around lg:justify-center w-full lg:w-4/5 h-16 space-x-5">
		<div class="flex justify-center w-32 lg:w-1/6">
			<img src="../assets/img/HeaderLogo.png" alt="website logo" class="hfull w-full">
		</div>
		<nav class="hidden md:flex justify-around items-center w-3/6 space-x-3">
			<a v-for="([title, path]) in navLinks" :key="path" :href="path" 
			class="text-l font-bold font-sans text-white hover:text-primaryButton">
				{{title}}
			</a>
		</nav>
		<div class="hidden lg:flex justify-center space-x-5 items-center h-16 w-2/6 text-white">
			<div class="flex justify-center w-1/3 rounded-md bg-primaryButton"><a href="#">Register</a></div>
			<div class="flex justify-center w-1/3 rounded-md bg-tertiaryButton"><a href="#">Login</a></div>
		</div>
	</div>	
</div>

</template>