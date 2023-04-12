<template>
    <li>
        <nuxt-link v-if="item._source === 'content'" :to="item._path">{{ item.title }}</nuxt-link>
        <span v-if="item._type === 'directory'">{{ item.title }}</span>
        <ul v-if="item.children">
            <template v-for="child in item.children" :key="child.path">
                <SidebarItem :item="child"/>
            </template>
        </ul>
    </li>
</template>

<script lang="ts" setup>
import {ParsedContent} from "@nuxt/content/dist/runtime/types";
import {PropType} from "@vue/runtime-core";

const props = defineProps({
    item: {
        type: Object as PropType<ParsedContent>,
        required: true,
    }
});

const {item} = toRefs(props);

console.log(item.value)
</script>