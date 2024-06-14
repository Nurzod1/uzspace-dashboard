<template>
  <div class="drop">
    <div class="drop-list">
      <div v-for="(item, index) in items" :key="index" :class="['drop-list__item', { 'active': index === activeIndex }]"
        @click="toggleActive(index)">
        <div class="drop-list__item--icon">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
              :fill="item.color" />
          </svg>
        </div>
        <span class="drop-list__item--text">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = [
  { label: 'Competed', color: '#A1E3CB' },
  { label: 'New', color: '#FFCB83' },
  { label: 'In Progress', color: '#59A8D4' },
  { label: 'Rejected', color: '#1C1C1C' }
];

const activeIndex = ref(2);

const toggleActive = (index) => {
  activeIndex.value = index;
};
</script>

<style scoped lang="scss">
.drop {
  &-list {
    &__item {
      display: flex;
      gap: 12px;
      align-items: center;
      padding: 6px 10px;
      padding-left: 30px;
      border-radius: 8px;
      font-size: 12px;
      width: 210px;
      height: 32px;
      cursor: pointer;
      transition: .3s;

      &.active {
        background-color: #F3F3F3;

        &:before {
          content: url('@/assets/icons/Vector.svg');
          position: absolute;
          left: 15px;
        }
      }

      &--text {
        font-size: 12px;
      }
    }
  }
}
</style>
