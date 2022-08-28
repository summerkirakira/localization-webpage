// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '星河避难所',
  tagline: '星河避难所教程',
  url: 'https://biaoju.site',
  baseUrl: '/star-refuge/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sc_icon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Summerkirakira', // Usually your GitHub org/user name.
  projectName: 'StarCitizen-Helper', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  customFields: {
    authorIcon : 'img/sc_icon.png',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '星河避难所',
        logo: {
          alt: '标签图',
          src: 'img/sc_icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '教程',
          },
          {
            href: 'https://github.com/summerkirakira/StarCitizen-Helper',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '教程',
            items: [
              {
                label: '基础教程',
                to: 'docs/category/基础教程',
              },
              {
                label: '进阶教程',
                to: 'docs/category/进阶教程',
              }
            ]
          },
          {
            title: '汉化仓库',
            items: [
              {
                label: '全汉化+贴图',
                href: 'https://github.com/summerkirakira/starcitizen-localization-cn'
              },
              {
                label: '全汉化+无贴图',
                href: 'https://github.com/summerkirakira/Starcitizen-localization-cn-no-pic'
              },
              {
                label: '全汉化镖局增强版',
                href: 'https://github.com/summerkirakira/starcitizen-localization-biaoju'
              }
            ]
          },
          {
            title: '友情支持',
            items: [
              {
                label: '星际公民汉化组',
                href: 'https://www.starcitizenzw.com/',
              },
              {
                label: 'StarCitizen-Helper',
                href: 'https://github.com/Shin0by/StarCitizen-Helper',
              },
              {
                label: 'StarCitizenModding',
                href: 'https://github.com/defterai/StarCitizenModding'
              }
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: '星际公民官方网站',
                href: 'https://robertsspaceindustries.com/'
              },
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} By 妖精酱`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
