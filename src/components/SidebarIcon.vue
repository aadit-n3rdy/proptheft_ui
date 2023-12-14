<script setup>
defineProps(['icon', 'link', 'hoverText'])
</script>

<template>
    <a :href="$props.link" class="sb-icon-container">
        <font-awesome-icon :icon="['fas', $props.icon]" fixed-width/>
        <div class="sb-text">{{ hoverText }}</div>
    </a>
</template>

<style scoped>
@import url('../assets/base.css');
.sb-icon-container {
    display: flex;
    padding: 0.5em;
    border-radius: 0;
    background-color: transparent;
    box-shadow: var(--c-mid) 0 0;
}

.sb-icon-container:hover {
    box-shadow: var(--c-mid) 0 0;
    transform: translate(1em, 0em);
    background-color: var(--c-dark1);
    box-shadow: var(--c-mid) -0.5em 0;
}

.sb-text {
    background-color: var(--c-dark1);
    margin-left: 1.5em;
    padding-right: 2em;
    color: var(--c-light1);
    align-self: center;
    font-size: 0.8em;
    min-width: max-content;
}
</style>