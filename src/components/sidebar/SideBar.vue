<template>
    <aside>
        <nav>
            <ul>
                <template v-for="item in sidebarItems" :key="item.path">
                    <SidebarItem :item="item"/>
                </template>
            </ul>
        </nav>
    </aside>
</template>

<script lang="ts" setup>

import {ParsedContent} from "@nuxt/content/dist/runtime/types";

const sidebarItems = ref([] as ParsedContent[]);

async function getSidebarItems(dir: string): Promise<ParsedContent[]> {
    const query = await queryContent(dir).find();
    return query.map((item: ParsedContent) => {
        if (item._type === 'directory') {
            return {
                ...item,
                children: getSidebarItems(item.path),
            };
        }
        return item;
    });
}

async function loadSidebarItems() {
    sidebarItems.value = await getSidebarItems('docs');
}

loadSidebarItems();
</script>
