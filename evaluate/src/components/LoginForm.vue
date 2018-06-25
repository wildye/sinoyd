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
        clearable/>
    </el-form-item>
    <el-form-item label="密码:" prop="password">
      <el-input
        type="password"
        placeholder="password"
        suffix-icon="el-icon-view"
        v-model="info.password"/>
    </el-form-item>
    <el-form-item v-if="message">
      <span>{{ message }}</span>
    </el-form-item>
    <el-button type="primary" @click="submitLogin('info')">登录</el-button>
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
      message: '',
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
  },
  methods: {
    submitLogin (info) {
      this.$refs[info].validate((val) => {
        if (val) {
          if (this.loginRole === 'user') {
            this.sendlogin()
            console.log(' user login!')
          } else {
            console.log(' admin login')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    sendlogin () {
      this.$api.post('login', {
        username: this.info.username,
        password: this.info.password
      }, result => {
        let info = result.data
        info.token = result.headers.authorization
        localStorage.setItem('info', JSON.stringify(info))
        this.$store.commit('setUserInfo', info)
        this.$router.push('/')
      }, error => {
        switch (error.status) {
          case 401:
            this.message = '过期，请重新登录'
            break
          case 400:
            this.message = '用户名或密码错误'
            break
          case 404:
            this.message = '异常错误，404'
            break
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
