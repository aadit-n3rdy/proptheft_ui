<template>
  <div :id="$props.id + '-wrapper'">
  <canvas :id="$props.id"></canvas>
  </div>
</template>

<script setup>
import {Chart} from 'chart.js/auto'
import { Colors } from 'chart.js/auto';
import { watch, onMounted } from 'vue';
Chart.register(Colors)
const props = defineProps([
  'id',
  'labels',
  'datasets'
])
let chart = null;
function updateChart() {
  const ctx = document.getElementById(props.id)
  const data = {
    labels: props.labels,
    datasets: props.datasets
  }
  const config = {
    type: 'line',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        color: {
          forceOverride: true
        }
      }
    }
  }
  if (chart == null) {
     chart = new Chart(ctx, config)
  } else {
    chart.destroy()
    setTimeout(() => {
      chart = new Chart(ctx, config)
      console.log("refresh")
    }, 1000)
  }
}
watch(()=>props.datasets, ()=> {
  console.log('watch')
  updateChart()
})
onMounted(() => {
  updateChart()
})
</script>