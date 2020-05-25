---
id: data-fields-kd100-companies
title: kd100-companies
---

### 快递100相关快递公司 kd100_companies

| 字段 | 类型 | 说明 |
| ------ | ------ | ------ |
| id | int(10) unsigned | 自增ID |
| name | string | 快递公司名字 |
| code | string | 快递公司代码 |
| is_popular | tinyint(3) unsigned | 是否常用 |
| usages_count | int(10) unsigned | 使用统计 |
| created_at | timestamp | 创建时间 |
| updated_at | timestamp | 最后更新时间 |