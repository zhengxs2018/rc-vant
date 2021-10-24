import { defineConfig } from 'dumi'

// more config: https://d.umijs.org/config
export default defineConfig({
  mode: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  title: 'Vant React',
  navs: [
    {
      title: '指南',
      path: '/guide/quick-start',
    },
    {
      title: '组件',
      path: '/components/button',
    },
    {
      title: 'hooks',
      path: '/hooks/use-bem',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
  ],
  menus: {
    // '/guide': [
    //   {
    //     title: '快速开始',
    //     children: [
    //       { path: '/guide/quick-start.md' }
    //     ]
    //   },
    //   {
    //     title: 'FAQs',
    //     path: '/guide/faq'
    //   }
    // ]
  },
  outputPath: 'docs-dist',
})
