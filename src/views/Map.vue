<template>
  <div class="map">
    <div class="map-tab">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
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
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import 'element-plus/es/components/tabs/style/css'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang="scss">

.el-tabs__nav-wrap:after {
  display: none;
}
.el-tabs__nav-scroll {
  padding: 32px;
    padding-bottom: 15px;
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



.map {
}
</style>
