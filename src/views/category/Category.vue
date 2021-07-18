<template>
  <div id="category">
    商品分类
  </div>
</template>

<script>
  export default {
    name: 'Category'
  }
</script>

<style scoped>
#category {
  height: calc(100vh - 44px);
}

.nav {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  box-sizing: border-box;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
  /*overflow: hidden;*/
}

#tab-content {
height: 100%;
flex: 1;
overflow: hidden;
}
</style>
