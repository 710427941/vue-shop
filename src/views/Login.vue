<template>
    <div>
        <van-nav-bar
            title="用户登录"
            left-text="返回"
            left-arrow
            @click-left = "goBack"
        />

        <div class="register-panel">
            <van-field
                v-model="username"
                label="用户名"
                clearable
                placeholder="请输入用户名"
                required
                :error-message="usernameErrorMsg"
                
            />
            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入用户密码"
                required
                :error-message="passwordErrorMsg"
            />
            <div class="register-bunnton">
                <van-button type="primary" @click="loginAction" size="large" :loading="openLoading">登录</van-button>
            </div>
        </div>

    </div>
</template>

<script>
    import axios  from 'axios'
    import { Toast } from 'vant'
    import url from '@/serviceApi.config.js'
    export default {
        data() {
            return {
                username: "",
                password: "",
                openLoading:false,
                usernameErrorMsg:"",
                passwordErrorMsg:""
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            loginAction(){
                this.checkFrom() && this.axiosLoginUser()
            },
            axiosLoginUser(){
                 this.openLoading = true
                axios({
                    url:url.resisterUser,
                    method:"post",
                    data:{
                        userName:this.username,
                        password:this.password
                    }
                })
                .then(response=>{
                    if(response.data.code==200){
                        Toast.success(response.data.message)
                        this.$router.push('/')
                    }else{
                        console.log(response.data.message)
                        Toast.fail('注册失败')
                        this.openLoading = false
                    }
                })
                .catch((error)=>{
                    this.openLoading = false
                    console.log(error)
                    Toast.fail('注册失败')
                })
            },
            checkFrom(){
                let isOk = true

                if(this.username.length<5){
                    this.usernameErrorMsg = "用户名不能小于5位"
                    isOk = false
                }else{
                    this.usernameErrorMsg = ''
                }

                if(this.password.length<6){
                    this.passwordErrorMsg = "密码不能少于6位"
                    isOk = false
                }else{
                    this.passwordErrorMsg = ''
                }

                return isOk
            }
        }
    }
</script>

<style scoped>
    .register-panel{
        margin: 20px 10px 10px 10px;
        background-color: #fff;
    }

    .register-bunnton{
        margin-top: 20px;
    }
</style>