---
id: data-fields-knowledge-categories
title: knowledge-categories
---

### 知识章节 knowledge_chapters

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint(20) unsigned | 自增ID |
| knowledge_id | int(10) unsigned | 父级知识ID |
| sequence | smallint(5) unsigned | 章节序列 |
| image | varchar(128) | 章节配图 |
| title | varchar(64) | 章节标题 |
| intro | varchar(191) | 章节简介 |
| free_content | text | 章节免费内容 |
| paid_content | text | 章节付费内容 |
| published | tinyint(3) unsigned | 是否发布 |
| views_count | int(10) unsigned | 浏览数量 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |