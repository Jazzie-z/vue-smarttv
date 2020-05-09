<template>
  <div class="component">
   <img class ="background" src="../assets/background.png"/>
   <!-- <img class="billboard" :src="items[0]"/> -->
   <div class="grid">
     <div class="container">
     <div>Stars born today</div>
      <div class="carousel">
        <div v-for="(item,index) in stars" :key ='index'>
          <img class="star_card" v-bind:src="item"/>
        </div>
        </div>
      </div>
      <div class="container">
      <div>Movies for you</div>
        <div class="grid_wrapper">
          <div class="card" v-for="(item,index) in items" :key ='index'>
            <img v-bind:src="item"/>
          </div>
        </div>
        </div>
   </div>
   
   </div>
</template>

<script>
import {HOTSTAR,IMAGE_URL, STARS} from '../mock/movies'
export default {
name: 'Movie',
  data(){
    return {
        items:HOTSTAR.body.results.items.map(item => IMAGE_URL+item.images.h),
        stars: STARS.data.map(item => item.images['17'])
      }
  },
  created(){
      console.error()
  }
}
</script>

<style scoped>
.component{
  position:relative;
  width:100%;
  height:1920px;
  color:white;
}
.background{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
.grid{
    position:relative;
    z-index: 1;
}
.grid_wrapper {
  display:flex;
  flex-wrap: wrap;
    justify-content: center;
}
.billboard {
    position: relative;
    z-index: 1;
    width: 1280px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 450px;
}
.card img{
    width: 450px;
    margin: 6px 0px;
    filter: brightness(50%);
}
.carousel{
  display: flex;
  margin: 21px 0;
}
.container{
  text-align: left;
  padding-left: 50px;
  margin: 10px 0;
  font-size: 32px;
}
.star_card{
border-radius: 18px;
    width: 250px;
    height: 250px;
    margin: 0 10px;    
    filter: brightness(50%);
}
</style>