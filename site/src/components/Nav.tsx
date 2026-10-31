import { useEffect, useState } from 'react'
import { links } from '~/data'
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
} from './icons'

const navItems = [
  { href: '#features', label: '功能特性' },
  { href: '#protocols', label: '协议' },
  { href: '#platforms', label: '平台' },
  { href: '#build', label: '构建' },
  { href: '#links', label: '资源' },
]

const mobileItems = [
  { href: '#features', label: '功能特性', num: '01' },
  { href: '#protocols', label: '协议', num: '02' },
  { href: '#platforms', label: '平台', num: '03' },
  { href: '#build', label: '构建', num: '04' },
  { href: '#contribute', label: '参与贡献', num: '05' },
  { href: '#stack', label: '技术栈', num: '06' },
  { href: '#links', label: '相关链接', num: '07' },
  { href: '#support', label: '支持', num: '08' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      setScrolled(window.scrollY > 6)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 940) setOpen(false)
    }

    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="nav" data-scrolled={scrolled} data-open={open}>
      <span
        className="nav-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div className="wrap nav-inner">
        <a className="brand" href="#top" aria-label="Amnezia VPN 首页">
          <span className="brand-mark">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3l7 3.5v5.2c0 4.4-3 7.6-7 9.3-4-1.7-7-4.9-7-9.3V6.5L12 3z" />
            </svg>
          </span>
          <span className="brand-word">
            Amnezia <span>VPN</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="icon-btn"
            href={links.repo}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub 仓库"
          >
            <GithubIcon />
          </a>
          <a
            className="btn btn--solid btn--small nav-download"
            href={links.downloads}
            target="_blank"
            rel="noreferrer noopener"
          >
            <DownloadIcon />
            下载
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className="mobile-menu"
        id="mobile-menu"
        data-open={open}
        aria-hidden={!open}
      >
        <nav className="mobile-menu-links" aria-label="移动端导航">
          {mobileItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              <span>{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-foot">
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
            href={links.repo}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon />
            GitHub 仓库
          </a>
          <div className="mobile-menu-meta">
            <span>Open source · GPLv3</span>
            <span>zh-CN</span>
          </div>
        </div>
      </div>
    </header>
  )
}
