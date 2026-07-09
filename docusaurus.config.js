// @ts-check
const config = {
  title: 'Front End Carbon Recovery',
  tagline: 'Recover solids early. Simplify treatment. Create value.',
  favicon: 'img/favicon.ico',
  url: 'https://wbdongithub.github.io',
  baseUrl: '/Front-End-Carbon-Recovery/',
  organizationName: 'wbdongithub',
  projectName: 'Front-End-Carbon-Recovery',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: 'https://github.com/wbdongithub/Front-End-Carbon-Recovery/tree/main/',
        },
        blog: false,
        theme: {customCss: require.resolve('./src/css/custom.css')},
      }),
    ],
  ],
  themeConfig: ({
    navbar: {
      title: 'FECR',
      logo: {alt: 'FECR logo', src: 'img/fecr-logo.svg'},
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/docs/why-fecr/why-plants-become-solids-constrained', label: 'Why FECR', position: 'left'},
        {to: '/docs/process/overview', label: 'Process', position: 'left'},
        {to: '/docs/implementation/staged-roadmap', label: 'Implementation', position: 'left'},
        {to: '/docs/demonstrations/demo-program', label: 'Demonstrations', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Start', items: [{label: 'Why plants become constrained', to: '/docs/why-fecr/why-plants-become-solids-constrained'}, {label: 'FECR process', to: '/docs/process/overview'}]},
        {title: 'Build', items: [{label: 'Implementation roadmap', to: '/docs/implementation/staged-roadmap'}, {label: 'Technical library', to: '/docs/technical-library/library-overview'}]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Front End Carbon Recovery Project.`,
    },
    colorMode: {defaultMode: 'light', disableSwitch: false},
    prism: {additionalLanguages: []},
  }),
};
module.exports = config;
