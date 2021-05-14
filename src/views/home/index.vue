<template>
  <div class="home-text">name: {{ name }}{{ token }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomeIndex',
  /* data() {
    return {
      name: 'name',
      token: 'token'
    }
  } */
  computed: {
    ...mapGetters([
      'name', 'token'
    ])
  }
}
</script>

