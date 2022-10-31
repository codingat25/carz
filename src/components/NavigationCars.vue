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
<!-- NAVIGATION sdasd -->
<template>
<div class="flex flex-col justify-start items-center h-hero-height-mobile w-screen lg:h-hero-height lg:w-full pt-2 bg-mobile-hero md:bg-desktop-hero bg-cover bg-left md:bg-center">
	<div class="flex justify-between items-center md:justify-center w-full lg:w-12/12 xl:w-11/12 h-16 border border-red-500">

		<div class="flex justify-center items-center shrink-0 w-52 h-16 border border-green-500">
			<img src="../assets/img/HeaderLogo.png" alt="website logo" class="w-[60%]">
		</div>

		<nav class="hidden md:flex justify-center items-center grow text-sm h-16 space-x-4 md:space-x-6 xl:space-x-10 border border-yellow-500">
			<a v-for="([title, path]) in navLinks" :key="path" :href="path" 
			class="rounded-lg text-white font-bold hover:text-primaryButton">
				{{title}}
			</a>
		</nav>

		<div class="hidden lg:flex justify-center space-x-2 xl:space-x-5 items-center flex-shrink h-16 w-[30%] text-white  border border-yellow-300">
			<div class="flex justify-center w-4/12 p-2 rounded-md bg-primaryButton"><a href="#">Register</a></div>
			<div class="flex justify-center w-4/12 p-2 rounded-md bg-tertiaryButton"><a href="#">Login</a></div>
		</div>

		<div class="flex md:hidden justify-center items-center w-1/3 h-full border border-yellow-500">
			<div class="flex justify-center items-center md:hidden w-10 h-10 text-white border-2 border-white rounded-full ">
			<a href="">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
			</a>
		</div>
		</div>
		
	</div>	

	<div class="flex w-full md:w-8/12 lg:w-9/12 xl:w-10/12 h-full border border-red-500">
		<div class="hidden md:flex h-full w-1/6 border border-yellow-500">

		</div>

		<div>
			
		</div>
		<div class="flex flex-col justify-center w-full h-full text-white font-bold border border-red-500">
			<p class="text-xl md:text-2xl lg:text-4xl">WELCOME TO</p>
			<p class="text-4xl md:text-4xl lg:text-6xl font-black py-3">CARBID360</p>
			<p class="text-xl md:text-3xl font-medium">Over <span class="text-primaryButton text-xl font-extrabold">125,000 Vehicles</span> in</p>
			<p class="text-xl md:text-3xl font-medium">Inventory for Businesses</p>
			<p class="text-xl md:text-3xl font-medium">& Individuals</p>

		<div class="flex justify-start space-x-4 py-5">
			<div class="flex justify-center w-2/12 p-1 rounded-md bg-black"><a href="#">App Store</a></div>
			<div class="flex justify-center w-2/12 p-1 rounded-md bg-black"><a href="#">Google Play</a></div>
		</div>

		<div class="flex justify-center w-3/12 p-2 rounded-md bg-primaryButton"><a href="#">Register</a></div>
	</div>
	</div>


</div>

</template>