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
            <span>Self hosted VPN</span>
          </div>

          <h1 className="hero-display">
            <span className="line">你的 VPN，</span>
            <span className="line">应该跑在</span>
            <span className="line">
              <span className="mark">自己的服务器上</span>
            </span>
          </h1>

          <p className="hero-sub">
            开源、抗审查、全平台。填好 IP、SSH 登录名和密码，Amnezia 会在
            <strong>你自己的服务器上</strong>
            自动部署 VPN 容器并完成连接，不经任何第三方中转，也无需手写配置文件。
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
              href={links.downloadsMirror}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GlobeIcon />
              备用下载镜像
            </a>
            <a
              className="hero-text-link"
              href={links.docs}
              target="_blank"
              rel="noreferrer noopener"
            >
              <BookIcon />
              阅读官方文档
              <ArrowUpRightIcon />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">5</div>
              <div className="stat-label">官方支持平台</div>
            </div>
            <div className="stat">
              <div className="stat-value">7+</div>
              <div className="stat-label">经典与伪装协议</div>
            </div>
            <div className="stat">
              <div className="stat-value">GPLv3</div>
              <div className="stat-label">开源许可证</div>
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
                {connected ? '已连接 · AmneziaWG' : '未连接 · 待命'}
              </span>
            </div>

            <div className="route">
              <div className="node">
                <span className="node-icon">
                  <LaptopIcon />
                </span>
                <div className="node-body">
                  <span className="node-kicker">Local Client</span>
                  <span className="node-name">本机客户端</span>
                  <span className="node-meta">
                    发起连接 · SSH 密钥与配置保存在本地
                  </span>
                </div>
                <span className="node-index">01</span>
              </div>

              <div className="connector">
                <span className="connector-label">
                  Encrypted Tunnel · Obfuscated UDP
                </span>
                <span className="packet" aria-hidden="true" />
                <span className="packet packet--2" aria-hidden="true" />
              </div>

              <div className="node node--server">
                <span className="node-icon">
                  <ServerIcon />
                </span>
                <div className="node-body">
                  <span className="node-kicker">Self Hosted Node</span>
                  <span className="node-name">
                    你的专属服务器
                    <span className="node-tag">Owned</span>
                  </span>
                  <span className="node-meta">
                    SSH 自动部署 · Docker 容器隔离 · 零第三方日志
                  </span>
                </div>
                <span className="node-index">02</span>
              </div>

              <div className="connector">
                <span className="connector-label">
                  Split Tunneling · Domain & App Routing
                </span>
                <span className="packet" aria-hidden="true" />
                <span className="packet packet--2" aria-hidden="true" />
              </div>

              <div className="node">
                <span className="node-icon">
                  <GlobeIcon />
                </span>
                <div className="node-body">
                  <span className="node-kicker">Target Egress</span>
                  <span className="node-name">互联网目标站点与应用</span>
                  <span className="node-meta">
                    按规则分流访问 · 其余流量直连
                  </span>
                </div>
                <span className="node-index">03</span>
              </div>
            </div>

            <div className="tunnel-foot">
              <span className="foot-note">
                {connected ? '自托管节点 · 无第三方中转' : '隧道未建立 · 等待编排'}
              </span>
              <span className="tunnel-controls">
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
