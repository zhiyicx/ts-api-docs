---
id: data-fields-event-categories
title: event-categories
---

### 活动分类 event_categories

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint | 自增id |
| user_id | bigint | 创建者 |
| audited | tinyint(1) unsigned | 是否通过审核 |
| title | varchar | 活动标题 |
| avatar | varchar | 活动封面节点 |
| category_id | int(10) unsigned | 活动分类ID |
| area | varchar | 活动区域 |
| address | varchar | 活动地址 |
| expense | int(10) unsigned | 活动费用 |
| date | datetime | 活动时间 |
| content | text | 活动内容 |
| position | varchar | 坐标? |
| views_count | int(10) unsigned | 浏览量 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 更新时间 |
| deleted_at | timestamp | 软删除时间 |
