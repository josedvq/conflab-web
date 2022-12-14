// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ConfLab',
  tagline: 'A Data Collection Concept, Dataset, and Benchmark for Machine Analysis of Free-Standing Social Interactions in the Wild',
  url: 'https://josedvq.github.io',
  baseUrl: '/conflab-web/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'josedvq', // Usually your GitHub org/user name.
  projectName: 'conflab-web', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    "https://platform.twitter.com/widgets.js"
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ConfLab',
        // logo: {
        //   alt: 'ConfLab',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            to: '/',
            position: 'right',
            label: 'Home',
          },
          {
            type: 'doc',
            position: 'right',
            docId: 'issues',
            label: 'Docs',
          },
          {
            to: 'event',
            position: 'right',
            label: 'Event',
          },
          {
            to: 'research',
            position: 'right',
            label: 'Research',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Known Issues',
                to: 'docs/issues',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/conflab_mm',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `<span>Copyright ?? ${new Date().getFullYear()} Socially Perceptive Computing Lab, TU Delft. Built by <a href="https://josedvq.github.io/">Jose Vargas Quiros</a> with Docusaurus.</span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
