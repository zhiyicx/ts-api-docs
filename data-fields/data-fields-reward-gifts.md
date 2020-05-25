---
id: data-fields-reward-gifts
title: reward-gifts
---

### 用于打赏的礼物 reward_gifts

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint | 自增id |
| name | varchar(32) | 礼物名称 |
| price | int(10) unsigned | 礼物所需积分 |
| icon | varchar(191) | 礼物图标 |
| effect_icon | varchar(191) | 特效图标 |
| sort | int(11) | 排序 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |