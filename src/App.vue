<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div id="app-container">
        <RouterView/>
    </div>
</template>

<style>
@import './assets/main.css';
#app-container {
    width: 100%;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    border: 1px solid black;
}
</style>