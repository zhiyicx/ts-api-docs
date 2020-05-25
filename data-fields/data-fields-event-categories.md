---
id: data-fields-event-categories
title: event-categories
---

### 活动分类 event_categories

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint | 自增id |
| parent_id | bigint unsigned | 父级ID |
| sort | int unsigned | 排序 |
| name | string | 分类名称 |
| avatar | string | 分类图标 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
| deleted_at | timestamp | 软删除时间 |
