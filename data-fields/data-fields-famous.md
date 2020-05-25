---
id: data-fields-famous
title: famous
---

### 注册关注 famous

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int | 自增id |
| type | varchar | 类型[ {each: 相互关注}, {followed: 被关注}] |
| user_id | int | 被关注对象 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
