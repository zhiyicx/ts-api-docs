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
        nav: [
            {
                text: '安装教程',
                link: '/v3/guide/installation/',
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
                    { text: '序', link: '/v2/api-v2/preface/' },
                    { text: '系统配置', link: '/v2/api-v2/config/' },
                    { text: '登录/注册', link: '/v2/api-v2/passport/' },
                    { text: '用户', link: '/v2/api-v2/user/' },
                    { text: '动态', link: '/v2/api-v2/feed/' },
                    { text: '圈子', link: '/v2/api-v2/circle/' },
                    { text: '话题', link: '/v2/api-v2/topic/' },
                    { text: '资讯', link: '/v2/api-v2/info/' },
                    { text: '活动', link: '/v2/api-v2/event/' },
                    { text: '商城', link: '/v2/api-v2/mall/' },
                    { text: '知识', link: '/v2/api-v2/knowledge/' },
                    { text: '小程序', link: '/v2/api-v2/mini-program/' },
                    { text: '快递100', link: '/v2/api-v2/kd100/' },
                    { text: '礼物/打赏', link: '/v2/api-v2/reward/' },
                    { text: '任务', link: '/v2/api-v2/task/' },
                    { text: '问答', link: '/v2/api-v2/wenda/' },
                    { text: '条款,页面', link: '/v2/api-v2/show-pages/' },
                    { text: '省市区', link: '/v2/api-v2/location/' },
                    { text: '举报', link: '/v2/api-v2/report/' },
                    { text: '文件存储', link: '/v2/api-v2/storage/' },
                    { text: '环信', link: '/v2/api-v2/easemob/' },
                    { text: '验证码', link: '/v2/api-v2/verification_code/' },
                    { text: '标签', link: '/v2/api-v2/tags/' },
                    { text: '广告', link: '/v2/api-v2/ad/' },
                    { text: '积分', link: '/v2/api-v2/currency/' },
                ]
            },
            {
                text: 'TS2.3',
                items: [
                    { text: '2.3文档', link: 'https://slimkit.github.io' },
                    { text: '安装教程', link: '/v2/guide/installation/' },
                    { text: '升级指南', link: '/v2/guide/upgrade/' },
                ]
            },
        ],
        sidebar: {
            '/v3/guide/installation/': [
                '',
                'server',
                'windows',
                'mac',
                'upgrade'
            ],
            '/v2/guide/installation/': [
                '',
                'via-bt-panel',
                'build-install-php',
                'build-install-mysql',
                'build-install-nginx',
                'install-plus',
                'using-nginx-and-fpm-publish-website',
            ],
            '/v2/api-v2/preface/': [''],
            '/v2/api-v2/config/': [''],
            '/v2/api-v2/passport/': [''],
            '/v2/api-v2/user/': [
                '',
                'follow',
                'vip',
                'invite',
                'notification',
                'signin'
            ],
            '/v2/api-v2/info/': [''],
            '/v2/api-v2/event/': [
                ''
            ],
            '/v2/api-v2/mall/': [
                '',
                'mall_brand',
                'shop_info',
                'refund',
            ],
            '/v2/api-v2/knowledge/': [
                ''
            ],
            '/v2/api-v2/feed/': [
                '',
                'feeds-likes',
                'feeds-collect',
                'feeds-comments'
            ],
            '/v2/api-v2/circle/': [
                ''
            ],
            '/v2/api-v2/topic/': [
                ''
            ],
            '/v2/api-v2/kd100/': [
                ''
            ],
            '/v2/api-v2/mini-program/': [''],
            '/v2/api-v2/reward/': [''],
            '/v2/api-v2/task/': [
                '',
                'checkin'
            ],
            '/v2/api-v2/wenda/': [''],
            '/v2/api-v2/show-pages/': [
                ''
            ],
            '/v2/api-v2/location/': [
                ''
            ],
            '/v2/api-v2/report/': [''],
            '/v2/api-v2/storage/': [''],
            '/v2/api-v2/easemob/': [''],
            '/v2/api-v2/verification/': [''],
            '/v2/api-v2/tags/': [''],
            '/v2/api-v2/ad/': [''],
            '/v2/api-v2/currency/': [''],
            '/Q&A/server/': [''],
            '/Q&A/android/': [''],
            '/Q&A/ios/': [''],
            '/Q&A/miniprogram/': [''],
        }
    }
}