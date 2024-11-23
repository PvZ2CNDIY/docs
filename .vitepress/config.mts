import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PvZ2中国版 高级创意庭院",
  description: "PvZ2中国版 高级创意庭院",
  base: '/docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指引', link: '/guide' },
      { text: '参考', link: '/reference' },
      { text: '创作平台(施工中)', link: ''}
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: 'JSON语法简短介绍', link: '/guide/json' },
            { text: '基础', 
              items: [
                { text: '文件结构', link: '/guide/fundamentals/structure' }
              ]
            },
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          items: [
            { 
              text: '类型', 
              items: [
                { text: '僵尸', link: '/reference/types/zombies' },
                { text: '植物', link: '/reference/types/plants' },
                { text: '模块', link: '/reference/types/modules' }
              ]
            },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PvZ2CNDIY/docs' }
    ]
  }
})
