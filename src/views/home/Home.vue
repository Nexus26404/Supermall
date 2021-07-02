<template>
    <div id="home">
        <nav-bar class="home-nav"><template v-slot:center><div>首页</div></template></nav-bar>
        <ul v-for="item in banners" :key="item">
            <li><img :src="item.image"></li>
        </ul>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'

    import {getHomeMultidata} from 'network/home.js'

    export default {
        name:'Home',
        components:{
            NavBar
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
    #home img {
        width: 100%;
    }
</style>