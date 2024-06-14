<script lang="ts" setup>
import { ElTable, ElTableColumn, ElIcon } from 'element-plus'
import { CircleClose, Check, Clock, Refresh } from '@element-plus/icons-vue'
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  page: number
  size: number
}>()

interface TableData {
  timestamp: string;
  cosmos_id: string;
  ip_address: string;
  status: 'New' | 'In Progress' | 'Rejected' | 'Completed';
}

const tableData: TableData[] = [
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
    status: 'Completed'
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
    status: 'Completed'
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
    status: 'Completed'
  }
]

const currentPage = ref(props.page)
const pageSize = ref(props.size)

// Compute data for the current page
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return tableData.slice(start, end)
})

// Total number of items
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

const statusClass = (status: 'New' | 'In Progress' | 'Rejected' | 'Completed') => {
  return {
    'status-icon': true,
    'new': status === 'New',
    'in-progress': status === 'In Progress',
    'rejected': status === 'Rejected',
    'completed': status === 'Completed'
  }
}

const statusText = (status: 'New' | 'In Progress' | 'Rejected' | 'Completed') => {
  switch (status) {
    case 'New':
      return 'New'
    case 'In Progress':
      return 'In Progress'
    case 'Rejected':
      return 'Rejected'
    case 'Completed':
      return 'Completed'
    default:
      return 'Unknown'
  }
}
</script>

<template>
  <el-table :data="paginatedData" style="width: 100%">
    <el-table-column prop="timestamp" label="Timestamp" width="200" />
    <el-table-column prop="cosmos_id" label="Cosmos ID" width="240" />
    <el-table-column prop="ip_address" label="IP Address" width="456" />
    <el-table-column label="Status" width="200">
      <template #default="{ row }">
        <span :class="statusClass(row.status)">
          <el-icon :size="20">
            <circle-close v-if="row.status === 'Rejected'" />
            <clock v-else-if="row.status === 'In Progress'" />
            <check v-else-if="row.status === 'Completed'" />
            <refresh v-else />
          </el-icon>
          {{ statusText(row.status) }}
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss">
:root {
  --el-bg-color: #f7f9fb;
  --el-border-radius-round: 20px;
}

.table {
  &-wrapper {
    max-width: 1096px;
    background-color: #f7f9fb;
    border-radius: 20px;
  }

  &-title {
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
}

.el-table {
  border-radius: 16px !important;
}

.cell::before {
  content: '';
  width: 5px;
  height: 5px;
  background-color: blue;
}

.status-icon {
  display: flex;
  align-items: center;
}

.status-icon.new {
  color: #ffcb83;
}

.status-icon.in_progress {
  color: #59a8d4;
}

.status-icon.rejected {
  color: #9fa1a2;
}

.status-icon.completed {
  color: #4caf50;
}
</style>
