import { defineConfig } from 'vitepress'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

// WARNING: This should be an environment variable, but VitePress does not support it.
const hostname = 'https://docs.displagent.io'
const ogImagePath = '/displagent-docs-og.png';
const twitterSite = '@displagent';
const twitterImageAlt = 'Displagent Docs'
const links = [];

export default defineConfig({
  title: 'Displagent Docs',
  description: 'The official docsite for Displagent.',
  cleanUrls: true,
  head: [
    // [
    //   'link',
    //   // { rel: 'icon', href: '/logo.svg' },
    //   { rel: 'icon', href: '/favicon.ico' }
    // ],
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
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/displagent' },
    ],
    nav: [
        { text: 'Setup', link: '/setup/' },
        { text: 'Report Slideshows', link: '/report-slideshows/' },
        { text: 'Dashboard Slideshows', link: '/dashboard-slideshows/'},
        { text: 'Autolaunch', link: '/autolaunch/' },
        { text: 'Utilities', link: '/utilities/' }
    ],
    sidebar: {
        '/setup/': [
          {
            text: 'Setup',
            items: [
              { text: 'Intro', link: '/setup/' },
              { text: 'What Is Displagent?', link: '/setup/what-is-displagent' },
              { text: 'Download and Install', link: '/setup/download-and-install' },
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
              { text: 'Delete a Report Slideshow', link: '/report-slideshows/delete-report-slideshow' }
            ]
          }
        ],
        '/dashboard-slideshows/': [
          {
            text: 'Dashboard Slideshows',
            items: [
              { text: 'Intro', link: '/dashboard-slideshows/' },
              { text: 'The Dashboard Slideshows Table', link: '/dashboard-slideshows/dashboard-slideshows-table' },
              { text: 'Create a Dashboard Slideshow', link: '/dashboard-slideshows/create-dashboard-slideshow' },
              { text: 'Launch a Dashboard Slideshow', link: '/dashboard-slideshows/launch-dashboard-slideshow' },
              { text: 'Delete a Dashboard Slideshow', link: '/dashboard-slideshows/delete-dashboard-slideshow' }
            ]
          }
        ],
        '/autolaunch/': [
          {
            text: 'Autolaunch',
            items: [
              { text: 'Intro', link: '/autolaunch/' },
              { text: 'Autolaunch Settings', link: '/autolaunch/autolaunch-settings' }
            ]
          }
        ]
    },
    search: {
      provider: 'local'
    },
    outline: [2,6],
    lastUpdatedText: 'Last Updated'
  },
  transformPageData(pageData, context) {

    ////////////////////////////////////////////////////////////////////
    // Get dynamic title
    ////////////////////////////////////////////////////////////////////
    const dynamicTitle = !pageData.title
      ? context.siteConfig.site.title
      : pageData.title;

    ////////////////////////////////////////////////////////////////////
    // Get dynamic titleTemplate
    ////////////////////////////////////////////////////////////////////
    const dynamicTitleTemplate = !pageData.titleTemplate
      ? context.siteConfig.site.title
      : pageData.titleTemplate;

    ////////////////////////////////////////////////////////////////////
    // Get dynamic description
    ////////////////////////////////////////////////////////////////////
    const dynamicDescription = !pageData.description
      ? context.siteConfig.site.description
      : pageData.description

    ////////////////////////////////////////////////////////////////////
    // Get dynamic route
    ////////////////////////////////////////////////////////////////////
    let route;

    // This returns the file extension.
    const pageRelativePathRaw = pageData.relativePath;
    // Handle the home page.
    if (pageRelativePathRaw === 'index.md') {
      route = hostname;
    }
    // Handle all other pages.
    else {
      // Remove the file extension.
      const pageRelativePathWithoutFileExtension = pageRelativePathRaw.replace('.md', '');
      // Remove the sub-home-page 'index' indicators.
      const pageRelativePathWithoutIndexInName = pageRelativePathWithoutFileExtension.replace('/index', '');
      const pageRelativePath = pageRelativePathWithoutIndexInName;
      // The hostname does not have a trailing slash, so add it here manually.
      route = hostname + '/' + pageRelativePath;
    }

    // pageData.frontmatter.head = [];

    return {
      frontmatter: {
        ...pageData.frontmatter,
        head: [

          ////////////////////////////////////////////////////////////////////
          // Add og:title
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'og:title',
              content: `${dynamicTitle}`
            }
          ],

          ////////////////////////////////////////////////////////////////////
          // Add og:description
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'og:description',
              content: `${dynamicDescription}`
            }
          ],

          ////////////////////////////////////////////////////////////////////
          // Add og:type
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'og:type',
              content: 'website'
            }
          ],

          ////////////////////////////////////////////////////////////////////
          // Add og:image
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'og:image',
              content: `${hostname + ogImagePath}`
            }
          ],

          ////////////////////////////////////////////////////////////////////
          // Add og:url
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'og:url',
              content: `${route}`
            }
          ],

          ////////////////////////////////////////////////////////////////////
          // Add twitter:card
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'twitter:card',
              content: 'summary_large_image'
            }
          ],

          ////////////////////////////////////////////////////////////////////
          // Add twitter:title
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'twitter:title',
              content: `${dynamicTitle}`
            }
          ],

          ////////////////////////////////////////////////////////////////////
          // Add twitter:description
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'twitter:description',
              content: `${dynamicDescription}`
            }
          ],

          ////////////////////////////////////////////////////////////////////
          // Add twitter:site
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'twitter:site',
              content: `${twitterSite}`
            }
          ],

          ////////////////////////////////////////////////////////////////////
          // Add twitter:image
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'twitter:image',
              content: `${hostname + ogImagePath}`
            }
          ],

          ////////////////////////////////////////////////////////////////////
          // Add twitter:image:alt
          ////////////////////////////////////////////////////////////////////
          [
            'meta',
            {
              name: 'twitter:image:alt',
              content: `${twitterImageAlt}`
            }
          ],

        ],
      },
    };
  },
  // From https://github.com/vuejs/vitepress/issues/520#issuecomment-1566062351
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },
  // From https://github.com/vuejs/vitepress/issues/520#issuecomment-1566062351
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: hostname
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },
})