---
id: data-fields-vip-orders
title: vip-orders
---

用户购买VIP的订单记录

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | bigint | 自增id |
| trade_no | varchar(32) | 提供给三方的交易订单号 |
| user_id | int(10) unsigned | 用户 |
| total_amount | int(10) unsigned | 总共支付金额 |
| quantity | smallint(5) unsigned | 购买数量 |
| pay_method | varchar(24) | 支付方式 |
| pay_amount | int(10) unsigned | 支付金额 |
| pay_status | tinyint(3) unsigned | 支付状态 |
| level | varchar(6) | 购买的VIP等级 |
| duration | smallint(5) unsigned | 购买的VIP的月份数量 |
| vip_info | json | 购买的VIP信息 |
| paid_at | timestamp | 支付时间 |
| user_deleted_at | timestamp | 用户删除订单信息 |
| platform_deleted_at | timestamp | 平台删除订单信息 |