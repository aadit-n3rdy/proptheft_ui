<script setup>
import SidebarIcon from './SidebarIcon.vue';
import { ref } from 'vue';

const hidden = ref(true)

</script>

<template>
    <div id="sidebar" @mouseenter="hidden=false" @mouseleave="hidden=true" :style="(hidden)?'width: 2.5em;':'width: 12em;'">
        <SidebarIcon icon="chart-simple" hover-text="View data" link="/view"/>
        <SidebarIcon icon="pen-to-square" hover-text="Upload data"/>
        <SidebarIcon icon="user-lock" hover-text="View Users" link="/userlist"/>
        <SidebarIcon icon="user-pen" hover-text="Edit access perms" link="/useredit"/>
    </div>
</template>

<style scoped>
@import url(../assets/main.css);
@import url(../assets/base.css);

#sidebar {
    transition-duration: .5s;

    overflow-x: hidden;

    display: flex;
    flex-direction: column;

    justify-content: center;
    background-color: var(--c-dark1);
    border-radius: 0;
    z-index: 1;

    font-size: 1.5rem;
    color: var(--c-light2);
    max-height: 100vh;

    gap: 0.5em;
}

#sidebar * {
    transition-duration: .5s;
}

</style>