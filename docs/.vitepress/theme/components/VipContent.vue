<template>
    <div v-if="isMember" class="vip-content">
      <slot></slot>
    </div>
    <div v-else class="not-member">
      <p>This content is for members only. Please log in to view.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMember: false // 这里可以替换为实际的逻辑来判断用户是否是会员
      };
    },
    mounted() {
      // 模拟从本地存储获取登录状态
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (isAuthenticated === 'true') {
        this.isMember = true;
      }
    }
  };
  </script>
  
  <style scoped>
  .vip-content {
    border: 2px solid #4CAF50;
    padding: 2rem;
    background-color: #e8f9ef;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
  }
  
  .vip-content h2 {
    color: #4CAF50;
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .vip-content p,
  .vip-content ul,
  .vip-content ol,
  .vip-content pre {
    color: #333;
  }
  
  .not-member {
    border: 2px solid #FF5722;
    padding: 2rem;
    background-color: #fff8e1;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
    text-align: center;
  }
  
  .not-member p {
    color: #FF5722;
    font-size: 1.2rem;
  }
  
  .not-member a {
    color: #FF5722;
    text-decoration: underline;
  }
  
  .not-member a:hover {
    text-decoration: none;
  }
  </style>
  
  
  
  