<template>
  <div class="header">
    <div class="fl">
      <slot name="left">
        <i
          v-if="$store.state.isWebApp"
          class="el-icon-menu"
          @click="$store.commit('toggleSideBar')">
        </i>
      </slot>
    </div>
    <h1>
      <slot name="title"></slot>
    </h1>
    <div class="fr">
      <slot name="right">
        <User/>
      </slot>
    </div>
  </div>
</template>

<script>
import User from './User'
export default {
  name: 'NavTop',
  components: {
    User
  }
}
</script>

<style scoped lang="less">
  @main-color: #66B1FF;
  .header {
    margin: 0 auto;
    width: 100%;
    font-size: .20rem;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
  }
  .el-icon-menu {
    padding: .15rem;
    color: @main-color;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    font-size: .20rem;
  }
</style>
