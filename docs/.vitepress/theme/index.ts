import MyLayout from './MyLayout.vue';
import DefaultTheme from 'vitepress/theme';
import Footer from './Footer.vue';
// import "./src/styles/index.css";
// import '@vitepress/dist/client/theme-default/styles/index.css';
import { 
  NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'


export default {
  extends:DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('Footer', Footer); // 注册全局组件
    app.use(NolebaseGitChangelogPlugin)
  }
};

