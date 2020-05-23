---
id: data-fields-infos
title: infos
---

资讯

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | bigint unsigned | 自增ID |
| author_id | bigint(20) unsigned | 作者 |
| category_id | int(10) unsigned | 分类ID |
| title | varchar(60) | 标题 |
| summary | varchar(160) | 简介 |
| content | text | 内容 |
| content_medias | text | 内容中的媒体 |
| views_count | int(10) unsigned | 查看数量 |
| likes_count | int(10) unsigned | 点赞数量 |
| favorites_count | int(10) unsigned | 喜欢数量 |
| comments_count | int(10) unsigned | 评论数量 |
| shares_count | int(10) unsigned | 分享数量 |
| recommend_at | timestamp | 推荐时间，有值表示已被推荐 |
| topped_at | timestamp | 置顶时间，有值表示已被置顶 |
| category_topped_at | timestamp | 分类置顶时间，有值表示已被置顶 |