import { defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { getFiles } from './services/auto-routes';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "CMS 3.0",
    siteTitle: 'My Custom Title',
    description: "CMS 3.0 User Manuals",
    head: [['link', { rel: 'icon', href: '/.vitepress/assets/img/logo.svg' }]],
    vite: {
        plugins: [
            // add plugin
            AutoSidebar({
                ignoreIndexItem: false, // 忽略index.md檔案
                titleFromFile: true,
            })
        ],
        server: {
            open: true,  // 自動在瀏覽器打開
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/.vitepress/assets/img/favicon.ico', 
        nav: [
            { text: 'Home', link: '/' },
            { text: '手冊', link: '/manuals/intro' }
        ],

        // sidebar: [{
        //     text: '手冊',
        //     items: getFiles(path.resolve(__dirname, '../manuals/')),
        // }],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: "youtube", link: "https://www.youtube.com/" },
        ]
    },
});
