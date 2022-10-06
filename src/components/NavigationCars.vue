<script setup>

</script>

<template>
<header class="flex justify-around lg:justify-center items-center space-x-10 w-screen h-16">
    <div class="w-36 h-10">
        <img src="src/assets/img/HeaderLogo.png" alt="">
    </div>
    <nav class="hidden lg:flex justify-around items-center -space-x-8 w-2/4  text-white text-m font-bold">
        <div>Home</div>
        <div>Buy Vehicle</div>
        <div>Sell Vehicle</div>
        <div>My Inventory</div>
        <div>Help</div>
        <div>Contact Us</div>
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