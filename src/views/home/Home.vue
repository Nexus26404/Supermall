<template>
    <div id="home">
        <nav-bar class="home-nav"><template v-slot:center><div>购物街</div></template></nav-bar>
        <home-swiper :banners="banners"/>
        <home-recommend-view :recommends="recommends"/>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import HomeSwiper from './childComps/HomeSwiper'
    import HomeRecommendView from './childComps/HomeRecommendView'

    import {getHomeMultidata} from 'network/home.js'

    export default {
        name:'Home',
        components:{
            NavBar,
            HomeSwiper,
            HomeRecommendView
        },
        created(){
            // 1. 请求多个数据
            getHomeMultidata().then(res =>{
                // console.log(res);
                // this.result = res;
                this.banners = res.data.data.banner.list;
                this.recommends = res.data.data.recommend.list;
            })
        },
        data(){
            return {
                banners:[],
                recommends: []
            }
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
    }
    #home img{
        width: 100%;
    }
</style>