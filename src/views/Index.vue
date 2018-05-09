<template>
    <div>
        <div class="index-header">
            <h3 class="lbs"><i>&#xe643;</i>上海</h3>
            <h2>在线商城</h2>
            <router-link to="/" class="search-a"><i class="search">&#xe704;</i></router-link>
        </div>

        <div class="swipe clearfix">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(images,index) in images" :key="index" class="index-banner">
                    <img v-lazy="images.images" />
                </swiper-slide>
            </swiper>
        </div>

        <div class="category">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="90%"/>
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <div class="index-ad">
            <div v-for="(img,index) in indexAd" :key="index"><img v-lazy="img.PICTURE_ADDRESS" width="100%"/></div>
        </div>
        <div class="hot-goods">
            <h2>热卖商品</h2>
            <swiper :options="hotSwiper">
                <swiper-slide class="index-hot-list" v-for="(item,index) in indexHot" :key="index">
                    <div>
                        <img v-lazy="item.image" />
                        <strong>￥{{item.mallPrice}}</strong>
                        <del>￥{{item.price}}</del>
                        <h3>{{item.name}}</h3>
                        <i>热卖</i>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

    </div>

</template>

<script>
    import axios from 'axios'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        data() {
            return {
                swiperOption:{
                    roundLengths : true, 
                    initialSlide :1,
                    speed:600,
                    slidesPerView:"auto",
                    centeredSlides : true,
                    followFinger : true
                },
                hotSwiper:{
                    slidesPerView: 3
                },
                images: [],
                category:[],
                indexAd:[],
                indexHot:[]
            }
        },components: {
            swiper,swiperSlide
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
                  this.indexAd = res.data.data.INDEX_ADBANNER
                  this.indexHot = res.data.data.hotGoods
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