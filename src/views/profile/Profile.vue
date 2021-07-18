<template>
  <div id="profile">
   <nav-bar class="nav-bar">
     <template v-slot:center><div>商城</div></template>
   </nav-bar>
    <user-info></user-info>
    <div class="ppp">
      <detail-info>
        <template v-slot:name><div>0 <span style="color:#666666;font-weight: normal;font-size: 15px">元</span></div></template>
        <template v-slot:value><div>我的余额</div></template>
      </detail-info>
      <detail-info>
          <template v-slot:name><div>0 <span style="color:#666666;font-weight: normal;font-size: 15px">个</span></div></template>
        <template v-slot:value><div>我的优惠</div></template>
      </detail-info>
      <detail-info>
        <template v-slot:name><div>0 <span style="color:#666666;font-weight: normal;font-size: 15px">分</span></div></template>
        <template v-slot:value><div>我的积分</div></template>
      </detail-info>
    </div>
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import UserInfo from "@/views/profile/childComps/UserInfo";
import detailInfo from "@/views/profile/childComps/detailInfo";
import ListView from "@/views/profile/childComps/ListView";
export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    detailInfo,
    ListView
  },
  data: function () {
		  return {
        orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
      }
    },
    mounted: function () {
    }
	}
</script>

<style scoped>
 .nav-bar {
   background-color: #ff8198;
   color: white;
 }
 .ppp{
   display: flex;
 }
</style>