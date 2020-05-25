### apply_for_join_topic_logs

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | bigint(20) unsigned | 记录ID |
| topic_id | int(10) unsigned| 话题ID |
| user_id | bigint(20) unsigned| 申请者ID |
| status | varchar(10)|	utf8mb4| 状态 |
| invitor | bigint(20) unsigned| 邀请者 |
| expense | int(10) unsigned|总的花费|
| draw_invitor | int(10) unsigned|邀请者返利|
| draw_creator | int(10) unsigned|圈主获得|
| draw_platform | int(10) unsigned|平台抽成|
| created_at | timestamp| 创建时间 |
| updated_at | timestamp| 最后更新时间 |