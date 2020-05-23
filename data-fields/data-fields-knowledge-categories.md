---
id: data-fields-knowledge-categories
title: knowledge-categories
---

知识

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | bigint(20) unsigned | 自增ID |
| name | varchar(24) | 分类名称 |
| icon | varchar(191) | 分类图标 |
| sort | int(11) unsigned | 分类排序 |
| unpublished_count | int(10) unsigned | 未发布数量 |
| published_count | int(10) unsigned | 已发布数量 |
| trashed_count | int(10) unsigned | 回收站数量 |