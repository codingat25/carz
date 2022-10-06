<script setup>
import NavigationCars from "./components/NavigationCars.vue";
import FindVehicle from "./components/FindVehicle.vue";
</script>

<template>
    <div class="relative h-screen">
        <div class="bg-mobile-hero bg-no-repeat bg-cover bg-right-top h-3/4 md:bg-desktop-hero">
          <NavigationCars/>
         <div class="float mt-36 md:ml-32 lg:ml-72">
          <FindVehicle/>
          </div>
        </div>

    </div>
</template>
