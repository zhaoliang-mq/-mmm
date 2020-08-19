
<template>
  <div style="margin-left: 35%;width: 400px">
    <el-card class="box-card">
      <div slot="header" style="width: 360px" class="clearfix">
        <span>注册页面</span>
      </div>
    <el-form :model="register" :rules="rules" ref="register" style="width: 360px" label-width="80px" class="demo-register">

      <el-form-item label="用户名" prop="name">
        <el-input v-model="register.name" ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="register.password" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="register.checkPass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="手机号" prop="phone">
        <el-input v-model="register.phone" style="width: 280px"></el-input>
        <el-button type="info" @click="sendCode()" size="small" round>发送验证码</el-button>
      </el-form-item>

      <el-form-item label="验证码" prop="phone">
          <el-input v-model="register.code" style="width: 280px"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('register')">注册</el-button>
        <el-button @click="resetForm('register')">重置</el-button>
      </el-form-item>
    </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.register.name !== '') {
            var self = this;
            return this.$axios.post("userApi/member/queryUserByName",this.$qs.stringify({"name":this.register.name})).then(function(res){
              if(res.data.code!=200){
                callback(new Error('账号已存在'));
                console.log(res.data);
              }
            })
          }
          callback();
        }
      };
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          if (this.register.phone !== '') {
            var self = this;
            return this.$axios.post("userApi/member/queryUserByPhone",this.$qs.stringify({"phone":this.register.phone})).then(function(res){
              if(res.data.code!=200){
                callback(new Error('手机号已存在'));
                console.log(res.data);
              }
            })
          }
          callback();
        }
      };

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.register.checkPass !== '') {
            this.$refs.register.validateField('checkPass');
          }
          callback();
        }
      };

      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.register.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        register: {
          name: '',
          password: '',
          checkPass: '',
          phone:'',
        },
        rules: {
          name: [{ required: true, validator: validateName, trigger: 'blur' }, { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }],
          password: [{ required: true, validator: validatePass, trigger: 'blur' }],
          checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }],
          phone: [{ required: true, validator: validatePhone, trigger: 'blur' }]
        }
      };
    },

    methods: {
      sendCode:function(){
        var self = this;
        this.$axios.post("smsApi/sms/sendmsg",this.$qs.stringify({"phone":this.register.phone})).then(function(res){
          if(res.data.code==200){
            alert("发送成功");
          }
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var self = this;
            return this.$axios.post("userApi/member/register",this.$qs.stringify(this.register)).then(function(res){
              if(res.data.code==200){
                alert("注册成功");
                self.$router.push("/");
            }else {
                alert("验证码错误！");
              }
            })
          }
        });
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>

<style scoped>

</style>
