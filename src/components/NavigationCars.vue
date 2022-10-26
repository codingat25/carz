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
<!-- NAVIGATION -->
<template>
<div class="flex flex-col justify-start items-center h-screen w-screen lg:h-hero-height lg:w-full pt-2 bg-mobile-hero md:bg-desktop-hero bg-cover bg-right md:bg-center">
	<div class="flex justify-between md:justify-center w-11/12 h-16 border border-red-500">
		<div class="flex items-center shrink-0 w-32 h-16 ml-4">
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

		<div class="flex justify-center items-center md:hidden w-16 h-16 text-white">
			<a href="">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
			</a>
		</div>
	</div>	
	<div class="flex flex-col justify-center w-11/12 h-full text-white font-bold border border-red-500">
		<p class="text-2xl font-medium">WELCOME TO</p>
		<p class="font-extrabold text-5xl py-3">CARBID360</p>
		<p class="text-medium">Over <span class="text-primaryButton text-xl font-extrabold">125,000 Vehicles</span> in</p>
		<p class="text-medium">Inventory for Businesses</p>
		<p class="text-medium">& Individuals</p>
	</div>
</div>

</template>