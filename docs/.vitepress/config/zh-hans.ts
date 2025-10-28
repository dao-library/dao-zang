import { DefaultTheme, defineConfig } from "vitepress";
import { sidebarAll } from "./shared";
import footnote from 'markdown-it-footnote'

export const zhhans = defineConfig({
    lang: 'zh-Hans',
    themeConfig: {
        sidebar: {
            '/zh-hans/': { base: '/zh-hans/', items: sidebarAll() }
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outline: {
            level: [1,6],
            label: '页面导航'
        },
    }
});
