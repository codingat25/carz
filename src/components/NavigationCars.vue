<script setup>
import { ref } from 'vue'
const navLinks =
	[
		['Home', '/dashboard'],
		['Buy Vehicle', '/dashboard'],
		['Sell Vehicle', '/dashboard'],
		['My Inventory', '/dashboard'],
		['Help', '/dashboard'],
		['Contact Us', '/dashboard'],
	]

</script>
<!-- NAVIGATION -->
<template>
	<nav class="flex flex-col justify-start items-center h-screen w-screen lg:h-hero-height lg:w-full bg-mobile-hero md:bg-desktop-hero bg-cover bg-center md:bg-center ">
		<div class="sticky top-0 bg-gray-800 bg-opacity-80 flex  justify-around items-center md:justify-center w-full  h-16 pt-2">
			<div class="flex w-full md:w-[95%] lg:[90%] xl:w-[80%] h-16">
				<div class="z-30 flex justify-center items-center shrink-0 lg:w-44 xl:w-60 h-16 pb-2">
				<img src="../assets/img/HeaderLogo.png" alt="website logo" class="w-[60%]">
			</div>

			<!-- Menu Items -->
			<div
				class="hidden lg:flex justify-start items-center space-x-2 lg:space-x-8 xl:space-x-12 text-sm h-16 w-full">
				<a v-for="([title, path]) in navLinks" :key="path" :href="path"
					class="tracking-normal rounded-lg text-white font-bold hover:text-primaryColor">
					{{ title }}
				</a>
			</div>

			<div class="hidden lg:flex justify-evenly items-center flex-shrink h-16 w-5/12 text-white">
				<div class="flex justify-center w-4/12 p-2 rounded-md bg-primaryColor"><a href="#">Register</a></div>
				<div class="flex justify-center w-4/12 p-2 rounded-md bg-tertiaryColor"><a href="#">Login</a></div>
			</div>

			<div class="flex lg:hidden justify-end lg:justify-center items-center w-full h-full">
				<div
					class="flex justify-center items-center mr-10 lg:mr-0 w-10 h-10 text-white border-2 border-white rounded-full ">
					<a href="">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</a>
				</div>
			</div>
			</div>
	
		</div>


		<div class="flex  justify-around items-center md:justify-center w-full  h-full pt-2 ">
			<div class="flex w-full md:w-[95%] lg:[90%] xl:w-[80%] h-full">
				
			<div class="flex justify-center items-center shrink-0 lg:w-44 xl:w-60 h-full pb-2 "></div>
			
			<!-- Menu Items -->
			<div class="flex justify-start items-center h-full w-full pl-10 lg:pl-0">
				<div class="w-4/6 md:w-3/6 lg:w-4/6 h-2/3 ">
					<div class="flex flex-col justify-center w-full h-full text-white font-bold ">
						<p class="text-xl md:text-2xl lg:text-4xl">WELCOME TO</p>
						<p class="text-4xl md:text-4xl lg:text-6xl font-black py-3">CARBID360</p>
						<p class="text-xl md:text-3xl font-medium">Over <span
								class="text-primaryColor text-xl md:text-3xl font-extrabold">125,000 Vehicles</span>
							in Inventory for Businesses & Individuals</p>

						<div
							class="flex flex-col md:flex-row justify-start space-x-0 md:space-x-4 space-y-1 md:space-y-0 py-5">
							<div class="flex justify-center shrink-0 w-36 py-2 rounded-md bg-black"><a href="#">App
									Store</a></div>
							<div class="flex justify-center shrink-0 w-36 py-2 rounded-md bg-black"><a href="#">Google
									Play</a></div>
						</div>

						<div class="flex justify-center shrink-0 w-60 py-3 rounded-md bg-primaryColor"><a
								href="#">Register</a></div>
				</div>
				</div>
			</div>

			<div class="hidden lg:flex justify-evenly items-center flex-shrink h-full w-5/12 text-white  "></div>
			</div>
	
		</div>
		



	</nav>
</template>