<script setup>
import PageHeader from './PageHeader.vue';
import SidebarComponent from './SidebarComponent.vue';
</script>

<template>
    <div id="page-container">
        <SidebarComponent/>
        <PageHeader/>
        <div id="content-container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
#page-container {
    display: grid;
    grid-template-rows: min-content auto;
    grid-template-columns: max-content auto;
    width: 100%;
    max-height: 100%;
    height: 100%;
}
#sidebar {
    grid-row: 2/3;
    grid-column: 1;
}
#pageheader {
    grid-row: 1;
    grid-column: 1/3;
}
</style>