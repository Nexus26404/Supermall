<template>
    <ul class="recommend">
        <li v-for="item in recommends" :key="item" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name:'HomeRecommendView',
        props: {
            recommends: {
                type: Array,
                default(){
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    .recommend {
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px 0;
        border-bottom: 8px solid #eee;
    }

    .recommend-item {
        flex: 1;
        list-style: none;
    }

    .recommend-item img {
        width: 80%;
        margin-bottom: 10px;
    }
</style>