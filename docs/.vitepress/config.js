export default {
    title: 'Displagent Docs',
    description: 'The official docsite for Displagent.',
    cleanUrls: true,
    themeConfig: {
        logo: '/logo.png',
        head: [
          [
            'script',
            { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-ZYJNTMM4SR' }
          ],
          [
            'script',
            {},
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-ZYJNTMM4SR')"
          ]
        ],
        nav: [
            { text: 'Setup', link: '/setup/' }
        ],
        sidebar: {
            '/setup/': [
              {
                text: 'Setup',
                items: [
                  { text: 'Intro', link: '/setup/' },
                  { text: 'Required Credentials', link: '/setup/required-credentials' },
                  { text: 'Power BI Service Account', link: '/setup/power-bi-service-account' },
                  { text: 'Azure App Registration', link: '/setup/azure-app-registration' },
                ]
              }
            ],
        },
        outline: [2,6],
        lastUpdatedText: 'Last Updated'
      }
}