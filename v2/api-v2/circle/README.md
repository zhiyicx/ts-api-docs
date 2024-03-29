---
title: 圈子
---


# 圈子

## 新数据返回结构（圈子）

> 下面是完整结构，有些非必要字段实际情况为空则不会返回

```json5
{
    "id": 2,      // 圈子 ID
    "name": "三月", // 圈子名称
    "logo": {   // logo
        "url": "http://127.0.0.1:8000/storage/public:MjAxOC8xMC8xMi9hdDVFOGdiak1ZRk9JdEw5cmJUaDRCRXVLQXdGajg1R3FieGpCNWRlWnJNaEU5OGdLNlNUYnRCamVJQ3Zoa0h1LmpwZw==",
        "vendor": "local",
        "mime": "image/jpeg",
        "size": 802930,
        "dimension": {
            "width": 2800,
            "height": 1867
        }
    },
    "bg": {   // 背景
        "url": "http://127.0.0.1:8000/storage/public:MjAxOC8xMC8xMi9hdDVFOGdiak1ZRk9JdEw5cmJUaDRCRXVLQXdGajg1R3FieGpCNWRlWnJNaEU5OGdLNlNUYnRCamVJQ3Zoa0h1LmpwZw==",
        "vendor": "local",
        "mime": "image/jpeg",
        "size": 802930,
        "dimension": {
            "width": 2800,
            "height": 1867
        }
    },
    "category": {
        "id": 2,
        "name": "999",
        "sort": 999
    },
    “status”: “passed”,  // 圈子的审核状态 已通过passed,审核中waiting,未通过failed
    "desc": "成都最胆小玳瑁", // 圈子描述
    "creator_user_id": 1, // 创建者 ID
    "feeds_count": 2, // 下面的动态条数统计
    "reward_amount_count": 0, // 该圈子被打赏统计
    "all_feeds_likes_count":0,  // 圈子下动态点赞数量
    "followers_count": 1, // 已加入圈子的用户数统计
    "has_followed": true, // 当前登录的用户是否加入了此圈子
    "expense": 0, // 收费多少 正整数,加圈费用，当visible为visible时，传递值无效
    "join_mode": "need-audit", // 是否需要审核 [open: 开放, need-audit: 需要审核], 加圈方式，当visible参数为visible时，必选
    "visible": "hidden", // 是否私有圈子 必选,圈子可见性, visible: 公开可见, hidden: 非公开可见
    "divide": 0, // 可选,正整数,邀请加圈的分成,暂时无用,当visible为visible时,传递值无效，值必须 <= expense
    "invited_audit": 1, // 被邀请是否需要审核 可选， [true, false, 0, 1], 被邀请用户是否需要审核，当join_mode为need-audit时，必选 ｜
    "publish_permission":    // 圈子的发布权限 publish_permission string 圈子发言权限，默认 byManager byManager: 由圈主设置, creatorOnly: 仅圈主,memberOnly: 仅成员,allUser: 所有用户,specialUser: 特殊权限用户,
    "apply_for_status": "none", // 申请记录 {`none`, 'passed', `fail`, `waiting` }
    "logs_count": 1, // 需要处理的加圈申请
    "first_log": { //最新申请加圈的人  第一条需要处理加圈申请，按申请时间倒序排列
          "id": 2,
          "name": "wayne",
          "bio": null,
          "sex": 0,
          "location": null,
          "invite_code": "10ABC1",
          "avatar": null,
          "feed_topics_count": 0,
          "has_follower": false,
          "has_following": false,
          "created_at": "2019-12-14T09:43:54Z",
          "updated_at": "2019-12-14T09:43:54Z",
          "vip": null
    }
}
```
> `apply_for_status`说明：`none`表示没有记录， 其余内容则表示最新一条记录的状态，当`has_followed`字段为`true`时，请忽略此字段



## 圈子配置
```
GET /api/v2/topic-config
```
响应：

```
Status: 200 HTTP:OK
```
```json
{
  "config": {
    "switch": true,
    "publish_permission": "byManager",
    "create_permission": "all",
    "join_permission": "byManager",
    "permission": "topic:creator"
  },
  "publish_permissions" : [
    {"label": "由圈主设置", "value": "byManager", "intro": "由圈子创建者设置发言权限"},
    {"label": "仅圈主", "value": "creatorOnly", "intro": "只有圈子创建者能发言"},
    {"label": "仅圈子成员", "value": "memberOnly", "intro": "只有加入了圈子才能发言"},
    {"label": "所有用户", "value": "allUser", "intro": "任何用户都可以在圈子中发言"},
    { "label": "特定权限用户", "value": "specialUser", "intro": "仅拥有发言权限的用户可以发言" }
  ],
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
| `switch` | `boolean` | 创建圈子是否需要审核，默认 `true`| true, false |
| `publish_permission` | `string` | 圈子发言权限，默认 `byManager` | `byManager`: 由圈主设置, `creatorOnly`: 仅圈主, `memberOnly`: 仅成员, `allUser`: 所有用户, `specialUser`: 特殊用户, 由管理员指定那些用户能发言 |
| `create_permission` | `string` | 创建圈子的权限，默认 `all` | `verification`: 认证用户, `all`: 所有用户, `specialUser`: 特殊权限用户, 此项的权限由 `permission`字段的值决定 |
| `join_permission` | `string` | 加入圈子的权限，默认 `byManager` | `byManager`: 由圈主设置, `directJoin`: 直接加入, `afterAudit`: 审核后加入 |
| `permission` | `string` | 创建圈子的特殊用户权限，默认 `topic:creator` | `null` |

> 参数说明：当`publish_permission`或`join_permission`的值为 `byManager`，前端创建圈子时，需要显示除 `byManager`的其他同级选项，由用户设置圈子的此两项权限；
如果此两项的值为非`byManager`时，说明管理后台已经设置了新建圈子的属性，无需在前端创建圈子时再显示此2项内容的设置




## 检测用户是否可以创建私密圈子

```http request
GET /api/v2/feed/topics/check-can-create
```
```
Status: 200 OK
```
```json5
{
  "visible": false, // 可否创建公开圈子
  "hidden": false // 可否创建私密圈子
}
```

## 创建圈子

```
POST /api/v2/feed/topics
```

请求内容参数：

| 名称 | 类型 | 描述 |
|----|----|----|
| `name` | `string` | **必须**，圈子名字，最长 `100` 个字。 |
| `desc` | `string` | **可选**，圈子描述，最长 `500` 个字。 |
| `topic_category_id `| `integer` | **可选**，圈子分类 |
| `logo` | `FILE_STORAGE_NODE<string>` | **可选**，圈子图标。 |
| `bg` | `FILE_STORAGE_NODE<string>` | **可选**，圈子主页封面 |
| `join_permission` | `string` | **可选**，加入权限，选项：directJoin,afterAudit |
| `publish_permission` | `string` | **可选**，发布权限，选项：allUser,creatorOnly,memberOnly,specialUser |
| `visible` | `string` | **必选**,圈子可见性, visible: 公开可见, hidden: 非公开可见 |
| `join_mode` | `string` | **可选**, [open: 开放, need-audit: 需要审核], 加圈方式，当`visible`参数为`visible`时，必选 |
| `invited_audit` | `boolean` | **可选**， [true, false, 0, 1], 被邀请用户是否需要审核，当`join_mode`为`need-audit`时，必选 ｜
| `expense` | `integer` | **可选**, 正整数,加圈费用，当`visible`为`visible`时，传递值无效 |
| `divide` | `integer` | **可选**, 正整数,邀请加圈的分成,暂时无用,当`visible`为`visible`时,传递值无效，值必须 <= expense |

> - 当`visible`为`hidden`时，`expense`的值如果大于`0`则表示`私密收费`圈子
> - 当`visible`为`visible`时，传递`expense`传递任何值都将被设置为0，因为公开圈子不收费

响应：

```
Status: 201 Created
```
```json5
{
    "id": 1 // 圈子 ID
}
```

## 更新圈子

```
PATCH /feed/topics/:topicID
```

请求内容参数：

| 名称 | 类型 | 描述 |
|----|----|----|
| `name` | `string` | **可选**，圈子名字，最长 `100` 个字。 |
| `desc` | `string` | **可选**，圈子描述，最长 `500` 个字。 |
| `topic_category_id `| `integer` | **可选**，圈子分类 |
| `logo` | `FILE_STORAGE_NODE<string>` | **可选**，圈子图标。 |
| `bg` | `FILE_STORAGE_NODE<string>` | **可选**，圈子主页封面 |
| `join_permission` | `string` | **可选**，加入权限，选项：directJoin,afterAudit |
| `publish_permission` | `string` | **可选**，发布权限，选项：allUser,creatorOnly,memberOnly,specialUser |

响应：

```
Status: 204 No Content
```

## 通过加圈申请
```http request
patch /user/feed-topics/{topicId}/logs/{log}
```

请求参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| `topicId` | `integer` | **必选**, 圈子id |
| `log` | `integer` | **必选**, 申请记录ID |

响应1, 记录已被处理:
```
Status: 422
```
```json5
{
  "message": "申请已被处理"
}
```

响应2，通过成功
```
Status: 204
```

响应3，申请者积分不足
```
Status: 403
```
```json5
{
  "message": "用户积分不足，不能通过审核"
}
```


## 拒绝加圈申请
```http request
delete /user/feed-topics/{topicId}/logs/{log}
```

请求参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| `topicId` | `integer` | **必选**, 圈子id |
| `log` | `integer` | **必选**, 申请记录ID |

响应1, 记录已被处理:
```
Status: 422
```
```json5
{
  "message": "申请已被处理"
}
```

响应2，拒绝成功
```
Status: 204
```


## 加入圈子

```http request
put /user/feed-topics/{topicId}
```

请求参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| `topicId` | `integer` | **必选**, 圈子id |

响应1，已有存在的申请记录：
```
Status: 202 Accept
```
```json5
{
  "message": "请等待审核"
}
```

响应2，圈子不存在或者已被删除：
```
Status: 404
```
```json5
{
  "message": "圈子不存在"
}
```

响应3，申请者积分不足：
```
Status: 403
```
```json5
{
  "message": "积分不足"
}
```

响应4, 完成加圈任务：
```
Status: 201 Created
```
```json5
{
  "amount": 1
}
```

响应5，申请成功，直接加入：
```
Status: 204 No Content
```

响应6，申请成功，需要审核：
```
Status: 202 Accept
```
```json5
{
  "message": "申请成功，请等待审核"
}
```

## 需要我审核的申请记录
```http request
GET /user/applied-logs
```


## 指定圈子的加入申请记录
```http request
GET /user/feed-topics/{topic}/apply-logs
```
请求内容参数:

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| `topic` | `integer` | **必选**, 要查找的圈子ID |
| `offset` | `integer` | **可选**, 数据偏移量 |
| `limit` | `integer` | **可选**, 分页数量 |
| `page` | `integer` | **可选**, 分页模式 |
| `status` | `string` | **可选**, 审核状态筛选,可传递参数是：`accepted`,`waiting`, `rejected` |

>  offset 与 page 只能二选一

响应：
```
Status: 200 OK
```
```json5
[
    {
            "id": 2,
            "user": {
                "id": 1,
                "name": "root",
                "email": null,
                "phone": null,
                "bio": null,
                "sex": 0,
                "location": null,
                "invite_code": "10ABC0",
                "avatar": null,
                "feed_topics_count": 1,
                "verification": null,
                "has_follower": false,
                "has_following": false,
                "created_at": "2019-12-12T03:49:38Z",
                "updated_at": "2019-12-12T03:52:09Z"
            },
            "expense": null, // 加圈价格
            "status": "waiting", // 状态
            "created_at": "2019-12-12 11:54:38" // 申请时间
        }
]
```

## 获取圈子分类
```
GET /feed/topics/categories
```
请求内容参数:

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| `id` | `integer` | **可选**, 指定查找的分类ID |
| `name` | `string` | **可选**, 检索分类名称关键字 |
| `offset` | `integer` | **可选**, 数据偏移量 |
| `limit` | `integer` | **可选**, 分页数量 |
| `page` | `integer` | **可选**，不要同时和「offset」使用 |
| `orderBy` | `string` | **可选**，默认以权重倒序，可传递内容 「id:{desc|asc}」|

响应: 圈子分类列表
```json
[{
 "id": 2,
 "name": "999",
 "sort": 999
 }
]
```
```
Status: 200 OK
```


## 获取指定圈子

```
GET /api/v2/feed/topics
```

请求查询参数：

| 参数 | 类型 | 描述 |
|-----|----|-----|
| `id` | `string` | 需要获取的圈子 ID，多个使用 `,` 符号进行分割。|
| `topic_category_id` | `string` | 根据圈子分类进行查询。|

响应：**同圈子列表**

## 删除圈子

> 必须是自己的圈子或拥有`[feed] Delete Feed Topic`权限

```
DELETE /api/v2/feed/topics/{topicId}
```

响应：

```
Status: 204 No Content
```

## 获取用户的圈子

接口如同「[获取全部话题](https://slimkit.github.io/docs/api-v2-feeds-topics.html#list-all-topics-%E8%8E%B7%E5%8F%96%E5%85%A8%E9%83%A8%E8%AF%9D%E9%A2%98)」一致，在请求查询参数中，增加了 `for_user` 字段，该字段用于过滤非指定的其他用户，只返回指定用户的圈子。

新增请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|-----|
| `status` | `String` | **可选**，要查询的状态，默认`passed`，可选值：全部`all`,已通过`passed`,审核中`waiting`,未通过`failed` |
| `for_user` | `Number` | **可选**，要查询的用户ID |

## 我加入、关注的圈子

```
GET /api/v2/user/followed-topics
```

请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|-----|
| `limit` | `Number` | 请求获取的数据调试，修正值为 `0 - 100` |
| `after` | `Number` | 上次请求获取的 `id` 最小值 |

响应：

```
Status: 200 OK
```
```json5
[
    {
        "id": 2,
        "name": "三月",
        "logo": {
            "url": "http://127.0.0.1:8000/storage/public:MjAxOC8xMC8xMi9hdDVFOGdiak1ZRk9JdEw5cmJUaDRCRXVLQXdGajg1R3FieGpCNWRlWnJNaEU5OGdLNlNUYnRCamVJQ3Zoa0h1LmpwZw==",
            "vendor": "local",
            "mime": "image/jpeg",
            "size": 802930,
            "dimension": {
                "width": 2800,
                "height": 1867
            }
        },
        "desc": "成都最胆小玳瑁",
        "creator_user_id": 1,
        "feeds_count": 2,
        "reward_amount_count": 120,
        "followers_count": 1,
        "has_followed": true
    }
]
```

## 圈子用户列表

```
GET /api/v2/feed/topics/{topicId}/followers
```
请求查询参数：

| 参数 | 类型 | 描述 |
|-----|----|-----|
| `limit` | `int` | **可选**，本次请求获取的条数 |
| `after` | `int` | **可选**，少选用户 ID 之后的数据 |
| `name` | `string` | **可选**，用户名筛选 |
| `first_creator` | `int` | **可选**，是否将创建者排在第一个，选项 0,1；默认0 |

响应

```
Status: 200 OK
```
```json5
[
    {
        "id":1,
        "name":"root",
        "bio":null,
        "sex":0,
        "location":null,
        "avatar":null,
        "feed_topics_count":6,
        "extra":{
            "user_id":1,
            "likes_count":0,
            "comments_count":0,
            "followers_count":0,
            "followings_count":0,
            "updated_at":"2018-11-16 07:39:55",
            "feeds_count":4,
            "checkin_count":0,
            "last_checkin_count":0
        },
        "verified":null,
        "created_at":"2018-10-12T01:45:02Z"
    }
]
/// 参考用户列表字段
```

## 统计圈子数量

```
GET /api/v2/feed/topic/count
```

查询参数：

| 参数 | 描述 |
|----|----|
| `user_id` | **可选**，要统计的用户ID |
| `city` | **可选**，城市名称，例如 `成都` |

响应：

Status: 200 OK

```json5
{
    "topics_total": 100,        // 圈子总数
    "passed_topics_count": 50,  // 已通过审核的圈子数量
    "waiting_topics_count": 25, // 正在审核中的圈子数量
    "failed_topics_count": 25,  // 未通过审核的圈子数量
}
```

## 圈子排行榜

```
GET /api/v2/topics-rank
```

查询参数：

| 参数 | 描述 |
|----|----|
| `type` | **可选**，允许的值有 `24hours/week/month/city`。默认为 `24hours` |
| `city` | **当 `type=city` 时参数必须存在**，城市名称，例如 `成都` |
| `with` | **可选**，要获取的数据集，可选 `topics`(榜单)、`my_topics`(我的圈子排名)、`topics_total`(全部圈子总数)；多个用逗号分隔，默认值：`topics,my_topics` |
| `user_id` | **可选**，要统计的用户ID |
响应：

Status: 200 OK

```json5

{
    "topics_total": 100,        // 圈子总数
    "passed_topics_count": 50,  // 已通过审核的圈子数量
    "waiting_topics_count": 25, // 正在审核中的圈子数量
    "failed_topics_count": 25,  // 未通过审核的圈子数量
    "my_topics": [ // 我的圈子在当前榜单排名信息
        {
            "rank": "1", // 排名
            "total": 100, // 被打赏的总值
            "topic": { // 圈子数据
                "id": 3,
                "name": "一橙橙",
                "creator_user_id": 1,
                "feeds_count": 0,
                "reward_amount_count": 0,
                "followers_count": 1,
                "has_followed": true,
                "all_feeds_likes_count": 3,
                "join_permission": "directJoin",
                "publish_permission": "creatorOnly"
            }
        },
        {
            "rank": "1000+",
            "total": 0,
            "topic": {
                "id": 1,
                "name": "猫咪宝贝",
                "creator_user_id": 1,
                "feeds_count": 1,
                "reward_amount_count": 20,
                "followers_count": 1,
                "has_followed": true,
                "all_feeds_likes_count": 1,
                "join_permission": "directJoin",
                "publish_permission": "creatorOnly"
            }
        }
    ],
    "topics": [ // 榜单排名信息
        {
            "rank": "1",
            "total": "100",
            "topic": {
                "id": 3,
                "name": "一橙橙",
                "creator_user_id": 1,
                "feeds_count": 0,
                "reward_amount_count": 0,
                "followers_count": 1,
                "has_followed": true,
                "all_feeds_likes_count": 3,
                "join_permission": "directJoin",
                "publish_permission": "creatorOnly"
            }
        },
        {
            "rank": "2",
            "total": 0,
            "topic": {
                "id": 2,
                "name": "三月",
                "logo": {
                    "url": "http://wm.local.medz.cn/storage/public:MjAxOC8xMC8xMi9hdDVFOGdiak1ZRk9JdEw5cmJUaDRCRXVLQXdGajg1R3FieGpCNWRlWnJNaEU5OGdLNlNUYnRCamVJQ3Zoa0h1LmpwZw==",
                    "vendor": "local",
                    "mime": "image/jpeg",
                    "size": 802930,
                    "dimension": {
                        "width": 2800,
                        "height": 1867
                    }
                },
                "desc": "成都最胆小玳瑁",
                "creator_user_id": 2,
                "feeds_count": 2,
                "reward_amount_count": 130,
                "followers_count": 1,
                "has_followed": true,
                "all_feeds_likes_count": 2,
                "join_permission": "directJoin",
                "publish_permission": "creatorOnly"
            }
        },
        {
            "rank": "3",
            "total": 0,
            "topic": {
                "id": 1,
                "name": "猫咪宝贝",
                "creator_user_id": 1,
                "feeds_count": 1,
                "reward_amount_count": 20,
                "followers_count": 1,
                "has_followed": true,
                "all_feeds_likes_count": 1,
                "join_permission": "directJoin",
                "publish_permission": "creatorOnly"
            }
        }
    ]
}
```

## 随机圈子列表

```
GET /api/v2/feed/topic/random
```

查询参数：

| 参数 | 描述 |
|----|----|
| `more` | **可选**，是否一周以外的数据，默认 `0`, 可选 `1` - 是 |
| `page` | **可选**，页码，加载更多的页码。 |

响应：

Status: 200 OK

```json5
{
    "data":[ // 圈子列表
        {
            "id":1,
            "name":"猫咪宝贝",
            "creator_user_id":1,
            "feeds_count":1,
            "reward_amount_count":20,
            "followers_count":1,
            "all_feeds_likes_count":1,
            "join_permission": "directJoin",
            "publish_permission": "creatorOnly"
        }
    ],
    "links":{
        "first":"http://wm.local.medz.cn/api/v2/feed/topic/random?page=1",
        "last":null,
        "prev":null,
        "next":null
    },
    "meta":{
        "current_page":1,
        "from":1,
        "path":"http://wm.local.medz.cn/api/v2/feed/topic/random",
        "per_page":100,
        "to":1
    }
}
```

## 推荐圈子列表
```http request
GET /api/v2/feed/topic/recommend
```
请求内容参数：

| 名称 | 类型 | 描述 |
|----|----|----|
| `offset` | `integer` | 排除数量。 |
| `limit`  | `integer` | 每页数量   |

> 返回体为单个圈子的接口
```
Status: 200 OK
```

## 热门圈子列表

```
GET /api/v2/feed/topic/hot
```

请求内容参数：

| 名称 | 类型 | 描述 |
|----|----|----|
| `offset` | `integer` | 排除数量。 |
| `limit`  | `integer` | 每页数量   |
| `topic_category_id`  | `integer` | 圈子分类   |

响应：

```
Status: 200 OK
```

> body 部分和列表接口一致


## 圈子列表

```
GET /api/v2/feed/topics
```

请求内容参数：

| 名称 | 类型 | 描述 |
|----|----|----|
| `only` | `String` | 可选，该字段只有一个固定值 hot，当出现 only 值的时候其他参数全部失效，转而 API 只返回热门圈子数据。 |
| `direction` | `String` | 用于基于数据 id 字段的排序方向设置，允许 asc 或者 desc，默认 desc |
| `q` | `String` | 搜索关键词，允许任何字符串 |
| `limit`  | `integer` | 每页数量   |
| `index`  | `integer` |  数据查询定位值，来源于数据 id 字段，上一页数据最后一条数据的id |
| `topic_category_id`  | `integer` | 圈子分类id   |
| `forUser`  | `integer` | 某个用户的 id |
| `status`  | `String` |   可选，要查询的状态，默认passed，可选值：已通过passed,审核中waiting,未通过failed, 全部 all|


响应：

```
Status: 200 OK
```

> body 部分和列表接口一致



## 打赏圈子

```
POST /api/v2/feed/topics/:topicId/rewards
```

请求内容参数：

| 名称 | 类型 | 描述 |
|----|----|----|
| `gift_id` | `integer` | **可选**，和name二选一，礼物ID。 |
| `name` | `string` | **可选**，和gift_id二选一，礼物名称。 |
| `price` | `number` | **可选**，有name时必须提供，正整数。|
| `numbers` | `number` | **必须**，礼物数量，正整数。|

响应：

```
Status: 201 Created
```
```json
{
    "message": "打赏成功",
    "currency_sum": 999
}
```

## 圈子打赏榜

```
GET /api/v2/feed/topics/:topicId/rewards-rank
```

请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|----|
| `limit` | `number` | 请求查询的数据条数，做少 1，最大 100。 |
| `offset` | `number` | 已加载数据列表的总数，用于分页。 |

响应：

```
Status: 200 OK
```
```json5
[
    {
        "id": 1,
        "user_id": 1, // 打赏这个圈子的用户ID
        "topic_id": 2,  // 圈子 ID
        "total": 120, // 在这个圈子下总共打赏积分数量
        "created_at": "2018-10-15 08:44:57",
        "updated_at": "2018-10-15 08:51:20"
    }
]
```

## 圈子打赏日志

```
GET /api/v2/feed/topics/:topicId/rewards-logs
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
        "user_id": 1, // 打赏圈子的用户 ID
        "target_id": 2, // 类型资源 ID
        "target_type": "feed-topics", // 类型资源标识，feed-topics 圈子，feeds 动态。
        "name": "猫薄荷", // 礼物名称
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
        }, // 如果没有设置则没有此字段或为null
        "price": 1, // 礼物单价
        "numbers": 20, // 打赏的礼物数量
        "created_at": "2018-10-15 08:51:20",
        "updated_at": "2018-10-15 08:51:20"
    },
]
```


## 关注的圈子、用户、自己的动态

```
GET /api/v2/feeds
```

**排序方式为：发布时间倒序**

请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|-----|
| `type` | `string` | **必须**，只能是 `newFollow`。 |
| `after` | `number` | **可选**，上次获取列表最后的 `id` 值。|
| `limit` | `number` | **可选**，请求获取的数据条数，默认 `15` 条，最多 `100` 条。|
| `only_video` | `number` | **可选**，固定值 `1`，存在这个查询条件仅返回视频动态。 |

响应：**同动态响应**

## 关注圈子的动态

```
GET /api/v2/feeds
```

**排序方式：发布时间倒序**

请求查询参数：

| 参数 | 类型 | 描述 |
|----|----|-----|
| `type` | `string` | **必须**，只能是 `topics`。 |
| `after` | `number` | **可选**，上次获取列表最后的 `id` 值。|
| `limit` | `number` | **可选**，请求获取的数据条数，默认 `15` 条，最多 `100` 条。|
| `only_video` | `number` | **可选**，固定值 `1`，存在这个查询条件仅返回视频动态。 |

响应：**同动态响应**


## 退出圈子

```
DELETE /user/feed-topics/:topicID
```
请求内容参数

| 名称 | 类型 | 描述 |
|----|----|----|
| `target` | `integer` | **可选**，target为被清退出圈子的用户id， 该操作只能圈主或超级管理员操作。 |

响应：

```
Status: 204 No Content
```

## 设置加入者是否能发布动态

```
PATCH /api/v2/user/feed-topics/{topic}/can-pub
```

参数

| 名称 | 类型 | 描述 |
|----|----|----|
| `can_pub` | `integer` | **必须**，选项0:不能发布，1:能发布 |
| `user_id` | `any` | **必须**，用户ID，多个用逗号分隔或数组列表 |

响应：

```
Status: 204 No Content
```

## 查询当前用户能否发布动态
```
GET /api/v2/user/feed-topics/{topic}/can-pub
```

响应：

```
Status: 200 OK
```
```json5
{
    "can_pub": false
}
```



## 圈子相关通知
```http request
GET /api/v2/user/feed-topics/notifications
```

请求参数
| 名称 | 类型 | 描述 |
|----|----|----|
| `offset` | `integer` | **可选**，偏移量。 |
| `limit` | `integer` | **可选**，分页量 |
| `count` | `boolean` | **可选**，统计数量 |
| `type` | `string` | **必选**，需要处理的类型`accept`表示通过审核的通知, `applyfor`表示需要审核处理的通知|


返回体1,返回统计数
```json5
5
```

返回体2,返回具体的数据列表
```json5
[
    // type = accept
    {
        "id": "662982fd-f1fc-4d82-adda-365acba99170",
        "created_at": "2019-12-14T09:48:58Z",
        "read_at": null,
        "data": {
            "topic": {
                "id": 1,
                "name": "1号圈子"
            }
        }
    },
    // type = applyfor
    {
        "id": "5bb6f50e-31b6-4baf-a8b3-f4577e29449f",
        "created_at": "2019-12-14T09:44:20Z",
        "read_at": null,
        "data": {
            "sender": {
                "id": 2,
                "name": "wayne"
            },
            "topic": {
                "id": 1,
                "name": "1号圈子",
                "expense": 0
            }
        }
    }
]
```

## 个人主页需要处理的加圈申请
```http request
GET /api/v2/user/feed-topics/logs-count
```

请求参数
| 名称 | 类型 | 描述 |
|----|----|----|
| `exclude` | `array|string` | **可选**，排除需要查询的圈子，`[1,2,3]` | `'1,2,3'`。 |

响应 
```
Status: 200 OK
```

```json5
{
  count: 10,
  user: {
  
  }
}
```


