<script lang="ts" setup>
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'
import { ElTable, ElTableColumn } from 'element-plus'

const tableData = [
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  },
  {
    date: '2024-02-13, 20:30',
    name: 'Kate Morrison',
    bia: '77155a22-d1f7-4a4-',
    status: 'new'
  }
]
</script>
<template>
  <div class="table-wrapper">
    <div class="table-title">pgAdmin</div>
    <el-table class="custom-table" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Cosmos ID" width="160" />
      <el-table-column prop="name" label="Name" width="280" />
      <el-table-column prop="bia" label="Bia" width="370" />
      <el-table-column prop="status" label="Status" />
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
</style>
