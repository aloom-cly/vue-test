<template>
  <div class="header">
    <div class="logo">VUE-DEMO</div>
    <div class="person-info">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ name }}<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'name', 'token'
    ])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
<style scoped lang="scss">
  .header{
    width: 100%;
    height: 50px;
    background: rgb(53, 118, 238);
    .logo{
      float: left;
      line-height: 50px;
      padding: 0 16px;
      color: #fff;
    }
    .person-info{
      float: right;
      line-height: 50px;
      padding: 0 16px;
      cursor: pointer;
      .el-dropdown{
        color: #fff;
      }
    }
  }
</style>
