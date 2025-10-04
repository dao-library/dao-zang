import { DefaultTheme, defineConfig } from "vitepress";

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
            level: [1,2],
            label: '页面导航'
        },
    }
});
function sidebarAll(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '简介',
            link: '/'
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