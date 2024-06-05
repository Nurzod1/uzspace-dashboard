<template>
  <el-table :data="paginatedData" style="width: 100%">
    <el-table-column prop="timestamp" label="Timestamp" width="200" />
    <el-table-column prop="cosmos_id" label="Cosmos ID" width="240" />
    <el-table-column prop="ip_address" label="IP Address" width="518" />
    <el-table-column prop="status" label="Status" />
  </el-table>
</template>

<script lang="ts" setup>
import { ElTable, ElTableColumn } from 'element-plus'
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  page: number
  size: number
}>()

const tableData = [
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '1118989',
    ip_address: '192.168.20.12',
    status: 'Rejected'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '128',
    ip_address: '127.0.0.1',
    status: 'New'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '128',
    ip_address: '127.0.0.1',
    status: 'New'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '198856123147641',
    ip_address: '127.0.0.1',
    status: 'In Progress'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '1118989',
    ip_address: '192.168.20.12',
    status: 'Rejected'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '128',
    ip_address: '127.0.0.1',
    status: 'Competed'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '198856123147641',
    ip_address: '127.0.0.1',
    status: 'In Progress'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '128',
    ip_address: '127.0.0.1',
    status: 'New'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '198856123147641',
    ip_address: '127.0.0.1',
    status: 'In Progress'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '1118989',
    ip_address: '192.168.20.12',
    status: 'Rejected'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '128',
    ip_address: '127.0.0.1',
    status: 'Competed'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '198856123147641',
    ip_address: '127.0.0.1',
    status: 'In Progress'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '1118989',
    ip_address: '192.168.20.12',
    status: 'Rejected'
  },
  {
    timestamp: '2024-02-13, 20:30',
    cosmos_id: '128',
    ip_address: '127.0.0.1',
    status: 'Competed'
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
