<script setup>
import { ref, onMounted } from 'vue'
import {
  Chart,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from 'chart.js'

// Register necessary components globally
Chart.register(BarController, BarElement, Tooltip, Legend, CategoryScale, LinearScale)

const chartCanvas = ref(null)

const renderChart = () => {
  new Chart(chartCanvas.value.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Completed', 'In Progress', 'New', 'Rejected'],
      datasets: [
        {
          label: 'Updates',
          data: [88600, 30800, 22500, 8100],
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
          barThickness: 20, // Adjust this value to make the bars thinner
          borderRadius: 5
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
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 30000 // Adjust this value to decrease the interval between y-axis values
          },
          grid: {
            display: true // Remove vertical grid lines
          }
        },
        x: {
          grid: {
            display: false // Optional: Remove horizontal grid lines
          }
        }
      }
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
      <p class="chart-title">Updates</p>
      <canvas ref="chartCanvas"></canvas>
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
  width: 100%;
  height: 100%;

  &-title {
    font-size: 16px;
    font-weight: 600;
  }
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
