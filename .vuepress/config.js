module.exports = {
  base: '/',
  title: 'Plus (ThinkSNS+)',
  description: 'Plus (ThinkSNS+) 是使用 Laravel 框架开发；一个功能强大、易于开发和动态拓展的社交系统。',
  head: require('./head'),
  dest: 'docs',
  ga: undefined,
  serviceWorker: false,
  locales: require('./locales'),
  markdown: require('./markdown'),
  chainWebpack: require('./webpack'),
  evergreen: false,
  themeConfig: {
    repo: 'slimkit/plus',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: '协助改善此文档',
    docsBranch: 'docs',
    sidebar: 'auto',
    search: true,
    lastUpdated: '更新时间',
    nav: [
      {
        text: '学习指南',
        items: [
          { text: '安装教程', link: '/guide/installation/' },
          { text: '升级指南', link: '/guide/upgrade/' },
        ]
      },
      {
        text: 'HTTP APIs',
        items: [
          // { text: '核心', link: '/core/api/v2/system' },
          { text: '用户', link: '/api-v2/user/' },
          { text: '资讯', link: '/api-v2/info/' },
          { text: '活动', link: '/api-v2/event/' },
          { text: '商城', link: '/api-v2/mall/' },
          { text: '知识', link: '/api-v2/knowledge/' },
          { text: '动态', link: '/api-v2/feed/' },
          { text: '小程序', link: '/api-v2/mini-program/' },
          { text: '快递100', link: '/api-v2/kd100/' },
          { text: '打赏', link: '/api-v2/reward/' },
          { text: '任务', link: '/api-v2/task/' },
          { text: '问答', link: '/api-v2/wenda/' },
        ]
      }
    ],
    sidebar: {
      '/guide/installation/': [
        '',
        'build-install-php',
        'build-install-mysql',
        'build-install-nginx',
        'install-plus',
        'using-nginx-and-fpm-publish-website',
      ],
      '/api-v2/info/': [''],
      '/api-v2/user/': [
        '',
        'vip',
        'notification'
      ],
      '/api-v2/event/': [
        ''
      ],
      '/api-v2/mall/': [
        '',
        'mall_brand',
        'shop_info'
      ],
      '/api-v2/knowledge/': [
        ''
      ],
      '/api-v2/feed/': [
        '',
        'other'
      ],
      '/api-v2/kd100/': [
        ''
      ],
      '/api-v2/mini-program/': [''],
      '/api-v2/reward/': [''],
      '/api-v2/task/': [''],
      '/api-v2/wenda/': ['']
    }
  }
}
