


<template>

  <div class="login">
 
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <h1 class="shmilyTitle">
        <i class="el-icon-user-solid"></i>
        ShmilyDS-登录
      </h1>
      <el-form-item label="账号" prop="UserName">
        <el-input type="text" v-model="loginForm.UserName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="PassWord">
        <el-input type="password" v-model="loginForm.PassWord" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录表单的数据
      loginForm: {
        UserName: "",
        PassWord: ""
      },
      //验证规则
      rules: {
        UserName: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2到 10 个字符", trigger: "blur" }
        ],
        PassWord: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 18, message: "长度在 5 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.axios);
          let _this = this;
          //收集用户名密码发送给后台
          this.axios.post('/api/login', {
              UserName: _this.loginForm.UserName,
              PassWord: _this.loginForm.PassWord
            })
            .then(response => {
              console.log("接收后台响应登录请求的数据:", response.data);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body,
#app,
.login {
  height: 100%;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo-loginForm {
  width: 400px;
  border: 1px solid #cccccc;
  padding: 0px 50px 10px 10px;
}
.shmilyTitle {
  font-size: 22px;
  color: #333;
}
</style>
