<template>
  <div id="app" v-bind:class="{hide_menu:hideMenu}">
    <Menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import { focusHandler } from './main'

export default {
  name: 'App',
  components: {
    Menu,
  },
    data(){
            return{
                hideMenu: false,
            }
  },
  created() {
            focusHandler.$on('FOCUS_CHANGE',({component,isFocused})=>{
                if(component==='MAIN_COMPONENT' && isFocused){
                    this.hideMenu=true
                }
                if(component==='MENU'){
                    this.hideMenu=false
                }
            })
},
computed: {
         style () {
            return { transform: this.hideMenu?'translateY(-172px)':0}
            },
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
  overflow:hidden;
  transition-duration: .5s;
}
.hide_menu {
  transform:translateY(-172px);
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
