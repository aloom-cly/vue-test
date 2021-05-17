<template>
  <div class="error-content">
    <div>{{ errorMsg }}</div>
  </div>
</template>
<script>
export default {
  name: 'PageError',
  computed: {
    errorMsg() {
      return this.$route.query.errorMsg
    }
  }
}
</script>
