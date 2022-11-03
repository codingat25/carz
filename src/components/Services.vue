<script setup>
import { ref } from 'vue';
</script>

<template>
    <div class="flex flex-col justify-start items-start h-full md:h-services-height bg-white ">
        <div class="flex justify-center w-full  py-10">
            <h1 class="text-primaryButton text-xl md:text-3xl font-extrabold">BUY AND SELL CARS MORE EASILY</h1>
        </div>
       
        <div class="flex flex-col justify-around items-center  md:flex-row w-full ">
           
            <div class="flex flex-col md:flex-row items-center md:items-start justify-around h-full w-full md:w-1/3">
                <div class="flex shrink-0 w-32 h-32 rounded-full "></div>
                <div class="w-full md:w-4/5 h-full p-5 ">
                    <h1 class="p-3 text-2xl text-tertiaryButton">Shipping to any state</h1>
                    <p class="p-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iure minima quo ducimus, 
                        impedit eveniet eaque similique illo beatae magni dignissimos architecto nisi possimus magnam velit, numquam repudiandae quaerat voluptatibus?
                    <a href="#" class="text-primaryButton">View shipping instructions >></a></p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-center md:items-start justify-around h-full w-full md:w-1/3">
                <div class="flex shrink-0 w-32 h-32 rounded-full "></div>
                <div class="w-full md:w-4/5 h-full p-5 ">
                    <h1 class="p-3 text-2xl text-tertiaryButton">Payments</h1>
                    <p class="p-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iure minima quo ducimus, 
                        impedit eveniet eaque similique illo beatae magni dignissimos architecto nisi possimus magnam velit, numquam repudiandae quaerat voluptatibus?
                    <a href="#" class="text-primaryButton">View payment instructions >></a></p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-center md:items-start justify-around h-full w-full md:w-1/3">
                <div class="flex shrink-0 w-32 h-32 rounded-full"></div>
                <div class="w-full md:w-4/5 h-full p-5 ">
                    <h1 class="p-3 text-2xl text-tertiaryButton">Import details</h1>
                    <p class="p-3 text-sm">Visit <a href="#" class="text-primaryButton">Your state customs website >></a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iure minima quo ducimus, 
                        impedit eveniet eaque similique illo beatae magni dignissimos architecto nisi possimus magnam velit, numquam repudiandae quaerat voluptatibus?
                    </p>
                </div>
            </div>

        </div>

        
    </div>
</template>