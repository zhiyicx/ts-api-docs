---
id: data-fields-mall-commodities
title: mall-commodities
---

商品

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | bigint(20) unsigned | 自增ID |
| user_id | int(10) unsigned | 发布者 |
| type | enum('member','normal','score') | 商品类型 |
| category_id | int(10) unsigned | 商品分类 |
| photos | text | 商品图片 |
| title | varchar(60) | 标题 |
| price | int(10) unsigned | 价格 |
| score | int(10) unsigned | 积分 |
| market_price | int(10) unsigned | 市场价 |
| options | text | 规格 |
| top_text | text | 详情顶部文字 |
| bottom_text | text | 详情地步文字 |
| content_images | text | 详情图片 |
| buy_limit_days | smallint(5) unsigned |  |
| buy_limit_qty | smallint(5) unsigned |  |
| order_min_qty | smallint(5) unsigned |  |
| buy_conditions | text |  |
| buying_read | text |  |
| remote_areas | text |  |
| has_freight | tinyint(3) unsigned |  |
| freight | smallint(5) unsigned |  |
| freight_qty | smallint(5) unsigned |  |
| incr_qty | smallint(5) unsigned |  |
| incr_freight | smallint(5) unsigned |  |
| order_max_qty | smallint(5) unsigned |  |
| views_count | int(10) unsigned |  |
| shares_count | int(10) unsigned |  |
| likes_count | int(10) unsigned |  |
| orders_count | int(10) unsigned |  |
| comments_count | int(10) unsigned |  |
| topped_at | timestamp |  |
| user_topped_at | timestamp |  |
| category_topped_at | timestamp |  |
| third_parties | text |  |
| extra | json |  |