<template>
    <div class="container">
      <div class="sidebar">
        <ul>
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/about">数据分析报告</router-link></li>
        </ul>
      </div>
      <div class="content">
        <div class="top-content">
          <h1>上传日志</h1>
          <div class="flex-space"></div> 
          <input type="file" ref="fileInput" style="display: none;" @change="HandleFile">
          <button class="uploadbutton" @click="UploadFile">上传文件</button>
        </div>
        <div class="bottom-content">
          <ul>
            <li v-for="(file,index) in uploadedfiles" :key="index" class="file-item">{{ file.name }}-{{ file.uploadtime }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Layout',
    methods:{
      UploadFile(){
        this.$refs.fileInput.click();
      },
      HandleFile(event){
        const file = event.target.files[0];
        const uploadtime = new Date().toLocaleString();
        const fileinfo = {
          name:file.name,
          uploadtime:uploadtime
        };
        this.uploadedfiles.push(fileinfo);
      }
    },
    data(){
      return{
          uploadedfiles:[]
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
  }
  
  .sidebar {
    background-color: #333;
    color: #fff;
    width: 200px;
    height: 100vh;
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar ul li {
    padding: 10px;
  }
  
  .sidebar ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  .sidebar ul li a:hover {
    background-color: #555;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  
  .top-content,
  .bottom-content {
    background-color: #f4f4f4;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    align-items: center; 
    
  }
  
  .top-content h1 {
    margin-right: auto;
  }
  
  .flex-space {
    flex-grow: 1; 
  }
  
  .uploadbutton {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  .file-item{
    margin-bottom: 8px;
  }
  </style>
  