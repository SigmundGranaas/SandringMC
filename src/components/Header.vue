<template>
  <header class="py-4 border-b border-gray-200  dark:border-gray-700">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <div class="text-xl font-semibold">
          <router-link class="hover:text-gray-600 text-gray-800 dark:text-white" to="/">
            SandringMC
          </router-link>
        </div>
        <nav class="hidden md:flex space-x-4">
          <router-link
              v-for="link in links"
              :key="link.name"
              :to="link.path"
              active-class="text-gray-800"
              class="hover:text-gray-800 text-gray-600 dark:text-gray-300"
          >
            {{ link.name }}
          </router-link>
        </nav>
        <div class="flex gap-4">
          <DarkModeSwitch/>
          <a href="https://github.com">
            <span class="fab fa-github dark:text-stone-400 text-2xl pt-1"></span>
          </a>
          <a href="https://youtube.com">
            <span class="fab fa-youtube dark:text-stone-400 text-2xl pt-1"></span>
          </a>
          <a href="https://discord.com">
            <span class="fab fa-discord dark:text-stone-400 text-2xl pt-1"></span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import DarkModeSwitch from "~/components/header/DarkModeSwitch.vue";

const links = ref([
  {name: "About", path: "/about"},
  {name: "Docs", path: "/docs"},
  // Add more links as needed
]);

defineComponent({
  name: "Header",
});
</script>

<style scoped>
/* Style the icon container */


</style>