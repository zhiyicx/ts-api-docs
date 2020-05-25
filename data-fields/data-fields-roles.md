---
id: data-fields-roles
title: roles
---

### 所有用户组[角色] roles

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int | 自增id |
| name | varchar | 用户组名 |
| display_name | varchar | 展示名 |
| description | text | 用户组简介 |
| no_delete | tinyint(1) unsigned | 是否不可被删除1，不可删除，0可以删除 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |