<template>
  <Layout>
    <!-- header -->
    <div slot="title">聚合分数汇总</div>
    <div slot="left">
      <router-link to="/" class="el-icon-back"></router-link>
    </div>
    <div slot="right"></div>

    <!-- content -->
    <div slot="content" class="container">
      <el-row :gutter="10">

        <!-- Menu -->
        <el-col :span="24" :sm="4">
          <AdminSideBar/>
        </el-col>

        <!-- 表格内容构建汇总内容 -->
        <el-col :span="24" :sm="20">
          <el-table
            :data="tableData6"
            border
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <!--id-->
            <el-table-column
              prop="id"
              label="ID"
              width="50">
            </el-table-column>
            <!--姓名-->
            <el-table-column
              prop="name"
              label="姓名"
              width="80">
            </el-table-column>
            <!--性别-->
            <el-table-column
              prop="sex"
              label="性别"
              width="50">
            </el-table-column>
            <!--  智多星  -->
            <el-table-column
              label="PL"
              width="80">
              <el-table-column
                prop="PL"
                label="智多星"
                width="80">
              </el-table-column>
            </el-table-column>
            <!--  外联者  -->
            <el-table-column
              label="RI"
              width="80">
              <el-table-column
                prop="RI"
                label="外联者"
                width="80">
              </el-table-column>
            </el-table-column>
            <!--  协调者  -->
            <el-table-column
              label="CO"
              width="80">
              <el-table-column
                prop="CO"
                label="协调者"
                width="80">
              </el-table-column>
            </el-table-column>
            <!--  鞭策者  -->
            <el-table-column
              label="SH"
              width="80">
              <el-table-column
                prop="SH"
                label="鞭策者"
                width="80">
              </el-table-column>
            </el-table-column>
            <!--  监督者  -->
            <el-table-column
              label="ME"
              width="80">
              <el-table-column
                prop="ME"
                label="监督者"
                width="80">
              </el-table-column>
            </el-table-column>
            <!--  凝聚者-->
            <el-table-column
              label="TW"
              width="80">
              <el-table-column
                prop="TW"
                label="凝聚者"
                width="80">
              </el-table-column>
            </el-table-column>
            <!--  实干者-->
            <el-table-column
              label="IM"
              width="80">
              <el-table-column
                prop="IM"
                label="实干者"
                width="80">
              </el-table-column>
            </el-table-column>
            <!--  善始善终者  -->
            <el-table-column
              label="CF"
              width="80">
              <el-table-column
                prop="CF"
                label="善始善终"
                width="80">
              </el-table-column>
            </el-table-column>
            <!--  专家  -->
            <el-table-column
              label="SP"
              width="80">
              <el-table-column
                prop="SP"
                label="专家"
                width="80">
              </el-table-column>
            </el-table-column>
            <!--  最终结论  -->
            <el-table-column
              prop="end"
              label="最终结论">
            </el-table-column>
            <!--  个人详细信息  -->
            <el-table-column
              prop="change"
              label="个人详细信息">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
import AdminSideBar from '../components/AdminSideBar'
export default {
  name: 'Summary',
  components: {
    Layout,
    AdminSideBar
  },
  created () {
    this.getSummary()
  },
  data () {
    return {
      Aggregate: {},
      tableData6: [
        {
          id: '1',
          name: '欧阳靖羽',
          sex: '女',
          PL: '89',
          RI: '48',
          CO: '98',
          SH: '90',
          ME: '65',
          TW: '80',
          IM: '90',
          CF: '98',
          SP: '87',
          end: '协调者，善始善终者',
          change: '点击查看'
        },
        {
          id: '2',
          name: '李子恒',
          sex: '男',
          PL: '95',
          RI: '98',
          CO: '98',
          SH: '80',
          ME: '65',
          TW: '86',
          IM: '90',
          CF: '98',
          SP: '90',
          end: '协调者，善始善终者，智多星',
          change: '点击查看'
        },
        {
          id: '3',
          name: '郑豪',
          sex: '男',
          PL: '95',
          RI: '98',
          CO: '98',
          SH: '80',
          ME: '65',
          TW: '86',
          IM: '90',
          CF: '98',
          SP: '90',
          end: '协调者，善始善终者，智多星',
          change: '点击查看'
        },
        {
          id: '4',
          name: '叶野',
          sex: '男',
          PL: '95',
          RI: '98',
          CO: '98',
          SH: '80',
          ME: '65',
          TW: '86',
          IM: '90',
          CF: '98',
          SP: '90',
          end: '协调者，善始善终者，智多星',
          change: '点击查看'
        }
      ]
    }
  },
  methods: {
    // todo: 获取聚合分数(需登录)
    getSummary () {
      this.$api.get('survey/summary', null, result => {
        console.log(result.data)
      })
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style scoped lang="less">

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
  /*.el-header, .el-footer {*/
    /*background-color: #fff;*/
    /*color: #000;*/
    /*text-align: center;*/
    /*line-height: 50px;*/
    /*font-size: 20px;*/
    /*font-weight: bold;*/
  /*}*/
  /*.nin{*/
    /*background-color: #F5F6F7;*/
    /*width: 100%;*/
  /*}*/
  /*.box{*/
    /*width: 1200px;*/
    /*margin: 0 auto;*/
    /*margin-top: 30px;*/
    /*margin-bottom: 30px;*/
    /*text-align: center;*/
  /*}*/
  /*.nav{*/
    /*text-align: center;*/
  /*}*/
  /*.el-container{*/
    /*height: 100%;*/
  /*}*/

  /*.el-table .warning-row {*/
    /*background: oldlace;*/
  /*}*/

  /*.el-table .success-row {*/
    /*background: #f0f9eb;*/
  /*}*/
</style>
