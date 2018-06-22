<template>
  <div class="index">
    <h1>API Test</h1>
    <button @click="login('test','test')">登录</button>
    <button @click="logout">注销</button>
    <button @click="refreshToken">刷新 token</button>
    <button @click="getSrveyList">获取问卷列表</button>
    <button @click="createUrl">获取生成URL</button>
    <button @click="getSrveyInfo">获取问卷信息</button>
    <br />
    <h3>1. 用户信息</h3>
    <p>Token: {{ $store.state.token }}</p>
    <ul>
      <li v-for="(val, key) in userInfo" :key="key.id">{{ key + ' : ' + val }}</li>
    </ul>
    <h3>2. 问卷列表</h3>
    <ul>
      <li v-for="(val, key) in srveyList" :key="key.id">{{ key + ' : ' + val }}</li>
    </ul>
    <h3>3. URL生成</h3>
    <ul>
      <li v-for="val in strUrl" :key="val.id">{{ val }}</li>
    </ul>
    <h3>4. 问卷信息</h3>
    <ul>
      <li v-for="(val, key) in srveyInfo" :key="key.id">{{ key + ' : ' + val }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'apitest',
  data () {
    return {
      userInfo: {},
      srveyList: {},
      srveyInfo: [],
      strUrl: []
    }
  },
  methods: {
    login (username, password) {
      this.$api.post('login', {username: username, password: password}, result => {
        this.userInfo = result['data']
        // 记录token
        this.$store.commit('setToken', result.headers.authorization)
        // 刷新状态
        this.$store.commit('setLogin', 1)
      }, error => {
        switch (error.status) {
          case 400:
            this.$store.commit('setLogin', -1) // 用户名或密码错误
            break
          case 404:
            this.$store.commit('setLogin', -2) // 请求错误，找不到页面
            break
        }
      })
    },
    logout () {
      this.userInfo = {}
      this.$store.commit('delToken')
      this.$store.commit('delLogin')
    },
    refreshToken () {
      this.$api.post('refresh-token', null, result => {
        this.$store.commit('setToken', result.headers.authorization)
        console.log('refresh-token')
      })
    },
    getSrveyList () {
      this.$api.get('survey', null, result => {
        console.log(result)
        this.srveyList = result.data.data[0]
      })
    },
    createUrl () {
      this.$api.get('url/generate', {survey_id: 1, num: 10}, result => {
        console.log(result)
        this.strUrl = result.data
      }, error => {
        if (error.status === 422) {
          console.log('survey_id 参数错误')
        }
      })
    },
    getSrveyInfo () {
      this.$api.get(this.strUrl[0], null, result => {
        console.log(result.data.questions)
        this.srveyInfo = result.data
      })
    }
  }
}

</script>

<style scoped lang="less">
  div.index {
    padding-left: 20px;
  }
  p {
    word-break: break-all;
  }
</style>
