<script setup>
import ChartStatistics from '@/components/OverView/ChartStatistics.vue'
import ChartUpdates from '@/components/OverView/ChartUpdates.vue'
import PgAdmin from '@/components/OverView/PgAdmin.vue'
</script>
<template>
  <div class="home-wrapper">
    <div class="home-main__content">
      <p class="home-main__title">General dashboard</p>
      <div class="home-main__charts">
        <ChartStatistics />
        <ChartUpdates />
      </div>
      <PgAdmin />
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
      overflow: auto;
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
      margin-bottom: 30px;
    }
  }
}
</style>
