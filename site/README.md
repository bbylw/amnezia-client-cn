# Amnezia VPN 中文站

基于仓库根目录 `README.md` 内容构建的中文介绍站。技术栈：TanStack Start 1.169 + React 19 + Vite 8 + Bun。

## 运行

```bash
cd site
bun install
portless           # https://amnezia-vpn-site.localhost
```

## 构建与生产启动

```bash
bun run build                  # 输出到 dist/
portless --script start        # 通过 server.ts 启动生产服务并映射至 https://amnezia-vpn-site.localhost
```

## 结构

```
server.ts               Bun 生产环境 HTTP 入口（静态资源 + SSR 路由分发）
src/
  routes/__root.tsx     HTML 外壳、meta、404 视图、lang="zh-CN"
  routes/index.tsx      首页，组合各区块
  components/Nav.tsx    悬浮毛玻璃顶栏（零重渲染进度条、当前区块高亮、移动端焦点陷阱）
  components/Hero.tsx   首屏 + 隧道状态卡片
  components/Sections.tsx  标语点亮 / 功能 / 协议 / 平台 / 构建 / 翻译 / 技术栈 / 问答 / 资源 / 支持 / 页脚
  components/icons.tsx  内联 SVG 图标，无图标库依赖
  data.ts               所有文案与链接的唯一来源
  styles/app.css        设计系统（CSS 变量 + 组件类）
```

## 约定

- 所有外链与协议说明集中在 `src/data.ts`，改内容只改这一个文件（故意略去捐赠章节）。
- 页面内容全部来自项目 README，未添加 README 之外的论断。
- 样式采用手写 CSS 设计系统，统一字阶、间距、深色色板与无障碍状态。
