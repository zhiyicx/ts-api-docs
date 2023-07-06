---
sidebarDepth: 3
title: 通知和消息
---

# 通知和消息

## 用户消息通知

### 获取消息列表

```
GET /api/v2/user/notifications
```

查询参数：

| 参数 | 描述 |
|:----:|----|
| `type` | **必须**，`comment 评论`、`like 赞`、`reward 打赏`, `answer 回答`, `adoption 回答被采纳`, `mall_selling_commodity 商品被购买`, `selling_knowledge 知识被购买`, `accept 被同意加入圈子`, `applyFor 需要处理圈子的申请` ,`like 赞`、`reward 打赏` |
| `page` | **可选**，默认值 `1`, 用于分页获取数据 |

响应：

```
Status: 200 OK
```
```json5
{
    "data": [
        {
            "id": "b26368a6-57af-4d95-95b4-5271c7d3ecc8", // 消息 ID
            "created_at": "2019-01-25T05:06:43Z", // 消息创建时间
            "read_at": null, // 消息阅读时间
            "data": { // 数据
                "sender": { // 发送消息人信息
                    "id": 1, // 发送者 ID
                    "name": "root", // 发送者用户名
                    "avatar": null // 发送者头像
                },
                "topic": { // 圈子信息
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
                    }
                },
                "log": { // 道具信息
                    "name": "猫薄荷",
                    "price": 1,
                    "numbers": 10
                }
            }
        },
        {
            "id": "50a9e2d1-bc09-46da-81f4-59c62f31d571",
            "created_at": "2019-01-25T04:49:41Z",
            "read_at": null,
            "data": {
                "sender": {
                    "id": 1,
                    "name": "root",
                    "avatar": null
                },
                "feed": { // 动态信息
                    "id": 1,
                    "content": "第一条带图片的动态",
                    "images": [
                        // 参考动态图片结构
                    ],
                    "video": {
                        // 参考动态视频结构
                    }
                }
            }
        },
        {
            "id": "7fbd3397-f9a3-402f-8d78-d9671f7b0bee",
            "created_at": "2019-01-25T03:57:52Z",
            "read_at": null,
            "data": {
                "sender": { // 发送评论的用户信息
                    "id": 1,
                    "name": "root",
                    "avatar": null
                },
                "comment": { // 评论信息
                    "id": 18,
                    "body": "测试不存在的用户推送",
                    "reply_user": 0,
                    "created_at": "2019-01-25T03:57:52Z"
                },
                "feed": {
                    // 参考第二条
                }
            }
        }
    ],
    "links": { // 接口信息
        "first": "http://wm.local.medz.cn/api/v2/user/notifications?page=1", // 第一个接口地址
        "last": "http://wm.local.medz.cn/api/v2/user/notifications?page=3", // 最后一页接口地址
        "prev": "http://wm.local.medz.cn/api/v2/user/notifications?page=1", // 上一页接口地址
        "next": "http://wm.local.medz.cn/api/v2/user/notifications?page=3" // 下一页接口地址
    },
    "meta": {
        "current_page": 2, // 当前页码
        "from": 2,
        "last_page": 3, // 最后一页页码
        "path": "http://wm.local.medz.cn/api/v2/user/notifications", // 接口地址
        "per_page": 10, // 每页数据量
        "to": 2,
        "total": 3 // 总数据条数
    }
}
```

### 设置消息列表已读

```
PUT /api/v2/user/notifications
```

查询参数：

| 参数 | 描述 |
|:----:|----|
| `type` | **必须**，`comment 评论`、`like 赞`、`reward 打赏`, `answer 回答`, `adoption 回答被采纳`, `mall_selling_commodity 商品被购买`, `selling_knowledge 知识被购买`, `accept 被同意加入圈子`, `applyFor 需要处理圈子的申请` |

响应：

```
Status: 204 No Content
```

### 预览 + 消息数量获取接口

```
GET /api/v2/user/notification-statistics
```

响应：

```
Status: 200 OK
```
```json5
{
    "badges": { // 角标数组
        "comment": 0, // 评论未读数
        "like": 1, // 喜欢未读数
        "reward": 1, // 打赏未读数
        "following": 1, // 新增粉丝统计
        "answer": 1, // 收到的回答
        "adoption": 1, // 被采纳的回答
        "mall_selling_commodity": 1, // 卖出商品
        "selling_knowledge": 1 // 知识被购买
    },
    "lastCreatedAts": { // 最新时间
        "comment": "2019-01-25T03:57:52Z", // 最新收到评论时间
        "like": "2019-01-25T04:49:41Z", // 最新收到喜欢时间
        "reward": "2019-01-25T05:06:43Z", // 最新收到打赏时间
        "mall_selling_commodity": "2019-01-25T05:06:43Z", // 卖出商品
        "selling_knowledge": "2019-01-25T05:06:43Z" // 知识被购买
    },
    "previewUserNames": { // 预览用户名
        "comment": [ // 评论
            "root"
        ],
        "like": [ // 喜欢
            "root"
        ],
        "reward": [ // 打赏
            "root"
        ]
    }
}
```

### 推送消息

- `tag` 推送的消息页面标记
- `badge` 用户全部未读消息数量，iOS 会自动设置桌面角标，Android 可自行操作

### 获取消息设置

```
GET /api/v2/user/notification-settings
```

响应：

```
Status: 200 OK
```
```json5
{
    "reward": true,  // 是否开起打赏推送
    "comment": true, // 是否打开评论推送
    "chat": true,    // 是否开起聊天推送
    "sound": false   // 推送是否开起声音
}
```

### 设置消息设置

```
PATCH /api/v2/user/notification-settings
```

输入：

| 参数 | 类型 | 描述 |
|:----:|-----|-----|
| `reward` | `Boolean` | **可选**，设置打赏通知开关 |
| `comment` | `Boolean` | **可选**，设置评论通知开关 |
| `chat` | `Boolean` | **可选**，设置聊天通知开关 |
| `sound` | `Boolean` | **可选**，设置通知声音开关 |

响应：
```
Status: 204 No Content
```
