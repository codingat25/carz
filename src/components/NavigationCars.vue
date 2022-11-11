<script setup>
import { ref } from "vue";
const navLinks = [
  ["Home", "/dashboard"],
  ["Buy Vehicle", "/dashboard"],
  ["Sell Vehicle", "/dashboard"],
  ["My Inventory", "/dashboard"],
  ["Help", "/dashboard"],
  ["Contact Us", "/dashboard"],
];
</script>
<!-- NAVIGATION -->
<template>
  <nav
    class="flex h-hero-height-mobile w-screen flex-col items-center justify-start bg-mobile-hero bg-cover bg-center lg:h-hero-height lg:w-full lg:bg-desktop-hero"
  >
    <div
      class="sticky top-0 flex h-16 w-full items-center justify-around bg-gray-800 bg-opacity-80 p-4 pt-2 md:justify-center"
    >
      <div class="lg:[90%] flex h-16 w-full md:w-[95%] xl:w-[80%]">
        <div
          class="z-30 flex h-16 shrink-0 items-center justify-center pb-2 lg:w-44 xl:w-60"
        >
          <img
            src="../assets/img/HeaderLogo.png"
            alt="website logo"
            class="w-[60%]"
          />
        </div>

        <!-- Menu Items -->
        <div
          class="hidden h-16 w-full items-center justify-start space-x-2 text-sm lg:flex lg:space-x-8 xl:space-x-12"
        >
          <a
            v-for="[title, path] in navLinks"
            :key="path"
            :href="path"
            class="rounded-lg font-bold tracking-normal text-white hover:text-primaryColor"
          >
            {{ title }}
          </a>
        </div>

        <div
          class="hidden h-16 w-5/12 flex-shrink items-center justify-evenly text-white lg:flex"
        >
          <div
            class="flex w-4/12 justify-center rounded-md bg-primaryColor p-2"
          >
            <a href="#">Register</a>
          </div>
          <div
            class="flex w-4/12 justify-center rounded-md bg-tertiaryColor p-2"
          >
            <a href="#">Login</a>
          </div>
        </div>

        <div
          class="flex h-full w-full items-center justify-end lg:hidden lg:justify-center"
        >
          <div
            class="mr-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white lg:mr-0"
          >
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex h-full w-full items-center justify-around pt-2 md:justify-center"
    >
      <div class="lg:[90%] flex h-full w-full md:w-[95%] xl:w-[80%]">
        <div
          class="flex h-full shrink-0 items-center justify-center pb-2 lg:w-44 xl:w-60"
        ></div>

        <!-- header message -->
        <div class="flex h-full w-full items-center justify-start pl-8 lg:pl-0">
          <div class="h-2/3 w-4/6 md:w-3/6 lg:w-4/6 xl:w-3/6">
            <div
              class="flex h-full w-full flex-col justify-center font-bold text-white"
            >
              <p class="text-xl md:text-2xl lg:text-4xl">WELCOME TO</p>
              <p class="py-3 text-5xl font-black lg:text-5xl xl:text-7xl">
                CARBID360
              </p>
              <p class="text-xl font-medium md:text-3xl">
                Over
                <span
                  class="text-xl font-extrabold text-primaryColor md:text-3xl"
                  >125,000 Vehicles</span
                >
                in Inventory for Businesses & Individuals
              </p>

              <div
                class="flex flex-col justify-start space-x-0 space-y-1 py-5 md:flex-row md:space-x-4 md:space-y-0"
              >
                <div
                  class="flex w-36 shrink-0 justify-center rounded-md bg-black py-2"
                >
                  <a href="#">App Store</a>
                </div>
                <div
                  class="flex w-36 shrink-0 justify-center rounded-md bg-black py-2"
                >
                  <a href="#">Google Play</a>
                </div>
              </div>

              <div
                class="flex w-56 shrink-0 justify-center rounded-md bg-primaryColor py-3"
              >
                <a href="#">Register</a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="hidden h-full w-5/12 flex-shrink items-center justify-evenly text-white lg:flex"
        ></div>
      </div>
    </div>
  </nav>
</template>
