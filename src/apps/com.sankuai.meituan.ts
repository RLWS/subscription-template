// 来源: https://github.com/Lin-arm/GKD_subscription/blob/ca66aed8fd7c197acd4f5c3a53a707f989c3800a/src/apps/com.sankuai.meituan.ts
// 仅导入广告规则，保留上游编号、页面限制、排除条件与默认启用状态。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: 'TextView[text*="跳过"][text.length<8][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/28997249',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17827264', // 用 TextView 排除
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '美团买菜-折扣弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            'ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=1] > ImageView[childCount=0][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12639717',
        },
        {
          key: 1,
          name: '美团买菜-红包弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            '@ImageView < ViewGroup +3 ViewGroup > ViewGroup > TextView[text^="红包已到账"]',
          snapshotUrls: 'https://i.gkd.li/i/12892626',
        },
        {
          key: 2,
          name: '美团买菜-支付成功后-红包弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            'TextView[text="恭喜你获得以下权益"] + ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12646768',
        },
        {
          key: 3,
          name: '超市便利-弹窗广告',
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.store.poi.list.newp.PoiVerticalityHomeActivity',
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13694877',
        },
        {
          key: 4,
          name: '骑行卡-红包弹窗',
          activityIds: 'com.meituan.mmp.lib.HeraActivity',
          matches:
            'View[childCount=3] > View + TextView + TextView[text=""][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12739204',
        },
        {
          key: 5,
          name: '订单完成后的红包弹窗',
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity',
          matches: '@ImageView[clickable=true] - * >3 [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/i/13695703',
        },
        {
          key: 6,
          name: '邀请好友提现弹窗',
          activityIds: 'com.meituan.msc.modules.container.MSCActivity',
          matches:
            'WebView > View > View[childCount=1] >(1,2) View[childCount=2] > View + Image[text=""][childCount=0][left>0][width<200]',
          snapshotUrls: [
            'https://i.gkd.li/i/14964911',
            'https://i.gkd.li/i/15400951',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/16487898', // 避免误触 add [left>0]
            'https://i.gkd.li/i/20553947', // 避免误触 add [width<200]
          ],
        },
        {
          key: 7,
          name: '首页-半价神券弹窗',
          fastQuery: true,
          activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
          matches:
            '@ViewGroup[clickable=true][width <120 && width<120][childCount=0] <2 ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/24842488',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.meituan.android.pt.homepage.activity.MainActivity',
            'com.miui.home.launcher.Launcher',
          ],
          matches: 'FrameLayout > @ImageView + ImageView[desc="资质与规则"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12639815',
            'https://i.gkd.li/i/12639734',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.business.page.homepage.TakeoutActivity',
          matches: '[vid="marking_sidebar_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16079638',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity',
          matches: '@ImageView[visibleToUser=true] - [text^="收藏店铺领"]',
          exampleUrls: 'https://e.gkd.li/20bbae61-859b-478d-9032-8213c79dec39',
          snapshotUrls: 'https://i.gkd.li/i/16632959',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.sankuai.waimai.store.drug.home.NewDrugHomeActivity',
          matches:
            '@ImageView[width<80 && height<80][clickable=true] <n * < [vid="novel_float_view_new"]',
          snapshotUrls: 'https://i.gkd.li/i/23165473',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.sankuai.waimai.store.drug.home.NewDrugHomeActivity',
          matches: '[vid="live_float_view_container"] > [vid="close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/23165473',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-新人返场特惠',
      desc: '点击左上角返回',
      rules: [
        {
          matchTime: 10000,
          fastQuery: true,
          activityIds: 'com.meituan.android.base.knb.KNBWebViewActivity',
          matches:
            '@TextView[text=""][clickable=true][childCount=0] < View[id="shareNav"] <2 View < View < WebView < WebView < [vid="mil_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13800691',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-视频页弹窗广告',
      desc: '点击X',
      fastQuery: true,
      activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
      rules: [
        {
          key: 0,
          name: '视频页-签到弹窗',
          matches:
            '@ImageView[index=5] +n ViewGroup[clickable=true] >n [text="签到必得现金"]',
          snapshotUrls: 'https://i.gkd.li/i/14033982',
          excludeSnapshotUrls: 'https://i.gkd.li/i/24705788', // @ImageView[index=5] +n ViewGroup[clickable=true] 会误触
        },
        {
          key: 1,
          name: '视频页-领现金弹窗',
          matches:
            '@ImageView[visibleToUser=true] - ViewGroup[childCount=3] > [text^="签到成功"]',
          snapshotUrls: 'https://i.gkd.li/i/14034073',
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-直播讲解悬浮窗',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + [text="正在讲解"]',
          exampleUrls: 'https://e.gkd.li/42b1d2c5-ca75-4a89-adca-9e5c4f489165',
          snapshotUrls: 'https://i.gkd.li/i/17182888',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-下单后开通月付提示',
      desc: '出现后-按[返回键]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches:
            '@[text*="美团月付"][parent.childCount=6] <<n [childCount=2][getChild(1).text^="确认"] <<n [text="支付成功"] < WebView < [vid="mil_container"]',
          action: 'back',
          snapshotUrls: [
            'https://i.gkd.li/i/27426053',
            'https://i.gkd.li/i/28056764',
          ],
          exampleUrls: 'https://e.gkd.li/9f1b0006-c4c2-4234-9cea-94ee97f48ae3',
        },
      ],
    },
  ],
});
