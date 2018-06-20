<template>
  <div class="index">
    <h1>API Test</h1>
    <h3>1. 获取问卷列表</h3>
    <ul>
      <li v-for="(val, key) in docList" :key="key.id">{{ key + ' : ' + val }}</li>
    </ul>
    <h3>2. 获取登录信息</h3>
    <ul>
      <li v-for="(val, key) in userInfo" :key="key.id">{{ key + ' : ' + val }}</li>
    </ul>
    <h3>3. 获取生成URL</h3>
    <ul>
      <li v-for="val in urlId" :key="val.id">{{ val }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'apitest',
  data () {
    return {
      userInfo: {},
      docList: {},
      urlId: []
    }
  },
  created () {
    // 获取问卷列表
    this.getSrvey()
    // 登录
    this.getLogin()
  },
  methods: {
    getLogin () {
      this.$api.post('login', {username: 'test', password: 'test'}, r => {
        this.user = r['data']
        if (!localStorage.getItem('JWT_TOKEN')) {
          localStorage.setItem('JWT_TOKEN', r.headers.authorization)
        }
        // 获取 token
        this.getToken()
        this.createUrl()
        this.getData()
      }, err => {
        let status = err.status
        if (status === 400) {
          console.log(err.data.message)
          sessionStorage.setItem('LOGIN_STATUS', '0')
        } else if (status === 404) {
          sessionStorage.setItem('LOGIN_STATUS', '-1')
          console.log('请求错误，找不到页面')
        }
      })
    },
    getToken () {
      this.$api.post('refresh-token', null, r => {
        console.log(r)
      })
    },
    createUrl () {
      this.$api.get('url/generate', {survey_id: 1, num: 1}, r => {
        console.log(r.data[0])
        sessionStorage.setItem('STRURL', r.data[0])
      })
    },
    getSrvey () {
      this.$api.get('survey', null, r => {
        this.docList = r.data.data[0]
      })
    },
    getData () {
      this.$api.get(sessionStorage.getItem('STRURL'), null, r => {
        console.log(r)
      })
    }
  }
}

</script>

<style scoped lang="less">
  .index {
    padding-left: 20px;
  }
</style>
