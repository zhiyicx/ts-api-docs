---
sidebarDepth: 2
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
```json5
{
    "switch": true, // 会员功能是否开启
    "exchange": 1,
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
