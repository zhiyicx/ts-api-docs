---
sidebarDepth: 3
title: 品牌
---

# 商城 - 品牌API文档

## 品牌相关

### 品牌详情数据结构
```json5
{
    "id": 7,
    "name": "777111",
    "desc": "修改测试",
    "avatar": {
        "url": "https://new-thinksns.oss-cn-hangzhou.aliyuncs.com/2020/01/09/JzxuXyzW6uNrzn5ank6BdycGPc3gStKiewZKPi6HlQEYq3YmFV1nedLQXF3OQldV.jpeg",
        "vendor": "aliyun-oss",
        "mime": "image/jpeg",
        "size": 1041949,
        "dimension": {
            "width": 720,
            "height": 720
        }
    },
    "sub_avatar": {
        "url": "https://new-thinksns.oss-cn-hangzhou.aliyuncs.com/2020/01/09/JzxuXyzW6uNrzn5ank6BdycGPc3gStKiewZKPi6HlQEYq3YmFV1nedLQXF3OQldV.jpeg",
        "vendor": "aliyun-oss",
        "mime": "image/jpeg",
        "size": 1041949,
        "dimension": {
            "width": 720,
            "height": 720
        }
    }
}
```

### 获取品牌列表

```
GET /api/v2/mall-brands
```

请求查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `keyword` | `string` | **可选**，查询关键字 |
| `recommend` | `boolean` | **可选**，是否推荐 |
| `category_id` | `integer` | **可选**，备用，暂时无效 |
| `user_id` | `integer` | **可选**，指定用户创建的品牌 |
| `audit` | `string` | **可选**，是否通过审核 `''`,`0`,`1` |
| `recommend` | `sring` | **可选**，是否推荐 `''`,`0`,`1` |
| `with` | `string` | **可选**，需要附带的关系 可选值 `creator` |
| `trashed` | `sring` | **可选**，查询的结果集归类， `''` 全部「表示已过滤被下架的品牌」,`only`「表示查询被下架的品牌」,`with`「表示查询全部品牌」 |
| `order` | `string` | **可选**，排序方式，值形式: `id:desc,sort:desc`, <br /> 可选值：`id:desc,id:asc,sort:desc,sort:asc` |

响应状态
```
Status: 200 OK
```
响应体
```json5
[
  {单个品牌},
  {单个品牌},
  ...
]
```

### 品牌详情

```http request
GET /api/v2/mall-brands/{mall_brand}
```
响应状态
```
Status: 200 OK
```
响应体
```json5
{
    "id": 7,
    "name": "777111",
    "desc": "修改测试",
    "avatar": {
        "url": "https://new-thinksns.oss-cn-hangzhou.aliyuncs.com/2020/01/09/JzxuXyzW6uNrzn5ank6BdycGPc3gStKiewZKPi6HlQEYq3YmFV1nedLQXF3OQldV.jpeg",
        "vendor": "aliyun-oss",
        "mime": "image/jpeg",
        "size": 1041949,
        "dimension": {
            "width": 720,
            "height": 720
        }
    },
    "sub_avatar": {
        "url": "https://new-thinksns.oss-cn-hangzhou.aliyuncs.com/2020/01/09/JzxuXyzW6uNrzn5ank6BdycGPc3gStKiewZKPi6HlQEYq3YmFV1nedLQXF3OQldV.jpeg",
        "vendor": "aliyun-oss",
        "mime": "image/jpeg",
        "size": 1041949,
        "dimension": {
            "width": 720,
            "height": 720
        }
    },
    "creator": { // 创建者
       "id": 1,
       "name": "root",
       "bio": null,
       "sex": 0,
       "location": null,
       "invite_code": "10ABC0",
       "avatar": null,
       "feed_topics_count": 0,
       "created_at": "2019-11-20T06:52:22Z",
       "updated_at": "2019-11-20T06:52:22Z",
       "vip": null
    }
}
```

### 创建品牌

```http request
POST /api/v2/mall-brands
```
> 需要有可以创建品牌权限的用户，权限节点为：`create:brand`

请求参数

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **必填**，查询关键字 |
| `recommend` | `integer` | **可选**，是否推荐，如果有管理品牌权限，可设置是否推荐 |
| `category_id` | `integer` | **可选**，备用，暂时无效 |
| `audit` | `integer` | **可选**，是否通过审核，如果是有管理品牌权限，可以设置此项 |
| `sort` | `string` | **可选**， 如果有管理品牌权限，可以设置此项，默认为0 |
| `avatar` | `string` | **必填**，品牌大图标 |
| `sub_avatar` | `string` | **选填**，品牌小图标 |

### 删除品牌
```http request
PATCH /api/v2/mall-brands/{mall_brand}
```
| 参数 | 类型 | 描述 |
|:----:|----|----|
| `deleted_at` | `integer` | **选填**，是否删除`1`为删除,`0`为恢复 |
