<template>
    <ul class="dark:text-white">
        <li v-for="item in tree" :key="item._key" class="p-1">
            <nuxt-link v-if="isEntry(item)" :to="item._path" class="text-sm hover:underline">
                {{ item.title }}
            </nuxt-link>
            <div v-else class="pl-1">
                <button class="outline-none text-md font-bold" @click="onClickFolder">{{ item.title }}<span>^</span></button>
                <sidebar-tree v-if="isDirectory(item) && isOpen" :tree="item.children" />
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ContentItem, ContentTree, EntryItem, DirectoryItem } from '~/models/ContentItem';

const props = defineProps({
    tree: {
        type: Array as () => ContentTree,
        default: () => [],
    },
});

const isOpen = ref(true)

function isEntry(item: ContentItem): item is EntryItem {
    return 'description' in item;
}

function isDirectory(item: ContentItem): item is DirectoryItem {
    return 'children' in item;
}

function onClickFolder(){
    isOpen.value = !isOpen.value
}
</script>

<style scoped>
.nav-link {
    /* style for the nav links */
}

.nav-entry-description {
    /* style for the entry descriptions */
}

.nav-folder {
    /* style for the nav folders */
}
</style>