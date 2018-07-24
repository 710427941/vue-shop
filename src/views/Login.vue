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
        created(){
            if(localStorage.userInfo){
                Toast.success('您已经登录过了')
                this.$router.push('/')
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
                    url:url.loginUser,
                    method:"post",
                    data:{
                        userName:this.username,
                        password:this.password
                    }
                })
                .then(response=>{
                   if(response.data.code=200 && response.data.message){
                        new Promise((resolve,reject)=>{
                            localStorage.userInfo = {userName:this.userName}
                            setTimeout(()=>{resolve()},500)
                        }).then(()=>{
                            Toast.success('登录成功')
                            this.$router.push('/')
                        }).catch(error=>{
                            Toast.fail('登录状态保存失败')
                            console.log(error)
                        })
                   }else{
                       Toast.fail('登录失败')
                       this.openLoading = false
                   }
                })
                .catch((error)=>{
                    Toast.fail('登录失败')
                    this.openLoading = false
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