<template>
  <div :id="this.id + '-wrapper'">
  <canvas :id="this.id"></canvas>
  </div>
</template>

<script>
import {Chart} from 'chart.js/auto'
export default {
  name: 'LineChart',
  props: {
    id: String,
    labels: Array,
    datasets: Array
  },
  mounted() {
    console.log("HELLO")
    const ctx = document.getElementById(this.id)
    console.log(ctx)
    const labels = [2021, 2022, 2023, 2024, 2025]
    const data = {
      labels,
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
        borderColor: "#5cddff",
        lineTension: 0,
      }]
    }
    const config = {
      type: 'line',
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
    new Chart(ctx, config)
  }
}
</script>

