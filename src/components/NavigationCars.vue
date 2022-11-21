<script setup>
</script>

<template>
    <nav class="fixed top-0 grid grid-cols-8  w-screen bg-gray-900/60 ">

        <!-- Logo -->
        <div class="col-span-4 lg:col-span-2 flex justify-start lg:justify-end  pl-5 lg:pl-0 pr-0 md:pr-10 items-center overflow-hidden">
            <img class="min-w-fit max-w-fit h-[70%] w-[70%]" src="../assets/img/HeaderLogo.png" alt="logo">
        </div>

        <!-- Navigation Links -->
        <ul class="hidden md:col-span-3 lg:flex justify-between items-center text-xs text-white ">
            <li class="hover:text-orange"><a href="#">Home</a></li>
            <li class="hover:text-orange"><a href="#">Buy Vehicle</a></li>
            <li class="hover:text-orange"><a href="#">Sell Vehicle</a></li>
            <li class="hover:text-orange"><a href="#">My Inventory</a></li>
            <li class="hover:text-orange"><a href="#">Help</a></li>
            <li class="hover:text-orange"><a href="#">Contact US</a></li>
        </ul>

        <!-- Register Login -->
        <div class="hidden md:col-span-2 lg:flex justify-center items-center gap-3 text-white">
            <div class="flex justify-center items-center px-8 xl:px-10 py-1 rounded-lg bg-orange hover:bg-orange-400"><a href="">Register</a></div>
            <div class="flex justify-center items-center px-8 xl:px-10 py-1 rounded-lg bg-tertiaryColor hover:bg-sky-600"><a href="">Login</a></div>
        </div>

        <!-- Hamburger Menu -->
        <div class="col-span-4 lg:hidden flex justify-end">
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