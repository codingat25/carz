<script setup>

</script>

<template>
<header class="flex justify-around lg:justify-center items-center space-x-10 w-screen h-16">
    <div class="w-36 h-10">
        <img src="src/assets/img/HeaderLogo.png" alt="">
    </div>

    <nav class="hidden lg:flex justify-around items-center -space-x-8 w-2/4  text-white text-m font-bold">
        <div><a href="#" class="hover:text-primaryButton">Home</a></div>
        <div><a href="#" class="hover:text-primaryButton">Buy Vehicle</a></div>
        <div><a href="#" class="hover:text-primaryButton">Sell Vehicle</a></div>
        <div><a href="#" class="hover:text-primaryButton">My Inventory</a></div>
        <div><a href="#" class="hover:text-primaryButton">Help</a></div>
        <div><a href="#" class="hover:text-primaryButton">Contact Us</a></div>
    </nav>
    <nav class="flex lg:hidden">
        <div>X</div>
    </nav>
    <div class="hidden lg:flex space-x-4">
        <div class="flex justify-center items-center w-32 h-8 bg-primaryButton text-white rounded-lg">Register</div>
        <div class="flex justify-center items-center w-32 h-8 bg-tertiaryButton text-white rounded-lg">Login</div>
    </div>
</header>
</template>