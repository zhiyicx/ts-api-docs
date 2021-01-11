---
sidebarDepth: 3
title: 礼物/打赏
---


## 礼物

### 获取礼物列表

```
GET /api/v2/reward-gifts
```

响应：

```
Status: 200 OK
```
```json5
[
    {
        "id": 1,
        "name": "礼物名称", // 礼物名字
        "sort": 0,  // 排序越大越靠前
        "price": 3, // 礼物价格 
        "icon": {   // 礼物图标
           "url": "http://domo.local.com/storage/public:MjAxOC8xMi8xNS9nd3hwb0V0eGtoMVpFTFlqUlAwRENYZUwyTnd0SzQ1eWdWQ24xN1h0ckI0WFhwdGU3SlFibmJXaEUyTklkUzk1LmpwZWc=",
           "vendor": "local",
           "mime": "image/jpeg",
           "size": 61587,
           "dimension": {
               "width": 540,
               "height": 960
           },
           "node": "public:2018/12/15/gwxpoEtxkh1ZELYjRP0DCXeL2NwtK45ygVCn17XtrB4XXpte7JQbnbWhE2NIdS95.jpeg"
        },
        "effect_icon": {  //  打赏成功后的带效果的礼物图标
           "url": "http://domo.local.com/storage/public:MjAxOC8xMi8xNS9nd3hwb0V0eGtoMVpFTFlqUlAwRENYZUwyTnd0SzQ1eWdWQ24xN1h0ckI0WFhwdGU3SlFibmJXaEUyTklkUzk1LmpwZWc=",
           "vendor": "local",
           "mime": "image/jpeg",
           "size": 61587,
           "dimension": {
               "width": 540,
               "height": 960
           },
           "node": "public:2018/12/15/gwxpoEtxkh1ZELYjRP0DCXeL2NwtK45ygVCn17XtrB4XXpte7JQbnbWhE2NIdS95.jpeg"
        }, // 如果没有设置则没有此字段
        "created_at": "2019-06-27 09:25:48",
        "updated_at": "2019-06-27 09:51:32",
    }
]
```

### 获取单个礼物

```
GET /api/v2/reward-gifts/{rewardGifts.id}
```

响应：

```
Status: 200 OK
```

```json5
{
    "id": 1,
    "name": "礼物名称",
    "sort": 0,
    "price": 3,
    "icon": {
       "url": "http://domo.local.com/storage/public:MjAxOC8xMi8xNS9nd3hwb0V0eGtoMVpFTFlqUlAwRENYZUwyTnd0SzQ1eWdWQ24xN1h0ckI0WFhwdGU3SlFibmJXaEUyTklkUzk1LmpwZWc=",
       "vendor": "local",
       "mime": "image/jpeg",
       "size": 61587,
       "dimension": {
           "width": 540,
           "height": 960
       },
       "node": "public:2018/12/15/gwxpoEtxkh1ZELYjRP0DCXeL2NwtK45ygVCn17XtrB4XXpte7JQbnbWhE2NIdS95.jpeg"
    },
    "effect_icon": {
       "url": "http://domo.local.com/storage/public:MjAxOC8xMi8xNS9nd3hwb0V0eGtoMVpFTFlqUlAwRENYZUwyTnd0SzQ1eWdWQ24xN1h0ckI0WFhwdGU3SlFibmJXaEUyTklkUzk1LmpwZWc=",
       "vendor": "local",
       "mime": "image/jpeg",
       "size": 61587,
       "dimension": {
           "width": 540,
           "height": 960
       },
       "node": "public:2018/12/15/gwxpoEtxkh1ZELYjRP0DCXeL2NwtK45ygVCn17XtrB4XXpte7JQbnbWhE2NIdS95.jpeg"
    }, // 如果没有设置则没有此字段
    "created_at": "2019-06-27 09:25:48",
    "updated_at": "2019-06-27 09:51:32",
}
```

### 添加礼物

> 只有拥有 `reward-gift:admin` 权限的用户才能创建

```
POST /api/v2/reward-gifts
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **必须**，礼物名称，不能重复，最大长度36（GB18030长度） |
| `price` | `integer` | **必须**，礼物价格，以积分为单位 |
| `icon` | `string` | **必须**，礼物图标，输入node值 |
| `effect_icon` | `string` | **可选**，礼物特效图标，输入node值 |
| `sort` | `integer` | **可选**，排序值，越大越靠前 |

响应：

```
Status: 201 Created
```
```json5
{
    /* 单个礼物信息 */
}
```

### 更新礼物

> 只有拥有 `reward-gift:admin` 权限的用户才能更改

```
PUT|PATCH /api/v2/reward-gifts/{rewardGifts.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **可选**，礼物名称，不能重复，最大长度36（GB18030长度） |
| `price` | `integer` | **可选**，礼物价格，以积分为单位 |
| `icon` | `string` | **可选**，礼物图标，输入node值 |
| `effect_icon` | `string` | **可选**，礼物特效图标，输入node值 |
| `sort` | `integer` | **可选**，排序值，越大越靠前 |

响应：

```
Status: 200 OK
```
```json5
{
    /* 单个礼物信息 */
}
```

### 删除礼物

> 只有拥有 `reward-gift:admin` 权限的用户才能删除

```
DELETE /api/v2/reward-gifts/{rewardGifts.id}
```

响应：

```
Status: 204 No Content
```


## 打赏

### 打赏圈子

```
POST /api/v2/feed/topics/{circleId}/rewards
```

请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|----|
| `gift_id` | `number` | 礼物id 可选，和name二选一，礼物ID。 |
| `name` | `String` | 可选，和gift_id二选一，礼物名称。 |
| `price` | `number ` |  可选，有name时必须提供，正整数。 |
| `numbers` | `number ` |  必须，礼物数量，正整数。 |


响应：

```
Status: 200 OK
```

```json
{
    "message": "打赏成功",
    "currency_sum" : 999, // 当前用户剩余积分数量
   
}

```



### 打赏用户

> 接口暂未在体验版中使用

```
POST /api/v2/user/{userId}/new-rewards
```

请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|----|
| `amount` | `number` | 打赏金额真实货币分为单位 |
| `password` | `String` | 根据启动信息决定是否传递，用户密码，支付需要用户输入密码进行付费支付。 |

响应：

```
Status: 200 OK
```

```json
{
    "message": [
        "打赏成功"
    ]
}

```


### 打赏动态

> 接口暂未在体验版中使用

```
POST /api/v2/feeds/{feedId}/rewards
```

请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|----|
| `gift_id` | `number` | 礼物id 可选，和name二选一，礼物ID。 |
| `name` | `String` | 可选，和gift_id二选一，礼物名称。 |
| `price` | `number ` |  可选，有name时必须提供，正整数。 |
| `numbers` | `number ` |  必须，礼物数量，正整数。 |




响应：

```
Status: 200 OK
```

```json
{
    "message": [
        "打赏成功"
    ]
}

```

### 圈子的打赏日志

```
GET /api/v2/feed/topics/{circleId}/rewards-logs
```

请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|----|
| `limit` | `number` | 请求查询的数据条数，做少 1，最大 100。 |
| `id` | `number` | 之前返回结果的最小 id 值，用于获取该值之后的数据。 |

响应：

```
Status: 200 OK
```

```json5
[
    {
        "id": 2,
        "user_id": 1, // 打赏圈子的用户ID
        "target_user_id": 1, // 接收消息用户
        "target_id": 2, // 类型资源ID
        "target_type": "feeds", // 类型资源标识，feeds 动态，topics 圈子
        "name": "猫薄荷", // 礼物名称
        "price": 1, // 礼物单价
        "numbers": 20, // 打赏的礼物数量
        "total": 20, //  打赏的总积分数
        "created_at": "2018-10-15 08:51:20",
        "updated_at": "2018-10-15 08:51:20"
    },
]
```

### 圈子打赏排行榜

```
GET /api/v2/feed/topics/{circleId}/reward-rank
```

请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|----|
| `limit` | `number` | 请求查询的数据条数，做少 1，最大 100。 |
| `total` | `number` | 可选，之前返回结果的最小 total 值，用于获取该值之后的数据。 |
| `offset` | `number` | 可选， 分页偏移量。 |

响应：

```
Status: 200 OK
```

```json5
[
    {
        "id": 2,
        "user_id": 1, // 打赏圈子的用户ID
        "target_user_id": 1, // 接收消息用户
        "target_id": 2, // 类型资源ID
        "target_type": "feeds", // 类型资源标识，feeds 动态，topics 圈子
        "name": "猫薄荷", // 礼物名称
        "price": 1, // 礼物单价
        "numbers": 20, // 打赏的礼物数量
        "total": 20, //  打赏的总积分数
        "created_at": "2018-10-15 08:51:20",
        "updated_at": "2018-10-15 08:51:20"
    },
]
```

### 我发出的打赏日志

```
GET /api/v2/user/reward-target-me-logs
```

请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|----|
| `limit` | `number` | 请求查询的数据条数，做少 1，最大 100。 |
| `after` | `number` | 之前返回结果的最小 id 值，用于获取该值之后的数据。 |

响应：

```
Status: 200 OK
```

```json5
[
    {
        "id": 2,
        "user_id": 1, // 打赏圈子的用户ID
        "target_user_id": 1, // 接收消息用户
        "target_id": 2, // 类型资源ID
        "target_type": "feeds", // 类型资源标识，feeds 动态，topics 圈子
        "name": "猫薄荷", // 礼物名称
        "price": 1, // 礼物单价
        "numbers": 20, // 打赏的礼物数量
        "total": 20, //  打赏的总积分数
        "created_at": "2018-10-15 08:51:20",
        "updated_at": "2018-10-15 08:51:20"
    },
]
```
