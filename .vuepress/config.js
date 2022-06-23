module.exports = {
    base: '/ts-api-docs/',
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
        search: true,
        lastUpdated: '更新时间',
        nav: [{
                text: '2.3文档➡️',
                link: 'https://slimkit.github.io'
            },
            {
                text: '学习指南',
                items: [
                    { text: '安装教程', link: '/guide/installation/' },
                    { text: '升级指南', link: '/guide/upgrade/' },
                ]
            },
            {
                text: '数据字典',
                link: '/data-fields/'
            },
            {
                text: '常见问题',
                link: '/Q&A/'
            },
            {
                text: 'HTTP APIs',
                items: [
                    // { text: '核心', link: '/core/api/v2/system' },
                    { text: '序', link: '/api-v2/preface/' },
                    { text: '系统配置', link: '/api-v2/config/' },
                    { text: '登录/注册', link: '/api-v2/passport/' },
                    { text: '用户', link: '/api-v2/user/' },
                    { text: '动态', link: '/api-v2/feed/' },
                    { text: '圈子', link: '/api-v2/circle/' },
                    { text: '话题', link: '/api-v2/topic/' },
                    { text: '资讯', link: '/api-v2/info/' },
                    { text: '活动', link: '/api-v2/event/' },
                    { text: '商城', link: '/api-v2/mall/' },
                    { text: '知识', link: '/api-v2/knowledge/' },
                    { text: '小程序', link: '/api-v2/mini-program/' },
                    { text: '快递100', link: '/api-v2/kd100/' },
                    { text: '礼物/打赏', link: '/api-v2/reward/' },
                    { text: '任务', link: '/api-v2/task/' },
                    { text: '问答', link: '/api-v2/wenda/' },
                    { text: '条款,页面', link: '/api-v2/show-pages/' },
                    { text: '省市区', link: '/api-v2/location/' },
                    { text: '举报', link: '/api-v2/report/' },
                    { text: '文件存储', link: '/api-v2/storage/' },
                    { text: '环信', link: '/api-v2/easemob/' },
                    { text: '验证码', link: '/api-v2/verification_code/' },
                    { text: '标签', link: '/api-v2/tags/' },
                    { text: '广告', link: '/api-v2/ad/' },
                    { text: '积分', link: '/api-v2/currency/' },
                ]
            }
        ],
        sidebar: {
            '/guide/installation/': [
                '',
                'via-bt-panel',
                'build-install-php',
                'build-install-mysql',
                'build-install-nginx',
                'install-plus',
                'using-nginx-and-fpm-publish-website',
            ],
            '/api-v2/preface/': [''],
            '/api-v2/config/': [''],
            '/api-v2/passport/': [''],
            '/api-v2/user/': [
                '',
                'follow',
                'vip',
                'invite',
                'notification',
                'signin'
            ],
            '/api-v2/info/': [''],
            '/api-v2/event/': [
                ''
            ],
            '/api-v2/mall/': [
                '',
                'mall_brand',
                'shop_info',
                'refund',
            ],
            '/api-v2/knowledge/': [
                ''
            ],
            '/api-v2/feed/': [
                '',
                'feeds-likes',
                'feeds-collect',
                'feeds-comments'
            ],
            '/api-v2/circle/': [
                ''
            ],
            '/api-v2/topic/': [
                ''
            ],
            '/api-v2/kd100/': [
                ''
            ],
            '/api-v2/mini-program/': [''],
            '/api-v2/reward/': [''],
            '/api-v2/task/': [
                '',
                'checkin'
            ],
            '/api-v2/wenda/': [''],
            '/api-v2/show-pages/': [
                ''
            ],
            '/api-v2/location/': [
                ''
            ],
            '/api-v2/report/': [''],
            '/api-v2/storage/': [''],
            '/api-v2/easemob/': [''],
            '/api-v2/verification/': [''],
            '/api-v2/tags/': [''],
            '/api-v2/ad/': [''],
            '/api-v2/currency/': [''],
            '/Q&A/server/': [''],
            '/Q&A/android/': [''],
            '/Q&A/ios/': [''],
            '/Q&A/miniprogram/': [''],
        }
    }
}