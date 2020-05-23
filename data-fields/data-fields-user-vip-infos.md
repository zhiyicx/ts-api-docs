---
id: data-fields-user-vip-infos
title: user-vip-infos
---

用户VIP信息表

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | bigint | 自增id |
| user_id | int(10) unsigned | 用户ID |
| level | enum('low','middle','high') | VIP等级 |
| end_time | timestamp | 到期时间 |
| last_pay_method | varchar(20) | 最后一次购买VIP的支付方式 |
| last_vip_info | json | 最后一次购买VIP的等级信息 |