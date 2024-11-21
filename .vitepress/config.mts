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
      { text: '参考', link: '/reference' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '施工中', link: '/guide/' },
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
                { text: '僵尸', link: '/reference/types/zombies' }
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
