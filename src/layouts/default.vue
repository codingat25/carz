<script setup>
import NavigationCars from "../components/NavigationCars.vue";
import FindVehicle from "../components/FindVehicle.vue";
import Services from "../components/Services.vue";
import Download from "../components/NavigationCars.vue";
import Welcome from "../components/Welcome.vue";
import Dealers from "../components/Dealers.vue";
</script>

<template>

<div class="">
<!-- Header and Navigation -->
    <header class="items-start h-[75vh] md:h-screen w-auto bg-mobile-hero md:bg-desktop-hero bg-cover bg-right-2 md:bg-center">
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

    </div>

<!-- How It Works -->
    <div class="">

    </div>

<!-- Why Carbid -->
    <div class="">

    </div>

<!-- Newsletter -->
    <div class="">

    </div>

<!-- Footer -->
    <footer class="">

    </footer>
</div>

</template>