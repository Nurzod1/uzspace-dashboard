<script setup>
import MainSidebar from '@/components/MainSidebar.vue'
import MainHeader from '@/components/MainHeader.vue'
</script>

<template>
  <div class="default-wrapper">
    <div class="default-sidebar">
      <MainSidebar />
    </div>
    <div class="default-main">
      <div class="default-main__header">
        <MainHeader />
      </div>
      <div class="default-main__content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default {
  &-wrapper {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  &-sidebar {
    flex-shrink: 0;
  }

  &-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    &__header {
      flex-shrink: 0;
    }

    &__content {
      flex-grow: 1;
      overflow-y: hidden;
      height: 0;
    }
  }
}
</style>