# Ceci Personal Portfolio

一个极简、温暖色系的个人主页，可以逐步改成你自己的作品集。

## 如何打开

直接双击 `index.html`，或在浏览器打开这个文件：

```text
/Users/Ceci/personal-portfolio/index.html
```

## 文件说明

- `index.html`: 页面内容
- `styles.css`: 视觉样式
- `script.js`: 作品分类筛选和年份
- `assets/hero-warm-abstract.png`: 首页背景图

## 第 1 步：改成你的名字

打开 `index.html`，搜索 `Ceci`，把它替换成你的名字。

同时修改：

```html
<title>Ceci | Personal Portfolio</title>
```

例如：

```html
<title>你的名字 | Personal Portfolio</title>
```

## 第 2 步：改首页一句话

找到这段：

```html
<p class="hero-lead">
  我把想法整理成清晰、温暖、可落地的数字作品。
</p>
```

换成一句真实介绍。公式可以是：

```text
我用「技能」帮助「对象」完成「结果」。
```

例子：

```text
我用设计和前端技术，把学习想法做成清晰、可体验的网页作品。
```

## 第 3 步：修改邮箱

搜索：

```text
hello@example.com
```

替换成你的邮箱。

## 第 4 步：替换精选作品

在 `index.html` 中找到：

```html
<article class="project-card" data-category="design">
```

每一个 `article` 就是一张作品卡片。你可以修改：

- `data-category`: 分类，可用 `design`、`code`、`writing`
- `project-type`: 页面上显示的英文分类
- `h3`: 作品名称
- `p`: 作品简介
- `a href`: 作品链接

## 第 5 步：调整颜色

打开 `styles.css` 最上方的 `:root`：

```css
:root {
  --paper: #f7f1e8;
  --ink: #2f2a26;
  --clay: #a85f46;
}
```

常改这几个就够了：

- `--paper`: 页面背景色
- `--ink`: 主要文字色
- `--clay`: 强调色
- `--sage`: 联系邮箱颜色

## 第 6 步：替换首页图片

把新图片放进 `assets` 文件夹，然后在 `index.html` 里改：

```html
src="assets/hero-warm-abstract.png"
```

例如：

```html
src="assets/my-photo.jpg"
```

## 第 7 步：完善作品集内容

每个作品建议补充这些信息：

- 项目背景：为什么做
- 你的角色：你负责什么
- 过程：你怎么思考和实现
- 结果：最后产出了什么
- 复盘：你学到了什么
