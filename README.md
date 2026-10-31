# Amnezia VPN

### _自托管 VPN 的最佳客户端_

[![构建状态](https://github.com/amnezia-vpn/amnezia-client/actions/workflows/deploy.yml/badge.svg?branch=dev)](https://github.com/amnezia-vpn/amnezia-client/actions/workflows/deploy.yml?query=branch:dev)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/amnezia-vpn/amnezia-client)

### [English](https://github.com/amnezia-vpn/amnezia-client/blob/dev/README.md) | [Русский](https://github.com/amnezia-vpn/amnezia-client/blob/dev/README_RU.md)

[Amnezia](https://amnezia.org?utm_source=github&utm_campaign=amnezia_website-readme-en) 是一款开源的 VPN 客户端，其核心特性是让你能够在自己的服务器上部署专属的 VPN 服务器。

[![图片](https://raw.githubusercontent.com/amnezia-vpn/amnezia-client/dev/metadata/img-readme/uipic4.png)](https://amnezia.org)

### [官网](https://amnezia.org?utm_source=github&utm_campaign=amnezia_website-readme-en) | [备用官网链接](https://storage.googleapis.com/amnezia/amnezia.org?utm_source=github&utm_campaign=amnezia_website-readme-en-mirror) | [文档](https://docs.amnezia.org) | [故障排查](https://docs.amnezia.org/troubleshooting)

> [!TIP]
> 如果你的地区无法访问 [Amnezia 官网](https://amnezia.org?utm_source=github&utm_campaign=amnezia_website-readme-en)，可以使用[备用官网链接](https://storage.googleapis.com/amnezia/amnezia.org?utm_source=github&utm_campaign=amnezia_website-readme-en-mirror)。

<a href="https://amnezia.org/en/downloads?utm_source=github&utm_campaign=amnezia_button-readme-en"><img src="https://raw.githubusercontent.com/amnezia-vpn/amnezia-client/dev/metadata/img-readme/download-website.svg" width="150" style="max-width: 100%; margin-right: 10px"></a>
<a href="https://storage.googleapis.com/amnezia/amnezia.org?m-path=/en/downloads&utm_source=github&utm_campaign=amnezia_button-readme-en-mirrow"><img src="https://raw.githubusercontent.com/amnezia-vpn/amnezia-client/dev/metadata/img-readme/download-alt.svg" width="150" style="max-width: 100%;"></a>

[所有版本](https://github.com/amnezia-vpn/amnezia-client/releases)

<br/>

<a href="https://www.testiny.io"><img src="https://raw.githubusercontent.com/amnezia-vpn/amnezia-client/dev/metadata/img-readme/testiny.png" height="28px"></a>

## 功能特性

- 极易使用——输入你的 IP 地址、SSH 登录名、密码，Amnezia 就会自动在你的服务器上安装 VPN Docker 容器并连接到 VPN。
- 经典 VPN 协议：OpenVPN、WireGuard 和 IKEv2 协议。
- 支持流量伪装（混淆）的协议：基于 [Cloak](https://github.com/cbeuw/Cloak) 插件的 OpenVPN、Shadowsocks（OpenVPN over Shadowsocks）、[AmneziaWG](https://docs.amnezia.org/documentation/amnezia-wg/) 以及 XRay。
- 支持分流（Split tunneling）——可将任意网站加入客户端，仅对这些网站启用 VPN，也可添加应用（仅限 Android 和桌面端）。
- 提供 Windows、MacOS、Linux、Android、iOS 版本。
- 支持在 [Keenetic 测试版固件](https://docs.keenetic.com/ua/air/kn-1611/en/6319-latest-development-release.html#UUID-186c4108-5afd-c10b-f38a-cdff6c17fab3_section-idm33192196168192-improved) 上配置 AmneziaWG 协议。

## 相关链接

- [https://amnezia.org](https://amnezia.org/?utm_source=github&utm_campaign=amnezia_website-read) - 项目官网 | [备用链接（镜像）](https://storage.googleapis.com/amnezia/amnezia.org?utm_source=github&utm_campaign=amnezia_website-read)
- [https://docs.amnezia.org](https://docs.amnezia.org/?utm_source=github&utm_campaign=amnezia_website-read) - 文档 | [备用链接（镜像）](https://storage.googleapis.com/amnezia/docs?utm_source=github&utm_campaign=amnezia_website-read)
- [https://www.reddit.com/r/AmneziaVPN](https://www.reddit.com/r/AmneziaVPN) - Reddit
- [https://telegram.me/amnezia_vpn_en](https://telegram.me/amnezia_vpn_en) - Telegram 支持频道（英文）
- [https://telegram.me/amnezia_vpn_ir](https://telegram.me/amnezia_vpn_ir) - Telegram 支持频道（波斯语）
- [https://telegram.me/amnezia_vpn_mm](https://telegram.me/amnezia_vpn_mm) - Telegram 支持频道（缅甸语）
- [https://telegram.me/amnezia_vpn](https://telegram.me/amnezia_vpn) - Telegram 支持频道（俄语）
- [购买 6 或 12 个月高级版](https://storage.googleapis.com/amnezia/pay?utm_source=github&utm_campaign=ampay-read)

## 技术栈

AmneziaVPN 依赖多个开源项目才能运行：

- [OpenSSL](https://www.openssl.org/)
- [OpenVPN](https://openvpn.net/)
- [Qt](https://www.qt.io/)
- [LibSsh](https://libssh.org)
- [WireGuard](https://www.wireguard.com/)
- [Xray-core](https://xtls.github.io/en/)
- [Conan](https://conan.io/)
- 以及更多……

## 帮助我们翻译

下载最新的翻译文件。

进入 ["Actions" 标签页](https://github.com/amnezia-vpn/amnezia-client/actions?query=is%3Asuccess+branch%3Adev)，点击第一行。
然后向下滚动到 "Artifacts" 区域，下载 "AmneziaVPN_translations"。

解压该文件。
每个 `*.ts` 文件包含对应一种语言的字符串。

在一个或多个 `*.ts` 文件中翻译或修正部分字符串，然后将其提交回本仓库的 `client/translations` 文件夹。
你可以通过网页界面或其他你熟悉的方式来完成。

## 检出源代码

检出仓库后，请务必拉取所有子模块。

```bash
git submodule update --init --recursive
```

## 开发指南

想要参与贡献？欢迎！

### 构建要求

* [`CMake`](https://cmake.org/download/)
* 编译器及底层构建系统，取决于目标平台：
  - [Linux] `make` 或 `gcc` 任选其一
  - [Apple] [`Xcode`](https://developer.apple.com/xcode/) 或 [`Xcode 命令行工具`](https://developer.apple.com/xcode/)
  - [Windows] [`Visual Studio 2022`](https://aka.ms/vs/17/release/vs_community.exe) 或 [`VS 2022 生成工具`](https://aka.ms/vs/17/release/vs_buildtools.exe)
  - [Android] [`Android SDK`](#installing-android-sdk) 和 [`Ninja`](https://ninja-build.org/)
* [`Qt 6.10+`](https://www.qt.io/download-open-source)，需包含以下模块：
  - 针对目标平台的 Core 模块（桌面端 / Android / iOS）
  - Qt 5 兼容模块
  - Qt Remote Objects
* [`Conan`](https://conan.io/downloads) 包管理器
  - 在 MacOS 上，使用 `homebrew` 或在项目根目录的 `.venv` 中安装即可
  - 其他系统需将其加入 `PATH`
* （可选）安装包依赖：
  - [Windows/Linux] [`Qt Installer Framework`](https://www.qt.io/download-open-source)
  - [Windows] [`WIX 工具集`](https://github.com/wixtoolset/wix/releases)

### 使用脚本构建项目

* 运行 `deploy` 目录下的脚本
* 通常情况下，如果依赖位于默认安装路径，脚本会自动找到它们。
* 若路径不同，请通过以下变量指定：
  - `QT_INSTALL_DIR` - Qt 根安装目录
  - `QT_ROOT_PATH`   - Qt 框架根目录
  - `QIF_ROOT_PATH`  - Qt Installer Framework 根路径
  - `ANDROID_HOME`   - Android SDK 根目录
  - 以及其他。详见各脚本。

类 Unix 系统：
```bash
# 为主机平台构建可执行文件
deploy/build.sh

# 或者直接
deploy/build.sh

# 为主机平台构建可执行文件及安装包
deploy/build.sh --installer all

# 构建 Android APK 和 AAB
deploy/build.sh -t android --aab

# 查看帮助
deploy/build.sh -h
```

Windows：
```batch
:: 构建 Windows 可执行文件
deploy/build.bat

:: 使用 IFW 安装包构建 Windows 可执行文件
deploy/build.bat --installer ifw

:: 使用 IFW 和 WIX 安装包构建 Windows 可执行文件
deploy/build.bat --installer ifw --installer wix

:: 或者直接
deploy/build.bat --installer all
```

### 在 IDE 中开发项目

* 基本上，你可以使用任何能正确处理 CMake 和 Qt kits 的 IDE 来运行配置和构建步骤，并顺畅地浏览代码。例如：
  - `Qt Creator`
  - 安装了 `Qt Extension Pack` 的 `Visual Studio Code`
  - 等等

* 要使用 `Xcode`，你必须先通过 `cmake` 配置项目。最简单的方法是先用 `Qt Creator` 完成配置。然后使用 `Xcode` 打开构建目录中的 `AmneziaVPN.xcodeproj` 文件。注意：你所做的任何修改都不会被保存——实际改动都发生在构建目录中。必要时请手动复制。

* `Android studio` 也可同样使用——只需通过 `cmake` 手动或使用 `Qt Creator` 配置项目。然后在 `Android studio` 中打开 `<build-dir>/client/android-build`。别忘了复制修改内容——你做的所有更改实际上都保存在构建目录中。

### 安装 Android SDK

* Android SDK 可通过以下方式安装：
  - 使用 `Qt Creator`。进入 `Preferences`->`SDKs`
  - 使用 `Android studio`。默认会在安装过程中自动安装所需的 `SDK`
  - 使用 `sdk-manager` 手动安装。详情请查看[此页面](https://developer.android.com/tools)。

## 许可证

本项目基于 GNU 通用公共许可证 v3.0 发布（见 LICENSE），同时也包含以各自条款分发的第三方组件（见 THIRD_PARTY_LICENSES.md）。

## 捐赠

Patreon：[https://www.patreon.com/amneziavpn](https://www.patreon.com/amneziavpn)

Bitcoin：bc1qmhtgcf9637rl3kqyy22r2a8wa8laka4t9rx2mf <br>
USDT BEP20：0x6abD576765a826f87D1D95183438f9408C901bE4 <br>
USDT TRC20：TELAitazF1MZGmiNjTcnxDjEiH5oe7LC9d <br>
XMR：48spms39jt1L2L5vyw2RQW6CXD6odUd4jFu19GZcDyKKQV9U88wsJVjSbL4CfRys37jVMdoaWVPSvezCQPhHXUW5UKLqUp3 <br>
TON：UQDpU1CyKRmg7L8mNScKk9FRc2SlESuI7N-Hby4nX-CcVmns

## 致谢

本项目使用 BrowserStack 进行测试。
我们向支持本项目的 [BrowserStack](https://www.browserstack.com) 表示感谢。
