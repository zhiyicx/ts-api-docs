---
sidebarDepth: 3
---

# 打赏APIs文档

## 我发出的打赏

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
        "created_at": "2018-10-15 08:51:20",
        "updated_at": "2018-10-15 08:51:20"
    },
]
```

## 可打赏的礼物

### 获取可用于打赏的礼物列表

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
]
```

### 获取单个礼物信息

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

### 创建可打赏的礼物

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

### 更新礼物信息

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

### 删除礼物信息

> 只有拥有 `reward-gift:admin` 权限的用户才能删除

```
DELETE /api/v2/reward-gifts/{rewardGifts.id}
```

响应：

```
Status: 204 No Content
```
