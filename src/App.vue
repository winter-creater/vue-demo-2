<template>
  <div id="app">
   {{n}}
   <button @click="add">+1</button>
   <button @click="jian">-1</button>
  </div>
</template>

<script>

export default {
  name: 'App',
 data(){
   return{
     n:0
   }
 }
}
 </script>

<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.min.js"></script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
