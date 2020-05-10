<template>
  <div class='component'>
      <img class ="background" src="../assets/background.png"/>
      <transition name="fade">
    <Carousel v-if="suggestionData.editorialItems.length"
      animation="true"
      v-bind:carouselItem="suggestionData" >      
      </Carousel>
  </transition>      
  </div>
</template>

<script>
import Carousel from './collection/Carousel.vue'
export default {
name: 'Suggestion',
components: {
    Carousel
},
data(){
    return {
        channel: new BroadcastChannel('suggestion'),
        suggestionData: {
            name:'suggestion',
            editorialItems:[]
        }
    }
},
methods:{
        },
created(){        
    this.channel.onmessage = ({data}) => {
        if(this.suggestionData.editorialItems.findIndex(item => item.id === data.item.id)===-1)
            this.suggestionData.editorialItems.push(data.item)
        };
    }
}
</script>

<style scoped>
.component{
    position: relative;
    width: 1920px;
    height: 1080px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>