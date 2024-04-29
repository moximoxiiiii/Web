<template>
  <div class="body">
      <div class="main">
        <swing/>
        <sign_up/>
        <sign_in/>
      </div>
  </div>
</template>

<script>
import sign_in from "./components/sign_in.vue";
import sign_up from "./components/sign_up.vue";
import swing from "./components/swing.vue";
import MainWeb from "./components/MainWeb.vue";

export default{
  components:{
      sign_in,
      sign_up,
      swing,
      MainWeb
  }
}
</script>

<style scoped>
  *,*::after,*::before{
      margin:0;
      padding: 0;
      box-sizing: border-box;
      user-select: none;
  }
  .body{
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Monsterrat",sans-serif;
      font-size: 12px;
      background-color: #ecf0f3;
      color: #a0a5a8;
  }
  .main{
      position: relative;
      width: 1000px;
      min-width: 1000px;
      min-height: 600px;
      height: 600px;
      padding:25px;
      background-color: #ecf0f3;
      box-shadow: 10px 10px 10px #d1d9e6,  -10px -10px 10px #f9f9f9;
      border-radius: 20px;
      overflow: hidden;
      @media(max-width:1200px){
          .main{
              transform: scale(0.7);
          }
      }
      @media(max-width:1000px){
          .main{
              transform:scale(0.6);
          }
      }
      @media(max-width:800px){
          .main{
              transform:scale(0.5);
          }
      }
  }   @media(max-width:800px){
          .main{
              transform:scale(0.4);
          }
      }
</style>