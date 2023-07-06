---
sidebarDepth: 2
title: 任务
---

# 任务 APIs 文档

## 获取任务列表

```
GET /api/v2/user/tasks
```

响应
```
Status: 200 OK
```

| 任务类型 | 描述 |
|:----:|----|
| `task:login` | **登录** |
| `task:comments` | **评论** |
| `task:shares` | **分享** |
| `task:likes` | **点赞** |
| `task:be-liked` | **被点赞** |
| `task:follow-topic` | **关注圈子** |
| `task:theme-discuss` | **话题讨论** |
| `task:commodity-comments` | **商品点评** |
| `task:knowledge-comments` | **知识点评** |

```json5
[
    {
        "type": "task:passport", // 任务类型，可能的值看上面的列表
        "max": 1,       // 此任务今日一共可以做多少次（最多得奖励次数），0表示不限制
        "current": 1,   // 此任务今日已经做了多少次（已得奖励次数）
        "hit_count": 0, // 当前任务周期已做{type}任务的次数
        "hit_increment": 1, // 做多少次{type}获得一次奖励
        "how_increment": 1, // 每次奖励数量
        "liked_count": 1,   // 兼容字段，类型task:be-liked时才有，计算 hit_increment * current + hit_count
    }
]
```

## 获取用户任务统计

```
GET /api/v2/user/task/stats
```

响应
```
Status: 200 OK
```

```json5
{
    "task:login": {
        "scores_count": 0,     // 累计获得的积分数量
        "done_tasks_count": 0, // 累计完成该任务的数量
    },
    // ... 其他任务统计数据
}
```

## 动态分享成功调用任务

```
PUT /api/v2/feeds/{feed}/tasks/share
```

> 用户登录会自动完成任务相关，没有登录则仅增加动态分享数

响应：

```
Status: 204 No Content
```
```
Status: 201 Created
```
```json5
{
  "amount": 2
}
```

## 圈子分享成功调用任务

```
PUT /api/v2/feed/topics/{topic}/tasks/share
```

响应：

```
Status: 204 No Content
```
```
Status: 201 Created
```
```json5
{
  "amount": 2
}
```

## 用户登录调用任务

```
PUT /api/v2/user/task/login
```

响应：

```
Status: 204 No Content
```
```
Status: 201 Created
```
```json5
{
  "amount": 1
}
```
