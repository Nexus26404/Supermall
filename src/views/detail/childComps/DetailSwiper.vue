<template>
    <swiper class="swiperer">
        <swiper-item v-for="item in topImages" :key="item">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper'

    export default {
        name:'DetailSwiper',
        props: {
            topImages: {
                type: Array,
                default: []
            }
        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>
    .swiperer {
        height: 250px;
        overflow: hidden;
    }
    .swiperer img {
        width: 100%;
    }
</style>