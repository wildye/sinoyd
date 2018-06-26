<template>
  <Layout>
    <span slot="title">问卷答题</span>
    <!--<span slot="left">0</span>-->
    <span slot="right"><Hint/></span>
    <div slot="content" class="container">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="1、团队角色自我知觉问卷 1" name="1">
          <div class="block" v-for="val in options" :key="val.id">
            <span class="demonstration">{{val.text}}</span>
            <el-slider
              v-model="val.value"
              style="margin-left: 30px"
              :step="10"
              show-stops>
            </el-slider>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
import Hint from '../components/Hint'
export default {
  name: 'index',
  components: {
    Layout,
    Hint
  },
  data () {
    return {
      activeName: '1',
      options: [
        {text: 'A、我能很快地发现并把握新的机会。', value: 10},
        {text: 'B、无论在一般还或特别的问题上，我的建议都易于被他人接受', value: 0},
        {text: 'C、我能与不同类型的人融洽地合作做事。', value: 10},
        {text: 'D、我总有许多点子。', value: 30},
        {text: 'E、我善于发掘对实现团体目标有价值的人。', value: 0},
        {text: 'F、我可使别人放心所交托给我完成的任务。', value: 20},
        {text: 'G、技术知识和经验通常是我的主要财富。', value: 0},
        {text: 'H、为创造有益的结果，我愿意面对寂寞和冷漠的对待。', value: 0}
      ]
    }
  },
  created () {
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
    }
  }
}
</script>

<style lang="less">
  .container {
    background: #fff;
    width: 100%;
    padding: 15px;
    @media (min-width: 960px) {
      margin: 0 auto;
      width: 960px;
      padding: 15px;
    }
  }
</style>
