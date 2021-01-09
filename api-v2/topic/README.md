---
sidebarDepth: 3
title: 话题
---



# 话题

在最新接口中和热门接口中支持设置 `theme` 参数指定话题筛选数据列表。

发布带有话题的动态在话题的**输入**里面增加 `theme` 字段指定要发布到话题的 ID。返回的动态数据中 `theme` 存放话题数据。


## 话题配置
```
GET /api/v2/theme-config
```
响应：

```
Status: 200 HTTP:OK
```
```json
{
  "config": {
    "create_permission": "all",
    "permission": "theme:creator"
  },
  "create_permissions": [
    {"label": "全部", "value": "all", "intro": "任何用户都可创建圈子"},
    {"label": "仅认证用户", "value": "verification", "intro": "只有通过了认证的用户才能创建圈子"},
    {"label": "特定权限用户", "value": "specialUser", "intro": "仅拥有创建圈子权限的用户可以发言"}
  ]
}
```
返回体中config属性说明

| 名称 | 类型 | 描述 | 同级选项 |
|----|----|----|----|
| `create_permission` | `string` | 创建圈子的权限，默认 `all` | `verification`: 认证用户, `all`: 所有用户,`specialUser`: 特殊权限用户, 此项的权限由 `permission`字段的值决定 |
| `permission` | `string` | 创建圈子的特殊用户权限，默认 `theme:creator` | `null` |

> 当`create_permission`的值为 `specialUser`时，需要用户拥有`theme:creator`权限才可创建话题


### 获取话题列表

```
GET /api/v2/feed-themes
```

查询参数：

| 参数 | 描述 |
|:----:|----|
| `after` | **可选**，上次返回数据列表最小的 ID |
| `exclude_ids` | **可选，Array**，需要排除的话题 ID |
| `exclude_names` | **可选，Array**，需要排除的话题名称 |
| `keyword` | **可选，string**，对话题名称进行关键字搜索 |

E.g:

```
/api/v2/feed-themes?exclude_ids[]=1&exclude_ids[]=2&keyword=key // 表示排除 ID 1 和 ID 2，并搜索名称中包含key的话题
```

响应：

```
Status: 200 OK
```
```json5
[
    {
        "id": 1,
        "title": "Theme One", // 话题标题
        "counts": {
            "participator": 1 // 参与人数
        },
        "last_feed": { // 最新一条动态数据
            "id": 5,
            "user_id": 1,
            "user": {
                "id": 1,
                "name": "root",
                "email": null,
                "phone": null,
                "bio": null,
                "sex": 0,
                "location": null,
                "avatar": null,
                "feed_topics_count": 6,
                "extra": {
                    "user_id": 1,
                    "likes_count": 0,
                    "comments_count": 17,
                    "followers_count": 0,
                    "followings_count": 0,
                    "updated_at": "2019-02-13 04:48:47",
                    "feeds_count": 5,
                    "checkin_count": 0,
                    "last_checkin_count": 0,
                    "be_reward_count": 0
                },
                "verified": null,
                "has_follower": false,
                "has_following": false,
                "created_at": "2018-10-12T01:45:02Z"
            },
            "feed_content": "带话题的动态1",
            "feed_from": 5,
            "like_count": 0,
            "feed_view_count": 0,
            "feed_comment_count": 0,
            "shares_count": 0,
            "hot": 0,
            "feed_mark": 100,
            "created_at": "2019-02-13T04:48:47Z",
            "has_liked": false
        }
    }
]
```

### 获取话题详情

> 这个基本用不到，以为获取指定话题列表动态的时候每条动态都会带有当前话题最新数据，建议在列表为空的情况下使用！

```
GET /api/v2/feed-themes/{theme}
```

响应：

```
Status: 200 OK
```
```json5
{
    "id": 1,
    "title": "Theme One",
    "description": "hahaha", // 如果话题没有描述，则不存在本字段
    "counts": {
        "participator": 1 // 参与人数
    }
}
```

### 创建动态话题

> 仅拥有 `[feed] Manage Theme` 权限可操作

```
POST /api/v2/feed-themes
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `title` | `String` | **必须**，话题标题 |
| `description` | `String` | **可选**，话题描述 |

响应：

```
Status: 201 Created
```
```json5
{
    // 参考话题详情
}
```

### 更新动态话题

> 仅拥有 `[feed] Manage Theme` 权限可操作

```
PUT|PATCH /api/v2/feed-themes/{theme}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `title` | `String` | **可选**，话题标题 |
| `description` | `String` | **可选**，话题描述 |

响应：

```
Status: 204 No Content
```

### 删除动态话题

> 仅拥有 `[feed] Manage Theme` 权限可操作

```
DELETE /api/v2/feed-themes/{theme}
```

响应：

```
Status: 204 No Content
```

### 话题下热门动态

```
GET /api/v2/feed-themes/{theme}/feeds
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `page` | `integer` | **可选**，页码，默认为 1 |
| `only_video` | `number` | **可选**，固定值 `1`，存在这个查询条件仅返回视频动态。 |

响应：

Status: 200 OK

```json5
{
    "data": [
        {
            /// 参考动态结构！
        }
    ],
    "links": {
        "first": "http://wm.local.medz.cn/api/v2/feed-themes/2/feeds?page=1",
        "last": "http://wm.local.medz.cn/api/v2/feed-themes/2/feeds?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": null,
        "last_page": 1,
        "path": "http://wm.local.medz.cn/api/v2/feed-themes/2/feeds",
        "per_page": 12,
        "to": null,
        "total": 0
    }
}
```
