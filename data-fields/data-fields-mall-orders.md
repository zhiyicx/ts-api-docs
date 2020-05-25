---
id: data-fields-mall-orders
title: mall-orders
---

### 商城订单 mall_orders

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint | 自增id |
| trade_no | varchar(32) | 交易号 |
| multiple_trade_no | varchar(191) | 购物车付款订单号 |
| user_id | int(10) unsigned | 买家 |
| shopkeeper_id | int(10) unsigned | 卖家 |
| commodity_id | int(10) unsigned | 商品id |
| quantity | smallint(5) unsigned | 数量 |
| is_orig_price | tinyint(3) unsigned | 是否原价购买 |
| is_share_discount | tinyint(1) | 是否有分享折扣 |
| total_amount | int(10) unsigned | 总价 |
| total_score | int(10) unsigned | 总积分 |
| shop_amount | int(10) unsigned | 卖价所得金额 |
| shop_score | int(10) unsigned | 卖价所得积分 |
| tax_amount | int(10) unsigned | 平台抽成金额 |
| tax_score | int(10) unsigned | 平台抽成积分 |
| freight | int(10) unsigned | 重量 |
| pay_method | varchar(24) | 支付方式 |
| pay_amount | int(10) unsigned | 支付金额 |
| pay_balance | int(10) unsigned | 钱包余额支付金额 |
| pay_score | int(10) unsigned | 积分支付 |
| pay_status | tinyint(3) unsigned | 支付状态 |
| paid_at | timestamp | 支付时间 |
| receipt_at | datetime | 确认收货时间 |
| address | text | 订单地址 |
| user_remark | varchar(150) | 买家备注 |
| shop_remark | varchar(150) | 卖家备注 |
| commodity_option | varchar(150) | 订单商品的规格 |
| comment_id | int(10) unsigned | 订单点评ID |
| expresses_count | tinyint(3) unsigned | 快递数量 |
| user_deleted_at | timestamp | 买家删除订单 |
| shop_deleted_at | timestamp | 卖家删除订单 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |