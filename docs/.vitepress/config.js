export default {
    title: 'Displagent Docs',
    description: 'The official docsite for Displagent.',
    cleanUrls: true,
    themeConfig: {
        logo: '/my-logo.svg',
        nav: [
            { text: 'Setup', link: '/setup/' }
        ],
        sidebar: {
            '/setup/': [
              {
                text: 'Setup',
                items: [
                  { text: 'Intro', link: '/setup/' },
                  { text: 'Required Credentials', link: '/guide/one' },
                  { text: 'Azure App Registration', link: '/' },
                  { text: 'Power BI Service Account', link: '/' }
                ]
              }
            ],
        }
      }
}