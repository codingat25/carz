<script setup>
import { ref } from 'vue';


</script>

<template>
    <div class="flex flex-wrap w-full">
        <div class="flex justify-center items-center w-full h-auto">
            <h1 class="px-10 text-3xl py-10 text-primaryColor text-center font-semibold">
                BUY AND SELL CARS MORE EASILY
            </h1>
        </div>

        
        <div class="flex flex-col lg:flex-row w-full space-y-10 lg:space-y-0 space-x-0 lg:space-x-10 px-10 lg:px-0 py-0 lg:py-10">

            <div class="flex flex-col md:flex-row justify-around w-full lg:w-1/3 h-auto">
                <div class="flex justify-center w-full md:w-auto">
                    <div class="w-24 h-24 mb-5 md:mb-0 mr-0 md:mr-5  ">
                      <img src="../assets/img/Shipping.png" alt="shipping">
                     </div>
                </div>
 
                <div class="w-full lg:w-4/5">
                    <h1 class="pb-3 text-2xl text-center font-semibold lg:text-left text-tertiaryColor">Shipping to any state</h1>
                    <p class="px-10 md:px-0 text-center md:text-left">You may arrange interstate shipping in the US through a third-party shipping company of your choice or through our authorized representative. <span class="text-primaryColor"><a href=""> View shipping instructions »</a></span> </p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-around w-full lg:w-1/3 h-auto">
                <div class="flex justify-center w-full md:w-auto">
                    <div class="w-24 h-24 mb-5 md:mb-0 mr-0 md:mr-5  ">
                      <img src="../assets/img/Payments.png" alt="payments">
                     </div>
                </div>
 
                <div class="w-full lg:w-4/5">
                    <h1 class="pb-3 text-2xl text-center font-semibold lg:text-left text-tertiaryColor">Payments</h1>
                    <p class="px-10 md:px-0 text-center md:text-left">All payments are due with 2 business days after sale. Buyers from other states are highly recommended to add funds to their account ahead of time.  <span class="text-primaryColor"><a href="">View payment  instructions »</a></span> </p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-around w-full lg:w-1/3 h-auto">
                <div class="flex justify-center w-full md:w-auto">
                    <div class="w-24 h-24 mb-5 md:mb-0 mr-0 md:mr-5  ">
                      <img src="../assets/img/Import details.png" alt="import details">
                     </div>
                </div>
 
                <div class="w-full lg:w-4/5">
                    <h1 class="pb-3 text-2xl text-center font-semibold lg:text-left text-tertiaryColor">Import Details</h1>
                    <p class="px-10 md:px-0 text-center md:text-left">Visit  <span class="text-primaryColor"><a href="#">Your state customs website</a> </span>  to learn more about the laws and regulation of importing cars into your state.</p>
                </div>
            </div>

        </div>
    </div>


</template>