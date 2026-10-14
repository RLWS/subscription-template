// 来源: https://github.com/Lin-arm/GKD_subscription/blob/ca66aed8fd7c197acd4f5c3a53a707f989c3800a/src/apps/com.xunmeng.pinduoduo.ts
// 仅导入广告规则，保留上游编号、页面限制、排除条件与默认启用状态。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  // 根选择器模板:'@View[id="main"] <<2 WebView[text="拼多多"] <<3 FrameLayout[vid!=null] <2 ViewGroup <2 FrameLayout <<3 [id="android:id/content"]'
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: '.activity.NewPageActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25691473',
          excludeSnapshotUrls: 'https://i.gkd.li/i/25691480',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 3,
          fastQuery: true,
          action: 'back',
          activityIds: [
            '.ui.activity.HomeActivity',
            '.ui.activity.MainFrameActivity',
          ],
          excludeMatches:
            '[text="我的订单" || text="聊天"][bottom<650][visibleToUser=true]',
          matches:
            '[text="开心收下" || text="去抢购" || text="立即抽免单" || text="去刮奖" || text="立即领取" || text="去领大额金币" || text="送你大额现金" || text*="红包助手" || text="刮刮卡发来的消息通知" || text="立即充值" || text="打款金额"][top>600][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13625441', //送你大额现金
            'https://i.gkd.li/i/13761182', //开心收下
            'https://i.gkd.li/i/13944165', //去领大额金币
            'https://i.gkd.li/i/14456101', //去刮奖
            'https://i.gkd.li/i/14596990', //立即领取
            'https://i.gkd.li/i/14614135', //立即抽免单
            'https://i.gkd.li/i/15360330', //开心收下
            'https://i.gkd.li/i/15032649', //去抢购
            'https://i.gkd.li/i/15076322', //去抢购
            'https://i.gkd.li/i/17564786', //红包助手向你发起一笔打款 / 打款金额
            'https://i.gkd.li/i/17585645', //来自红包助手
            'https://i.gkd.li/i/17625608', //刮刮卡发来的消息通知
            'https://i.gkd.li/i/18481318', //立即充值
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23352586', // [text="我的订单"]
            'https://i.gkd.li/i/23607429', // [text="聊天"]
            'https://i.gkd.li/i/28929991', // [bottom<650]
          ],
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.ui.activity.HomeActivity',
          matches:
            '@ViewGroup[clickable=true] - ViewGroup[childCount=3] >2 [text="其他"]',
          snapshotUrls: 'https://i.gkd.li/i/15103543',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: '.activity.NewPageMaskActivity',
          matches: [
            '[text="继续拼单"]',
            '@[clickable=true] > [text="先去逛逛"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15197527',
            'https://i.gkd.li/i/15211473',
          ],
        },
        {
          key: 7,
          activityIds: [
            '.ui.activity.HomeActivity',
            '.ui.activity.MainFrameActivity',
          ],
          matches:
            'ImageView[childCount=0][width<130&&height<130] < ViewGroup[childCount=1] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] <(1,2) ViewGroup <(1,2) ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <(1,2,3) [parent=null]',
          exampleUrls: 'https://e.gkd.li/f74b5f58-e518-4e33-bbb4-0bf28e2b79d8',
          snapshotUrls: [
            'https://i.gkd.li/i/17528782',
            'https://i.gkd.li/i/17655498',
            'https://i.gkd.li/i/17893977',
            'https://i.gkd.li/i/22741566',
          ],
        },
        {
          key: 8,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            '@ViewGroup[childCount=1][clickable=true] < ViewGroup[childCount=2] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] <2 FrameLayout <2 [parent=null]',
          exampleUrls: 'https://e.gkd.li/e5428072-9ee3-47e9-87ad-d8b47e24f173',
          snapshotUrls: 'https://i.gkd.li/i/17773799',
        },
        {
          key: 9,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            '@ImageView[index=0][vid="pdd"][childCount=0][visibleToUser=true][width<120&&height<120] < RelativeLayout[childCount=2] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [parent=null]',
          exampleUrls: 'https://e.gkd.li/64f35ab7-37e1-4060-aa91-468116a42cae',
          snapshotUrls: 'https://i.gkd.li/i/18375615',
        },
        {
          key: 10,
          activityIds: '.activity.NewPageActivity',
          matches: '[desc="关闭按钮"]',
          action: 'clickCenter', // 此界面不接受无障碍事件
          snapshotUrls: [
            'https://i.gkd.li/i/23383792',
            'https://i.gkd.li/i/26264920',
          ],
        },
        {
          key: 11,
          fastQuery: true,
          activityIds: '.ui.activity.HomeActivity',
          matches:
            '@ViewGroup[width<86 && height<86][clickable=true][focusable=true][clickable=true] + ViewGroup [text="元"]',
          snapshotUrls: 'https://i.gkd.li/i/25572172',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      activityIds: '.ui.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches:
            '@TextView[id=null][clickable=true] + Image[id=null][text="webp"]',
          exampleUrls: 'https://e.gkd.li/20f77125-b223-4d65-b61e-826871e0032b',
          snapshotUrls: 'https://i.gkd.li/i/12642058',
        },
        {
          key: 1,
          matches:
            '[id="unactive_watch_video_pendant"] > TextView[clickable=true][text=""][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/12642058',
        },
        {
          key: 2,
          matches:
            'RelativeLayout[childCount=2] > RelativeLayout[vid="pdd"] + @FrameLayout[childCount=1][clickable=true][visibleToUser=true][text=null][vid="pdd"] > ImageView[childCount=0][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0f850878-2b6a-46c7-86aa-28329df0993c',
          snapshotUrls: 'https://i.gkd.li/i/15140800',
        },
        {
          key: 3,
          name: '多多视频金币提示',
          matches: '[text^="看5分钟视频"] -2 Image',
          snapshotUrls: 'https://i.gkd.li/i/25088623',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-商品详情页视频讲解窗口',
      desc: '点击关闭⚠️需禁止pdd悬浮窗权限,否则无焦点导致失效',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.NewPageActivity',
          anyMatches: [
            '[vid="iv_float_window_close"]',
            '@ImageView[desc="关闭"][clickable=true] - * ->n [desc="tronplayer_view"] <<2 [childCount=1] <<2 RelativeLayout[childCount=1] <n * < [id="android:id/content"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14549415',
            'https://i.gkd.li/i/29378452', // 形式2
          ],
          exampleUrls: [
            'https://e.gkd.li/f81a45e4-09b4-498f-be72-ca84cdd0db83',
            'https://e.gkd.li/2fca1602-25f2-4ca4-b3cf-9a6fa33396af',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-多多视频划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      fastQuery: true,
      activityIds: '.ui.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches: [
            'TextView[text="正在直播"]',
            '@ImageView[desc="返回"] <4 ViewGroup < * < * < [id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13446291',
        },
        {
          key: 1,
          matches: [
            'TextView[text="查看更多低价商品"]',
            '@ImageView[desc="返回"] <4 ViewGroup < * < * < [id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13791119',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-下单后出现的弹窗',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            '.activity.NewPageMaskActivity',
            '.ui.activity.HomeActivity',
          ],
          action: 'clickCenter',
          matches:
            '@Button[text="关闭弹窗" || desc="关闭弹窗"][clickable=true] <n View[childCount>1] <<(1,2) View[id="main"] <<2 WebView[text="拼多多"] <<3 FrameLayout[vid!=null] <2 ViewGroup <2 FrameLayout <<3 [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13308175', // 老快照无vid
            'https://i.gkd.li/i/13927594',
            'https://i.gkd.li/i/14434154',
            'https://i.gkd.li/i/14456017',
            'https://i.gkd.li/i/23256823',
          ],
        },
        {
          preKeys: [0],
          name: '二级全屏推荐',
          matchTime: 10000,
          activityIds: '.activity.NewPageActivity',
          matches:
            '@LinearLayout[clickable=true][width<105 && height<99] + * > [text$="下单成功"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/28313219',
          exampleUrls: 'https://e.gkd.li/a6d0caff-1785-4ff2-b2fb-e7bffa13502f',
        },
      ],
    },
    {
      key: 19,
      name: '全屏广告-[个性化推荐]弹窗',
      desc: '点击[取消]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.activity.HomeActivity',
          matches: ['[text="个性化推荐未开启"]', '[text="取消"]'],
          exampleUrls: 'https://e.gkd.li/816070f2-035d-4702-87e3-441cca8b5430',
          snapshotUrls: 'https://i.gkd.li/i/14964851',
        },
      ],
    },
  ],
});
