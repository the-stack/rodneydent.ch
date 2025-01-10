import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rodney Dent",
  description: "test",
  cleanUrls: true,
  sitemap: {
    hostname: 'https://rodneydent.ch'
  }
})
