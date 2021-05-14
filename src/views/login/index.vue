<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form">
      <div class="title-container">
        <h3 class="title">账号登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input ref="username" v-model="loginForm.username" name="username" type="text" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input ref="password" v-model="loginForm.password" name="password" :type="passwordType" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-form-item>
        <!-- <el-button type="primary" @click="submitForm('loginForm')">登录</el-button> -->
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      passwordType: 'password',
      loading: false
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(function() {
        console.log(this.$refs)
        this.$refs.password.focus()
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            // console.log(this.redirect)
            this.$router.push({ path: this.redirect || '/index' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

  }
}
</script>

<style lang="scss">
.login-container{
  .el-input {
    .el-input__inner{
      padding: 5px 15px 5px 40px;
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1) ;
      border-radius: 5px;
      height: 52px;
      width: 448px;
      color: #fff;
    }
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #2d3a4b;

  .login-form{
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    padding: 160px 35px 0;
  }
  .el-button{
    width: 100%;
  }
  .svg-container{
    position: absolute;
    z-index: 6;
    left: 15px;
    top: 6px;
    color: #889aa4;
  }
  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #fff;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
