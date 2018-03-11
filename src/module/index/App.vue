<template>
  <div id="app">

    <!--留坑-->
    <router-view class="main"></router-view>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" :to="{name:'home'}">
        <span class="mui-icon icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'collect'}">
        <span class="mui-icon icon-collect"></span>
        <span class="mui-tab-label">收藏</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'community'}">
        <span class="mui-icon icon-community"><span class="mui-badge">8</span></span>
        <span class="mui-tab-label">美社</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'cart'}">
        <span class="mui-icon icon-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'user'}">
        <span class="mui-icon icon-user"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

