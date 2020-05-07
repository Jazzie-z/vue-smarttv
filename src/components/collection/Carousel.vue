<template>
    <div class="container">
        <div class="title" v-bind:class="{focus:isFocused}">
        {{carouselItem.name}}
        </div>
        <div class="carousel-wrapper" v-bind:style="style">
            <Card v-for="(item,i) in carouselItem.editorialItems" :key="item.id" v-bind:src="item.image.MEDIUM" 
            v-bind:isFocused="focusedIndex===i && isFocused"/>
        </div>
        <div class="video-container" v-bind:style="showVideo" >
            <video loop autoplay v-bind:class="{show_video:show}" v-if="show">
                <source src="../../assets/trailer.mp4" type="video/mp4"/>
            </video>
        </div>
    </div>
</template>

<script>
import Card from '../container/Card.vue'

import { enableNavigation } from '../../helper/navigationHelper'
    export default {
        components:{
            Card
        },
        data(){
            return{
                focusedIndex: 0,
                scrollLeft:0,
                show:false,
                timer:null
            }
        },
        props:['carouselItem','isFocused','index'],
        methods:{
        },
        computed: {
         style () {
            return { transform: 'translateX(' + this.scrollLeft + 'px)'}
            },
        showVideo(){
            console.error(this.isFocused)
            return { 'max-height': this.show? '400px':0}
        }
        },
        updated(){
            clearTimeout(this.timer)
            if(this.isFocused){                
                this.timer = setTimeout(()=>{
                    this.show=true
                },5000)
            }else{
                this.show=false
            }
        },
        mounted(){        
        enableNavigation({
                'LEFT':()=>{
                    if(this.focusedIndex >0){
                        this.focusedIndex -=1
                        this.scrollLeft +=260
                        this.show=false
                        }
                        
                },
                'RIGHT':()=>{
                    if(this.focusedIndex <this.carouselItem.editorialItems.length){
                    this.focusedIndex +=1
                    this.scrollLeft -=260
                    this.show=false
                    }
                },
                preCondition:()=>this.isFocused
        })
        },
    }
    
</script>

<style scoped>
.container{
    text-align: left;
    margin-left: 192px;
    margin-bottom: 35px;
}
.title{
    font-size: 36px;
    color: #ffffff;
    letter-spacing: -.25px;
    position: relative;
    opacity: .6;
}
.carousel-wrapper{
    padding: 0 0 15px;
    margin-top: 15px;
    white-space: nowrap;
    transition-duration: 0.5s;
}
.focus{
    margin-bottom: 37px;
    opacity:1;
}
.video-container{
    width: 70%;
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    transition-duration: .9s;
    background: black;
}
video {
    object-fit: cover;
    height:100%;
    width:100%;
    visibility: hidden;
}
.show_video{
    animation: blink-animation .2s steps(10, start);
    animation-iteration-count: 2;
    visibility: visible;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>