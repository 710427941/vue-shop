<template>
    <div>
        <div class="navbar-div">
             <van-nav-bar   title="类别列表" /> 
        </div>
        <van-row>
        <van-col span="6">
            <div id="leftNav">
                <ul>
                    <li v-for="(item,index) in category" :key="index">
                        {{ item.MALL_CATEGORY_NAME}}
                    </li>
                </ul>
            </div>
        </van-col>
        <van-col span="18">右侧列表</van-col>
    </van-row>
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/serviceApi.config.js'
    import { Toast } from 'vant'
    export default {
        data() {
            return {
                category: []
            }
        },
        created(){
            this.getCategory()
        },
        methods: {
            getCategory() {
                axios({
                    url:url.getCategoryList,
                    method:'get'
                })
                .then(response=>{
                    if(response.data.code==200 && response.data.message){
                        this.category = response.data.message
                    }else{
                        Toast('服务器错误，获取数据失败')
                    }

                })
                .catch(error=>{
                    Toast('服务器错误，获取数据失败')
                })
            }
        },
    }
</script>

<style scoped>
    #leftNav{height: 100;background-color: #fff}
    #leftNav li{height: 3rem;line-height: 3rem;border-bottom: 1px solid #f1f1f1;text-align: center;color: #333}
    #leftNav li.active{background-color: red;color: #fff;border-bottom: 1px solid red}
</style>