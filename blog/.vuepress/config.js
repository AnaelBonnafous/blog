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
    comment: {
      service: 'vssue',
      owner: 'AnaelBonnafous',
      repo: 'blog',
      clientId: 'ab45473b39ee20a14529',
      clientSecret: '16267940d7ea220de8894f611c4354265f615b27',
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