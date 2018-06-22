<template>
  <div>
    <el-button type="text" @click="showHint = true">问卷说明</el-button>
    <el-dialog
      title="问卷说明"
      :width="response"
      :visible.sync="showHint"
      center>
      <p v-for="val in message" :key="val">{{ val }}</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Explain',
  data () {
    return {
      deviceWidth: document.documentElement.clientWidth,
      showHint: false,
      message: [
        '本问卷共有7个部分，每部分有十项陈述。每部分的总分是10分。请将10分分配给你认为最准确地描述你的行为或感觉的项目上。',
        '你可以自由分配这10分，你认为哪一项越能反映你的行为或感受，就给这一项一个较高的分数；这10分既可以分别打给几项，也可以只打到一项上。',
        '注意：每一部分的总分必须是10分。'
      ]
    }
  },
  computed: {
    response: () => {
      let deviceWidth = document.documentElement.clientWidth
      if (deviceWidth >= 992) return '30%'
      else if (deviceWidth >= 768) return '50%'
      else if (deviceWidth >= 480) return '80%'
      return '100%'
    }
  }
}
</script>

<style scoped lang="less">
  p {
    text-indent: 25px;
  }
</style>
