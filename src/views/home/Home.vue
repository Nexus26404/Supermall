<template>
    <div id="home">
        <nav-bar class="home-nav"><template v-slot:center><div>购物街</div></template></nav-bar>
        <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
            <home-swiper :banners="banners"/>
            <home-recommend-view :recommends="recommends"/>
            <feature-view />
            <tab-control class="tab-control" 
                        :titles="['流行','新款','精选']" 
                        @tabClick="tabClick"/>
            <goods-list :goods="showGoods"/>
        </scroll>
        <back-top @click="backClick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
    import HomeSwiper from './childComps/HomeSwiper'
    import HomeRecommendView from './childComps/HomeRecommendView'
    import FeatureView from './childComps/FeatureView'

    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/common/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/content/backTop/BackTop'

    import {getHomeMultidata, getHomeGoods} from 'network/home.js'

    export default {
        name:'Home',
        components:{
            HomeSwiper,
            HomeRecommendView,
            FeatureView,
            NavBar,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        created(){
            // 1. 请求多个数据
            this.getHomeMultidata()

            // 2. 请求商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        methods: {
            /* 事件监听相关方法 */
            tabClick(index){
                switch (index) {
                    case 0:
                        this.currentType = 'pop';
                        break;
                    case 1:
                        this.currentType = 'new';
                        break;
                    case 2:
                        this.currentType = 'sell';
                        break;
                }
            },
            backClick(){
                this.$refs.scroll.scrollTo(0, 0);
            },
            contentScroll(position){
                this.isShowBackTop = position.y < -1000 ? true : false;
            },
            loadMore(){
                this.getHomeGoods(this.currentType);

            },

            /* 网络请求相关方法 */
            getHomeMultidata(){
                getHomeMultidata().then(res =>{
                // console.log(res);
                // this.result = res;
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
            },
            getHomeGoods(type){
                const page = this.goods[type].page + 1;
                getHomeGoods(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1;

                    this.$refs.scroll.finishPullUp();
                })
            }

        },
        data(){
            return {
                banners:[],
                recommends: [],
                goods: {
                    'pop': {
                        page: 0,
                        list: []
                    },
                    'new': {
                        page: 0,
                        list: []
                    },
                    'sell': {
                        page: 0,
                        list: []
                    }
                },
                currentType: 'pop',
                isShowBackTop: false
            }
        },
        computed: {
            showGoods(){
                return this.goods[this.currentType].list
            }
        }
    }
</script>

<style scoped>
    #home {
        padding: 44px 0 49px 0;
        height: 100vh;
        overflow: hidden;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 2;
    }

    #home img{
        width: 100%;
    }

    .tab-control {
        position: sticky;
        top: 44px;
        z-index: 1;
    }

    .content {
        height: 100%;
        overflow: hidden;
    }
</style>