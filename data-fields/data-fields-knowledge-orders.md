---
id: data-fields-knowledge-orders
title: knowledge-orders
---

知识订单

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | bigint(20) unsigned | 自增ID |
| trade_no | varchar(32) | 三方支付交易号 |
| user_id | int(10) unsigned | 购买用户 |
| author_id | int(10) unsigned | 作者 |
| knowledge_id | int(10) unsigned | 知识ID |
| total_amount | int(10) unsigned | 总金额,已弃用 |
| total_score | int(10) unsigned | 总积分 |
| author_amount | int(10) unsigned | 作者所得金额，已弃用 |
| author_score | int(10) unsigned | 作者所得积分 |
| tax_amount | int(10) unsigned | 平台抽成金额，已弃用 |
| tax_score | int(10) unsigned | 平台抽成积分 |
| pay_method | varchar(24) | 支付方式 |
| pay_amount | int(10) unsigned | 支付金额，已弃用 |
| pay_balance | int(10) unsigned | 余额支付，已弃用 |
| pay_score | int(10) unsigned | 支付积分 |
| pay_status | tinyint(3) unsigned | 支付状态 |
| paid_at | timestamp | 支付时间，有值表示已支付 |
| address | text | 地址 |
| user_remark | varchar(190) | 买家备注 |
| author_remark | varchar(190) | 作者备注 |
| comment_id | int(10) unsigned | 店铺ID |
| last_read_cid | smallint(5) unsigned | 最后阅读的章节 |
| user_deleted_at | timestamp | 用户删除订单，有值表示已删除 |
| author_deleted_at | timestamp | 作者删除订单，有值表示已删除 |