---
id: data-fields-client-versions
title: client_versions
---

### 客户端版本控制 client_versions

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int | 自增id |
| type | varchar | 版本: android/ios |
| version | varchar | 版本名称 |
| version_code | int | 版本号 |
| description | text | 版本介绍 |
| link | varchar | 地址: ios对应appstore或者其他地址 |
| is_forced | tinyint | 是否强制更新 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
