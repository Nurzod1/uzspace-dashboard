<template>
  <div class="map">
    <div class="map-tab">
      <el-tabs v-model:active-name="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Tashkent" name="first">Tashkent</el-tab-pane>
        <el-tab-pane label="Samarkand" name="second">Samarkand</el-tab-pane>
        <el-tab-pane label="Bukhara" name="third">Bukhara</el-tab-pane>
        <el-tab-pane label="Namangan" name="fourth">Namangan</el-tab-pane>
        <el-tab-pane label="Andijan" name="five">Andijan</el-tab-pane>
        <el-tab-pane label="Fergana" name="six">Fergana</el-tab-pane>
        <el-tab-pane label="Karshi" name="seven">Karshi</el-tab-pane>
        <el-tab-pane label="Urgench" name="eight">Urgench</el-tab-pane>
        <el-tab-pane label="Nukus" name="nine">Nukus</el-tab-pane>
        <el-tab-pane label="Navoi" name="ten">Navoi</el-tab-pane>
        <el-tab-pane label="Jizzakh" name="twelve">Jizzakh</el-tab-pane>
        <el-tab-pane label="Termez" name="eleven">Termez</el-tab-pane>
      </el-tabs>
    </div>
    <div id="map" style="height: 500px; width: 100%"></div>
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
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
  height: 725px !important;
}
</style>
