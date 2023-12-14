<script setup>
import {ref} from 'vue'
import IconPropheft from './icons/IconProptheft.vue'
import LogoText from './LogoText.vue';
const username = ref('')
</script>

<template>
  <div id="pageheader">
    <IconPropheft/>
    <LogoText/>
    <div id="ph-username">
      {{ username }}
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/main.css');
@import url('../assets/base.css');

#pageheader {
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0.7rem;
  border-radius: 0;
  background-color: var(--c-dark1);
  color: var(--c-light2);
}
</style>
