<template>
    <div>
        <van-nav-bar
            title="商品详情"
            left-text=""
            left-arrow
            @click-left = "goBack"
        />
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" width="100%"/>
            </van-swipe-item>
           
        </van-swipe>
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/serviceApi.config.js'
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                goodsId:'',
                images:[]
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
                        this.images.push(response.data.message.IMAGE1) 
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
    }
</script>

<style scoped>

</style>