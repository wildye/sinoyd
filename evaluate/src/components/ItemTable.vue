<template>
  <el-table
      :data="data"
      max-height="100%"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="问卷信息">
      </el-table-column>
      <el-table-column
        prop="show"
        label="测评方向">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="分类">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="发布时间">
      </el-table-column>
      <el-table-column
        prop="updated_at"
        label="更新时间">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作">
        <template slot-scope="scope">
          <router-link v-if="!$store.state.isLogin" to="/survey/as">开始答卷</router-link>
          <el-button v-if="$store.state.isLogin" type="text" @click="submitUrlNum">生成问卷</el-button>
          <router-link v-if="$store.state.isLogin" to="/summary">查看汇总</router-link>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'surveyTable',
  props: ['data']
}
</script>

<style scoped>

</style>
