<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ElSelect, ElOption } from 'element-plus'
import 'element-plus/es/components/select/style/css'
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])
const value = ref(null)
const options = ref([
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' }
])

const closeModal = () => {
  emit('close')
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.modal-wrapper')) {
    closeModal()
  }
}
  
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="modal" @click="closeModal">
    <div class="modal-wrapper" @click.stop>
      <div class="modal-title">
        <span>Download</span>
      </div>
      <div class="modal-select">
        <el-select v-model="value" placeholder="Select" size="large" style="width: 100%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="value" placeholder="Select" size="large" style="width: 100%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="modal-section">
        <el-select v-model="value" placeholder="Select" size="large" style="width: 190px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <button class="modal-btn__dwnload">
          <div class="modal-btn__dwnload--icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.723 9.03593L13.7232 9.03569C13.8404 8.91848 13.9062 8.75951 13.9062 8.59375C13.9062 8.42799 13.8404 8.26902 13.7232 8.15181C13.606 8.0346 13.447 7.96875 13.2812 7.96875C13.1155 7.96875 12.9565 8.0346 12.8393 8.15181L12.8391 8.15204L10 10.9911L7.16077 8.15188C7.04348 8.0346 6.88451 7.96875 6.71875 7.96875C6.55299 7.96875 6.39402 8.0346 6.27681 8.15181C6.1596 8.26902 6.09375 8.42799 6.09375 8.59375C6.09375 8.75951 6.1596 8.91848 6.27681 9.03569L9.55806 12.3169C9.67527 12.4342 9.83424 12.5 10 12.5C10.1658 12.5 10.3247 12.4342 10.4419 12.3169L13.723 9.03593Z"
                fill="white"
              />
              <path
                d="M9.375 3.125V11.875C9.375 12.2202 9.65482 12.5 10 12.5C10.3452 12.5 10.625 12.2202 10.625 11.875V3.125C10.625 2.77982 10.3452 2.5 10 2.5C9.65482 2.5 9.375 2.77982 9.375 3.125Z"
                fill="white"
              />
              <path
                d="M3.75 16.25V11.875C3.75 11.5298 3.47018 11.25 3.125 11.25C2.77982 11.25 2.5 11.5298 2.5 11.875V16.25C2.5 16.7678 2.86612 17.1339 2.86612 17.1339C3.23223 17.5 3.75 17.5 3.75 17.5H16.25C16.7678 17.5 17.1339 17.1339 17.1339 17.1339C17.5 16.7678 17.5 16.25 17.5 16.25V11.875C17.5 11.5298 17.2202 11.25 16.875 11.25C16.5298 11.25 16.25 11.5298 16.25 11.875V16.25H3.75Z"
                fill="white"
              />
            </svg>
          </div>
          <span class="modal-btn__dwnload--text">Download</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  top: 0;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3901960784);
  z-index: 4;

  &-wrapper {
    background: #ffffff;
    padding: 24px 32px 32px 24px;
    width: 396px;
    height: 264px;
    border-radius: 16px;
  }

  &-title {
    margin-bottom: 32px;
    span {
      font-size: 24px;
      font-weight: 600;
    }
  }

  &-select {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-section {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  &-btn {
    border: none;
    background: none;
    max-width: 24px;
    max-height: 24px;
    &__dwnload {
      display: flex;
      align-items: center;
      background-color: #000000;
      border-radius: 8px;
      border: none;
      padding: 8px 18px;
      transition: 0.3s;

      &:hover {
        background-color: #494949;
      }

      &:active {
        background-color: #e8e8e8;
      }

      &--icon {
        max-width: 20px;
        max-height: 20px;
        margin-right: 4px;
      }

      &--text {
        color: #ffffff;
        font-size: 14px;
      }
    }
  }
}
.el-select--large .el-select__wrapper {
  min-height: 36px;
  border-radius: 8px;
}
</style>
