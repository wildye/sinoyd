<template>
  <div class="admin">
    <div class="admin-top">
      <img class="imgOne" src="../../static/image/logo.svg"/>
      <span class="spn1">后台管理信息页面</span>
      <span class="spn3">管理员：{{name}}</span>
      <Explain/>
    </div>
    <div class="admin-main">
      <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
          label="日期"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <el-popover>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: 'test',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped lang="less">
  @login-bc: #81BFCB;
  @answer-bc: #D7D7D7;
  @answer-tc: #F2F2F2;
.admin{
  height: 100%;
  width: 100%;
  .admin-top{
    width: 80%;
    height: 50px;
    background-color:white;
    margin: 0 auto;
    position: relative;
    box-shadow: 0px 2px 2px #888888;
    margin-bottom: 2px;
    .spn1{
      font-weight: 600;
      float: left;
      color: @login-bc;
      line-height: 50px;
      font-size: 25px;
      width: 270px;
      height: 100%;
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
    }
    .imgOne{
      width: 80px;
      height: 40px;
      margin-top: 5px;
      margin-left: 150px;
      float: left;
    }
    .spn3{
      position: absolute;
      right: 20px;
      margin: auto;
      line-height: 50px;
      color: #81BFCB;
    }
  }
  .admin-main{
    width: 80%;
    height: 500px;;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
