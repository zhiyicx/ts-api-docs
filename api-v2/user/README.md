---
sidebarDepth: 3
---

# 用户相关接口

## 禁用用户

```
PUT /api/v2/system/disabled/{user}
```

响应：

```
Sttaus: 204 No Content
```

## 用户认证

所有用户信息位置均会返回一个 `verification` 字段，如果没有提交认证，返回为 `null`，存在认证信息，则返回对应信息。**特别注意**，查看其他认证信息仅返回非敏感数据，敏感性信息会被隐藏，例如身份证号吗等。仅获取自己数据才会给出完整数据。例如个人认证如下结构：

```json5
{
    "type":"user", // 认证类型
    "state":-1, // 状态，-1 为等待，0 为拒绝，1 为认证成功
    "created_at":"2019-03-05T01:56:51Z", // 首次提交认证时间
    "updated_at":"2019-03-05T01:56:51Z", // 更新认证数据时间
    "desc":"智艺花泽类❤", // 认证描述
    "id_card":{ // 身份证信息（敏感信息）
        "number":"5******04****************6****9", // 身份证号吗
        "rear":{ // 身份证背面图片
            "url":"http://wm.local.medz.cn/storage/public:MjAxOS8wMy8wMS9RQnNqdTIyd3ZVYWwxMWFqRWdpNVJ2cmVqTE14dGE1WEVTZERHZUdVZTVVeVJaNmd5SGFPbEZ4Z2doSTlIbXd2LmpwZWc=",
            "vendor":"local",
            "mime":"image/jpeg",
            "size":456699,
            "dimension":{
                "width":1836,
                "height":2448
            }
        },
        "front":{ // 身份证正面图片
            "url":"http://wm.local.medz.cn/storage/public:MjAxOS8wMy8wMS9FYllMMHFoRldVMVE3NzFuRjVMWW5KMkcyMUgxMXdaTlRtUzRHeUdScXl1bE40REFvMTBBeU9vb2xEcWNObVZmLmpwZWc=",
            "vendor":"local",
            "mime":"image/jpeg",
            "size":5681,
            "dimension":{
                "width":200,
                "height":200
            }
        }
    },
    "real_name":"Seven Du", // 真实姓名
    "phone_number":"187******82" // 手机号码
}
```

### 首次提交认证信息

```
POST /api/v2/user/verification
```

输入（个人认证）：

```json5
{
	"type": "user", // 固定
	"data": { // 荷载数据
		"id_card": {
			"front": "public:2019/03/01/EbYL0qhFWU1Q771nF5LYnJ2G21H11wZNTmS4GyGRqyulN4DAo10AyOoolDqcNmVf.jpeg", // 身份证正面照片
			"rear": "public:QBsju22wvUal11ajEgi5RvrejLMxta5XESdDGeGUe5UyRZ6gyHaOlFxgghI9Hmwv.jpeg", // 身份证背面照片
			"number": "5***04********6**9" // 身份证号吗
		},
		"real_name": "Seven Du", // 真实信息
		"phone_number": "187******82", // 手机号码
		"desc": "智艺花泽类❤️"
	}
}
```

输入（企业认证）:

```json5
{
	"type": "org",
	"data": {
		"org": { // 企业信息
			"name": "成都智艺创想科技有限公司", // 企业名称
			"address": "成都市高新区天府大道北段1700号", // 企业地址
			"certificate": "public:2019/03/01/EbYL0qhFWU1Q771nF5LYnJ2G21H11wZNTmS4GyGRqyulN4DAo10AyOoolDqcNmVf.jpeg", // 企业证书
		},
		"person": { // 法人信息
			"name": "李**", // 法人名称
			"number": "5***04********6**9" // 法人身份证好嘛
		},
		"phone_number": "187******82", // 联系方式
		"desc": "一个让人心累的公司️" // 认证描述
	}
}
```

响应：

```
Status: 201 Created
```

### 更新认证信息

仅被拒绝认证后（`state = 0`）可以继续更改信息申请，**注意**，更改信息无法更改认证类型。

输入：如同首次申请认证的输入一致，但是去掉 `type` 字段，就算传递服务器也不会处理该字段。

响应：

```
Status: 204 No Content
```

### 删除认证信息

```
DELETE /api/v2/user/verification
```

响应：

```
Status: 204 No Content
```

## 用户收货地址

> 服务端目前限制了一个用户最多20个收货地址；一个用户同时只能存在<=1个默认地址。

### 获取收货地址列表

> 默认排序为为创建时间的倒序，如不满足可以在客户端重新排序。

```
GET /api/v2/user/addresses
```

响应：

```
Status: 200 OK
```
```json5
[
    {
        "id": 1,
        "user_id": 1,
        "alias": "公司",
        "name": "张三",
        "phone": "18818181818",
        "province": "四川省",
        "city": "成都市",
        "county": "高新区",
        "detail": "环球中心E1区9楼",
        "postcode": "610000",
        "is_default": false,
        "created_at": "2019-04-13 04:34:33",
        "updated_at": "2019-04-13 04:44:12"
    }
]
```

### 获取单个收货地址

```
GET /api/v2/user/addresses/{address.id}
```

响应：

```
Status: 200 OK
```
```json5
{
    "id": 1,
    "user_id": 1,
    "alias": "公司",
    "name": "张三",
    "phone": "18818181818",
    "province": "四川省",
    "city": "成都市",
    "county": "高新区",
    "detail": "环球中心E1区9楼",
    "postcode": "610000",
    "is_default": false,
    "created_at": "2019-04-13 04:34:33",
    "updated_at": "2019-04-13 04:44:12"
}
```

### 添加收货地址

> 最大长度规则以GB18030编码的字符串字节数为准，通常ASCII字符1长度，中文2个长度，Emoji为4个长度。

```
POST /api/v2/user/addresses
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `alias` | `string` | **可选**，地址别名，如：`家里`、`公司`等，最大长度24 |
| `name` | `string` | **必须**，收件人姓名，最大长度24 |
| `phone` | `string` | **必须**，收件人电话，只支持国内手机号 |
| `province` | `string` | **可选**，省名称，最大长度32 |
| `city` | `string` | **可选**，市名称，最大长度32 |
| `county` | `string` | **可选**，区/县名称，最大长度32 |
| `detail` | `string` | **必须**，详细地址，最大长度160 |
| `postcode` | `string` | **可选**，邮政编码，必须是6个数字 |
| `is_default` | `boolean` | **必须**，是否默认地址 |

响应：

```
Status: 201 Created
```

```json
{
    "id": 1,
    "user_id": 1,
    "alias": "公司",
    "name": "张三",
    "phone": "18818181818",
    "province": "四川省",
    "city": "成都市",
    "county": "高新区",
    "detail": "环球中心E1区9楼",
    "postcode": "610000",
    "is_default": false,
    "created_at": "2019-04-13 04:34:33",
    "updated_at": "2019-04-13 04:44:12"
}
```

### 修改收货地址

```
PUT|PATCH /api/v2/user/addresses/{address.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `alias` | `string` | **可选**，地址别名，如：`家里`、`公司`等，最大长度24 |
| `name` | `string` | **可选**，收件人姓名，最大长度24 |
| `phone` | `string` | **可选**，收件人电话，只支持国内手机号 |
| `province` | `string` | **可选**，省名称，最大长度32 |
| `city` | `string` | **可选**，市名称，最大长度32 |
| `county` | `string` | **可选**，区/县名称，最大长度32 |
| `detail` | `string` | **可选**，详细地址，最大长度160 |
| `postcode` | `string` | **可选**，邮政编码，必须是6个数字 |
| `is_default` | `boolean` | **可选**，是否默认地址 |

响应：

```
Status: 200 OK
```
```json
{
    "id": 1,
    "user_id": 1,
    "alias": "公司",
    "name": "张三",
    "phone": "18818181818",
    "province": "四川省",
    "city": "成都市",
    "county": "高新区",
    "detail": "环球中心E1区9楼",
    "postcode": "610000",
    "is_default": false,
    "created_at": "2019-04-13 04:34:33",
    "updated_at": "2019-04-13 04:44:12"
}
```

### 删除收货地址

```
DELETE /api/v2/user/addresses/{address.id}
```

响应：

```
Status: 204 No Content
```

### 活跃用户

```
GET /api/v2/users
```
输入:

| 参数 | 类型 | 描述 |
|:----:|----|----|
|`active` | integer | **必传**, 1 |
| `limit` | integer | **可选** |
| `offset` | integer | **可选**,偏移量，用于分页,第一次查询时，传0 |

响应:
```
Status: 200 OK
```
```json5
[
    {
        "id": 13,
        "name": "静静",
        "bio": null,
        "sex": 0,
        "location": "四川省 成都市",
        "invite_code": "10ABCC",
        "avatar": {
            "url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2019/09/25/t70zZfQbvPYMrJX7n0ELitxlqWK7QPOPs6ijbHVZSbbB8tC37gWT6vpSZjsISvU9.jpg",
            "vendor": "aliyun-oss",
            "mime": "image/jpeg",
            "size": 141896,
            "dimension": {
                "width": 512,
                "height": 512
            }
        },
        "feed_topics_count": 10,
        "extra": {
            "user_id": 13,
            "likes_count": 87,
            "comments_count": 17,
            "followers_count": 8,
            "followings_count": 2,
            "updated_at": "2019-11-04T08:46:30Z",
            "feeds_count": 138,
            "checkin_count": 0,
            "last_checkin_count": 0,
            "be_reward_count": 14
        },
        "verification": {
            "type": "user",
            "state": 1,
            "created_at": "2019-09-25T06:00:10Z",
            "updated_at": "2019-10-12T06:51:47Z",
            "desc": "放假吗",
            "slogan": "放假吗"
        },
        "has_follower": false,
        "has_following": false,
        "created_at": "2019-07-15T07:49:47Z"
    }
]
```

### 推荐用户
```
GET /api/v2/user/recommends
```
输入:

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `limit` | integer | **可选** |
| `offset` | integer | **可选**,偏移量，用于分页,第一次查询时，传0 |
响应:
```
Status: 200 OK
```
```json5
[
    {
        "id": 13,
        "name": "静静",
        "bio": null,
        "sex": 0,
        "location": "四川省 成都市",
        "invite_code": "10ABCC",
        "avatar": {
            "url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2019/09/25/t70zZfQbvPYMrJX7n0ELitxlqWK7QPOPs6ijbHVZSbbB8tC37gWT6vpSZjsISvU9.jpg",
            "vendor": "aliyun-oss",
            "mime": "image/jpeg",
            "size": 141896,
            "dimension": {
                "width": 512,
                "height": 512
            }
        },
        "feed_topics_count": 10,
        "extra": {
            "user_id": 13,
            "likes_count": 87,
            "comments_count": 17,
            "followers_count": 8,
            "followings_count": 2,
            "updated_at": "2019-11-04T08:46:30Z",
            "feeds_count": 138,
            "checkin_count": 0,
            "last_checkin_count": 0,
            "be_reward_count": 14
        },
        "verification": {
            "type": "user",
            "state": 1,
            "created_at": "2019-09-25T06:00:10Z",
            "updated_at": "2019-10-12T06:51:47Z",
            "desc": "放假吗",
            "slogan": "放假吗"
        },
        "has_follower": false,
        "has_following": false,
        "created_at": "2019-07-15T07:49:47Z"
    }
]
```

### 同城用户
```
GET /api/v2/user/nearby
```
输入:

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `limit` | integer | **可选** |
| `offset` | integer | **可选**,偏移量，用于分页,第一次查询时，传0 |

响应:
```
Status: 200 OK
```
```json5
[
    {
        "id": 13,
        "name": "静静",
        "bio": null,
        "sex": 0,
        "location": "四川省 成都市",
        "invite_code": "10ABCC",
        "avatar": {
            "url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2019/09/25/t70zZfQbvPYMrJX7n0ELitxlqWK7QPOPs6ijbHVZSbbB8tC37gWT6vpSZjsISvU9.jpg",
            "vendor": "aliyun-oss",
            "mime": "image/jpeg",
            "size": 141896,
            "dimension": {
                "width": 512,
                "height": 512
            }
        },
        "feed_topics_count": 10,
        "extra": {
            "user_id": 13,
            "likes_count": 87,
            "comments_count": 17,
            "followers_count": 8,
            "followings_count": 2,
            "updated_at": "2019-11-04T08:46:30Z",
            "feeds_count": 138,
            "checkin_count": 0,
            "last_checkin_count": 0,
            "be_reward_count": 14
        },
        "verification": {
            "type": "user",
            "state": 1,
            "created_at": "2019-09-25T06:00:10Z",
            "updated_at": "2019-10-12T06:51:47Z",
            "desc": "放假吗",
            "slogan": "放假吗"
        },
        "has_follower": false,
        "has_following": false,
        "created_at": "2019-07-15T07:49:47Z"
    }
]
```

## 用户积分收入排名

```
GET /api/v2/user/currency/income-rank
```

> 目前排行榜数据每三分钟更新一次

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `days` | `string` | **可选**，获取最近多少天的数据，默认不限天数 |
| `city` | `string` | **可选**，获取地区排名，如"成都"，默认全部 |
| `limit` | `integer` | **可选**，获取多少条，最多1000，默认100 |

响应：

```
Status: 200 OK
```

```json5
{
    "rank_list":[
        {
            "user": { /* 用户数据 */ },
            // 总收入金额
            "amount_count": 100,
            // 排名
            "rank": "100",
        }
    ],
    // 我的排名，未登录或不在查询的city则没有此字段
    "my_rank": {
      "user": { /* 用户数据 */ },
      // 总收入金额
      "amount_count": 0,
      // 排名
      "rank": "1000+",
    }
}
```

## 会员用户

### 会员价格|购买方式配置

```
GET /api/v2/vip/configs
```

响应：

```
Status: 200 OK
```

| 会员类型 | 描述 |
|:----:|----|
| `month` | **月度会员** |
| `quarter` | **季度会员** |
| `year` | **年度会员** |

```json5
{
    "month": {
        "type": 1,//购买方式：1：人民币；2：积分兑换
        "amount": 1000,//价格，当type为1时，单位为分
        "is_open": true //是否开启此选项
    },
    "quarter": {
        "type": 1,//购买方式：1：人民币；2：积分兑换
        "amount": 2500,//价格，当type为1时，单位为分
        "is_open": true //是否开启此选项
    },
    "year": {
        "type": 1,//购买方式：1：人民币；2：积分兑换
        "amount": 10000,//价格，当type为1时，单位为分
        "is_open": true //是否开启此选项
    }
}
```

### 创建会员订单

```
POST /api/v2/vip/orders
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `vip_type` | `string` | **必须**，购买类型：month：月度会员；quarter：季度会员；year：年度会员 |
| `buy_type` | `integer` | **必须**，购买方式：1：人民币购买；2：积分购买 |
| `quantity` | `integer` | **必须**，购买数量，1~65535 |
| `pay_score` | `integer` | **可选**，使用积分支付的数量，积分购买时必传 |
| `pay_method` | `string` | **可选**，支付方法，余额和积分无法完成支付时必传，可选值：<br>`Alipay_AopApp` 支付宝APP支付<br>`Alipay_AopWap` 支付宝H5网页支付<br>`Alipay_AopPage` 支付宝PC网页支付<br>`WechatPay_App` 微信APP支付<br>`WechatPay_Js` 微信小程序、公众号支付 |
| `pay_balance` | `integer` | **可选**，使用钱包余额支付的金额 |
| `redirect_url` | `string` | **可选**，当`pay_method=Alipay_AopWap/Alipay_AopPage`时支付完成后的重定向URL，最长256个字符 |
| `openid` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前用户的openid |
| `appid` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前的appid |
| `app_type` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前的APP类型，可选 app:公众号 micro:小程序，提供了此参数且没提供appid，系统将读取配置中的appid |

成功响应：

```
Status: 201 OK
```

```json5
{
    "user_id": 1, // 订单所有者用户ID
    "vip_type": "month", // 购买类型
    'buy_type': 1,//购买方式
    "quantity": 1, // 购买的数量
    "total_amount": 1000, // 订单总金额/总积分
    "pay_balance": 100,  // 使用余额支付的金额
    "pay_score": 0,     // 使用积分支付的数量
    "pay_amount": 0,     // 使用第三方支付支付的金额
    "trade_no": "xxxxxx", // pay_method不为None时才有订单号
    "pay_method": "None", // 订单支付方式，如果用余额全额支付则为None，否则为传入的值
    "pay_data": "",  // pay_method不为None时才有，用于第三方支付的数据，可能是任何数据类型。
    "pay_status": 2, // 支付状态 0未支付、1已支付，但处理失败（三方平台支付的金额已充值到余额），2已支持且处理购买逻辑成功
    "paid_at": "2019-04-25 09:20:13", // 订单支付后才有此标识
    "updated_at": "2019-04-25 09:20:13",
    "created_at": "2019-04-25 09:20:13",
    "id": 46,
}
```

客户端错误响应：

```
Status: 400|403|422 OK
```

```json5
{
    // 错误消息，当为以下错误时才有此字段
    // score_not_enough        可用的积分不足
    // balance_not_enough      可用的余额不足
    "error_type": "unsupported_area",
    "message": "错误消息",
}
```

### 获取会员信息

```
GET /api/v2/vip/configs
```

响应：

```
Status: 200 OK
```

```json5
{
    "is_vip":true,//是否为会员
    "surplus_time":31,//会员剩余时间
}
```

### 注销账号
```http request
DELETE /api/v2/user
```
```
Status: 401|202
```
```json5
    {
      "message": "操作成功,再见"
    }
```
