<template>
  <Layout>

    <!-- header -->
    <div slot="title">{{srveyInfo.name}}</div>
    <div slot="left">
      <router-link to="/" class="el-icon-back"></router-link>
    </div>
    <div slot="right"><Hint :itemCount="2"/></div>

    <!-- content -->
    <div slot="content" class="container">
      <el-row :gutter="10">
        <!-- item -->
        <el-col :span="24" :sm="16">
          <el-collapse
            v-for="val in srveyInfo.questions" :key="val.id"
            v-model="activeName"
            accordion>
            <el-collapse-item
              :title="'[ ' + val.options[0].id + ' ~ ' + val.options[val.options.length - 1].id + ' ] ' + val.question"
              :name="val.id">
              <div class="block" v-for="option in val.options" :key="option.id">
                <span class="demonstration">{{option.id + '. ' + option.text}}</span>
                <el-slider
                  style="margin-left: 30px"
                  :step="10"
                  show-stops>
                </el-slider>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
        <!-- from -->
        <el-col :span="24" :sm="8">
          <FormStaff/>
        </el-col>
      </el-row>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
import Hint from '../components/Hint'
import FormStaff from '../components/FormStaff'
export default {
  name: 'index',
  components: {
    Layout,
    Hint,
    FormStaff
  },
  data () {
    return {
      activeName: '1',
      srveyInfo: {}
    }
  },
  created () {
    console.log(this.$store.state.urlStr[1])
    this.$store.commit('getUrlStr')
    this.getSrvey()
  },
  methods: {
    toLogin () {
      this.items.forEach(element => {
        this.aa += element.value
      })
      if (this.aa !== 10) {
        this.$alert('该部分所分配的分数不符合要求，请重新分配', {
          center: true
        })
        this.aa = 0
        this.readyNum -= 1
      } else {
        this.$alert('该部分填写完成', {
          center: true
        })
        this.aa = 0
        this.readyNum += 1
      }
      if (this.readyNum <= 0) {
        this.readyNum = 0
      }
    },
    // todo: 获取问卷(需先生成URL)
    getSrvey () {
      // 发送请求问卷信息(传入生成的URL)
      this.$api.get('survey/url1-0Nfteee94c', null, result => {
        console.log(result.data)
        this.srveyInfo = result.data
      })
    }
  }
}
</script>

<style lang="less">
  .container {
    padding: 15px;
    width: 100%;
    @media (min-width: 480px) {
      margin: 0 auto;
      padding: 15px;
      min-width: 480px;
    }
    box-sizing: border-box;
  }
  .el-collapse {
    margin-bottom: 10px;
    padding: 0 15px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 3px rgba(0,0,0,.05);
  }
  .el-icon-back {
    padding: 0 .15rem;
  }
</style>
