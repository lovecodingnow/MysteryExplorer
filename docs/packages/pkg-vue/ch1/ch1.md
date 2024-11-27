# 第一章

::: code-group

```vue [vuejs]:line-numbers
<template>
  
</template>
```

```vue [vuets]:line-numbers
<template>
  
</template>
```

:::

```vue:line-numbers
<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-section about-us">
          <h4>关于我们</h4>
          <p>一个学生尝试分享自己所学的计算机知识，希望和大家共同进步！</p> // [!code focus]
        </div>
        <div class="footer-section quick-links">
          <h4>快速链接</h4>
          <ul>
            <li><router-link to="/">首页</router-link></li> // [!code highlight]
          </ul>
        </div>
        <div class="footer-section contact">
          <h4>联系我</h4>
          <p>邮箱: lovecodingnow@163.com</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright © 2024 galgame.art. All rights reserved.</p>
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          豫ICP备2024066863号-1
        </a>
      </div>
    </div>
  </footer>
</template>
```
