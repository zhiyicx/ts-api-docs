---
id: api-v2-feeds-comments
title: 评论
---

# 动态评论

- [Send comment](#send-comment)
- [Get all comments](#get-all-comments)
- [Get a single comment](#get-a-single-comment)
- [Delete comment](#delete-comment)

## 发布评论

```
POST api/v2/feeds/:feed/comments
```

参数

| Name | Type | Description
|:----:|:----:|----|
| body | String | **必填**，评论内容. |
| reply_user | Integer | **可选**， 回复某个用户. |

响应
```
Status: 201 Created
```
响应体
```json
{
    "message": [
        "操作成功"
    ],
    "comment": {
        "user_id": 1,
        "reply_user": 0,
        "target_user": 1,
        "body": "我是第三条评论",
        "commentable_type": "feeds",
        "commentable_id": 1,
        "updated_at": "2017-07-20 08:53:24",
        "created_at": "2017-07-20 08:53:24",
        "id": 3
    }
}
```

## 评论列表

```
GET api/v2/feeds/:feed/comments
```

参数

| Name | Type | Description |
|:----:|:----:|----|
| limit | Integer | List comments limit, By default `20`. |
| after | Integer | The integer ID of the last Comment that you've seen. |

响应

```
Status: 200 OK
```
```json
{
    "pinneds": [ // removed
        {
            "id": 2,
            "user_id": 1,
            "target_user": 1,
            "reply_user": 0,
            "body": "我是第一条评论",
            "commentable_id": 1,
            "commentable_type": "feeds",
            "created_at": "2017-07-20 08:35:18",
            "updated_at": "2017-07-20 08:35:18"
        }
    ],
    "comments": [
        {
            "id": 3,
            "user_id": 1,
            "target_user": 1,
            "reply_user": 0,
            "body": "我是第三条评论",
            "commentable_id": 1,
            "commentable_type": "feeds",
            "created_at": "2017-07-20 08:53:24",
            "updated_at": "2017-07-20 08:53:24"
        }
    ]
}
```

| Name | Description |
|:----:|----|
| pinneds | **已弃用**,Pinned comments list. |
| comment | Comments list. |
| *.id | The `ID` of the comment. |
| *.user_id | Commentator. |
| *.target_user | Own dynamic publisher. |
| *.reply_user | Reverted to the user. |
| *.body | The `body` of the comment. |
| *.commentable_id | Feeds id. |
| *.commentable_type | Commentable type. |
| *.created_at | Comment release time. |
| *.updated_at | Comment update time. |

## 获取单个评论

```
GET api/v2/feeds/:feed/comments/:comment
```

Response

```
Status: 200 OK
```
```json
{
    "id": 1,
    "user_id": 1,
    "target_user": 1,
    "reply_user": 0,
    "body": "我是第一条评论",
    "commentable_id": 1,
    "commentable_type": "feeds",
    "created_at": "2017-07-20 08:34:41",
    "updated_at": "2017-07-20 08:34:41"
}
```

| Name | Description |
|:----:|----|
| id | The `ID` of the comment. |
| user_id | Commentator. |
| target_user | Own dynamic publisher. |
| reply_user | Reverted to the user. |
| body | The `body` of the comment. |
| commentable_id | Feeds id. |
| commentable_type | Commentable type. |
| created_at | Comment release time. |
| updated_at | Comment update time. |

## 删除评论

```
DELETE api/v2/feeds/:feed/comments/:comment
```

Response

```
Status: 204 No Content
```

## 删除评论

```
DELETE /api/v2/comments/{comment}
```

响应：

```
Status: 204 No Content
```
