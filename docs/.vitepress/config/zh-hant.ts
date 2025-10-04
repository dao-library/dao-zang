import { DefaultTheme, defineConfig } from "vitepress";

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
            level: [1,2],
            label: '頁面導航'
        },
    }
});
function sidebarAll(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '简介',
            link: '/index'
        },
        {
            text: '洞神部',
            collapsed: true,
            items: [
                {
                    text: '本文类',
                    collapsed: true,
                    items: [
                        { text: '冲虚至德真经', link: 'dongshenbu/benwenlei/chongxuzhidezhenjing' }
                    ]
                },
                {
                    text: '表奏类',
                    collapsed: true,
                    items: [
                        { text: '冲虚至德真经', link: 'dongshenbu/benwenlei/chongxuzhidezhenjing' }
                    ]
                }
            ]
        },
        {
            text: '洞玄部',
            collapsed: true,
            items: [
                {
                    text: '本文类',
                    collapsed: true,
                    items: [
                        { text: '冲虚至德真经', link: 'dongshenbu/benwenlei/chongxuzhidezhenjing' }
                    ]
                },
                {
                    text: '表奏类',
                    collapsed: true,
                    items: [
                        { text: '冲虚至德真经', link: 'dongshenbu/benwenlei/chongxuzhidezhenjing' }
                    ]
                }
            ]
        }
    ];
}