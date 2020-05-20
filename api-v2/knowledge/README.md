# 知识模块APIs文档

## 知识模块配置
> 知识模块配置在启动接口中返回`knowledge`，配置详情如下：
```json5
{
  // 成为作者的条件、对作者的定义，可选:
  // verification 表示认证用户即为作者
  // ability 表示需要具有特定权限的用户为作者
  "author": "verification",
  // 当author=ability时需要检查的权限名称
  "ability_name": "knowledge:author",
  // 当author=verification允许的认证类型
  // 多个类型配置在一个数组列表中，允许全部为 null
  "allow_v10n_types": null,
  // 知识定价政策，可选：
  // price 仅价格，积分只能设置0
  // score 仅积分，价格只能设置0
  // both  需要同时设置价格和积分
  "pricing_policy": "both",
  // 如果 pricing_policy=both 则配置积分所占百分比
  "score_min_percent": 0,
  // 浮点数，用户下单后平台对金额的抽成比例
  "amount_tax_rate": 0,
  // 浮点数，用户下单后平台对积分的抽成比例
  "score_tax_rate": 0
}
```

### 单独获取知识模块配置
```
GET /api/v2/knowledge/configs
```

响应：

```
Status: 200 OK
```
```json5
{
  /* 配置信息看“知识模块配置” */
}
```

### 修改知识模块配置
> 修改知识模块配置需要权限`knowledge:admin`

```
PUT /api/v2/knowledge/configs
```

请求参数，[知识模块配置](#知识模块配置)

响应：

```
Status: 200 OK
```
```json5
{
  "message": "保存成功",
}
```

## 知识分类

### 获取单个知识分类

```
GET /api/v2/knowledge/categories/{category.id}
```

请求查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `count_by_author_id` | `string` | **可选**，作者用户ID，统计该作者在每个分类下的知识数量 |

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
    "unpublished_count": 1,  // 未发布的知识总数
    "published_count": 3,    // 已发布的知识总数
    "trashed_count": 1,      // 已下架/软删除的知识数
    "knowledge_count": 5,    // 知识总数
    "created_at": "2019-04-16 09:25:48",
    "updated_at": "2019-04-16 09:51:32",
    "deleted_at": "2019-04-16 09:51:32", // 分类删除标识
    "author_unpublished_count": 3,   // 指定作者未发布的知识总数
    "author_published_count": 3,     // 指定作者已发布的知识总数
    "author_trashed_count": 1,       // 指定作者已下架/软删除的知识数
    "author_knowledge_count": 5,     // 指定作者知识总数
    "count_by_author_id": 1          // 客户端给的作者用户ID
}
```

### 获取知识分类列表

```
GET /api/v2/knowledge/categories
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `trashed` | `string` | **可选**，默认`without`，选项：<br>`without`不包括已删除分类，<br>`with`包括已删除分类<br>`only`·仅已删除的分类 |
| `count_by_author_id` | `string` | **可选**，作者用户ID，统计该作者在每个分类下的知识数量 |

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

### 添加知识分类

> 知识分类只有拥有 `knowledge:admin` 权限的用户才能创建

```
POST /api/v2/knowledge/categories
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **必须**，分类名称，不能重复，最大长度24（GB18030长度） |
| `sort` | `integer` | **必须**，排序值，越大越靠前 |

响应：

```
Status: 201 Created
```
```json5
{ /* 分类数据 */ }
```

### 修改知识分类

> 知识分类只有拥有 `knowledge:admin` 权限的用户才能更改

```
PUT|PATCH /api/v2/knowledge/categories/{category.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **可选**，分类名称，不能重复，最大长度24（GB18030长度） |
| `sort` | `integer` | **可选**，排序值，越大越靠前 |
| `deleted` | `boolean` | **可选**，软删除/恢复分类 |

响应：

```
Status: 200 OK
```
```json5
{ /* 分类数据 */ }
```

### 删除知识分类

> 知识分类只有拥有 `knowledge:admin` 权限的用户才能删除，且knowledge_count>0时禁止删除

```
DELETE /api/v2/knowledge/categories/{category.id}
```

响应：

```
Status: 204 No Content
```

## 知识

### 获取单个知识
```
GET /api/v2/knowledge/{knowledge.id}
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
    "author_id": 7,   // 知识作者的用户ID
    "category_id": 2, // 所属分类ID
    "cover": {/* 文件信息 */},
    "title": "标题",
    "subtitle": "副标题",
    "intro": "简介",
    "price": 50,    // 人民币价格
    "score": 1500,  // + 积分价格
    "chapters_enabled": true,   // 是否启用章节
    "free_content": "免费内容", // 免费内容，当chapters_enabled=false
    "paid_content": "付费内容", // 付费内容，当chapters_enabled=false
    "views_count": 3,    // 浏览量
    "likes_count": 0,    // 收藏数量
    "orders_count": 0,   // 订单数量
    "comments_count": 0, // 点评数量
    "chapters_count": 0, // 章节总数量
    "chapters_pub_count": 0, // 已发布章节数量
    "chapters_unpub_count": 0, // 未发布章节数量
    "status": 0, // 状态 0未发布 1已发布 2已下架
    "topped_at": "2019-07-26 03:43:49",          // 全局置顶
    "author_topped_at": "2019-07-26 03:43:49",   // 作者置顶
    "category_topped_at": "2019-07-26 03:43:49", // 分类置顶
    "created_at": "2019-07-26 03:43:49",         // 创建时间
    "updated_at": "2019-07-26 03:43:49",         // 更新时间
    "liked": false,       // 附加字段，当前用户是否已收藏
    "purchased": false,   // 附加字段, 当前用户是否已购买
    "can_comment": false, // 附加字段，当前用户是否可点评
    "has_paid_content": false, // 附加字段，是否有付费内容，当chapters_enabled=false
    "author": {/* 用户数据 */},   // 关系字段，知识作者的用户信息
    "category": { /* 分类数据 */} // 关系字段，知识所属的分类
}
```

### 获取知识列表

```
GET /api/v2/knowledge
```

请求查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `id` | `integer,string` | **可选**，知识ID，多个逗号分隔 |
| `author_id` | `integer,string` | **可选**，作者用户ID，不提供则查询全部用户，多个逗号分隔 |
| `category_id` | `integer,string` | **可选**，分类ID，不提供则查询全部分类，多个逗号分隔 |
| `status` | `integer,string` | **可选**，状态，0 未发布 1 已发布 2 已下架，默认全部，多个逗号分隔 |
| `min_price` | `integer` | **可选**，最低价格 |
| `max_price` | `integer` | **可选**，最高价格 |
| `min_score` | `integer` | **可选**，最低积分 |
| `max_score` | `integer` | **可选**，最高积分 |
| `keyword` | `string` | **可选**，查询关键字，仅在标题和苏标题中搜索 |
| `liked` | `string` | **可选**，无默认值，选项：<br>`check`返回列表中包含`liked`字段表示收藏状态<br>`only`仅查询自己已收藏的知识 |
| `offset` | `integer` | **可选**，本地已有加载数据数量 |
| `limit` | `integer` | **可选**，获取条数，默认15 |
| `order` | `string` | **可选**，排序，多个逗号分隔；支持的排序字段：<br>id, price, score, views_count, likes_count, orders_count, comments_count,<br>topped_at, author_topped_at, category_topped_at, created_at, updated_at<br><br>如：topped_at desc,updated_at desc |
| `page` | `integer` | **可选**，第几页，如果有此参数，则返回分页模式的数据 |
| `with` | `string,array<string>` | **可选**，需要返回的关联数据，可选：`author`,`author.verification`,`category` |

响应：

```
Status: 200 OK
```
```json5
[
  {/* 单个知识信息 */},
  {/* 单个知识信息 */}
]
```

### 添加知识

> 普通用户只有认证后或拥有指定用户权限才能添加知识，有 `knowledge:admin` 权限的用户可以为任何人创建知识

```
POST /api/v2/knowledge
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `author_id` | `integer` | **可选**，作者用户ID |
| `category_id` | `integer` | **必须**，知识所属分类ID |
| `cover` | `string` | **必须**，知识封面的 storage node，128个字符以内 |
| `title` | `string` | **必须**，知识标题，最大长度60（GB18030长度） |
| `subtitle` | `string` | **可选**，知识副标题，最大长度60（GB18030长度） |
| `intro` | `string` | **可选**，知识简介，160个字符以内 |
| `price` | `integer` | **必须**，知识售价，单位`分` ，没有则设置`0` |
| `score` | `integer` | **必须**，购买所需积分数量，没有则设置`0`  |
| `chapters_enabled` | `boolean` | **必须**，是否启用章节结构 |
| `free_content` | `string` | **可选**，如果没有启用章节结构，则可以输入单篇文章中免费内容，65000个字节以内 |
| `paid_content` | `string` | **可选**，如果没有启用章节结构，则可以输入单篇文章中支付后可查看的内容，65000个字节以内 |
| `status` | `integer` | **必须**，知识状态，选项 0未发布 1已发布 2已下架  |
| `topped` | `boolean` | **可选**，是否全局置顶知识，需要权限`knowledge:admin` |
| `category_topped` | `boolean` | **可选**，是否分类置顶知识，需要权限`knowledge:admin` |
| `author_topped` | `boolean` | **可选**，是否作者置顶知识 |

响应：

```
Status: 201 Created
```
```json5
{
    /* 响应字段和获取单个知识一致，但不包括附加字段和关系字段 */
}
```

### 修改知识
> 普通用户只有认证后或拥有指定用户权限才能更新自己创建的知识，有 `knowledge:admin` 权限的用户可以更新任何人的知识

```
PATCH /api/v2/knowledge/{knowledge.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `author_id` | `integer` | **可选**，作者用户ID |
| `category_id` | `integer` | **可选**，知识所属分类ID |
| `cover` | `string` | **可选**，知识封面的 storage node，128个字符以内 |
| `title` | `string` | **可选**，知识标题，最大长度60（GB18030长度） |
| `subtitle` | `string` | **可选**，知识副标题，最大长度60（GB18030长度） |
| `intro` | `string` | **可选**，知识简介，160个字符以内 |
| `price` | `integer` | **可选**，知识售价，单位`分` ，没有则设置`0` |
| `score` | `integer` | **可选**，购买所需积分数量，没有则设置`0`  |
| `chapters_enabled` | `boolean` | **可选**，是否启用章节结构 |
| `free_content` | `string` | **可选**，如果没有启用章节结构，则可以输入单篇文章中免费内容，65000个字节以内 |
| `paid_content` | `string` | **可选**，如果没有启用章节结构，则可以输入单篇文章中支付后可查看的内容，65000个字节以内 |
| `status` | `integer` | **可选**，知识状态，选项 0未发布 1已发布 2已下架  |
| `topped` | `boolean` | **可选**，是否全局置顶知识，需要权限`knowledge:admin` |
| `category_topped` | `boolean` | **可选**，是否分类置顶知识，需要权限`knowledge:admin` |
| `author_topped` | `boolean` | **可选**，是否作者置顶知识 |

响应：

```
Status: 200 OK
```
```json5
{
    /* 响应字段和获取单个知识一致，但不包括附加字段和关系字段 */
}
```

### 删除知识

> 普通用户只有认证后或拥有指定权限才能删除自己创建的知识，有 `knowledge:admin` 权限的用户可以删除任何人的知识；如果一个知识有订单、评论、收藏则禁止删除

```
DELETE /api/v2/knowledge/{knowledge.id}
```

响应：

```
Status: 204 No Content
```

### 收藏知识
> 知识 `status!=1` 时，此知识将无法再收藏；已收藏的不受影响，但取消收藏后无法再次收藏

```
PUT|PATCH /api/v2/knowledge/{knowledge.id}/like
```

响应：

```
Status: 204 No Content
```

### 取消收藏知识

```
DELETE /api/v2/knowledge/{knowledge.id}/like
```

响应：

```
Status: 204 No Content
```


### 举报知识

```
POST /api/v2/knowledge/{knowledge.id}/reports
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `reason` | `string` | **可选**，举报原因 |

响应：

```
Status: 201 Created
```

```json5
{
  "message": ["操作成功"]
}
```

### 统计可兑换的知识数量

```
GET /api/v2/knowledge/count-convertible
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `exclude_purchased` | `integer` | **可选**，排除已购买的知识，选项 0不排除，1排序；此选项对应的功能暂未实现 |

响应：

```
Status: 200 OK
```

```json5
{
  "free_count": 0,   // 可兑换的免费知识数量
  "charge_count": 0, // 可兑换的收费知识数量
}
```

### 检查用户能否发布知识

```
GET /api/v2/knowledge/can-publish
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `user_id` | `integer` | **可选**，要查询的用户ID，不传则为当前用户 |

响应：

```
Status: 200 OK
```

```json5
{
  "can_publish": true // true表示能发布，false表示不能发布
}
```

## 知识章节

### 获取单个章节

```
GET /api/v2/knowledge/chapters/{chapter.id}
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `with` | `string,array<string>` | **可选**，需要返回的关联数据，可选：`prev`,`next`,`knowledge.author`,`knowledge.author.verification`,`knowledge.category` |

响应：

```
Status: 200 OK
```

```json5
{
    "id":1,
    "knowledge_id": 13,
    "sequence": 1, // 章节序号
    "image": { /* 图片信息 */ },
    "title": "章节标题",
    "intro": "简介",
    "free_content": "免费内容",
    "paid_content": "付费内容",
    "views_count": 3, // 浏览量
    "published": true, // 发布状态
    "created_at": "2019-07-30 08:09:56",
    "updated_at": "2019-07-30 08:09:56",
    "has_paid_content": true, // 本章节是否有收费内容
    "prev": { /* 章节数据 */ }, // 上一章
    "next": { /* 章节数据 */ }, // 下一章
    "knowledge": { /* 知识数据 */ } // 关系字段
}
```

## 获取章节列表

```
GET /api/v2/knowledge/chapters
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `knowledge_id` | `integer` | **可选**，需要查询的知识ID |
| `sequences` | `integer,array<integer>` | **可选**，需要查询的章节序号 |
| `published` | `integer` | **可选**，需要查询的发布状态 可选0,1；默认不限 |
| `offset` | `integer` | **可选**，本地已有加载数据数量 |
| `limit` | `integer` | **可选**，获取条数，最多100 |
| `page` | `integer` | **可选**，第几页，如果有此参数，则返回分页模式的数据 |
| `with` | `string,array<string>` | **可选**，需要返回的关联数据，可选：`knowledge`,`knowledge.author`,`knowledge.author.verification`,`knowledge.category` |

响应：

```
Status: 200 OK
```
```json5
[
  { /* 单个章节数据 */ },
  { /* 单个章节数据 */ },
]
```

### 添加章节

> 普通作者只能给自己的知识添加章节，有 `knowledge:admin` 权限的用户可以为任何知识添加章节

```
POST /api/v2/knowledge/chapters
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `knowledge_id` | `integer` | **必须**，知识ID，需要chapters_enabled=true |
| `image` | `string` | **可选**，章节图片 storage node，128个字符以内 |
| `title` | `string` | **必须**，章节标题，最大长度60（GB18030长度） |
| `intro` | `string` | **可选**，章节简介，160个字符以内 |
| `free_content` | `string` | **可选**，章节中免费内容，65000个字节以内 |
| `paid_content` | `string` | **可选**，章节中支付后可查看的内容，65000个字节以内 |
| `published` | `boolean` | **必须**，章节发布状态，true发布，false未发布 |

响应：

```
Status: 201 Created
```
```json5
{
    /* 响应字段和获取单个章节一致，但不包括附加字段和关系字段 */
}
```

### 修改章节

> 普通作者只能修改自己发布的章节，有 `knowledge:admin` 权限的用户修改任何章节

```
PUT|PATCH /api/v2/knowledge/chapters/{chapter.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `image` | `string` | **可选**，章节图片 storage node，128个字符以内 |
| `title` | `string` | **可选**，章节标题，最大长度60（GB18030长度） |
| `intro` | `string` | **可选**，章节简介，160个字符以内 |
| `free_content` | `string` | **可选**，章节中免费内容，65000个字节以内 |
| `paid_content` | `string` | **可选**，章节中支付后可查看的内容，65000个字节以内 |
| `published` | `boolean` | **可选**，章节发布状态，true发布，false未发布 |

响应：

```
Status: 200 OK
```
```json5
{
    /* 响应字段和获取单个章节一致，但不包括附加字段和关系字段 */
}
```

### 删除章节

```
DELETE /api/v2/knowledge/chapters/{chapter.id}
```

响应：

```
Status: 204 No Content
```

### 举报章节

```
POST /api/v2/knowledge/chapters/{chapter.id}/reports
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `reason` | `string` | **可选**，举报原因 |

响应：

```
Status: 201 Created
```

```json5
{
  "message": ["操作成功"]
}
```

## 知识订单

> 未支付的知识订单服务器将会定期清除，一般仅保留1~2小时

### 创建知识订单

```
POST /api/v2/knowledge/orders
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `knowledge_id` | `integer` | **必须**，要购买的知识ID |
| `pay_score` | `integer` | **可选**，使用积分支付的数量，范围0~knowledge.score，默认最大值 |
| `pay_method` | `string` | **可选**，支付方法，余额和积分无法完成支付时必传，可选值：<br>`Alipay_AopApp` 支付宝APP支付<br>`Alipay_AopWap` 支付宝H5网页支付<br>`Alipay_AopPage` 支付宝PC网页支付<br>`WechatPay_App` 微信APP支付<br>`WechatPay_Js` 微信小程序、公众号支付 |
| `pay_balance` | `integer` | **可选**，使用钱包余额支付的金额 |
| `user_remark` | `string` | **可选**，用户对此订单的备注，最长150个字符 |
| `address_id` | `integer` | **可选**，收货地址ID，必须是当前用户收货地址 |
| `address` | `object` | **可选**，自定义的收货地址，如果提供此参数则忽略`address_id`参数 |
| `address.name` | `string` | **必须**，收货人姓名 |
| `address.phone` | `string` | **必须**，手机号码 |
| `address.province` | `string` | **可选**，所在省份 |
| `address.city` | `string` | **可选**，所在城市 |
| `address.county` | `string` | **可选**，所在区县 |
| `address.detail` | `string` | **必须**，详细地址 |
| `address.postcode` | `string` | **可选**，邮政编码 |
| `redirect_url` | `string` | **可选**，当`pay_method=Alipay_AopWap/Alipay_AopPage`时支付完成后的重定向URL，最长256个字符 |
| `openid` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前用户的openid |
| `appid` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前的appid |
| `app_type` | `string` | **可选**，当`pay_method=WechatPay_Js`时需提供当前的APP类型，可选 app:公众号 micro:小程序，提供了此参数且没提供appid，系统将读取配置中的appid |

响应：

```
Status: 201 OK
```

```json5
{
    "id": 46,
    "user_id": 1,        // 订单所有者用户ID
    "knowledge_id": 1,   // 购买的知识ID
    "author_id": 2,      // 店主用户ID
    "total_score": 1,    // 订单积分总额
    "author_score": 1,   // 订单积分（作者应得部分）
    "tax_score": 0,      // 订单积分（平台抽取部分）
    "total_amount": 100, // 订单总金额（单位：分）
    "author_amount": 100,// 订单金额（作者应得部分）
    "tax_amount": 0,     // 订单金额（平台抽取部分）
    "pay_balance": 100,  // 使用余额支付的金额
    "pay_amount": 0,     // 使用第三方支付支付的金额
    "address": {         // 订单收货地址
        "name": "姓名",
        "phone": "18888888888",
        "province": "四川省",
        "city": "成都市",
        "county": "高新区",
        "detail": "XXXXX号",
        "postcode": "610000"
    },
    "trade_no": "xxxxxx", // pay_method不为None时才有订单号
    "pay_method": "None", // 订单支付方式，如果用余额全额支付则为None，否则为传入的值
    "pay_data": "",  // pay_method不为None时才有，用于第三方支付的数据，可能是任何数据类型。
    "pay_status": 2, // 支付状态 0未支付、1已支付，但处理失败（三方平台支付的金额已充值到余额），2已支持且处理购买逻辑成功
    "paid_at": "2019-04-25 09:20:13", // 订单支付后才有此标识
    "updated_at": "2019-04-25 09:20:13",
    "created_at": "2019-04-25 09:20:13",
}
```

### 修改订单信息

```
PATCH /api/v2/knowledge/orders/{order.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `user_remark` | `string` | **可选**，用户备注，仅用户可修改，最长150个字符 |
| `author_remark` | `string` | **可选**，作者备注，仅作者可修改，最长150个字符 |
| `user_deleted` | `boolean` | **可选**，设置用户端订单删除状态，仅用户可修改 |
| `author_deleted` | `boolean` | **可选**，设置作者端订单删除状态，仅作者可修改 |
| `last_read_cid` | `integer` | **可选**，设置用户最后阅读的章节ID |

响应：

```
Status: 200 OK
```

```json5
{ /* 订单数据 */ }
```

### 获取单个订单

```
GET /api/v2/knowledge/orders/{order.id}
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `with` | `string,array<string>` | **可选**，需要返回的关联数据，可选：`knowledge`,`knowledge.category`,`user`,`user.verification`,`author`,`author.verification`,`last_read_chapter` |

响应：

```
Status: 200 OK
```
```json5
{
    "id": 46,
    "user_id": 1,        // 订单所有者用户ID
    "knowledge_id": 1,   // 购买的知识ID
    "author_id": 2,      // 店主用户ID
    "total_score": 1,    // 订单积分总额
    "author_score": 1,   // 订单积分（作者应得部分）
    "tax_score": 0,      // 订单积分（平台抽取部分）
    "total_amount": 100, // 订单总金额（单位：分）
    "author_amount": 100,// 订单金额（作者应得部分）
    "tax_amount": 0,     // 订单金额（平台抽取部分）
    "pay_balance": 100,  // 使用余额支付的金额
    "pay_amount": 0,     // 使用第三方支付支付的金额
    "address": {         // 订单收货地址
        "name": "姓名",
        "phone": "18888888888",
        "province": "四川省",
        "city": "成都市",
        "county": "高新区",
        "detail": "XXXXX号",
        "postcode": "610000"
    },
    "trade_no": "xxxxxx", // pay_method不为None时才有订单号
    "pay_method": "None", // 订单支付方式，如果用余额全额支付则为None，否则为传入的值
    "pay_status": 2, // 支付状态 0未支付、1已支付，但处理失败（三方平台支付的金额已充值到余额），2已支持且处理购买逻辑成功
    "paid_at": "2019-04-25 09:20:13", // 订单支付后才有此标识
    "user_remark": "用户备注",
    "author_remark": "作者备注",
    "comment_id": 888, // 用户评论的FeedID
    "last_read_cid": 123, // 最后阅读的章节ID
    "updated_at": "2019-04-25 09:20:13",
    "created_at": "2019-04-25 09:20:13",
    "user_deleted_at": "2019-04-25 09:20:13", // 用户删除标识
    "author_deleted_at": "2019-04-25 09:20:13"  // 作者删除标识
}
```

### 获取订单列表

```
GET /api/v2/knowledge/orders
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `role` | `string` | **可选**，默认 `admin`，选项：<br>`admin`以管理员角色获取全部订单<br>`user`以用户角色获取自己的订单<br>`author`·以作者角色获取订单 |
| `user_id` | `integer` | **可选**，用户ID，role=admin时可用，多个用逗号分隔或数组传递 |
| `author_id` | `integer` | **可选**，作者ID，role=admin时可用，多个用逗号分隔或数组传递 |
| `user_trashed` | `string` | **可选**，role=user时可用，默认`without`，选项：<br>`without`不包括已删除的订单<br>`with`包括已删除的订单<br>`only`·仅已删除的订单 |
| `author_trashed` | `string` | **可选**，role=author时可用，默认`without`，选项：<br>`without`不包括已删除的订单<br>`with`包括已删除的订单<br>`only`·仅已删除的订单 |
| `knowledge_id` | `integer` | **可选**，知识ID，多个用逗号分隔或数组传递 |
| `pay_status` | `integer` | **可选**，订单的支付状态，选项 `0,1,2`，多个用逗号分隔或数组传递 |
| `commented` | `integer` | **可选**，订单的评论状态，选项 `0,1` |
| `start_time` | `string` | **可选**，开始时间，支持大部分时间格式，需包含时区部分 |
| `end_time` | `string` | **可选**，结束时间，支持大部分时间格式，需包含时区部分 |
| `time_key` | `string` | **可选**，时间字段名， 默认 `created_at`，还支持 `updated_at,paid_at` |
| `after` | `integer` | **可选**，本地最后一条数据的ID |
| `limit` | `integer` | **可选**，获取条数，默认15 |
| `page` | `integer` | **可选**，第几页，如果有此参数，则返回分页模式的数据 |
| `with` | `string,array<string>` | **可选**，需要返回的关联数据，可选：`knowledge`,`knowledge.category`,`user`,`user.verification`,`author`,`author.verification`,`last_read_chapter` |

响应：

```
Status: 200 OK
```
```json5
[
  {/*  单个订单数据 */},
  {/*  单个订单数据 */}
]
```

### 订单通知及消息说明
> 当一个订单支付成功后，系统将推送一条通知到作者端，通知类型`notification:selling-knowledge`。对于消息数处理都调用`user/notification*`接口。

> 未查看(处理)订单消息数，接口`GET /api/v2/user/notification-statistics` 返回结果中`badges`和`lastCreatedAts`增加了字段`selling_knowledge`，分别为新订单数量统计和最新订单的创建时间。

> 清空未查看(处理)订单消息数，接口 `PUT /api/v2/user/notifications?type=selling_knowledge`

> 配置订单消息通知，接口`PATCH /api/v2/user/notification-settings` 字段名为 `selling_knowledge`

> 获取订单消息通知的配置，接口`GET /api/v2/user/notification-settings` 字段名为 `selling_knowledge`

## 知识点评

### 发布知识点评
> 知识点评仅购买后或拥有`knowledge:commenter`权限的用户可以发布。购买后只能点评一次。

> 发布知识点评调用发布动态的接口，其中 `repostable_type` 设置为 `knowledge`，`repostable_id` 设置要点评的知识ID。
> 默认情况下，会自动选择指定知识的最早未点评的订单进行点评，如果要点评指定订单，请传入 `knowledge_order_id` 参数指定要点评的订单ID。

> 服务端返回动态数据时，会附加 `repostable`(关联数据) `repostable_type`(关联数据的类型) `repostable_id`(关联数据的ID)三个字段。

### 获取知识点评

获取指定知识点评
```
GET /api/v2/knowledge/{knowledge.id}/comments
```
获取全部知识点评
```
GET /api/v2/knowledge/comments
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `type` | `string` | **可选**，要获取的点评类型，默认全部，选项：<br>`image`仅获取带图片的点评<br>`video`仅获取带视频的点评<br>`image_or_video` 获取带图片或视频的点评 |
| `after` | `integer` | **可选**，本地最后一条数据的ID |
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