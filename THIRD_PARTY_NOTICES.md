# 第三方规则来源

京东和淘宝广告规则摘自 Lin-arm/GKD_subscription。

- 仓库：https://github.com/Lin-arm/GKD_subscription
- 上游提交：ca66aed8fd7c197acd4f5c3a53a707f989c3800a
- 获取日期：2026-10-14
- 文件：src/apps/com.jingdong.app.mall.ts、src/apps/com.taobao.taobao.ts
- 本地修改：仅保留名称为开屏广告、全屏广告、局部广告的规则组；保留规则编号、快照引用和误触排除条件。
- 未导入权限提示、更新提示、登录授权、支付设置等功能规则组；未添加全局规则。

获取时上游未提供可识别的 LICENSE 文件；本说明不授予额外许可，公开发布这些摘录前需确认上游授权。

这些规则通过 GKD 点击跳过或关闭广告，不拦截网络广告请求。适配效果需在手机上的对应应用版本中验证。

## 2026-10-14 新增的九个应用

- 来源：https://github.com/Lin-arm/GKD_subscription
- 上游提交：ca66aed8fd7c197acd4f5c3a53a707f989c3800a
- 获取日期：2026-10-14
- 包名及规则数量：
- com.alibaba.android.rimet.ts: 1 组 / 1 条
- com.eg.android.AlipayGphone.ts: 10 组 / 26 条
- com.netease.cloudmusic.ts: 6 组 / 13 条
- com.sankuai.meituan.ts: 7 组 / 19 条
- com.ss.android.ugc.aweme.ts: 8 组 / 12 条
- com.taobao.idlefish.ts: 4 组 / 11 条
- com.ximalaya.ting.android.ts: 5 组 / 9 条
- com.xunmeng.pinduoduo.ts: 7 组 / 19 条
- tv.danmaku.bili.ts: 15 组 / 29 条
- 导入开屏、全屏、局部和分段广告规则；保留上游默认启用状态、原始编号、步骤依赖、快照、页面限制和误触排除条件。
- 排除非广告功能组；额外排除支付宝借呗协议、免密支付操作、直接付款操作、转出原因询问、青少年模式提示，以及抖音广告/评论/直播满意度调查。
- 未更改既有京东、淘宝规则及全局规则。闲鱼信息流广告组上游标注可能误触，本地设置为默认禁用，需用户按需启用。
- 获取时上游未提供可识别的 LICENSE 文件；沿用前述许可状态记录。

## 2026-10-19 补充喜马拉雅开屏广告

- 来源：https://github.com/MengNianxiaoyao/gkd-subscription
- 上游提交：8daf5faa724d0b8fd26e3e7a1f46f16ecbfdf090
- 获取日期：2026-10-19
- 文件：src/apps/com.ximalaya.ting.android.ts
- 仅摘录 key 为 -1 的开屏广告组，保留上游选择器、次数限制、匹配时间和快照引用；既有五个规则组保持不变。
- 许可状态：本次未核实该来源的许可证，不声明额外授权。

## 2026-11-24 广告规则更新

- 本次核对了已引入第三方规则的 11 个应用。支付宝、抖音、淘宝、拼多多和哔哩哔哩的更新取自 [Lin-arm/GKD_subscription 的固定提交](https://github.com/Lin-arm/GKD_subscription/commit/aa10e7f361c3dcb8f123cc768d2adb35406b1a6d)。许可状态沿用前述记录。
- 支付宝更新了小程序开屏匹配、普通弹窗的页面排除条件和余额宝广告的误触排除条件。淘宝增加了聊天页弹窗适配，更新首页横幅的关闭条件。拼多多增加了对无标题网页中下单后弹窗的匹配。
- 抖音保留本地规则组 1、31、39 及各自的开关。组 1 采用新版直播浮窗匹配结构，仅匹配“立即查看”，并新增关闭视频页下载广告的规则。购买、游戏、下载直播浮窗和视频左下角卡片仍由原组处理。组 15 同步了“不感兴趣”按钮的新布局。
- 拼多多组 10 沿用 2026-10-14 导入的广告跳过规则。新版同编号规则会自动上滑跳过直播，超出本订阅的广告范围。
- 哔哩哔哩更新了首页推荐卡片、会员弹窗和视频详情页推广的关闭条件，并增加详情页推广菜单的备用匹配步骤。
- 喜马拉雅开屏规则另行核对至 [MengNianxiaoyao/gkd-subscription 的固定提交](https://github.com/MengNianxiaoyao/gkd-subscription/commit/59669d1ba39627d1300a87f0ec7220895acf53ed)，对应源文件与原记录一致。
