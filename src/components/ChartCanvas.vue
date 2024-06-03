<!-- <template>
  <canvas ref="chartCanvas"></canvas>
</template>

<script>
import { defineComponent } from 'vue'
import { Chart, BarElement, LinearScale, CategoryScale, Title } from 'chart.js'

export default defineComponent({
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      Chart.register(BarElement, LinearScale, CategoryScale, Title)

      this.chart = new Chart(this.$refs.chartCanvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
          datasets: [
            {
              label: 'Продажи',
              data: [12, 19, 3, 5, 2, 3]
            }
          ]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'График продаж'
            }
          }
        }
      })
    }
  }
})
</script> -->

<template>
  <div></div>
</template>
