import { defineConfig } from 'dumi'

// more config: https://d.umijs.org/config
export default defineConfig({
  mode: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  title: 'Vant React',
  outputPath: 'docs-dist',
  exportStatic: {},
  navs: [
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'Hooks',
      path: '/hooks',
    },
    {
      title: '相关链接',
      children: [
        {
          title: '更新日志',
          path: 'https://github.com/zhengxs2018/rc-vant/blob/main/CHANGELOG.md'
        }
      ]
    },
    // {
    //   title: '多语言',
    //   children: [
    //     {
    //       title: '简体中文',
    //       path: '/zh-CN'
    //     },
    //     {
    //       title: 'English',
    //       path: '/'
    //     }
    //   ]
    // },
    {
      title: 'GitHub',
      path: 'https://github.com/zhengxs2018/rc-vant',
    },
  ],
  menus: {
    '/guide': [
      {
        title: '快速开始',
        path: '/guide/quick-start'
      },
      {
        title: '进阶用法',
        path: '/guide/advanced-usage'
      },
      {
        title: '常见问题',
        path: '/guide/faq'
      }
    ],
    '/components': [
      {
        title: '基础',
        children: [
          {
            title: 'Button 按钮',
            path: '/components/button'
          },
          {
            title: 'Icon 图标',
            path: '/components/icon'
          }
        ]
      },
      {
        title: '数据展示',
        children: [
          {
            title: 'Badge 徽标',
            path: '/components/badge'
          }
        ]
      },
      {
        title: '反馈',
        children: [
          {
            title: 'Loading 加载',
            path: '/components/loading'
          }
        ]
      },
      {
        title: '其他',
        children: [
          {
            title: 'ConfigProvider 配置',
            path: '/components/config-provider'
          }
        ]
      }
    ],
    '/hooks': [
      {
        title: 'useBEM',
        path: '/hooks/use-bem'
      }
    ]
  },
})
