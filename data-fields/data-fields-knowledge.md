---
id: data-fields-knowledge
title: knowledge
---

知识

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | bigint(20) unsigned | 自增ID |
| author_id | int(10) unsigned | 作者 |
| category_id | int(10) unsigned | 分类ID |
| cover | varchar(128) | 封面 |
| title | varchar(64) | 标题 |
| subtitle | varchar(64) | 二级标题 |
| intro | varchar(191) | 简介 |
| price | int(10) unsigned | 价格，默认为0，废弃 |
| score | int(10) unsigned | 所需积分 |
| chapters_enabled | tinyint(3) unsigned | 是否开启章节 |
| free_content | text | 免费内容 |
| paid_content | text | 付费内容 |
| views_count | int(10) unsigned | 查看量 |
| likes_count | int(10) unsigned | 点赞量 |
| orders_count | int(10) unsigned | 订单量 |
| comments_count | int(10) unsigned | 评论量 |
| chapters_count | smallint(5) unsigned | 章节数量 |
| chapters_pub_count | smallint(5) unsigned | 已发布的章节数量 |
| chapters_unpub_count | smallint(5) unsigned | 未发布的章节数量 |
| topped_at | timestamp | 全局置顶，有值表示已被置顶 |
| author_topped_at | timestamp | 作者个人主页置顶，有值表示已被置顶 |
| category_topped_at | timestamp | 分类置顶，有值表示已被置顶 |
| status | tinyint(3) unsigned | 状态 |