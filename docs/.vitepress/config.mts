import { defineConfig } from 'vitepress'
import { shared } from './config/shared'
import { zhhans} from './config/zh-hans'
import { zhhant} from './config/zh-hant'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared, 
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
