<template>
  <el-form
    label-position="left"
    label-width="60px"
    ref="staff"
    :model="staff"
    :rules="rules">
    <el-form-item label="工号:" prop="staff_no">
      <el-input
        type="text"
        prepend="prepend"
        v-model="staff.staff_no"
        clearable/>
    </el-form-item>
    <el-form-item label="姓名:" prop="name">
      <el-input
        type="text"
        prepend="prepend"
        v-model="staff.name"
        clearable/>
    </el-form-item>
    <el-form-item label="性别:">
      <el-radio v-model="staff.sex" label="男">男</el-radio>
      <el-radio v-model="staff.sex" label="女">女</el-radio>
    </el-form-item>
    <el-button type="primary" @click="submitForm('staff')">提交问卷</el-button>
    <el-button @click="resetForm('staff')">重置</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'FormStaff',
  data () {
    return {
      radio: '1',
      staff: {
        name: '',
        sex: '男',
        staff_no: ''
      },
      rules: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        staff_no: [
          { required: true, message: '工号不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { type: 'number', message: '必须为数字值' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .el-form {
    padding: 15px;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 3px 3px rgba(0,0,0,.05);
  }
  .el-button {
    margin: 0;
    width: 49%;
  }
</style>
