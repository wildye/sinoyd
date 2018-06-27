<template>
  <Layout>
    <span slot="title">问卷列表</span>
    <span slot="right">Menu</span>
    <div slot="content" class="container">
      <CardList
        v-if="$store.state.isWebApp"
        :data="surveyList"/>
      <TableList
        v-if="!$store.state.isWebApp"
        :data="surveyList"
        @toTable = "submitUrlNum"/>
      <ul>
        <li v-for="val in 50" :key="val.id">{{val}}</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import TableList from '../components/TableList'
export default {
  name: 'index',
  components: {
    Layout,
    CardList,
    TableList
  },
  data () {
    return {
      urlStr: [],
      surveyList: []
    }
  },
  created () {
    this.getSurveyList()
  },
  methods: {
    // todo: 获取列表
    getSurveyList () {
      this.$api.get('survey', null, result => {
        this.surveyList = result.data.data
      })
    },
    // todo: 获取列表
    submitUrlNum () {
      this.$prompt('请输入生成问卷数量', '', {
        inputPattern: /^[1-9]\d*$/,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        if (value <= 999) {
          this.createUrl(1, value)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    // todo: 生成URL字符串
    createUrl (id, num) {
      this.$api.get('url/generate', {survey_id: id, num: num}, result => {
        this.urlStr = result.data
        this.$store.commit('addUrlStr', result.data)
      }, error => {
        if (error.status === 422) {
          console.log('survey_id 参数错误')
        }
      })
    }
  }
}
</script>

<style lang="less">
  .container {
    width: 100%;
    padding: 10px 10px 0;
    box-shadow: 0 3px 3px rgba(0,0,0,.05);
    box-sizing: border-box;
    @media (min-width: 480px) {
      margin: 0 auto;
      min-width: 480px;
    }
  }
</style>
