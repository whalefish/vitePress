import { defineConfig } from 'vitepress';
import { routeItems } from './services/auto-routes';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "CMS 3.0",
    siteTitle: 'My Custom Title',
    description: "CMS 3.0 User Manuals",
    head: [['link', { rel: 'icon', href: '/.vitepress/assets/img/logo.svg' }]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/.vitepress/assets/img/favicon.ico', 
        nav: [
            { text: 'Home', link: '/' },
            { text: '手冊', link: '/manuals/intro' }
        ],

        sidebar: [{
            text: '手冊',
            items: routeItems('../../docs/manuals/'),
        }],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            {icon: "twitter", link: "..."},
        ]
    },
    
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../../docs/')
        }
    },
});
