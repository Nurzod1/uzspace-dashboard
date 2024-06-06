<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage, ElMessageBox, ElUpload } from 'element-plus'
import type { FormInstance, FormRules, UploadProps, UploadUserFile } from 'element-plus'
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

// upload

const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
  const index = fileList.value.findIndex(f => f.uid === file.uid)
  if (index !== -1) {
    fileList.value.splice(index, 1)
  }
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `Лимит 3 файла, вы выбрали ${files.length} файла(ов), в сумме ${files.length + uploadFiles.length}`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Отменить загрузку ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
</script>

<template>
  <div class="login">
    <div class="login-title">
      <span>Upload a Shapefile ZIP</span>
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
        <div class="login-upload">
          <el-input autocomplete="off" placeholder="Choose file" disabled></el-input>
          <el-upload :file-list="fileList" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
            multiple :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3"
            :on-exceed="handleExceed">
            <el-button type="primary">Browse</el-button>
          </el-upload>
        </div>
      </el-form-item>
      <div class="login-upload__status">
        <div class="login-upload__status--icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.35374 7.64663L3.35355 7.64645C3.25979 7.55268 3.13261 7.5 3 7.5C2.86739 7.5 2.74021 7.55268 2.64645 7.64645C2.55268 7.74021 2.5 7.86739 2.5 8C2.5 8.00801 2.50019 8.01602 2.50058 8.02402C2.50655 8.14818 2.55855 8.26566 2.64645 8.35355L2.64663 8.35374L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536L13.8536 4.85355C13.9473 4.75979 14 4.63261 14 4.5C14 4.36739 13.9473 4.24021 13.8536 4.14645C13.7598 4.05268 13.6326 4 13.5 4C13.3674 4 13.2402 4.05268 13.1464 4.14645L6.5 10.7929L3.35374 7.64663Z"
              fill="#A1E3CB" />
          </svg>
        </div>
        <div class="login-upload__status--text">Scheduler status: Enable</div>
      </div>
      <el-form-item>
        <el-button type="primary" class="login-upload__btn">Upload</el-button>
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

    span {
      font-size: 24px;
      font-weight: 600;
    }
  }

  &-upload {
    display: flex;
    gap: 8px;
    width: 100%;

    &__status {
      display: flex;
      gap: 4px;
      background-color: #F1FBF7;
      padding: 4px 8px;
      align-items: center;
      width: 177px;
      font-size: 12px;
      border-radius: 8px;

      &--icon {
        width: 16px;
        height: 16px;
      }
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
