<template>
    <PageContainer>
        <div id="content">
            <div id="text-content">
                <div id="title" class="border-shadow">Categorywise Line Graph</div>
                <!-- slider for year adjustment-->
                <div id="years-container" class="border-shadow inp-container">
                    <span class="inp-title">Years</span>
                    <Slider id="year-inp" :min="1980" :max="2030" :step="5" v-model="yearRange" />
                </div>
                <!-- radio buttons for states -->
                <div id="states-container" class="border-shadow inp-container">
                    <span class="inp-title">Categories</span>
                    <div id="cb-container">
                        <Selector v-for="cat in categoryList" v-model="checkedCats[cat]" enabled="true">
                            {{ cat }}
                        </Selector>
                    </div>
                </div>
            </div>
            <LineChart id="myChart" class="border-shadow" :datasets="datasets" :labels="labels" />
        </div>
    </PageContainer>
</template>

<script>
import Slider from '@vueform/slider'
import Selector from '../components/Selector.vue';
export default {
    components: {
        Slider,
        Selector
    },
}
</script>

<script setup>
import LineChart from '../components/LineChart.vue';
import PageContainer from '../components/PageContainer.vue';
import { ref } from 'vue';

const stateList = ref(
    ['TN', 'AP', 'DL', 'KL', 'UP', 'MH', 'MP']
)

const categoryList = [
    'Motor Vehicles',
    'Cattle',
    'Fire Arms'
]

const yearRange = ref([1990, 2010])

const checkedCats = ref({})

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
</style>

<style src="@vueform/slider/themes/default.css"></style>