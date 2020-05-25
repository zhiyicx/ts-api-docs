---
id: data-fields-commodity-condition-shares
title: commodity-condition-shares
---

### 商品被分享的记录 commodity_condition_shares

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint | 自增id |
| commodity_id | int unsigned | 商品ID |
| user_id | bigint unsigned | 操作分享的用户 |
| share_count | int unsigned | 分享统计 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
