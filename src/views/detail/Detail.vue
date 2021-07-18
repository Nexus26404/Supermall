<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @title-click="titleClick" ref="detailNav"/>
        <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
            <detail-swiper :topImages="topImages" class="detailTopImages"/>
            <!-- <detail-swiper :topImages="topImages" id="detailTopImages" /> -->
            <detail-base-info :baseInfo="goods"/>
            <detail-shop-info :shopInfo="shop"/>
            <detail-goods-info :goodsInfo="detailInfo"/>
            <detail-goods-params :paramInfo="paramInfo" id="detailParamInfo"/>
            <detail-comment-info :commentInfo="commentInfo" id="detailCommentInfo"/>
            <goods-list :goods="recommends" id="detailRecommends"/>
        </scroll>
        <back-top @click="backClick" v-show="isShowBackTop"/>
        <detail-bottom-bar @addCart="addToCart"/>
        <!-- <toast :message="message" :show="show"/> -->
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo'
    import DetailGoodsParams from './childComps/DetailGoodsParams'
    import DetailCommentInfo from './childComps/DetailCommentInfo'
    import DetailBottomBar from './childComps/DetailBottomBar'

    import Scroll from 'components/common/scroll/Scroll'
    import GoodsList from 'components/content/goods/GoodsList'
    import BackTop from 'components/content/backTop/BackTop'

    import {getDetail, Goods, Shop, GoodsParam, getGoodsRecommend} from 'network/detail.js'

    import {mapActions} from 'vuex'

    // import Toast from 'components/common/toast/Toast'

    export default {
        name:'Detail',
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailGoodsParams,
            DetailCommentInfo,
            DetailBottomBar,
            Scroll,
            GoodsList,
            BackTop,
            // Toast
        },
        data(){
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                recommends: [],
                themeTopYs: ['.detailTopImages', '#detailParamInfo', '#detailCommentInfo', '#detailRecommends'],
                currentIndex: 0,
                isShowBackTop: false,
                message: '',
                show: false
            }
        },
        created(){
            // 1. 保存传入的 iid
            this.iid = this.$route.params.iid;

            // 2. 根据 iid 请求详情数据
            getDetail(this.iid).then(res => {
                // 1. 获取顶部的轮播数据
                const data = res.result;
                this.topImages = data.itemInfo.topImages

                // 2. 获取商品信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

                // 3. 创建店铺信息对象
                this.shop = new Shop(data.shopInfo)

                // 4. 保存商品详情数据
                this.detailInfo = data.detailInfo

                // 5. 获取参数的信息
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

                // 6. 取出评论信息
                if (data.rate.cRate !== 0) {
                    this.commentInfo = data.rate.list[0]
                }

            })

            // 3. 请求推荐数据
            getGoodsRecommend().then(res => {
                this.recommends = res.data.list
            })
        },
        methods: {
            ...mapActions(['addCart']),
            titleClick(index){
                this.$refs.scroll.scroll.scrollToElement(this.themeTopYs[index], 500)
            },
            contentScroll(position) {
                // 1. 获取 y 值
                const positionY = -position.y

                // 2. positionY 和主题中的值进行对比
                let length = this.themeYs.length;
                for (var i = 0; i < length-1; i++){
                    if(this.currentIndex !== i && (positionY >= this.themeYs[i] && positionY < this.themeYs[i+1])) {
                        this.currentIndex = i;
                        this.$refs.detailNav.currentIndex = this.currentIndex;
                    }
                }

                // 3. 是否显示回到顶部
                this.isShowBackTop = -position.y > 1000
            },
            backClick(){
                this.$refs.scroll.scrollTo(0, 0);
            },
            addToCart(){
                // 1. 获取购物车需要展示的信息
                const product = {};
                product.image = this.topImages[0];
                product.title = this.goods.title;
                product.desc = this.goods.desc;
                product.price = this.goods.realPrice;
                product.iid = this.iid;

                // 2. 将商品添加到购物车里
                // this.$store.dispatch('addCart', product).then(res => {
                //     console.log(res);
                // })
                this.addCart(product).then(res => {
                    // this.show = true;
                    // this.message = res;

                    // setTimeout(() => {
                    //     this.show = false;
                    // }, 1500)
                    this.$toast.show(res, 1500)
                })
            }
        },
        computed: {
            themeYs(){
                let arr = []
                for(let k of this.themeTopYs) {
                    arr.push(document.querySelector(k)?.offsetTop)
                }
                arr.push(Number.MAX_VALUE)
                return arr;
            }
        }
    }
</script>

<style scoped>
    #detail {
        position: relative;
        height: calc(100vh - 44px - 49px);
    }

    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }

    .content {
        height: 100%;
        overflow: hidden;
    }
</style>