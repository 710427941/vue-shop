<template>
    <div>
        <van-nav-bar
            title="商品详情"
            left-text=""
            left-arrow
            @click-left = "goBack"
        />

        <div class="goodsinfobanner">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        
        <div class="footer">
            <van-goods-action>
                <van-goods-action-mini-btn icon="chat" text="客服" />
                <van-goods-action-mini-btn icon="cart" text="购物车" info="5"/>
                <van-goods-action-big-btn text="加入购物车" />
                <van-goods-action-big-btn text="立即购买" primary />
            </van-goods-action>
        </div>

        <div class="goods-name">
            {{goodsInfo.NAME}}
        </div>
        <div class="goods-price">
            {{goodsInfo.ORI_PRICE | money}}
        </div>

        <div class="goodsinfo">
            <van-tabs sticky swipeable>
                <van-tab title='详情'>
                    <div class="detatl" v-html="goodsInfo.DETAIL"></div>
                </van-tab>
                <van-tab title='评论'>
                    评论开发中....
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/serviceApi.config.js'
    import { Toast } from 'vant'
    import {toMoney} from '@/filter/moneyFilter.js';
    export default {
        data() {
            return {
                goodsId:'',
                images:[],
                goodsInfo:{}
            }
        },
        created(){
            this.goodsId = this.$route.query.goodsId
            this.getGoodInfo()
        },
        methods: {
            getGoodInfo() {
                axios({
                    url:url.getGoodsInfo,
                    method:'post',
                    data:{
                        goodsId:this.goodsId
                    }
                }).
                then(response=>{
                    if(response.data.code ==200 && response.data.message){
                        console.log(response.data.message)
                        this.images.push(response.data.message.IMAGE1) 
                        this.goodsInfo = response.data.message
                    }else{
                        Toast('数据获取异常')
                        setTimeout(()=>{
                            this.$router.push('/')
                        },3000)
                    }
                    
                }).
                catch(error=>{
                    Toast('数据获取异常')
                    setTimeout(()=>{
                        this.$router.push('/')
                    },3000)
                })
            },
            goBack(){
                this.$router.go(-1)
            }
        },
        filters:{
            money(m){
               return toMoney(m)
            }
        }
    }
</script>

<style scoped>
    .goods-name{background-color: #fff;font-size: 1rem;padding: 20px 10px;border-bottom: 1px solid #f1f1f1;}
    .goods-price{color: #f00;background-color: #fff;padding: 20px 10px}
    .detatl {font-size: 0;}
    .goodsinfo{padding-bottom: 50px;}
    .footer{position: fixed;z-index: 99;left: 0;bottom: 0;width: 100%}
    .goodsinfobanner{background-color: #fff;border-bottom: 1px solid #f1f1f1}
</style>