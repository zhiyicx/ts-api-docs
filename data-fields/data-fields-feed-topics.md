---
id: data-fields-feed-topics
title: feed-topics
---

### 圈子 feed_topics

[相关文档](https://zhiyicx.github.io/ts-api-docs/api-v2/feed/#%E5%88%9B%E5%BB%BA%E5%9C%88%E5%AD%90)

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int unsigned | 自增ID |
| name | string | 圈子名称 |
| logo | string | 圈子图标 |
| bg | string | 圈子背景图 |
| desc | string | 圈子介绍  |
| creator_user_id | bigint unsigned | 创建者ID |
| feeds_count | int unsigned | 圈子下的动态数量 |
| followers_count | int unsigned | 成员数 |
| shares_count | int unsigned | 被分享次数 |
| creator_share_count | int unsigned | 圈主分享次数 |
| hot_at | int unsigned | 是否热门 |
| recommend | int unsigned | 是否推荐 |
| status | int unsigned | 圈子状态 |
| reward_amount_count | int unsigned | 被打赏总数 |
| all_feeds_likes_count | int unsigned | 动态被点赞次数 |
| join_permission | int unsigned | 加圈权限 |
| private | int unsigned | 暂时无用 |
| visible | int unsigned | 公开/私密 |
| join_mode | int unsigned | 加圈模式 |
| invited_audit | int unsigned | 被邀请人是否需要审核 |
| expense | int unsigned | 加圈费用 |
| divide | int unsigned | 邀请分成 |
| topic_category_id | int unsigned | 分类ID |
| publish_permission | int unsigned | 发布内容权限 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |