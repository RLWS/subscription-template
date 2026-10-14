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
