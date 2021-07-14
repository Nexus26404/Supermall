<template>
    <swiper>
        <swiper-item v-for="item in banners" :key="item">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper'

    export default {
        name: "HomeSwiper",
        props: {
            banners: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        methods: {
            imageLoad(){
                if (!this.isLoad) {
                    this.$emit('swiperImageLoad')
                    this.isLoad = true;
                }
            }
        },
        data(){
            return {
                isLoad: false
            }
        }
    }

</script>

<style scoped>
    .swiper img {
        width: 100%;
    }
</style>