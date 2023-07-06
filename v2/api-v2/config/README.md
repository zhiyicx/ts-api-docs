---
sidebarDepth: 3
title: 系统配置
---



## 启动信息的移动端处理方式

移动端在版本发布支出将部分配置信息的默认配置打包写入本地.应用使用过程中更新启动信息,优先使用服务器提供的最新的信息.

> 由于移动端是在APP启动异步获取的配置信息，在管理后台修改配置后，需要重启APP已获取最新的配置信息

## 列出所有启动者配置

```
GET api/v2/bootstrappers
```

#### 响应

```
Status: 200 OK
```
```json5
{
    "server:version":"3.1.0", // 后端当前应用版本号
    "h5_config":{  // H5 配置，用于分享判定
        "switch":false, 
        // 当没有小程序，也没有对应h5分享页面时，分享出去的内容就会引导进入这个下载页面
        "download_url":"https://thinksns.zhibocloud.cn/h5-share"
    },
    "ad":[ // 广告信息，暂未使用
        {
            "id":16,
            "space_id":1,
            "title":"ThinkSNS+全新超值功能源码11月11日钜惠发售！",
            "type":"image",
            "data":{
                "image":"https://thinksns.zhibocloud.cn/storage/public:MjAyMC8wNC8yNC9OM0o5dlBuZHptQ1FUUGVVOXJPRm8wQ2tQYmJRMzZBYVljWnI5NEViNnZGYzVWcEpMRlcxTHdmdUppbE9LTklNLnBuZw==",
                "link":"https://www.thinksns.com/reader/349.html",
                "duration":2
            },
            "sort":0,
            "created_at":"2019-11-11T06:54:46Z",
            "updated_at":"2020-06-24T09:12:52Z"
        }
    ],
    "site":{
        "anonymous":{ // 匿名开端，暂未使用
            "status":true
        },
        "gold":{   // 是否开启积分系统, 暂未使用
            "status":true
        },
        "reserved_nickname":"root,admin",  // 站点预留昵称，用户注册时不可使用
        "reward":{  // 是否开启打赏
            "status":true,
            "amounts":"100,500,1000" // 打赏金额配置，暂未使用，更新为礼物打赏
        },
        "user_invite_template":"我发现了一个全平台社交系统ThinkSNS+，快来加入吧：http://t.cn/RpFfbbi",  // 邀请注册的短信模板, 暂未使用
        "currency_name":{  // 积分配置
            "id":1,
            "name":"积分"  
        }
    },
    "registerSettings":{ 
        "showTerms":true, // 是否显示用户协议
        "method":"all",   // 注册类型，nvited: 仅邀请， all: 全部， thirdPart: 第三方 ，暂未使用
        "content":"用户协议", // 用户协议内容，即将废弃，请使用新版接口`api/v2/vip/protocol`
        "fixed":"need",    // 是否需要完善资料，暂未使用
        "type":"mobile-only", // 注册方式，mobile-only: 仅手机， mail-only: 仅邮箱，all： 邮箱或手机，暂未使用
        "score":5           // 新注册用户赠送积分数量
    },
    "currency":{
        "IAP":{   
            "only":true, // 是否开启IAP充值
            "rule":"1、IOS端需要提交到APPStore审核时，需要开启该项开关。
2、开启只允许IAP开关时，IOS端将关闭钱包转积分和积分提现到钱包功能" // IAP 规则说明
        },
        "cash":{
            "rule":"我是提现规则",  // 积分提现到钱包规则，暂未使用
            "status":true         // 积分提现开关 ，暂未使用
        },
        "recharge":{          
            "rule":"积分充值之后不可退换", // 积分充值规则说明
            "status":true    // 积分充值开关
        },
        "rule":"该平台积分仅在平台内使用", // 积分规则说明
        "settings":{
            "recharge-ratio":1, // 兑换比例，人民币一分钱可兑换的积分数量 
            "recharge-options":"100,500,1000,2000,5000,10000",  // 充值选项，人民币分单位
            "recharge-max":10000000, //单笔最高充值额度 
            "recharge-min":100, // 单笔最小充值额度
            "cash-max":10000000, //单笔最高提现额度 
            "cash-min":100  //单笔最少提现额度 
        }
    },
    "wallet":{
        "rule":"1、IOS端需要提交到APPStore审核时，需要开启该项开关。
2、开启只允许IAP开关时，IOS端将关闭钱包转积分和积分提现到钱包功能", // 钱包规则，暂未使用
        "ratio":100, // 钱包和积分的转换比例，1余额等于多少积分
        "cash":{  
            "min-amount":"150", // 余额体提现最少数量
            "types":[ // 提现方式
                "alipay",
                "wechat"
            ],
            "status":true // 提现开关
        },
        "recharge":{  // 暂未使用
            "types":[ // 余额充值类型
                "applepay_upacp",
                "alipay",
                "wx"
            ],
            "status":true  // 余额充值
        },
        "transform-currency":true // 余额和积分是否可已互转，暂未使用
    },
    "im:helper-user":4, // 聊天小组手对应的用户id
    "im:prefix":"ts3_",  // 便于使用同一个环信key所设置的 聊天用户id前缀，不支持大写
    "limit":15,  // 列表每页请求数据的分页数量
    "pay-validate-user-password":false, // 支付积分时，是否需要输入用户密码，暂未使用
    "mall":{
    	 // 成为店主的条件，对店主的定义，可选:
     	 // verification 表示认证用户即为商家
	    // ability 表示需要具有特定权限的用户为商家
        "shopkeeper":"ability",
        // 当shopkeeper=ability时需要检查的权限名称
        "ability_name":"mall:shopkeeper",
        // 商品定价政策，可选：
     	 // price 仅价格，积分只能设置0
     	 // score 仅积分，价格只能设置0
     	 // both  需要同时设置价格和积分
        "pricing_policy":"both",
        // 如果 pricing_policy=both 则配置积分所占百分比
        "score_min_percent":0,
        // 浮点数，用户下单后平台对金额的抽成比例
        "amount_tax_rate":0,
        // 浮点数，用户下单后平台对积分的抽成比例
        "score_tax_rate":0.1,
        // 当author=verification允许的认证类型,允许发布商品的类型
        // 多个类型配置在一个数组列表中，允许全部为 null
        "allow_v10n_types":["user"]
        "share_commodity_ids":[ // 分享商品获取折扣对应商品id,暂未使用
            1,
            2,
            3
        ],
        "share_every_discount":4,  // 暂未使用,分享获取折扣
        "all_categories_icon":{ // 商城页面，推荐分类的图标
            "url":"https://files.thinksns-plus.com/2019/11/08/g2zrMpVaA77cVEjO2c5SSRMnnJJRGb2cAGVTlwYy0XcwIERPwfDLlubHwfq0jsjc.png",
            "vendor":"aliyun-oss",
            "mime":"image/png",
            "size":1506,
            "dimension":{
                "width":38,
                "height":38
            },
            "node":"public:2019/11/08/g2zrMpVaA77cVEjO2c5SSRMnnJJRGb2cAGVTlwYy0XcwIERPwfDLlubHwfq0jsjc.png"
        },
        // 最长等待收货时间
        "default_confirm_receipt": 5,
        // 允许最大反馈数量
		"feedback_count": 2,
        // 退货次数
		"refund_count": 5,
        // 退货说明
		"refund_explain": "退货说明",
        // 卖家同意退款后/协商退款买家操作退货期限
		"refund_deliver_time": 4,
        // 买家申请协商处理期限
		"refund_negotiate_user_time": 4
    },
    "wechat_mini_program":{
        "exists":true,  // 是否有小程序，且部署好了
        "ugc":true, // 是否开启评论功能
        "video":true,   // 是否开启视频播放
        "reward":true,  // 是否开启打赏功能
        "download":true,   // 是否开启APP下载引导, 暂未使用
        "secCheck":true  // 是否开启内容检测
    },
    "knowledge":{ 
    		 // 成为作者的条件、对作者的定义，可选:
     		 // verification 表示认证用户即为作者
		    // ability 表示需要具有特定权限的用户为作者
        "author":"verification", 
          // 当author=ability时需要检查的权限名称
        "ability_name":"knowledge:author",
          // 多个类型配置在一个数组列表中，允许全部为 null
        "allow_v10n_types":null,
          // 知识定价政策，可选：
     		// price 仅价格，积分只能设置0
      		// score 仅积分，价格只能设置0
      		// both  需要同时设置价格和积分
        "pricing_policy":"score",
        	// 如果 pricing_policy=both 知识定价策略中（当定价策略是 价格+积分时），用来限制积分占价格的最少百分比
        "score_min_percent":0,
        	 // 浮点数，用户下单后平台对金额的抽成比例
        "amount_tax_rate":0,
        	// 浮点数，用户下单后平台对积分的抽成比例
        "score_tax_rate":0
    },
    "invite":{
        "enable":true,  // 邀请功能开关
        "inviter_score":10, // 邀请者获得的赠送积分
        "invitee_score":5,  // 被邀请者获得的赠送积分
        "copy_content":"{邀请码}",  // 邀请码规则 ,以 {} 为限定符号，前后可增加项目描述文字
        "app_download_url":"https://www.pgyer.com/thinksns",// 配置的app 下载地址
        "code_base":60947423 //  暂未使用
    },
    "register_score":5, // 新用户注册获得的积分数量
    "vip-switch":true  // 会员功能开关
}
```
