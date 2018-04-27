<template>
    <div>
        <div class="index-header">
            <h3 class="lbs"><i>&#xe643;</i>上海</h3>
            <h2>在线商城</h2>
            <router-link to="/" class="search-a"><i class="search">&#xe704;</i></router-link>
        </div>

        <van-swipe>
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
    

   

</template>

<script>
    import { Swipe, SwipeItem } from 'vant';
    export default {
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/1.jpg',
                    'https://img.yzcdn.cn/2.jpg'
                ]
            }
        },
        methods: {
            onChange(index) {
            Toast('当前 Swipe 索引：' + index);
            }
        }
    }
</script>

<style scoped lang="less">
@import "../assets/less/index.less";
</style>