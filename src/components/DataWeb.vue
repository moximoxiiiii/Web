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
          <h1>分析报告</h1>
        </div>
        <div class="bottom-content">
          <ul class="image-list">
            <li>
              <img src="./assets/IMG1.JPG" alt="Image 1">
            </li>
            <li>
              <img src="./assets/IMG2.JPG" alt="Image 2">
            </li>
            <li>
              <img src="./assets/IMG3.JPG" alt="Image 3">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Layout',
    methods: {},
    data() {
      return {}
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
  
  .bottom-content .image-list {
    list-style-type: none;
    padding: 0;
    display: flex;
  }
  
  .bottom-content .image-list li {
    margin-right: 40px; /* 调整图片之间的间距 */
  }
  
  .bottom-content .image-list li:last-child {
    margin-right: 0; /* 最后一个图片无需右边距 */
  }
  
  .bottom-content .image-list img {
    max-width: 400px; /* 图片最大宽度 */
    max-height: 400px; /* 图片最大高度 */
  }
  </style>
  