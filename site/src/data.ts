export const links = {
  site: 'https://amnezia.org',
  siteMirror: 'https://storage.googleapis.com/amnezia/amnezia.org',
  docs: 'https://docs.amnezia.org',
  docsMirror: 'https://storage.googleapis.com/amnezia/docs',
  troubleshooting: 'https://docs.amnezia.org/troubleshooting',
  downloads: 'https://amnezia.org/en/downloads',
  downloadsMirror:
    'https://storage.googleapis.com/amnezia/amnezia.org?m-path=/en/downloads',
  releases: 'https://github.com/amnezia-vpn/amnezia-client/releases',
  repo: 'https://github.com/amnezia-vpn/amnezia-client',
  actions:
    'https://github.com/amnezia-vpn/amnezia-client/actions?query=is%3Asuccess+branch%3Adev',
  premium: 'https://storage.googleapis.com/amnezia/pay',
  reddit: 'https://www.reddit.com/r/AmneziaVPN',
  tgEn: 'https://telegram.me/amnezia_vpn_en',
  tgIr: 'https://telegram.me/amnezia_vpn_ir',
  tgMm: 'https://telegram.me/amnezia_vpn_mm',
  tgRu: 'https://telegram.me/amnezia_vpn',
  browserstack: 'https://www.browserstack.com',
  amneziawg: 'https://docs.amnezia.org/documentation/amnezia-wg/',
  cloak: 'https://github.com/cbeuw/Cloak',
  keenetic:
    'https://docs.keenetic.com/ua/air/kn-1611/en/6319-latest-development-release.html',
  readmeEn:
    'https://github.com/amnezia-vpn/amnezia-client/blob/dev/README.md',
  readmeRu:
    'https://github.com/amnezia-vpn/amnezia-client/blob/dev/README_RU.md',
} as const

export const features = [
  {
    icon: 'bolt',
    title: '极易使用',
    body: '输入你的 IP 地址、SSH 登录名和密码，Amnezia 就会自动在你的服务器上安装 VPN Docker 容器并连接到 VPN。不需要手写配置文件。',
    tone: 'blue',
  },
  {
    icon: 'server',
    title: '自托管服务器',
    body: 'VPN 服务器跑在你自己的机器上，不经过第三方。密钥、流量和日志都留在你手里。',
    tone: 'violet',
  },
  {
    icon: 'mask',
    title: '流量伪装',
    body: '基于 Cloak 插件的 OpenVPN、Shadowsocks（OpenVPN over Shadowsocks）、AmneziaWG 以及 XRay，让流量看起来不像 VPN。',
    tone: 'green',
  },
  {
    icon: 'split',
    title: '分流（Split tunneling）',
    body: '可将任意网站加入客户端，仅对这些网站启用 VPN；也可按应用分流（仅限 Android 和桌面端）。',
    tone: 'blue',
  },
  {
    icon: 'devices',
    title: '全平台覆盖',
    body: '提供 Windows、macOS、Linux、Android、iOS 版本，同一套客户端体验。',
    tone: 'violet',
  },
  {
    icon: 'router',
    title: '路由器支持',
    body: '支持在 Keenetic 测试版固件上配置 AmneziaWG 协议，把整网流量纳入隧道。',
    tone: 'green',
  },
] as const

export const marqueeItems = [
  'OpenVPN',
  'WireGuard',
  'IKEv2',
  'AmneziaWG',
  'XRay',
  'Cloak',
  'Shadowsocks',
  'Self-hosted',
  'GPLv3',
] as const

export const classicProtocols = ['OpenVPN', 'WireGuard', 'IKEv2'] as const

export const stealthProtocols = [
  {
    name: 'OpenVPN over Cloak',
    href: 'https://github.com/cbeuw/Cloak',
  },
  {
    name: 'OpenVPN over Shadowsocks',
    href: 'https://docs.amnezia.org',
  },
  {
    name: 'AmneziaWG',
    href: 'https://docs.amnezia.org/documentation/amnezia-wg/',
  },
  {
    name: 'XRay',
    href: 'https://xtls.github.io/en/',
  },
] as const

export const platforms = [
  { name: 'Windows', icon: 'windows' },
  { name: 'macOS', icon: 'apple' },
  { name: 'Linux', icon: 'linux' },
  { name: 'Android', icon: 'android' },
  { name: 'iOS', icon: 'apple' },
] as const

export const techStack = [
  'OpenSSL',
  'OpenVPN',
  'Qt',
  'LibSsh',
  'WireGuard',
  'Xray-core',
  'Conan',
] as const

export const buildRequirements = [
  {
    name: 'CMake',
    note: '构建系统入口',
  },
  {
    name: '编译器 / 构建系统',
    note: '按目标平台选择：Linux 用 make 或 gcc；Apple 用 Xcode 或命令行工具；Windows 用 Visual Studio 2022 或生成工具；Android 用 Android SDK + Ninja',
  },
  {
    name: 'Qt 6.10+',
    note: '需包含目标平台的 Core 模块（桌面端 / Android / iOS）、Qt 5 兼容模块、Qt Remote Objects',
  },
  {
    name: 'Conan',
    note: '包管理器。macOS 上可用 homebrew 或项目根目录的 .venv 安装，其他系统需加入 PATH',
  },
  {
    name: 'Qt Installer Framework',
    note: '可选，Windows / Linux 打包用',
  },
  {
    name: 'WIX 工具集',
    note: '可选，Windows 打包用',
  },
] as const

export const envVars = [
  { key: 'QT_INSTALL_DIR', desc: 'Qt 根安装目录' },
  { key: 'QT_ROOT_PATH', desc: 'Qt 框架根目录' },
  { key: 'QIF_ROOT_PATH', desc: 'Qt Installer Framework 根路径' },
  { key: 'ANDROID_HOME', desc: 'Android SDK 根目录' },
] as const
