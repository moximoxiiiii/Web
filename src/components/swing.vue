<template>
    <div class="switch" id="switch-cnt">
            <div class="switch__circle"></div>
            <div class="switch__circle switch__circle--t"></div>
            <div class="switch__container" id="switch-c1">
              <h2 class="switch__title title">欢迎回来!</h2>
              <p class="switch__description description">已有帐号 登录与我们取得联系</p>
              <button class="switch__button button switch-btn" @click="change">去登录</button>
            </div>
            <div class="switch__container is-hidden" id="switch-c2">
              <h2 class="switch__title title">新朋友你好 !</h2>
              <p class="switch__description description">完善信息以注册账号</p>
              <button class="switch__button button switch-btn" @click="change">去注册</button>
            </div>
    </div>
</template>
     
<script setup lang="ts">
        const change = () => {
            const switchC1 = document.querySelector("#switch-c1") as any;
            const switchC2 = document.querySelector("#switch-c2") as any;
            const switchCircle = document.querySelectorAll(".switch__circle") as any;
            const switchCtn = document.querySelector("#switch-cnt") as any;  
            switchCtn.classList.add("is-gx");
            setTimeout(function(){
                switchCtn.classList.remove("is-gx");
            }, 1500)
            switchCtn.classList.toggle("is-txr");
            switchCircle[0].classList.toggle("is-txr");
            switchCircle[1].classList.toggle("is-txr");
            switchC1.classList.toggle("is-hidden");
            switchC2.classList.toggle("is-hidden");
        }
  </script>
     
    <style scoped>
    
    @import './login.css';

    </style>