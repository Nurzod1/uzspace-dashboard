<script setup>
import { ref, onMounted } from 'vue'
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js'

// Register necessary components globally
Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

const chartCanvas = ref(null)

const renderChart = () => {
  new Chart(chartCanvas.value.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Completed', 'In Progress', 'New', 'Rejected'],
      datasets: [
        {
          data: [88.6, 30.8, 22.5, 8.1],
          backgroundColor: [
            'rgba(102, 187, 106, 0.6)', // green
            'rgba(66, 165, 245, 0.6)', // blue
            'rgba(255, 183, 77, 0.6)', // yellow
            'rgba(33, 33, 33, 0.6)' // black
          ],
          borderColor: [
            'rgba(102, 187, 106, 1)',
            'rgba(66, 165, 245, 1)',
            'rgba(255, 183, 77, 1)',
            'rgba(33, 33, 33, 1)'
          ],
          borderWidth: 0,
          borderRadius: 20, // Add this to round the borders
          cutout: '70%' // Adjust cutout for the inner radius
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true
        }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  })
}

onMounted(() => {
  renderChart()
})
</script>

<template>
  <div class="chart-container">
    <div class="chart">
      <p class="chart-title">Statistics</p>
      <canvas ref="chartCanvas"></canvas>
    </div>
    <div class="chart-legend">
      <ul>
        <li><span class="legend-color completed"></span>Completed:</li>
        <li><span class="legend-color in-progress"></span>In Progress:</li>
        <li><span class="legend-color new"></span>New:</li>
        <li><span class="legend-color rejected"></span>Rejected:</li>
      </ul>
      <ul class="chart-legend__values">
        <li>88.6%</li>
        <li>30.8%</li>
        <li>22.5%</li>
        <li>8.1%</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 532px;
  height: 273px;
  background-color: #f7f9fb;
  padding: 30px;
  border-radius: 16px;
  box-sizing: border-box;
}

.chart {
  width: 40%;
  height: 100%;

  &-title {
    font-size: 16px;
    font-weight: 600;
  }
}

.chart-legend {
  width: 50%;
  display: flex;
  gap: 75px;
  margin-top: 50px;

  &__item {
    display: flex;
    align-items: center;
  }

  &__values {
    li {
      margin-bottom: 22px !important;
    }
  }
}

.chart-legend ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.chart-legend li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.legend-color {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
}

.completed {
  background-color: #a1e3cb; /* green */
}

.in-progress {
  background-color: #59a8d4; /* blue */
}

.new {
  background-color: #ffcb83; /* yellow */
}

.rejected {
  background-color: rgba(33, 33, 33, 0.6); /* black */
}
</style>
