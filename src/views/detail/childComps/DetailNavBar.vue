<template>
    <nav-bar>
        <template v-slot:left>
            <div class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
        </template>
        <template v-slot:center>
                <div class="title">
                    <div v-for="(item, index) in titles" 
                        :key="index" 
                        class="title-item"
                        :class="{active: index === currentIndex}"
                        @click="titleClick(index)">{{item}}</div>
                </div>
        </template>
    </nav-bar>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'

    export default {
        name:'DetailNavBar',
        components: {
            NavBar
        },
        data(){
            return {
                titles: ['商品','参数','评论','推荐'],
                currentIndex: 0
            }
        },
        methods: {
            titleClick (index) {
                this.currentIndex = index;
                this.$emit('titleClick', index)
            },
            backClick(){
                this.$router.back();
                // this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .title {
        display: flex;
    }

    .title-item {
        flex: 1;
        font-size: 13px;
    }

    .active {
        color: var(--color-high-text)
    }

    .back img{
        margin-top: 12px;
        width: 20px;
    }
</style>