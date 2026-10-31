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

export const taglineWords = [
  '把 ',
  'VPN ',
  '装回',
  '你自己的服务器上，',
  '容器部署、',
  '抗审查协议',
  '与按需分流',
  '全程由你掌控，',
  '不经任何第三方中转。',
] as const

export const manifestoPillars = [
  {
    code: 'SSH → DOCKER',
    label: '输入 IP 与 SSH 凭据，客户端自动拉起隔离的协议容器',
  },
  {
    code: 'DPI RESISTANT',
    label: '内置 AmneziaWG、XRay、Cloak 与 Shadowsocks 流量伪装',
  },
  {
    code: 'SPLIT TUNNEL',
    label: '支持按网站域名与应用程序维度精准分流',
  },
] as const

export const features = [
  {
    icon: 'bolt',
    title: '极易自动部署',
    body: '输入你的 IP 地址、SSH 登录名和密码，Amnezia 就会自动在你的服务器上安装 VPN Docker 容器并连接到 VPN，无需手写配置文件。',
    spec: 'SSH :22 · Auto Docker Provisioning',
  },
  {
    icon: 'server',
    title: '专属自托管服务器',
    body: 'VPN 服务端完全运行在你自己的机器上，不经过第三方中转。密钥、流量和容器控制权都留在你手里。',
    spec: 'Self Hosted · Zero Third Party Relay',
  },
  {
    icon: 'mask',
    title: '流量伪装与混淆',
    body: '内置基于 Cloak 插件的 OpenVPN、Shadowsocks（OpenVPN over Shadowsocks）、AmneziaWG 以及 XRay，应对深度包检测。',
    spec: 'AmneziaWG · XRay · Cloak · Shadowsocks',
  },
  {
    icon: 'split',
    title: '按网站与应用分流',
    body: '支持 Split tunneling，可将任意网站加入客户端列表，仅对这些网站启用 VPN；也可按应用分流（支持 Android 和桌面端）。',
    spec: 'Domain & Application Split Tunneling',
  },
  {
    icon: 'devices',
    title: '五大平台全覆盖',
    body: '官方提供 Windows、macOS、Linux、Android、iOS 客户端版本，跨设备保持一致的自托管连接体验。',
    spec: 'Desktop & Mobile · Qt 6 Native UI',
  },
  {
    icon: 'router',
    title: '路由器固件支持',
    body: '支持在 Keenetic 测试版固件上配置 AmneziaWG 协议，将整网设备流量直接纳入加密隧道。',
    spec: 'Keenetic OS · AmneziaWG Tunnel',
    href: links.keenetic,
    linkLabel: '查看 Keenetic 固件文档',
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
  'Self Hosted',
  'GPLv3',
] as const

export const classicProtocols = [
  { name: 'OpenVPN', tag: 'TCP / UDP · TLS' },
  { name: 'WireGuard', tag: 'UDP · Kernel / Userspace' },
  { name: 'IKEv2', tag: 'IPSec · Mobile Ready' },
] as const

export const stealthProtocols = [
  {
    name: 'OpenVPN over Cloak',
    tag: 'HTTPS Obfuscation',
    href: links.cloak,
  },
  {
    name: 'OpenVPN over Shadowsocks',
    tag: 'AEAD Stream Cipher',
    href: links.docs,
  },
  {
    name: 'AmneziaWG',
    tag: 'Stealth WireGuard',
    href: links.amneziawg,
  },
  {
    name: 'XRay',
    tag: 'VLESS · XTLS Reality',
    href: 'https://xtls.github.io/en/',
  },
] as const

export const platforms = [
  { name: 'Windows', icon: 'windows', target: 'x64 · EXE / MSI' },
  { name: 'macOS', icon: 'apple', target: 'Universal · DMG' },
  { name: 'Linux', icon: 'linux', target: 'x64 · AppImage / Tar' },
  { name: 'Android', icon: 'android', target: 'ARM64 · APK / Play' },
  { name: 'iOS', icon: 'apple', target: 'iPhone & iPad · App Store' },
] as const

export const techStack = [
  { name: 'OpenSSL', role: 'TLS & Cryptography', href: 'https://www.openssl.org/' },
  { name: 'OpenVPN', role: 'Classic Tunnel', href: 'https://openvpn.net/' },
  { name: 'Qt', role: 'Cross Platform UI', href: 'https://www.qt.io/' },
  { name: 'LibSsh', role: 'Remote Provisioning', href: 'https://libssh.org' },
  { name: 'WireGuard', role: 'Fast Modern VPN', href: 'https://www.wireguard.com/' },
  { name: 'Xray Core', role: 'Stealth Proxy Engine', href: 'https://xtls.github.io/en/' },
  { name: 'Conan', role: 'C++ Package Manager', href: 'https://conan.io/' },
] as const

export const buildRequirements = [
  {
    name: 'CMake',
    note: '跨平台构建系统入口，用于配置与生成各平台工程文件',
  },
  {
    name: '编译器与底层构建系统',
    note: 'Linux 使用 make 或 gcc；Apple 使用 Xcode 或命令行工具；Windows 使用 VS 2022；Android 使用 Android SDK 与 Ninja',
  },
  {
    name: 'Qt 6.10+',
    note: '需包含目标平台 Core 模块（桌面端 / Android / iOS）、Qt 5 兼容模块及 Qt Remote Objects',
  },
  {
    name: 'Conan 包管理器',
    note: 'macOS 可通过 homebrew 或项目根目录 .venv 安装，其他系统需加入 PATH 环境变量',
  },
  {
    name: 'Qt Installer Framework',
    note: '可选依赖，用于构建 Windows 与 Linux 平台安装程序',
  },
  {
    name: 'WIX 工具集',
    note: '可选依赖，用于构建 Windows 平台 MSI 安装包',
  },
] as const

export const envVars = [
  { key: 'QT_INSTALL_DIR', desc: 'Qt 根安装目录' },
  { key: 'QT_ROOT_PATH', desc: 'Qt 框架根目录' },
  { key: 'QIF_ROOT_PATH', desc: 'Qt Installer Framework 根路径' },
  { key: 'ANDROID_HOME', desc: 'Android SDK 根目录' },
] as const

export const faqItems = [
  {
    q: 'Amnezia VPN 如何完成自托管部署？',
    a: '你只需要准备一台自己的服务器，在客户端中输入服务器 IP 地址、SSH 登录名和密码，Amnezia 就会自动通过 SSH 在服务器上安装对应的 VPN Docker 容器并完成连接配置。',
  },
  {
    q: '支持哪些抗审查与流量伪装协议？',
    a: '除 OpenVPN、WireGuard 和 IKEv2 经典协议外，客户端内置了基于 Cloak 插件的 OpenVPN、Shadowsocks（OpenVPN over Shadowsocks）、AmneziaWG 以及 XRay 协议。',
  },
  {
    q: '分流（Split tunneling）支持哪些粒度？',
    a: '你可以将指定网站加入客户端列表，仅让这些网站走 VPN 隧道；在 Android 与桌面端版本中，还可以按应用程序维度配置分流规则。',
  },
  {
    q: '如果所在地区无法打开官网或文档怎么办？',
    a: '可以直接访问托管在 Google Cloud Storage 上的备用官网镜像与文档镜像，也可以前往 GitHub Releases 页面直接下载全平台安装包。',
  },
  {
    q: '如何在 Xcode 或 Android Studio 中调试源码？',
    a: '先使用 CMake 或 Qt Creator 完成一次项目配置，随后在 Xcode 中打开构建目录下的 AmneziaVPN.xcodeproj，或在 Android Studio 中打开客户端构建目录下的 android 构建文件夹。注意修改保存在构建目录中，需手动同步回源码树。',
  },
  {
    q: '项目采用什么开源许可？如何参与翻译？',
    a: '本项目基于 GNU GPLv3 许可证发布。如需协助翻译，可在 GitHub Actions 最新成功构建的 Artifacts 中下载 AmneziaVPN_translations，编辑对应语言的 .ts 文件后提交至 client/translations 目录。',
  },
] as const
