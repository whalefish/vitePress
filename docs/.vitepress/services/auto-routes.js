/** 
 * 檔案自動生成設定格式
 * 格式參考: https://vitepress.dev/reference/default-theme-sidebar
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 定義讀取 .md 檔案內容的函數
const readMarkdownFile = (filePath) => {
    
    try {
        // 讀取文件的內容，同步方式
        const fileContent  = fs.readFileSync(filePath, 'utf8');

        // 使用 gray-matter 解析文件
        const parsed = matter(fileContent);

        const metadata = parsed.data;
        // 提取文件的正文內容
        const content = parsed.content;
        
        return { metadata, content };
    } catch (err) {
        console.error(`Error reading file from disk: ${err}`);
        return null;
    }
};
  
// 讀取目錄，生成層次結構
export const getFiles = (dir, root = '') => {
    const files = fs.readdirSync(dir);
    const items = [];
    files.forEach((file) => {
        
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        
        if (stat.isDirectory()) {
            // 如果是目錄，遞迴讀取子目錄並添加到項目中
            const children = getFiles(fullPath, path.join(root, file));
            
            if (children.length > 0) {
                const currentDir = fullPath + '/index.md';
                items.push({
                    text: readMarkdownFile(currentDir).metadata.title ?? file,
                    link: '/manuals/' + file + '/index.md',
                    collapsed: false, // collapsed使子目錄可折疊, 設定初始頁面載入時為展開 collapsed為false
                    items: children
                });
            }
        } else if (file.endsWith('.md')) {
            // 如果是 Markdown 文件，則將其作為鏈接添加
            if(file !== 'index.md') {
                items.push({
                    text: readMarkdownFile(fullPath).metadata.title ?? path.basename(file, '.md'),
                    link: '/manuals/' + path.join(root, file.replace('.md', '')).replace(/\\/g, '/'),
                });
            }
        }
    });
    
    return items;
};