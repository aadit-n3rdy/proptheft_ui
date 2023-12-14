<template>
    <div id="selector-container" class="border-shadow inp-container">
        <span class="inp-title">{{ $props.title }}</span>
        <div id="cb-container">
            <Selector v-for="val in $props.values" :key="val.id" :id="'selector-' + val.id"
                @change="(newVal) => $props.result[val.id] = newVal" enabled="true">
                {{ val.name }}
            </Selector>
        </div>
    </div>
</template>

<script setup>
import Selector from './Selector.vue';

defineProps([
    'values',
    'title',
    'result'
])
</script>

<style scoped>
#selector-container {
    display: flex;
    gap: 0.5em;
}

.selector {
    font-size: 0.7em;
}

#cb-container {
    width: 100%;
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
}

</style>