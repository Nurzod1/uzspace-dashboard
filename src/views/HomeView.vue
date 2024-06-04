<script setup>
import MainSidebar from '@/components/MainSidebar.vue'
import MainHeader from '@/components/MainHeader.vue'
import ChartStatistics from '@/components/ChartStatistics.vue'
import ChartUpdates from '@/components/ChartUpdates.vue'
</script>
<template>
  <div class="home-wrapper">
    <div class="home-sidebar">
      <MainSidebar />
    </div>
    <div class="home-main">
      <MainHeader />
      <div class="home-main__content">
        <p class="home-main__title">General dashboard</p>
        <div class="home-main__charts">
          <ChartStatistics />
          <ChartUpdates />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &-wrapper {
    display: flex;
    height: -webkit-fill-available;
  }
  &-main {
    width: 100%;

    &__content {
      padding: 30px;
    }

    &__title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 30px;
    }

    &__charts {
      display: flex;
      gap: 30px;
    }
  }
}
</style>
