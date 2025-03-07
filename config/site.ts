export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "0xSpace Demo",
  description: "⚡Quickly start a web3 project！ 🎨Heroui + 💅Styled Components + 🌐 i18next+ 🧰 Zustand + 🌈 RainbowKit",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Features",
      href: "/feature",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Features",
      href: "/feature",
    }
  ]
};

// 服务端渲染路由
export const serverPath:string[] = [
  '/docs',
  '/404'
];