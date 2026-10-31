# Amnezia VPN 中文站

基于仓库根目录 `README.md` 内容构建的中文介绍站。技术栈：TanStack Start 1.169 + React 19 + Vite 8 + Bun。

## 运行

```bash
cd site
bun install
bun run dev        # http://localhost:3000
```

## 构建与生产启动

```bash
bun run build      # 输出到 dist/
bun run start      # 用 bun 跑 dist/server/server.js
```

## 结构

```
src/
  routes/__root.tsx     HTML 外壳、meta、lang="zh-CN"
  routes/index.tsx      首页，组合各区块
  components/Nav.tsx    顶栏（滚动时加边框）
  components/Hero.tsx   首屏 + 隧道状态卡片
  components/Sections.tsx  功能 / 协议 / 平台 / 构建 / 翻译 / 技术栈 / 资源 / 支持 / 页脚
  components/icons.tsx  内联 SVG 图标，无图标库依赖
  data.ts               所有文案与链接的唯一来源
  styles/app.css        设计系统（CSS 变量 + 组件类）
```

## 约定

- 所有外链、协议名、捐赠地址集中在 `src/data.ts`，改内容只改这一个文件。
- 页面内容全部来自项目 README，未添加 README 之外的论断。
- 未使用 Tailwind 或 UI 库，样式是手写 CSS，构建产物 CSS 约 15 KB。
