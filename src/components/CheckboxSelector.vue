<template>
    <div id="cb-container">
        <Selector 
            :key="field.id" 
            :id="'attribute-' + field.id" 
            v-for="field in fields" 
            @update:model-value="clearOthers()"
            v-model="checkedFields[field.id]" 
            enabled="true">
            {{ field.text }}
        </Selector>
    </div>
</template>

<script setup>
import Selector from './Selector.vue';
import { ref, computed } from 'vue';
const props = defineProps([
    'id',
    'fields',
    'modelValue'
])
defineEmits(
    'update:modelValue'
)
const value = computed({
    get() {
        for (let field in props.fields) {
            if (checkedFields[field.id] === true) {
                return field.id
            }
        }
        return undefined
    },
    set(v) {
        for (let field in props.fields) {
            if (field.id === v) {
                checkedFields[field.id] = true
            } else {
                checkedFields[field.id] = false
            }
        }
    }
})
const checkedFields = ref({})
/*
fields: [
    {
        'id': 'AP',
        text: '',
    }
]
*/
</script>