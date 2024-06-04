<script setup>
import MainSidebar from '@/components/MainSidebar.vue'
import MainHeader from '@/components/MainHeader.vue'
import ChartStatistics from '@/components/ChartStatistics.vue'
</script>
<template>
  <div class="home-wrapper">
    <div class="home-wrapper__sidebar">
      <MainSidebar />
    </div>
    <div class="home-wrapper__main">
      <MainHeader />
      <ChartStatistics></ChartStatistics>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &-wrapper {
    display: flex;
    height: -webkit-fill-available;

    &__main {
      width: 100%;
    }
  }
}
</style>
