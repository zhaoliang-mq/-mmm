<template>
  <div style="width: 500px">
    <el-form :model="user" :rules="rules" ref="user" style="width: 360px" label-width="80px" class="demo-user">

      <el-form-item label="用户名" prop="name">
        <el-input v-model="user.name"  placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="手机号" prop="name">
        <el-input v-model="user.sjh"  placeholder="请输入手机号"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
      </el-form-item>


      <el-form-item prop="password">
          <el-checkbox v-model="user.remeber">记住密码</el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('user')">登录</el-button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        <el-link :underline="false" icon="el-icon-s-promotion" type="danger" href="/register">一键注册！<i class="el-icon-s-promotion"></i></el-link>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>

  export default {
    name: 'Login',
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.user.name !== '') {
            this.$refs.user.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.user.password !== '') {
            this.$refs.user.validateField('checkPass');
          }
          callback();
        }
      };

      return {
        activeName: 'first',
        user: {
          name: "zf",
          password: '000123',
          remeber:""
        },
        rules: {
          name: [{ required: true, validator: validateName,trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }],
          password: [{ required: true, validator: validatePass, trigger: 'blur' }]
        }
      };
    },

    methods: {
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var self = this;
            return this.$axios.post("userApi/member/login",this.$qs.stringify(this.user)).then(function(res){
              if(res.data.code==200){
                self.$cookie.set('token',res.data.data);

                alert("登陆成功");
                self.$router.push("index");
              }else {
                alert(res.data.data);
              }
            })
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
</script>

<style scoped>
  .login {
    width: 400px;
    margin: 0 auto;
  }

  .el-tabsitem {
    text-align: center;
    width: 60px;
  }
</style>
