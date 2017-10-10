<template>

</template>
<script>
  import axios from "axios"
  export default{
      data(){
          return{
              title:"",
            content:""
          }
      },
    methods:function () {
      getBlogData(){
          axios.get("http://blog.shudong.wang/wp-json/").then(res=>{
              console.log(res);
          })
      }
    }
  }
</script>
