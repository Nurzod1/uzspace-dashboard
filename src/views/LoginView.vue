// eslint-disable-next-line vue/multi-word-component-names
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/form/style/css'
import 'element-plus/es/components/form-item/style/css'
import 'element-plus/es/components/upload/style/css'

const ruleFormRef = ref<FormInstance>()

// inputs
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please enter your password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please enter your password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error('Password mismatch!'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <div class="login">
    <div class="login-title">
      <span>Log in or create an account to collaborate</span>
    </div>
    <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules" label-width="auto"
      class="demo-ruleForm">
      <el-form-item prop="pass">
        <el-input v-model="ruleForm.pass" type="username" placeholder="Username" autocomplete="off" />
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" placeholder="Password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-upload__btn">Log In</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss">
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #F7F9FB;
}

.login {
  padding: 145px 155px;
  background: #ffffff;
  border-radius: 24px;
  position: fixed;

  &-title {
    width: 388px;
    margin-bottom: 70px;
    text-align: center;

    span {
      font-size: 24px;
      font-weight: 600;
    }
  }
}

.el-input__wrapper {
  border-radius: 8px;
  height: 40px;
}

.el-button {
  height: 40px;
  width: 100%;
  background-color: #F3F3F3;
  border-color: #F3F3F3;
  color: #000;

  &:hover {
    background-color: #d3d3d3;
    color: #000;
    border-color: #d3d3d3;
  }

  &.login-upload__btn {
    background-color: #000;
    color: #ffffff;
    margin-top: 65px;
    border-radius: 8px;
    transition: 0.3s;

    &:hover {
      background-color: #d3d3d3;
      color: #000;
      border-color: #d3d3d3;
    }
  }
}

.el-upload-list {
  display: none;
}
</style>
