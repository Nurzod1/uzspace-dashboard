<script setup lang="ts">
import 'element-plus/es/components/breadcrumb-item/style/css'
import 'element-plus/es/components/breadcrumb/style/css'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { defineProps, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  routes: {
    type: Array as PropType<{ path: string; name: string }[]>,
    required: true
  }
})

const route = useRoute()
const currentRouteName = ref('')

watch(
  () => route.name,
  (newVal) => {
    currentRouteName.value = newVal
  }
)
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(route, index) in routes" :key="index" :to="route.path">
      {{ route.name }}
    </el-breadcrumb-item>
    <el-breadcrumb-item v-if="currentRouteName">{{ currentRouteName }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
