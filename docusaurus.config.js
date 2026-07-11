const config = {
  title: 'Front End Carbon Recovery',
  tagline: 'Recover solids early. Simplify treatment. Create value.',
  favicon: 'img/fecr-mark.svg',
  url: 'https://wbdongithub.github.io',
  baseUrl: '/Front-End-Carbon-Recovery/',
  organizationName: 'wbdongithub',
  projectName: 'Front-End-Carbon-Recovery',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'throw',
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'guide',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/fecr-flow.svg',
    metadata: [
      {name: 'keywords', content: 'wastewater, microscreen, rotating belt filter, RBF, biosolids, pyrolysis, biochar'},
    ],
    navbar: {
      title: 'FECR',
      hideOnScroll: true,
      logo: {alt: 'FECR mark', src: 'img/fecr-mark.svg'},
      items: [
        {to: '/guide/why-fecr', label: 'Why FECR?', position: 'left'},
        {to: '/guide/process-overview', label: 'Process', position: 'left'},
        {to: '/guide/implementation', label: 'Implementation', position: 'left'},
        {to: '/guide/demonstrations', label: 'Demonstrations', position: 'left'},
        {to: '/guide/technical-library', label: 'Library', position: 'left'},
        {href: 'https://github.com/wbdongithub/Front-End-Carbon-Recovery', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Understand FECR', items: [
          {label: 'Why FECR?', to: '/guide/why-fecr'},
          {label: 'How it works', to: '/guide/process-overview'},
          {label: 'Is my plant a candidate?', to: '/guide/candidate-check'},
        ]},
        {title: 'Put it to work', items: [
          {label: 'Staged implementation', to: '/guide/implementation'},
          {label: 'Demonstrations', to: '/guide/demonstrations'},
          {label: 'Technical library', to: '/guide/technical-library'},
        ]},
      ],
      copyright: 'Front End Carbon Recovery — Version 1.0',
    },
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
  },
};
module.exports = config;
