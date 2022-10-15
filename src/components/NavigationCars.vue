<script setup>

</script>

<template>
<header class="flex justify-around lg:justify-center items-center space-x-10 w-screen h-16">
    <div class="w-36 h-10">
        <img src="src/assets/img/HeaderLogo.png" alt="">
    </div>

    <nav>
  	<a v-for="([title, path], i) in [
              ['Home','/dashboard'],
              ['Team','/team'],
              ['Projects','/projects'],
              ['Reports','/reports']
              ]" :key="path">
      {{title}} - {{path}}
      <!-- implement this ^ -->
    </a>
  </nav>
</header>
</template>