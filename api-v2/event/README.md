---
sidebarDepth: 2
---
# 活动API

## 单条活动数据结构
```json5
{
    "id": 3,
    "title": "1234",
    "category": {
        "id": 1,
        "name": "普通活动",
        "avatar": {
            "url": "http://plus-domo.test/storage/public:MjAxOS8xMS8yNi9IaFB3UURLZ25xUTVsUkdtdEJxbjJvTnJjazk1SXlMWHVnd2pmbExBc1FNcGJZM0ZhUFprRzg3dzB5U3RmZDF1LmpwZw==",
            "vendor": "local",
            "mime": "image/jpeg",
            "size": 17555,
            "dimension": {
                "width": 200,
                "height": 200
            }
        }
    },
    "creator": {
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
        "created_at": "2019-11-29T06:41:52Z",
        "updated_at": "2019-11-29T10:23:27Z"
    },
    "user_id": 1,
    "avatar": {
        "url": "http://plus-domo.test/storage/public:MjAxOS8xMS8yNi9IaFB3UURLZ25xUTVsUkdtdEJxbjJvTnJjazk1SXlMWHVnd2pmbExBc1FNcGJZM0ZhUFprRzg3dzB5U3RmZDF1LmpwZw==",
        "vendor": "local",
        "mime": "image/jpeg",
        "size": 17555,
        "dimension": {
            "width": 200,
            "height": 200
        }
    },
    "wantJoin": true,
    "want_joins_count": 1,
    "interested": false,
    "interesteds_count": 0,
    "date": "2019-12-03 14:40:00",
    "content": "hhhh",
    "area": "四川省 成都市 高新区",
    "address": null,
    "expense": 0,
    "validate": 1
}
```

## 创建活动

```http request
POST /events
```
传递参数

| 参数 | 类型 | 描述 |
|----|----|----|
| `title` | `string` | **必选**, 活动名称，2-30个汉字 |
| `category_id` | `integer` | **必选**, 活动分类ID |
| `avatar` | `string` | **必选**, 活动封面，文件node |
| `date` | `datetime` | **必选**, 活动时间，必须大于当前时间 |
| `content` | `string` | **必选**, 活动内容，小于65000字节 |
| `area` | `string` | **可选**, 和`address`至少存在一项 |
| `address` | `string` | **可选**, 和`area`至少存在一项 |
| `expense` | `integer` | **可选**, 活动费用，`元`为单位 |

响应:
```
Status: 201 Created
```
> 响应体: [单个活动结构](event.md#单条活动数据结构)

## 获取单条活动

```http request
GET /events/{evnetId}
```
响应:
```
Status: 200 OK
```
> 响应体：[单个活动结构](event.md#单条活动数据结构)

## 活动列表

```http request
GET /events
```
参数列表：

| 参数 | 类型 | 描述 |
|----|----|----|
| `keyword` | `string` | **可选**, 对活动名称进行搜索 |
| `c` | `integer` | **可选**, 根据活动分类进行筛选 |
| `area` | `string` | **可选**, 根据地区筛选 |
| `offset` | `string` | **可选**, 数据偏移量 |
| `limit` | `string` | **可选**, 分页量 |
| `user_id` | `integer` | **可选**, 某个用户的活动 |
| `page` | `string` | **可选**, page分页模式，与`offset`二选一 |
| `ob` | `string` | **可选**, 排序默认会将超过当前时间的活动排到最后，并且为`date asc`排序, 支持： `id:{desc,asc}`, `date:{desc,asc}` |

## 想要参加活动

```http request
POST /events/{eventId}/want-join
```
响应:
```
Status: 204 No Content
```
> 对于已经加入过的和未加入过的，请求该接口都返回204状态

## 对活动感兴趣

```http request
POST /events/{eventId}/interest
```
响应:
```
Status: 204 No Content
```
> 对于已经感兴趣的和未感兴趣的，请求该接口都返回204状态

## 删除活动

```http request
DELETE /events/{eventId}
```

删除成功响应:
```
Status: 201 Created
```

删除失败响应, 无权删除:
```
Status: 403 Forbidden
```

删除失败响应, 没有找到对应的活动:
```
Status: 404 Not Found
```

## 发布活动点评

> 发布点评调用发布动态的接口，其中 `repostable_type` 设置为 `event`，`repostable_id` 设置要点评的活动ID。

## 获取活动点评

获取指定活动点评
```
GET /api/v2/events/{eventId}/comments
```
获取全部活动点评
```
GET /api/v2/events/comments
```
查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `type` | `string` | **可选**，要获取的评论类型，默认全部，选项：<br>`image`仅获取带图片的评论<br>`video`仅获取带视频的评论<br>`image_or_video` 获取带图片或视频的评论 |
| `after` | `integer` | **可选**，本地最后一条数据的ID |
| `order` | `string` | **可选**，默认 desc，可选 asc,desc |
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


## 活动分类数据结构

```json5
{
  "id": 1,
  "name": "普通活动",
  "avatar": {
      "url": "http://plus-domo.test/storage/public:MjAxOS8xMS8yNi9IaFB3UURLZ25xUTVsUkdtdEJxbjJvTnJjazk1SXlMWHVnd2pmbExBc1FNcGJZM0ZhUFprRzg3dzB5U3RmZDF1LmpwZw==",
      "vendor": "local",
      "mime": "image/jpeg",
      "size": 17555,
      "dimension": {
          "width": 200,
          "height": 200
      }
  },
  "sort": 0,
  "parent_id": 0,
  "events_count": 7
}
```

## 活动分类列表

```http request
GET /event-categories
```
查询参数：

| 参数 | 类型 | 描述 |
|----|----|----|
| `keyword` | `string` | **可选**, 对活动名称进行搜索 |
| `offset` | `string` | **可选**, 数据偏移量 |
| `limit` | `string` | **可选**, 分页量 |
| `page` | `string` | **可选**, page分页模式，与`offset`二选一 |
响应:
```
Status: 200 OK
```
> 响应内容 [[单个活动分类](event.md#活动分类数据结构)...]

## 获取单个活动分类

```http request
GET /event-categories/{event-category-id}
```
响应: 
```
Status: 200 OK
```
> 响应体： 响应内容 [单个活动分类](event.md#活动分类数据结构)

