<template>
    <div class="bg-white dark:bg-midnight w-screen transition-colors min-h-screen">
        <Header/>
        <div class="flex container mx-auto">
            <SideBar/>
            <main class="flex-1 flex-auto w-full max-w-4xl grow p-6 ">
                <slot/>
            </main>
            <aside class="p-6 border-l border-gray-200 dark:border-gray-700 ">
                <h2 class="text-xl font-semibold mb-4">
                    Page Structure
                </h2>
                <ul>
                    <li class="mb-2">
                        <a class="text-sm" href="#section-1">Section
                            1</a>
                    </li>
                    <li class="mb-2">
                        <a class="text-sm" href="#section-2">Section
                            2</a>
                    </li>
                </ul>
            </aside>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SideBar from '~/components/sidebar/SideBar.vue';

defineComponent({
    name: 'DefaultLayout',
    components: {
        SideBar,
    },
});
</script>