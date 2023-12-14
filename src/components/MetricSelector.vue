<template>
    <div id="metric-container" class="border-shadow inp-container">
        <span class="inp-title">Metric</span>
        <select id="metric" @change="$props.updateMetric($event.target.value)">
            <option value="sud_cases_stolen" selected>Cases Stolen</option>
            <option value="sud_cases_recovered">Cases Recovered</option>
            <option value="sud_value_stolen">Value Stolen</option>
            <option value="sud_value_recovered">Value Recovered</option>
        </select>
    </div>
</template>

<script setup>
defineProps([
    'updateMetric'
])

</script>

<style scoped>
select {
    padding: 1em;
    padding-right: 2em;
    color: var(--c-dark1);
    border-radius: 0.5em;
}
</style>