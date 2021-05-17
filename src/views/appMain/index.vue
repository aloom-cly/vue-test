<template>
  <div class="content">
    <div class="header">
      <Header />
    </div>
    <div class="main-container">
      <!-- <div class="main-section">首页</div> -->
      <router-view :key="key" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'AppMain',
  components: {
    Header
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style scoped lang="scss">
  .content{
    width: 100%;
    height: 100%;
  }
  .fix-header{
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
  }
</style>
