---
sidebarDepth: 3
---

# 快递100相关API

## 快递100配置

```json5
{
  // 是否启用快递100的相关API功能
  // 未启用时，实时查询、云打印、智能判断不可用
  "enabled": false,
  
  // 快递100授权KEY
  "key": "KFBmGAmj8094",

  // 用户实时查询的编号
  "customer": "0CE40F6B598EE150B661FF4549E03DCA",
  
  // 用于面单打印的密钥
  "secret": "720a99156868487562815b173554846",
  
  // 用于智能判断快递公司的KEY
  // 不设置默认使用 授权KEY
  "auto_key": "KFBmGAmj8094",
}
```

### 获取快递100配置

> 快递100配置只有后台管理员才能获取

```
GET /api/v2/kd100/configs
```

响应：

```
Status: 200 OK
```
```json5
{
  /* 配置信息看“快递100配置” */
}
```

### 修改快递100配置

> 快递100配置只有后台管理员才能修改

```
PUT /api/v2/kd100/configs
```

请求参数，[快递100配置](#快递100配置)

响应：

```
Status: 200 OK
```
```json5
{
  "message": "保存成功",
}
```

## 快递公司

### 获取单个快递公司

```
GET /api/v2/kd100/companies/{company.id}
```

响应：

```
Status: 200 OK
```
```json5
{
    "id": 1,
    "name": "顺丰速运",  // 快递公司
    "code": "shunfeng",  // 快递公司编码
    "is_popular": true,  // 是否常用或常见快递公司
    "usages_count": 0,   // 使用统计，每发一个快递会+1
    "created_at": "2019-08-29 19:26:29",
    "updated_at": "2019-08-29 19:26:29",
}
```

### 获取快递公司列表

```
GET /api/v2/kd100/companies
```

查询参数：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `is_popular` | `integer` | **可选**，0:获取不常用的快递公司；1:获取常用快递公司；默认全部 |
| `keyword` | `string` | **可选**，搜索关键字，在名称和编码中搜索 |
| `offset` | `integer` | **可选**，本地已有加载数据数量 |
| `limit` | `integer` | **可选**，获取条数，默认15 |
| `order` | `string` | **可选**，排序，多个逗号分隔；支持的排序字段：<br>id, is_popular, usages_count, created_at, updated_at<br><br>如：usages_count desc, updated_at desc |
| `page` | `string` | **可选**，第几页，如果有此参数，则返回分页模式的数据 |

响应：

```
Status: 200 OK
```
```json5
[
    { /* 单个快递公司 */ },
    { /* 单个快递公司 */ }
]
```

### 添加快递公司

> 快递公司只有后台管理员才能创建

```
POST /api/v2/kd100/companies
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **必须**，公司名称或公司快递产品名称 |
| `code` | `string` | **必须**，对应的编码，不能重复 |
| `is_popular` | `boolean` | **可选**，是否常用/常见快递公司，默认false |

响应：

```
Status: 201 Created
```
```json5
{ /* 单个快递公司 */ }
```

### 修改快递公司

> 快递公司只有后台管理员才能修改

```
PUT|PATCH /api/v2/kd100/companies/{company.id}
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `name` | `string` | **可选**，公司名称或公司快递产品名称 |
| `code` | `string` | **可选**，对应的编码，不能重复 |
| `is_popular` | `boolean` | **可选**，是否常用/常见快递公司，默认false |

响应：

```
Status: 200 OK
```
```json5
{ /* 单个快递公司 */ }
```

### 删除快递公司

> 快递公司只有后台管理员才能删除，且`usages_count > 0`时不允许删除

```
DELETE /api/v2/kd100/companies/{company.id}
```

响应：

```
Status: 204 No Content
```
