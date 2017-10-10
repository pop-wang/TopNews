<template>
  <div>
    <!--<section class="middle_mode has_action" ><a href="javascript: void(0)"  class="article_link clearfix "><div class="item_detail desc"><h3 class="dotdot line3 image-margin-right"><h3 class="dotdot line3 image-margin-right">凝聚全党意志 不负历史担当——党和国家领导人当选十九大代表纪实</h3></h3>-->
    <!--<div class="item_info"><div><span class="stick_label space">置顶</span>&lt;!&ndash; react-text: 48 &ndash;&gt;0&lt;!&ndash; /react-text &ndash;&gt;<span class="src space">新闻终点站</span><span class="cmt space">&lt;!&ndash; react-text: 51 &ndash;&gt;评论 &lt;!&ndash; /react-text &ndash;&gt;&lt;!&ndash; react-text: 52 &ndash;&gt;51&lt;!&ndash; /react-text &ndash;&gt;</span><span data-id="6471833919665734157" class="dislike-news fr mid-space"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="list_img_holder"><img src="http://p1.pstatp.com/video1609/3c790004cad1e52c792e">-->
    <!--<span class="video-btn"></span>-->
    <!--</div>-->
    <!--</a>-->
    <!--</section>-->
    <div class="item_container" v-for="item in list" @click="setID(item.item_id)">
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
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      ...
    </div>
  </div>
</template>
<script>
  import Public from './public'
  export  default {
    name:'tuijian',
    data:function () {
      return {
        list:[],
        busy: false
      }
    },
    created:function () {
      console.log(1)
      this.getList();
    }
    ,
    methods:{
      getList:function () {
        this.$http.get('list/?tag=news_fashion&ac=wap&count=20&format=json_raw&as=A175991D73C3E2F&cp=59D3B34EC29FCE1&min_behot_time='+(new Date().getTime()+'').slice(0,9)).then(res=>{
          console.log(res)
          if(res.data.data){
            this.list=[... new Set(this.list.concat(res.data.data))]
            console.log(this.list)
          }
          else {
            this.getList();
          }
        })
      },
      loadMore: function() {
        this.busy = true;

        setTimeout(() => {
          this.getList();
          console.log(55555)
          this.busy = false;
        }, 1000);
      },
      setID:function (han) {
        console.log(han)
        Public.id=han;
        console.log(Public.id)
      }
    }
  }
</script>
<style>
  section{
    position: relative;
    -webkit-transition: all 1s ease-in-out;
    margin: 0px 15px;
    border-bottom: 1px solid rgba(221, 221, 221, 0.6);
  }
  .article_link {
    /*background: #000;*/
    min-height: 84px;
    display: block;
    position: relative;
    padding: 16px 0px;
    font-size: 20px;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    -webkit-touch-callout: none;
  }
  .desc {
    display: inline-block;
    width: 67%;
    vertical-align: middle;
  }.item_info {
     color: #999;
     overflow: hidden;
     font-size: 15px;
     margin-top:-20px;
     color: red;
   }
  .list_img_holder {
    float: right;
    overflow: hidden;
    width: 33%;
    height: 100px;
    display: inline-block;
    vertical-align: middle;
    right: 0;
    top:30px;
    position: relative;
    background: url(//s3b.pstatp.com/growth/mobile_list/image/toutiaoicon_loading_textpage@3x_f7c130ce.png) #efefef no-repeat center center;
    background-size: 50% ;
  }
  .dotdot {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    display: inline-block;
    -webkit-box-orient: vertical;
    margin-right: 24px;
    line-height: 25px;
    font-size: 17px;
    color: black;
  }.list_img_holder img {
     border: none;
     display: block;
     width: 100%;
     height: 100%;
     -webkit-transition: opacity 300ms ease;
     -moz-transition: opacity ease .3s;
     pointer-events: none;
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
     -webkit-user-select: none;
     text-decoration: none;
   }
  .info span{
    color: #aaa;
    font-size: 14px;
    padding: 0 3px;
  }

</style>
