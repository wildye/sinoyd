<template>
  <Layout>
    <span slot="header">问卷列表</span>
    <div slot="content" class="container">
      <ItemCard
        v-if="$store.state.isWebApp"
        :data="surveyList"/>
      <ItemTable
        v-if="!$store.state.isWebApp"
        :data="surveyList"/>
      <ul>
        <li v-for="val in urlStrArr" :key="val.id">{{val}}</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
import ItemCard from '../components/ItemCard'
import ItemTable from '../components/ItemTable'
export default {
  name: 'index',
  components: {
    Layout,
    ItemCard,
    ItemTable
  },
  data () {
    return {
      surveyList: [],
      urlStrArr: [],
      urlNum: 1
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
      console.log(num)
      this.$api.get('url/generate', {survey_id: id, num: num}, result => {
        this.urlStrArr = this.urlStrArr.concat(result.data)
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
    padding: 0 10px;
    box-shadow: 0 3px 3px rgba(0,0,0,.05);
    box-sizing: border-box;
    @media (min-width: 480px) {
      margin: 0 auto;
      width: 1200px;
      padding: 0;
    }
  }
  .box-card {
    .text.item {
      font-size: 14px;
    }
    .footer {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #eee;
      text-align: right;
    }
  }
</style>
