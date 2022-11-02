<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="flex flex-col justify-center items-center h-[674px] border border-green-500">
        <div class="flex justify-center items-end h-1/5 w-full border border-red-500 ">
            <h1 class="text-primaryButton text-3xl font-semibold">BUY AND SELL CARS MORE EASILY</h1>
        </div>
       
        <div class="flex justify-around items-center flex-col md:flex-row w-full h-3/5 border border-red-500">
           
           <div class="flex justify-center space-x-4 border border-yellow-500">
            <div class="h-full py-2 w-3/4 border border-red-500 rounded-full"></div>
            <div class="w-64 h-72 border border-green-500 ">
                <h2>Shipping to any states</h2>
            </div>
           </div>

           

        </div>
    </div>
</template>