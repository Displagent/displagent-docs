export default {
    title: 'Displagent Docs',
    description: 'The official docsite for Displagent.',
    cleanUrls: true,
    head: [
      [
        'link',
        { rel: 'icon', href: '/logo.svg' }
      ],
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
    themeConfig: {
      logo: '/logo.svg',
      nav: [
          { text: 'Setup', link: '/setup/' },
          { text: 'Report Slideshows', link: '/report-slideshows/' }
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
          '/report-slideshows/': [
            {
              text: 'Report Slideshows',
              items: [
                { text: 'Intro', link: '/report-slideshows/' },
                { text: 'The Report Slideshows Table', link: '/report-slideshows/report-slideshows-table' },
                { text: 'Create a Report Slideshow', link: '/report-slideshows/create-report-slideshow' },
                { text: 'Build a Report Slideshow', link: '/report-slideshows/build-report-slideshow' },
                { text: 'Launch a Report Slideshow', link: '/report-slideshows/launch-report-slideshow' },
                {  text: 'Delete a Report Slideshow', link: '/report-slideshows/delete-report-slideshow' }
              ]
            }
          ]
      },
      outline: [2,6],
      lastUpdatedText: 'Last Updated'
    }
}