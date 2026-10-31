import type { ReactNode } from 'react'
import {
  Link,
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import appCss from '~/styles/app.css?url'
import { ArrowIcon, DownloadIcon } from '~/components/icons'
import { links } from '~/data'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Amnezia VPN — 自托管 VPN 的最佳客户端',
      },
      {
        name: 'description',
        content:
          'Amnezia 是一款开源 VPN 客户端，核心特性是让你在自己的服务器上部署专属 VPN 服务器。支持 OpenVPN、WireGuard、IKEv2，以及 AmneziaWG、XRay、Cloak、Shadowsocks 等抗审查协议。',
      },
      { name: 'theme-color', content: '#f2eee3' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Amnezia VPN — 自托管 VPN 的最佳客户端' },
      {
        property: 'og:description',
        content:
          '输入 IP、SSH 用户名和密码，Amnezia 自动在你的服务器上部署 VPN 容器并连接。开源、抗审查、全平台。',
      },
      {
        property: 'og:image',
        content:
          'https://raw.githubusercontent.com/amnezia-vpn/amnezia-client/dev/metadata/img-readme/uipic4.png',
      },
      { property: 'og:locale', content: 'zh_CN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Amnezia VPN — 自托管 VPN 的最佳客户端',
      },
      {
        name: 'twitter:description',
        content:
          '输入 IP、SSH 用户名和密码，Amnezia 自动在你的服务器上部署 VPN 容器并连接。开源、抗审查、全平台。',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&family=Geist:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'icon',
        href: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22%3E%3Crect width=%2232%22 height=%2232%22 rx=%224%22 fill=%22%23131209%22/%3E%3Cpath d=%22M16 7l7 4v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9v-6l7-4z%22 fill=%22%23f2eee3%22/%3E%3C/svg%3E',
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function NotFoundComponent() {
  return (
    <main className="not-found">
      <div className="wrap not-found-inner">
        <span className="eyebrow">404 / Route Not Found</span>
        <h1>找不到请求的路由节点</h1>
        <p>
          你访问的页面路径不存在或已移动。你可以返回 Amnezia VPN
          中文站首页，或直接前往下载客户端。
        </p>
        <div className="not-found-actions">
          <Link className="btn btn--solid" to="/">
            返回首页
            <ArrowIcon />
          </Link>
          <a
            className="btn btn--line"
            href={links.downloads}
            target="_blank"
            rel="noreferrer noopener"
          >
            <DownloadIcon />
            下载客户端
          </a>
        </div>
      </div>
    </main>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
