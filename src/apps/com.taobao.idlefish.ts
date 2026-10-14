// 来源: https://github.com/Lin-arm/GKD_subscription/blob/ca66aed8fd7c197acd4f5c3a53a707f989c3800a/src/apps/com.taobao.idlefish.ts
// 仅导入广告规则，保留上游编号、页面限制、排除条件与默认启用状态。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 4,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          activityIds: '.maincontainer.activity.MainActivity',
          matches:
            'WebView[text="Rax App"] > [id="root"] >(3,6) View[index=parent.childCount.minus(1)][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14551046',
            'https://i.gkd.li/i/24981766',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.search_implement.SearchResultActivity',
          matches:
            '@[index=parent.childCount.minus(1)][clickable=true][width<250][height<250] <n View <<6 m0 <<6 [vid="fish_layer_container_id"]',
          snapshotUrls: 'https://i.gkd.li/i/23125419',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches:
            '@[clickable=true][width<200] <<(4,6) View[id="root"] <<(5,8) [vid="fish_layer_container_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23183586',
            'https://i.gkd.li/i/25796344',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-信息流广告',
      enable: false,
      desc: '警告⚠️: 该规则有可能会误触,请谨慎开启', // https://github.com/AIsouler/GKD_subscription/issues/828
      fastQuery: true,
      forcedTime: 100000,
      rules: [
        {
          key: 1,
          action: 'longClick',
          activityIds: '.search_implement.SearchResultActivity', //搜索结果页面
          matches: '@[longClickable=true] >3 [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19603954',
          exampleUrls: 'https://e.gkd.li/ca42e088-6fae-4402-a000-06418bf054cf',
        },
        {
          key: 2,
          action: 'longClick',
          activityIds: [
            '.maincontainer.activity.MainActivity',
            '.detail.DetailActivity',
          ],
          matches:
            '@[longClickable=true][childCount=0][height>width] < [childCount>1] >(1,3,4) [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19604324',
            'https://i.gkd.li/i/29751786',
            'https://i.gkd.li/i/29753749', //同城商品页
            'https://i.gkd.li/i/31875408',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/29753324', // 广告的上半部分被遮住时,[长按]广告不会出现弹窗, 用 [height>width] 排除
          exampleUrls: 'https://e.gkd.li/738c623e-58fe-45a1-9a28-957f0f812c72',
        },
        {
          key: 3,
          action: 'longClick',
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches:
            'View[desc$="广告"][longClickable=true][visibleToUser=true][childCount>2]', //无快查
          snapshotUrls: 'https://i.gkd.li/i/19593497',
          excludeSnapshotUrls: 'https://i.gkd.li/i/19604467', // [childCount=1]
        },

        // 第二段
        {
          key: 20,
          name: '②点击[引起不适]',
          preKeys: [1, 2, 3, 20], //有时候需点击第2次,故包含 key20 自身
          actionCd: 500,
          actionDelay: 50, // 在首页时点击太早容易误触
          activityIds: [
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
          ],
          matches: '[desc="引起不适"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19593500',
            'https://i.gkd.li/i/19603913',
            'https://i.gkd.li/i/19604317',
            'https://i.gkd.li/i/29751857',
          ],
        },
        {
          key: 21,
          name: '②点击[不感兴趣]',
          preKeys: [2],
          activityIds: '.maincontainer.activity.MainActivity',
          matches: '@[clickable=true] +2 [text="商品不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/29753752', //同城商品页
        },

        // 第三段
        // 跳完分段广告后,如果手动长按商品,出现弹窗,还是会触发 key20 点击[引起不适], 故利用 activityId 的变换来消除
        // 当然,对于触发顺序为 `key3 --> key20 --> 回到原界面` 来说, Activity 并没有变换,此法就用不了了
        // 不过我用的 闲鱼v7.26.41 测试, 并没有遇到过 key3 , 可能是旧版才有....
        {
          key: 50,
          preKeys: [20],
          name: '③仅消除preKeys=20蓄势',
          action: 'none',
          actionMaximum: 1,
          activityIds: [
            '.detail.DetailActivity',
            '.maincontainer.activity.MainActivity',
            '.search_implement.SearchResultActivity',
          ],
          matches: '[parent=null]',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.maincontainer.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][width<100] <(2,5) FrameLayout <<(3,4) [vid="fish_layer_container_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25796897',
            'https://i.gkd.li/i/26184285',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-悬浮广告',
      desc: '商品详情页右侧-x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.detail.DetailActivity',
          matches:
            'Image[width<60 && height<60] < @View <n [childCount=2] < [id="root"] <<2 * <2 WebView <<2 [vid="fish_layer_container_id"]',
          snapshotUrls: 'https://i.gkd.li/i/26837679',
          exampleUrls: 'https://e.gkd.li/d08c424f-8411-4d65-ba23-02703e328176',
        },
      ],
    },
  ],
});
