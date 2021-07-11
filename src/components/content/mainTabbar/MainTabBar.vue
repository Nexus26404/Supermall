<template>
      <tab-bar class="tabbar">
      <tab-bar-item path="/home">
        <template v-slot:item-icon ><img src="~assets/img/tabbar/home.svg"></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/home-active.svg"></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon ><img src="~assets/img/tabbar/menu.svg"></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/menu-active.svg"></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-icon ><img src="~assets/img/tabbar/cart.svg"></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/cart-active.svg"></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon ><img src="~assets/img/tabbar/nickname.svg"></template>
        <template v-slot:item-icon-active><img src="~assets/img/tabbar/nickname-active.svg"></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
    name:'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
}
</script>

<style scoped>
    img {
      width: 36%;
      margin-top: -2px;
      margin-bottom: -2px;
      vertical-align: middle;
    }
    .tabbar {
      z-index: 99;
    }
</style>