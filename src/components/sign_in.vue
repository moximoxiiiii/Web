<template>
    <div class="container b-container" id="b-container">
        <form class="form" id="b-form" methods="" action="">
            <h2 class="form_title title" id="title">登录账号</h2>
            <div>

        

            </div>
            <input class="input_form" id="input" type="text" name="username" placeholder="用户名" v-model="username">
            <input class="input_form" id="input" type="text" name="password" placeholder="密码" v-model="password">
            <button class="form_button button submit" @click="login">登录</button>
        </form>
    </div>
</template>
    
<script>
    
export default{
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        login(event){
            /*if(this.username=="showaccount" && this.password=="123456"){
                event.preventDefault();
                console.log("成功")
                this.$router.push('/components/MainWeb');
            }*/
            event.preventDefault();
            console.log("成功")
            this.$router.push({name:'/MainWeb'});
        }
    }

}
</script>

<style>

@import './login.css'

</style>