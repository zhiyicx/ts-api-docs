---
id: data-fields-knowledge-categories
title: knowledge-categories
---

### 知识分类 knowledge_categories

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint(20) unsigned | 自增ID |
| name | varchar(24) | 分类名称 |
| icon | varchar(191) | 分类图标 |
| sort | int(11) unsigned | 分类排序 |
| unpublished_count | int(10) unsigned | 未发布数量 |
| published_count | int(10) unsigned | 已发布数量 |
| trashed_count | int(10) unsigned | 回收站数量 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
| deleted_at | timestamp | 软删除时间 |