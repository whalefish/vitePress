---
title: 自訂樣式
order: 3
---

# 自訂樣式

## 自訂項目編號

<span className="number">1</span> 使用項目編號，可以自訂數字

<span className="number">2</span> 使用項目編號，可以自訂數字

<span className="number">3</span> 使用項目編號，可以自訂數字

<span className="number">4</span> 使用項目編號，可以自訂數字

<span className="number">5</span> 使用項目編號，可以自訂數字

```
<span className="number">1</span> 使用項目編號，可以自訂數字
```

## 狀態

state tag <span className="badge-gray">不顯示</span>
```
<span className="badge-gray">不顯示</span>
```

state tag <span className="badge-green">顯示中</span>
```
<span className="badge-green">顯示中</span>
```

state tag <span className="badge-red">已逾期</span>
```
<span className="badge-red">已逾期</span>
```

state tag <span className="badge-orange">已預排</span>
```
<span className="badge-orange">已預排</span>
```

state tag <span className="badge-blue">其他</span>
```
<span className="badge-blue">其他</span>
```

---

## 插入圖片
* 可依據撰寫的文件名稱，在 static 資料夾中建立自己的資料夾，方便管理
* 插入的路徑 `/.vitepress/assets/img/{資料夾名稱}or{檔案名稱}/{資料夾名稱}or{檔案名稱}`
* 範例：`![image](/.vitepress/assets/img/channel/channel_ui_1.png)`

![image](/.vitepress/assets/img/channel/channel_ui_1.png)

```
![image](/.vitepress/assets/img/channel/channel_ui_1.png)
```

:::warning[注意事項]
* 使用 image 務必在`[image](路徑)`加上 image 標示
* `![image](/.vitepress/assets/img/channel/channel_ui_1.png)`
:::

---

## 插入 Icon
* 如果要新增 Icon 請將 `.svg` 檔案，放置到 `static/icons` 資料夾即可使用
* 插入的路徑 `/.vitepress/assets/icons/{資料夾名稱}or{檔案名稱}/{資料夾名稱}or{檔案名稱}`
* 範例：`![icon](/.vitepress/assets/icons/add-box.svg)`

![icon](/.vitepress/assets/icons/add-box.svg)

![icon](/.vitepress/assets/icons/add-rows.svg)

```
![icon](/.vitepress/assets/icons/add-rows.svg)
```

:::warning[注意事項]
* 使用 icon 務必在`[icon](路徑)`加上 icon 標示
* `![icon](/.vitepress/assets/icons/add-box.svg)`
:::

---

## 收合（details）

<details>
  <summary>為什麼找不到頻道或類別？</summary>
  如在頻道 / 類別導覽列中找不到您想查看的頻道或類別，代表您沒有該頻道或類別的權限。如要開啟權限，請聯繫權限管理單位人員。
</details>

```
<details>
  <summary>為什麼找不到頻道或類別？</summary>
  如在頻道 / 類別導覽列中找不到您想查看的頻道或類別，代表您沒有該頻道或類別的權限。如要開啟權限，請聯繫權限管理單位人員。
</details>
```