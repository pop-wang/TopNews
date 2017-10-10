<template>
  <div>
    <div class="item_container" v-for="item in list" @click="setID(item.item_id)">
      <a :href='item.url' class="article_link" >

        <div class="video_container">
          <p class="title">{{item.title}}</p>
          <!--<img :src="item.video_detail_info.detail_video_large_image.url"/>-->
          <img :src="item.large_image_url"/>


          <span class="playbtn"></span>
        </div>
        <div class="info">
          <span>{{item.media_name}}</span>
          <span>评论:{{item.comment_count}}</span>
          <span>{{item.datetime}}</span>

        </div>
      </a>

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
        this.$http.get('list/?tag=video&ac=wap&count=20&format=json_raw&as=A125C9BD42DFDE6&cp=59D2AF0D9E06DE1&max_behot_time='+(new Date().getTime()+'').slice(0,9)).then(res=>{
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

  .info span{
    color: #aaa;
    font-size: 14px;
    padding: 0 3px;
  }
.video_container{
  position: relative;

}
  .video_container img{
    width: 100%;
    height: auto;
  }
  .title{
    position: absolute;

    color: #f4f5f6;
    font-size: 12px;
    padding: 0 10px;
  }
  .playbtn{
    position: absolute;
    top: 50%;left: 40%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: url(//s3.pstatp.com/growth/mobile_list/image/playicon_video@3x_dcf536ff.png) no-repeat center center;
    background-size: 50px;
  }
</style>
