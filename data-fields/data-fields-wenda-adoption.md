---
id: data-fields-wenda-adoption
title: wenda-adoption
---

### 采纳的答案 wenda_adoption

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint | 自增id |
| wenda_id | int(10) unsigned | 问题ID |
| feed_id | int(10) unsigned | 被采纳的答案【动态】 |
| offer | int(10) unsigned | 悬赏的积分 |
| remark | varchar(191) | 对答案的点评 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |