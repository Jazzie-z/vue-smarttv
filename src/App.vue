<template>
  <div id="app">
    <Menu/>
    <Home/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1920px;
  height:1080px;
  overflow:hidden;
}
html, body{
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-size: 20px;
  background-size: 100%;
  background:#000;
  font-family: HelveticaNeue;
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
-khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
-webkit-user-select: none; /* Chrome, Safari, and Opera */
-webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}
</style>
