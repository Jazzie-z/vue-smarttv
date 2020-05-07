<template>
    <div class="container">
        <div v-for="item in menuItem" :key="item.title" class="item" :class="{focus:item.isFocused && isFocused}">
            {{item.title}}
            </div>
    </div>
</template>

<script>
    import {focusHandler} from '../main'
    import {enableNavigation}from '../helper/navigationHelper'
    export default {
        name:'Menu',
        data() {
            return {
                menuItem: [
                    {isFocused:true, title:'Home'},
                    {isFocused:false, title:'Live Tv'},
                    {isFocused:false, title:'Catchup'},
                    {isFocused:false, title:'Search'},
                    {isFocused:false, title:'Settings'},
                ],
                isFocused:true
            }
        },
        methods:{
            
        },
        created() {
            focusHandler.$on('FOCUS_CHANGE',({component,isFocused})=>{
                console.log('event',component,isFocused)
                if(component==='MAIN_COMPONENT' && isFocused){
                    this.isFocused=false
                }
                if(component==='MENU'){
                    this.isFocused=true
                }
            })
            enableNavigation({
                'LEFT':()=>{
                    let activeIndex = this.menuItem.findIndex(e=>e.isFocused)
                    if(activeIndex >0)
                        this.menuItem=this.menuItem.map((e,i)=>{
                            e.isFocused=false
                            if(i===activeIndex-1)
                                e.isFocused=true
                            return e
                        })
                },
                'RIGHT':()=>{
                    let activeIndex = this.menuItem.findIndex(e=>e.isFocused)
                    if(activeIndex+1 <this.menuItem.length)
                    this.menuItem=this.menuItem.map((e,i)=>{
                        e.isFocused=false
                        if(i===activeIndex+1)
                            e.isFocused=true
                        return e
                    })
                },
                'DOWN':()=>{
                    focusHandler.$emit('FOCUS_CHANGE',{component:'MAIN_COMPONENT',isFocused:false})                  
                },
                preCondition:()=>this.isFocused
            })
  }
    }
</script>

<style scoped>
.container{
    height: 160px;
    background:black;
    color:white;
}
.item {
    color: #fff;
    display: inline-block;
    font-size: 32px;
    padding: 68px 36px;
    opacity: 0.3;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1.05);
}
.focus {
    filter: brightness(100%);
    border: none;
    transform: translateZ(0) scale(1.3);
    opacity: 1;
}
</style>