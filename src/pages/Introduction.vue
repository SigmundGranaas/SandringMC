<template>
    <div>
        <h1>{{ }}</h1>
        <p>{{ }}</p>
        <nuxt-content :document="lesson"/>
    </div>
</template>

<script>
export default {
    props: {
        lesson: {
            type: Object,
            required: true,
        },
    },
};
</script>
