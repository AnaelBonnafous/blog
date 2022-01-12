module.exports = {
  title: 'Blog d\'Anaël',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    dateFormat: 'DD/MM/YYYY',
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'web',
          link: 'https://anaelbonnafous.fr/',
        },
        {
          type: 'mail',
          link: 'mailto: anael.bonnafous@gmail.com',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/anaelbonnafous/',
        },
        {
          type: 'github',
          link: 'https://github.com/AnaelBonnafous/',
        },
        {
          type: 'instagram',
          link: 'instagram.com/anael_bonnafous/',
        },
      ],
      copyright: [
        {
          text: '© 2022 - Anaël Bonnafous - Tous droits réservés',
          link: 'https://anaelbonnafous.fr/',
        },
      ],
    },
    globalPagination: {
      prevText: '<',
      nextText: '>',
      lengthPerPage: '3',
    },
    sitemap: {
      hostname: 'https://blog.anaelbonnafous.fr',
    },
    feed: {
      canonical_base: 'https://blog.anaelbonnafous.fr',
      rss: true,
      atom: false,
      json: false,
    },
    smoothScroll: true,
  }
}