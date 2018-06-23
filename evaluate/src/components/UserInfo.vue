<template>
  <div>
    <router-link to="/login">login</router-link>
    <span>Welcome , {{ username }}</span>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      username: '汉娜'
    }
  }
}
</script>

<style scoped>
  div {
    display: inline-block;
  }
</style>
