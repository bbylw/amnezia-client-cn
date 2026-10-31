import { useState } from 'react'
import { links } from '~/data'
import {
  ArrowUpRightIcon,
  BookIcon,
  DownloadIcon,
  GlobeIcon,
  LaptopIcon,
  LockIcon,
  PowerIcon,
  ServerIcon,
} from './icons'

export function Hero() {
  const [connected, setConnected] = useState(true)

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="dot" aria-hidden="true" />
            <span>Open source · GPLv3</span>
            <span className="slash" aria-hidden="true">
              /
            </span>
            <span>Self-hosted VPN</span>
          </div>

          <h1 className="hero-display">
            <span className="line">
              你的 <span className="latin">VPN</span>，
            </span>
            <span className="line">应该跑在</span>
            <span className="line">
              <span className="mark">自己的服务器上</span>
            </span>
          </h1>

          <p className="hero-sub">
            开源、抗审查、全平台。填好 IP、SSH 登录名和密码，Amnezia 会在
            <strong>你自己的服务器上</strong>
            装好 VPN 容器并连接。没有第三方中转，也不需要手写配置文件。
          </p>

          <div className="hero-actions">
            <a
              className="btn btn--solid"
              href={links.downloads}
              target="_blank"
              rel="noreferrer noopener"
            >
              <DownloadIcon />
              下载客户端
              <ArrowUpRightIcon />
            </a>
            <a
              className="btn btn--line"
              href={links.docs}
              target="_blank"
              rel="noreferrer noopener"
            >
              <BookIcon />
              阅读文档
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">5</div>
              <div className="stat-label">支持平台</div>
            </div>
            <div className="stat">
              <div className="stat-value">7+</div>
              <div className="stat-label">VPN 协议</div>
            </div>
            <div className="stat">
              <div className="stat-value">GPLv3</div>
              <div className="stat-label">开源许可</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <aside
            className="tunnel theme-ink"
            data-live={connected}
            aria-label="隧道连接状态示意"
          >
            <div className="tunnel-head">
              <span className="tunnel-kicker">
                <LockIcon />
                Tunnel / 隧道编排
              </span>
              <span className="status" aria-live="polite">
                <span className="status-dot" aria-hidden="true" />
                {connected ? '已连接' : '未连接'}
              </span>
            </div>

            <div className="route">
              <div className="node">
                <span className="node-icon">
                  <LaptopIcon />
                </span>
                <div className="node-body">
                  <span className="node-kicker">Local device</span>
                  <span className="node-name">本机</span>
                  <span className="node-meta">发起连接 · 密钥保存在本地</span>
                </div>
                <span className="node-index">01</span>
              </div>

              <div className="connector">
                <span className="connector-label">Encrypted tunnel</span>
                <span className="packet" aria-hidden="true" />
                <span className="packet packet--2" aria-hidden="true" />
              </div>

              <div className="node node--server">
                <span className="node-icon">
                  <ServerIcon />
                </span>
                <div className="node-body">
                  <span className="node-kicker">Self-hosted</span>
                  <span className="node-name">
                    你的服务器
                    <span className="node-tag">Owned</span>
                  </span>
                  <span className="node-meta">SSH · Docker · 自有硬件</span>
                </div>
                <span className="node-index">02</span>
              </div>

              <div className="connector">
                <span className="connector-label">Egress</span>
                <span className="packet" aria-hidden="true" />
                <span className="packet packet--2" aria-hidden="true" />
              </div>

              <div className="node">
                <span className="node-icon">
                  <GlobeIcon />
                </span>
                <div className="node-body">
                  <span className="node-kicker">Internet</span>
                  <span className="node-name">互联网</span>
                  <span className="node-meta">出口流量</span>
                </div>
                <span className="node-index">03</span>
              </div>
            </div>

            <div className="tunnel-foot">
              <span className="foot-note">
                {connected ? '自托管节点 · 无第三方中转' : '隧道未建立 · 等待编排'}
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <span className="signal" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
                <button
                  className="toggle"
                  type="button"
                  aria-pressed={connected}
                  onClick={() => setConnected((value) => !value)}
                >
                  <PowerIcon />
                  {connected ? '断开' : '连接'}
                </button>
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
