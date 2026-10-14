// 来源: https://github.com/Lin-arm/GKD_subscription/blob/ca66aed8fd7c197acd4f5c3a53a707f989c3800a/src/apps/tv.danmaku.bili.ts
// 仅导入广告规则，保留上游编号、页面限制、排除条件与默认启用状态。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      //matchTime: 10000, 从桌面小组件进入哔哩哔哩观看视频后，退出返回到哔哩哔哩首页时会跳出开屏广告
      actionMaximum: 2, // 可能连续出现两次 https://github.com/AIsouler/GKD_subscription/issues/1280
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          actionCd: 500,
          matches: '[vid="count_down" || vid="skip"][visibleToUser=true]', // [text*="跳过"] 可能会误触搜索框
          snapshotUrls: [
            'https://i.gkd.li/i/16187624',
            'https://i.gkd.li/i/16484445',
          ],
        },
      ],
    },
    {
      key: 0,
      name: '局部广告-评论区顶部公告横幅',
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: [
            'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
            '.MainActivityV2',
          ],
          matches:
            'LinearLayout[vid="ad_tint_frame"] > ImageView[vid="close"][desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12785461',
            'https://i.gkd.li/i/12775156',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-动态推荐卡片广告',
      desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
      fastQuery: true,
      activityIds: '.MainActivityV2',
      rules: [
        {
          key: 1,
          matches: '[vid="ad_goods_mark_big"]',
          snapshotUrls: 'https://i.gkd.li/i/12700222',
        },
        {
          preKeys: [1],
          matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
          snapshotUrls: 'https://i.gkd.li/i/12700243',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-视频页广告',
      desc: '领取大会员月卡,B站免流星卡',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          key: 1,
          matchTime: 10000,
          actionMaximum: 1,
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
            'com.bilibili.video.videodetail.VideoDetailsActivity',
          ],
          matches: '[vid="toast_x"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12892611',
            'https://i.gkd.li/i/13308344',
            'https://i.gkd.li/i/13538048',
          ],
        },
        {
          key: 2,
          matches:
            '@[vid="close"][visibleToUser=true] - [text$="免费领B站大会员"]',
          exampleUrls: 'https://e.gkd.li/cd934dfc-666e-4562-8b77-aac95f73694e',
          snapshotUrls: 'https://i.gkd.li/i/18165189',
        },
        {
          key: 3,
          matches:
            '[desc="close"] < @[clickable=true] <3 View <2 [childCount=4] < View <2 View < ComposeView < FrameLayout < [vid="fl_tab_pager_container"]',
          snapshotUrls: 'https://i.gkd.li/i/31067294',
          exampleUrls: 'https://e.gkd.li/696de68a-489f-4d42-b652-afbdf7351145',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-直播间悬浮窗广告',
      desc: '点击关闭',
      fastQuery: true,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: [
        {
          key: 0,
          matches:
            '[vid="shopping_close" || vid="live_game_card_close" || vid="match_close" || vid="iv_pop_rank_guide_card_close" || vid="card_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13200549', // (旧快照无vid,但能用) shopping_close
            'https://i.gkd.li/i/22990081', // live_game_card_close
            'https://i.gkd.li/i/23098023', // match_close
            'https://i.gkd.li/i/25238734', // iv_pop_rank_guide_card_close
            'https://i.gkd.li/i/25569011', // card_close
          ],
        },
        {
          key: 1,
          forcedTime: 120000, // 主动查询2分钟
          matches:
            '@[vid="close" || vid="iv_close"] - [vid="up_avatar" || vid="gift_icon" || vid="follow_container"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/32246446',
            'https://i.gkd.li/i/18046573',
            'https://i.gkd.li/i/22990105',
          ],
        },
        {
          key: 2,
          matchTime: 10000,
          actionMaximum: 1, //防止循环展开关闭
          matches:
            '@[clickable=true][visibleToUser=true] < [vid="pager"] < FrameLayout[index=parent.childCount.minus(1)] <(2,3,4) [vid="vertical_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24985920',
            'https://i.gkd.li/i/25240029',
            'https://i.gkd.li/i/25369451', // 误触快照
            'https://i.gkd.li/i/25569011', // 误触快照2
          ],
        },
      ],
    },
    {
      key: 10,
      name: '分段广告-首页推荐视频卡片广告',
      desc: '广告/创作推广/直播/会员购 等',
      fastQuery: true,
      activityIds: '.MainActivityV2',
      rules: [
        {
          key: 0,
          matches:
            '[id$="ad_tint_frame" || id$="root_container" || id$="constraintLayout"][visibleToUser=true] >(1,2,3) [vid="more" || id="tv.danmaku.bili.adbiz:id/more"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14083540', // 广告 [vid="ad_tint_frame"] >2 [vid="more"]
            'https://i.gkd.li/i/14588315', // 广告 [vid="ad_tint_frame"] >2 [vid="more"]
            'https://i.gkd.li/i/18274379', // 广告 [vid="root_container"] >3 [vid="more"]
            'https://i.gkd.li/i/18306851', // 创作推广 [vid="ad_tint_frame"] >2 [vid="more"]
            'https://i.gkd.li/i/19537979', // 去淘宝 [vid="root_container"] >3 [vid="more"]
            'https://i.gkd.li/i/23012670', // 去淘宝 [id$="ad_tint_frame"]
            'https://i.gkd.li/i/23123800', // 直播ad [id$="root_container"]
            'https://i.gkd.li/i/23687196', // 直播ad [id$="constraintLayout"]
            'https://i.gkd.li/i/27153803', // 会员购 [vid="ad_tint_frame"] >2 [vid="more"]
            'https://i.gkd.li/i/27686976', // 上淘宝 [vid="root_container"] > [vid="more"]
          ],
        },
        {
          key: 1,
          matches:
            '[vid="card_content"][getChild(1).getChild(1).vid="corner_hint_container"][visibleToUser=true] >n [vid="inline_more"]',
          exampleUrls: 'https://e.gkd.li/d3d37b4e-cda3-4ba6-8af3-7b45ac8efc10',
          snapshotUrls: 'https://i.gkd.li/i/17428126',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17848536',
        },

        //预留key
        {
          preKeys: [0, 1],
          key: 50,
          name: '点击[不感兴趣]/[相似内容过多]',
          matches:
            '@[clickable=true] > [text="此类内容过多" || text="相似内容过多" || text="不感兴趣" || text="up主不感兴趣" || text="对该up的直播不感兴趣" || text="我不想看" || text="引人不适"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13625309',
            'https://i.gkd.li/i/13742257',
            'https://i.gkd.li/i/14155801',
            'https://i.gkd.li/i/14155272',
            'https://i.gkd.li/i/17428471',
            'https://i.gkd.li/i/18274380',
            'https://i.gkd.li/i/18292926',
            'https://i.gkd.li/i/20710223',
            'https://i.gkd.li/i/23687208',
            'https://i.gkd.li/i/24836772',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18292929',
            'https://i.gkd.li/i/18306849',
          ],
        },
        {
          preKeys: [50],
          key: 70,
          matches:
            '@FrameLayout[clickable=true] > [text="此类内容过多" || text="相似内容过多"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2aba6082-1047-464e-959c-82ee62e492aa',
          snapshotUrls: [
            'https://i.gkd.li/i/20718890',
            'https://i.gkd.li/i/20720187',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-个性化内容推荐弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivityV2',
          matches: '[text="开启个性化内容推荐"] +3 [vid="close_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13448905',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      fastQuery: true,
      actionMaximum: 1,
      forcedTime: 10000,
      rules: [
        {
          key: 1,
          //action: 'clickCenter', 此种点击方式在部分应用版本会造成误触，需点击 clickable=true 节点
          activityIds: [
            '.MainActivityV2',
            'com.bilibili.vip.web.VipWebActivity',
            'com.bilibili.module.vip.web.VipWebActivity',
          ],
          matches:
            '@[index=parent.childCount.minus(1)][height<150][visibleToUser=true] <(1,2) View <(1,2) View <(4,5) View < View < View < WebView[text="会员中心" || text="大会员"] < WebView < [vid="webview"]',
          exampleUrls: 'https://e.gkd.li/ac6dd8ae-f18e-4f48-9184-39e4dbd832ba',
          snapshotUrls: [
            'https://i.gkd.li/i/15219142',
            'https://i.gkd.li/i/15220560',
            'https://i.gkd.li/i/15289942',
            'https://i.gkd.li/i/15328394',
            'https://i.gkd.li/i/18236032',
            'https://i.gkd.li/i/22310507',
          ],
        },
        {
          key: 4,
          activityIds: [
            '.MainActivityV2',
            'com.bilibili.vip.web.VipWebActivity',
          ],
          matches:
            'ComposeView > View[childCount=7] > @View[clickable=true][childCount=0] <<n [vid="vip_panel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a78a7719-b148-4df2-a225-f7a24be0c413',
          snapshotUrls: [
            'https://i.gkd.li/i/15523975',
            'https://i.gkd.li/i/15814146',
          ],
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: 'com.bilibili.vip.web.VipWebActivity',
          matches:
            '@TextView[width<130 && height<130] - TextView[childCount=0][id="dialog-canvas"] <<n [vid="webview"]',
          snapshotUrls: 'https://i.gkd.li/i/23385023',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-分享稿件弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.splash.ad.page.HotSplashActivity',
          matches: '[vid="poster_share_cancel"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/80e5730d-6634-4a0a-9c58-c57f7ad5e58c',
          snapshotUrls: 'https://i.gkd.li/i/15858057',
        },
      ],
    },
    {
      key: 14,
      name: '分段广告-搜索结果广告',
      desc: '①点击右下角[菜单] ②点击[不感兴趣]',
      fastQuery: true,
      activityIds: 'com.bilibili.search2.main.BiliMainSearchActivity',
      rules: [
        {
          key: 1,
          name: '①点击右下角[菜单]',
          matches: '[vid="ad_tint_frame"] > [vid="more"][clickable=true]',
          exampleUrls: 'https://e.gkd.li/e5dd30e7-e8dd-42bc-8953-23368e65cca4',
          snapshotUrls: [
            'https://i.gkd.li/i/17269053',
            'https://i.gkd.li/i/17964354',
            'https://i.gkd.li/i/28495212',
          ],
        },
        {
          preKeys: [1],
          name: '②点击[不感兴趣]',
          matches:
            '@[clickable=true] > [text$="不感兴趣" || text*="不想看" || text$="质量差"]',
          exampleUrls: 'https://e.gkd.li/5e6e4b69-ba97-473d-9f62-631c296da589',
          snapshotUrls: [
            'https://i.gkd.li/i/17269055',
            'https://i.gkd.li/i/17964356',
            'https://i.gkd.li/i/22657666', // 直播
          ],
        },
      ],
    },
    {
      key: 15,
      name: '分段广告-视频详情页下方推广',
      desc: '关闭[广告/推广/直播/纪录片/课堂/游戏], 含暂停时出现的广告',
      fastQuery: true,
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      rules: [
        {
          key: 0,
          name: '广告/推广',
          matches:
            '[id$="ad_tint_frame"][visibleToUser=true] >(1,2) [vid="more" || vid="more_layout" || id="tv.danmaku.bili.adbiz:id/more" || id="tv.danmaku.bili.adbiz:id/more_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17675629', // [vid="more"]
            'https://i.gkd.li/i/21552836',
            'https://i.gkd.li/i/21705345',

            'https://i.gkd.li/i/20739380', // [id="tv.danmaku.bili.adbiz:id/more"]  ; key1 游戏
            'https://i.gkd.li/i/20744764',

            'https://i.gkd.li/i/20794380', // [id="tv.danmaku.bili.adbiz:id/more_layout"]

            'https://i.gkd.li/i/21947622', // [vid="more_layout"]  ; key1 纪录片
            'https://i.gkd.li/i/28908101', // [vid="more_layout"] 视频暂停播放时出现的广告
          ],
        },
        {
          key: 1,
          name: '课堂/纪录片/游戏/直播',
          matches:
            '[text="课堂" || text="纪录片" || text="游戏" || vid="bottom_container" || vid="live_lottie_layout"][index=2] +n [vid="more"][visibleToUser=true]',
          // matches: '[!(vid="duration" || vid="second_to_last_line_area") || text="课堂"] <3 ViewGroup[getChild(0).vid="cover"] > [vid="more"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23934632', // 课堂
            'https://i.gkd.li/i/23933866', // 纪录片
            'https://i.gkd.li/i/24015674', // 游戏
            'https://i.gkd.li/i/23933925', // vid="bottom_container"
            'https://i.gkd.li/i/17675894', // 直播 vid="live_lottie_layout"
            'https://i.gkd.li/i/18306858', // 直播
          ],
          // excludeSnapshotUrls: 'https://i.gkd.li/i/24365466', // [vid="second_to_last_line_area"]
          exampleUrls: 'https://e.gkd.li/f7a90a07-6c8e-4986-8306-f64db4412e36',
        },

        // 第二段
        {
          key: 50,
          preKeys: [0, 1],
          name: '②点击[不感兴趣]',
          matches:
            '@[clickable=true] > [text*="不感兴趣" || text="相似内容过多" || text*="不想看" || text$="质量差" || text="减少直播推荐" || text="和当前视频无关"]',
          exampleUrls: 'https://e.gkd.li/23937c2d-379c-4fb5-aaee-7295bcf0afca',
          snapshotUrls: [
            'https://i.gkd.li/i/17676025',
            'https://i.gkd.li/i/17676149',
            'https://i.gkd.li/i/17677147',
            'https://i.gkd.li/i/18296940', // 对该up的直播不感兴趣
            'https://i.gkd.li/i/18306839',
            'https://i.gkd.li/i/20739391', // 不感兴趣、推广质量差
            'https://i.gkd.li/i/24015691', // 我不想看
            'https://i.gkd.li/i/24336415',
            'https://i.gkd.li/i/28659010', // 不想看该内容、广告质量差
            'https://i.gkd.li/i/30885647', // 减少直播推荐、和当前视频无关
          ],
        },

        // 第三段
        {
          key: 70,
          preKeys: [50],
          name: '③点击[关闭]',
          anyMatches: [
            '[vid="close_dislike"][visibleToUser=true]',
            '@[text="关闭"][clickable=true] -n * <<(2,4) [name$="ComposeView" || name$="FrameLayout"] <n [vid="recycler"]',
          ],
          exampleUrls: 'https://e.gkd.li/80514576-3656-4dcc-89f5-5992803c8e77',
          snapshotUrls: [
            'https://i.gkd.li/i/18587456',
            'https://i.gkd.li/i/25739074',
          ],
        },
      ],
    },
    {
      key: 27,
      name: '局部广告-首页浮标广告',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivityV2',
          matches: '[vid="animation_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25357810',
        },
      ],
    },
    {
      key: 29,
      name: '局部广告-顶部黄色横幅提示',
      desc: '点击横幅右边x掉',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.webview.MWebActivity',
          matches:
            '@Image[text^="yellow-tip-close"] <3 [childCount=3] <2 [id="app"] < WebView < WebView < [vid="webview"]',
          snapshotUrls: 'https://i.gkd.li/i/25563755',
        },
      ],
    },
    {
      key: 31,
      name: '局部广告-会员购',
      desc: '底部横幅Ad',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivityV2',
          matches: '[vid="mall_home_newuser_coupon_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26240948',
          exampleUrls: 'https://e.gkd.li/027bbea9-3479-4c8c-a0b2-88fee8f03a85',
        },
      ],
    },
    {
      key: 32,
      name: '局部广告-视频页-即将展示Ad',
      desc: '视频途中[x秒后展示广告] -> 取消',
      rules: [
        {
          fastQuery: true,
          matchRoot: true,
          // forcedTime: 3600000, // 主动查询1小时
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '@[text="取消"] - [visibleToUser=true][text="后将展示广告"] <<n [vid="video_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/29379312',
            'https://i.gkd.li/i/32741484',
            'https://i.gkd.li/i/32783449',
          ],
          exampleUrls: 'https://e.gkd.li/2fed6260-9cd4-4546-a8ea-de89fce88b5d',
        },
      ],
    },
  ],
});
