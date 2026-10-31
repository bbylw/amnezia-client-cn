import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { links } from '~/data'
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
} from './icons'

const navItems = [
  { id: 'features', href: '#features', label: '功能特性' },
  { id: 'protocols', href: '#protocols', label: '协议' },
  { id: 'platforms', href: '#platforms', label: '平台' },
  { id: 'build', href: '#build', label: '构建' },
  { id: 'faq', href: '#faq', label: '问答' },
  { id: 'links', href: '#links', label: '资源' },
] as const

const mobileItems = [
  { id: 'features', href: '#features', label: '功能特性', num: '01' },
  { id: 'protocols', href: '#protocols', label: '协议', num: '02' },
  { id: 'platforms', href: '#platforms', label: '平台', num: '03' },
  { id: 'build', href: '#build', label: '构建', num: '04' },
  { id: 'contribute', href: '#contribute', label: '参与贡献', num: '05' },
  { id: 'stack', href: '#stack', label: '技术栈', num: '06' },
  { id: 'faq', href: '#faq', label: '常见问答', num: '07' },
  { id: 'links', href: '#links', label: '相关链接', num: '08' },
  { id: 'support', href: '#support', label: '社区支持', num: '09' },
] as const

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('')
  const progressRef = useRef<HTMLSpanElement>(null)
  const scrolledRef = useRef(false)
  const toggleBtnRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max =
        document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`
      }
      const nextScrolled = window.scrollY > 8
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled
        setScrolled(nextScrolled)
      }
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
    const sectionIds = mobileItems.map((item) => item.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (!sections.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    )

    sections.forEach((sec) => io.observe(sec))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const firstLink = mobileMenuRef.current?.querySelector<HTMLElement>('a')
    firstLink?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleBtnRef.current?.focus()
        return
      }
      if (event.key === 'Tab' && mobileMenuRef.current) {
        const focusables = [
          toggleBtnRef.current,
          ...Array.from(
            mobileMenuRef.current.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled])',
            ),
          ),
        ].filter((el): el is HTMLElement => el !== null)

        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
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
      <div className="wrap nav-shell">
        <div className="nav-inner">
          <span
            ref={progressRef}
            className="nav-progress"
            aria-hidden="true"
          />

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
            {navItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-active={isActive}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
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
              下载客户端
            </a>
            <button
              ref={toggleBtnRef}
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
      </div>

      <div
        ref={mobileMenuRef}
        className="mobile-menu"
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="移动端导航菜单"
        data-open={open}
        aria-hidden={!open}
      >
        <nav className="mobile-menu-links" aria-label="移动端导航">
          {mobileItems.map((item, index) => {
            const delay = Math.min(index * 45, 360)
            return (
              <a
                key={item.href}
                href={item.href}
                data-active={activeId === item.id}
                style={{ '--step': `${delay}ms` } as CSSProperties}
                onClick={() => setOpen(false)}
              >
                <span>{item.num}</span>
                {item.label}
              </a>
            )
          })}
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
            <span>zh_CN</span>
          </div>
        </div>
      </div>
    </header>
  )
}
