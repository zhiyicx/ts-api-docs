---
id: data-fields-mall-order-expresses
title: mall-order-expresses
---

### 商品订单快递信息 mall_order_expresses

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint | 自增id |
| order_id | bigint(20) unsigned | 订单表ID |
| company_id | int(10) unsigned | 快递公司表ID |
| number | varchar(32) | 快递单号 |
| remark | varchar(150) | 备注 |
| queried_at | timestamp | 查询时间 |
| status | tinyint(3) unsigned | 状态 |
| is_check | tinyint(3) unsigned | 是否确认收货 |
| infos | text | 快递详细信息 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |