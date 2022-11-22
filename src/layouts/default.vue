<script setup>
import NavigationCars from "../components/NavigationCars.vue";
import FindVehicle from "../components/FindVehicle.vue";
import Services from "../components/Services.vue";
import Download from "../components/NavigationCars.vue";
import Welcome from "../components/Welcome.vue";
</script>

<template>

<div class="">
<!-- Header and Navigation -->
    <header class="items-start h-[75vh] md:h-screen w-auto bg-mobile-hero lg:bg-desktop-hero bg-cover bg-right-2 md:bg-center">
        <NavigationCars/>
        <Welcome/>
    </header>

<!-- Services -->
    <div class="guide h-[527px]">
        <Services/>
    </div>

<!-- Customers  -->
    <div class="guide h-[674px]">

    </div>

<!-- Download -->
    <div class="guide h-[614px]">

    </div>

<!-- How It Works -->
    <div class="guide h-[1136px]">

    </div>

<!-- Why Carbid -->
    <div class="guide h-[674px]">

    </div>

<!-- Newsletter -->
    <div class="guide h-[242px]">

    </div>

<!-- Footer -->
    <footer class="guide h-[420px]">

    </footer>
</div>

</template>