import { DefaultTheme, defineConfig } from "vitepress";
import { sidebarAll } from "./shared";

export const zhhant = defineConfig({
    lang: 'zh-Hant',
    themeConfig: {
        sidebar: {
            '/zh-hant/': { base: '/zh-hant/', items: sidebarAll() }
        },
        docFooter: {
            prev: '上一頁',
            next: '下一頁'
        },
        outline: {
            level: [1,6],
            label: '頁面導航'
        },
    }
});