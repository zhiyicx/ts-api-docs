---
sidebarDepth: 2
title: 会员
---

# VIP相关接口

## VIP开关
启动接口 `/api/v2/bootstrappers` 接口中返回 `vip-switch` ,值为 `true` 或 `false`

## VIP配置
````http request
GET /api/v2/vip/configs
````

响应状态

```
Status: 200 OK
```

响应体
> 响应体说明： `config` 字段为价格配置内容，`low`, `middle`, `high` 表示三个等级的会员
> `enable` 表示是否启用此等级的会员
> `{'low' | 'middle' | 'high' }` 下的 `setting` 则表示每个时间段的会员价格配置等信息
>`exchange` 表示低等级到高等级兑换的天数

<details>

```json5
{
    "switch": true, // 会员功能是否开启
    "exchange": 1, //  exchange 表示低等级到高等级兑换的天数
    "config": {
        "low": {
            "enable": true, // 如果为false表示不显示
            "level": "low",
            "name": "白金会员",
            "setting": [{
                "duration": 1, // 时长
                "original": 10, // 原价格
                "iap": null, // iap商品id 
                "iap_price": 12, // iap购买展示价格
                "price": 9, // 非iap实际价格
                "enable": false // 是否启用，如果为false表示不显示
            },
            {
                "duration": 3,
                "original": 30,
                "iap": "103",
                "iap_price": 30,
                "price": 27,
                "enable": true,
                "currency": 30
            },
            {
                "duration": 12,
                "original": 127,
                "iap": null,
                "iap_price": 127,
                "price": 108,
                "enable": false
            }]
        },
        "middle": {
            "enable": true,
            "level": "middle",
            "name": "钻石会员",
            "setting": [
            {
                "duration": 1,
                "original": 20,
                "iap": null,
                "iap_price": 20,
                "price": 18,
                "enable": false
            },
            {
                "duration": 3,
                "original": 60,
                "iap": "203",
                "iap_price": 60,
                "price": 54,
                "enable": true,
                "currency": 60
            },
            {
                "duration": 12,
                "original": 240,
                "iap": null,
                "iap_price": 240,
                "price": 216,
                "enable": false
            }]
        },
        "high": {
            "enable": true,
            "level": "high",
            "name": "黑钻会员",
            "setting": [
                {
                    "duration": 1,
                    "original": 30,
                    "iap": null,
                    "iap_price": 30,
                    "price": 27,
                    "enable": false
                },
                {
                    "duration": 3,
                    "original": 90,
                    "iap": "303",
                    "iap_price": 90,
                    "price": 81,
                    "enable": true,
                    "currency": 90
                },
                {
                    "duration": 12,
                    "original": 360,
                    "iap": null,
                    "iap_price": 360,
                    "price": 324,
                    "enable": false
                }
            ]
        }
    }
}
```

</details>



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
    "pay_data": {},  // pay_method不为None时才有，用于第三方支付的数据，可能是任何数据类型。
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




## 购买/续费会员
```http request
POST /api/v2/vip/orders
```
请求体

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `quantity` | `integer` | **可选**，购买数量，默认 `1` |
| `timezone` | `string` | **必选**, 客户端所在时区 |
| `duration` | `integer` | **必选**，购买时长，仅可选 `1`, `3`, `12` |
| `level` | `string` | **必选**，购买/续费会员类型 仅可选 `low`, `middle`, `high` |
| `pay_method` | `string` | **必选**，购买/续费会员的支付方式 仅可选 `Alipay_AopApp`,`Alipay_AopWap`,`Alipay_AopPage`,`WechatPay_App`,`WechatPay_Js`,`Iap` |

响应
```
Status: 201 Created
```

响应体

```json5
{
    "pay_method":"WechatPay_App",
    "quantity":1,
    "duration":"1","level":"low",
    "vip_info":{ 
        "level":"low",
        "name":"白金会员",
        "duration":1,
        "price":1,
        "iap":"001",
        "iap_price":12,
        "currency":10,
        "timezone":"Asia/Shanghai"
    },
    "user_id":8,
    "pay_amount":1,
    "total_amount":1,
    "pay_status":0,
    "updated_at":"2020-05-21T08:21:08Z",
    "created_at":"2020-05-21T08:21:08Z",
    "id":89,
    "trade_no":"20200521162108287MO2H",
    "pay_data":{ 
        "appid":"wxfdbfcc9bf46384bf",
        "partnerid":"1486014122",
        "prepayid":"wx211621088964897b0f7bb9141256071600",
        "package":"Sign=WXPay",
        "noncestr":"2b370611bf1a5af065c587b221c4df2f",
        "timestamp":1590049268,
        "sign":"D4873472BFA320CCBBD819C5B438DEA8"
    }
}
```

## 转为高等级会员

```http request
PATCH /api/v2/vip/exchange-vip
```
| 参数 | 类型 | 描述 |
|:----:|----|----|
| `level` | `string` | **必选**，需要转到哪一种VIP等级 |

操作成功的响应
```
Status: 201 Created
```

操作失败的响应
```
Status: 403 Forbidden
```

## IAP支付结果检查

```http request
POST /api/v2/vip/check-iap-result/{orderId}
```

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `receipt` | `string` | **必选**，支付成功后的结果 |

购买成功响应

```
Status: 200 OK
```
暂定其他响应

```
Status: 500 Server Error
```

## 查看用户购买vip订单
```
GET /api/v2/vip/orders
```
| 参数 | 类型 | 描述 |
|:----:|----|----|
| `offset` | `string` | **必选**，偏移量，默认0 |
| `limit` | `string` | **必选**，分页量，默认15 |
| `s` | `string` | **可选**，开始日期 |
| `d` | `string` | **可选**，结束日期 |

响应
```
Status: 200 OK
```

响应体

```json5
[
    {
        "id": 6,
        "trade_no": "20191223111755687MO6",
        "user_id": 1,
        "total_amount": 8100,
        "quantity": 1,
        "pay_method": "WechatPay_App",
        "pay_amount": 8100,
        "pay_status": 0,
        "level": "high",
        "duration": 3,
        "vip_info": {
            "name": "黑钻会员",
            "level": "high",
            "price": 8100,
            "duration": 3
        },
        "paid_at": null,
        "user_deleted_at": null,
        "platform_deleted_at": null,
        "created_at": "2019-12-23 03:17:55",
        "updated_at": "2019-12-23 03:17:55"
    },
    {
        "id": 9,
        "trade_no": "20191223152502114MO9",
        "user_id": 1,
        "total_amount": 9000,
        "quantity": 1,
        "pay_method": "Iap",
        "pay_amount": 9000,
        "pay_status": 0,
        "level": "high",
        "duration": 3,
        "vip_info": {
            "iap": "303",
            "name": "黑钻会员",
            "level": "high",
            "price": 8100,
            "duration": 3,
            "ipa_price": 90
        },
        "paid_at": null,
        "user_deleted_at": null,
        "platform_deleted_at": null,
        "created_at": "2019-12-23 07:25:02",
        "updated_at": "2019-12-23 07:25:02"
    }
]
```

## 查看单条订单
```http request
GET /api/v2/vip/orders/{order}
```
> `order` 为 [订单列表](vip.md#查看用户购买vip订单)中返回的id

响应
```
Status: 200 OK
```

响应体

```json5
{
        "id": 9,
        "trade_no": "20191223152502114MO9",
        "user_id": 1,
        "total_amount": 9000,
        "quantity": 1,
        "pay_method": "Iap",
        "pay_amount": 9000,
        "pay_status": 0,
        "level": "high",
        "duration": 3,
        "vip_info": {
            "iap": "303",
            "name": "黑钻会员",
            "level": "high",
            "price": 8100,
            "duration": 3,
            "ipa_price": 90,
            "timezone": "Asia/Shanghai"
        },
        "paid_at": null,
        "user_deleted_at": null,
        "platform_deleted_at": null,
        "created_at": "2019-12-23 07:25:02",
        "updated_at": "2019-12-23 07:25:02"
    }
```

## 软删除订单
```http request
DELETE /api/v2/vip/orders/{order}
```
> `order` 为 [订单列表](vip.md#查看用户购买vip订单)中返回的id

响应
```
Status 204 No Content
```

## VIP协议
```http request
GET /api/v2/vip/protocol
```

响应
```
Status: 200 OK
```

响应体
```
<h1>VIP协议</h1>
```

## 检测订单是否成功
```http request
GET /api/v2/vip/check-order/{orderId}
```
响应
```
Status: 200 OK
```
响应体
```json5
{
  status: true 
}
```
> `status` 只有true和false, 当为true的时候，表示订单已经接受第三方支付的回调，成功购买了会员
