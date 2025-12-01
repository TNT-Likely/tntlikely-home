# TNT-Likely 个人网站

使用 Nuxt 4 构建的现代化个人网站，支持多语言、暗黑模式和响应式设计。

## ✨ 特性

- 🌍 **多语言支持** - 简体中文、繁体中文、English
- 🌓 **主题切换** - 支持暗黑/日间模式
- 📱 **响应式设计** - 完美适配各种设备
- ✨ **酷炫动画** - 流畅的页面动画和过渡效果
- 🔗 **社交链接** - GitHub、小红书、抖音
- 📦 **GitHub 项目展示** - 自动获取并展示 GitHub 仓库

## 🛠️ 技术栈

- **框架**: Nuxt 4
- **UI**: Vue 3 + TypeScript
- **样式**: SCSS
- **图标**: @nuxt/icon
- **国际化**: @nuxtjs/i18n
- **主题**: @nuxtjs/color-mode
- **工具**: @vueuse/nuxt

## 📦 安装

```bash
# 安装依赖
pnpm install
```

## 🚀 开发

```bash
# 启动开发服务器
pnpm dev
```

访问 http://localhost:3000

## 🏗️ 构建

```bash
# 生成静态网站
pnpm generate
```

构建产物将输出到 `.output/public/` 目录

## 📤 部署

静态网站可以部署到任何静态托管服务：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- 等等...

只需要上传 `.output/public/` 目录的内容即可。

## 📂 项目结构

```
app/
├── assets/          # 样式文件
│   └── css/
├── components/      # Vue 组件
│   ├── GithubProjects.vue
│   ├── LanguageSwitcher.vue
│   └── ThemeToggle.vue
├── i18n/           # 国际化配置
│   └── locales/    # 语言文件
├── pages/          # 路由页面
│   └── index.vue
└── app.vue         # 根组件
```

## 🎨 自定义

### 修改个人信息

编辑 `app/i18n/locales/*.json` 文件修改文案内容。

### 修改 GitHub 用户名

在 `app/pages/index.vue` 中找到：

```vue
<GithubProjects username="TNT-Likely" />
```

替换为你的 GitHub 用户名。

### 修改社交链接

在 `app/pages/index.vue` 中的社交部分修改链接。

## 📄 License

MIT

## 👤 作者

TNT-Likely
