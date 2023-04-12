<template>
    <main>
        <article class="article">
            <ContentDoc/>
        </article>

    </main>
</template>

<script setup></script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .article {
        @apply prose lg:prose-xl;
        @apply p-4 mt-6 lg:mt-8 m-auto lg:max-w-3xl;
        @apply dark:text-white transition;
    }

    .article-header {
        @apply mb-12 pb-8 lg:mb-16 border-gray-200 border-b-2;
    }

    .article-header h1 {
        @apply mb-0;
    }

    .article-header .details-cont span {
        @apply text-opacity-50 text-sm;
    }
}
</style>