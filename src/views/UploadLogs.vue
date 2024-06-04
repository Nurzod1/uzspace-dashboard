// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import TableLog from '@/components/Logs/TableLog.vue'
</script>
<template>
  <div class="logs-wrapper">
    <div class="logs-wrapper__content">
      <p class="logs-wrapper__title">General dashboard</p>
      <TableLog />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logs {
  &-wrapper {
    overflow: auto;
    padding: 30px;

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
