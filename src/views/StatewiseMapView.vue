<template>
    <PageContainer>
        <div id="content">
            <div id="text-content">
                <div id="title" class="border-shadow">Statewise Map</div>
                <!-- slider for year adjustment-->
                <div id="years-container" class="border-shadow inp-container">
                    <span class="inp-title">Years</span>
                    <Slider @update="console.log(yearRange[0], yearRange[1])" id="year-inp" :min="1980" :max="2030" :step="5" v-model="yearRange" />
                </div>
                <div id="metric-container" class="border-shadow inp-container">
                    <span class="inp-title">Metric</span>
                    <!-- TODO: Fix dropdown style -->
                    <select id="metric" @change="updateMetric($event.target.value)">
                        <option value="sud_cases_stolen" selected>Cases Stolen</option>
                        <option value="sud_cases_recovered">Cases Recovered</option>
                        <option value="sud_value_stolen">Value Stolen</option>
                        <option value="sud_value_recovered">Value Recovered</option>
                    </select>
                </div>
            </div>
            <MapChart id="map" :dataset="dataset"></MapChart >
        </div>
    </PageContainer>
</template>

<script setup>
const mapdata = 
[
 {
   "su_id": "AR",
   "sud_year": 2016,
   "sud_cases_stolen": 2490,
   "sud_value_stolen": 113.2,
   "sud_cases_recovered": 1023,
   "sud_value_recovered": 46.5,
   "p_id": 1
 },
 {
   "su_id": "AS",
   "sud_year": 2016,
   "sud_cases_stolen": 283,
   "sud_value_stolen": 12.9,
   "sud_cases_recovered": 48,
   "sud_value_recovered": 2.2,
   "p_id": 1
 },
 {
   "su_id": "BR",
   "sud_year": 2016,
   "sud_cases_stolen": 2072,
   "sud_value_stolen": 94.2,
   "sud_cases_recovered": 429,
   "sud_value_recovered": 19.5,
   "p_id": 1
 },
 {
   "su_id": "CG",
   "sud_year": 2016,
   "sud_cases_stolen": 2204,
   "sud_value_stolen": 100.2,
   "sud_cases_recovered": 435,
   "sud_value_recovered": 19.8,
   "p_id": 1
 },
 {
   "su_id": "DL",
   "sud_year": 2016,
   "sud_cases_stolen": 948,
   "sud_value_stolen": 43.1,
   "sud_cases_recovered": 319,
   "sud_value_recovered": 14.5,
   "p_id": 1
 },
 {
   "su_id": "GA",
   "sud_year": 2016,
   "sud_cases_stolen": 204,
   "sud_value_stolen": 9.3,
   "sud_cases_recovered": 46,
   "sud_value_recovered": 2.1,
   "p_id": 1
 },
 {
   "su_id": "GJ",
   "sud_year": 2016,
   "sud_cases_stolen": 4567,
   "sud_value_stolen": 207.6,
   "sud_cases_recovered": 1386,
   "sud_value_recovered": 63,
   "p_id": 1
 },
 {
   "su_id": "HR",
   "sud_year": 2016,
   "sud_cases_stolen": 5753,
   "sud_value_stolen": 261.5,
   "sud_cases_recovered": 1689,
   "sud_value_recovered": 76.8,
   "p_id": 1
 },
 {
   "su_id": "HP",
   "sud_year": 2016,
   "sud_cases_stolen": 431,
   "sud_value_stolen": 19.6,
   "sud_cases_recovered": 189,
   "sud_value_recovered": 8.6,
   "p_id": 1
 },
 {
   "su_id": "JK",
   "sud_year": 2016,
   "sud_cases_stolen": 550,
   "sud_value_stolen": 25,
   "sud_cases_recovered": 248,
   "sud_value_recovered": 11.3,
   "p_id": 1
 },
 {
   "su_id": "JH",
   "sud_year": 2016,
   "sud_cases_stolen": 613,
   "sud_value_stolen": 27.9,
   "sud_cases_recovered": 129,
   "sud_value_recovered": 5.9,
   "p_id": 1
 },
 {
   "su_id": "KA",
   "sud_year": 2016,
   "sud_cases_stolen": 6085,
   "sud_value_stolen": 276.6,
   "sud_cases_recovered": 2316,
   "sud_value_recovered": 105.3,
   "p_id": 1
 },
 {
   "su_id": "KL",
   "sud_year": 2016,
   "sud_cases_stolen": 1828,
   "sud_value_stolen": 83.1,
   "sud_cases_recovered": 400,
   "sud_value_recovered": 18.2,
   "p_id": 1
 },
 {
   "su_id": "LD",
   "sud_year": 2016,
   "sud_cases_stolen": 5207,
   "sud_value_stolen": 236.7,
   "sud_cases_recovered": 1597,
   "sud_value_recovered": 72.6,
   "p_id": 1
 },
 {
   "su_id": "MP",
   "sud_year": 2016,
   "sud_cases_stolen": 74168,
   "sud_value_stolen": 3371.3,
   "sud_cases_recovered": 5871,
   "sud_value_recovered": 266.9,
   "p_id": 1
 },
 {
   "su_id": "MH",
   "sud_year": 2016,
   "sud_cases_stolen": 189,
   "sud_value_stolen": 8.6,
   "sud_cases_recovered": 66,
   "sud_value_recovered": 3,
   "p_id": 1
 },
 {
   "su_id": "MN",
   "sud_year": 2016,
   "sud_cases_stolen": 330,
   "sud_value_stolen": 15,
   "sud_cases_recovered": 37,
   "sud_value_recovered": 1.7,
   "p_id": 1
 },
 {
   "su_id": "ML",
   "sud_year": 2016,
   "sud_cases_stolen": 195,
   "sud_value_stolen": 8.9,
   "sud_cases_recovered": 77,
   "sud_value_recovered": 3.5,
   "p_id": 1
 },
 {
   "su_id": "MZ",
   "sud_year": 2016,
   "sud_cases_stolen": 178,
   "sud_value_stolen": 8.1,
   "sud_cases_recovered": 41,
   "sud_value_recovered": 1.9,
   "p_id": 1
 },
 {
   "su_id": "NL",
   "sud_year": 2016,
   "sud_cases_stolen": 2448,
   "sud_value_stolen": 111.3,
   "sud_cases_recovered": 624,
   "sud_value_recovered": 28.4,
   "p_id": 1
 },
 {
   "su_id": "OD",
   "sud_year": 2016,
   "sud_cases_stolen": 2332,
   "sud_value_stolen": 106,
   "sud_cases_recovered": 853,
   "sud_value_recovered": 38.8,
   "p_id": 1
 },
 {
   "su_id": "PY",
   "sud_year": 2016,
   "sud_cases_stolen": 5282,
   "sud_value_stolen": 240.1,
   "sud_cases_recovered": 2890,
   "sud_value_recovered": 131.4,
   "p_id": 1
 },
 {
   "su_id": "PB",
   "sud_year": 2016,
   "sud_cases_stolen": 41,
   "sud_value_stolen": 1.9,
   "sud_cases_recovered": 17,
   "sud_value_recovered": 0.8,
   "p_id": 1
 },
 {
   "su_id": "RJ",
   "sud_year": 2016,
   "sud_cases_stolen": 3011,
   "sud_value_stolen": 136.9,
   "sud_cases_recovered": 2013,
   "sud_value_recovered": 91.5,
   "p_id": 1
 },
 {
   "su_id": "SK",
   "sud_year": 2016,
   "sud_cases_stolen": 2499,
   "sud_value_stolen": 113.6,
   "sud_cases_recovered": 1339,
   "sud_value_recovered": 60.9,
   "p_id": 1
 },
 {
   "su_id": "TN",
   "sud_year": 2016,
   "sud_cases_stolen": 52,
   "sud_value_stolen": 2.4,
   "sud_cases_recovered": 15,
   "sud_value_recovered": 0.7,
   "p_id": 1
 },
 {
   "su_id": "TS",
   "sud_year": 2016,
   "sud_cases_stolen": 13862,
   "sud_value_stolen": 630.1,
   "sud_cases_recovered": 3689,
   "sud_value_recovered": 167.7,
   "p_id": 1
 },
 {
   "su_id": "TR",
   "sud_year": 2016,
   "sud_cases_stolen": 292,
   "sud_value_stolen": 13.3,
   "sud_cases_recovered": 158,
   "sud_value_recovered": 7.2,
   "p_id": 1
 },
 {
   "su_id": "UP",
   "sud_year": 2016,
   "sud_cases_stolen": 3484,
   "sud_value_stolen": 158.4,
   "sud_cases_recovered": 543,
   "sud_value_recovered": 24.7,
   "p_id": 1
 },
 {
   "su_id": "UK",
   "sud_year": 2016,
   "sud_cases_stolen": 17,
   "sud_value_stolen": 0.8,
   "sud_cases_recovered": 6,
   "sud_value_recovered": 0.3,
   "p_id": 1
 },
 {
   "su_id": "WB",
   "sud_year": 2016,
   "sud_cases_stolen": 176,
   "sud_value_stolen": 8,
   "sud_cases_recovered": 61,
   "sud_value_recovered": 2.8,
   "p_id": 1
 },
 {
   "su_id": "AN",
   "sud_year": 2016,
   "sud_cases_stolen": 92,
   "sud_value_stolen": 4.2,
   "sud_cases_recovered": 30,
   "sud_value_recovered": 1.4,
   "p_id": 1
 },
 {
   "su_id": "CH",
   "sud_year": 2016,
   "sud_cases_stolen": 24,
   "sud_value_stolen": 1.1,
   "sud_cases_recovered": 13,
   "sud_value_recovered": 0.6,
   "p_id": 1
 },
 {
   "su_id": "DN",
   "sud_year": 2016,
   "sud_cases_stolen": 72133,
   "sud_value_stolen": 3278.8,
   "sud_cases_recovered": 3454,
   "sud_value_recovered": 157,
   "p_id": 1
 },
 {
   "su_id": "DD",
   "sud_year": 2016,
   "sud_cases_stolen": 0,
   "sud_value_stolen": 0,
   "sud_cases_recovered": 0,
   "sud_value_recovered": 0,
   "p_id": 1
 },
 {
   "su_id": "LA",
   "sud_year": 2016,
   "sud_cases_stolen": 79,
   "sud_value_stolen": 3.6,
   "sud_cases_recovered": 30,
   "sud_value_recovered": 1.4,
   "p_id": 1
 },
 {
   "su_id": "OT",
   "sud_year": 2016,
   "sud_cases_stolen": 178,
   "sud_value_stolen": 8.1,
   "sud_cases_recovered": 41,
   "sud_value_recovered": 1.9,
   "p_id": 1
 },
 {
   "su_id": "AP",
   "sud_year": 2016,
   "sud_cases_stolen": 2448,
   "sud_value_stolen": 111.3,
   "sud_cases_recovered": 624,
   "sud_value_recovered": 28.4,
   "p_id": 1
 },
 {
   "su_id": "TG",
   "sud_year": 2016,
   "sud_cases_stolen": 2332,
   "sud_value_stolen": 106,
   "sud_cases_recovered": 853,
   "sud_value_recovered": 38.8,
   "p_id": 1
 }
]
import { onMounted, ref } from 'vue';
import MapChart from '../components/MapChart.vue';
import PageContainer from '../components/PageContainer.vue';
import Slider from '@vueform/slider';
const yearRange = ref([1990, 2010])
const dataset = ref({})
updateMetric('sud_cases_stolen')
function updateMetric(metric) {
    console.log("Hello from updateMetric")
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
</script>

<style scoped>
.border-shadow {
    border: 0.1rem solid var(--c-mid);
    box-shadow: var(--c-mid) 0.1rem 0.1rem;
    border-radius: 0.5rem;
}

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
    width: 100%;
    align-items: center;
    padding: 1em;
    gap: 2em;
    height: 100%;
    justify-content: center;
}

#title {
    font-weight: bold;
    font-size: 2em;
    align-content: center;
    justify-content: center;
    padding: 1em;
    width: 100%;
    background-color: var(--c-light2);
}

#myChart-wrapper {
    grid-column: 2;
    padding: 2em;
    width: 100%;
    max-width: 100%;
    height: 100%;
}

.inp-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    ;
    padding: 1.5em;
    gap: 1em;
}

.inp-title {
    font-size: 1.5em;
    margin: 1em;
    margin-left: 0;
    margin-top: 0;
}

.state-container {
    display: flex;
    gap: 0.5em;
}

#cb-container {
    width: 100%;
    display: flex;
    gap: 0.5em;
    flex-wrap:wrap;
}

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

select {
    padding: 1em;
    padding-right: 2em;
    color: var(--c-dark1);
    border-radius: 0.5em;
}


</style>

<style src="@vueform/slider/themes/default.css"></style>