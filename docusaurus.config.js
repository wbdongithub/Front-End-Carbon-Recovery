const config = {
  title: 'Front End Carbon Recovery',
  tagline: 'Recover solids early. Simplify treatment. Create value.',
  favicon: 'img/favicon.svg',
  url: 'https://wbdongithub.github.io',
  baseUrl: '/Front-End-Carbon-Recovery/',
  organizationName: 'wbdongithub',
  projectName: 'Front-End-Carbon-Recovery',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  presets: [[
    'classic',
    {
      docs: {sidebarPath: require.resolve('./sidebars.js'), routeBasePath: 'guide'},
      blog: false,
      theme: {customCss: require.resolve('./src/css/custom.css')}
    }
  ]],
  themeConfig: {
    image: 'img/fecr-flow.png',
    navbar: {
      title: 'FECR',
      logo: {alt: 'FECR mark', src: 'img/logo.svg'},
      items: [
        {to: '/guide/why-fecr', label: 'Why FECR', position: 'left'},
        {to: '/guide/process-overview', label: 'Process', position: 'left'},
        {to: '/guide/staged-implementation', label: 'Implementation', position: 'left'},
        {to: '/guide/demonstration-program', label: 'Demonstration', position: 'left'},
        {to: '/guide/technical-library', label: 'Technical Library', position: 'left'},
        {href: 'https://github.com/wbdongithub/Front-End-Carbon-Recovery', label: 'GitHub', position: 'right'}
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Understand FECR', items: [
          {label: 'Why FECR', to: '/guide/why-fecr'},
          {label: 'Process overview', to: '/guide/process-overview'},
          {label: 'Is my plant a candidate?', to: '/guide/candidate-checklist'}
        ]},
        {title: 'Explore', items: [
          {label: 'Demonstration program', to: '/guide/demonstration-program'},
          {label: 'Technical library', to: '/guide/technical-library'},
          {label: 'Terminology', to: '/guide/terminology'}
        ]}
      ],
      copyright: `Front End Carbon Recovery Knowledge Base — Version 0.1 Foundations`
    },
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    prism: {additionalLanguages: []}
  }
};
module.exports = config;
