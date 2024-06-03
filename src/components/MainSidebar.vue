<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-logo">
      <span>Logo</span>
    </div>
    <div class="sidebar-menu">
      <button
        v-for="(menuItem, index) in menuItems"
        :key="index"
        class="sidebar-menu__item"
        :class="{ active: activeIndex === index }"
        @click="setActive(index)"
      >
        <div class="sidebar-menu__item--icon">
          <!-- Выводим иконку из массива menuItem.icon -->
          <img :src="menuItem.icon" alt="" />
        </div>
        <span class="sidebar-menu__item--text">{{ menuItem.text }}</span>
      </button>
    </div>
    <div class="sidebar-logout">
      <button class="sidebar-logout__btn" @click="logout">
        <div class="sidebar-logout__btn--icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- SVG для иконки -->
          </svg>
        </div>
        <span class="sidebar-logout__btn--text">Log Out</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const menuItems = [
  { icon: require('@/assets/icons/ChartPieSlice.svg'), text: 'Overview' },
  { icon: require('@/assets/icons/Download.svg'), text: 'Upload Logs' },
  { icon: require('@/assets/icons/ArrowsClockwise.svg'), text: 'Status Updates' },
  { icon: require('@/assets/icons/MapTrifold.svg'), text: 'Map' }
]

let activeIndex = 0

function setActive(index) {
  activeIndex = index
}

function logout() {
  // Your logout logic here
}
</script>

<style scoped>
/* Ваши стили */
</style>

<style lang="scss" scoped>
.sidebar {
  &-wrapper {
    width: fit-content;
    height: -webkit-fill-available;
    padding: 27px 15px;
    border-right: 1px solid #e6e6e6;
  }

  &-logo {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 25px;
    margin-left: 11px;
  }

  &-menu {
    &__item {
      display: flex;
      align-items: center;
      gap: 11px;
      width: 248px;
      height: 48px;
      border-radius: 8px;
      margin-bottom: 4px;
      padding: 11px !important;

      &.active {
        background-color: #f2f2f2;
      }

      &--icon {
        max-width: 24px;
        max-height: 24px;
      }

      &--text {
        font-size: 14px;
      }
    }
  }

  &-logout {
    position: absolute;
    bottom: 30px;

    &__btn {
      display: flex;
      align-items: center;
      padding: 8px;

      &--icon {
        max-width: 24px;
        max-height: 24px;
        margin-right: 8px;
      }

      &--text {
        font-size: 14px;
      }
    }
  }
}
</style>
