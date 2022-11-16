<script setup>
</script>

<template>
    <nav class="grid grid-cols-6 bg-gray-700/75 guide">

        <!-- Logo -->
        <div class="col-span-3 md:col-span-1 flex justify-center items-center guide">
            <img class="object-cover h-auto w-auto guide" src="../assets/img/HeaderLogo.png" alt="logo">
        </div>

        <!-- Navigation Links -->
        <ul class="hidden  md:col-span-5 lg:col-span-4 md:flex justify-around items-center font-bold">
            <li class=""><a href="#">Home</a></li>
            <li class=""><a href="#">Buy Vehicle</a></li>
            <li class=""><a href="#">Sell Vehicle</a></li>
            <li class=""><a href="#">My Inventory</a></li>
            <li class=""><a href="#">Help</a></li>
            <li class=""><a href="#">Contact US</a></li>
        </ul>

        <!-- Register Login -->
        <div class="hidden md:flex justify-around items-center">
            <div>Register</div>
            <div>Login</div>
        </div>

        <!-- Hamburger Menu -->
        <div class="col-span-3 md:hidden">
            <div>HAMBURGER</div>
        </div>
    </nav>
</template>