---
id: data-fields-feed-topic-user-links
title: feed-topic-user-links
---

### 圈子成员 feed_topic_user_links

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| index | int unsigned | 自增ID |
| topic_id | bigint unsigned | 圈子ID |
| user_id | bigint unsigned | 成员ID |
| feeds_count | int unsigned | 圈子动态统计 |
| following_at | timestamp | 加入圈子的时间 |
| can_pub | tinyint unsigned | 是否可以发布动态 |
| role | string | 所在圈子的角色 |
| invitor | bigint unsigned | 邀请人ID |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |