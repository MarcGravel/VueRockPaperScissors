<template>
  <div id="home">
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from '../components/LoginPage.vue' 

export default {
  name: 'Login',
  components: {
    LoginPage
  }
}
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
  }
</style>
