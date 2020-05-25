---
id: data-fields-mall-brands
title: mall-brands
---

### 商品品牌 mall_brands

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint(20) unsigned | 自增ID |
| user_id | bigint(20) unsigned | 创建者 |
| category_id | smallint(5) unsigned | 品牌分类ID，关联mall_categories主键 |
| audit | tinyint(1) | 是否审核 |
| name | varchar(191) | 品牌名称 |
| desc | varchar(191) | 品牌简介 |
| avatar | varchar(191) | 品牌图标 |
| sub_avatar | varchar(191) | 品牌副图标 |
| recommend | tinyint(1) | 是否推荐 |
| sort | smallint(5) unsigned | 排序 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
| deleted_at | timestamp | 软删除时间 |