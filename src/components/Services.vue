<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="flex flex-col justify-start items-start pt-10  h- border border-green-500">
        <div class="flex justify-center w-full border border-red-500 ">
            <h1 class="text-primaryButton text-xl md:text-3xl font-semibold">BUY AND SELL CARS MORE EASILY</h1>
        </div>
       
        <div class="flex flex-col justify-around items-center  md:flex-row w-full h-3/5 border border-yellow-500">
           
            <div class="flex justify-between h-full w-1/3 border border-red-500">
                <div class="w-2/6 h-2/6 border border-blue-500"></div>
                <div class="w-3/5 h-full border border-green-500"></div>
           </div>

           <div class="flex justify-between h-full w-1/3 border border-red-500">
                <div class="w-2/6 h-2/6 border border-blue-500"></div>
                <div class="w-3/5 h-full border border-green-500"></div>
           </div>

           <div class="flex justify-between h-full w-1/3 border border-red-500">
                <div class="w-2/6 h-2/6 border border-blue-500"></div>
                <div class="w-3/5 h-full border border-green-500"></div>
           </div>
        </div>

        
    </div>
</template>