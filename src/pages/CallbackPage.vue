<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <h2>callback</h2>
  <button @click="goToAbout">Go to Home</button>
</template>