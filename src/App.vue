<script setup>
import MainSidebar from '@/components/MainSidebar.vue'
import MainHeader from '@/components/MainHeader.vue'
</script>

<template>
  <div class="app-wrapper">
    <div class="app-sidebar">
      <MainSidebar />
    </div>
    <div class="app-main">
      <div class="app-main__header">
        <MainHeader />
      </div>
      <div class="app-main__content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
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
      overflow-y: auto;
      height: 0;
    }
  }
}
</style>
