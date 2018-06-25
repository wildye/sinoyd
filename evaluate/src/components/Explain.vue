<template>
  <div class="Explain">
    <el-button type="text" @click="showHint = true">说明</el-button>
    <el-dialog
      title="问卷说明"
      :width="response"
      :visible.sync="showHint"
      center>
      <p v-for="val in message" :key="val">{{ val }}</p>
      <p><span>注意：</span>每一部分的总分必须是10分。</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Explain',
  data () {
    return {
      showHint: false,
      message: [
        '本问卷共有 7 个部分，每部分有十项陈述。每部分的总分是 10 分。请将 10 分分配给你认为最准确地描述你的行为或感觉的项目上。',
        '你可以自由分配这 10 分，你认为哪一项越能反映你的行为或感受，就给这一项一个较高的分数；这10分既可以分别打给几项，也可以只打到一项上。'
      ]
    }
  },
  computed: {
    response: () => {
      let deviceWidth = document.documentElement.clientWidth
      if (deviceWidth >= 992) return '30%'
      else if (deviceWidth >= 768) return '50%'
      else if (deviceWidth >= 480) return '80%'
      return '94%'
    }
  }
}
</script>

<style scoped lang="less">
  div {
    display: inline-block;
  }
  p {
    text-indent: 25px;
    line-height: normal;
  }
  span {
    color: red;
  }
</style>
