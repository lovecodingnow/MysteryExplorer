<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-section about-us">
          <h4>关于我们</h4>
          <p>一个学生尝试分享自己所学的计算机知识，希望和大家共同进步！</p>
        </div>
        <div class="footer-section quick-links">
          <h4>快速链接</h4>
          <ul>
            <li><router-link to="/">首页</router-link></li>
          </ul>
        </div>
        <div class="footer-section contact">
          <h4>联系我</h4>
          <p>邮箱: lovecodingnow@163.com</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright © 2024 galgame.art. All rights reserved.</p>
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
          豫ICP备2024066863号-1
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
};
</script>

<style scoped>
.site-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 40px 30px;
  /* 固定位置 */
  /* position: fixed;  */
  /* 粘贴到底部 */
  /* bottom: 0;  */
  width: 100%; /* 占据整个宽度 */
  z-index: 1000; /* 设置较高的 z-index 值以确保它在最上层 */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin: 0 15px;
}

.footer-section h4 {
  color: #1abc9c;
  margin-bottom: 10px;
}

.footer-section p {
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 10px 0;
}

.footer-section ul li a {
  color: #ecf0f1;
  text-decoration: none;
}

.footer-section ul li a:hover {
  color: #1abc9c;
}

.footer-bottom {
  margin-top: 20px;
  text-align: center;
}

.footer-bottom p,
.footer-bottom a {
  color: #bdc3c7;
  font-size: 0.9em;
}

.footer-bottom a:hover {
  color: #1abc9c;
}
</style>



