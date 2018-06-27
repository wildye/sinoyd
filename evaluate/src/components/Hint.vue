<template>
  <div>
    <span class="title" @click="showHint = true">说明</span>
    <el-dialog
      title="问卷说明"
      :width="response"
      :visible.sync="showHint"
      center>
      <p>本问卷共有 {{itemCount}} 个部分，每部分有十项陈述。每部分的总分是 10 分。请将 10 分分配给你认为最准确地描述你的行为或感觉的项目上。</p>
      <p>你可以自由分配这 10 分，你认为哪一项越能反映你的行为或感受，就给这一项一个较高的分数；这10分既可以分别打给几项，也可以只打到一项上。</p>
      <p><span class="hint">注意：</span>每一部分的总分必须是10分。</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Explain',
  props: ['itemCount'],
  data () {
    return {
      showHint: true
    }
  },
  created () {
    setTimeout(function () {
      this.showHint = false
    }, 3000)
  },
  computed: {
    response: () => {
      let deviceWidth = document.documentElement.clientWidth
      if (deviceWidth >= 992) return '50%'
      else if (deviceWidth >= 768) return '80%'
      else if (deviceWidth >= 480) return '90%'
      return '92%'
    }
  }
}
</script>

<style scoped lang="less">
  .title {
    cursor: pointer;
  }
  div {
    display: inline-block;
    padding: 0 .15rem;
  }
  p {
    text-indent: 25px;
    line-height: normal;
  }
  .hint {
    color: red;
  }
</style>
