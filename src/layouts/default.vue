<script setup>
import NavigationCars from "../components/NavigationCars.vue";
import FindVehicle from "../components/FindVehicle.vue";
import Services from "../components/Services.vue";
import Download from "../components/Download.vue";
import Welcome from "../components/Welcome.vue";
import Dealers from "../components/Dealers.vue";
import HowItWorks from "../components/HowItWorks.vue";
import WhyCarbid from "../components/WhyCarbid.vue";
import Newsletter from "../components/NewsLetter.vue";
</script>

<template>

<div class="">
<!-- Header and Navigation -->
    <header class="items-start h-[100vh] md:h-screen w-auto bg-mobile-hero lg:bg-desktop-hero bg-cover bg-right-2 md:bg-center">
        <NavigationCars/>
        <Welcome/>
    </header>

<!-- Services -->
    <div class="">
        <Services/>
    </div>

<!-- Customers  -->
    <div class="">
        <Dealers/>
    </div>

<!-- Download -->
    <div class="">
        <Download/>
    </div>

<!-- How It Works -->
    <div class="">
        <HowItWorks/>
    </div>

<!-- Why Carbid -->
    <div class="">
        <WhyCarbid/>
    </div>

<!-- Newsletter -->
    <div class="">
        <Newsletter/>
    </div>

<!-- Footer -->
    <footer class="">

    </footer>
</div>

</template>