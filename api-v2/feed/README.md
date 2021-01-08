---
sidebarDepth: 4
title: 动态
---

# 动态APIs文档

## 数据结构

<details>
<summary>点击查看完整数据结构，有些非必要字段实际情况为空则不会返回</summary>

<summary>

| 名称 |	类型	|  描述   |
|:-----:|:----:|:----:|
| id	| int	| 动态数据id | 
| user_id | 	int	 | 发布者id | 
| user	| object	| 发布者用户信息  | 
| feed_content	| string	| 动态内容  | 
| feed_from	| int	| 动态来源 | 1:pc 2:h5 3:ios 4:android 5:其他  | 
| theme	| object	|  话题信息 | 
| categories	| Array	| 动态被推荐到的分类数据信息 | 
| like_count	| int	| 点赞数  | 
| feed_view_count  | 	int  | 	查看数 | 
| feed_comment_count	| int	| 评论数 | 
| feed_latitude	| string	| 纬度   | 
| feed_longtitude | 	string	|  经度  | 
| feed_geohash	| string | 	GEO  | 
| feed_mark	|  int  | 	标记  | 
| has_collect	  | bool	|  是否已收藏  | 
| has_like	|  bool  | 	是否已赞  | 
| images	| array	 | 图片信息 同单条动态数据结构一致  | 
| topics	|  Array	| 圈子信息  | 
| repostable_type	| String	| 携带资源标识：商品`mall_commodities`知识`knowledge`资讯`info`活动`event`问答`wenda`  | 
| repostable_id	| int	| 资源id  | 
| repostable	| object	| 具体的资源数据，需要根据资源类型进行解析  | 
| created_at	| String	| 发布时间  | 
| deleted_at	| String	| 删除时间 | 
| recommended_at	| String	| 设置推荐的时间  | 


```json5
{
    "id": 2,
    "user_id": 1,
    "feed_content": "第一条带图片的动态",
    "feed_from": 5,
    "like_count": 0,
    "feed_view_count": 18,
    "feed_comment_count": 0,
    "feed_mark": 2,
    "repostable_type": null,
    "repostable_id": 0,
    "hot": 17,
    "images": [
        {
            "url": "http://127.0.0.1:8000/storage/public:MjAxOC8xMC8xMi9hdDVFOGdiak1ZRk9JdEw5cmJUaDRCRXVLQXdGajg1R3FieGpCNWRlWnJNaEU5OGdLNlNUYnRCamVJQ3Zoa0h1LmpwZw==",
            "vendor": "local",
            "mime": "image/jpeg",
            "size": 802930,
            "dimension": {
                "width": 2800,
                "height": 1867
            }
        }
    ],
    "video": {
        "resource": {
            "url": "http://127.0.0.1:8000/storage/public:MjAxOC8xMC8xMi9hdDVFOGdiak1ZRk9JdEw5cmJUaDRCRXVLQXdGajg1R3FieGpCNWRlWnJNaEU5OGdLNlNUYnRCamVJQ3Zoa0h1LmpwZw==",
            "vendor": "local",
            "mime": "image/jpeg",
            "size": 802930,
            "dimension": {
                "width": 2800,
                "height": 1867
            }
        },
        "cover": {
            "url": "http://127.0.0.1:8000/storage/public:MjAxOC8xMC8xMi9hdDVFOGdiak1ZRk9JdEw5cmJUaDRCRXVLQXdGajg1R3FieGpCNWRlWnJNaEU5OGdLNlNUYnRCamVJQ3Zoa0h1LmpwZw==",
            "vendor": "local",
            "mime": "image/jpeg",
            "size": 802930,
            "dimension": {
                "width": 2800,
                "height": 1867
            }
        }
    },
    "recommended_at": null,
    "created_at": "2018-10-12 08:05:39",
    "updated_at": "2018-10-12 09:15:19",
    "deleted_at": null,
    "has_collect": false,
    "has_like": false,
    "reward": {
        "count": 0,
        "amount": null
    },
    "topics": [
        {
            "id": 2,
            "name": "三月",
            "pivot": {
                "feed_id": 2,
                "topic_id": 2
            }
        }
    ],
    "user": {
        "id": 1,
        "name": "root",
        "bio": null,
        "sex": 0,
        "location": null,
        "avatar": null,
        "bg": null,
        "email_verified_at": null,
        "phone_verified_at": null,
        "feed_topics_count": 3,
        "created_at": "2018-10-12 01:45:02",
        "updated_at": "2018-10-12 09:01:10",
        "deleted_at": null,
        "verified": null,
        "extra": {
            "user_id": 1,
            "likes_count": 0,
            "comments_count": 0,
            "followers_count": 0,
            "followings_count": 0,
            "updated_at": "2018-10-12 08:05:39",
            "feeds_count": 2,
            "checkin_count": 0,
            "last_checkin_count": 0
        }
    }
}
```
</details>

## 发布动态

```
POST /api/v2/feeds
```

传输内容参数：

```json5
{
	"images": [ // 可选，图片数据，array
		"public:2018/10/12/at5E8gbjMYFOItL9rbTh4BEuKAwFj85GqbxjB5deZrMhE98gK6STbtBjeICvhkHu.jpg"
	],
	"video": { // 可选，视频数据， object
		"resource": "public:2018/10/12/at5E8gbjMYFOItL9rbTh4BEuKAwFj85GqbxjB5deZrMhE98gK6STbtBjeICvhkHu.jpg", // 视频 文件 node 节点
		"cover": "public:2018/10/12/at5E8gbjMYFOItL9rbTh4BEuKAwFj85GqbxjB5deZrMhE98gK6STbtBjeICvhkHu.jpg" // 缩略图文件 node 节点
	},
	"feed_content": "第一条带图片的动态", // 动态内容
	"feed_from": 5, // 客户端标识，与原动态保持不变
	"feed_mark": 2, // 与原动态保持不变
	"topics": [2] // 与原动态保持不变
}
```

响应：与原动态保持不变



## 删除动态

```
DELETE  /api/v2/feeds/:feed/currency
```

响应：

```
Status: 204 No Content
```

##  获取动态

### 单条

```
GET  /api/v2/feeds/:feed
```

响应：

```
Status: 201
```
```json
{
 动态信息
}

```

### 批量

#### 常规动态列表

```
GET  /api/v2/feeds
```

参数：

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| limit | Integer | 可选，默认值 15 ，获取条数 |
| after | Integer | 可选，上次获取到数据最后一条 ID，用于获取该 ID 之后的数据。 |
| type | String | 可选，默认值 new，可选值 `new` 、`hot` 、 `newFollow` 、`users` |
| search | String | type = `new`时可选，搜索关键字 |
| user | Integer | type = `users` 时可选，默认值为当前用户id |
| `id` | `integer` or `string` | **可选**，按照动态 ID 获取动态列表。 `,` 进行分割；如果存在本参数，除了 direction 外，其他参数均失效。 |
| `hot` | `integer` | **可选，仅 `type=hot` 时有效**，用于热门数据翻页标记！上次获取数据最后一条的 `hot` 值 |
| only_video | int | 可选，，固定值 1 则仅返回视频动态 |
| recommended_at | String | 可选，上次获取列表最后的 recommended_at 值。 |
| theme | String | 可选，话题id。 |


响应：

```
Status: 200
```
```json
[
{
 动态信息
}
]
```





## 动态推荐分类

### 获取全部分类

```
GET /api/v2/feed/categories
```

响应：

```
Status: 200 OK
```
```json
[
    {
        "id":5,
        "name":"哈哈哈",
        "feeds_count":0,
        "created_at":"2018-12-06T09:22:29Z"
    }
]
```

### 推荐动态到分类

推荐至
```
PUT feeds/{feed}/pushed-categories
```

输入：

```json
[
    1,
    2
]
```
> 输入传输一份 json 的数组到 body 给服务器，服务器会自动处理！

取消推荐
```
DELETE feed/categories/{category}/feeds/{feed}
```

响应：

```
Status: 204 No Content
```

### 分类下的动态

```
GET feed/categories/{category}/feeds
```

查询参数：

| 名称 | 描述 |
|:----:|:----:|
| `limit` | 本次请求的数量 |
| `after` | 上次请求最小的 `index` 值 |

响应：

```
Status: 200 OK
```
```json
[
    {
        "id":4,
        "user_id":1,
        "user":{
            "id":1,
            "name":"root",
            "bio":null,
            "sex":0,
            "location":null,
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
        },
        "topics":[

        ],
        "feed_content":"测试默认话21",
        "feed_from":5,
        "like_count":0,
        "feed_view_count":4,
        "feed_comment_count":0,
        "hot":4,
        "images":null,
        "video":null,
        "created_at":"2018-11-16T07:39:55Z",
        "index":1
    }
]
```

## 打赏动态

```
POST /api/v2/feeds/:feedId/rewards
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
