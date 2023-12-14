<template>
    <PageContainer>
        <div id="content">
            <div id="text-content">
                <div id="title" class="border-shadow">Categorywise Line Graph</div>
                <SelectorContainer title="Property Types" :values="categoryList" :result="checkedCats" />
                <MetricSelector :update-metric="updateMetric" />
            </div>
            <LineChart id="myChart" class="border-shadow" :datasets="datasets" :labels="labels" />
        </div>
    </PageContainer>
</template>

<script setup>
import SelectorContainer from '../components/SelectorContainer.vue';
import MetricSelector from '../components/MetricSelector.vue';
import LineChart from '../components/LineChart.vue';
import PageContainer from '../components/PageContainer.vue';
import { ref, watch } from 'vue';
import categoryListRaw from '../property.json';
import axios from 'axios';

const categoryList = ref(categoryListRaw)
const catMap = {}
for (let i in categoryListRaw) {
    catMap[categoryListRaw[i].id] = categoryListRaw[i].name
}
const metric = ref('sud_cases_stolen')

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
updateGraph()

watch(checkedCats.value, () => {
    updateGraph()
})

async function updateGraph() {
    datasets.value = []
    for (let id in checkedCats.value) {
        if (checkedCats.value[id]) {
            const res = await axios.get(`http://localhost:3000/data/getpbased?p_id=${id}`)
            console.log(catMap[id])
            datasets.value.push({
                label: catMap[id],
                data: res.data.data[0][metric.value],
                borderWidth: 2,
                lineTension: 0.5
            })
            labels.value = res.data.data[0].year
        }
    }
}

function updateMetric(met) {
    console.log(metric)
    metric.value = met
    updateGraph()
}

const labels = ref([2014, 2015, 2016])
</script>

<style scoped>
@import url('../assets/linePages.css');
#content {
    height: 100%;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>