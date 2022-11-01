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
	<div class="flex justify-between items-center md:justify-center w-full lg:w-12/12 xl:w-10/12 h-16 ">

		<div class="flex justify-center items-center shrink-0 w-60 h-16 ">
			<img src="../assets/img/HeaderLogo.png" alt="website logo" class="w-[60%]">
		</div>

		<nav class="hidden md:flex justify-around items-center grow  text-sm h-16">
			<a v-for="([title, path]) in navLinks" :key="path" :href="path" 
			class="rounded-lg text-white font-bold hover:text-primaryButton">
				{{title}}
			</a>
		</nav>

		<div class="hidden lg:flex justify-evenly items-center flex-shrink h-16 w-[25%] text-white ">
			<div class="flex justify-center w-4/12 p-2 rounded-md bg-primaryButton"><a href="#">Register</a></div>
			<div class="flex justify-center w-4/12 p-2 rounded-md bg-tertiaryButton"><a href="#">Login</a></div>
		</div>

		<div class="flex md:hidden justify-center items-center w-1/3 h-full 0">
			<div class="flex justify-center items-center md:hidden w-10 h-10 text-white border-2 border-white rounded-full ">
			<a href="">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
			</a>
		</div>
		</div>
		
	</div>	

	<div class="flex w-full lg:w-12/12 xl:w-10/12 h-full ">
		<div class="hidden md:flex h-full shrink-0 w-56 ">

		</div>

		<div class="w-3/4 md:w-1/2 ml-10 md:ml-12">
			<div class="flex flex-col justify-center w-full h-full text-white font-bold ">
			<p class="text-xl md:text-2xl lg:text-4xl">WELCOME TO</p>
			<p class="text-4xl md:text-4xl lg:text-6xl font-black py-3">CARBID360</p>
			<p class="text-xl md:text-3xl font-medium">Over <span class="text-primaryButton text-xl md:text-3xl font-extrabold">125,000 Vehicles</span> in</p>
			<p class="text-xl md:text-3xl font-medium">Inventory for Businesses</p>
			<p class="text-xl md:text-3xl font-medium">& Individuals</p>

			<div class="flex flex-row justify-start space-x-4 py-5">
				<div class="flex justify-center shrink-0 w-36 py-2 rounded-md bg-black"><a href="#">App Store</a></div>
				<div class="flex justify-center shrink-0 w-36 py-2 rounded-md bg-black"><a href="#">Google Play</a></div>
			</div>

			<div class="flex justify-center shrink-0 w-60 py-3 rounded-md bg-primaryButton"><a href="#">Register</a></div>
		</div>
		</div>

	</div>


</div>

</template>