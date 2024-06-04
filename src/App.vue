<script setup>
import MainSidebar from '@/components/OverView/MainSidebar.vue'
import MainHeader from '@/components/OverView/MainHeader.vue'
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
    height: -webkit-fill-available;
  }

  &-main {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
