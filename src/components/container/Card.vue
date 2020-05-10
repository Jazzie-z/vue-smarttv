<template>
<div class="wrapper">
<transition name="fade">
    <div class="card" v-bind:class="{focus:isFocused, animate:animation}">
        <img v-bind:src="src" v-on:mousedown="onClick(item)"/>
    </div>
  </transition>          
  <Draggable>
     <template slot="header">
         <div id="float" class="card isFocused" v-if="showed" v-on:mouseup="onMouseup()">
        <img v-bind:src="src"/>
        <div class="highlight">Suggest</div>
  </div>
    </template>
   </Draggable>
  
</div>  
</template>

<script>
import Draggable from './Draggable.vue'
    export default {
        props:['src', 'isFocused','item','animation'],
        components:{
            Draggable
        },
        data(){
            return {                
            channel: new BroadcastChannel('suggestion'),
            dragged:false,
            showed:false
            }
        },
        methods:{
            onClick() {
                this.dragged = true
                this.showed = true
                
            },
            onMouseup(){
                if(this.showed) {
                    this.dragged = false
                    this.showed = false
                    this.channel.postMessage({item:this.item})
                }
            }
        },
        updated(){
            console.error(this.dragged)
        },
        created(){
            // var self = this
            document.addEventListener('mouseup',()=>{
            // self.onMouseup()
            })
        }
        
}
</script>

<style scoped>
@keyframes example {
  from {
    transform: translate(-500px, -200px);}
  to {
    transform: translate(0,0);}
}
.card{
    display: inline-block;
    width: 236px;
    margin-right: 24px;
    position: relative;
}
.animate{
    animation-name: example;
    animation-duration: .5s;
}
img{
    width:100%;
    filter: brightness(50%);
}
.wrapper{
    display: inline-block;
}
#float {
    position: absolute;
    top: 0;
    z-index: 3;    
}
#float img {
    filter: brightness(100%);
}
.highlight{
    background: #00cef4;
    position: absolute;
    width: 100%;
    height: 13%;
    top: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.focus{
    transform: scale(1.2, 1.2);
    box-shadow: 0 8px 40px 3px rgba(0, 0, 0, 0.7);    
    position: relative;
}
.focus img{
    filter: brightness(1) !important;
}
</style>