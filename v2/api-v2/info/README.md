---
sidebarDepth: 3
title: 资讯
---

# 资讯模块APIs文档

## 资讯分类

### 获取单个资讯分类

```
GET /api/v2/info/categories/{category.id}
```

请求查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `count_by_author_id` | `string` | **可选**，作者用户ID，统计该作者在每个分类下的资讯数量 |

响应：

```
Status: 200 OK
```
```json5
{
    "id": 1,                 // 分类ID
    "name": "分类一",        // 分类名称
    "icon": { /* 图片信息 */ },
    "sort": 0,               // 排序字段
    "published_count": 3,    // 已发布的资讯总数
    "trashed_count": 1,      // 已下架/软删除的资讯数
    "infos_count": 5,        // 资讯总数
    "created_at": "2019-04-16 09:25:48",
    "updated_at": "2019-04-16 09:51:32",
    "deleted_at": "2019-04-16 09:51:32", // 分类删除标识
    "author_published_count": 3,     // 指定作者已发布的资讯总数
    "author_trashed_count": 1,       // 指定作者已下架/软删除的资讯数
    "author_infos_count": 5,         // 指定作者资讯总数
    "count_by_author_id": 1          // 客户端给的作者用户ID
}
```

### 获取资讯分类列表

```
GET /api/v2/info/categories
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `trashed` | `string` | **可选**，默认`without`，选项：<br>`without`不包括已删除分类，<br>`with`包括已删除分类<br>`only`·仅已删除的分类 |
| `count_by_author_id` | `string` | **可选**，作者用户ID，统计该作者在每个分类下的资讯数量 |

响应：

```
Status: 200 OK
```
```json5
[
    { /* 分类数据 */ },
    { /* 分类数据 */ }
]
```

### 添加资讯分类

> 资讯分类只有拥有 `infos:admin` 权限的用户才能创建

```
POST /api/v2/infos/categories
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **必须**，分类名称，不能重复，最大长度24（GB18030长度） |
| `icon` | `string` | **可选**，分类图标的 storage none |
| `sort` | `integer` | **必须**，排序值，越大越靠前 |

响应：

```
Status: 201 Created
```
```json5
{ /* 分类数据 */ }
```

### 修改资讯分类

> 资讯分类只有拥有 `infos:admin` 权限的用户才能更改

```
PUT|PATCH /api/v2/info/categories/{category.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **可选**，分类名称，不能重复，最大长度24（GB18030长度） |
| `icon` | `string` | **可选**，分类图标的 storage none |
| `sort` | `integer` | **可选**，排序值，越大越靠前 |
| `deleted` | `boolean` | **可选**，软删除/恢复分类 |

响应：

```
Status: 200 OK
```
```json5
{ /* 分类数据 */ }
```

### 删除资讯分类

> 资讯分类只有拥有 `info:admin` 权限的用户才能删除，且infos_count>0时禁止删除

```
DELETE /api/v2/info/categories/{category.id}
```

响应：

```
Status: 204 No Content
```

## 资讯

### 获取单个资讯
```
GET /api/v2/infos/{info.id}
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `with` | `string,array<string>` | **可选**，需要返回的关联数据，可选：`author`,`author.verification`,`category` |

响应：

```
Status: 200 OK
```

```json5
{
    "id": 1,
    "author_id": 7,   // 资讯作者的用户ID
    "category_id": 2, // 所属分类ID
    "title": "标题",
    "summary": "文字摘要",
    "content": "资讯内容", // 富文本内容
    "content_medias": [ // 资讯内容中的媒体信息
      {"image": { /* 图片信息 */ }, "video": { /* 视频信息 */ }}
    ],
     //  自动提取 content_medias 中的信息，用于列表显示图片或者视频
     //  资讯内容中的媒体（视频）信息
     //  medias 字段 服务器过滤数据规则
     //  1. 过滤掉长宽都小于 125px 的图片
     //  2. 有视频的就只返回第一个视频；
     //  3. 图片超过3个的就返回3个；
     //  4. 有图片的，图片小于3张的返回一个张
     //  否则没有 medias 这个字段，
    "medias": [ 
      {"image": { /* 图片信息 */ }, "video": { /* 视频信息 */ }}
    ],
    "views_count": 3,     // 浏览量
    "likes_count": 0,     // 点赞数量
    "favorites_count": 0, // 收藏数量
    "comments_count": 0,  // 评论数量
    "shares_count": 0,    // 分享数量
    "recommend_at": "2019-07-26 03:43:49",       // 推荐资讯
    "topped_at": "2019-07-26 03:43:49",          // 全局置顶
    "category_topped_at": "2019-07-26 03:43:49", // 分类置顶
    "created_at": "2019-07-26 03:43:49",         // 创建时间
    "updated_at": "2019-07-26 03:43:49",         // 更新时间
    "deleted_at": "2019-07-26 03:43:49",         // 删除标识
    "liked": false,       // 附加字段，当前用户是否已点赞
    "favorited": false,   // 附加字段, 当前用户是否已收藏
    "author": {/* 用户数据 */},   // 关系字段，资讯作者的用户信息
    "category": { /* 分类数据 */} // 关系字段，资讯所属的分类
}
```

### 获取资讯列表

```
GET /api/v2/infos
```

请求查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `id` | `integer,string` | **可选**，资讯ID，多个逗号分隔 |
| `author_id` | `integer,string` | **可选**，作者用户ID，不提供则查询全部用户，多个逗号分隔 |
| `category_id` | `integer,string` | **可选**，分类ID，不提供则查询全部分类，多个逗号分隔 |
| `trashed` | `string` | **可选**，默认`without`，选项：<br>`without`不包括已删除的资讯<br>`with`包括已删除的资讯<br>`only`·仅已删除的资讯 |
| `recommend` | `integer` | **可选**，查询推荐状态，默认不限，选项：0,1 |
| `keyword` | `string` | **可选**，查询关键字，仅在标题中搜索 |
| `liked` | `string` | **可选**，无默认值，选项：<br>`check`返回列表中包含`liked`字段表示点赞状态 |
| `favorited` | `string` | **可选**，无默认值，选项：<br>`check`返回列表中包含`favorited`字段表示收藏状态 |
| `list_type` | `string` | **可选**，无默认值，选项：<br>`only_liked`仅返回已点赞的资讯<br>`only_favorited`仅返回已收藏的资讯 |
| `offset` | `integer` | **可选**，本地已有加载数据数量 |
| `limit` | `integer` | **可选**，获取条数，默认15 |
| `order` | `string` | **可选**，排序，多个逗号分隔；支持的排序字段：<br>id, views_count, likes_count, favorites_count, <br>comments_count, shares_count, recommend_at, topped_at, <br>category_topped_at, created_at, updated_at, deleted_at<br>如：topped_at desc,created desc |
| `page` | `integer` | **可选**，第几页，如果有此参数，则返回分页模式的数据 |
| `with` | `string,array<string>` | **可选**，需要返回的关联数据，可选：`author`,`author.verification`,`category` |

响应：

```
Status: 200 OK
```
```json5
[
  {/* 单个资讯信息 */},
  {/* 单个资讯信息 */}
]
```

### 添加资讯

> 有 `infos:admin` 权限的用户才可以为添加资讯

```
POST /api/v2/infos
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `author_id` | `integer` | **可选**，作者用户ID，默认当前用户 |
| `category_id` | `integer` | **必须**，资讯所属分类ID |
| `title` | `string` | **必须**，资讯标题，最大长度60（GB18030长度） |
| `summary` | `string` | **可选**，资讯摘要，最大长度160个字符 |
| `content` | `string` | **必须**，资讯内容，65000个字节以内 |
| `content_medias` | `array` | **可选**，资讯内容中的媒体（图片、视频），必须是一个数组，0~100个元素 |
| `content_medias.*` | `object` | **必须**，图片或视频，必须一个键值对 |
| `content_medias.*.image` | `string` | **必须**，图片的 storage node |
| `content_medias.*.video` | `string` | **可选**，视频的 storage node |
| `recommend` | `boolean` | **可选**，是否推荐资讯，需要权限`infos:admin` |
| `topped` | `boolean` | **可选**，是否全局置顶资讯，需要权限`infos:admin` |
| `category_topped` | `boolean` | **可选**，是否分类置顶资讯，需要权限`infos:admin` |

响应：

```
Status: 201 Created
```
```json5
{
    /* 响应字段和获取单个资讯一致，但不包括附加字段和关系字段 */
}
```

### 修改资讯
> 普通用户只能修改自己的资讯，有 `infos:admin` 权限的用户可以更新任何人的资讯

```
PATCH /api/v2/infos/{info.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `author_id` | `integer` | **可选**，作者用户ID，默认当前用户 |
| `category_id` | `integer` | **可选**，资讯所属分类ID |
| `title` | `string` | **可选**，资讯标题，最大长度60（GB18030长度） |
| `summary` | `string` | **可选**，资讯摘要，最大长度160个字符 |
| `content` | `string` | **可选**，资讯内容，65000个字节以内 |
| `content_medias` | `array` | **可选**，资讯内容中的媒体（图片、视频），必须是一个数组，0~100个元素 |
| `content_medias.*` | `object` | **必须**，图片或视频，必须一个键值对 |
| `content_medias.*.image` | `string` | **必须**，图片的 storage node |
| `content_medias.*.video` | `string` | **可选**，视频的 storage node |
| `recommend` | `boolean` | **可选**，是否推荐资讯，需要权限`infos:admin` |
| `topped` | `boolean` | **可选**，是否全局置顶资讯，需要权限`infos:admin` |
| `category_topped` | `boolean` | **可选**，是否分类置顶资讯，需要权限`infos:admin` |
| `deleted` | `boolean` | **可选**，资讯删除状态，需要权限 |

响应：

```
Status: 200 OK
```
```json5
{
    /* 响应字段和获取单个资讯一致，但不包括附加字段和关系字段 */
}
```

### 删除资讯

> 普通用户只删除自己创建的资讯，有 `infos:admin` 权限的用户可以删除任何人的资讯；删除资讯将同时删除点赞，收藏，评论关系绑定

```
DELETE /api/v2/infos/{info.id}
```

响应：

```
Status: 204 No Content
```

### 点赞资讯

```
PUT|PATCH /api/v2/infos/{info.id}/like
```

响应：

```
Status: 204 No Content
```

### 取消点赞资讯

```
DELETE /api/v2/infos/{info.id}/like
```

响应：

```
Status: 204 No Content
```

### 收藏资讯

```
PUT|PATCH /api/v2/infos/{info.id}/favorite
```

响应：

```
Status: 204 No Content
```

### 取消收藏资讯

```
DELETE /api/v2/infos/{info.id}/favorite
```

响应：

```
Status: 204 No Content
```

### 分享资讯

```
PUT /api/v2/infos/{info.id}/hit-share
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

### 发布资讯评论
> 发布资讯评论调用发布动态的接口，其中 `repostable_type` 设置为 `infos`，`repostable_id` 设置要评论的资讯ID。

> 服务端返回动态数据时，会附加 `repostable`(关联数据) `repostable_type`(关联数据的类型) `repostable_id`(关联数据的ID)三个字段。

### 获取资讯评论

获取指定资讯评论
```
GET /api/v2/infos/{info.id}/comments
```
获取全部资讯评论
```
GET /api/v2/info/comments
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
