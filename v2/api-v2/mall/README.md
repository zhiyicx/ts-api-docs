---
sidebarDepth: 3
title: 商城
---

# 商城APIs文档


## 单个商品数据结构

<details>

``` json

{
  "id": 331, // 商品ID
  "user_id": 17, // 商家用户ID
  "type": "member", // 商品类型， score 积分商品， member 会员商品
  "category_id": 3, // 分类id
  "photos": [ // 商品的图片信息，最多4张图片，或者其中一个为视频
    {
      "image": {
        "url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2024/06/03/CNmMiCGzAGWnhbFCsIv8XWcc8gDKBprVrVtQyyZNq2mhnGesQZNNJNuhMAfJA0KU.jpg",
        "vendor": "aliyun-oss",
        "mime": "image/jpeg",
        "size": 92077,
        "dimension": {
          "width": 975,
          "height": 650
        },
        "node": "public:2024/06/03/CNmMiCGzAGWnhbFCsIv8XWcc8gDKBprVrVtQyyZNq2mhnGesQZNNJNuhMAfJA0KU.jpg"
      }
    }
  ],
  "title": "测试问题的会员商品", // 商品标题
  "price": 0, // 商品的价格
  "score": 0, // 所需积分数量 
  "market_price": 1700, // 市场价格
  "sku": [ // 有规格时的商品规格
    {
      "name": "red",  // 规格名字
      "extra": 2,     // 对应的规格需要额为支付的积分或者人民币分，根据type来确定
      "inventory": 100  // 对应规格的库存数量
    },
    {
      "name": "green",
      "extra": 3,
      "inventory": 100
    }
  ],
  "inventory": 3, // 无规格时的库存
  "has_freight": false, // 是否有运费
  "freight": 0, // 运费，单位：分
  "remote_areas": [ // 可选，偏远地区，最多50个；偏远地区暂时将限制购买
    "北京",
    "山西",
    "吉林"
  ],
  "views_count": 31, // 浏览量
  "shares_count": 0, // 分享数量
  "likes_count": 0,// 收藏数量
  "orders_count": 1, // 订单数量
  "sells_count": 0, // 卖出数量
  "comments_count": 0, // 点评数量
  "extra": { // 
    "middle": 1500
  },
  "created_at": "2024-06-03T05:50:13Z", // 创建时间
  "updated_at": "2024-06-17T09:31:02Z", // 更新时间
  "liked": false, // 是否已收藏
  "can_comment": false, // 是否能评论
  "user": { // 卖家用户信息
    "id": 17,
    "name": "残残个电话",
    "bio": "简介经过此方法的点点滴滴打电话夫妇红枫湖风景刚才嘻嘻哈哈行动复合型献愁供恨给哥带来惊喜深有感触，😍😍",
    "sex": 2,
    "location": "成都市 成华区",
    "inviter": null,
    "invite_code": "10ABCG",
    "avatar": {
      "url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/03/10/fHSBiaYq9kMsGC7uINl1UE0JrME9hzUJybBRssD28H2CPizbgzj8p5uVSuSul7LV.jpeg",
      "vendor": "aliyun-oss",
      "mime": "image/jpeg",
      "size": 384310,
      "dimension": {
        "width": 720,
        "height": 720
      },
      "node": "public:2022/03/10/fHSBiaYq9kMsGC7uINl1UE0JrME9hzUJybBRssD28H2CPizbgzj8p5uVSuSul7LV.jpeg"
    },
    "feed_topics_count": 13,
    "verification": {
      "type": "user",
      "state": 1,
      "created_at": "2022-10-09T06:47:46Z",
      "updated_at": "2023-09-07T06:48:18Z",
      "desc": "打开空调开的",
      "slogan": "一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十",
      "id_card": {
        "number": "510108199401212255",
        "rear": {
          "url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/10/09/tAxheuMR4t66NkDhtjJL7LFdu5VukN0cLNxMz97qRyPo375hdp5ImargxnFaab54.png",
          "vendor": "aliyun-oss",
          "mime": "image/png",
          "size": 341243,
          "dimension": {
            "width": 729,
            "height": 459
          },
          "node": "public:2022/10/09/tAxheuMR4t66NkDhtjJL7LFdu5VukN0cLNxMz97qRyPo375hdp5ImargxnFaab54.png"
        },
        "front": {
          "url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/10/09/Z0xVCTv8IPZDkG1D0a8GyNFc72YghqjTOtRigE7lSjIhIfonZeaofGe6RZIbyZjH.png",
          "vendor": "aliyun-oss",
          "mime": "image/png",
          "size": 483169,
          "dimension": {
            "width": 729,
            "height": 459
          },
          "node": "public:2022/10/09/Z0xVCTv8IPZDkG1D0a8GyNFc72YghqjTOtRigE7lSjIhIfonZeaofGe6RZIbyZjH.png"
        }
      },
      "real_name": "尽职尽责家",
      "phone_number": "13800000000"
    },
    "has_follower": false,
    "has_following": false,
    "created_at": "2019-12-10T01:24:34Z",
    "updated_at": "2024-08-16T07:04:48Z",
    "disabled": false,
    "commodities_count": 29,
    "blacked": false,
    "current_blocked": false,
    "reward_score_count": 181
  },
  "category": { // 分类信息
    "id": 3,
    "name": "交话费",
    "icon": {
      "url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2020/12/22/1tx7BcfptMlCtYmPsiA82GTyRVebWQBZXJ7nJM455KKgBk9f02YJPbCutQAxJPw2.jpg",
      "vendor": "aliyun-oss",
      "mime": "image/jpeg",
      "size": 354054,
      "dimension": {
        "width": 768,
        "height": 768
      },
      "node": "public:2020/12/22/1tx7BcfptMlCtYmPsiA82GTyRVebWQBZXJ7nJM455KKgBk9f02YJPbCutQAxJPw2.jpg"
    },
    "sort": 2,
    "selling_count": 92,
    "trashed_count": 7,
    "created_at": "2020-03-30T17:25:15Z",
    "updated_at": "2024-06-06T09:03:32Z",
    "commodities_count": 99
  },
  "buying_read": null, // 购买须知
  "shop_info": { // 商家信息
    "user_id": 17,
    "is_original": 0,
    "qrCode": null,
    "weChat": null,
    "phone": null
  },
  "brand_id": 6, // 品牌ID
  "brand": { // 品牌信息
    "id": 6,
    "name": "Prof. Edwina Bernhard", // 品牌名称
    "desc": "Consectetur praesentium aliquid voluptas sequi repudiandae consequatur expedita.", // 品牌简介
    "avatar": { // 品牌图标
      "url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2019/11/28/YHM9W4p61GOFFG7SWeaXJysENQzAQAU0O5rURGpweCFfxN0Q4vb9ipYIhOH0MN6f.jpeg",
      "vendor": "aliyun-oss",
      "mime": "image/jpeg",
      "size": 614475,
      "dimension": {
        "width": 720,
        "height": 720
      },
      "node": "public:2019/11/28/YHM9W4p61GOFFG7SWeaXJysENQzAQAU0O5rURGpweCFfxN0Q4vb9ipYIhOH0MN6f.jpeg"
    },
    "sub_avatar": null, // 品牌小图标
    "audit": true, // 品牌状态
    "recommend": true,
    "commodities_count": 0, // 商品数量
    "deleted_at": null,
    "sort": 800
  }
}

```

</details>

## 商城配置
> 商城配置在启动接口`/api/v2/bootstrappers`中返回`mall`，配置详情如下：

```json5
{
  // 成为店主的条件，对店主的定义，可选:
    // verification 表示认证用户即为商家
    // ability 表示需要具有特定权限的用户为商家
  "shopkeeper": "ability",
  // 当shopkeeper=ability时需要检查的权限名称
  "ability_name": "mall:shopkeeper",
  // 商品定价政策，可选：
   	// price 仅价格，积分只能设置0
   	// score 仅积分，价格只能设置0
   	// both  需要同时设置价格和积分
  "pricing_policy": "both",
  // 如果 pricing_policy=both 则配置积分所占百分比
  "score_min_percent": 0,
  // 浮点数，用户下单后平台对金额的抽成比例
  "amount_tax_rate": 0.2,
  // 浮点数，用户下单后平台对积分的抽成比例
  "score_tax_rate": 0.2,
  // 当author=verification允许的认证类型,允许发布商品的类型
  // 多个类型配置在一个数组列表中，允许全部为 null
  "allow_v10n_types":["user"],
  "share_commodity_ids": [ // 分享商品获取折扣对应商品id,暂未使用
      1,
      2,
      3
  ],
  "share_every_discount": 4, // 暂未使用,分享获取折扣
  "all_categories_icon": { // 商城页面，推荐分类的图标
      "url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/11/23/BEPmnAwCYgnwYJKdWnpFuwInEbFxTNjd6mV5CGqZtWUXwSXGgwBJgxGhhBTsO7FI.png",
      "vendor": "aliyun-oss",
      "mime": "image/png",
      "size": 8895,
      "dimension": {
          "width": 90,
          "height": 90
      },
      "node": "public:2022/11/23/BEPmnAwCYgnwYJKdWnpFuwInEbFxTNjd6mV5CGqZtWUXwSXGgwBJgxGhhBTsO7FI.png"
  },
  // 最长等待收货时间
  "default_confirm_receipt": 7,
  // 允许最大反馈数量
  "feedback_count": 2,
  // 退货次数
  "refund_count": 5,
  // 退货说明
  "refund_explain": "退货说明",
  // 卖家同意退款后/协商退款买家操作退货期限
  "refund_deliver_time": 4,
  // 买家申请协商处理期限
  "refund_negotiate_user_time": 4,
  // 以下是下单关于微信小程序提醒的模板
  "order_template_id": "T6R9rtoyyo9J48J4dFFLgJoCs05_k7v-cH72jbKnWXI",
  "express_template_id": "4YcQ0BfiUAh2WXZm39G1M3r61H3-BgVYoownwqdv9fk",
  "receipt_template_id": "wwc8PwtFBjIXtqt8w_XM3GidfwH46S0QsJgsgBjob7E",
  "refund_template_id": "01fQ-zzlEBUcrY15BiceeQpl9yaMZ-IczrHpfXqR3d8",
  "refund_result_template_id": "cCelPaoDXFhLGYc-o1CrsHq3J0ZTWUz6pRiM2SqQFKA",
  "return_template_id": "0-OXKI30aQIpPWuyMbuhagl1uAgan_kBzm1_V8nfu8Y",
  "return_result_template_id": "0-OXKI30aQIpPWuyMbuhao6FDHACaALJqQP_hMwIux8"
}
```

## 商品分类

### 获取商品分类列表

```
GET /api/v2/mall/categories
```

请求查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `trashed` | `string` | **可选**，默认`without`，选项：<br>`without`不包括已删除分类，<br>`with`包括已删除分类<br>`only`·仅已删除的分类 |
| `count_by_user_id` | `string` | **可选**，用户ID，统计该用户在每个分类下的商品数量 |

响应：

```
Status: 200 OK
```
```json5
[
    {
        "id": 1,                  // 分类ID
        "name": "分类一",         // 分类名称
        "icon": { /* 图片信息 */ },
        "sort": 0,                // 排序字段
        "selling_count": 3,      // 正在出售的商品总数
        "trashed_count": 1,      // 已删除/下架的商品数
        "commodities_count": 4,  // 商品总数
        "created_at": "2019-04-16 09:25:48",
        "updated_at": "2019-04-16 09:51:32",
        "deleted_at": "2019-04-16 09:51:32", // 分类删除标识
        "user_selling_count": 3,      // 指定用户正在出售的商品总数
        "user_trashed_count": 1,      // 指定用户已删除/下架的商品数
        "user_commodities_count": 4,  // 指定用户商品总数
        "count_by_user_id": 1          // 客户端给的用户ID
    }
]
```

### 获取单个商品分类

```
GET /api/v2/mall/categories/{category.id}
```

请求查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `count_by_user_id` | `string` | **可选**，用户ID，统计该用户在此分类下的商品数量 |

响应：

```
Status: 200 OK
```
```json5
{
    "id": 1,                  // 分类ID
    "name": "分类一",         // 分类名称
    "icon": { /* 图片信息 */ },
    "sort": 0,                // 排序字段
    "selling_count": 3,      // 正在出售的商品总数
    "trashed_count": 1,      // 已删除/下架的商品数
    "commodities_count": 4,  // 商品总数
    "created_at": "2019-04-16 09:25:48",
    "updated_at": "2019-04-16 09:51:32",
    "deleted_at": "2019-04-16 09:51:32", // 分类删除标识
    "user_selling_count": 3,      // 指定用户正在出售的商品总数
    "user_trashed_count": 1,      // 指定用户已删除/下架的商品数
    "user_commodities_count": 4,  // 指定用户商品总数
    "count_by_user_id": 1          // 客户端给的用户ID
}
```

### 添加商品分类

> 商品分类只有拥有 `mall:admin` 权限的用户才能创建

```
POST /api/v2/mall/categories
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **必须**，分类名称，不能重复，最大长度24（GB18030长度） |
| `sort` | `integer` | **必须**，排序值，越大越靠前 |
| `icon ` | `String` | 可选，分类图标的 storage none |


响应：

```
Status: 201 Created
```
```json5
{
    "id": 1,
    "name": "分类一",
    "icon": { /* 图片信息 */ },
    "sort": 0,
    "selling_count": 0,
    "trashed_count": 0,
    "commodities_count": 0,
    "created_at": "2019-04-16 09:25:48",
    "updated_at": "2019-04-16 09:51:32"
}
```

### 修改商品分类

> 商品分类只有拥有 `mall:admin` 权限的用户才能更改

```
PUT|PATCH /api/v2/mall/categories/{category.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **可选**，分类名称，不能重复，最大长度24（GB18030长度） |
| `sort` | `integer` | **可选**，排序值，越大越靠前 |
| `deleted` | `boolean` | **可选**，软删除/恢复分类 |
| `icon ` | `String` | 可选，分类图标的 storage none |

响应：

```
Status: 200 OK
```
```json5
{
    "id": 1,
    "name": "分类一",
    "icon": { /* 图片信息 */ },
    "sort": 0,
    "selling_count": 0,
    "trashed_count": 0,
    "commodities_count": 0,
    "created_at": "2019-04-16 09:25:48",
    "updated_at": "2019-04-16 09:51:32"
}
```

### 设置商品购买条件

> 只有拥有 `mall:admin` 权限的用户才能为商品设置购买权限

> **注意：**每次调用此设置接口，都将覆盖之前的设置

```
PUT /api/v2/mall/commodities/{commodity.id}/buy-conditions
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `topics` | `integer` | **可选**，限制需要创建成功的圈子数量1-1000 |
| `invite_users` | `integer` | **可选**，限制需要邀请用户数量1-100000 |
| `share_topics` | `integer` | **可选**，限制需要分享圈子数量1-100000 |
| `topic_feeds` | `integer` | **可选**，限制需要圈子中发布的动态数量1-100000 |
| `comments` | `integer` | **可选**，限制需要总发布的评论数量1-100000 |
| `checkin` | `integer` | **可选**，限制连续签到数量1-100000 |
| `share_commodities` | `integer` | **可选**，限制当前商品分享数量1-100000 |

响应：

```
Status: 200 OK
```
```
数据和更新商品一致
```


### 删除商品分类

> 商品分类只有拥有 `mall:admin` 权限的用户才能删除，真实删除不可恢复，且commodities_count>0时禁止删除

```
DELETE /api/v2/mall/categories/{category.id}
```

响应：

```
Status: 204 No Content
```

## 商品

### 获取商品列表

```
GET /api/v2/mall/commodities
```

请求查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `id` | `integer,string` | **可选**，商品ID，多个逗号分隔 |
| `user_id` | `integer,string` | **可选**，用户ID，不提供则查询全部用户，多个逗号分隔 |
| `brand_id` | `integer,string` | **可选** 品牌ID，根据品牌查询商品 |
| `category_id` | `integer,string` | **可选**，分类ID，不提供则查询全部分类，多个逗号分隔 |
| `min_price` | `integer` | **可选**，最低价格 |
| `type` | `string` | **可选**，商品类型 可选值`score`,`member` |
| `max_price` | `integer` | **可选**，最高价格 |
| `min_score` | `integer` | **可选**，最低积分 |
| `max_score` | `integer` | **可选**，最高积分 |
| `has_freight` | `integer` | **可选**，0包邮的商品，1不包邮的商品 |
| `trashed` | `string` | **可选**，默认`without`，选项：<br>`without`不包括已删除/下架的商品<br>`with`包括已删除/下架的商品<br>`only`·仅已删除/下架的商品 |
| `keyword` | `string` | **可选**，查询关键字，仅在标题中搜索 |
| `liked` | `string` | **可选**，无默认值，选项：<br>`check`返回列表中包含`liked`字段表示收藏状态<br>`only`仅查询自己已收藏的商品 |
| `offset` | `integer` | **可选**，本地已有加载数据数量 |
| `limit` | `integer` | **可选**，获取条数，默认15 |
| `order` | `string` | **可选**，排序，多个逗号分隔；支持的排序字段：<br>id,price,score,views_count,shares_count,likes_count,orders_count<br>comments_count,topped_at,category_topped_at,user_topped_at,created_at,updated_at,deleted_at,random<br><br>如：topped_at desc,updated_at desc 或 topped_at desc,random |
| `page` | `integer` | **可选**，第几页，如果有此参数，则返回分页模式的数据 |
| `with` | `string,array<string>` | **可选**，需要返回的关联数据，可选：`user`,`user.verification`,`category`, `brands`, `user.shopInfo` |
| `all_columns` | `integer` | **可选**，获取全部字段，可选0,1 |

响应：

```
Status: 200 OK
```
```json5
[
{单个商品}
]

```

### 获取单个商品

```
GET /api/v2/mall/commodities/{commodity.id}
```

响应：

```
Status: 200 OK
```
[单个商品数据结构](#单个商品数据结构)

### 添加商品

> 普通用户只有认证后或拥有指定用户角色才能创建商品，有 `mall:admin` 权限的用户可以为任何人创建商品

```
POST /api/v2/mall/commodities
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `user_id` | `integer` | **可选**，商品所属用户，默认为当前用户 |
| `category_id` | `integer` | **必须**，商品所属分类 |
| `photos` | `array` | **必须**，商品照片列表，必须是一个数组，1~4个元素 |
| `photos.*` | `object` | **必须**，商品照片，必须一个键值对 |
| `photos.*.image` | `string` | **必须**，商品照片/视频封面的 storage node |
| `photos.*.video` | `string` | **可选**，视频的 storage node |
| `title` | `string` | **必须**，商品标题，最大长度60（GB18030长度） |
| `brand_id` | `integer` | **可选**，商品所属的品牌id） |
| `type` | `string` | **必须**，商品类型，可选类型 { `score`: 积分兑换商品, `member`: 会员专享商品 }，默认为score |
| `extra` | `json` | **可选**，`type`为`member`时必填，eg: {"low": 100, "middle": 50} |
| `price` | `integer` | **选填**，商品价格，单位`分` ，没有则设置`0`，,**但是当`type` 为 `member`的时候也是需要填写的可以和market_price保持一致** |
| `score` | `integer` | **选填**，购买所需积分数量，没有则设置`0` |
| `market_price` | `integer` | **必须**，市场价，没有则设置`0`，市场价应该保持比会员价和price更大或者等于 |
| `sku` | `array,null` | **可选**，商品的购买选项集合，如果为array则长度为1~100 |
| `sku.*` | `array,null` | **可选**，单个规格的属性 |
| `sku.*.name` | `string` | **必填**，规格名称，通options中的每一项对应|
| `sku.*.extra` | `integer` | **选填**，规格价格，在基础价格上的增加|
| `sku.*.inventory` | `integer` | **必填**，规格库存 |
| `top_text` | `string` | **可选**，顶部文字描述，最多20000字符 |
| `bottom_text` | `string` | **可选**，底部文字描述，最多20000字符 |
| `content_images` | `array` | **可选**，中间的内容图片 |
| `content_images.*` | `string` | **必须**，图片的 storage node |
| `buy_limit_days` | `integer` | **可选**，限制购买在多少天，范围：1-65535；如果不限制，设置为0或null |
| `buy_limit_qty` | `integer` | **可选**，限制购买的数量，范围：1-65535；如果不限制，设置为0或null |
| `order_min_qty` | `integer` | **可选**，下单最少购买数量，范围：1-65535；如果不限制，设置为0或null |
| `buying_read` | `string` | **可选**，买前必读，最多20000字符 |
| `remote_areas` | `array,null` | **可选**，偏远地区，最多50个；偏远地区暂时将限制购买 |
| `remote_areas.*` | `string` | **必须**，表示地区的字符串， 如新疆、内蒙古等，最多8个字符 |
| `has_freight` | `boolean` | **可选**，是否有邮费，false包邮 【暂未使用】目前使用freigt字段，该字段可做扩展|
| `freight_qty` | `integer` | **可选**，多少件内，1-65535；当has_freight=true时填写 |
| `freight` | `integer` | **可选**，邮费价格，0-65535；当为0时免邮 |
| `incr_qty` | `integer` | **可选**，每加多少件，1-65535；当has_freight=true时填写 |
| `incr_freight` | `integer` | **可选**，邮费加多少元，0-65535；当has_freight=true时填写 |
| `topped` | `boolean` | **可选**，是否全局置顶商品，需要权限`mall:admin` |
| `category_topped` | `boolean` | **可选**，是否分类置顶商品，需要权限`mall:admin` |
| `user_topped` | `boolean` | **可选**，是否用户置顶商品 |
| `third_parties` | `object,null` | **可选**，多个三方平台对应商品配置 |
| `third_parties.*` | `object` | **必须**，单个三方平台对应商品配置，*支持 taobao, tmall, jd |
| `third_parties.*.id` | `string` | **必须**，具体三方平台中对应的商品ID，最长32个字符 |

响应：
```
Status: 201 Created
```

```json5
{
单个商品信息
}
```

### 修改商品

> 普通用户只有认证后或拥有指定用户角色才能更新自己创建的商品，有 `mall:admin` 权限的用户可以更新任何人的商品

```
PUT|PATCH /api/v2/mall/commodities/{commodity.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `user_id` | `integer` | **可选**，商品所属用户，默认为当前用户 |
| `category_id` | `integer` | **可选**，商品所属分类 |
| `photos` | `array` | **可选**，商品照片列表，必须是一个数组，1~4个元素 |
| `photos.*` | `object` | **必须**，商品照片，必须一个键值对 |
| `photos.*.image` | `string` | **必须**，商品照片/视频封面的 storage node |
| `photos.*.video` | `string` | **可选**，视频的 storage node |
| `title` | `string` | **可选**，商品标题，最大长度60（GB18030长度） |
| `brand_id` | `integer` | **可选**，商品的品牌 |
| `type` | `string` | **必须**，商品类型，可选类型 { `score`: 积分兑换商品, `member`: 会员专享商品 }，默认为score |
| `extra` | `json` | **可选**，`type`为`member`时必填，eg: {"low": 100, "middle": 50} |
| `price` | `integer` | **可选**，商品价格，单位`分` ，没有则设置`0` |
| `score` | `integer` | **可选**，购买所需积分数量，没有则设置`0`  |
| `market_price` | `integer` | **可选**，市场价，没有则设置`0` |
| `sku` | `array,null` | **可选**，商品的购买选项集合，如果为array则长度为1~100 |
| `sku.*` | `array,null` | **可选**，单个规格的属性 |
| `sku.*.name` | `string` | **必填**，规格名称，通options中的每一项对应|
| `sku.*.extra` | `integer` | **选填**，规格价格，在基础价格上的增加|
| `sku.*.inventory` | `integer` | **必填**，规格库存 |
| `top_text` | `string` | **可选**，顶部文字描述 |
| `bottom_text` | `string` | **可选**，底部文字描述 |
| `content_images` | `array` | **可选**，中间的内容图片 |
| `content_images.*` | `string` | **必须**，图片的 storage node |
| `buy_limit_days` | `integer` | **可选**，限制购买在多少天，范围：1-65535；如果不限制，设置为0或null |
| `buy_limit_qty` | `integer` | **可选**，限制购买的数量，范围：1-65535；如果不限制，设置为0或null |
| `order_min_qty` | `integer` | **可选**，下单最少购买数量，范围：1-65535；如果不限制，设置为0或null |
| `buying_read` | `string` | **可选**，买前必读，最多20000字符 |
| `remote_areas` | `array,null` | **可选**，偏远地区，最多50个；偏远地区暂时将限制购买 |
| `remote_areas.*` | `string` | **必须**，表示地区的字符串， 如新疆、内蒙古等，最多8个字符 |
| `has_freight` | `boolean` | **可选**，是否有邮费，false包邮 【暂未使用，作为扩展】|
| `freight_qty` | `integer` | **可选**，多少件内，1-65535；当has_freight=true时填写 |
| `freight` | `integer` | **可选**，邮费价格，0-65535；当为0时免邮 |
| `incr_qty` | `integer` | **可选**，每加多少件，1-65535；当has_freight=true时填写 |
| `incr_freight` | `integer` | **可选**，邮费加多少元，0-65535；当has_freight=true时填写 |
| `topped` | `boolean` | **可选**，是否全局置顶商品，需要权限`mall:admin` |
| `category_topped` | `boolean` | **可选**，是否分类置顶商品，需要权限`mall:admin` |
| `user_topped` | `boolean` | **可选**，是否用户置顶商品 |
| `deleted` | `boolean` | **可选**，软删除/恢复商品 |
| `third_parties` | `object,null` | **可选**，多个三方平台对应商品配置 |
| `third_parties.*` | `object` | **必须**，单个三方平台对应商品配置，*支持 taobao, tmall, jd |
| `third_parties.*.id` | `string` | **必须**，具体三方平台中对应的商品ID，最长32个字符 |

响应：

```
Status: 200 OK
```

```json5
{
 单个商品信息
}
```

### 删除商品

> 普通用户只有认证后或拥有指定用户角色才能删除自己创建的商品，有 `mall:admin` 权限的用户可以删除任何人的商品；如果一个商品有订单、评论、收藏则禁止删除

```
DELETE /api/v2/mall/commodities/{commodity.id}
```

响应：

```
Status: 204 No Content
```

### 统计可兑换的商品数量
```
GET /api/v2/mall/commodity/count-convertible
```

响应：

```
Status: 200 OK
```

```json5
{
  "free_count": 0,   // 可兑换的免费商品数量
  "charge_count": 0, // 可兑换的收费商品数量
}
```

### 收藏商品

> 商品 `deleted_at` 被设置之后，此商品将无法再收藏；已收藏的不受影响，但取消收藏后无法再次收藏

```
PUT|PATCH /api/v2/mall/commodities/{commodity.id}/like
```

响应：

```
Status: 204 No Content
```

### 取消收藏商品

```
DELETE /api/v2/mall/commodities/{commodity.id}/like
```

响应：

```
Status: 204 No Content
```

### 举报商品

```
POST /api/v2/mall/commodities/{commodity.id}/report
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `reason` | `string` | **可选**，举报原因 |

响应：

```
Status: 201 OK
```

```json5
{
  "message": ["操作成功"]
}
```

### 检查用户能否发布商品

```
GET /api/v2/mall/commodity/can-publish
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `user_id` | `integer` | **可选**，要查询的用户ID，不传则为当前用户 |

响应：

```
Status: 200 OK
```

```json5
{
  "can_publish": true // true表示能发布，false表示不能发布
}
```

### 分享商品

```
PUT /api/v2/mall/commodities/{commodity.id}/hit-share
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `incr` | `integer` | **可选**，要增加的分享次数，范围1-10，默认1 |

正常响应：

```
Status: 204 No Content
```

获取积分响应：

```
Status: 201 Created
```

```json5
{
  "amount": 2
}
```


## 购物车

### 购物车数量统计

```http request
GET /api/v2/mall/shopping-carts-count
```
响应
```
Status: 200 OK
```
响应体

```json5
{
  "count": 100
}
```

### 加入购物车
```http request
POST /api/v2/mall/shopping-carts
```
| 参数 | 类型 | 描述 |
|:----:|----|----|
| `commodity_id` | `array` | **必须**，商品id |
| `quantity` | `string` | **可选**，数量，默认为1 |
| `commodity_option` | `string` | **可选**，规格 |

响应
```
Status: 201 Created
```
响应体

```json5
{
  "message": "操作成功"
}
```

### 购物车列表

   旧版本适用，2022.6.20后版本请使用 [获取商品列表（按照商家分组）](###获取商品列表（按照商家分组）)

```http request
POST /api/v2/mall/shopping-carts
```

响应

```
Status: 200 OK
```
响应体

```json5
[
  {
    "id": 1,
    "user_id": 1,
    "commodity_id": 1,
    "quantity": 1,
    "commodity_option": "红色",
    "commodity": {/* 商品信息 */}
  }
]
```

### 修改购物车商品
```http request
PATCH /api/v2/mall/shopping-carts/{shoppingCartID}
```
| 参数 | 类型 | 描述 |
|:----:|----|----|
| `quantity` | `integer` | **必填**，**如果此参数 <= 0, 则删除此条购物车记录** |

响应

```
Status: 202 Accept
```
响应体

````json5
{
  "message": "操作成功"
}
````

### 删除购物车记录

```http request
DELETE /api/v2/mall/shopping-carts/{shoppingCartID}
```
响应

```
Status: 204 No Content
```

### 批量删除购物车记录

```http request
POST /api/v2/mall/shopping-carts/multiple-destroy
```

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `shopping_cart_ids` | `array` | **必填**，购物车记录ID，`{ "shopping_cart_ids": [1,2,3] }` |


响应
```
Status: 204 No Content
```

### 购物车结算

```http request
POST /api/v2/mall/multipleOrders
```

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `commodities` | `array` | **必须**，批量付款的商品信息 [{"commodity_id": 1, "quantity": 1, "commodity_option": "红色"}] |
| `pay_method` | `string` | **可选**，支付方法，余额和积分无法完成支付时必传，可选值：<br>`Alipay_AopApp` 支付宝APP支付<br>`Alipay_AopWap` 支付宝H5网页支付<br>`Alipay_AopPage` 支付宝PC网页支付<br>`WechatPay_App` 微信APP支付<br>`WechatPay_Js` 微信小程序、公众号支付 |
| `pay_balance` | `integer` | **可选**，使用钱包余额支付的金额 |
| `user_remark` | `string` | **可选**，用户对此订单的备注，最长150个字符 |
| `address_id` | `integer` | **可选**，收货地址ID，必须是当前用户收货地址 |
| `address` | `object` | **可选**，自定义的收货地址，如果提供此参数则忽略`address_id`参数 |
| `address.name` | `string` | **必须**，收货人姓名 |
| `address.phone` | `string` | **必须**，手机号码 |
| `address.province` | `string` | **可选**，所在省份 |
| `address.city` | `string` | **可选**，所在城市 |
| `address.county` | `string` | **可选**，所在区县 |
| `address.detail` | `string` | **必须**，详细地址 |
| `address.postcode` | `string` | **可选**，邮政编码 |
| `redirect_url` | `string` | **可选**，当`pay_method=Alipay_AopWap/Alipay_AopPage`时支付完成后的重定向URL，最长256个字符 |
| `openid` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前用户的openid |
| `appid` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前的appid |
| `app_type` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前的APP类型，可选 app:公众号 micro:小程序，提供了此参数且没提供appid，系统将读取配置中的appid |


## 商品订单

> 未支付的商品订单服务器将会定期清除，一般仅保留15分钟


### 订单弹幕
```http request
/api/v2/mall/commodities/{commodity}/orders-subtitles
```
>请求参数 「commodity」为商品ID
> 单次请求，最多返回20个内容

```json5
[{
     "id": 87,
     "name": "用户8fs6c3",
     "updated_at": "2019-11-20 03:38:41"
 }]
```



### 创建商品订单

```
POST /api/v2/mall/orders
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `commodity_id` | `integer` | **必须**，要购买的商品ID |
| `commodity_option` | `string` | **可选**，选择的商品规格，如果商品有规格则为必选 |
| `is_orig_price` | `boolean` | **可选**，是否原价购买 |
| `is_share_discount` | `boolean` | **可选**，是否通过分享获得的优惠价格购买 |
| `quantity` | `integer` | **必须**，购买数量，1~65535 |
| `pay_score` | `integer` | **可选**，使用积分支付的数量，范围0~commodity.score*quantity，默认最大值 |
| `pay_method` | `string` | **可选**，支付方法，余额和积分无法完成支付时必传，可选值：<br>`Alipay_AopApp` 支付宝APP支付<br>`Alipay_AopWap` 支付宝H5网页支付<br>`Alipay_AopPage` 支付宝PC网页支付<br>`WechatPay_App` 微信APP支付<br>`WechatPay_Js` 微信小程序、公众号支付 |
| `pay_balance` | `integer` | **可选**，使用钱包余额支付的金额 |
| `user_remark` | `string` | **可选**，用户对此订单的备注，最长150个字符 |
| `address_id` | `integer` | **可选**，收货地址ID，必须是当前用户收货地址 |
| `address` | `object` | **可选**，自定义的收货地址，如果提供此参数则忽略`address_id`参数 |
| `address.name` | `string` | **必须**，收货人姓名 |
| `address.phone` | `string` | **必须**，手机号码 |
| `address.province` | `string` | **可选**，所在省份 |
| `address.city` | `string` | **可选**，所在城市 |
| `address.county` | `string` | **可选**，所在区县 |
| `address.detail` | `string` | **必须**，详细地址 |
| `address.postcode` | `string` | **可选**，邮政编码 |
| `redirect_url` | `string` | **可选**，当`pay_method=Alipay_AopWap/Alipay_AopPage`时支付完成后的重定向URL，最长256个字符 |
| `openid` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前用户的openid |
| `appid` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前的appid |
| `app_type` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前的APP类型，可选 app:公众号 micro:小程序，提供了此参数且没提供appid，系统将读取配置中的appid |
| `with` | `string` | **可选**，附带关系,可选值: user,shopkeeper,expresses.company,refund.expresses.company,refund.negotiates,apply,appeal 购物车订单的子订单，非购物车下单不传递此项，|
| `noGroupBy` | `integer` | **可选**， 0：只返回有效订单（有子订单的只返回子订单，不返回主订单），1：会返回主订单和子订单 |
| `subOrders` | `integer` | **可选**， 0: 聚合订单返回的子订单多包裹了一层，1：聚合订单返回的子订单是二维数组 |


成功响应：

```
Status: 201 OK
```

```json5
{
    "user_id": 1, // 订单所有者用户ID
    "commodity_id": 1, // 购买的商品ID
    "shopkeeper_id": 2, // 店主用户ID
    "quantity": 1, // 购买的数量
    "total_score": 1, // 订单积分总额
    "shop_score": 1,  // 订单积分（商家应得部分）
    "tax_score": 0,   // 订单积分（平台抽取部分）
    "total_amount": 100, // 订单总金额
    "shop_amount": 100,  // 订单金额（商家应得部分）
    "tax_amount": 0,     // 订单金额（平台抽取部分）
    "pay_balance": 100,  // 使用余额支付的金额
    "pay_amount": 0,     // 使用第三方支付支付的金额
    "address": { // 订单收货地址
        "name": "姓名",
        "phone": "18888888888",
        "province": "四川省",
        "city": "成都市",
        "county": "高新区",
        "detail": "XXXXX号",
        "postcode": "610000"
    },
    "freight": 0, // 邮费、快递费
    "trade_no": "xxxxxx", // pay_method不为None时才有订单号
    "pay_method": "None", // 订单支付方式，如果用余额全额支付则为None，否则为传入的值
    "pay_data": "",  // pay_method不为None时才有，用于第三方支付的数据，可能是任何数据类型。
    "pay_status": 2, // 支付状态 0未支付、1已支付，但处理失败（三方平台支付的金额已充值到余额），2已支持且处理购买逻辑成功
    "paid_at": "2020-03-26T05:46:46.000000Z", // 订单支付后才有此标识
    "receipt_at": "2020-03-26T05:46:46.000000Z", // 确认收货，此字段存在则表示已经确认收货
    "updated_at": "2020-03-26T05:46:46.000000Z",
    "created_at": "2020-03-26T05:46:46.000000Z",
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
    // unsupported_area        %s地区暂不支持购买
    // order_min_qty           该商品%d件起购
    // buy_limit_qty_and_days  该商品限购%d件 || 该商品%d天内限购%d件
    // score_not_enough        可用的积分不足
    // balance_not_enough      可用的余额不足
    "error_type": "unsupported_area",
    "message": "错误消息",
}
```



### 修改订单信息

```
PATCH /api/v2/mall/orders/{order.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `user_remark` | `string` | **可选**，用户备注，仅用户可修改，最长150个字符 |
| `shop_remark` | `string` | **可选**，商家备注，仅商家可修改，最长150个字符 |
| `user_deleted` | `boolean` | **可选**，设置用户端订单删除状态，仅用户可修改 |
| `shop_deleted` | `boolean` | **可选**，设置商家端订单删除状态，仅商家可修改 |

响应：

```
Status: 200 OK
```

```json5
{ /* 订单数据 */ }
```

### 获取单个订单

```
GET /api/v2/mall/orders/{order.id}
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `with` | `string,array<string>` | **可选**，需要返回的关联数据，可选：`commodity`、`commodity.category`、`user`、`user.verification`、`shopkeeper`、`shopkeeper.verification` |

响应：

```
Status: 200 OK
```
```json5
{
    "id": 46,
    "user_id": 1, // 订单所有者用户ID
    "commodity_id": 1, // 购买的商品ID
    "shopkeeper_id": 2, // 店主用户ID
    "quantity": 1, // 购买的数量
    "total_score": 1, // 订单积分总额
    "shop_score": 1,  // 订单积分（商家应得部分）
    "tax_score": 0,   // 订单积分（平台抽取部分）
    "total_amount": 100, // 订单总金额
    "shop_amount": 100,  // 订单金额（商家应得部分）
    "tax_amount": 0,     // 订单金额（平台抽取部分）
    "pay_balance": 100,  // 使用余额支付的金额
    "pay_amount": 0,     // 使用第三方支付支付的金额
    "address": { // 订单收货地址
        "name": "姓名",
        "phone": "18888888888",
        "province": "四川省",
        "city": "成都市",
        "county": "高新区",
        "detail": "XXXXX号",
        "postcode": "610000"
    },
    "freight": 0, // 邮费、快递费
    "trade_no": "xxxxxx", // pay_method不为None时才有订单号
    "pay_method": "None", // 订单支付方式，如果用余额全额支付则为None，否则为传入的值
    "pay_status": 2, // 支付状态 0未支付、1已支付，但处理失败（三方平台支付的金额已充值到余额），2已支持且处理购买逻辑成功
    "user_remark": "用户备注",
    "shop_remark": "商家备注",
    "commodity_option": "红色",
    "comment_id": 888, // 用户评论的FeedID
    "paid_at": "2020-03-26T05:46:46.000000Z", // 订单支付后才有此标识
    "receipt_at": "2020-03-26T05:46:46.000000Z", // 确认收货，此字段存在则表示已经确认收货
    "updated_at": "2020-03-26T05:46:46.000000Z",
    "created_at": "2020-03-26T05:46:46.000000Z",
    "user_deleted_at": "2019-04-25 09:20:13", // 用户删除标识
    "shop_deleted_at": "2019-04-25 09:20:13"  // 商家删除标识
}
```

### 获取订单列表

```
GET /api/v2/mall/orders
```

请求查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `role` | `string` | **可选**，默认 `admin`，选项：<br>`admin`以管理员角色获取全部订单<br>`user`以用户角色获取自己的订单<br>`shopkeeper`·以商家角色获取订单 |
| `user_id` | `integer` | **可选**，用户ID，role=admin时可用，多个用逗号分隔或数组传递 |
| `shopkeeper_id` | `integer` | **可选**，商家ID，role=admin时可用，多个用逗号分隔或数组传递 |
| `user_trashed` | `string` | **可选**，role=user时可用，默认`without`，选项：<br>`without`不包括已删除的订单<br>`with`包括已删除的订单<br>`only`·仅已删除的订单 |
| `shop_trashed` | `string` | **可选**，role=shopkeeper时可用，默认`without`，选项：<br>`without`不包括已删除的订单<br>`with`包括已删除的订单<br>`only`·仅已删除的订单 |
| `commodity_id` | `integer` | **可选**，商品ID，多个用逗号分隔或数组传递 |
| `pay_status` | `integer` | **可选**，订单的支付状态，选项 `0,1,2`，多个用逗号分隔或数组传递 `0`未支付 `1` 支付出现异常 `2` 支付成功 ｜
| `receipted` | `integer` | **可选**，订单的收货状态，选项 `'',0,1` `''`表示所有，`0` 未确认收货，`1` 已确认收货 ｜
| `commented` | `integer` | **可选**，订单的评论状态，选项 `0,1` |
| `start_time` | `string` | **可选**，开始时间，支持大部分时间格式，需包含时区部分 |
| `end_time` | `string` | **可选**，结束时间，支持大部分时间格式，需包含时区部分 |
| `time_key` | `string` | **可选**，时间字段名， 默认 `created_at`，还支持 `updated_at,paid_at` |
| `after` | `integer` | **可选**，本地最后一条数据的ID |
| `limit` | `integer` | **可选**，获取条数，默认15 |
| `page` | `integer` | **可选**，第几页，如果有此参数，则返回分页模式的数据 |

响应：

```
Status: 200 OK
```
```json5
[
  {/*  单个订单数据 */}
]
```

### 确认收货

```http request
POST /api/v2/mall/orders/{order}/confirm
```

错误响应包含：`422` 表示不能被确认收货，和 `403` 表示没有权限操作确认收货「情况为订单和当前操作人不是同一用户」
响应:

```
Status: 201 Created
```

响应体：

```json5
{
  "message": "操作成功"
}
```


### 发布订单评论

> 订单评论调用发布动态的接口，其中 `repostable_type` 设置为 `mall_commodities`，`repostable_id` 设置要评论的商品ID。
> 默认情况下，会自动选择指定商品的最早未评论的订单进行评论，如果要评论指定订单，请传入 `mall_order_id` 参数指定要评论的订单ID。

> 服务端返回动态数据时，会附加 `repostable`(关联数据) `repostable_type`(关联数据的类型) `repostable_id`(关联数据的ID)三个字段。

### 获取订单评论/商品动态

获取指定商品动态
```
GET /api/v2/mall/commodities/{commodity.id}/feeds
```
获取全部商品动态
```
GET /api/v2/mall/commodity/feeds
```

请求查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `type` | `string` | **可选**，要获取的动态类型，默认全部，选项：<br>`image`仅获取带图片的动态<br>`video`仅获取带视频的动态<br>`image_or_video` 获取带图片或视频的动态 |
| `after` | `integer` | **可选**，本地最后一条数据的ID |
| `limit` | `integer` | **可选**，获取条数，默认15 |

响应：

```
Status: 200 OK
```

```json5
[
  {/*  单个动态数据 */}
]
```

### 订单通知及消息说明

> 当一个订单支付成功后，系统将推送一条通知到商家端，通知类型`notification:mall-selling-commodity`。对于消息数处理都调用`user/notification*`接口。

> 未查看(处理)订单消息数，接口`GET /api/v2/user/notification-statistics` 返回结果中`badges`和`lastCreatedAts`增加了字段`mall_selling_commodity`，分别为新订单数量统计和最新订单的创建时间。

> 清空未查看(处理)订单消息数，接口 `PUT /api/v2/user/notifications?type=mall_selling_commodity`

> 配置订单消息通知，接口`PATCH /api/v2/user/notification-settings` 字段名为 `mall_selling_commodity`

> 获取订单消息通知的配置，接口`GET /api/v2/user/notification-settings` 字段名为 `mall_selling_commodity`

## 订单发货

### 获取单个快递信息

> 每次调用将自动获取快递的物流信息，物流信息每间隔5分钟更新一次

```
GET /api/v2/mall/expresses/{express.id}
```

响应：

```
Status: 200 OK
```

```json5
{
    "id": 1,
    "order_id": 1,
    "company_id": 1,
    "company": {/* 快递公司信息 */},
    "number": "快递单号",
    "remark": "备注",
    "queried_at": "2019-08-14 17:38:25", // 上次查询的时间，如果快递100未开启且之前也没用查询过，则没有此字段
    // 当有快递信息时，才会有以下三个字段 status,is_check,infos
    "status": 0, // 快递100返回的state 0在途，1揽收，2疑难，3签收，4退签，5派件，6退回，7转投 等7个状态
    "is_check": 0, // 快递100返回的是否签收标记
    "infos": [ // 物流信息列表
      {
        "time": "2019-08-14T17:38:25+08:00", // Iso8601标准时间
        "context": "用于显示给用户的的物流信息",
        "status": 0 // 当前信息的物流状态（和上级status一致），也有可能没有此字段
      }
    ],
    "updated_at": "2019-08-14 17:38:25",
    "created_at": "2019-08-14 17:38:25"
}
```

### 订单快递列表

> 当`after`未设置且只有一个快递时，将自动获取快递的物流信息，物流信息每间隔5分钟更新一次

```
GET /api/v2/mall/orders/{order.id}/expresses
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `after` | `integer` | **可选**，本地最后一条数据的ID |
| `limit` | `integer` | **可选**，要获取的数量，默认100 |

响应：

```
Status: 200 OK
```

```json5
[
  {/*  单个快递数据 */}
]
```

### 添加订单快递

> 一个订单最多只能添加100个快递信息

```
POST /api/v2/mall/expresses
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `order_id` | `integer` | **必须**，订单ID |
| `company_id` | `integer` | **必须**，快递公司ID |
| `number` | `string` | **可选**，快递单号，和numbers二选一，快递单号，必须是字母或数字 |
| `numbers` | `array` | **可选**，多个快递单号，和number二选一，一个订单最多100个 |
| `numbers.*` | `string` | **可选**，单个快递单号，必须是字母或数字 |
| `remark` | `string` | **可选**，备注 |

添加单个响应：

```
Status: 201 Create
```
```json5
{ /* 快递信息 */ }
```

批量添加响应：

```
Status: 201 Create
```
```json5
{
  "members_count": 5 // 本次添加的数量
}
```

### 修改订单快递
```
PATCH /api/v2/mall/expresses/{express.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `company_id` | `integer` | **可选**，快递公司ID |
| `number` | `string` | **可选**，快递单号 |
| `remark` | `string` | **可选**，备注 |

响应：

```
Status: 200 OK
```
```json5
{ /* 快递信息 */ }
```

### 删除单个快递
```
DELETE /api/v2/mall/expresses/{express.id}
```

响应：

```
Status: 204 No Content
```

## 分享优惠购买

> 暂无描述~

### 获取登录用户对一个商品可用的分享次数

```
GET /api/v2/mall/discount-shares/{commodity.id}
```

```
Status: 200 OK
```

```json5
{
    "user_id": 1,       // 分享者用户ID
    "commodity_id": 1,  // 分享的商品ID
    "shares_count": 0,  // 当前可用的分次数    
}
```

### 登录用户对一个商品增加分享次数

> 调用此接口 `shares_count` 将自动 +1

```
PUT /api/v2/mall/discount-shares/{commodity.id}
```

```
Status: 200 OK
```

```json5
{
    "user_id": 1,       // 分享者用户ID
    "commodity_id": 1,  // 分享的商品ID
    "shares_count": 1,  // 当前可用的分次数    
}
```

### 使用优惠价格购买

> 接口 [创建订单](#创建商品订单) `is_share_discount` 值设置为 `true`