module.exports = {
  page: {
    layout: 'default',
    toc: true
  },
  site: {
    // editSourceUrl: 'https://github.com/<git-org>/<git-repository>/tree/master/SYN100',
    title: 'SYN 100',
    // url: 'https://<git-org>.github.io/<git-repository>/'
  },
  template: {
    name: 'default',
    cssFiles: [
      '/css/main.css'
    ],
    cssVars: {
      brandColor: '#00A288',
      brandColorLight: '#8BDBCD',
      brandColorDark: '#00382F'
    },
    favicon: '/SYNbol_favicon.png',
    finePrint: '<p>This is some mighty find print. Yes, some mighty fine print.</p>',
    footerLinks: [
      { title: 'Github', href: 'https://github.com/<git-org>/<git-repository>' }
    ]
  }
}