<template>
  <div>
    <header id="header" class="mui-bar mui-bar-transparent bp-header" style="background-color: rgba(255, 255, 255, 0.4);">
          <a class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav">
            镇江<span class="mui-icon mui-icon-arrowdown"></span>
          </a>
          <div class="mui-title bp-search-box">
            <i class="fa fa-search"></i>
            <input name="key" id="key" type="search" placeholder="搜索店铺"/>
          </div>
          <i class="mui-icon icon-saoyisao mui-pull-right"></i>
        </header>

        <Footer></Footer>

        <!--轮播图-->
        <mt-swipe :auto="4000" class="bp-swipe">
          <mt-swipe-item>
            <img src="../../static/img/banner1.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../static/img/banner2.png" alt="">
          </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9 bp-grid">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
            <img src="../../static/img/classify1.png" alt="">
            <div class="mui-media-body">淑女</div>
          </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
            <img src="../../static/img/classify2.png" alt="">
            <div class="mui-media-body">瑞丽</div>
          </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
            <img src="../../static/img/classify3.png" alt="">
            <div class="mui-media-body">嘻哈街头</div>
          </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
            <img src="../../static/img/classify4.png" alt="">
            <div class="mui-media-body">欧美</div>
          </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
            <img src="../../static/img/classify5.png" alt="">
            <div class="mui-media-body">洛丽塔</div>
          </a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
            <img src="../../static/img/classify6.png" alt="">
            <div class="mui-media-body">OL</div>
          </a></li>

        </ul>
  </div>
</template>

<script>

  export default {
    data(){
      return {

      }
    }
  }
</script>

<style scoped>
.bp-header{
    padding-left: 10px;
  }

  .bp-header > a{
    font-size: 16px;
  }

  .bp-header > a > span{
    font-size: 20px;
  }

  .bp-search-box{
    display: inline-block;
    position: absolute;
    left: 50%;
    width: 50%;
    transform: translateX(-50%);
  }

  .bp-search-box input{
    height: 30px;
    text-align: center;
    background-color:white;
    border-radius: 15px;
  }

  .bp-search-box i{
    position: absolute;
    left: 10px;
    top: 12px;
    color: #666;
  }

  /*轮播图样式*/
  .bp-swipe {
    height: 200px;
    width: 100%;
    background: white;
  }

  .bp-swipe img {
    height: 100%;
    width: 100%;
  }

  .bp-grid{
    background: white;
  }

  .bp-grid > .bp-grid-item {
    padding: 6px;
    border: none;
  }

  .bp-grid > li > a > img{
    width: 50%;
    height: 50%;
  }
</style>
