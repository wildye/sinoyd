<template>
  <Layout>
    <el-card v-for="val in surveyList" :key="val.id" class="box-card">
      <router-link to="/survey">
        <div><span>id：</span>{{val.id }}</div>
        <div><span>问卷：</span>{{val.name }}</div>
        <div><span>说明：</span>{{val.desc }}</div>
        <div><span>分类：</span>{{val.show }}</div>
        <div><span>发布时间：</span>{{val.created_at }}</div>
        <div><span>最后更新：</span>{{val.updated_at }}</div>
      </router-link>
    </el-card>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
export default {
  name: 'index',
  components: {
    Layout
  },
  data () {
    return {
      surveyList: []
    }
  },
  created () {
    this.getSurveyList()
  },
  methods: {
    // todo: 获取列表
    getSurveyList: function () {
      this.$api.get('survey', null, result => {
        this.surveyList = result.data.data
        console.log(result)
        console.log(result.data)
        console.log(result.data.data)
      })
    }
  }
}
</script>

<style lang="less">

</style>
