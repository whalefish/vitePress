import { defineConfig } from 'vitepress';
import { getFiles } from './services/auto-routes';
import path from 'path';

import { generateSidebar } from 'vitepress-sidebar'; // 參考: https://vitepress-sidebar.cdget.com/

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
            { text: 'test01測試', link: '/test01/' },
            { text: '手冊', link: '/manuals/intro' },
        ],

        // sidebar: [{
        //     text: '手冊',
        //     items: getFiles(path.resolve(__dirname, '../manuals/')),
        // }],

        sidebar: generateSidebar([
            {
                documentRootPath: 'docs', // 設定你的文件根目錄為 /docs
                scanStartPath: 'test01',   // 設定側邊欄只顯示 test01 資料夾的內容
                resolvePath: '/test01/',
                includeFolderIndexFile: true, // 包含該資料夾的 index.md 作為主要連結
                useFolderTitleFromIndexFile: true,
                // useTitleFromFrontmatter: true, // 啟用從 Frontmatter 提取標題
                collapsed: false, // 預設展開該資料夾
                collapseDepth: 2, // 控制展開的深度
            },
            {
                documentRootPath: 'docs', // 設定你的文件根目錄為 /docs
                scanStartPath: 'manuals',   // 設定側邊欄只顯示 manuals 資料夾的內容
                resolvePath: '/manuals/',
                includeFolderIndexFile: true,
                collapsed: false,
                useTitleFromFrontmatter: true,
                useFolderTitleFromIndexFile: true, // 是否 讀取目前資料夾內index.md中的資料
                useFolderLinkFromIndexFile: true, 
                // sortMenusByFrontmatterOrder: true, // 利用order 排序
                sortMenusOrderNumericallyFromTitle: true, // 使用title 排序
            },
        ]),

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: "youtube", link: "https://www.youtube.com/" },
        ]
    },
});
