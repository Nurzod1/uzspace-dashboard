<template>
  <div class="chart">
    <span class="chart-title">Statistics</span>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

// Регистрация необходимых компонентов глобально
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export default defineComponent({
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      this.chart = new Chart(this.$refs.chartCanvas.getContext('2d'), {
        type: 'doughnut', // тип графика 'doughnut'
        data: {
          labels: ['Completed', 'In Progress', 'New', 'Rejected'],
          datasets: [
            {
              data: [38.6, 30.8, 22.5, 8.1],
              backgroundColor: [
                'rgba(102, 187, 106, 0.6)', // green
                'rgba(66, 165, 245, 0.6)', // blue
                'rgba(255, 183, 77, 0.6)', // yellow
                'rgba(33, 33, 33, 0.6)', // black
              ],
              borderColor: [
                'rgba(102, 187, 106, 1)',
                'rgba(66, 165, 245, 1)',
                'rgba(255, 183, 77, 1)',
                'rgba(33, 33, 33, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'right',
              labels: {
                color: 'black',
                usePointStyle: true,
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
  },
});
</script>

<style scoped>
/* Стили для контейнера диаграммы */
div {
  width: 450px;
  height: 128px; /* можно настроить высоту по вашему усмотрению */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
