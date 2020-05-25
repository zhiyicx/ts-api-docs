---
id: data-fields-certifications
title: certifications
---

### 认证记录 user_verifications

| 字段 | 类型 | 说明 |
| ----- | ----- | ----- |
| type | varchar(20) | 认证类型 |
| user_id | int | 被认证者 |
| data | json | 认证消息 |
| auditor_id | int | 审查员 |
| state | tinyint | 认证状态 |
