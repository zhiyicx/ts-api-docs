---
id: data-fields-wendas
title: wendas
---

采纳的答案

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | bigint | 自增id |
| author_id | int(10) unsigned | 提问者 |
| category_id | int(10) unsigned | 分类 |
| title | varchar(160) | 问题标题 |
| summary | varchar(160) | 问题简介 |
| content | text | 问题内容 |
| content_medias | text | 内容的媒体 |
| offer | int(10) unsigned | 悬赏积分 |
| adoption | tinyint(1) | 是否采纳 |
| views_count | int(10) unsigned | 查看数 |
| likes_count | int(10) unsigned | 点赞数 |
| favorites_count | int(10) unsigned | 喜欢数 |
| comments_count | int(10) unsigned | 评论数 |
| shares_count | int(10) unsigned | 分享数 |
| hot_index | int(10) unsigned | 热门指数 |
| recommend_at | timestamp | 推荐，有值表示已被推荐 |
| topped_at | timestamp | 置顶，有值表示已被置顶 |
| category_topped_at | timestamp | 分类置顶，有值表示被置顶到分类 |