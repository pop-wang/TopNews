<template>
  <div>
   <div class="container">
     <h2>{{data.title}}</h2>
     <div class="user">
       <img :src="data.media_user.avatar_url" alt="">
       <span class="left">
         <div>
           <span>{{data.media_user.screen_name}}</span> <span class="tou"> 头条号</span>
         </div>
         <div>
        <span>{{data.comment_count}}评论</span>
            <!--<span>{{data.publish_time}}</span>-->
         </div>

       </span>
       <div class="right">
         <div>
           关注
         </div>

       </div>
     </div>
     <div v-html="data.content" class="html"></div>
   </div>
    <div class="item_container" v-for="item in list" >
      <router-link :to='{name:"detail", params:{ id:item.item_id }}' class="article_link" >
        <p class="totle">{{item.title}}</p>
        <div class="img_container">
          <img :src="item.image_url" alt="" v-if="item.image_url" style="width: 100%">
          <img :src="itt.url" style="width: 33%;height: auto" v-for="itt in item.image_list"/>

        </div>
        <div class="info">
          <span>{{item.media_name}}</span>
          <span>评论:{{item.comment_count}}</span>
          <span>{{item.datetime}}</span>

        </div>
      </router-link>

    </div>
  </div>
</template>
<script>
  import Public from './public'
  export default {
    name:'detail',
    data:function () {
      return{
         data:{},
        list:[]
      }
    },
     created:function () {
       this.getDetail();
       this.getList();
       alert(555)
              console.log(this.$route.params.id)
     },
    methods:{
      getDetail:function () {
        this.$http.get('i'+this.$route.params.id+'/info/').then(res=>{
          console.log(res);
          this.data=res.data.data
        })
      },getList:function () {
        this.$http.get('related/common/6468398885420139022/?parent_rid=69927615506994778764&city=%E7%9F%B3%E5%AE%B6%E5%BA%84&province=%E6%B2%B3%E5%8C%97&page_type=article&share_iid=&share_app_name=&wx_share_count=0&site_id=5000246&num=5&num=15&num=3&code_id=14798012085000246&code_id=14799599715000246&code_id=14818696195000246&tt_running=0').then(res=>{
          console.log(res);
          this.list=res.data.data['14799599715000246']

        })
      }
    }
  }

</script>
<style>
 .container{
   padding: 14px;
 }
  .html img{
    width: 100%;
  }
  .user{
    display: flex;

  }
 .user img{
   height: 40px;
   border-radius: 50%;
 }
  .left{
    margin-left: 10px;
  }
 .left span{
   font-size: 12px;
 }
  .tou{
    background: red; color:white;
  }
  .right{

    width: 40%;
    text-align: center;
    line-height: 40px;
  }
 .right div{
   float: right;
   width: 80px;
   background: red;
   color: white;
 }
</style>
