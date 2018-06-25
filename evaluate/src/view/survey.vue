<template>
  <Layout>
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
      <el-collapse-item title="2、执行力" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
    </el-collapse>
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
      activeName: '1',
      options: [
        {text: 'A、我能很快地发现并把握新的机会。', value: 10},
        {text: 'B、无论在一般还或特别的问题上，我的建议都易于被他人接受', value: 0},
        {text: 'C、我能与不同类型的人融洽地合作做事。', value: 10},
        {text: 'D、我总有许多点子。', value: 30},
        {text: 'E、我善于发掘对实现团体目标有价值的人。', value: 0},
        {text: 'F、我可使别人放心所交托给我完成的任务。', value: 20},
        {text: 'G、技术知识和经验通常是我的主要财富。', value: 0},
        {text: 'H、为创造有益的结果，我愿意面对寂寞和冷漠的对待。', value: 0},
        {text: 'I、通常我能判断某些计划或主意是否适用在某种特定的情况。', value: 10},
        {text: 'J、我能理解充分而且不带偏见地提出可供选择的方案。', value: 0}
      ]
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
