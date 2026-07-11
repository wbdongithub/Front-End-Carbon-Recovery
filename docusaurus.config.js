const config = {
  title: 'Front End Carbon Recovery',
  tagline: 'Recover solids early. Simplify treatment. Create value.',
  favicon: 'img/fecr-mark.svg',

  url: 'https://wbdongithub.github.io',
  baseUrl: '/Front-End-Carbon-Recovery/',

  organizationName: 'wbdongithub',
  projectName: 'Front-End-Carbon-Recovery',

  onBrokenLinks: 'throw',
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
      logo: {
        alt: 'FECR mark',
        src: 'img/fecr-mark.svg',
      },
      items: [
        {to: '/guide/why-fecr', label: 'Why FECR?', position: 'left'},
        {to: '/guide/process-overview', label: 'Process', position: 'left'},
        {
          to: '/guide/implementation',
          label: 'Implementation',
          position: 'left',
        },
        {
          to: '/guide/demonstrations',
          label: 'Demonstrations',
          position: 'left',
        },
        {
          to: '/guide/technical-library',
          label: 'Technical Library',
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
          title: 'Explore',
          items: [
            {label: 'Why FECR?', to: '/guide/why-fecr'},
            {label: 'How it works', to: '/guide/process-overview'},
            {
              label: 'Implementation stages',
              to: '/guide/implementation',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Demonstrations', to: '/guide/demonstrations'},
            {
              label: 'Technical Library',
              to: '/guide/technical-library',
            },
          ],
        },
      ],
      copyright: 'Front End Carbon Recovery — Prototype v0.1',
    },

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
