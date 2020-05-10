<template>
  <div class="component">
   <img class ="background" src="../assets/background.png"/>   
   <div class="main-container">
     <div class="carousel-container" v-bind:style="style">
    <div v-for="(item,index) in carouselData" :key ='index'>
      <Carousel v-if="item.editorialListType==='Catchup' && item.isVisible" 
      v-bind:carouselItem="item" 
      v-bind:isFocused="focusedIndex===index"
      v-bind:index="index">      
      </Carousel>
    </div>
    </div>   
    </div>   
    <!-- <ul>
    <li v-for="fruit in fruits" :key="fruit">{{fruit}}</li>
</ul> -->
<div class="side_panel">

</div>
  </div>
</template>

<script>
import Carousel from './collection/Carousel.vue'
import { focusHandler } from '../main'
import mock from '../mock/home'
import { enableNavigation } from '../helper/navigationHelper'
export default {
  name: 'Home',
  components: {
    Carousel
  },
  data(){
    return {
      carouselData:mock.items.map((item,index)=>({...item,isVisible:index<300?true:false})),
      focusedIndex:null,
      scrollTop:0
      }
  },
  computed: {
     style () {
        return { transform: 'translateY(' + this.scrollTop + 'px)'}
     }
  },
  methods:{
    keyListener({component,isFocused,direction}){
      
      if(component==='MAIN_COMPONENT' && !isFocused && this.carouselData.length){       
        focusHandler.$emit('FOCUS_CHANGE',{component:'MAIN_COMPONENT',isFocused:true})
      }else if(component === 'HOME_FOCUS'){
        if(direction==='DOWN'){
          
          if(this.focusedIndex === null)this.focusedIndex = 0 
          else if( this.focusedIndex < this.carouselData.length - 3){
            this.scrollTop -= 438.58
            this.focusedIndex += 1
          }
            
        } else {
          if(this.focusedIndex)
            this.scrollTop += 438.58
          this.focusedIndex = this.focusedIndex > 0 ? this.focusedIndex - 1:0
        }
        // this.carouselData=this.carouselData.forEach(item=>item)        
      }else if(component==='MENU'){
        this.focusedIndex=null
      }
    },
  },
  destroyed(){
    focusHandler.$off('FOCUS_CHANGE',this.keyListener)
  },
  mounted(){
    focusHandler.$on('FOCUS_CHANGE',this.keyListener)
    enableNavigation({
      preCondition: this.focusedIndex!==null,
      'DOWN':()=>{console.error('this.focusedIndex',this.focusedIndex)
        focusHandler.$emit('FOCUS_CHANGE',{component:'HOME_FOCUS', direction: 'DOWN'})
      },
      'UP':()=>{console.error('this.focusedIndex',this.focusedIndex)
        if(this.focusedIndex)
          focusHandler.$emit('FOCUS_CHANGE',{component:'HOME_FOCUS', direction: 'UP'})
        else
          focusHandler.$emit('FOCUS_CHANGE',{component:'MENU'})
      },
      id:'home'
    })
    // let url = 'https://ssl.dstv.com/api/cs-mobile/editorial/v6/getEditorialsForUser;productId=1b09957b-27aa-493b-a7c9-53b3cec92d63;platformId=f8113a08-286b-4250-b7c5-31fbfcaec8b0;packageId=3e6e5480-8b8a-4fd5-9721-470c895f91e2'
    // fetch(url,{
    //   headers:{authorization: 'c18c0757-6984-4291-b25b-42766de97156'}
    // }).then((response) => response.json())
    //   .then((data) => {
    //     this.carouselData=data.items    
    //   }).catch(e=>{
    //     console.error(e)
    //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component{
  position:relative;
  width:100%;
  height:100%;
  color:white;
}
.main-container{
  z-index: 1;
  position:relative;
  padding: 108px 0 40px 0;
}
.carousel-container {
  position: relative;
  transition: 0.5s;
}
.side_panel{
  background: #080c02a6;
    width: 200px;
    position: absolute;
    top: 10px;
    height: 1080px;
    right: 0;
    z-index: 1;
    border-top-left-radius: 200px;
    border-bottom-left-radius: 200px;
    box-shadow: 3px 0px 42px 15px #00cef4;
    opacity: 0;
}
.side_panel:hover {
  opacity: 1;
}
</style>
