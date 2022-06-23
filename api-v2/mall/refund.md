---
sidebarDepth: 3
title: 退款退货
---


## 退款退货

## 购物车

### 获取商品列表（按照商家分组）

### 接口URL

> http://t3.cn/api/v2/mall/shopping-shopkeeper-carts?limit=10&offset=0

#### 请求方式
> GET

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
limit | 10 | String | 是 | -
offset | 0 | String | 是 | -
#### 成功响应示例
```javascript
{
	"total_count": 1,
	"list": [
		{
			"id": 50,
			"user_id": 2,
			"shopkeeper_id": 5,
			"commodity_count": 1,
			"last_at": "2021-03-17T03:08:03Z",
			"created_at": "2022-03-30T10:24:00Z",
			"updated_at": "2022-03-30T10:24:00Z",
			"commodities": [
				{
					"id": 290,
					"user_id": 2,
					"commodity_id": 133,
					"quantity": 1,
					"commodity_option": null,
					"created_at": "2021-03-17T03:08:03Z",
					"updated_at": "2022-03-30T10:24:02Z",
					"shop_id": 50,
					"commodity": {
						"id": 133,
						"user_id": 5,
						"type": "member",
						"category_id": 5,
						"photos": [
							{
								"image": {
									"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2021/03/09/DeE5IndR3ApmIVzeePJiQYoUmiZ3bDJL71LILnB7aSFJ60QwC9swxOxIG1Papbpd.jpeg",
									"vendor": "aliyun-oss",
									"mime": "image/jpeg",
									"size": 339399,
									"dimension": {
										"width": 1024,
										"height": 1024
									},
									"node": "public:2021/03/09/DeE5IndR3ApmIVzeePJiQYoUmiZ3bDJL71LILnB7aSFJ60QwC9swxOxIG1Papbpd.jpeg"
								}
							}
						],
						"title": "会员商品2",
						"price": 0,
						"score": 0,
						"market_price": 10,
						"options": null,
						"sku": null,
						"buy_limit_days": null,
						"buy_limit_qty": null,
						"order_min_qty": null,
						"buy_conditions": null,
						"buying_read": null,
						"has_freight": false,
						"freight": 0,
						"freight_qty": null,
						"incr_qty": null,
						"incr_freight": null,
						"views_count": 42,
						"shares_count": 0,
						"likes_count": 0,
						"orders_count": 26,
						"comments_count": 0,
						"topped_at": null,
						"user_topped_at": null,
						"category_topped_at": null,
						"extra": {
							"low": 1,
							"middle": 1
						},
						"created_at": "2021-03-09T03:38:58Z",
						"updated_at": "2021-11-02T01:45:05Z",
						"deleted_at": "2021-11-02T01:45:05Z"
					}
				}
			],
			"shopkeeper": {
				"id": 5,
				"name": "Lei买家",
				"bio": "",
				"sex": 0,
				"location": "四川省 成都市",
				"avatar": {
					"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2021/12/21/JvLrKlGg3yknOowiCG1x0SAhBvWLMWqEOuRqMsOqOZebd8UoVBocPX0q4sieFjAB.jpeg",
					"vendor": "aliyun-oss",
					"mime": "image/jpeg",
					"size": 606325,
					"dimension": {
						"width": 720,
						"height": 720
					},
					"node": "public:2021/12/21/JvLrKlGg3yknOowiCG1x0SAhBvWLMWqEOuRqMsOqOZebd8UoVBocPX0q4sieFjAB.jpeg"
				},
				"bg": null,
				"email_verified_at": null,
				"phone_verified_at": null,
				"feed_topics_count": 0,
				"inviter": null,
				"ip_address": null,
				"canceled": 0,
				"created_at": "2019-11-20T08:10:23Z",
				"updated_at": "2022-05-12T08:16:09Z",
				"deleted_at": null
			}
		}
	]
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
total_count | 1 | Number | 购物车内商品总数
list | - | Object |
list.id | 50 | Number | 商品id
list.commodities | - | Object | 商品信息
list.commodities.id | 290 | Number | 购物车id
list.commodities.commodity_id | 133 | Number | 商品id
list.commodities.quantity | 1 | Number | 加入数量
list.commodities.commodity.deleted_at | 2021-11-02T01:45:05Z | String | 商品已下架
list.shopkeeper | - | Object |
list.shopkeeper.id | 5 | Number | 商家id
list.shopkeeper.name | Lei买家 | String | 商家名称



### 加入购物车（原接口不变）

```text
用之前的接口，在之前的接口修改了逻辑
```
#### 接口URL
> http://t3.cn/api/v2/mall/shopping-carts

#### 请求方式
> POST

#### 请求Body参数
```javascript
{
	"commodity_id": 226,
	"commodity_option": "",
	"quantity": 1
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
commodity_id | 226 | Number | 是 | 商品id
commodity_option | - | Object | 是 | 商品规格
quantity | 1 | Number | 是 | 数量
#### 成功响应示例
```javascript
{
	"message": "加入成功"
}
```



### 删除购物车内商品

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/shopping-carts/multiple-destroy

#### 请求方式
> POST

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
shopping_cart_ids | [516] | Text | 是 | 需删除的购物车id列表（注意是购物车id，不是商品id）



## 退款

### 买家申请退款/退货退款

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/orders/1550/refund

#### 请求方式
> POST

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
type | RT_APPLY | String | 是 | RF_APPLY - 仅退款，RT_APPLY - 退货退款
pay_score | 1 | Integer | 否 | 退款积分
pay_amount | 0 | Integer | 否 | 退款金额
reason | 不想要了，重新购买 | String | 是 | 退款理由
images | - | Array | 否 | 退款凭证，最多9张图片
images[0] | public:2022/02/09/5TpKIF73ldmSXgYExH6i7js1aKCR41dTZYAIII2ubvU4Qkcx9ul0oG4i3ASbJAZz.jpg | String | 是 | 凭证图片，node
#### 成功响应示例

```javascript
{
	"order_id": 1856,
	"status": "RF_APPLY",
	"reason": "需要退款。",
	"images": [
		{
			"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/06/22/jqIAgLd7Vju0uYNn9ybjBEwHadrjZJNyrlmejdH489GNgQowDKFONMdC2lD4K8xL.jpeg",
			"vendor": "aliyun-oss",
			"mime": "image/jpeg",
			"size": 246952,
			"dimension": {
				"width": 1000,
				"height": 1000
			},
			"node": "public:2022/06/22/jqIAgLd7Vju0uYNn9ybjBEwHadrjZJNyrlmejdH489GNgQowDKFONMdC2lD4K8xL.jpeg"
		}
	],
	"pay_amount": 3,
	"shop_amount": 2,
	"pay_balance": 0,
	"pay_score": 0,
	"shop_score": 0,
	"updated_at": "2022-06-22T07:05:57Z",
	"created_at": "2022-06-22T07:05:57Z",
	"id": 252,
	"order": {
		"id": 1856,
		"trade_no": "20220620174345625MO1FK",
		"out_trade_no": "20220620174533245MO1FK",
		"multiple_trade_no": null,
		"user_id": 2,
		"shopkeeper_id": 3452,
		"commodity_id": 244,
		"source_commodity": {
			"id": 244,
			"sku": null,
			"type": "member",
			"extra": {
				"low": 2,
				"middle": 1
			},
			"price": 0,
			"score": 0,
			"title": "会员-图片B01",
			"photos": [
				{
					"image": {
						"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/05/31/GrsWYFAPrSt5ujUISVbk4zaL59M7tFtaNSrXmRdp1BuyoooEfBcGqorWjTYsPOe1.jpeg",
						"mime": "image/jpeg",
						"node": "public:2022/05/31/GrsWYFAPrSt5ujUISVbk4zaL59M7tFtaNSrXmRdp1BuyoooEfBcGqorWjTYsPOe1.jpeg",
						"size": 220753,
						"vendor": "aliyun-oss",
						"dimension": {
							"width": 1200,
							"height": 800
						}
					}
				},
				{
					"image": {
						"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/05/31/HMYnCWKmkaSzVE21D5NvtJhNGamzV5PMP9smDj0NHLgWZQ7mhzrgPvt4l8FqlkH7.jpeg",
						"mime": "image/jpeg",
						"node": "public:2022/05/31/HMYnCWKmkaSzVE21D5NvtJhNGamzV5PMP9smDj0NHLgWZQ7mhzrgPvt4l8FqlkH7.jpeg",
						"size": 471935,
						"vendor": "aliyun-oss",
						"dimension": {
							"width": 1200,
							"height": 800
						}
					}
				}
			],
			"freight": 1,
			"options": null,
			"user_id": 3452,
			"incr_qty": 1,
			"topped_at": null,
			"created_at": "2022-05-31T02:43:20Z",
			"deleted_at": null,
			"updated_at": "2022-06-06T08:36:35Z",
			"buying_read": "哈哈哈哈",
			"category_id": 5,
			"freight_qty": 1,
			"has_freight": true,
			"likes_count": 1,
			"views_count": 23,
			"incr_freight": 0,
			"market_price": 3,
			"orders_count": 13,
			"shares_count": 0,
			"buy_limit_qty": null,
			"order_min_qty": null,
			"buy_conditions": null,
			"buy_limit_days": null,
			"comments_count": 0,
			"user_topped_at": null,
			"category_topped_at": null
		},
		"quantity": 1,
		"is_orig_price": true,
		"is_share_discount": false,
		"total_amount": 4,
		"total_score": 0,
		"shop_amount": 3,
		"shop_score": 0,
		"tax_amount": 1,
		"tax_score": 0,
		"freight": 1,
		"pay_method": "Alipay_AopApp",
		"pay_amount": 4,
		"pay_balance": 0,
		"pay_score": 0,
		"pay_status": 2,
		"paid_at": "2022-06-20T09:45:39Z",
		"receipt_at": null,
		"address": {
			"name": "碎花衬衫",
			"phone": "18700942635",
			"province": "河南省",
			"city": "焦作市",
			"county": "博爱县",
			"detail": "幸福路789号",
			"postcode": "410822"
		},
		"user_remark": null,
		"shop_remark": null,
		"commodity_option": null,
		"comment_id": null,
		"expresses_count": 0,
		"created_at": "2022-06-20T09:43:44Z",
		"updated_at": "2022-06-22T07:05:57Z",
		"user_deleted_at": null,
		"shop_deleted_at": null,
		"refund_count": 1,
		"locked": 0,
		"status": "RF_APPLY",
		"admin_remark": null,
		"feedback_count": 0,
		"status_txt": "买家申请退款中"
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
order_id | 1856 | Number | 订单id
status | RF_APPLY | String | 订单状态
reason | 需要退款。 | String | 申请原因
images | - | Object | 退款凭证
pay_amount | 3 | Number | 退款金额
pay_score | - | Number | 退款积分
id | 252 | Number | 退款申请ID
order | - | Object | 订单信息
order.status | RF_APPLY | String | 
order.status_txt | 买家申请退款中 | String | 



### 卖家同意退款（未发货）

#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122/refund-agree

#### 请求方式
> PUT



### 卖家驳回退款（未发货）

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122/refund-refuse

#### 请求方式
> PUT

#### 请求Body参数
```javascript
{
    "refusal_reason": {
        "content": "不支持退款退货",
        "images": [
            "public:2022/02/09/5TpKIF73ldmSXgYExH6i7js1aKCR41dTZYAIII2ubvU4Qkcx9ul0oG4i3ASbJAZz.jpg"
        ]
    }
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
refusal_reason | - | Object | 是 | -
refusal_reason.content | 不支持退款退货 | String | 是 | 拒绝退款理由
refusal_reason.images | public:2021/12/20/FerjV0B1ovF9t6HOLO414dwzWFr1bgxsVrIQnP6xKLl7xup43iYXHlwD6dZCjI90.png | String | 是 | 拒绝退款凭证



### 买家撤销退款申请

```text
（申请退款中/申请退货中/卖家同意退货）状态时可申请
```
#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122

#### 请求方式
> DELETE



## 退货

```text
退货相关接口
```
### 买家申请退款/退货退款
```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/orders/1550/refund

#### 请求方式
> POST

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
type | RT_APPLY | String | 是 | RF_APPLY - 仅退款，RT_APPLY - 退货退款
pay_score | 1 | Integer | 否 | 退款积分
pay_amount | 0 | Integer | 否 | 退款金额
reason | 不想要了，重新购买 | String | 是 | 退款理由
images | - | Array | 否 | 退款凭证，最多9张图片
images[0] | public:2022/02/09/5TpKIF73ldmSXgYExH6i7js1aKCR41dTZYAIII2ubvU4Qkcx9ul0oG4i3ASbJAZz.jpg | String | 是 | 凭证图片，node
#### 成功响应示例
```javascript
{
	"order_id": 1856,
	"status": "RF_APPLY",
	"reason": "需要退款。",
	"images": [
		{
			"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/06/22/jqIAgLd7Vju0uYNn9ybjBEwHadrjZJNyrlmejdH489GNgQowDKFONMdC2lD4K8xL.jpeg",
			"vendor": "aliyun-oss",
			"mime": "image/jpeg",
			"size": 246952,
			"dimension": {
				"width": 1000,
				"height": 1000
			},
			"node": "public:2022/06/22/jqIAgLd7Vju0uYNn9ybjBEwHadrjZJNyrlmejdH489GNgQowDKFONMdC2lD4K8xL.jpeg"
		}
	],
	"pay_amount": 3,
	"shop_amount": 2,
	"pay_balance": 0,
	"pay_score": 0,
	"shop_score": 0,
	"updated_at": "2022-06-22T07:05:57Z",
	"created_at": "2022-06-22T07:05:57Z",
	"id": 252,
	"order": {
		"id": 1856,
		"trade_no": "20220620174345625MO1FK",
		"out_trade_no": "20220620174533245MO1FK",
		"multiple_trade_no": null,
		"user_id": 2,
		"shopkeeper_id": 3452,
		"commodity_id": 244,
		"source_commodity": {
			"id": 244,
			"sku": null,
			"type": "member",
			"extra": {
				"low": 2,
				"middle": 1
			},
			"price": 0,
			"score": 0,
			"title": "会员-图片B01",
			"photos": [
				{
					"image": {
						"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/05/31/GrsWYFAPrSt5ujUISVbk4zaL59M7tFtaNSrXmRdp1BuyoooEfBcGqorWjTYsPOe1.jpeg",
						"mime": "image/jpeg",
						"node": "public:2022/05/31/GrsWYFAPrSt5ujUISVbk4zaL59M7tFtaNSrXmRdp1BuyoooEfBcGqorWjTYsPOe1.jpeg",
						"size": 220753,
						"vendor": "aliyun-oss",
						"dimension": {
							"width": 1200,
							"height": 800
						}
					}
				},
				{
					"image": {
						"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/05/31/HMYnCWKmkaSzVE21D5NvtJhNGamzV5PMP9smDj0NHLgWZQ7mhzrgPvt4l8FqlkH7.jpeg",
						"mime": "image/jpeg",
						"node": "public:2022/05/31/HMYnCWKmkaSzVE21D5NvtJhNGamzV5PMP9smDj0NHLgWZQ7mhzrgPvt4l8FqlkH7.jpeg",
						"size": 471935,
						"vendor": "aliyun-oss",
						"dimension": {
							"width": 1200,
							"height": 800
						}
					}
				}
			],
			"freight": 1,
			"options": null,
			"user_id": 3452,
			"incr_qty": 1,
			"topped_at": null,
			"created_at": "2022-05-31T02:43:20Z",
			"deleted_at": null,
			"updated_at": "2022-06-06T08:36:35Z",
			"buying_read": "哈哈哈哈",
			"category_id": 5,
			"freight_qty": 1,
			"has_freight": true,
			"likes_count": 1,
			"views_count": 23,
			"incr_freight": 0,
			"market_price": 3,
			"orders_count": 13,
			"shares_count": 0,
			"buy_limit_qty": null,
			"order_min_qty": null,
			"buy_conditions": null,
			"buy_limit_days": null,
			"comments_count": 0,
			"user_topped_at": null,
			"category_topped_at": null
		},
		"quantity": 1,
		"is_orig_price": true,
		"is_share_discount": false,
		"total_amount": 4,
		"total_score": 0,
		"shop_amount": 3,
		"shop_score": 0,
		"tax_amount": 1,
		"tax_score": 0,
		"freight": 1,
		"pay_method": "Alipay_AopApp",
		"pay_amount": 4,
		"pay_balance": 0,
		"pay_score": 0,
		"pay_status": 2,
		"paid_at": "2022-06-20T09:45:39Z",
		"receipt_at": null,
		"address": {
			"name": "碎花衬衫",
			"phone": "18700942635",
			"province": "河南省",
			"city": "焦作市",
			"county": "博爱县",
			"detail": "幸福路789号",
			"postcode": "410822"
		},
		"user_remark": null,
		"shop_remark": null,
		"commodity_option": null,
		"comment_id": null,
		"expresses_count": 0,
		"created_at": "2022-06-20T09:43:44Z",
		"updated_at": "2022-06-22T07:05:57Z",
		"user_deleted_at": null,
		"shop_deleted_at": null,
		"refund_count": 1,
		"locked": 0,
		"status": "RF_APPLY",
		"admin_remark": null,
		"feedback_count": 0,
		"status_txt": "买家申请退款中"
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
order_id | 1856 | Number | 订单id
status | RF_APPLY | String | 订单状态
reason | 需要退款。 | String | 申请原因
images | - | Object | 退款凭证
pay_amount | 3 | Number | 退款金额
pay_score | - | Number | 退款积分
id | 252 | Number | 退款申请ID
order | - | Object | 订单信息
order.status | RF_APPLY | String | 
order.status_txt | 买家申请退款中 | String | 


### 卖家拦截发货并退款（已发货）

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122/refund-intercept

#### 请求方式
> PUT



### 卖家同意退货退款（已发货）

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122/return-agree

#### 请求方式
> POST

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
address_id | - | Number | 否 | 可以直接传收货地址id
address[name] | 小小 | - | 否 | 自定义收货信息
address[phone] | 13333333333 | - | 否 | -
address[province] | 四川 | - | 否 | -
address[city] | 成都 | - | 否 | -
address[county] | 武侯区 | - | 否 | -
address[detail] | 环球中心 | - | 否 | -
address[postcode] | - | - | 否 | -
#### 成功响应示例
```javascript
{
	"id": 254,
	"order_id": 1856,
	"refund_no": null,
	"reason": "第一次申请退货。",
	"images": [
		{
			"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/06/22/suIVUdam3J5iM03jO2C1vLCTPvTqmZg65iGpXjKB0UcsJDgDFkiRqutJB0FI2Taw.jpeg",
			"vendor": "aliyun-oss",
			"mime": "image/jpeg",
			"size": 255737,
			"dimension": {
				"width": 1024,
				"height": 1024
			},
			"node": "public:2022/06/22/suIVUdam3J5iM03jO2C1vLCTPvTqmZg65iGpXjKB0UcsJDgDFkiRqutJB0FI2Taw.jpeg"
		}
	],
	"pay_amount": 3,
	"pay_balance": 0,
	"pay_score": 0,
	"shop_amount": 2,
	"shop_score": 0,
	"status": "RT_AGREE",
	"address": {
		"phone": "18200271798",
		"province": "黑龙江省",
		"city": "大庆市",
		"name": "收货人1",
		"county": "让胡路区",
		"detail": "112233"
	},
	"audit_at": "2022-06-22T07:32:06Z",
	"receipt_at": null,
	"finish_at": null,
	"refusal_reason": null,
	"created_at": "2022-06-22T07:30:40Z",
	"updated_at": "2022-06-22T07:32:06Z",
	"expresses_count": 0,
	"admin": 0,
	"fail_info": null,
	"admin_remark": null,
	"order": {
		"id": 1856,
		"trade_no": "20220620174345625MO1FK",
		"out_trade_no": "20220620174533245MO1FK",
		"multiple_trade_no": null,
		"user_id": 2,
		"shopkeeper_id": 3452,
		"commodity_id": 244,
		"source_commodity": {
			"id": 244,
			"sku": null,
			"type": "member",
			"extra": {
				"low": 2,
				"middle": 1
			},
			"price": 0,
			"score": 0,
			"title": "会员-图片B01",
			"photos": [
				{
					"image": {
						"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/05/31/GrsWYFAPrSt5ujUISVbk4zaL59M7tFtaNSrXmRdp1BuyoooEfBcGqorWjTYsPOe1.jpeg",
						"mime": "image/jpeg",
						"node": "public:2022/05/31/GrsWYFAPrSt5ujUISVbk4zaL59M7tFtaNSrXmRdp1BuyoooEfBcGqorWjTYsPOe1.jpeg",
						"size": 220753,
						"vendor": "aliyun-oss",
						"dimension": {
							"width": 1200,
							"height": 800
						}
					}
				},
				{
					"image": {
						"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2022/05/31/HMYnCWKmkaSzVE21D5NvtJhNGamzV5PMP9smDj0NHLgWZQ7mhzrgPvt4l8FqlkH7.jpeg",
						"mime": "image/jpeg",
						"node": "public:2022/05/31/HMYnCWKmkaSzVE21D5NvtJhNGamzV5PMP9smDj0NHLgWZQ7mhzrgPvt4l8FqlkH7.jpeg",
						"size": 471935,
						"vendor": "aliyun-oss",
						"dimension": {
							"width": 1200,
							"height": 800
						}
					}
				}
			],
			"freight": 1,
			"options": null,
			"user_id": 3452,
			"incr_qty": 1,
			"topped_at": null,
			"created_at": "2022-05-31T02:43:20Z",
			"deleted_at": null,
			"updated_at": "2022-06-06T08:36:35Z",
			"buying_read": "哈哈哈哈",
			"category_id": 5,
			"freight_qty": 1,
			"has_freight": true,
			"likes_count": 1,
			"views_count": 23,
			"incr_freight": 0,
			"market_price": 3,
			"orders_count": 13,
			"shares_count": 0,
			"buy_limit_qty": null,
			"order_min_qty": null,
			"buy_conditions": null,
			"buy_limit_days": null,
			"comments_count": 0,
			"user_topped_at": null,
			"category_topped_at": null
		},
		"quantity": 1,
		"is_orig_price": true,
		"is_share_discount": false,
		"total_amount": 4,
		"total_score": 0,
		"shop_amount": 3,
		"shop_score": 0,
		"tax_amount": 1,
		"tax_score": 0,
		"freight": 1,
		"pay_method": "Alipay_AopApp",
		"pay_amount": 4,
		"pay_balance": 0,
		"pay_score": 0,
		"pay_status": 2,
		"paid_at": "2022-06-20T09:45:39Z",
		"receipt_at": null,
		"address": {
			"name": "碎花衬衫",
			"phone": "18700942635",
			"province": "河南省",
			"city": "焦作市",
			"county": "博爱县",
			"detail": "幸福路789号",
			"postcode": "410822"
		},
		"user_remark": null,
		"shop_remark": null,
		"commodity_option": null,
		"comment_id": null,
		"expresses_count": 1,
		"created_at": "2022-06-20T09:43:44Z",
		"updated_at": "2022-06-22T07:32:06Z",
		"user_deleted_at": null,
		"shop_deleted_at": null,
		"refund_count": 3,
		"locked": 0,
		"status": "RT_AGREE",
		"admin_remark": null,
		"feedback_count": 0,
		"status_txt": "卖家同意退货"
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
id | 1 | Number | 退款申请ID
order_id | 938 | Number | 
refund_no | - | Object | 
reason | 原因原因 | String | 
images | - | Object | 退款凭证
pay_amount | 0 | Number | 退款金额
pay_balance | 0 | Number | 
pay_score | 10 | Number | 退款积分
shop_amount | 0 | Number | 
shop_score | 8 | Number | 
audit | 1 | Number | 审核状态：1-通过，2-驳回，0-待审核
audit_at | 2021-12-06T03:29:24Z | Number | 审核时间
finish_at | - | Object | 退款成功时间
refusal_reason | - | Object | 
created_at | 2021-12-06T03:22:07Z | Number | 
updated_at | 2021-12-06T03:29:24Z | Number | 
order | {} | Object | 商品订单信息


### 卖家驳回退货退款（已发货）

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122/return-refuse

#### 请求方式
> PUT

#### 请求Body参数
```javascript
{
    "refusal_reason": {
        "content": "不支持退款退货",
        "images": [
            "public:2021/12/20/FerjV0B1ovF9t6HOLO414dwzWFr1bgxsVrIQnP6xKLl7xup43iYXHlwD6dZCjI90.png"
        ]
    }
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
refusal_reason | - | Object | 是 | -
refusal_reason.content | 不支持退款退货 | String | 是 | 拒绝退款理由
refusal_reason.images | public:2021/12/20/FerjV0B1ovF9t6HOLO414dwzWFr1bgxsVrIQnP6xKLl7xup43iYXHlwD6dZCjI90.png | String | 是 | 拒绝退款凭证





### 买家撤销退货申请

```text
（申请退款中/申请退货中/卖家同意退货）状态时可申请
```
#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122

#### 请求方式
> DELETE



### 买家填写退货物流（买家退货）
```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/refund/expresses

#### 请求方式
> POST

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
refund_id | {{refund}} | - | 是 | 退货申请ID
company_id | 1 | - | 是 | 快递公司ID
number | GJKLL456789321 | - | 否 | 快递单号（number和numbers互斥，单个单号传number，多个传numbers）
remark | - | - | 是 | 备注
numbers[] | GJKLL456789321 | - | 否 | -
numbers[] | GJKLL456789322 | - | 否 | -



### 查看退货物流信息

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/refund/expresses/{{express}}

#### 请求方式
> GET

#### 成功响应示例
```javascript
{
	"id": 1,
	"order_id": 938,
	"refund_id": 1,
	"company_id": 1,
	"number": "GJKLL456789321",
	"remark": null,
	"queried_at": null,
	"status": null,
	"is_check": null,
	"infos": null,
	"created_at": "2021-12-06T04:06:58Z",
	"updated_at": "2021-12-06T04:06:58Z",
	"order": {
		"id": 938,
		"trade_no": null,
		"multiple_trade_no": null,
		"user_id": 2847,
		"shopkeeper_id": 9,
		"commodity_id": 198,
		"source_commodity": {
			"id": 198,
			"sku": [],
			"type": "score",
			"extra": {
				"low": 0,
				"middle": 0
			},
			"price": 0,
			"score": 10,
			"title": "1",
			"photos": [
				{
					"image": {
						"node": "public:2021/11/20/FSmpIIVb2UH5tOsQvfINZj37ccSHH68eaoFgyuazw8tsxA4nhP8JtBI1bqQ9hxQq.jpeg"
					}
				}
			],
			"freight": null,
			"options": null,
			"user_id": 9,
			"incr_qty": null,
			"topped_at": null,
			"created_at": "2021-11-20T08:14:46Z",
			"deleted_at": null,
			"updated_at": "2021-11-20T08:14:46Z",
			"buying_read": null,
			"category_id": 5,
			"freight_qty": null,
			"has_freight": false,
			"likes_count": 0,
			"views_count": 0,
			"incr_freight": null,
			"market_price": 0,
			"orders_count": 0,
			"shares_count": 0,
			"buy_limit_qty": null,
			"order_min_qty": null,
			"buy_conditions": null,
			"buy_limit_days": null,
			"comments_count": 0,
			"user_topped_at": null,
			"category_topped_at": null
		},
		"quantity": 1,
		"is_orig_price": false,
		"is_share_discount": false,
		"total_amount": 50,
		"total_score": 5,
		"shop_amount": 45,
		"shop_score": 4,
		"tax_amount": 5,
		"tax_score": 1,
		"freight": 0,
		"pay_method": null,
		"pay_amount": 50,
		"pay_balance": 0,
		"pay_score": 5,
		"pay_status": 2,
		"paid_at": "2021-12-06T03:10:09Z",
		"receipt_at": null,
		"address": {
			"name": "Lei12",
			"phone": "18628001700",
			"province": "山西省",
			"city": "大同市",
			"county": "新荣区",
			"detail": "11111",
			"postcode": "140212"
		},
		"user_remark": null,
		"shop_remark": null,
		"commodity_option": null,
		"comment_id": null,
		"expresses_count": 0,
		"created_at": "2021-12-06T03:10:09Z",
		"updated_at": "2021-12-06T04:06:58Z",
		"user_deleted_at": null,
		"shop_deleted_at": null,
		"refund_status": 4
	},
	"company": {
		"id": 1,
		"name": "韵达快递",
		"code": "yunda",
		"is_popular": true,
		"usages_count": 37,
		"created_at": "2019-11-20T06:52:18Z",
		"updated_at": "2021-12-06T04:06:58Z"
	},
	"refund": {
		"id": 1,
		"order_id": 938,
		"refund_no": null,
		"reason": "原因原因",
		"images": null,
		"pay_amount": 0,
		"pay_balance": 0,
		"pay_score": 10,
		"shop_amount": 0,
		"shop_score": 8,
		"audit": 2,
		"audit_at": "2021-12-06T03:39:22Z",
		"finish_at": null,
		"refusal_reason": "不支持退款",
		"created_at": "2021-12-06T03:22:07Z",
		"updated_at": "2021-12-06T03:39:22Z"
	}
}
```



### 买家编辑退货物流（买家退货）

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/refund/expresses/{{express}}

#### 请求方式
> PUT

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
company_id | 1 | - | 是 | 快递公司ID
number | GJKLL4567893212 | - | 是 | 快递单号
remark | - | - | 是 | 备注



### 卖家确认收货并退款

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122/confirm-refund

#### 请求方式
> PUT

#### 成功响应示例
```javascript
{
	"message": "操作成功"
}
```



### 退款失败后，卖家直接操作退款

```text
确认退款/退货成功，退款失败时可调用
//app端暂未使用
```
#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122/refund-again

#### 请求方式
> PUT



## 协商退款
```text
暂无描述
```
### 卖家确认收货开启协商价格
```text
卖家确认收到货品，同时开启协商退款流程
```
#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122/confirm-negotiate

#### 请求方式
> PUT

#### 成功响应示例
```javascript
{
	"message": "操作成功"
}
```



### 买家提交协商退款申请

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/refunds/122/negotiate

#### 请求方式
> POST

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
pay_score | 0 | Integer | 否 | 退款积分
pay_amount | 4 | Integer | 否 | 退款金额
reason | 商家要求协商退款 | String | 是 | 退款理由
images | - | Array | 否 | 退款凭证，最多9张图片
images[0] | public:2022/02/18/CpHr3oLQkCGZ70rXMTEVHou42oovvAOVv6ZcwrJhBmVW3XgrknzZ0MJlK6h4Kr46.png | String | 否 | 凭证图片，node
#### 成功响应示例
```javascript
{
	"reason": "原因原因",
	"images": null,
	"pay_amount": 0,
	"shop_amount": 0,
	"pay_balance": 0,
	"pay_score": 10,
	"shop_score": 8,
	"order_id": 938,
	"updated_at": "2021-12-06T03:22:07Z",
	"created_at": "2021-12-06T03:22:07Z",
	"id": 1
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
reason | 原因原因 | String | 
images | - | Object | 退款凭证
pay_amount | 0 | Number | 退款金额
shop_amount | 0 | Number | 
pay_balance | 0 | Number | 
pay_score | 10 | Number | 退款积分
shop_score | 8 | Number | 
order_id | 938 | Number | 
updated_at | 2021-12-06T03:22:07Z | Number | 
created_at | 2021-12-06T03:22:07Z | Number | 
id | 1 | Number | 退款申请ID



### 卖家同意协商退款申请

```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/negotiates/1/agree

#### 请求方式
> PUT



### 卖家驳回协商退款申请
```text
暂无描述
```
#### 接口URL
> http://t3.cn/api/v2/mall/negotiates/1/refuse

#### 请求方式
> PUT

#### 请求Body参数
```javascript
{
    "refusal_reason": {
        "content": "不支持退款退货",
        "images": [
            "public:2022/02/18/CpHr3oLQkCGZ70rXMTEVHou42oovvAOVv6ZcwrJhBmVW3XgrknzZ0MJlK6h4Kr46.png"
        ]
    }
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
refusal_reason | - | Object | 是 | -
refusal_reason.content | 不支持退款退货 | String | 是 | 拒绝退款理由
refusal_reason.images | public:2021/12/20/FerjV0B1ovF9t6HOLO414dwzWFr1bgxsVrIQnP6xKLl7xup43iYXHlwD6dZCjI90.png | String | 是 | 拒绝退款凭证



### 协商成功退款失败后，卖家尝试退款

```text
退货协商成功，退款失败时可调用
// 目前app端未使用
```
#### 接口URL
> http://t3.cn/api/v2/mall/negotiates/1/refund-again

#### 请求方式
> PUT

#### 请求Body参数
```javascript
{
    "refusal_reason": {
        "content": "不支持退款退货",
        "images": [
            "public:2021/12/20/FerjV0B1ovF9t6HOLO414dwzWFr1bgxsVrIQnP6xKLl7xup43iYXHlwD6dZCjI90.png"
        ]
    }
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
refusal_reason | - | Object | 是 | -
refusal_reason.content | 不支持退款退货 | String | 是 | 拒绝退款理由
refusal_reason.images | public:2021/12/20/FerjV0B1ovF9t6HOLO414dwzWFr1bgxsVrIQnP6xKLl7xup43iYXHlwD6dZCjI90.png | String | 是 | 拒绝退款凭证





## 申诉

```text
暂无描述
```
### 订单申诉
```text
买家/商家提交申诉接口，订单立即流转为“冻结”状态
```
#### 接口URL
> http://t3.cn/api/v2/mall/orders/1550/appeal

#### 请求方式
> POST

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
content | 订单有误申诉申诉 | - | 是 | 申诉内容
images[0] | public:2022/02/18/CpHr3oLQkCGZ70rXMTEVHou42oovvAOVv6ZcwrJhBmVW3XgrknzZ0MJlK6h4Kr46.png | - | 否 | -



## 反馈

```text
暂无描述
```
### 订单反馈
```text
买家/商家向平台提出对某个订单的反馈，对订单状态没有影响
```
#### 接口URL
> http://t3.cn/api/v2/mall/orders/1550/feedback

#### 请求方式
> POST

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
content | 订单有误申诉申诉 | - | 是 | 反馈内容
images[0] | public:2022/02/22/7nT374PZWOnxdUrRz5S6oDe1GkubrEt37rkWfnaL78NoqxVTn5MLItp1hJWmn2eU.png | - | 否 | -



## 其他

```text
暂无描述
```


### 查看订单快照
```text
注意：
如果是单订单，order_id为订单id
如果是聚合订单，order_id为子订单id
```
#### 接口URL
> http://t3.cn/api/v2/mall/orders/{{order_id}}/snapshot

#### 请求方式
> GET

#### 成功响应示例
```javascript
{
	"id": 223,
	"user_id": 17,
	"type": "member",
	"category_id": 5,
	"photos": [
		{
			"image": null
		}
	],
	"title": "斑点狗01",
	"price": 0,
	"score": 0,
	"market_price": 3,
	"options": null,
	"sku": null,
	"buy_limit_days": null,
	"buy_limit_qty": null,
	"order_min_qty": null,
	"buy_conditions": null,
	"buying_read": "姑姑姑姑",
	"has_freight": false,
	"freight": 0,
	"freight_qty": null,
	"incr_qty": null,
	"incr_freight": null,
	"views_count": 4,
	"shares_count": 0,
	"likes_count": 0,
	"orders_count": 10,
	"comments_count": 0,
	"topped_at": null,
	"user_topped_at": null,
	"category_topped_at": null,
	"extra": {
		"low": 1,
		"middle": 2
	},
	"created_at": "2022-03-02T07:11:39Z",
	"updated_at": "2022-03-07T09:52:38Z",
	"deleted_at": null,
	"content_images": [
		{
			"node": "public:2022/03/02/O64NNweubOV0l8PDyrhrXfd6J5a6VVeDzhXTMCJ0VODBJMJO2iPEf8Qvg1LoKk6H.jpeg"
		}
	],
	"category": {
		"id": 5,
		"name": "服务报告",
		"icon": null,
		"sort": 8,
		"selling_count": 43,
		"trashed_count": 6,
		"created_at": "2021-02-08T06:10:49Z",
		"updated_at": "2022-03-02T07:11:39Z",
		"deleted_at": null,
		"commodities_count": 49
	},
	"brands": [],
	"shop_info": {
		"user_id": 17,
		"is_original": false,
		"weChat": "Ffftyyyy",
		"qrCode": null,
		"phone": null
	},
	"user": {
		"id": 17,
		"name": "残残",
		"bio": "简介经过此方法的点点滴滴打电话夫妇红枫湖风景刚才嘻嘻哈哈行动复合型献愁供恨给哥带来惊喜深有感触，这样",
		"sex": 2,
		"location": "四川省 成都市 成华区",
		"avatar": null,
		"bg": null,
		"email_verified_at": null,
		"phone_verified_at": null,
		"feed_topics_count": 8,
		"inviter": null,
		"ip_address": null,
		"canceled": 0,
		"created_at": "2019-12-10T01:24:34Z",
		"updated_at": "2021-11-02T06:10:18Z",
		"deleted_at": null
	},
	"brand": null,
	"brand_id": null
}
```



### 系统消息列表

```text
data.data.type
新增：mall-order，订单消息

data.data.resource.type："seller" 卖家订单消息
```
#### 接口URL
> http://t3.cn/api/v2/user/notifications?type=system

#### 请求方式
> GET

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
type | system | Text | 是 | -
#### 成功响应示例
```javascript
{
	"data": [
		{
			"id": "4ab8d84d-aea2-4244-a6b0-2e29968eed3f",
			"created_at": "2022-06-22T07:05:58Z",
			"read_at": "2022-06-22T07:12:00Z",
			"data": {
				"type": "mall-order",
				"content": "你的订单“20220620174345625MO1FK”，买家已提交退款申请，请及时处理，点击查看详情",
				"status": "RF_APPLY",
				"resource": {
					"id": 1856,
					"type": "seller"
				}
			}
		}
	]
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
data | - | Object | 返回数据
data.data.type | mall-order | String | "mall-order" 商场订单类型
data.data.content | 你的订单“20220620174345625MO1FK”，买家已提交退款申请，请及时处理，点击查看详情 | String | 消息内容
data.data.status | RF_APPLY | String | 订单状态
data.data.resource | - | Object | 消息源数据
data.data.resource.id | 1856 | Number | 消息源数据id
data.data.resource.type | seller | String | "seller" 卖家订单消息



### 批量操作确认收货

```text
聚合订单的子订单批量确定收货使用
```
#### 接口URL
> http://t3.cn/api/v2/mall/orders/multiple-confirm

#### 请求方式
> POST

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
orders[] | - | - | 是 | 数组
orders[0] | order1 | Text | 是 | -
orders[1] | order2 | Text | 是 | -



### 批量操作发货（用于聚合订单发货）

```text
order：主订单ID
```
#### 接口URL
> http://t3.cn/api/v2/mall/order/expresses/multiple

#### 请求方式
> POST

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
company_id | 1 | - | 是 | 物流公司ID
number | 4455555 | - | 是 | 物流单号（单个物流时）
numbers[] | 123 | - | 是 | 物流单号【数组】
remark | 订单备注 | - | 是 | 物流备注
orders[] | 1382 | Array | 是 | 子订单ID（数组）
orders[] | 1370 | - | 是 | -



### 获取余额记录

```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://t3.cn/api/v2/plus-pay/orders?limit=15&action=income&after=0

#### 请求方式
> GET

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
limit | 15 | String | 是 | -
action | income | String | 是 | income: 收入，expenses-支出
after | 0 | String | 是 | -
#### 成功响应示例
```javascript
[
	{
		"id": 715,
		"owner_id": 3452,
		"target_type": "mall_orders",
		"target_id": "1858",
		"title": "卖出商品“会员-图片B01”",
		"body": "卖出商品“会员-图片B01”",
		"type": 1,
		"amount": 3,
		"state": 2,
		"created_at": "2022-06-22T08:21:05Z",
		"updated_at": "2022-06-22T08:21:05Z"
	}
]
```



### 获取配置bootstrappers

```text
mall字段中增加refund_count、default_confirm_receipt等信息
```
#### 接口URL
> http://t3.cn/api/v2/bootstrappers

#### 请求方式
> GET

#### 成功响应示例
```javascript
{
	"server:version": "3.1.0",
	"mall": {
		"shopkeeper": "ability",
		"ability_name": "mall:shopkeeper",
		"allow_v10n_types": [
			"user"
		],
		"pricing_policy": "both",
		"score_min_percent": 0,
		"amount_tax_rate": 0.5,
		"score_tax_rate": 0.5,
		"share_commodity_ids": [
			1,
			2,
			3
		],
		"share_every_discount": 4,
		"all_categories_icon": {
			"url": "https://new-ts-plus.oss-cn-shanghai.aliyuncs.com/2020/12/23/cYH2lb5FLZRZFq0A8KovskgL63hDxH0qzrH7520KYLGTDQRCNmgunBImeyZNHxPA.png",
			"vendor": "aliyun-oss",
			"mime": "image/png",
			"size": 532422,
			"dimension": {
				"width": 494,
				"height": 494
			},
			"node": "public:2020/12/23/cYH2lb5FLZRZFq0A8KovskgL63hDxH0qzrH7520KYLGTDQRCNmgunBImeyZNHxPA.png"
		},
		"default_confirm_receipt": 5,
		"feedback_count": 2,
		"refund_count": 5,
		"refund_explain": "退货说明",
		"refund_deliver_time": 4,
		"refund_negotiate_user_time": 4
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
mall.default_confirm_receipt | 5 | Number | 最长等待收货时间
mall.feedback_count | 2 | Number | 允许最大反馈数量
mall.refund_count | 5 | Number | 退货次数
mall.refund_explain | 退货说明 | String | 退货说明
mall.refund_deliver_time | 4 | Number | 卖家同意退款后/协商退款买家操作退货期限
mall.refund_negotiate_user_time | 4 | Number | 买家申请协商处理期限