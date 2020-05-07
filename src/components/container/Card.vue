<template>
    <div class="card" v-bind:class="{focus:isFocused}">
        <img v-bind:src="src"/>
    </div>
</template>

<script>
    export default {
        props:['src', 'isFocused']
    }
</script>

<style scoped>
.card{
    display: inline-block;
    width: 236px;
    margin-right: 24px;
}
img{
    width:100%;
    filter: brightness(50%);
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