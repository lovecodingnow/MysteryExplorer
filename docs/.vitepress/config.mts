import { defineConfig } from 'vitepress'
import { La51Plugin } from 'vitepress-plugin-51la'
import { oml2d } from 'vite-plugin-oh-my-live2d';
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
import lightbox from 'vitepress-plugin-lightbox'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    //
    plugins: [
      La51Plugin({
        id: '3KQxFliHZChBtUAa',
        ck: '3KQxFliHZChBtUAa'
      }),
      oml2d({
        models: [
          {
            path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
            position: [-10, 20]
          },
          {
            path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
            scale: 0.4,
            position: [0, 50],
            stageStyle: {
              height: 300
            }
          }
        ],

        tips: {
          idleTips: {
            wordTheDay: (wordTheDayData) => {
              return wordTheDayData.hitokoto;
            }
          }
        }
      }),
      AnnouncementPlugin({
        title: '公告',
        body: [
          { type: 'text', content: '欢迎大家来访问我的博客！' },
          { type: 'image', src: '/logo.png', style: 'display: inline-block;width:46%;padding-right:6px' },
          { type: 'image', src: '/logo.png', style: 'display: inline-block;width:46%;padding-right:6px' },
        ],
        footer: [
          { type: 'text', content: '目前还在初步建设中' },
          { type: 'button', content: '联系我', link: 'https://gitee.com/lovecodingnow',props:{
            type: 'success'
          } }
        ],
        reopen: true,
        duration: 3000
      }),
      GitChangelog({ 
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/nolebase/integrations', 
      }), 
      GitChangelogMarkdownSection(), 
    ]
  },
  lang: 'zh-CN',
  title: "学海探秘",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  description: "学习永无止境！",
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学习内容', items: [
          { text: 'Markdown语法学习', link: '/markdown-examples' },
          { text: '实战项目记录', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/lovecodingnow' },
      { icon: 'github', link: 'https://github.com/lovecodingnow' },
      // { icon: 'eml' , link: 'mailto:lovecodingnow@163.com' },
      { icon: 'csdn', link: 'https://blog.csdn.net/2302_81562975?type=blog' }
    ],

    lastUpdated: {
      text: '更新于：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    returnToTopLabel: '返回顶部'
  },
  lastUpdated: true,
  rewrites: {
    'packages/:pkg/src/pkg-index.md': ':pkg/index.md',// 重写规则
    'packages/:pkg/src/:path/:file.md': ':pkg/:path/:file.md'
  },
  markdown:{
    config:(md)=>{
      md.use(lightbox,{})
    }
  }
})
