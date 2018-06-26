<template>
  <div class="index">
    <h1>API Test</h1>
    <button @click="login">登录</button>
    <button @click="logout">注销</button>
    <button @click="refreshToken">刷新Token</button>
    <button @click="getSrveyList">获取问卷列表</button>
    <button @click="createUrl">获取生成URL</button>
    <button @click="getSrvey">获取问卷信息</button>
    <button @click="submitSrvey">提交问卷信息</button>
    <button @click="getSummary">获取聚合信息</button>
    <br />
    <h3>1. 用户信息</h3>
    <div>
      <p v-for="(val, key) in $store.state.userInfo" :key="key.id">{{ key + ' : ' + val }}</p>
    </div>
    <h3>2. 问卷列表</h3>
    <div>
      <p v-for="(val, key) in srveyList" :key="key.id">{{ key + ' : ' + val }}</p>
    </div>
    <h3>3. URL生成</h3>
    <div>
      <p v-for="val in strUrl" :key="val.id">{{ val }}</p>
    </div>
    <h3>4. 问卷信息</h3>
    <div v-for="(val, key) in srveyInfo" :key="key.id">
      <p>{{ val.name }}</p>
      <div v-for="val2 in val.questions" :key="val2.id">
        <p>{{ val2.question }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'apitest',
  data () {
    return {
      userInfo: {},
      srveyList: {},
      strUrl: [],
      srveyInfo: []
    }
  },
  methods: {
    // todo: 登录
    login () {
      // 发送登录请求
      this.$api.post('login', {username: 'test', password: 'test'}, result => {
        // 获取返回的用户信息
        this.userInfo = result.data
        // 获取返回的响应头 authorization 数据
        this.userInfo.token = result.headers.authorization
        // 将获取到的数据转换为字符串存储在本地
        localStorage.setItem('info', JSON.stringify(this.userInfo))
        // 设置用户状态信息
        this.$store.commit('setUserInfo', this.userInfo)
        // 设置已登录状态
        this.$store.commit('setIsLogin', true)
      }, error => {
        switch (error.status) {
          case 400:
            console.log('用户名或密码错误')
            break
          case 404:
            console.log('请求错误，找不到页面')
            break
        }
      })
    },
    // todo: 注销(需登录)
    logout () {
      // 删除本地用户信息
      localStorage.setItem('info', '')
      // 清空用户状态信息
      this.$store.commit('setUserInfo', '')
      // 设置未登录状态
      this.$store.commit('setIsLogin', false)
      // 通知服务端已注销
      this.$api.delete('logout', null)
    },
    // todo: 刷新token(需登录)
    refreshToken () {
      // 发送刷新 token 请求, 重新获取 token
      this.$api.post('refresh-token', null, result => {
        // 获取新的 token
        this.userInfo.token = result.headers.authorization
        // 更新用户状态信息
        this.$store.commit('setUserInfo', this.userInfo)
        // 更新本地信息存储
        localStorage.setItem('info', JSON.stringify(this.userInfo))
        // 设置登录状态
        this.$store.commit('setIsLogin', true)
      }, error => {
        // token 过期注销
        if (error.status === 401) {
          this.logout()
        }
      })
    },
    // todo: 获取问卷列表
    getSrveyList () {
      // 发送获取列表请求
      this.$api.get('survey', null, result => {
        console.log(result)
        this.srveyList = result.data.data[0]
      })
    },
    // todo: 生成问卷url(需登录)
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
    // todo: 获取问卷(需先生成URL)
    getSrvey () {
      // 发送请求问卷信息(传入生成的URL)
      this.$api.get(this.strUrl[0], null, result => {
        console.log(result.data)
        this.srveyInfo = result.data
      })
    },
    // todo: 提交问卷
    submitSrvey () {
      let urlstr = this.strUrl[0].substr(7)
      this.$api.post('survey', {
        'staff': {
          'name': 'test',
          'sex': '男',
          'staff_no': 'a111'
        },
        'questions': [
          {
            'id': 1,
            'options': [
              {
                'id': 1,
                'code': 'PL',
                'score': 5
              },
              {
                'id': 2,
                'code': 'RI',
                'score': 5
              }
            ]
          },
          {
            'id': 2,
            'options': [
              {
                'id': 1,
                'code': 'PL',
                'score': 5
              },
              {
                'id': 2,
                'code': 'RI',
                'score': 5
              }
            ]
          }
        ],
        'noncestr': urlstr
      }, result => {
        console.log(result.data)
      })
    },
    // todo: 获取聚合分数(需登录)
    getSummary () {
      this.$api.get('survey/summary', null, result => {
        console.log(result.data)
      })
    }
  }
}

</script>

<style lang="less">
  html,
  body,
  #app {
    overflow: visible!important;
  }
  .index {
    padding-left: 20px;
  }
  p {
    word-break: break-all;
  }
</style>
