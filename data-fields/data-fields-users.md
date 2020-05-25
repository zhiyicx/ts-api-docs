---
id: data-fields-users
title: users
---

### 用户表 users

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint | 自增id |
| name | varchar(150) | 用户ID |
| phone | varchar(50) | 手机号 |
| password | varchar(191) | 密码 |
| bio | varchar(191)(20) | 简介 |
| sex | tinyint(4) | 性别 |
| location | varchar(191) | 所在地区 |
| avatar | varchar(191) | 头像 |
| bg | varchar(191) | 背景图 |
| email_verified_at | timestamp | 邮箱验证时间 |
| phone_verified_at | timestamp | 手机验证时间 |
| feed_topics_count | int(10) unsigned | 圈子统计 |
| remember_token | varchar(100) |  |
| inviter | int(10) unsigned | 邀请码 |
| canceled | tinyint(1) | 是否已注销 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
| deleted_at | timestamp | 禁用时间 |