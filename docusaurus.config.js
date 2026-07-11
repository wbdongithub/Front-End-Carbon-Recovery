const config = {
  title: 'Front End Carbon Recovery',
  tagline: 'Recover solids early. Simplify treatment. Create value.',

  url: 'https://wbdongithub.github.io',
  baseUrl: '/Front-End-Carbon-Recovery/',

  organizationName: 'wbdongithub',
  projectName: 'Front-End-Carbon-Recovery',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'guide',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'FECR',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          label: 'Explore FECR',
          position: 'left',
        },
        {
          href: 'https://github.com/wbdongithub/Front-End-Carbon-Recovery',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'FECR',
          items: [
            {
              label: 'Explore the site',
              to: '/guide/intro',
            },
          ],
        },
      ],
      copyright:
        'Front End Carbon Recovery — Prototype Version 0.1',
    },

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
