<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h4>Pocket Calculator!</h4>
    <Calculator/>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'app',
  components: {
    Calculator
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
  background: #ccc;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
</style>
