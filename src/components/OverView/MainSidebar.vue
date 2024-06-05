<script setup>
import { ref } from 'vue'
import ChartPieSlice from '@/assets/icons/ChartPieSlice.svg'
import Download from '@/assets/icons/Download.svg'
import ArrowsClockwise from '@/assets/icons/ArrowsClockwise.svg'
import MapTrifold from '@/assets/icons/MapTrifold.svg'

const menuItems = [
  { icon: ChartPieSlice, text: 'Overview', to: '/overview' },
  { icon: Download, text: 'Upload Logs', to: '/upload-logs' },
  { icon: ArrowsClockwise, text: 'Status Updates', to: '/status-updates' },
  { icon: MapTrifold, text: 'Map', to: '/map' }
]

const activeIndex = ref(0)

function setActive(index) {
  activeIndex.value = index
}

function logout() {}
</script>

<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-logo">
      <span>Logo</span>
    </div>
    <div class="sidebar-menu">
      <router-link
        v-for="(menuItem, index) in menuItems"
        :key="index"
        class="sidebar-menu__item"
        :class="{ active: activeIndex === index }"
        @click="setActive(index)"
        :to="menuItem.to"
      >
        <div class="sidebar-menu__item--icon">
          <img :src="menuItem.icon" alt="" />
        </div>
        <span class="sidebar-menu__item--text">{{ menuItem.text }}</span>
      </router-link>
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
            <path
              d="M14.6572 7.53217C14.7978 7.39152 14.9886 7.3125 15.1875 7.3125C15.3864 7.3125 15.5772 7.39152 15.7178 7.53217C15.8585 7.67282 15.9375 7.86359 15.9375 8.0625C15.9375 8.26141 15.8585 8.45218 15.7178 8.59283L12.3107 12L15.7175 15.4069C15.8582 15.5475 15.9375 15.7386 15.9375 15.9375C15.9375 15.9495 15.9372 15.9615 15.9366 15.9735C15.9277 16.1598 15.8497 16.336 15.7178 16.4678C15.5772 16.6085 15.3864 16.6875 15.1875 16.6875C14.9886 16.6875 14.7978 16.6085 14.6572 16.4678L10.7197 12.5303C10.579 12.3897 10.5 12.1989 10.5 12C10.5 11.8011 10.579 11.6103 10.7197 11.4697L14.6572 7.53217Z"
              fill="#1C1C1C"
            />
            <path
              d="M21.75 12.75H11.25C10.8358 12.75 10.5 12.4142 10.5 12C10.5 11.5858 10.8358 11.25 11.25 11.25H21.75C22.1642 11.25 22.5 11.5858 22.5 12C22.5 12.4142 22.1642 12.75 21.75 12.75Z"
              fill="#1C1C1C"
            />
            <path
              d="M6 19.5H11.25C11.6642 19.5 12 19.8358 12 20.25C12 20.6642 11.6642 21 11.25 21H6C5.37868 21 4.93934 20.5607 4.93934 20.5607C4.5 20.1213 4.5 19.5 4.5 19.5V4.5C4.5 3.87868 4.93934 3.43934 4.93934 3.43934C5.37868 3 6 3 6 3H11.25C11.6642 3 12 3.33579 12 3.75C12 4.16421 11.6642 4.5 11.25 4.5H6V19.5Z"
              fill="#1C1C1C"
            />
          </svg>
        </div>
        <span class="sidebar-logout__btn--text">Log Out</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>

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
      transition: 0.3s;

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
