import { defineConfig } from 'vitepress'
import { zhhans } from './config/zh-hans'
import { zhhant } from './config/zh-hant'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "正统道藏",
  base: "/dao-zang/",
  description: "Dao Zang",
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dao-library/dao-zang' }
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-hans',
      link: '/zh-hans/',
      ...zhhans
    },
    'zh-hant': {
      label: '繁体中文',
      lang: 'zh-hant',
      link: '/zh-hant/',
      ...zhhant
    }
  }
})
