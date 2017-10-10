<template>
  <div>
    <header id="indexHeader" class="index--toutiaoribao">
      <div class="top_bar">
        <div class="abs_m">
          <a href="#" class="refresh_title btn"></a>
          <div class="refreshBtn-container "><i class="refresh_btn"></i></div></div><div class="abs_l">
        <a href="javascript:;" class="msg-box"></a>
      </div>
        <div class="abs_r"><a href="https://m.toutiao.com/search/?need_open_window=1" class="btn search"></a>
        </div>
      </div>
    </header>
    <div class="top_menu_bar ">
      <div class="top_menu_more">
        <div class="list_shadow">

        </div><a class="more_btn" href="javascript:void(0)"><span class="cross">+</span></a>
      </div>
      <div class="top_menu_list">
        <router-link  to="tuijian" class="btn cur"  exact>推荐</router-link>
        <router-link  to="shipin" class="btn">视频</router-link>
        <router-link  to="redian"  class="btn">热点</router-link>
        <router-link  to="shehui"  class="btn">社会</router-link>
        <router-link   to="yule" class="btn">娱乐</router-link>
        <router-link  to="junshi"  class="btn">军事</router-link>
        <router-link   to="keji" class="btn">科技</router-link>
        <router-link   to="qiche" class="btn">汽车</router-link>
        <router-link   to="tiyu" class="btn">体育</router-link>
        <router-link   to="caijing" class="btn">财经</router-link>
        <router-link   to="guoji" class="btn">国际</router-link>
        <router-link   to="shishang" class="btn">时尚</router-link>
      </div>
    </div>
    <div  style="margin-top: 88px;max-width: 100%">
      <router-view>

      </router-view>
    </div>

  </div>
</template>
<script>
  export default
  {
    name:'index',
    data:function () {
      return {

      }
    }
  }
</script>
<style>
  .router-link-active{
    color: red;
  }
</style>
