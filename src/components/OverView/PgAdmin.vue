<script lang="ts" setup>
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'
import 'element-plus/es/components/icon/style/css'
import { ElTable, ElTableColumn, ElIcon } from 'element-plus'
import { CircleClose, Check, Clock, Refresh } from '@element-plus/icons-vue'


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


const statusClass = (status: TableData['status']) => {
  return {
    'status-icon': true,
    new: status === 'New',
    in_progress: status === 'In Progress',
    rejected: status === 'Rejected',
    completed: status === 'Completed'
  }
}

const statusText = (status: TableData['status']) => {
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
  <div class="table-wrapper">
    <div class="table-title">pgAdmin</div>
    <el-table class="custom-table" :data="tableData" style="width: 100%">
      <el-table-column prop="timestamp" label="Timestamp" width="160" />
      <el-table-column prop="cosmos_id" label="Cosmos ID" width="280" />
      <el-table-column prop="ip_address" label="IP Address" width="330" />
      <el-table-column label="Status" width="200">
        <template #default="{ row }">
          <span :class="statusClass(row.status)">
            <el-icon :size="20">
              <circle-close v-if="row.status === 'Rejected'" />
              <clock v-else-if="row.status === 'In Progress'" />
              <refresh v-else-if="row.status === 'New'" />
              <check v-else-if="row.status === 'Completed'" />
            </el-icon>
            {{ statusText(row.status) }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="View">
        <template #default>
          <el-icon :size="20">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.4569 8.20307C15.4569 8.20307 15.3173 8.51721 15.0325 8.96953C15.0325 8.96953 14.4713 9.86076 13.7286 10.6036C13.7286 10.6036 11.3321 13 8 13C8 13 4.66789 13 2.27145 10.6036C2.27145 10.6036 1.52865 9.86076 0.967509 8.96953C0.967509 8.96953 0.68271 8.5172 0.543094 8.20307C0.485635 8.07379 0.485635 7.92621 0.543094 7.79693C0.543094 7.79693 0.682709 7.4828 0.967509 7.03047C0.967509 7.03047 1.52865 6.13924 2.27145 5.39645C2.27145 5.39645 4.6679 3 8 3C8 3 11.3321 3 13.7286 5.39645C13.7286 5.39645 14.4713 6.13924 15.0325 7.03047C15.0325 7.03047 15.3173 7.48279 15.4569 7.79693C15.5144 7.92621 15.5144 8.07379 15.4569 8.20307ZM14.1863 8.43672C14.1863 8.43672 14.3416 8.18992 14.4429 8C14.4429 8 14.3417 7.81008 14.1863 7.56328C14.1863 7.56328 13.6849 6.767 13.0214 6.10355C13.0214 6.10355 10.9179 4 8 4C8 4 5.08211 4 2.97855 6.10355C2.97855 6.10355 2.3151 6.76701 1.81374 7.56328C1.81374 7.56328 1.65835 7.81007 1.55706 8C1.55706 8 1.65835 8.18993 1.81374 8.43672C1.81374 8.43672 2.3151 9.23299 2.97855 9.89645C2.97855 9.89645 5.08211 12 8 12C8 12 10.9179 12 13.0214 9.89645C13.0214 9.89645 13.6849 9.233 14.1863 8.43672Z"
                fill="#1C1C1C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 5C8 5 9.24264 5 10.1213 5.87868C10.1213 5.87868 11 6.75736 11 8C11 8 11 9.24264 10.1213 10.1213C10.1213 10.1213 9.24264 11 8 11C8 11 6.75736 11 5.87868 10.1213C5.87868 10.1213 5 9.24264 5 8C5 8 5 6.75736 5.87868 5.87868C5.87868 5.87868 6.75736 5 8 5ZM8 6C8 6 7.17157 6 6.58579 6.58579C6.58579 6.58579 6 7.17157 6 8C6 8 6 8.82843 6.58579 9.41421C6.58579 9.41421 7.17157 10 8 10C8 10 8.82843 10 9.41421 9.41421C9.41421 9.41421 10 8.82843 10 8C10 8 10 7.17157 9.41421 6.58579C9.41421 6.58579 8.82843 6 8 6Z"
                fill="#1C1C1C"
              />
            </svg>
          </el-icon>
        </template>
      </el-table-column>
    </el-table>
  </div>
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

.status-icon {
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
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
