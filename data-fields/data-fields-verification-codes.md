---
id: data-fields-verification-codes
title: verification_codes
---

### 验证码记录 verification_codes

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int | 自增id |
| channel | varchar | 发送频道，例如 mail, sms |
| user_id | int | 回答者 |
| account | text | 发送账户 |
| code | varchar | 验证码 |
| state | tinyint | 状态 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
| deleted_at | timestamp | 软删除时间 |

