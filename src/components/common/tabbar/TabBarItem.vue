<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot name="item-icon" v-if="!isActive"></slot>
        <slot name="item-icon-active" v-else></slot>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor:{
            type: String,
            default: 'red'
        }
    },
    data(){
        return {
            // isActive: false
        }
    },
    computed: {
        isActive(){
            // /home -> item1(/home) = true
            // /category -> item1(/category) = false
            // /cart -> item1(/cart) = false
            // /profile -> item1(/profile) = false
            return this.$route.path.indexOf(this.path) != -1;
        },
        activeStyle(){
            return this.isActive ? { color: this.activeColor} : {};
        }
    },
    methods: {
        itemClick(){
            this.$router.replace(this.path).catch(err=>{err})
        }
    }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  /* .tab-bar-item img {
      width: 36%;
      margin-top: -2px;
      margin-bottom: -4px;
      vertical-align: middle;
  } */
</style>