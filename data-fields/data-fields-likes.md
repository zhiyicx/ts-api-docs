---
id: data-fields-likes
title: likes
---

### 点赞表 likes

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int | 自增id |
| user_id | int | 点赞用户 |
| likeable_id | int | 被点赞的资源id |
| likeable_type | varchar | 被点赞的资源类型 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |