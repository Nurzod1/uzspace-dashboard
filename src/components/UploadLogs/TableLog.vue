<script lang="ts" setup>
import { ElTable, ElTableColumn,ElIcon } from 'element-plus'
import { Download } from '@element-plus/icons-vue'
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'
import 'element-plus/es/components/icon/style/css'

import { ref, computed, watch } from 'vue'

const props = defineProps<{
  page: number
  size: number
}>()

const tableData = [
  {
    timestamp: '2024-02-13, 20:40',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:35',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  },
  {
    timestamp: '2024-02-13, 20:39',
    name: 'Kate Morrison',
    filename: '77155a22-d1f7-4a4-b94a-9eb845cd4d20_new_shablon.zip',
    file: 'ZIP'
  }
]

const currentPage = ref(props.page)
const pageSize = ref(props.size)

// Вычисление данных для текущей страницы
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return tableData.slice(start, end)
})

// Общее количество элементов
const totalItems = computed(() => tableData.length)

watch(
  () => props.page,
  (newPage) => {
    currentPage.value = newPage
  }
)

watch(
  () => props.size,
  (newSize) => {
    pageSize.value = newSize
  }
)

defineExpose({
  totalItems
})
</script>

<template>
  <el-table :data="paginatedData" style="width: 100%">
    <el-table-column prop="timestamp" label="Timestamp" width="200" />
    <el-table-column prop="name" label="Name" width="200" />
    <el-table-column prop="filename" label="Filename" width="518" />
    <el-table-column label="Download">
      <template v-slot="{ row }">
        <span class="el-icon-download">
          <el-icon v-if="row.file === 'ZIP'"><Download /></el-icon>
          <span>{{ row.file }}</span>
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss">
.el {
  &-icon {
    &-download {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
}
</style>