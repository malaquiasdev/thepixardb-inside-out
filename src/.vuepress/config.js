const { description } = require('../../package');

module.exports = {
  title: 'ThePixarDB',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Ecosystem',
        activeMatch: `^/ecosystem/`,
        items: [
          {
            text: 'Metadata Aggregation',
            link: '/ecosystem/walle/',
          }
        ],
      },
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Github',
        link: 'https://github.com/search?q=malaquiasdev%2Fthepixardb',
        target: '_blank',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
            'api/languages',
            'api/json',
            'api/authentication',
            'api/http-methods',
            'api/status-codes',
            'api/external-ids',
          ],
        },
        {
          title: 'Resources',
          collapsable: false,
          children: ['api/resources/movies'],
        },
      ],
      '/ecosystem/walle/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
            '/ecosystem/walle/movie',
            '/ecosystem/walle/image',
          ],
        },
      ]
    },
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
