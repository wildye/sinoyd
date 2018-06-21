<template>
  <div class="Login">
      <div class="login-top">
        <router-link class="link1" to="/">返回</router-link>
        <img class="imgOne" src="./../../static/image/logo.svg"/>
        <span class="spn1">团队角色自我知觉问卷</span>
      </div>
      <div class="login-main">
        <div class="check">
          <div class="check-user" :class="{checked:show}"  @click="user">员工登录</div>
          <div class="check-admin" :class="{checked:check}" @click="admin">管理员登录</div>
        </div>
        <div class="loginTo" v-show="userCheck">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm from1">
            <el-form-item class="lab1" label="用户名:" prop="pass">
              <el-input class="ipt1" id="ipt1" type="text" v-model="ruleForm2.pass" auto-complete="off" ref="user"></el-input>
            </el-form-item>
            <el-form-item class="lab1" label="密码:" prop="checkPass">
              <el-input class="ipt2" type="password" v-model="ruleForm2.checkPass" auto-complete="off" ref="word"></el-input>
            </el-form-item>
            <el-form-item class="lab1" label="验证码:" prop="age">
              <el-input class="ipt3" v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item class="div1">
              <el-button class="btn1" type="primary" @click="submitForm()">登录</el-button>
            </el-form-item>
        </el-form>
        </div>
        <div class="adminTo" v-show="admCheck">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm from2">
            <el-form-item  class="lab1" label="用户名:" prop="pass">
              <el-input class="ipt1" type="text"  value="" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item class="lab1" label="密码:" prop="checkPass">
              <el-input class="ipt2" type="password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item class="div1">
             <el-button class="btn2" type="primary">登录</el-button>
            </el-form-item>
        </el-form>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  props: ['lists'],
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
      }
    }
    return {
      show: true,
      check: false,
      userCheck: true,
      admCheck: false,
      goIn: '',
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      },
      tolists: [
        {
          id: 1,
          username: 'zhenghao',
          password: 'zhenghao'
        },
        {
          id: 2,
          username: 'liziheng',
          password: 'liziheng'
        },
        {
          id: 3,
          username: 'yeye',
          password: 'yeye'
        },
        {
          id: 4,
          username: 'test',
          password: 'test'
        }
      ]
    }
  },
  methods: {
    submitForm () {
      const username = this.$refs.user.$options.propsData.value
      const password = this.$refs.word.$options.propsData.value
      this.tolists.forEach((item, index) => {
        if (username === item.username && password === item.username) {
          this.goIn = true
        }
      })
      if (this.goIn === true) {
        console.log('登录成功')
        this.$router.push({path: '/answer'})
      }
      this.$ajax.post('/api/', {headers: {'Content-Type': 'application/json'}})
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    admin () {
      if (this.check === true) {
        this.check = true
      } else {
        this.check = true
      }
      this.show = false
      if (this.admCheck === true) {
        this.admCheck = true
      } else {
        this.admCheck = true
      }
      this.userCheck = false
    },
    user () {
      if (this.show === true) {
        this.show = true
      } else {
        this.show = true
      }
      this.check = false
      if (this.userCheck === true) {
        this.userCheck = true
      } else {
        this.userCheck = true
      }
      this.admCheck = false
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="less">
@login-bc: #81BFCB;
.Login{
  height: 100%;
  width: 100%;
  font-family: cursive;
  background-image: url(./../../static/image/001.jpg);
  background-repeat: no-repeat;
  background-size:100% 100%;
  background-attachment: fixed;
  opacity: .7;
}
.login-top{
  width: 100%;
  height: 70px;
  background-color:@login-bc;
  .spn1{
    font-weight: 600;
    float: right;
    margin-right: 150px;
    color: white;
    line-height: 70px;
    font-size: 25px;
  }
}
.imgOne{
  width: 80px;
  height: 40px;
  margin-top: 15px;
  margin-left: 150px;
}
.login-main{
  width: 500px;
  height: 400px;
  background-color: rgba(166, 210, 218, .3);
  position: relative;
  left: 0;
  right: 0;
  top: 100px;
  margin: auto;
  .check{
    width: 100%;
    height: 18%;
    border-bottom: 1px solid white;
    box-sizing: border-box;
    .check-user{
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      border-right: 1px solid white;
      float: left;
      color: white;
      text-align: center;
      line-height: 72px;
      font-size: 25px;
      cursor: pointer;
      user-select: none;
    }
    .checked{
      background-color: #52B2B9;
    }
    .check-admin{
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      float: left;
      color: white;
      text-align: center;
      line-height: 72px;
      font-size: 25px;
      cursor: pointer;
      user-select: none;
    }
  }
   .adminTo{
    height: 82%;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
   }
  .loginTo{
    height: 82%;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    .loginTo-username{
      width: 100%;
      height: 12%;
      border: 1px solid white;
      margin-top: 55px;
    }
    .loginTo-password{
      width: 100%;
      height: 12%;
      border: 1px solid white;
      margin-top: 25px;
    }
    .loginTo-check{
      width: 100%;
      height: 12%;
      border: 1px solid white;
      margin-top: 25px;
    }
    .loginTo-into{
      width: 40%;
      height: 15%;
      border: 1px solid white;
      margin: 0 auto;
      margin-top: 30px;
    }
  }
}
.ipt1{
  width: 300px;
}
.ipt2{
  width: 300px;
}
.ipt3{
  width: 300px;
}
.lab1{
  margin-left:30px;
  color:#86C9CE;
}
.lab2{
  margin-left:30px;
}
.from1{
  padding-top: 30px;
  box-sizing: border-box;
}
.btn1{
  width: 170px;
  height: 45px;
  margin-left: 70px;
  background-color: #52B2B9;
  border: none;
}
.div1{
  width: 100%;
  height: 45px;
}
.btn2{
  width: 170px;
  height: 45px;
  margin-left: 70px;
  background-color: #52B2B9;
  border: none;
  margin-top: 40px;
}
.from2{
  padding-top: 50px;
  box-sizing: border-box;
}
.link1{
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin-left: 100px;
  width: 40px;
  margin-bottom: 30px;
}
</style>
