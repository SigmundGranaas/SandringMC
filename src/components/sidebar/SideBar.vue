<template>
    <aside>
        <nav class="w-64 border-r border-gray-200 dark:border-gray-700">
            <SidebarTree :tree="sidebarItems" />
        </nav>
    </aside>
</template>

<script lang="ts" setup>
import SidebarTree from './SidebarTree.vue';
const sidebarItems = ref([] as ParsedContent[]);

async function getSidebarItems(dir: string): Promise<ParsedContent[]> {
    const query = await queryContent(dir).find();
    const contentItems = query.map(nuxtContentToContentItem);
    const tree = createContentTree(contentItems);
    console.log(tree);
    return  tree;
}

async function loadSidebarItems() {
    sidebarItems.value = await getSidebarItems('docs');
}

loadSidebarItems();
</script>
