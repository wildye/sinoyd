<template>
  <div class="nav-top">
    <div class="fl">
      <router-link to="/answer">
        <i class="fa user">A</i>
      </router-link>
      <router-link to="/port">B</router-link>
    </div>
    <div class="fr">
      <ExplainHint/>
      <UserInfo/>
    </div>
  </div>
</template>

<script>
import ExplainHint from './ExplainHint'
import UserInfo from './UserInfo'
export default {
  name: 'NavTop',
  components: {
    ExplainHint,
    UserInfo
  }
}
</script>

<style scoped lang="less">
  .fa {
    color: #000;
  }
  .nav-top {
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
