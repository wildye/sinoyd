<template>
  <el-form
    label-position="left"
    label-width="60px"
    ref="info"
    :model="info"
    :rules="rules">
    <el-form-item label="工号:" prop="username">
      <el-input
        type="text"
        prepend="prepend"
        placeholder="username"
        v-model="info.username"
        clearable
      />
    </el-form-item>
    <el-form-item label="密码:" prop="password">
      <el-input
        type="password"
        placeholder="password"
        suffix-icon="el-icon-view"
        v-model="info.password"
      />
    </el-form-item>
    <el-button type="primary" @click="submitForm('info')">登录</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'LoginUser',
  props: ['loginRole'],
  data () {
    return {
      info: {
        username: 'test',
        password: 'test'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // { type: 'number', message: '必须为数字值' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    toUrl: () => {
      return this.loginRole === 'user'
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.loginRole === 'user') {
            console.log(' submit user!')
          } else {
            console.log(' submit admin!')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.el-button {
  width: 100%;
}
</style>
