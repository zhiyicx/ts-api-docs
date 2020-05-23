---
id: data-fields-mall-brands
title: mall-brands
---

商品品牌

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | bigint(20) unsigned | 自增ID |
| user_id | bigint(20) unsigned | 创建者 |
| category_id | smallint(5) unsigned | 品牌分类ID |
| audit | tinyint(1) | 是否审核 |
| name | varchar(191) | 品牌名称 |
| desc | varchar(191) | 品牌简介 |
| avatar | varchar(191) | 品牌图标 |
| sub_avatar | varchar(191) | 品牌副图标 |
| recommend | tinyint(1) | 是否推荐 |
| sort | smallint(5) unsigned | 排序 |