<template>
    <span
      @click="clicked()" 
      :id="$props.id" 
      :class="{'selector': true, 'selector-disabled': !$props.enabled, 'selector-true': value, 'selector-false': !value}">
      <slot></slot>
    </span>
</template>

<script setup>
import { ref } from 'vue';

defineProps(['id', 'enabled'])
const emit = defineEmits(['change'])

const value = ref(false)

function clicked() {
    value.value = !value.value
    emit("change", value.value)
}

</script>

<style scoped>
@import url('../assets/base.css');
.selector {
    padding: 0.5em;
    border-radius: 0.5rem;
    transition-duration: 0.5s;
}
.selector-true {
    background-color: var(--c-dark2);
    color: var(--c-light1);
}
.selector-false {
    background-color: var(--c-light2);
    color: var(--c-dark2);
}

.selector-disabled {
    background-color: lightgray;
    color: darkgray;
    white-space: pre;
}
</style>
