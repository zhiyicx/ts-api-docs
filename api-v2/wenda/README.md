---
sidebarDepth: 2
title: 问答
---

# 问答API

## 发布问题
```http request
POST /api/v2/wendas
```
传递参数

| 参数 | 类型 | 描述 |
|----|----|----|
| `title` | `string` | **必填**, 问题，`?` 或者 `？`结尾 |
| `content` | `string` | **必填**, 问题详情 |
| `offer` | `integer` | **必填**, 悬赏的积分数量，无悬赏请传`0` |
| `offer` | `integer` | **必填**, 悬赏的积分数量，无悬赏请传`0` |

响应
```
Status: 201 Created
```
响应体，问答数据结构
```json5
{
    "id": 11,
    "author_id": 3,
    "category_id": 1,
    "title": "fdsfdsafdsafdsafdsaf？",
    "content": "<p>fdsafdsafdsaf</p><img data-width=\"690\" data-height=\"1035\" src=\"http://local.thinksns-plus.com/storage/public:MjAyMC8wMS8wOC9yWmw5UWl5Yk5TalpZeGJ6ekxZWDVnRmdERklWcWt3YWNJVHFiN1RkV0hueFUxWXFNU2Jrcm0wQkpkaWx0QkpOLmpwZWc=\" data-src-node=\"public:2020/01/08/rZl9QiybNSjZYxbzzLYX5gFgDFIVqkwacITqb7TdWHnxU1YqMSbkrm0BJdiltBJN.jpeg\"><img data-width=\"970\" data-height=\"820\" src=\"http://local.thinksns-plus.com/storage/public:MjAyMC8wMS8wOC9TVTNFUmc0STREQ3N1MzdHcDhvS0Z2eWpTaUVBV0pJaHBBdHlkclVzYVhLbDk4b0dmMnNycEdnMEt6NHdEYWdFLmpwZw==\" data-src-node=\"public:2020/01/08/SU3ERg4I4DCsu37Gp8oKFvyjSiEAWJIhpAtydrUsaXKl98oGf2srpGg0Kz4wDagE.jpg\"><p><br></p>",
    "offer": 0,
    "adoption": 0,
    "views_count": 85,
    "likes_count": 0,
    "favorites_count": 1,
    "comments_count": 2,
    "shares_count": 0,
    "hot_index": 0,
    "created_at": "2020-01-08 10:51:26",
    "updated_at": "2020-01-13 03:59:45",
    "liked": false,
    "favorited": false,
    "answers": false, // 是否已经回答``
    "author": { // with参数中含有author的时候返回
        "id": 3,
        "name": "七夜",
        "email": null,
        "phone": "15694005009",
        "bio": "牛会展中心温水煮青蛙",
        "sex": 0,
        "location": "四川省 成都市",
        "invite_code": "10ABC2",
        "avatar": {
            "url": "http://local.thinksns-plus.com/storage/public:MjAxOS8xMi8yNC9XMlU0d29RUzBqeUtyRzlPYThMbDBZTkpZcXZsaW4zUDQ2dnpoTzczR2pNdXdTTm5FcndjRTF0YVFzQ1IydjJRLmpwZw==",
            "vendor": "local",
            "mime": "image/jpeg",
            "size": 110699,
            "dimension": {
                "width": 463,
                "height": 463
            }
        },
        "feed_topics_count": 0,
        "verification": null, // with参数中含有 author 和 author.verification时返回
        "has_follower": false,
        "has_following": false,
        "created_at": "2019-12-24T07:13:04Z",
        "updated_at": "2019-12-24T07:46:25Z",
        "vip": null
    },
    "first_answer": null // null 或者最新回复
}
```

## 查询单个问题
```http request
GET /api/v2/wendas/{wenda.id}
```
| 参数 | 类型 | 描述 |
|----|----|----|
| `with` | `array`,`string` | **可选**, [`author`, `author.verification`]  |
响应 
```
Status: 200 OK
```
响应体
```json5
{ /** 同创建接口返回 */ }
```

## 查询问题列表
请求
```http request
GET /api/v2/wendas
```
query参数

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `id` | `integer,string` | **可选**，问题ID，多个逗号分隔 |
| `author_id` | `integer,string` | **可选**，作者用户ID，不提供则查询全部用户，多个逗号分隔 |
| `category_id` | `integer,string` | **可选**，分类ID，不提供则查询全部分类，多个逗号分隔 |
| `trashed` | `string` | **可选**，默认`without`，选项：<br>`without`不包括已删除的问题<br>`with`包括已删除的问题<br>`only`·仅已删除的问题 |
| `recommend` | `integer` | **可选**，查询推荐状态，默认不限，选项：0,1 |
| `keyword` | `string` | **可选**，查询关键字，仅在标题中搜索 |
| `liked` | `string` | **可选**，无默认值，选项：<br>`check`返回列表中包含`liked`字段表示点赞状态 |
| `favorited` | `string` | **可选**，无默认值，选项：<br>`check`返回列表中包含`favorited`字段表示收藏状态 |
| `list_type` | `string` | **可选**，无默认值，选项：<br>`only_liked`仅返回已点赞的问题<br>`only_favorited`仅返回已收藏的问题 |
| `offset` | `integer` | **可选**，本地已有加载数据数量 |
| `limit` | `integer` | **可选**，获取条数，默认15 |
| `order` | `string` | **可选**，排序，多个逗号分隔；支持的排序字段：<br>id, views_count, likes_count, favorites_count, <br>comments_count, shares_count, hot_index, recommend_at, topped_at, <br>category_topped_at, created_at, updated_at, deleted_at<br>如：topped_at desc,created desc |
| `page` | `integer` | **可选**，第几页，如果有此参数，则返回分页模式的数据 |
| `with` | `string,array<string>` | **可选**，需要返回的关联数据，可选：`author`,`author.verification`,`category` |

响应
```
Status: 200 OK
```
响应体
```json5
[
  {/** 单个问题 */},
  {/** 单个问题 */}
]
```

## 修改问题
> 普通用户只能修改自己的问题，有 `wenda:admin` 权限的用户可以更新任何人的问题

```
PATCH /api/v2/wendas/{wenda.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `author_id` | `integer` | **可选**，作者用户ID，默认当前用户 |
| `category_id` | `integer` | **可选**，问题所属分类ID |
| `offer` | `integer` | **必选**，问题悬赏，已采纳的问题不能撤销打赏 |
| `title` | `string` | **可选**，问题标题，最大长度60（GB18030长度） |
| `content` | `string` | **可选**，问题内容，65000个字节以内 |
| `content_medias` | `array` | **可选**，问题内容中的媒体（图片、视频），必须是一个数组，0~100个元素 |
| `content_medias.*` | `object` | **必须**，图片或视频，必须一个键值对 |
| `content_medias.*.image` | `string` | **必须**，图片的 storage node |
| `content_medias.*.video` | `string` | **可选**，视频的 storage node |
| `recommend` | `boolean` | **可选**，是否推荐问题，需要权限`infos:admin` |
| `topped` | `boolean` | **可选**，是否全局置顶问题，需要权限`infos:admin` |
| `category_topped` | `boolean` | **可选**，是否分类置顶问题，需要权限`infos:admin` |
| `deleted` | `boolean` | **可选**，问题删除状态，需要权限 |

响应
```
Status: 201 Created
```

响应体
```json5
{
   /** 同创建接口 */
}
```

## 删除问题

> 普通用户只删除自己创建的问题，有 `wenda:admin` 权限的用户可以删除任何人的问题；删除问题将同时删除点赞，收藏，评论关系绑定

```
DELETE /api/v2/wendas/{wenda.id}
```

响应：

```
Status: 204 No Content
```

## 点赞问题

```
PUT|PATCH /api/v2/wendas/{wenda.id}/like
```

响应：

```
Status: 204 No Content
```

## 取消点赞问题

```
DELETE /api/v2/wendas/{wenda.id}/like
```

响应：

```
Status: 204 No Content
```

## 收藏问题

```
PUT|PATCH /api/v2/wendas/{wenda.id}/favorite
```

响应：

```
Status: 204 No Content
```

## 取消收藏问题

```
DELETE /api/v2/wendas/{wenda.id}/favorite
```

响应：

```
Status: 204 No Content
```

## 分享问题

```
PUT /api/v2/wendas/{wenda.id}/hit-share
```

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

## 发布回答
> 发布回答调用发布动态的接口，其中 `repostable_type` 设置为 `wendas`，`repostable_id` 设置要评论的问答ID。

> 服务端返回动态数据时，会附加 `repostable`(关联数据) `repostable_type`(关联数据的类型) `repostable_id`(关联数据的ID)三个字段。

## 获取问题答案

获取指定问题的答案
```
GET /api/v2/wendas/{wenda.id}/comments
```

获取全部答案
```
GET /api/v2/wenda-comments
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `type` | `string` | **可选**，要获取的评论类型，默认全部，选项：<br>`image`仅获取带图片的评论<br>`video`仅获取带视频的评论<br>`image_or_video` 获取带图片或视频的评论 |
| `after` | `integer` | **可选**，本地最后一条数据的ID, 仅最新答案中可用 |
| `offset` | `integer` | **可选**，本地已有(采纳答案不包含在其中)的数据量， 热门回答必须采用方案 |
| `order` | `string` | **可选**，默认 `id,desc`，可选 [`id,desc`, `id,asc`, `hot,desc`, `hot,asc`] |
| `limit` | `integer` | **可选**，获取条数，默认15 |
| `for_user` | `integer` | **可选**，指定用户收到的回答 |
| `user` | `integer` | **可选**，指定用户发布的回答 |
| `exclude_adoption` | `boolean` | **可选**，排除被采纳的答案, 和 [被采纳的答案](wenda.md#被采纳的答案)配合使用 |


响应：

```
Status: 200 OK
```

```json5
[
  {/*  单个动态数据 */}
]
```
**返回体中包含`adoption`字段，表示该回答是否被采纳**

## 采纳答案
```http request
POST /api/v2/wendas/{wenda.id}/adoption/{feed.id}
```
> `wenda.id`为问题的id， `feed.id`为回答的id

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `remark` | `string` | **可选**, 对答案的点评 |

响应
```
Status: 201 Created
```

## 被采纳的答案
```http request
GET /api/v1/wendas/{wenda}/adoptions
```
响应
```
Status: 200 OK
```
> ** [问题详情](wenda.md#发布问题)中如果 `adoption` 的值为真，则可以调用此接口获取被采纳的答案** <br /> 
> 用数组的方式应对可能会出现的多个采纳

响应体
```json5
[
  {/** 单个回答 **/},
  {/** 单个回答 **/},
]
```

## 问答相关推送类型

`notification:question-answered` 问题被评论

`notification:answer-adopted` 回答被采纳

## 问答相关通知
```http request
GET /api/v2/user/wenda/notifications
```

请求参数
| 名称 | 类型 | 描述 |
|----|----|----|
| `offset` | `integer` | **可选**，偏移量。 |
| `limit` | `integer` | **可选**，分页量 |
| `count` | `boolean` | **可选**，统计数量 |
| `type` | `string` | **必选**，需要处理的类型`answer`被回答, `adoption`回答被采纳|


返回体1,返回统计数
```json5
5
```

返回体2,返回具体的数据列表
```json5
[
    // type = adoption
    {
        "id": "662982fd-f1fc-4d82-adda-365acba99170",
        "created_at": "2019-12-14T09:48:58Z",
        "read_at": null,
        "data": {
            "wenda": {
                "id": 1,
                "title": "我的问题?"
            }
        }
    },
    // type = answer
    {
        "id": "5bb6f50e-31b6-4baf-a8b3-f4577e29449f",
        "created_at": "2019-12-14T09:44:20Z",
        "read_at": null,
        "data": {
            "sender": {
                "id": 2,
                "name": "wayne"
            },
            "wenda": {
                "id": 1,
                "title": "我的问题",
            }
        }
    }
]
```
