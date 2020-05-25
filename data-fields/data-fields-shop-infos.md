---
id: data-fields-shop-infos
title: shop-infos
---

### 卖家联系信息 shop_infos

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint | 自增id |
| user_id | bigint(20) unsigned | 用户id |
| is_original | tinyint(1) | 是否平台卖家 |
| weChat | varchar(191) | 微信号 |
| qrCode | varchar(191) | 微信二维码 |
| phone | varchar(191) | 联系手机 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |