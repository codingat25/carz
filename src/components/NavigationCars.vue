<script setup>
</script>

<template>
    <nav class="fixed top-0 grid grid-cols-8  w-screen h-16 bg-gray-900/60 ">

        <!-- Logo -->
        <div class="col-span-1 col-start-1 lg:col-start-2 flex justify-start items-center w-auto h-auto pl-5 lg:pl-0">
            <img class="min-w-fit max-w-fit h-[70%] w-[70%]" src="../assets/img/HeaderLogo.png" alt="logo">
        </div>

        <!-- Navigation Links -->
        <ul class="col-start-3 col-span-3 hidden lg:flex justify-between items-center text-xs text-white ">
            <li class="hover:text-orange"><a href="#">Home</a></li>
            <li class="hover:text-orange"><a href="#">Buy Vehicle</a></li>
            <li class="hover:text-orange"><a href="#">Sell Vehicle</a></li>
            <li class="hover:text-orange"><a href="#">My Inventory</a></li>
            <li class="hover:text-orange"><a href="#">Help</a></li>
            <li class="hover:text-orange"><a href="#">Contact US</a></li>
        </ul>

        <!-- Register Login -->
        <div class="hidden md:col-span-2 lg:flex justify-center items-center gap-3 text-white">
            <div class="flex justify-center items-center w-[40%] xl:px-10 py-1 rounded-lg bg-tertiaryColor hover:bg-sky-600"><a href="">Login</a></div>
            <div class="flex justify-center items-center w-[40%] xl:px-10 py-1 rounded-lg bg-orange hover:bg-orange-400"><a href="">Register</a></div>
        </div>

        <!-- Hamburger Menu -->
        <div class="col-start-7 col-span-4 lg:hidden flex justify-end">
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