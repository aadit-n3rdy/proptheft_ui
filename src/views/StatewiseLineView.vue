<template>
    <PageContainer>
        <div id="content">
            <div id="text-content">
                <div id="title" class="border-shadow">Statewise Line Graph</div>
                <SelectorContainer title="States" :values="stateList" :check-func="checkFunc" :result="checkedStates"/>
                <MetricSelector :update-metric="updateMetric" />
            </div>
            <LineChart id="myChart" class="border-shadow" :datasets="datasets" :labels="labels" />
        </div>
    </PageContainer>
</template>

<script setup>
import LineChart from '../components/LineChart.vue';
import PageContainer from '../components/PageContainer.vue';
import { ref, watch } from 'vue';
import stateListRaw from '../states.json'
import MetricSelector from '../components/MetricSelector.vue';
import SelectorContainer from '../components/SelectorContainer.vue';
import axios from 'axios';

const checkFunc = ref(async (state) => {
    console.log('wayne@gmail.com')
    console.log(state)
    let res
    try {
        res = await axios.get(`http://localhost:3000/uauth/stateperms?mail=wayne@gmail.com&su_id=${state}`)
    } catch (e) {
        console.log("false? " + state)
        return "false"
    }
    return "true"
})

const stateList = ref(stateListRaw)

const checkedStates = ref({})

const metric = ref('sud_cases_stolen')

const labels = ref([2014, 2015, 2016])

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

watch(checkedStates.value, async () => {
    updateGraph()
})

async function updateGraph() {
    datasets.value = []
    for (let id in checkedStates.value) {
        if (checkedStates.value[id]) {
            const res = await axios.get(`http://localhost:3000/data/getsuidbased?su_id=${id}`)
            datasets.value.push({
                label: id,
                data: res.data.data[0][metric.value],
                borderWidth: 2,
                lineTension: 0.5

            })
            labels.value = res.data.data[0].array_agg
        }
    }
}

function updateMetric(met) {
    metric.value = met
    updateGraph()
}

</script> 
<style scoped>
@import url('../assets/linePages.css');
#cb-container {
    max-height: 5em;
    overflow:scroll;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
