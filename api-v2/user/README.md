---
sidebarDepth: 3
title: 用户
---

# 用户相关接口

<details>
<summary>点击查看用户数据结构</summary>

用户铭感信息如：`phone`、`email` 等只有获取自己的才会返回

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| id 	|  int 	|  用户唯一标识 |
| name | String  | 用户名（唯一） |
| email | String | 用户的邮箱地址。 |
| phone | String | 用户的手机号。 |
| bio 	 | String | 用户的简介文字。 |
| sex 	 | int		 | 用户的性别 1`男` 2`女` 0`保密`。 |
| location 	 | String		 | 用户的地区，如：中国 四川省 成都市 |
| invite_code 	 | String		 | 用户的邀请码 |
| avatar 	 | String/Object	 | 用户的头像地址，来着微信的返回`String`,App的为`Object` |
| feed_topics_count 	 | int		 | 用户创建的圈子数量 |
| commodities_count	 | int		 | 用户发布商品信息 |
| extra 	 | Object		 | 用户内容数量 |
| extra.user_id 	 | int		 | 用户 id |
| extra.likes_count 	 | int		 | 被喜欢统计数 |
| extra.comments_count 	 | int		 | 用户发出的评论统计 |
| extra.followers_count 	 | int		 | 用户粉丝数 |
| extra.followings_count 	 | int		 | 用户关注数|
| extra.be_reward_count 	 | int		 | 用户被点赞所获得的积分数量 |
| extra.questions_count 	 | int		 | 用户发布的问题数量 |
| extra.answers_count 	 | int		 | 用户发布的回答数量 |
| extra.feeds_count	 | int		 | 发布的动态统计，没有安装 动态应用则不存在 |
| extra.rank	 | int		 | 用户积分排名 |
| extra.checkin_count 	 | int		 | 用户签到次数|
| extra.last_checkin_count 	 | int		 | 用户连续签到数量 |
| extra.count	 | int		 | 排行数量 如粉丝排行榜即为粉丝数 根据点赞数来排行的 则为点赞的数量 |
| verification	 | object		 | 用户认证信息 |
| currency	 | object		 | 用户积分信息 |
| wallet	 | object		 | 用户余额信息 |
| wallet.balance	 | int		 | 用户余额 |
| vip	 | object		 | 用户会员信息 |
| has_follower	 | boolean		 | 基于这条消息的用户是否被我关注了 |
| has_following	 | boolean		 | 基于这条消息的用户是否关注了我 |
| created_at	 | String		 | 用户注册时间 |
| updated_at	 | String		 | 用户更新用户信息的时间 |



```json
{
    "id":4,
    "name":"小小n",
    "email":"335891510@qq.com",
    "phone":"15694005009",
    "bio":"😒丫头子哦送送送口粮出粗放出粗粗姑姑一幅幅预付费服7仿佛根据巨富夫妇。啦啦啦。好的哦",
    "sex":2,
    "location":"四川省 成都市",
    "invite_code":"10ABC3",
    "avatar":{
        "url":"https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2021/01/05/dlZOEOmKCBaWjv3GPaAVjzU2GoRxJSF0yxldpaUZ0XxyOaBcWITz9laDAcB8OlAN.jpg",
        "vendor":"aliyun-oss",
        "mime":"image/jpeg",
        "size":315576,
        "dimension":{
            "width":720,
            "height":720
        },
        "node":"public:2021/01/05/dlZOEOmKCBaWjv3GPaAVjzU2GoRxJSF0yxldpaUZ0XxyOaBcWITz9laDAcB8OlAN.jpg"
    },
    "feed_topics_count":14,
    "extra":{
        "user_id":4,
        "likes_count":119,
        "comments_count":47,
        "followers_count":13,
        "followings_count":16,
        "updated_at":"2021-01-06T07:35:01Z",
        "feeds_count":129,
        "checkin_count":0,
        "last_checkin_count":0,
        "be_reward_count":466
    },
    "verification":{
        "type":"user",
        "state":1,
        "created_at":"2019-12-27T02:27:58Z",
        "updated_at":"2019-12-27T02:29:11Z",
        "desc":"快去快去说一下",
        "slogan":"大美女",
        "id_card":{
            "number":"510904919901010100",
            "rear":{
                "url":"https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2019/12/27/BJs15jY3aFjw8oMvaZoFIV8KJ8oBu4RyBxgmh03BsuXKppqsRgUUWtgv7WCsTYGG.jpg",
                "vendor":"aliyun-oss",
                "mime":"image/jpeg",
                "size":203022,
                "dimension":{
                    "width":1080,
                    "height":1920
                },
                "node":"public:2019/12/27/BJs15jY3aFjw8oMvaZoFIV8KJ8oBu4RyBxgmh03BsuXKppqsRgUUWtgv7WCsTYGG.jpg"
            },
            "front":{
                "url":"https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2019/12/27/7NDdvp9XCp9HugUNQ1cYTU3F4jzsjpPLr8Qc8k9E32oN4GbIZloSySFV3zKDhzeQ.jpg",
                "vendor":"aliyun-oss",
                "mime":"image/jpeg",
                "size":293000,
                "dimension":{
                    "width":1920,
                    "height":1200
                },
                "node":"public:2019/12/27/7NDdvp9XCp9HugUNQ1cYTU3F4jzsjpPLr8Qc8k9E32oN4GbIZloSySFV3zKDhzeQ.jpg"
            }
        },
        "real_name":"七夜",
        "phone_number":"15694005009",
        "user_id":4
    },
    "currency":{
        "owner_id":4,
        "type":1,
        "sum":2377
    },
    "wallet":{
        "owner_id":4,
        "balance":3902,
        "total_income":544,
        "total_expenses":800
    },
    "has_follower":false,
    "has_following":false,
    "created_at":"2019-11-20T07:32:34Z",
    "updated_at":"2021-01-05T06:20:50Z",
    "commodities_count":0,
    "vip":{
        "level":"middle",
        "end_time":"2021-02-02T13:39:31Z",
        "name":"钻石会员"
    }
}

```

</details>


## 获取获取指定用户


```
GET api/v2/users/:user
```

变量：

| 变量 | 描述 |
|:---:|:---:|
| `user` | 这个变量可以是「用户名」、「邮箱」、「手机号码」和「用户ID」 |

#### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| following | Integer | 检查请求用户是否关注了指定的用户，传递要检查的用户 ID，默认为当前登录用户。 |
| follower | Integer | 检查请求用户是否被某个用户关注，传递要检查的用户 ID，默认为当前登录用户。 |

响应:

```
Status: 200 OK
```
```json5
 {
 用户信息
 }
```



## 当前登录用户信息

```
GET /api/v2/user
```
响应:

```
Status: 200 OK
```
```json5
 {
 用户信息
 }
```

## 修改用户信息

```
PATCH /api/v2/user
```

输入:

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| name | 字符串 | 用户新的用户名。 |
| bio | 字符串 | 用户新的个人传记。 |
| sex | 数字 | 用户新的性别。 |
| location | 字符串 | 用户新的位置信息。 |
| `avatar` | `FILE_STORAGE_NODE<string>` | **可选**，用户头像的 File node 值 |
| `bg`     | `FILE_STORAGE_NODE<string>` | **可选**，用户背景图片的 File node 值 |


响应:

```
Status: 204 No Content
```

### 更新认证用户的手机号码和邮箱

```
PUT api/v2/user
```

#### 输入

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| phone | 字符串 | **如果 `email` 不存在则必须**，用户新的手机号码。 |
| email | 字符串 | **如果 `phone` 不存在则必须**，用户新的邮箱地址。 |
| verifiable_code | 字符串或者数字 | **必须**，验证码。 |

##### 响应

```
Status: 204 No Content
```

### 更新认证用户密码

```
PUT api/v2/user/password
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| old_password | 字符串 | **用户已设置密码时必须**，用户密码。 |
| password | 字符串 | **必须**，用户的新密码 |
| password_confirmation | 字符串 | **必须**，用户的新密码，必须和 `password` 一致。 |

##### 响应

```
Status: 204 No Content
```


## 用户找回密码

```
PUT api/v2/user/retrieve-password
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| verifiable_type | 枚举：`mail` 或者 `sms` | **必须**，验证码发送模式。 |
| verifiable_code | 字符串或者整数 | **必须**，用户收到的验证码。 |
| email | 字符串 | 如果 `verifiable_type` 值为 `mail`，那么这个字段为必须，用户邮箱。 |
| phone | 字符串 | 如果 `verifiable_type` 值为 `sms`。那么这个字段为必须，用户手机号码。 |
| password | 字符串 | 用户新密码。 |

##### 响应

```
Status: 204 No Content
```

## 解除用户 Phone 或者 E-Mail 绑定

解除用户 Phone 绑定:

```
DELETE /api/v2/user/phone
```

解除用户 E-Mail 绑定:

```
DELETE /api/v2/user/email
```

#### 输入

| 名称 | 类型 | 描述 |
|:-----:|:----:|----|
| password | String | 用户密码。 |
| verifiable_code | Int 或者 String | 手机号码或者邮箱验证码。 |

#### 响应

```
Status: 204 No Content
```


## 用户列表


## 获取所有用户

```
GET api/v2/users
```

输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| `limit` | `integer` | **可选**，请求获取的数据量，默认为 `20` 条，最低获取 `1` 条，最多获取 `50` 条。 |
| `order` | `string` | **可选**，排序方式，默认 `desc`，可选 `asc` 或 `desc`。 |
| `since` | `integer` | **可选**，上次请求的最后一条的 `id` ，用于获取这个用户之后的数据。 |
| `name` | `string` | **可选**用于检索包含 `name` 传递字符串用户名的用户；如果 `fetch_by` 是 `username` 那么这里就是完整的用户名，多个用户名使用 `,` 进行分割。 |
| `fetch_by` | `string` | **可选**，获取数据的方式，默认是 `id` 已常规方式进行获取，允许值：`username` 使用 `name` 字段进行按照用户名获取、`id` 使用 `id` 字段按照用户 ID 进行获取。 |
| `id` | `integer` or `string` | **可选**，获取一个或者多个指定的用户，如果获取多个请使用 `,` 将用户 ID进行字符串拼接。 |

响应

```
Status: 200 OK
```
```json
[
    {
      用户信息
    }
]
```


### 活跃用户

```
GET /api/v2/users
```
输入:

| 参数 | 类型 | 描述 |
|:----:|----|----|
|`active` | integer | **必传**, 1 |
| `limit` | integer | **可选** |
| `offset` | integer | **可选**,偏移量，用于分页,第一次查询时，传0 |

响应:

```
Status: 200 OK
```
```json5
[
 {用户信息}
]
```

### 推荐用户
```
GET /api/v2/user/recommends
```
输入:

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `limit` | integer | **可选** |
| `offset` | integer | **可选**,偏移量，用于分页,第一次查询时，传0 |

响应:
```
Status: 200 OK
```

```json5
[
 {用户信息}  
]
```

### 同城用户
```
GET /api/v2/user/nearby
```
输入:

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `limit` | integer | **可选** |
| `offset` | integer | **可选**,偏移量，用于分页,第一次查询时，传0 |

响应:

```
Status: 200 OK
```

```json5
[
 {用户信息}
]
```

### 用户积分收入排名

```
GET /api/v2/user/currency/income-rank
```

> 目前排行榜数据每三分钟更新一次

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `days` | `string` | **可选**，获取最近多少天的数据，默认不限天数 |
| `city` | `string` | **可选**，获取地区排名，如"成都"，默认全部 |
| `limit` | `integer` | **可选**，获取多少条，最多1000，默认100 |

响应：

```
Status: 200 OK
```

```json5
{
    "rank_list":[
        {
            "user": { /* 用户数据 */ },
            // 总收入金额
            "amount_count": 100,
            // 排名
            "rank": "100",
        }
    ],
    // 我的排名，未登录或不在查询的city则没有此字段
    "my_rank": {
      "user": { /* 用户数据 */ },
      // 总收入金额
      "amount_count": 0,
      // 排名
      "rank": "1000+",
    }
}
```





## 禁用用户

```
PUT /api/v2/system/disabled/{user}
```

响应：

```
Sttaus: 204 No Content
```

## 用户认证

所有用户信息位置均会返回一个 `verification` 字段，如果没有提交认证，返回为 `null`，存在认证信息，则返回对应信息。**特别注意**，查看其他认证信息仅返回非敏感数据，敏感性信息会被隐藏，例如身份证号吗等。仅获取自己数据才会给出完整数据。例如个人认证如下结构：

```json5
{
    "type":"user", // 认证类型
    "state":-1, // 状态，-1 为等待，0 为拒绝，1 为认证成功
    "created_at":"2019-03-05T01:56:51Z", // 首次提交认证时间
    "updated_at":"2019-03-05T01:56:51Z", // 更新认证数据时间
    "desc":"智艺花泽类❤", // 认证描述
    "id_card":{ // 身份证信息（敏感信息）
        "number":"5******04****************6****9", // 身份证号吗
        "rear":{ // 身份证背面图片
            "url":"http://wm.local.medz.cn/storage/public:MjAxOS8wMy8wMS9RQnNqdTIyd3ZVYWwxMWFqRWdpNVJ2cmVqTE14dGE1WEVTZERHZUdVZTVVeVJaNmd5SGFPbEZ4Z2doSTlIbXd2LmpwZWc=",
            "vendor":"local",
            "mime":"image/jpeg",
            "size":456699,
            "dimension":{
                "width":1836,
                "height":2448
            }
        },
        "front":{ // 身份证正面图片
            "url":"http://wm.local.medz.cn/storage/public:MjAxOS8wMy8wMS9FYllMMHFoRldVMVE3NzFuRjVMWW5KMkcyMUgxMXdaTlRtUzRHeUdScXl1bE40REFvMTBBeU9vb2xEcWNObVZmLmpwZWc=",
            "vendor":"local",
            "mime":"image/jpeg",
            "size":5681,
            "dimension":{
                "width":200,
                "height":200
            }
        }
    },
    "real_name":"Seven Du", // 真实姓名
    "phone_number":"187******82" // 手机号码
}
```

### 首次提交认证信息

```
POST /api/v2/user/verification
```

输入（个人认证）：

```json5
{
	"type": "user", // 固定
	"data": { // 荷载数据
		"id_card": {
			"front": "public:2019/03/01/EbYL0qhFWU1Q771nF5LYnJ2G21H11wZNTmS4GyGRqyulN4DAo10AyOoolDqcNmVf.jpeg", // 身份证正面照片
			"rear": "public:QBsju22wvUal11ajEgi5RvrejLMxta5XESdDGeGUe5UyRZ6gyHaOlFxgghI9Hmwv.jpeg", // 身份证背面照片
			"number": "5***04********6**9" // 身份证号吗
		},
		"real_name": "Seven Du", // 真实信息
		"phone_number": "187******82", // 手机号码
		"desc": "智艺花泽类❤️"
	}
}
```

输入（企业认证）:

```json5
{
	"type": "org",
	"data": {
		"org": { // 企业信息
			"name": "成都智艺创想科技有限公司", // 企业名称
			"address": "成都市高新区天府大道北段1700号", // 企业地址
			"certificate": "public:2019/03/01/EbYL0qhFWU1Q771nF5LYnJ2G21H11wZNTmS4GyGRqyulN4DAo10AyOoolDqcNmVf.jpeg", // 企业证书
		},
		"person": { // 法人信息
			"name": "李**", // 法人名称
			"number": "5***04********6**9" // 法人身份证好嘛
		},
		"phone_number": "187******82", // 联系方式
		"desc": "一个让人心累的公司️" // 认证描述
	}
}
```

响应：

```
Status: 201 Created
```

### 更新认证信息

仅被拒绝认证后（`state = 0`）可以继续更改信息申请，**注意**，更改信息无法更改认证类型。

输入：如同首次申请认证的输入一致，但是去掉 `type` 字段，就算传递服务器也不会处理该字段。

响应：

```
Status: 204 No Content
```

### 删除认证信息

```
DELETE /api/v2/user/verification
```

响应：

```
Status: 204 No Content
```

## 用户收货地址

> 服务端目前限制了一个用户最多20个收货地址；一个用户同时只能存在<=1个默认地址。

### 获取收货地址列表

> 默认排序为为创建时间的倒序，如不满足可以在客户端重新排序。

```
GET /api/v2/user/addresses
```

响应：

```
Status: 200 OK
```
```json5
[
    {
        "id": 1,
        "user_id": 1,
        "alias": "公司",
        "name": "张三",
        "phone": "18818181818",
        "province": "四川省",
        "city": "成都市",
        "county": "高新区",
        "detail": "环球中心E1区9楼",
        "postcode": "610000",
        "is_default": false,
        "created_at": "2019-04-13 04:34:33",
        "updated_at": "2019-04-13 04:44:12"
    }
]
```

### 获取单个收货地址

```
GET /api/v2/user/addresses/{address.id}
```

响应：

```
Status: 200 OK
```
```json5
{
    "id": 1,
    "user_id": 1,
    "alias": "公司",
    "name": "张三",
    "phone": "18818181818",
    "province": "四川省",
    "city": "成都市",
    "county": "高新区",
    "detail": "环球中心E1区9楼",
    "postcode": "610000",
    "is_default": false,
    "created_at": "2019-04-13 04:34:33",
    "updated_at": "2019-04-13 04:44:12"
}
```

### 添加收货地址

> 最大长度规则以GB18030编码的字符串字节数为准，通常ASCII字符1长度，中文2个长度，Emoji为4个长度。

```
POST /api/v2/user/addresses
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `alias` | `string` | **可选**，地址别名，如：`家里`、`公司`等，最大长度24 |
| `name` | `string` | **必须**，收件人姓名，最大长度24 |
| `phone` | `string` | **必须**，收件人电话，只支持国内手机号 |
| `province` | `string` | **可选**，省名称，最大长度32 |
| `city` | `string` | **可选**，市名称，最大长度32 |
| `county` | `string` | **可选**，区/县名称，最大长度32 |
| `detail` | `string` | **必须**，详细地址，最大长度160 |
| `postcode` | `string` | **可选**，邮政编码，必须是6个数字 |
| `is_default` | `boolean` | **必须**，是否默认地址 |

响应：

```
Status: 201 Created
```

```json
{
    "id": 1,
    "user_id": 1,
    "alias": "公司",
    "name": "张三",
    "phone": "18818181818",
    "province": "四川省",
    "city": "成都市",
    "county": "高新区",
    "detail": "环球中心E1区9楼",
    "postcode": "610000",
    "is_default": false,
    "created_at": "2019-04-13 04:34:33",
    "updated_at": "2019-04-13 04:44:12"
}
```

### 修改收货地址

```
PUT|PATCH /api/v2/user/addresses/{address.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `alias` | `string` | **可选**，地址别名，如：`家里`、`公司`等，最大长度24 |
| `name` | `string` | **可选**，收件人姓名，最大长度24 |
| `phone` | `string` | **可选**，收件人电话，只支持国内手机号 |
| `province` | `string` | **可选**，省名称，最大长度32 |
| `city` | `string` | **可选**，市名称，最大长度32 |
| `county` | `string` | **可选**，区/县名称，最大长度32 |
| `detail` | `string` | **可选**，详细地址，最大长度160 |
| `postcode` | `string` | **可选**，邮政编码，必须是6个数字 |
| `is_default` | `boolean` | **可选**，是否默认地址 |

响应：

```
Status: 200 OK
```
```json
{
    "id": 1,
    "user_id": 1,
    "alias": "公司",
    "name": "张三",
    "phone": "18818181818",
    "province": "四川省",
    "city": "成都市",
    "county": "高新区",
    "detail": "环球中心E1区9楼",
    "postcode": "610000",
    "is_default": false,
    "created_at": "2019-04-13 04:34:33",
    "updated_at": "2019-04-13 04:44:12"
}
```

### 删除收货地址

```
DELETE /api/v2/user/addresses/{address.id}
```

响应：

```
Status: 204 No Content
```


### 注销账号
```http request
DELETE /api/v2/user
```
```
Status: 401|202
```
```json5
{
	"message": "操作成功,再见"
}
```
