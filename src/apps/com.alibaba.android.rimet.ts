// 来源: https://github.com/Lin-arm/GKD_subscription/blob/ca66aed8fd7c197acd4f5c3a53a707f989c3800a/src/apps/com.alibaba.android.rimet.ts
// 仅导入广告规则，保留上游编号、页面限制、排除条件与默认启用状态。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
      key: 1,
      name: '局部广告-消息列表上方广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '@FrameLayout > [vid="icft_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13325125',
        },
      ],
    },
  ],
});
