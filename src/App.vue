<template>
  <div id="app">
    
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    // Storeのアクションメソッドを呼び出す
    this.$store.dispatch('loadPosts')
  }
}
</script>