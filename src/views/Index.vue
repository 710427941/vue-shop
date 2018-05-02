<template>
    <div>
        <div class="index-header">
            <h3 class="lbs"><i>&#xe643;</i>上海</h3>
            <h2>在线商城</h2>
            <router-link to="/" class="search-a"><i class="search">&#xe704;</i></router-link>
        </div>

        <div class="swipe clearfix">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image,index) in images" :key="index">
                    <img v-lazy="image.images" />
                </van-swipe-item>
            </van-swipe>
        </div>

        <div class="category">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="90%"/>
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>



    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                images: [],
                category:[]
            }
        },
        created() {
          axios({
              url:'https://www.easy-mock.com/mock/5ae9d12c0a492d2535b91362/vueshop/shopindex',
              type:'get'
          })
          .then(res=>{
              if(res.status==200){
                  console.log(res)
                  this.images=res.data.data.INDEX_BANNER
                  this.category = res.data.data.CATEGORY
              }
          })
          .catch(error=>{
              console.log(error);
          })
        },
        methods: {
        }
    }
</script>

<style scoped lang="less">
@import "../assets/less/index.less";

</style>