<template>
  <aside
      class="min-h-screen border-r border-gray-200 dark:border-gray-700 overflow-auto"
  >
    <div class="p-4">
      <h1
          class="text-xl font-bold mb-4 text-gray-800 dark:text-white"
      >
        Overview
      </h1>
      <nav>
        <ul>
          <li
              v-for="section in sections"
              :key="section.title"
              class="mb-2 last:mb-0"
          >
            <h2
                class="text-sm font-semibold text-gray-600 dark:text-gray-300"
            >
              {{ section.title }}
            </h2>
            <ul class="ml-2">
              <li v-for="link in section.links" :key="link.name">
                <router-link
                    :to="link.path"
                    active-class="font-semibold"
                    class="block py-1 text-sm text-gray-700 dark:text-gray-300"
                >
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup>
const sections = ref([
  {
    title: "Essentials",
    links: [
      {name: "Introduction", path: "/guides/introduction"},
      {name: "Installation", path: "/installation"},
      // Add more links as needed
    ],
  },
  {
    title: "Transitions & Animation",
    links: [
      {name: "Enter & Leave", path: "/enter-leave"},
      {name: "List Enter & Leave", path: "/list-enter-leave"},
      // Add more links as needed
    ],
  },
]);
defineComponent({
  name: "Sidebar",
});
</script>

