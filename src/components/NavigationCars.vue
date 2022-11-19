<script setup>
</script>

<template>
    <nav class="fixed top-0 grid grid-cols-6 overflow-hidden w-screen bg-gray-900/60 guide">

        <!-- Logo -->
        <div class="col-span-3 lg:col-span-1 flex justify-center items-center">
            <img class="min-w-fit max-w-fit h-[70%] w-[70%]" src="../assets/img/HeaderLogo.png" alt="logo">
        </div>

        <!-- Navigation Links -->
        <ul class="hidden md:col-span-4 lg:flex justify-around items-center text-sm text-white guide">
            <li class="hover:text-orange-500"><a href="#">Home</a></li>
            <li class="hover:text-orange-500"><a href="#">Buy Vehicle</a></li>
            <li class="hover:text-orange-500"><a href="#">Sell Vehicle</a></li>
            <li class="hover:text-orange-500"><a href="#">My Inventory</a></li>
            <li class="hover:text-orange-500"><a href="#">Help</a></li>
            <li class="hover:text-orange-500"><a href="#">Contact US</a></li>
        </ul>

        <!-- Register Login -->
        <div class="hidden lg:flex justify-around items-center text-white space-x-1 pr-5">
            <div class="flex justify-center items-center w-24 p-2 rounded-lg bg-orange-500 hover:bg-orange-400"><a href="">Register</a></div>
            <div class="flex justify-center items-center w-24 p-2 rounded-lg bg-tertiaryColor hover:bg-sky-600"><a href="">Login</a></div>
        </div>

        <!-- Hamburger Menu -->
        <div class="col-span-3 lg:hidden">
            <div class="flex justify-end pr-10 items-center h-full">
                <!-- X -->
                <svg viewBox="0 0 100 60" width="40" height="40" class="fill-white">
                    <rect width="80" height="10" ></rect>
                    <rect y="30" width="80" height="10"></rect>
                    <rect y="60" width="80" height="10"></rect>
                </svg>

                
            </div>
        </div>
    </nav>
</template>