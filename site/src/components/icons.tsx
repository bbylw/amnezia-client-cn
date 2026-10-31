import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ShieldIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l7 3.5v5.2c0 4.4-3 7.6-7 9.3-4-1.7-7-4.9-7-9.3V6.5L12 3z" />
      <path d="M9.2 12.1l2 2 3.6-3.9" />
    </svg>
  )
}

export function BoltIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2.5L5 13.5h5.5L10 21.5l8-11h-5.5l.5-8z" />
    </svg>
  )
}

export function ServerIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="6.5" rx="2" />
      <rect x="3" y="13.5" width="18" height="6.5" rx="2" />
      <path d="M7 7.25h.01M7 16.75h.01" />
    </svg>
  )
}

export function SplitIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3 12h5" />
      <path d="M8 12c3 0 3-6 6-6h5" />
      <path d="M8 12c3 0 3 6 6 6h5" />
      <path d="M17 3.5l2.5 2.5L17 8.5" />
      <path d="M17 15.5l2.5 2.5L17 20.5" />
    </svg>
  )
}

export function MaskIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3 9.5c3-1.5 6-2.2 9-2.2s6 .7 9 2.2c-.4 5-3.6 8.5-9 10.5C6.6 18 3.4 14.5 3 9.5z" />
      <path d="M8.5 12.5h.01M15.5 12.5h.01" />
    </svg>
  )
}

export function DevicesIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="5" width="13" height="9" rx="1.8" />
      <path d="M6 18h6" />
      <rect x="17" y="10" width="4.5" height="9" rx="1.4" />
    </svg>
  )
}

export function RouterIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="13" width="19" height="7" rx="2" />
      <path d="M6.5 16.5h.01M10 16.5h.01" />
      <path d="M12 9.5V6M8.5 8a5 5 0 017 0" />
    </svg>
  )
}

export function LockIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.4" />
      <path d="M8 10.5V7.8a4 4 0 018 0v2.7" />
    </svg>
  )
}

export function CodeIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M8.5 8.5L4 12l4.5 3.5M15.5 8.5L20 12l-4.5 3.5" />
    </svg>
  )
}

export function GlobeIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.4 3.6 8.5S14.4 18.4 12 20.5c-2.4-2.1-3.6-5.4-3.6-8.5S9.6 6.1 12 3.5z" />
    </svg>
  )
}

export function ChatIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M20.5 12c0 4.1-3.8 7.4-8.5 7.4-1 0-2-.15-2.9-.42L4 20.5l1.4-3.7A7 7 0 013.5 12C3.5 7.9 7.3 4.6 12 4.6s8.5 3.3 8.5 7.4z" />
    </svg>
  )
}

export function BookIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5.5A2 2 0 016 3.5h4.5v17H6a2 2 0 00-2 2v-17z" />
      <path d="M20 5.5a2 2 0 00-2-2h-4.5v17H18a2 2 0 012 2v-17z" />
    </svg>
  )
}

export function DownloadIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.5v11M7.5 10.5l4.5 4.5 4.5-4.5" />
      <path d="M4.5 19.5h15" />
    </svg>
  )
}

export function ArrowIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h13M13 7l5 5-5 5" />
    </svg>
  )
}

export function ArrowUpRightIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}

export function CheckIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4.5 12.5l5 5L19.5 6.5" />
    </svg>
  )
}

export function LaptopIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="5" width="17" height="11" rx="1.8" />
      <path d="M2 19.5h20" />
    </svg>
  )
}

export function PowerIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.5v8.5" />
      <path d="M7 6.2a8 8 0 109.9 0" />
    </svg>
  )
}

export function TerminalIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M7 9.5l3 2.5-3 2.5M13 15h4" />
    </svg>
  )
}

export function TranslateIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3.5 6h9M8 3.5v2.5M5 6c.5 3.4 2.2 5.7 5.5 7" />
      <path d="M10.8 20.5l3.7-8.2 3.7 8.2M12.3 17.4h4.4" />
    </svg>
  )
}

export function GithubIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.06 10.06 0 0022 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

export function TelegramIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M21.6 4.3L2.9 11.5c-.9.35-.88 1.63.03 1.94l4.6 1.55 1.78 5.5c.24.74 1.2.9 1.68.3l2.5-3.1 4.6 3.4c.6.44 1.46.11 1.62-.62l3.2-14.6c.16-.75-.58-1.36-1.3-1.07zM9.3 14.2l8.6-5.4-6.9 6.3-.3 3.1-1.4-4z" />
    </svg>
  )
}

export function RedditIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M22 11.8a2.1 2.1 0 00-3.6-1.5 10.3 10.3 0 00-5.5-1.7l1-4.2 3 .7a1.6 1.6 0 101.5-1.9 1.6 1.6 0 00-1.5 1l-3.5-.8a.6.6 0 00-.7.5l-1.1 4.7a10.4 10.4 0 00-5.6 1.7A2.1 2.1 0 102 13.9a4 4 0 000 .6c0 3.3 3.9 6 8.7 6s8.7-2.7 8.7-6a4 4 0 000-.6 2.1 2.1 0 002.6-2.1zM8.4 13.5a1.4 1.4 0 111.4 1.4 1.4 1.4 0 01-1.4-1.4zm7.5 3.9a5.2 5.2 0 01-3.9 1.3 5.2 5.2 0 01-3.9-1.3.4.4 0 01.6-.6 4.5 4.5 0 003.3 1 4.5 4.5 0 003.3-1 .4.4 0 01.6.6zm-.3-2.5a1.4 1.4 0 111.4-1.4 1.4 1.4 0 01-1.4 1.4z" />
    </svg>
  )
}

export function WindowsIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M3 5.5l7.5-1v7H3v-6zM11.5 4.3L21 3v8.5h-9.5v-7.2zM3 12.5h7.5v7L3 18.5v-6zM11.5 12.5H21V21l-9.5-1.3v-7.2z" />
    </svg>
  )
}

export function AppleIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.15-2.8.85-3.5.85-.7 0-1.8-.83-3-.8-1.5.02-2.9.9-3.7 2.25-1.6 2.75-.4 6.8 1.1 9 .75 1.1 1.65 2.3 2.8 2.25 1.1-.05 1.55-.72 2.9-.72s1.75.72 2.9.7c1.2-.02 1.95-1.1 2.7-2.2.85-1.25 1.2-2.45 1.2-2.5-.03-.01-2.3-.9-2.3-3.5zM14.1 5.6c.6-.75 1-1.8.9-2.85-.9.04-2 .6-2.65 1.35-.6.68-1.1 1.75-.95 2.8 1 .07 2-.5 2.7-1.3z" />
    </svg>
  )
}

export function LinuxIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2c-2.1 0-3.4 1.7-3.4 3.9 0 1.3.1 2.3-.5 3.4-.7 1.2-1.9 2.4-2.4 4-.4 1.3-.1 2.6.6 3.3-.4.5-.5 1.1-.2 1.6.4.7 1.4 1 2.3 1.2.6.5 1.6 1 3.6 1s3-.5 3.6-1c.9-.2 1.9-.5 2.3-1.2.3-.5.2-1.1-.2-1.6.7-.7 1-2 .6-3.3-.5-1.6-1.7-2.8-2.4-4-.6-1.1-.5-2.1-.5-3.4C15.4 3.7 14.1 2 12 2zm-1.4 3.1c.4 0 .7.4.7 1s-.3 1-.7 1-.7-.4-.7-1 .3-1 .7-1zm2.8 0c.4 0 .7.4.7 1s-.3 1-.7 1-.7-.4-.7-1 .3-1 .7-1zM12 7.6c.7 0 1.5.5 1.5.9 0 .4-.8.9-1.5.9s-1.5-.5-1.5-.9c0-.4.8-.9 1.5-.9z" />
    </svg>
  )
}

export function AndroidIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M6.6 7.5h10.8c.5 0 .9.4.9.9v7.2a1.6 1.6 0 01-1.6 1.6h-.5v2.1a1.2 1.2 0 11-2.4 0v-2.1h-3.6v2.1a1.2 1.2 0 11-2.4 0v-2.1h-.5a1.6 1.6 0 01-1.6-1.6V8.4c0-.5.4-.9.9-.9zM3.9 8.2c.66 0 1.2.54 1.2 1.2v5c0 .66-.54 1.2-1.2 1.2a1.2 1.2 0 01-1.2-1.2v-5c0-.66.54-1.2 1.2-1.2zm16.2 0c.66 0 1.2.54 1.2 1.2v5c0 .66-.54 1.2-1.2 1.2a1.2 1.2 0 01-1.2-1.2v-5c0-.66.54-1.2 1.2-1.2zM8.1 6.4l-.9-1.6a.3.3 0 01.5-.3l.9 1.6a6.4 6.4 0 016.8 0l.9-1.6a.3.3 0 01.5.3l-.9 1.6A5.6 5.6 0 0112 7.2a5.6 5.6 0 01-3.9-.8zM9.5 5.1a.4.4 0 100 .8.4.4 0 000-.8zm5 0a.4.4 0 100 .8.4.4 0 000-.8z" />
    </svg>
  )
}

export function HeartIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0112 8.2a4.1 4.1 0 017.5 2.4C19.5 15.4 12 20 12 20z" />
    </svg>
  )
}

export function WarnIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.5l8.5 15H3.5L12 3.5z" />
      <path d="M12 9.5v4M12 16.5h.01" />
    </svg>
  )
}

export function CopyIcon(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M15 5.5A1.5 1.5 0 0013.5 4H6a2 2 0 00-2 2v7.5A1.5 1.5 0 005.5 15" />
    </svg>
  )
}
