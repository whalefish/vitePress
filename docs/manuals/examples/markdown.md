---
title: Markdown 語法
order: 1
---

# Markdown 語法

## 標題

```
# This is an H1

## This is an H2

### This is an H3

#### This is an H4

##### This is an H5

###### This is an H6

<!-- 標題加上 icon -->
<!-- 使用 icon 務必在[]加上 icon 標示，如下 -->

## ![icon](/.vitepress/assets/icons/add-box.svg) This is an H2

```

## 文字

### 一般文字

一般文字

![icon](/.vitepress/assets/icons/add-box.svg) 一般文字

一般文字 ![icon](/.vitepress/assets/icons/add-box.svg) 一般文字

一般文字 ![icon](/.vitepress/assets/icons/add-box.svg)

```
<!-- 加上 icon -->
<!-- 使用 icon 務必在[]加上 icon 標示，如下 -->

![icon](/.vitepress/assets/icons/add-box.svg) 一般文字

![icon](/.vitepress/assets/icons/add-box.svg) 一般文字

![icon](/.vitepress/assets/icons/add-box.svg)
```

---

### **粗體**

**粗體**

**![icon](/.vitepress/assets/icons/add-box.svg) 粗體**

```
**粗體**

__粗體__

<!-- 加上 icon -->
<!-- 使用 icon 務必在[]加上 icon 標示，如下 -->

**![icon](/.vitepress/assets/icons/add-box.svg) 粗體**
__![icon](/.vitepress/assets/icons/add-box.svg) 粗體__

```

---

### *斜體*

*斜體*

_斜體_

*![icon](/.vitepress/assets/icons/add-box.svg)斜體*

```
*斜體*
_斜體_

<!-- 加上 icon -->
<!-- 使用 icon 務必在[]加上 icon 標示，如下 -->

*![icon](/.vitepress/assets/icons/add-box.svg)斜體*
_![icon](/.vitepress/assets/icons/add-box.svg)斜體_

```

---
## 連結
* `[連結名稱](網址)`
  * **範例**：按一下 [cms 3.0](http://necrdv01.local/)，可以連結到 cms 3.0 網頁

```
[cms 3.0](http://necrdv01.local/)
```
---
## 錨點
* **當前頁面的錨點**：`[錨點名稱](#錨點)`
  * **範例**：按一下 [錨點](#錨點)，可以連結到錨點位置

```
[錨點](#錨點)
```

* **前往其他頁面的錨點**：
  * **範例**：按一下 [介紹](intro.md)
  * **範例**：按一下 [頻道列表](/docs/production/channel.md#-頻道列表)

```
[介紹](intro.md)
```
```
[頻道列表](/docs/production/channel.md#-頻道列表)
```

---

## 項目符號

### 編號
1. This is the first list item.
2. This is the ![icon](/.vitepress/assets/icons/add-box.svg) second list item.

```
<!-- 加上 icon -->
<!-- 使用 icon 務必在[]加上 icon 標示，如下 -->

1. This is the first list item ![icon](/.vitepress/assets/icons/add-box.svg).
```

---

### 項目編號

* test
* test
* test ![icon](/.vitepress/assets/icons/add-box.svg) sssss

```
<!-- 加上 icon -->
<!-- 使用 icon 務必在[]加上 icon 標示，如下 -->

* test ![icon](/.vitepress/assets/icons/add-box.svg) sssss
```