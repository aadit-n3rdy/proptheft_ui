<template>
    <PageContainer>
        <div id="content">
            <div id="text-content">
                <div id="title" class="border-shadow">Statewise Map</div>
                <!-- slider for year adjustment-->
                <div id="years-container" class="border-shadow inp-container">
                    <span class="inp-title">Years</span>
                    <Slider @update="updateYear(yearRange)" id="year-inp" :min="2014" :max="2016" :step="1" v-model="yearRange" />
                </div>
                <MetricSelector :update-metric="updateMetric" />
            </div>
            <MapChart id="map" class="border-shadow" :dataset="dataset"></MapChart >
        </div>
    </PageContainer>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MapChart from '../components/MapChart.vue';
import PageContainer from '../components/PageContainer.vue';
import Slider from '@vueform/slider';
import axios from 'axios';
//import mapdata from '../maptest.json'
import MetricSelector from '../components/MetricSelector.vue';
const yearRange = ref([2014, 2016])
const dataset = ref({limit: 0, data: []})
const metricRef = ref()
let mapdata = {}
updateMetric('sud_cases_stolen')
async function getMapData() {
    let mapdataRaw = await axios.get(`http://localhost:3000/data/getSumofData?y1=${yearRange.value[0]}&y2=${yearRange.value[1]}`)
    mapdata = mapdataRaw.data.data
    console.log(mapdata)
}
async function updateMap() {
    const metric = metricRef.value
    await getMapData()
    console.log(metric)
    let max = 0
    const compiled = []
    for (let i in mapdata) {
        let data = mapdata[i]
        if (data[metric] > max) {
            max = data[metric]
        }
        compiled.push({
            id: data.su_id,
            value: data[metric]
        })
    }
    dataset.value = {
        limit: max,
        data: compiled
    }
}
function updateYear() {
    updateMap()
}
async function updateMetric(metric) {
    metricRef.value = metric
    updateMap()
}

onMounted(
    () => {
        updateMap()
    }
)
</script>

<style scoped>

@import url('../assets/linePages.css');

#year-inp {
    --slider-connect-bg: var(--c-mid);
    --slider-tooltip-bg: var(--c-mid);
    --slider-tooltip-font-size: 0.8em;
    --slider-tooltip-line-height: 1.5em;
    transition-duration: 0;
}

#year-inp * {
    transition-duration: 0;
}

#text-content {
  justify-content: center;
  gap: 2em;
}

.map-container {
  padding: 100px;
}

</style>

<style src="@vueform/slider/themes/default.css"></style>