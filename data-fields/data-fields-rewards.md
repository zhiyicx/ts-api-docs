---
id: data-fields-rewards
title: rewards
---

### 打赏记录 【弃用，deprecated】rewards

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int | 自增id |
| target_user | int | 被打赏用护 |
| user_id | int | 回答者 |
| amount | bigint | 打赏金额 |
| rewardable_id | int | 被打赏的资源id |
| rewardable_type | varchar | 被打赏的资源类型 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |
