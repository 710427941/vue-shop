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
                        <strong>￥{{item.mallPrice | moneyFilter}}</strong>
                        <del>￥{{item.price | moneyFilter}}</del>
                        <h3>{{item.name}}</h3>
                        <i>热卖</i>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <floor-component :floorData="floor1" :floorTitle='floorTitle.floor1'></floor-component>
        <floor-component :floorData="floor2" :floorTitle='floorTitle.floor2'></floor-component>
        <floor-component :floorData="floor3" :floorTitle='floorTitle.floor3'></floor-component>
        
        <div class="hot-area">
                <div class="hot-title">热卖商品</div>
                <div class="hot-goods">
                    <van-list>
                        <van-row gutter="20">
                            <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                                <goods-info :goodsId="item.goodsId" :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
                            </van-col>
                        </van-row>
                    </van-list>
                </div>
            </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import { toMoney } from '@/filter/moneyFilter.js'
    import floorComponent from '@/components/floorComponent'
    import goodsInfo from '@/components/goodsInfoComponent'
    
    import url from '@/serviceApi.config.js'

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
                indexHot:[],
                floor1:[],
                floor2:[],
                floor3:[],
                floorTitle:[],
                hotGoods:[]
            }
        },
        components: {swiper,swiperSlide,floorComponent,goodsInfo},
        created() {
          axios({
              url:url.getShopIndexInfo,
              type:'get'
          })
          .then(res=>{
              if(res.status==200){
                  console.log(res)
                  this.images=res.data.data.INDEX_BANNER
                  this.category = res.data.data.CATEGORY
                  this.indexAd = res.data.data.INDEX_ADBANNER
                  this.indexHot = res.data.data.hotGoods
                  this.floor1 = res.data.data.floor1
                  this.floor2 = res.data.data.floor2
                  this.floor3 = res.data.data.floor3
                  this.floorTitle = res.data.data.floorName
                  this.hotGoods = res.data.data.hotGoods
              }
          })
          .catch(error=>{
              console.log(error);
          })
        },
        filters: {
            moneyFilter(money) {
                return toMoney(money)
            }
        }
    }
</script>

<style scoped lang="less">
@import "../assets/less/index.less";
</style>