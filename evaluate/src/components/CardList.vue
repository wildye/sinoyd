<template>
  <div>
    <el-card
      v-for="val in data" :key="val.id"
      class="box-card">
      <div slot="header" class="clearfix">
        <span>{{val.id + '. ' + val.name}}</span>
      </div>
      <div class="text item">分类: {{val.desc}}</div>
      <div class="text item">测评方向: {{val.show}}</div>
      <div class="text item">发布于: {{val.created_at}}</div>
      <div class="text item">最近更新: {{val.updated_at}}</div>
      <div class="text item footer">
        <el-button v-if="!$store.state.isLogin" size="small">开始答卷</el-button>
        <el-button v-if="$store.state.isLogin" size="small">生成问卷</el-button>
        <el-button v-if="$store.state.isLogin" size="small">问卷汇总</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'surveyCard',
  props: ['data']
}
</script>

<style scoped>

</style>
