<template>
    <ul>
        <li v-for="item in tree" :key="item._key">
            <nuxt-link v-if="isEntry(item)" :to="item._path" class="dark:text-white text-sm">
                {{ item.title }}
            </nuxt-link>
            <template v-else>
                <span class="nav-folder">{{ item.title }}</span>
                <sidebar-tree v-if="isDirectory(item)" :tree="item.children" />
            </template>
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

function isEntry(item: ContentItem): item is EntryItem {
    return 'description' in item;
}

function isDirectory(item: ContentItem): item is DirectoryItem {
    return 'children' in item;
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