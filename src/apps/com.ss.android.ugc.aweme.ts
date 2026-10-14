// 来源: https://github.com/Lin-arm/GKD_subscription/blob/ca66aed8fd7c197acd4f5c3a53a707f989c3800a/src/apps/com.ss.android.ugc.aweme.ts
// 仅导入广告规则，保留上游编号、页面限制、排除条件与默认启用状态。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: '.search.activity.SearchResultActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/202942ce-259c-4b9d-b3b3-06afbac8145f',
          snapshotUrls: 'https://i.gkd.li/i/13216121',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17811608',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告',
      rules: [
        {
          key: 1,
          name: '直播右侧卡片广告',
          fastQuery: true,
          activityIds: '.live.LivePlayActivity',
          matches:
            '@View[clickable=true][width<80&&height<80] +2 View >4 [text="立即查看"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7c97fdc7-9de0-403d-9817-e43da0eb8a31',
          snapshotUrls: 'https://i.gkd.li/i/22743677',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-小组件弹窗',
      desc: '点击x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            '.main.MainActivity',
            '.live.LiveDummyActivity',
            '.search.activity.SearchResultActivity',
          ],
          matches:
            '@ImageView[clickable=true][width<173] <2 [childCount>3] > [text^="添加" || text^="开启"][text*="桌面"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13669682', //添加抖音商城到桌面
            'https://i.gkd.li/i/14740312', //添加抖音商城到桌面
            'https://i.gkd.li/i/14325749', //开启搜索组件到桌面
            'https://i.gkd.li/i/18009276', //添加火花桌面小组件
          ],
          exampleUrls: 'https://e.gkd.li/c3980f6b-5459-45fe-b317-5bdc561319dc',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告',
      desc: '点击[不感兴趣/知道了]',
      fastQuery: true,
      activityIds: '.main.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[clickable=true][text="不感兴趣"] +(1,2) FlattenUIText[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13800207',
            'https://i.gkd.li/i/13996724',
            'https://i.gkd.li/i/20035670',
          ],
        },
        {
          key: 1,
          matches: '[name!$="ImageView"] + [text="不感兴趣"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14661956',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23833191', // [name!$="ImageView"]
        },
        {
          key: 2,
          activityIds: [
            '.live.LiveDummyActivity',
            '.commerce.sdk.MallContainerActivity',
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
          matches: '[text*="首页商城"] +n FlattenUIText[text="知道了"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14533732',
            'https://i.gkd.li/i/14969825',
            'https://i.gkd.li/i/14969835',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '全屏广告-汽水音乐VIP',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            '.dsp.MusicLunaActivity',
            '.dsp.playpage.singlepage.subpage.MusicDspSubPlayerActivity',
          ],
          matches:
            'ScrollView - @ImageView[index=1][childCount=0][visibleToUser=true][width<100][height<100] <2 View < View < ViewGroup < ViewGroup < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/4c57ee77-2189-4b3b-be0b-430fac8853c2',
          snapshotUrls: [
            'https://i.gkd.li/i/18100285',
            'https://i.gkd.li/i/18100454',
            'https://i.gkd.li/i/18100477',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '局部广告-直播间右下角浮窗',
      desc: '点击x掉',
      fastQuery: true,
      activityIds: ['.live.LivePlayActivity', '.detail.ui.DetailActivity'],
      rules: [
        {
          key: 0,
          name: '购买',
          matches:
            '[desc="购买"][visibleToUser=true] <n * < * -2 FrameLayout > [vid="iv_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/26754062', // LiveMeasureOnceRelativeLayout
            'https://i.gkd.li/i/29388290',
            'https://i.gkd.li/i/30374168', // RelativeLayout
          ],
          exampleUrls: 'https://e.gkd.li/8c5e6526-83e5-4ec6-b532-367ff6045bfc',
        },
        {
          key: 1,
          name: '打开游戏/下载',
          matches:
            '@[visibleToUser=true][width<114 && height<114][top=parent.top] <3 [childCount>4] >5 [text="打开游戏" || text="下载"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30297510',
            'https://i.gkd.li/i/33388572',
          ],
        },
        {
          key: 2,
          name: '全封装',
          matches:
            '@ViewGroup[vid=null][text=null][desc=null][width<110 && height<110][visibleToUser=true] <2 ViewGroup[childCount<8] <<5 FrameLayout[index=parent.childCount.minus(2)] <n ViewGroup[childCount>4][left=0 && top=0] +n ViewGroup >5 EditText[text="说点什么..."][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30374542',
            'https://i.gkd.li/i/30374544',
          ],
        },
      ],
    },
    {
      key: 32,
      name: '局部广告-直播-关闭推荐直播间',
      desc: '刷到直播-> 可能喜欢这些直播 -> x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches:
            'ImageView + [text="你可能喜欢这些直播"][visibleToUser=true] + [vid="close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/29387031',
          exampleUrls: 'https://e.gkd.li/1ee3aa97-345d-42a3-af64-262230b650be',
        },
      ],
    },
    {
      key: 39,
      name: '局部广告-视频流-左下角卡片',
      desc: '一些视频中途弹出卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches:
            '@UIView[clickable=true][id=null][text=""][desc=""][childCount=0] + UIText[text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/29403677',
            'https://i.gkd.li/i/29403704',
          ],
          exampleUrls: 'https://e.gkd.li/ef72c43c-5fab-4b09-bbd0-bb0d754d2c12',
        },
      ],
    },
  ],
});
