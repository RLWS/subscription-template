// 来源: https://raw.githubusercontent.com/Lin-arm/GKD_subscription/ca66aed8fd7c197acd4f5c3a53a707f989c3800a/src/apps/com.taobao.taobao.ts
// 仅保留广告规则组；保留上游规则编号和误触排除条件。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '@[vid*="close"] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17576743',
            'https://i.gkd.li/i/17578451',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
            'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
            'com.alibaba.android.ultron.vfw.weex2.highPerformance.widget.UltronTradeHybridActivity',
          ],
          matches: '@[desc="关闭按钮"] - [vid="poplayer_native_state_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12648734',
            'https://i.gkd.li/i/12648746',
            'https://i.gkd.li/i/14060521',
            'https://i.gkd.li/i/14905372',
            'https://i.gkd.li/i/30856922',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            '@ImageView[desc="图片"][childCount=0][clickable=true][visibleToUser=true][width<180&&height<180] <<n [vid="poplayer_native_state_id"]',
          exampleUrls: 'https://e.gkd.li/5c77eaf1-b4dc-48c9-96af-131ae9644ffa',
          snapshotUrls: [
            'https://i.gkd.li/i/18218537',
            'https://i.gkd.li/i/20277438',
          ],
        },
        {
          key: 2,
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches:
            'WebView[text="红包签到"] > [id="ice-container"] >(3,4) View[childCount=3] > [name$="Image" || name$="Button"][text*="jpg" || text="关闭"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c7c06d50-a384-4869-a14f-95d219d9d08c',
          snapshotUrls: [
            'https://i.gkd.li/i/18587158',
            'https://i.gkd.li/i/18587159',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            '[text="规则"] +2 @View[childCount=1][clickable=true] > Image[childCount=0][text!=null] <<n [vid="tms_tab_content_view"]',
          exampleUrls: 'https://e.gkd.li/dbf9ea95-3674-4cb2-8a88-dfb96c24e71b',
          snapshotUrls: 'https://i.gkd.li/i/22308745',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: [
            'com.taobao.search.uniform.SearchActivity',
            'com.taobao.android.detail.alittdetail.TTDetailActivity',
            'com.taobao.tao.TBMainActivity',
          ],
          matches:
            '@[name$=".TextView" || name$=".Image"][clickable=true][childCount=0][width<150 && height<150][index=parent.childCount.minus(1)] <n View >(1,2,3) [id=null][text$="用" || text$="收下" || text*="立减"] <<n WebView[vid="poplayer_inner_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22949963',
            'https://i.gkd.li/i/23289412',
            'https://i.gkd.li/i/23567053',
            'https://i.gkd.li/i/24982514',
            'https://i.gkd.li/i/26044614',
            'https://i.gkd.li/i/28312957',
          ],
        },
        {
          key: 5,
          fastQuery: true,
          activityIds:
            'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
          matches:
            'Image[text*=".jpg"][width<150 && height<150] < [visibleToUser=true] < @View[clickable=true][childCount=1] <<n FrameLayout[id=null] - [vid="layermanager_penetrate_webview_container_id"]',
          snapshotUrls: 'https://i.gkd.li/i/30710740',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-横幅广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '消息页',
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
          ],
          matches:
            '[desc.length>0 || text.length>0] + @LinearLayout[clickable=true] + FrameLayout > TextView[text="퀺"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13197877',
            'https://i.gkd.li/i/23140899',
          ],
        },
        {
          key: 1,
          name: '商品详情页',
          activityIds: 'com.taobao.android.detail.alittdetail.TTDetailActivity',
          matches:
            '@FrameLayout[desc="关闭"][clickable=true][visibleToUser=true] -3 ImageView <<3 [vid="bottom_float_dx"]',
          snapshotUrls: 'https://i.gkd.li/i/25639274',
          exampleUrls: 'https://e.gkd.li/9bbe3e98-3a93-49d5-9b7a-74e039db0a36',
        },
        {
          key: 2,
          name: '订单页',
          activityIds: 'com.taobao.android.order.bundle.TBOrderListActivity',
          matches:
            '@TextView[clickable=true][visibleToUser=true][text.length=1] -4 ImageView < LinearLayout[childCount=5] <<3 [vid="recycler_view"]',
          snapshotUrls: 'https://i.gkd.li/i/25639650',
          exampleUrls: 'https://e.gkd.li/e86fb61e-d4ed-4862-b677-86ddf45c9b77',
        },
        {
          key: 3,
          name: '首页',
          matchRoot: true, // 截取快照才触发，加上试试
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: '[desc.length=4] < * + @[clickable=true] > [text="뉜"]', // 实机测试过，"뉜"韩语？是关闭按钮有作用
          snapshotUrls: 'https://i.gkd.li/i/25658605',
          exampleUrls: 'https://e.gkd.li/97345886-418c-4a43-a5e2-014ee822b6a2',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches:
            '@Image[childCount=0][clickable=true][text!=null] < View <2 View < WebView < o0 <2 WebView < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13521702',
        },
        {
          key: 1,
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            '@Image[childCount=0][clickable=true][text!=null] <2 View < View < View <9 View < WebView < m0 <2 WebView < RelativeLayout < [vid="tms_tab_content_view"]',
          exampleUrls: 'https://e.gkd.li/45f8b78d-bc6a-4c1a-994d-6b5bce2c96a0',
          snapshotUrls: 'https://i.gkd.li/i/22291107',
        },
        {
          key: 2,
          activityIds: 'com.taobao.android.detail.alittdetail.TTDetailActivity',
          matches:
            '@FrameLayout[desc="关闭"][clickable=true] <<n [vid="ll_dinamicx_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23289445',
        },
      ],
    },
    {
      key: 16,
      name: '全屏广告-花呗推荐弹窗',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 2,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text*="花呗升级" || text*="花呗服务" || text$="开通花呗"][visibleToUser=true]',
            '@[clickable=true] >n [text="暂不升级，继续付款" || text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13691864',
            'https://i.gkd.li/i/13628020',
            'https://i.gkd.li/i/13898735',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '局部广告-商品详情页直播悬浮窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
          matches: '[vid="view_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15124094',
        },
      ],
    },
    {
      key: 21,
      name: '全屏广告-支付后的推荐弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="关闭" || text="跳过"] < @[clickable=true] -(1,2) [visibleToUser=true] >(1,2) [text$="推荐你" || text="开通指纹支付"]',
          exampleUrls: 'https://e.gkd.li/1646b159-a3ca-4cd8-9519-729e70acb72a',
          snapshotUrls: [
            'https://i.gkd.li/i/14155537',
            'https://i.gkd.li/i/18296345',
            'https://i.gkd.li/i/22113615',
            'https://i.gkd.li/i/30726794', // 跳过 开通指纹支付
          ],
        },
        {
          key: 1,
          name: '充值类商品界面广告',
          fastQuery: true,
          activityIds: 'com.taobao.weex.WXActivity',
          matches:
            '@ImageView[clickable=true][width<150 && height<155] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout <2 [vid="weex_render_view"]',
          snapshotUrls: 'https://i.gkd.li/i/23923991',
        },
      ],
    },
  ],
});
