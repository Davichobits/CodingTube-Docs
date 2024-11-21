import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CodingTube',
  tagline: 'Documentación de herramientas de desarrollo web',
  favicon: 'img/CodingTube-logo.png',

  // Set the production url of your site here
  url: 'https://codingtube.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Davichobits', // Usually your GitHub org/user name.
  projectName: 'CodingTube-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/Davichobits/CodingTube-Docs/edit/main/${versionDocsDirPath}/${docPath}`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    //   [
    //     '@docusaurus/preset-classic',
    //     {
    //       pages: {
    //         path: 'src/pages',
    //         routeBasePath: '',
    //         include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
    //         exclude: [
    //           '**/_*.{js,jsx,ts,tsx,md,mdx}',
    //           '**/_*/**',
    //           '**/*.test.{js,jsx,ts,tsx}',
    //           '**/__tests__/**',
    //         ],
    //         mdxPageComponent: '@theme/MDXPage',
    //         // remarkPlugins: [require('./my-remark-plugin')],
    //         rehypePlugins: [],
    //         beforeDefaultRemarkPlugins: [],
    //         beforeDefaultRehypePlugins: [],
    //       },
    //     },
    // ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/CodingTube_Cuadrado.jpg',
    navbar: {
      title: 'CodingTube',
      logo: {
        alt: 'CodingTube Logo',
        src: 'img/CodingTube-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        // {to: '/portfolio', label: 'Portafolio', position: 'left'},
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://www.youtube.com/CodingTube',
          label: 'YouTube',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentaciones',
          items: [
            {
              label: 'HTML',
              to: '/docs/category/html',
            },
            {
              label: 'CSS',
              to: '/docs/category/css',
            },
            {
              label: 'React',
              to: '/docs/category/react',
            },
            {
              label: 'Phaser',
              to: '/docs/category/phaser',
            },
            {
              label: 'Dart',
              to: '/docs/category/dart',
            },
          ],
        },
        {
          title: 'Redes Sociales',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/CodingTube',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/CodingTube',
            },
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@codingtube',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Davichobits',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/davidirc/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodingTube. - Desarrollado con ❤️ por <a target="_blank" href="https://www.linkedin.com/in/davidirc/" >David Ruiz.</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['dart'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
