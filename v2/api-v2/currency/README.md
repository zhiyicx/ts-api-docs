---
id: api-v2-currency
title: 积分
---

# 积分部分

- [获取积分配置](#获取积分配置)
- [积分流水](#积分流水)
- [发起充值](#发起充值)
- [发起提现](#发起提现)
- [发起 IAP(in-App Purchase) 充值](#发起IAP充值)
- [验证 IAP 订单](#验证IAP充值)
- [获取苹果IAP商品列表](#获取苹果IAP商品列表)
- [IAP帮助页面](#iap-help)

<a name="get-currency-config"></a>

## 获取积分配置

``` http request
GET /api/v2/bootstrappers
```
**此接口为启动接口，请读取其中的`currency`部分**

### 响应

```
Http Status 200
```

```json
{
    "currency": {
        "IAP": {
            "only": true,
            "rule": "iap使用规则"
        },
        "cash": {
            "rule": "我是提现规则",
            "status": true
        },
        "recharge": {
            "rule": "我是积分充值规则",
            "status": true
        },
        "rule": "我是积分规则",
            "settings": {
            "recharge-ratio": 1,
            "recharge-options": "100,500,1000,2000,5000,10000",
            "recharge-max": 10000000,
            "recharge-min": 100,
            "cash-max": 10000000,
            "cash-min": 100
        }
    }
}
```

| 名称 | 类型 | 描述 |
|:----:|:----:|:-----|
| setting | array | 积分相关设置 |
| setting.recharge-ratio | int | 兑换比例，人民币一分钱可兑换的积分数量（例：ratio = 10，1分钱 = 10积分） |
| setting.recharge-options | string | 充值选项，单位：积分 |
| setting.recharge-max | int | 单笔最高充值额度，单位：积分 |
| setting.recharge-min | int | 单笔最小充值额度，单位：积分 |
| setting.cash-max | int | 单笔最高提现额度，单位：积分 |
| setting.cash-min | int | 单笔最小提现额度，单位：积分 |
| rule | string | 积分规则 |
| iap | array | 苹果IAP积分充值相关 |
| iap.only | boolean | 是否只支持IAP充值，仅对IOS有效 |
| iap.rule | string | IAP充值规则，仅对IOS有效 |
| cash | array | 允许的提现方式 |
| cash.status | boolean | 是否开启积分提现 |
| cash.rule | string | 积分提现规则 |

## 积分流水

```
GET /api/v2/currency/orders
```

### 可选参数

| 名称 | 类型 | 描述 |
|:----:|:----:|:-----|
| limit | int | 数据返回条数 |
| after | int | 翻页数据id |
| action | string | 筛选类型 `recharge` - 充值记录 `cash` - 提现记录  默认为全部|
| type | int | 收入类型 `1` - 收入， `-1` - 支出 默认为全部 |

### 响应

```
Http Status 200
```

```json
[
    {
        "id": 1485,
        "owner_id": 1,
        "title": "购买 - 测试积分商品",
        "body": null,
        "type": -1,
        "target_type": "mall_orders",
        "target_id": "234",
        "currency": 1,
        "amount": 30,
        "state": 1,
        "created_at": "2020-06-01T03:41:18Z",
        "updated_at": "2020-06-01T03:41:18Z"
    }
]
```

### 可选参数

| 名称 | 类型 | 描述 |
|:----:|:----:|:-----|
| id   | int  | 数据id |
| owner_id | int | 用户（所属者）id |
| title | string | 记录标题 |
| body | string | 记录信息 |
| type | int | 增减类型 `1` - 收入、 `-1` - 支出 |
| target_type | string | 操作类型 目前有： `default` - 默认操作、`commodity` - 购买积分商品、`user` - 用户到用户流程（如采纳、付费置顶等）、`task` - 积分任务、`recharge` - 充值、`cash` - 积分提取 |
| target_id | string | 当操作类型为`user`时，为用户id|
| currency | int | 后台预设积分类型id，当前需求中暂无该需求，默认为1，类型为`积分` |
| amount | int | 积分额 |
| state | int | 订单状态 `0` - 等待、`1` - 完成、`-1` - 失败|


## 发起充值

```
POST /api/v2/currencyRecharge/orders
```

### 输入参数

| 字段 | 必须 | 类型 | 描述 |
|----|:----:|:----:|:----:|
| type | 是 | string | 充值方式 （见「启动信息接口」或者「钱包信息」） |
| amount | 是 | int | 用户充值金额，单位为真实货币「分」单位，充值完成后会根据积分兑换比例增加相应数量的积分 |
| from | 是 | int | 充值客户端编号 3:ios 4:android 5:其他 |

### 响应

::: danger
以下内容为了便于区分，加入了type前缀，实际使用的时候直接返回对象或者字符串
:::

```
Status: 201 Created
```
```json
{
   "AlipayOrder": {
      "message": "订单创建成功",
      "data": "alipay_sdk=lokielse%2Fomnipay-alipay&app_id=2019071565853380&biz_content=%7B%22subject%22%3A%22%5Cu91d1%5Cu5e01%5Cu5145%5Cu503c%22%2C%22out_trade_no%22%3A%22202006101559321297%22%2C%22total_amount%22%3A1%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22body%22%3A%22%5Cu5728ThinkSNS%2B%5Cu5145%5Cu503c%5Cu91d1%5Cu5e01%5Cuff1a100%22%2C%22timeout_express%22%3A%2210m%22%2C%22charge_type%22%3A%22currency%22%7D&charset=UTF-8&format=JSON&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fts.test%2Fapi%2Fv2%2FalipayCurrency%2Fnotify&sign_type=RSA2&timestamp=2020-06-10+07%3A59%3A32&version=1.0&sign=KTased8WkoJ2EuEg2qbLg14By3Q1oHng3sg3YDknT80E8hY5vfILxzQ%2Bu9%2BEgYYgNW%2BJK1TQ4t9BoNqfQXy7HjqYKwTIbosEUQF4MS%2BxMNP0so0J3W0a5ZKP2gTOt0kEzu%2FiMpcBCmMlAx834PYUiwrYsvVtOacC8ojn5adaEfKo8pTp%2BbJtIRqL2Ya6WZYZDmY6isooI%2Ffc2BUtfwY%2BkCZDydBQB4B78BCinun0sAVwRhvquUJOO57%2BzI1CYaui%2B6FjbT9yTm7Zl6jaBCKsh0H88vtZV2lj8GPzLFRqgJIsrTZ6lMpR%2BkQ5gWgRYY77gsvV21QYgG%2FeiJ2RM90c2w%3D%3D"
    },
  "WechatOrder": {
    "message": "订单创建成功",
    "data": {
      "appid": "wxfdbfcc9bf46384bf",
      "partnerid": "1486014122",
      "prepayid": "wx101603553282078c9cced7371334595900",
      "package": "Sign=WXPay",
      "noncestr": "a6283be72e3202969b8132a7c38c288d",
      "timestamp": 1591776235,
      "sign": "C1064BE8150F852ED1CAE809AB8612D8"
    }
  },
  "WechatWapOrder": {
    "message": "订单创建成功",
    "data": {
      "appId": "wxbb4f76dd535eef67",
      "package": "prepay_id=wx10160640584366ec44743c851808150900",
      "nonceStr": "f42b497c75a710383e9bf52505382049",
      "timeStamp": "1591776400",
      "signType": "MD5",
      "paySign": "5EDA962DE2A4001CD9F8BF866ACD78F1"
    }
  }
}
```

### Type 场景

| name | 描述 |
|----|----|
| AlipayOrder | App使用支付宝支付 |
| AlipayWapOrder | 支付宝移动网页支付 |
| WechatOrder | App使用微信支付 |
| WechatWapOrder | 微信JSSDK |

## 发起提现

```
POST /api/v2/currency/cash
```

### 传入参数

| 名称 | 类型 | 描述 |
|:----:|:----:|:-----|
| amount | int | 提取积分，发起该操作后会根据积分兑换比例取人民币分单位整数后扣减相应积分 |

### 响应

```
Http Status 201
```

```json
{
    "message": "金币提取申请已提交，请等待审核"
}
```

## 发起IAP充值

```
POST /api/v2/currency/recharge/apple-iap
```

### 输入参数

| 字段 | 必须 | 类型 | 描述 |
|----|:----:|:----:|:----:|
| amount | 是 | int | 用户充值金额，单位为真实货币「分」单位，充值完成后会根据积分兑换比例增加相应数量的积分 |
| apple_id | 是 | string | IAP产品对应的appleid |


### 响应

```
HTTP Status 201
```

```json
{
    "id": 11,
    "owner_id": 1,
    "title": "积分充值",
    "body": "充值积分：200积分",
    "type": 1,
    "target_type": "recharge",
    "target_id": "0",
    "currency": 1,
    "amount": 200,
    "state": 0,
    "created_at": "2018-01-18 07:57:21",
    "updated_at": "2018-01-18 07:57:21"
}
```

## 验证IAP充值

```
POST /api/v2/currency/orders/:order/apple-iap/verify
```

## 输入参数

| 字段 | 类型 | 描述 |
|:----:|:-----|:-----|
| receipt | string | 数组格式的收据编码 |

### 响应

```
HTTP Status 200
```

```json
{
    "id": 11,
    "owner_id": 1,
    "title": "积分充值",
    "body": "充值积分：200积分",
    "type": 1,
    "target_type": "recharge",
    "target_id": "0",
    "currency": 1,
    "amount": 200,
    "state": 0,
    "created_at": "2018-01-18 07:57:21",
    "updated_at": "2018-01-18 07:57:21"
}
```

## 获取苹果IAP商品列表

```
GET /api/v2/currency/apple-iap/products
```
### 响应

```json
[
    {
        "product_id": "1",
        "name": "积分1",
        "apple_id": "11211",
        "amount": "600",
      	"showAmount": "1200"
    }
]
```

### 返回参数

| 名称 | 类型 | 描述 |
|:----:|:-----|:-----|
| product_id | string | 商品id（apple后台生成，删除后可重复创建） |
| name | string | 商品名称 |
| apple_id | string | 商品appleid（apple后台生成，唯一） |
| amount | string | 支付给Apple的金额（apple后台配置金额），单位：分 |
| showAmount | string | 实际到账金额（页面显示金额），单位：分 |

## IAP 帮助页面

```
GET /api/v2/currency/apple-iap/help
```

