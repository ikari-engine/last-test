// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ikari Engine",
  tagline: "Engines are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ikari-engine.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/last-test/",

  // GitHub pages deployment config.
  organizationName: "ikari-engine", // Usually your GitHub org/user name.
  projectName: "last-test", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          includeCurrentVersion: false,
          editUrl: "https://github.com/ikari-engine/last-test/tree/gh-pages/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Ikari Engine",
        logo: {
          alt: "Ikari Engine Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "learnSidebar",
            position: "left",
            label: "Learn",
          },
          {
            type: "docSidebar",
            sidebarId: "apiSidebar",
            position: "left",
            label: "API",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://github.com/ikari-engine/last-test",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Quick Start",
                to: "/docs/learn",
              },
              {
                label: "Installation",
                to: "/docs/learn/installation",
              },
              {
                label: "API",
                to: "/docs/api",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub Discussions",
                href: "https://github.com/ikari-engine/last-test/discussions",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ikari-engine/last-test",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ikari Engine, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    ...(process.env.TYPEDOC_TSCONFIG
      ? [
          [
            "docusaurus-plugin-typedoc",
            {
              entryPoints: process.env.TYPEDOC_ENTRY_POINT
                ? [process.env.TYPEDOC_ENTRY_POINT]
                : [],
              tsconfig: process.env.TYPEDOC_TSCONFIG,
            },
          ],
        ]
      : []),
  ],
};

module.exports = config;
