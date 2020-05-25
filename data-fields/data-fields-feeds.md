---
id: data-fields-feeds
title: feeds
---

### 动态 feeds

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int | 自增id |
| feed_from | int | 问题id |
| user_id | tinyint | 动态来源 1:pc 2:h5 3:ios 4:android 5:其他 |
| feed_content | text | 动态内容 |
| like_count | int | 点赞统计 |
| feed_view_count | int | 阅读统计 |
| feed_comment_count | int | 评论统计 |
| audit_status | tinyint | 审核状态 |
| feed_mark | bigint | 移动端唯一标记 |
| feed_client_id | varchar(191) | 发布IP |
| repostable_id | int(10) unsigned | 关联的资源ID |
| repostable_type | string | 关联的资源类型，如 infos,events等，表示作为这些资源的评论 |
| images | text | 动态图片 |
| video | text | 动态视频 |
| hot | int(10) unsigned | 热门指数，被点赞+1，被评论+5 |
| share_counts | int(10) unsigned | 被分享次数 |
| visible | tinyint(1) unsigned | 是否可见: 1可见，0仅自己可见 |
| recommended_at | timestamp | 推荐时间，有值表示已被推荐 |
| theme_id | int(10) unsigned | 关联的话题 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
| deleted_at | timestamp | 软删除时间 |
