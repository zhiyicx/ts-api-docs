---
id: data-fields-feed-topic-reward-logs
title: feed-topic-reward-logs
---

### 圈子被打赏的记录 feed_topic_reward_logs

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int unsigned | 话题ID |
| user_id | int unsigned | 打赏的用户 |
| target_type | int unsigned | 打赏的类型 |
| target_id | int unsigned | 打赏类型ID |
| target_user_id | int unsigned | 接收者 |
| name | int unsigned | 道具名称 |
| icon | int unsigned | 道具图标 |
| price | int unsigned | 道具单价 |
| numbers | int unsigned | 道具数量 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
| deleted_at | timestamp | 软删除时间 |