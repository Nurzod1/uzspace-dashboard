<template>
  <div class="map">
    <div class="map-tab">
      <el-tabs v-model:active-name="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Tashkent" name="first"></el-tab-pane>
        <el-tab-pane label="Samarkand" name="second"></el-tab-pane>
        <el-tab-pane label="Bukhara" name="third"></el-tab-pane>
        <el-tab-pane label="Namangan" name="fourth"></el-tab-pane>
        <el-tab-pane label="Andijan" name="five"></el-tab-pane>
        <el-tab-pane label="Fergana" name="six"></el-tab-pane>
        <el-tab-pane label="Karshi" name="seven"></el-tab-pane>
        <el-tab-pane label="Urgench" name="eight"></el-tab-pane>
        <el-tab-pane label="Nukus" name="nine"></el-tab-pane>
        <el-tab-pane label="Navoi" name="ten"></el-tab-pane>
        <el-tab-pane label="Jizzakh" name="twelve"></el-tab-pane>
        <el-tab-pane label="Termez" name="eleven"></el-tab-pane>
      </el-tabs>
    </div>
    <div id="map" style="height: 725px; width: 100%"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { ElTabs, ElTabPane } from 'element-plus'
import 'element-plus/es/components/tabs/style/css'
import type { TabsPaneContext } from 'element-plus'

// Reactive state
const activeName = ref('first')
const zoom = ref(13)
const center = ref<[number, number]>([41.32, 69.27])

// Methods
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

// Initialize the map
onMounted(() => {
  const map = L.map('map').setView(center.value, zoom.value)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)
})
</script>

<style lang="scss">
.el-tabs__nav-wrap:after {
  display: none;
}
.el-tabs__nav-scroll {
  padding: 32px 15px;
  padding-bottom: 0px;
}
.el-tabs__item {
  color: #A4A4A4;
  padding: 0 8px;
  &.is-active {
    color: #000000;
    font-weight: 600;
  }
}
.el-tabs__active-bar {
  background-color: #000000;
}
.el-tabs__item:hover {
    color: #636363;
    cursor: pointer;
}
</style>
