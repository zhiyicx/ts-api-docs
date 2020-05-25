---
id: data-fields-comments
title: comments
---

### 评论 comments

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int | 自增id |
| target_user | int | 被评论者 |
| user_id | int | 回答者 |
| body | text | 答案内容 |
| reply_user | int | 被回复者「与被评论者不冲突」 |
| commentable_id | int | 被评论的资源id |
| commentable_type | varchar | 被评论的资源类型 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
| deleted_at | timestamp | 软删除时间 |
