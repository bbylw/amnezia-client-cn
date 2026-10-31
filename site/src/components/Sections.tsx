import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import {
  buildRequirements,
  classicProtocols,
  envVars,
  faqItems,
  features,
  links,
  manifestoPillars,
  marqueeItems,
  platforms,
  stealthProtocols,
  taglineWords,
  techStack,
} from '~/data'
import {
  AndroidIcon,
  AppleIcon,
  ArrowIcon,
  ArrowUpRightIcon,
  BoltIcon,
  BookIcon,
  CheckIcon,
  CopyIcon,
  DevicesIcon,
  DownloadIcon,
  GithubIcon,
  GlobeIcon,
  HeartIcon,
  LinuxIcon,
  LockIcon,
  MaskIcon,
  RedditIcon,
  RouterIcon,
  ServerIcon,
  SplitIcon,
  TelegramIcon,
  TranslateIcon,
  WarnIcon,
  WindowsIcon,
} from './icons'

const iconMap = {
  bolt: BoltIcon,
  server: ServerIcon,
  mask: MaskIcon,
  split: SplitIcon,
  devices: DevicesIcon,
  router: RouterIcon,
  windows: WindowsIcon,
  apple: AppleIcon,
  linux: LinuxIcon,
  android: AndroidIcon,
} as const

const pad = (value: number) => String(value + 1).padStart(2, '0')

const stagger = (index: number, step = 55): CSSProperties =>
  ({ '--d': `${index * step}ms` }) as CSSProperties

function SectionHead({
  num,
  eyebrow,
  title,
  desc,
}: {
  num: string
  eyebrow: string
  title: ReactNode
  desc?: string
}) {
  return (
    <div className="sec-head" data-reveal>
      <span className="sec-num">{num}</span>
      <div className="sec-title">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {desc ? <p className="sec-desc">{desc}</p> : null}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="marquee theme-ink" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={`${copy}-${item}`}>
                {item}
                <span className="star">*</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TaglineReveal() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCount, setActiveCount] = useState(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveCount(taglineWords.length)
      return
    }

    let frame = 0
    let inView = false

    const updateWords = () => {
      frame = 0
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.85
      const end = vh * 0.25
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / Math.max(1, start - end)),
      )
      const count = Math.max(1, Math.round(progress * taglineWords.length))
      setActiveCount(count)
    }

    const onScroll = () => {
      if (!inView || frame) return
      frame = requestAnimationFrame(updateWords)
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          inView = entry.isIntersecting
          if (inView) updateWords()
        }
      },
      { rootMargin: '15% 0px 15% 0px' },
    )

    io.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    updateWords()

    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section tagline-section"
      aria-label="核心理念"
    >
      <div className="wrap tagline-grid">
        <div className="tagline-meta">
          <span className="sec-num">00 / 宣言</span>
        </div>

        <div className="tagline-box">
          <span className="eyebrow">Self Hosted Manifesto</span>
          <p className="tagline-text">
            {taglineWords.map((word, index) => (
              <span
                key={word}
                className="tagline-word"
                data-active={index < activeCount}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        <div className="tagline-pillars">
          {manifestoPillars.map((pillar, index) => (
            <div className="pillar-row" key={pillar.code}>
              <div className="pillar-head">
                <span className="pillar-code">{pillar.code}</span>
                <span className="pillar-idx">{pad(index)}</span>
              </div>
              <p className="pillar-desc">{pillar.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section className="section" id="features">
      <div className="wrap">
        <SectionHead
          num="01 / 能力"
          eyebrow="Features"
          title="自托管，但不折腾"
          desc="Amnezia 把「在服务器上装 VPN」这件事压缩成三个输入框。剩下的协议、容器、证书和路由，它自己处理。"
        />

        <div className="bento">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            const ink = index === 0 || index === 3

            return (
              <article
                className={`feature${ink ? ' feature--ink' : ''}`}
                key={feature.title}
                data-reveal
                style={stagger(index)}
              >
                <div className="feature-top">
                  <span className="feature-icon">
                    <Icon />
                  </span>
                  <span className="feature-index">{pad(index)}</span>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                  {'href' in feature && feature.href ? (
                    <a
                      className="feature-link"
                      href={feature.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {feature.linkLabel}
                      <ArrowUpRightIcon />
                    </a>
                  ) : null}
                </div>
                <div className="feature-foot">
                  <span>{feature.spec}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Protocols() {
  return (
    <section className="section theme-ink" id="protocols">
      <div className="wrap">
        <SectionHead
          num="02 / 协议"
          eyebrow="Protocols"
          title="经典协议，还有能过审查的几种"
          desc="同一份客户端里，既有标准 VPN 协议，也有专门为对抗深度包检测设计的伪装方案。"
        />

        <div className="protocol-grid">
          <div className="protocol-col" data-reveal>
            <div className="protocol-head">
              <h3>经典 VPN 协议</h3>
              <span className="protocol-tag">Classic</span>
            </div>
            <p className="protocol-desc">
              标准、成熟、兼容性好，适合网络环境宽松的场景。
            </p>
            <ul className="protocol-list">
              {classicProtocols.map((protocol, index) => (
                <li className="protocol-item" key={protocol.name}>
                  <span className="protocol-num">{pad(index)}</span>
                  <span className="protocol-main">
                    <span className="protocol-name">{protocol.name}</span>
                    <span className="protocol-sub">{protocol.tag}</span>
                  </span>
                  <span className="protocol-chev" aria-hidden="true">
                    <LockIcon />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="protocol-col" data-reveal style={stagger(2)}>
            <div className="protocol-head">
              <h3>流量伪装 / 混淆</h3>
              <span className="protocol-tag">Obfuscation</span>
            </div>
            <p className="protocol-desc">
              让流量看起来不像 VPN，用于网络受限或存在主动探测的环境。
            </p>
            <ul className="protocol-list">
              {stealthProtocols.map((protocol, index) => (
                <li key={protocol.name}>
                  <a
                    className="protocol-item"
                    href={protocol.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="protocol-num">{pad(index)}</span>
                    <span className="protocol-main">
                      <span className="protocol-name">{protocol.name}</span>
                      <span className="protocol-sub">{protocol.tag}</span>
                    </span>
                    <span className="protocol-chev" aria-hidden="true">
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="protocol-note" data-reveal>
          <WarnIcon />
          <span>
            伪装协议的目标是降低被识别的概率，不是保证不被封锁。网络环境变化时，协议效果也会变化，
            建议同时准备多条线路。详见{' '}
            <a
              className="inline-link"
              href={links.troubleshooting}
              target="_blank"
              rel="noreferrer noopener"
            >
              故障排查文档
            </a>
            。
          </span>
        </div>
      </div>
    </section>
  )
}

export function Platforms() {
  return (
    <section className="section" id="platforms">
      <div className="wrap">
        <SectionHead
          num="03 / 平台"
          eyebrow="Platforms"
          title="一个客户端，五个平台"
          desc="Windows、macOS、Linux、Android、iOS 都有官方构建。所有版本都可以在 GitHub Releases 里找到。"
        />

        <div className="platform-grid">
          {platforms.map((platform, index) => {
            const Icon = iconMap[platform.icon as keyof typeof iconMap]

            return (
              <a
                className="platform"
                key={platform.name}
                href={links.releases}
                target="_blank"
                rel="noreferrer noopener"
                data-reveal
                style={stagger(index, 40)}
              >
                <span className="platform-top">
                  <span className="platform-icon">
                    <Icon />
                  </span>
                  <span className="platform-idx">{pad(index)}</span>
                </span>
                <span className="platform-body">
                  <span className="platform-name">{platform.name}</span>
                  <span className="platform-target">{platform.target}</span>
                  <span className="platform-meta">
                    获取官方构建
                    <ArrowUpRightIcon />
                  </span>
                </span>
              </a>
            )
          })}
        </div>

        <div className="platform-actions">
          <a
            className="btn btn--solid"
            href={links.downloads}
            target="_blank"
            rel="noreferrer noopener"
          >
            <DownloadIcon />
            从官网下载
            <ArrowUpRightIcon />
          </a>
          <a
            className="btn btn--line"
            href={links.downloadsMirror}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GlobeIcon />
            备用镜像下载
          </a>
          <a
            className="btn btn--line"
            href={links.releases}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon />
            GitHub Releases 所有版本
          </a>
        </div>
      </div>
    </section>
  )
}

const submoduleCode = `git submodule update --init --recursive`

const unixCode = `# 为主机平台构建可执行文件
deploy/build.sh

# 构建可执行文件及安装包
deploy/build.sh --installer all

# 构建 Android APK 和 AAB
deploy/build.sh -t android --aab

# 查看帮助
deploy/build.sh -h`

const winCode = `:: 构建 Windows 可执行文件
deploy/build.bat

:: 使用 IFW 安装包构建
deploy/build.bat --installer ifw

:: 使用 IFW 和 WIX 安装包构建
deploy/build.bat --installer ifw --installer wix

:: 或者直接
deploy/build.bat --installer all`

function CodeLines({ code }: { code: string }) {
  return (
    <>
      {code.split('\n').map((line, index) => {
        const trimmed = line.trim()
        const isComment =
          trimmed.startsWith('#') || trimmed.startsWith('::')

        return (
          <span className={isComment ? 'cmt' : 'cmd'} key={index}>
            {line}
            {'\n'}
          </span>
        )
      })}
    </>
  )
}

export function Build() {
  const [tab, setTab] = useState<'unix' | 'win'>('unix')
  const [copiedSubmodule, setCopiedSubmodule] = useState(false)
  const [copiedBuild, setCopiedBuild] = useState(false)
  const subTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const buildTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const activeCode = tab === 'unix' ? unixCode : winCode

  useEffect(() => {
    return () => {
      if (subTimerRef.current) clearTimeout(subTimerRef.current)
      if (buildTimerRef.current) clearTimeout(buildTimerRef.current)
    }
  }, [])

  const changeTab = (next: 'unix' | 'win') => {
    setTab(next)
    setCopiedBuild(false)
    if (buildTimerRef.current) {
      clearTimeout(buildTimerRef.current)
      buildTimerRef.current = null
    }
  }

  const onTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault()
      changeTab(tab === 'unix' ? 'win' : 'unix')
    }
  }

  const copySubmodule = async () => {
    try {
      await navigator.clipboard.writeText(submoduleCode)
      setCopiedSubmodule(true)
      if (subTimerRef.current) clearTimeout(subTimerRef.current)
      subTimerRef.current = setTimeout(() => {
        setCopiedSubmodule(false)
        subTimerRef.current = null
      }, 1800)
    } catch {
      setCopiedSubmodule(false)
    }
  }

  const copyBuild = async () => {
    try {
      await navigator.clipboard.writeText(activeCode)
      setCopiedBuild(true)
      if (buildTimerRef.current) clearTimeout(buildTimerRef.current)
      buildTimerRef.current = setTimeout(() => {
        setCopiedBuild(false)
        buildTimerRef.current = null
      }, 1800)
    } catch {
      setCopiedBuild(false)
    }
  }

  return (
    <section className="section" id="build">
      <div className="wrap">
        <SectionHead
          num="04 / 构建"
          eyebrow="Build from source"
          title="从源码构建"
          desc="检出仓库后先拉取子模块，然后按平台准备依赖。deploy 目录下的脚本会在默认安装路径下自动找到依赖。"
        />

        <div className="steps">
          <div className="step" data-reveal>
            <span className="step-num">01</span>
            <div className="step-body">
              <h4>检出源代码</h4>
              <p>检出仓库后，请务必递归拉取所有 Git 子模块。</p>
              <div className="code">
                <div className="code-bar">
                  <span className="code-bar-left">
                    <span className="code-dots" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </span>
                    shell · git submodule
                  </span>
                  <button
                    className="code-copy"
                    type="button"
                    data-copied={copiedSubmodule}
                    onClick={copySubmodule}
                  >
                    {copiedSubmodule ? <CheckIcon /> : <CopyIcon />}
                    {copiedSubmodule ? '已复制' : '复制命令'}
                  </button>
                </div>
                <pre>
                  <span className="cmd">{submoduleCode}</span>
                </pre>
              </div>
            </div>
          </div>

          <div className="step" data-reveal style={stagger(1)}>
            <span className="step-num">02</span>
            <div className="step-body">
              <h4>准备构建依赖</h4>
              <p>核心依赖与各平台编译工具要求如下，打包工具为可选项。</p>
              <div className="req-grid">
                {buildRequirements.map((requirement, index) => (
                  <div className="req-card" key={requirement.name}>
                    <div className="req-head">
                      <span className="req-name">{requirement.name}</span>
                      <span className="req-idx">{pad(index)}</span>
                    </div>
                    <p className="req-note">{requirement.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="step" data-reveal style={stagger(2)}>
            <span className="step-num">03</span>
            <div className="step-body">
              <h4>运行构建脚本</h4>
              <p>
                依赖不在默认路径时，用环境变量指定位置，例如{' '}
                <code>QT_INSTALL_DIR</code>、<code>QIF_ROOT_PATH</code>、
                <code>ANDROID_HOME</code>。
              </p>

              <div
                className="tabs"
                role="tablist"
                aria-label="构建脚本平台选择"
                onKeyDown={onTabKeyDown}
              >
                <button
                  id="tab-unix"
                  className="tab"
                  type="button"
                  role="tab"
                  data-active={tab === 'unix'}
                  aria-selected={tab === 'unix'}
                  aria-controls="build-code-panel"
                  tabIndex={tab === 'unix' ? 0 : -1}
                  onClick={() => changeTab('unix')}
                >
                  类 Unix
                </button>
                <button
                  id="tab-win"
                  className="tab"
                  type="button"
                  role="tab"
                  data-active={tab === 'win'}
                  aria-selected={tab === 'win'}
                  aria-controls="build-code-panel"
                  tabIndex={tab === 'win' ? 0 : -1}
                  onClick={() => changeTab('win')}
                >
                  Windows
                </button>
              </div>

              <div
                id="build-code-panel"
                className="code"
                role="tabpanel"
                aria-labelledby={tab === 'unix' ? 'tab-unix' : 'tab-win'}
              >
                <div className="code-bar">
                  <span className="code-bar-left">
                    <span className="code-dots" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </span>
                    {tab === 'unix' ? 'bash · deploy/build.sh' : 'batch · deploy/build.bat'}
                  </span>
                  <button
                    className="code-copy"
                    type="button"
                    data-copied={copiedBuild}
                    onClick={copyBuild}
                  >
                    {copiedBuild ? <CheckIcon /> : <CopyIcon />}
                    {copiedBuild ? '已复制' : '复制脚本'}
                  </button>
                </div>
                <pre>
                  <CodeLines code={activeCode} />
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="build-info">
          <div className="info-cell" data-reveal>
            <h4>环境变量</h4>
            <p>脚本在依赖不在默认安装路径时，通过以下变量定位：</p>
            <div className="env-list">
              {envVars.map((env) => (
                <div className="env-row" key={env.key}>
                  <code>{env.key}</code>
                  <span>{env.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="info-cell" data-reveal style={stagger(1)}>
            <h4>在 IDE 中开发</h4>
            <p>任何能正确处理 CMake 和 Qt kits 的 IDE 都可以。</p>
            <div className="body-copy">
              <p>
                例如 Qt Creator、装了 Qt Extension Pack 的 VS Code。用 Xcode
                需先用 cmake 配置（最简单是先用 Qt Creator 配置一次），再打开构建目录里的{' '}
                <code>AmneziaVPN.xcodeproj</code>。改动实际发生在构建目录中，注意手动复制。
              </p>
              <p>
                Android Studio 同理：配置后打开构建目录下的客户端 Android 工程目录。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Translate() {
  return (
    <section className="section cta-band" id="contribute">
      <span className="cta-watermark" aria-hidden="true">
        *.ts
      </span>
      <div className="wrap cta-inner">
        <div data-reveal>
          <span className="cta-eyebrow">05 / Contribution</span>
          <h2 className="cta-title">参与界面翻译</h2>
          <p className="cta-copy">
            打开 GitHub Actions 标签页，点第一行成功构建，滚动到 Artifacts 下载{' '}
            <code>AmneziaVPN_translations</code>。解压后每个 <code>*.ts</code>{' '}
            文件对应一种语言，翻译或修正后提交回仓库的{' '}
            <code>client/translations</code> 目录即可。
          </p>
        </div>

        <div className="cta-aside" data-reveal style={stagger(2)}>
          <div className="cta-steps">
            <span className="cta-step">
              下载翻译包 <span>01</span>
            </span>
            <span className="cta-step">
              编辑对应语言的 *.ts <span>02</span>
            </span>
            <span className="cta-step">
              提交回 client/translations <span>03</span>
            </span>
          </div>
          <div className="cta-btn-row">
            <a
              className="btn btn--on-accent"
              href={links.actions}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon />
              前往 Actions 下载翻译包
              <ArrowUpRightIcon />
            </a>
            <a
              className="btn btn--on-accent-line"
              href={links.repo}
              target="_blank"
              rel="noreferrer noopener"
            >
              <TranslateIcon />
              查看 GitHub 仓库
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TechStack() {
  return (
    <section className="section section--tight" id="stack">
      <div className="wrap">
        <SectionHead
          num="06 / 技术栈"
          eyebrow="Open source stack"
          title="站在这些开源项目之上"
          desc="AmneziaVPN 依赖多个成熟开源项目协同运行。"
        />

        <div className="stack">
          {techStack.map((item, index) => (
            <a
              className="stack-item"
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              data-reveal
              style={stagger(index, 35)}
            >
              <div className="stack-top">
                <span className="stack-idx">{pad(index)}</span>
                <ArrowUpRightIcon />
              </div>
              <span className="stack-name">{item.name}</span>
              <span className="stack-role">{item.role}</span>
            </a>
          ))}
          <a
            className="stack-item"
            href={links.repo}
            target="_blank"
            rel="noreferrer noopener"
            data-reveal
            style={stagger(7, 35)}
          >
            <div className="stack-top">
              <span className="stack-idx">08</span>
              <ArrowUpRightIcon />
            </div>
            <span className="stack-name">以及更多……</span>
            <span className="stack-role">Third Party Open Source</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <SectionHead
          num="07 / 问答"
          eyebrow="FAQ"
          title="常见问题解答"
          desc="关于自托管部署、抗审查协议、分流配置与源码构建的核心问题。"
        />

        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <article
              className="faq-card"
              key={item.q}
              data-reveal
              style={stagger(index, 40)}
            >
              <span className="faq-num">{pad(index)}</span>
              <h3 className="faq-q">{item.q}</h3>
              <p className="faq-a">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const resourceLinks = [
  {
    name: '官网',
    meta: 'amnezia.org',
    href: links.site,
    icon: GlobeIcon,
  },
  {
    name: '备用官网（镜像）',
    meta: 'storage.googleapis.com/amnezia/amnezia.org',
    href: links.siteMirror,
    icon: GlobeIcon,
  },
  {
    name: '官方文档',
    meta: 'docs.amnezia.org',
    href: links.docs,
    icon: BookIcon,
  },
  {
    name: '文档镜像',
    meta: 'storage.googleapis.com/amnezia/docs',
    href: links.docsMirror,
    icon: BookIcon,
  },
  {
    name: '故障排查指南',
    meta: 'docs.amnezia.org/troubleshooting',
    href: links.troubleshooting,
    icon: WarnIcon,
  },
  {
    name: 'GitHub 仓库',
    meta: 'amnezia-vpn/amnezia-client',
    href: links.repo,
    icon: GithubIcon,
  },
  {
    name: 'English README',
    meta: 'github.com/amnezia-vpn/amnezia-client',
    href: links.readmeEn,
    icon: BookIcon,
  },
  {
    name: 'Русский README',
    meta: 'github.com/amnezia-vpn/amnezia-client',
    href: links.readmeRu,
    icon: BookIcon,
  },
  {
    name: 'Reddit 社区',
    meta: 'r/AmneziaVPN',
    href: links.reddit,
    icon: RedditIcon,
  },
  {
    name: 'Telegram 英文频道',
    meta: 'amnezia_vpn_en',
    href: links.tgEn,
    icon: TelegramIcon,
  },
  {
    name: 'Telegram 波斯语频道',
    meta: 'amnezia_vpn_ir',
    href: links.tgIr,
    icon: TelegramIcon,
  },
  {
    name: 'Telegram 缅甸语频道',
    meta: 'amnezia_vpn_mm',
    href: links.tgMm,
    icon: TelegramIcon,
  },
  {
    name: 'Telegram 俄语频道',
    meta: 'amnezia_vpn',
    href: links.tgRu,
    icon: TelegramIcon,
  },
  {
    name: '购买 6 或 12 个月高级版',
    meta: 'storage.googleapis.com/amnezia/pay',
    href: links.premium,
    icon: DownloadIcon,
  },
]

export function Resources() {
  return (
    <section className="section" id="links">
      <div className="wrap">
        <SectionHead
          num="08 / 资源"
          eyebrow="Links"
          title="官方入口与多语言社区"
          desc="如果你的地区无法访问主站，可以直接使用镜像链接。"
        />

        <div className="resource-grid">
          {resourceLinks.map((link, index) => {
            const Icon = link.icon

            return (
              <a
                className="resource-row"
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                data-reveal
                style={stagger(index, 30)}
              >
                <span className="resource-num">{pad(index)}</span>
                <span className="resource-icon">
                  <Icon />
                </span>
                <span className="resource-body">
                  <span className="resource-name">{link.name}</span>
                  <span className="resource-meta">{link.meta}</span>
                </span>
                <span className="resource-arrow">
                  <ArrowUpRightIcon />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Support() {
  return (
    <section className="section support theme-ink" id="support">
      <div className="wrap support-inner">
        <div data-reveal>
          <span className="eyebrow">09 / Support</span>
          <h2 className="support-title">准备部署你的专属 VPN？</h2>
          <p className="support-copy">
            立即下载全平台客户端；如遇连接或服务器配置问题，可先查阅故障排查文档，或前往
            Telegram 与{' '}
            <a
              className="inline-link"
              href={links.reddit}
              target="_blank"
              rel="noreferrer noopener"
            >
              Reddit
            </a>{' '}
            社区交流。
          </p>
          <div className="support-meta">
            Open Source · GPLv3 · Self Hosted VPN
          </div>
        </div>

        <div className="support-actions" data-reveal style={stagger(1)}>
          <a
            className="btn btn--accent"
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
            href={links.troubleshooting}
            target="_blank"
            rel="noreferrer noopener"
          >
            故障排查文档
            <ArrowUpRightIcon />
          </a>
          <a
            className="btn btn--line"
            href={links.tgEn}
            target="_blank"
            rel="noreferrer noopener"
          >
            <TelegramIcon />
            加入 Telegram
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer theme-ink">
      <div className="wrap">
        <div className="footer-wordmark" aria-hidden="true">
          <span>Amnezia</span>
          <div className="footer-stamp">
            <span className="stamp-tag">SELF HOSTED VPN CLIENT</span>
            <span className="stamp-sub">OPEN SOURCE · GPLV3 · 5 PLATFORMS</span>
          </div>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 3l7 3.5v5.2c0 4.4-3 7.6-7 9.3-4-1.7-7-4.9-7-9.3V6.5L12 3z" />
                </svg>
              </span>
              <span className="brand-word">
                Amnezia <span>VPN</span>
              </span>
            </a>
            <p>
              自托管 VPN 的最佳客户端。开源、抗审查、全平台。本页面为中文介绍站，内容整理自项目
              README。
            </p>
            <p className="footer-ack">
              本项目使用{' '}
              <a
                className="inline-link"
                href={links.browserstack}
                target="_blank"
                rel="noreferrer noopener"
              >
                BrowserStack
              </a>{' '}
              进行测试，感谢 BrowserStack 对本项目的支持。
            </p>
          </div>

          <div className="footer-col">
            <h5>产品</h5>
            <a href={links.downloads} target="_blank" rel="noreferrer noopener">
              官网下载
            </a>
            <a
              href={links.downloadsMirror}
              target="_blank"
              rel="noreferrer noopener"
            >
              镜像下载
            </a>
            <a href={links.releases} target="_blank" rel="noreferrer noopener">
              所有版本
            </a>
            <a href={links.premium} target="_blank" rel="noreferrer noopener">
              高级版
            </a>
          </div>

          <div className="footer-col">
            <h5>文档与源码</h5>
            <a href={links.docs} target="_blank" rel="noreferrer noopener">
              官方文档
            </a>
            <a
              href={links.troubleshooting}
              target="_blank"
              rel="noreferrer noopener"
            >
              故障排查
            </a>
            <a href={links.amneziawg} target="_blank" rel="noreferrer noopener">
              AmneziaWG
            </a>
            <a href={links.readmeEn} target="_blank" rel="noreferrer noopener">
              English README
            </a>
          </div>

          <div className="footer-col">
            <h5>社区</h5>
            <a href={links.repo} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href={links.reddit} target="_blank" rel="noreferrer noopener">
              Reddit
            </a>
            <a href={links.tgEn} target="_blank" rel="noreferrer noopener">
              Telegram 英文
            </a>
            <a href={links.tgRu} target="_blank" rel="noreferrer noopener">
              Telegram 俄语
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>GPLv3 开源许可 · 第三方组件遵循各自条款</span>
          <span className="heart">
            <HeartIcon />
            由开源社区维护
          </span>
          <a className="to-top" href="#top">
            回到顶部
            <ArrowIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
