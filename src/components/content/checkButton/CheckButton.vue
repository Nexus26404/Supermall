<template>
    <div class="check-button" :class="{checkd: isChecked}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        name:'CheckButton',
        props: {
            isChecked: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped>
    .check-button {
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #aaa;
        box-shadow: 1px 1px 1px rgba(100, 100, 100, .3);
        overflow: hidden;
    }

    .checkd {
        border-color: var(--color-tint);
        background-color: var(--color-tint);
    }
</style>