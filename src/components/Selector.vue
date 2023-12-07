<template>
    <span @click="clicked()" :id="$props.id" :class="getClasses()">
    <slot></slot></span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['modelValue', 'id', 'enabled'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        if (props.enabled) {
            emit('update:modelValue', value)
        }
    }
})

function clicked() {
    if (props.enabled) {
        if (value.value === undefined) {
            value.value = true
        } else {
            value.value = !value.value
        }
        console.log("clicked")
    }
}

function getClasses() {
    let l = ['selector']
    if (props.enabled) {
        l.push('selector-enabled')
        if (props.modelValue) {
            l.push('selector-true')
        } else {
            l.push('selector-false')
        }
    } else {
        l.push('selector-disabled')
    }
    return l
}

</script>

<style scoped>
@import url('../assets/base.css');
.selector {
    padding: 0.5em;
    border-radius: 0.5rem;
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