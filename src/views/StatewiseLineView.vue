
<template>
    <PageContainer>
     <div id="content"> 
        <div id="text-content">
            <div id="title">Statewise Line Graph</div>
            <!-- slider for year adjustment-->
            <!-- radio buttons for states -->
        </div>
        <LineChart id="myChart" :datasets="datasets" :labels="labels"/>
    </div>
    </PageContainer>
</template>

<script setup>
import LineChart from '../components/LineChart.vue';
import PageContainer from '../components/PageContainer.vue';

import { ref } from 'vue';
const datasets = ref(
    [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
        borderColor: "#5cddff",
        lineTension: 0,
      }]
)
const labels = ref([2015, 2016, 2017, 2018, 2019, 2020])
</script>

<style scoped>
#content {
    width: 100%;
    height: 95%;
    justify-items: center;
    align-items: center;

    gap: 1em;

    padding: 2em;

    display: grid;
    grid-template-columns: 1fr 2fr;
}
#text-content {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 100%;
    align-items: center;
}
#title {
    font-weight: bold;
    font-size: 2em;
}
#myChart-wrapper {
    border: 1px solid black;
    grid-column: 2;
    padding: 2em;
    width: 100%;
    height: 100%;
}
</style>