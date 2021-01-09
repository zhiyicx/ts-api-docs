---
title: 举报
---

# 举报

- [举报一个用户](#举报一个用户)
- [举报一条评论](#举报一条评论)
- [举报知识章节](#举报知识章节)
- [举报知识](#举报知识)
- [举报资讯](#举报资讯)
- [举报活动](#举报活动)
- [举报商品](#举报商品)
- [举报问题](#举报问题)
- [举报动态](#举报动态)

## 举报一个用户

```
POST /api/v2/report/users/{userId}
```

## 举报一条评论

```
POST /api/v2/report/comments/{commentId}
```

可选参数

| 名称 | 描述 |
|:----:|:-----|
| reason | 举报理由 |

响应

```
Http Status 201
```

```json
{
    "message": [
        "操作成功"
    ]
}
```

## 举报知识章节

```
POST /api/v2/knowledge/chapters/{chapter.id}/reports
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `reason` | `string` | **可选**，举报原因 |

响应：

```
Status: 201 Created
```

```json5
{
  "message": ["操作成功"]
}
```

## 举报知识

```
POST /api/v2/knowledge/{knowledge.id}/reports
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `reason` | `string` | **可选**，举报原因 |

响应：

```
Status: 201 Created
```

```json5
{
  "message": ["操作成功"]
}
```

## 举报资讯

```
POST /api/v2/infos/{info.id}/reports
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `reason` | `string` | **可选**，举报原因 |

响应：

```
Status: 201 Created
```

```json5
{
  "message": ["操作成功"]
}
```

## 举报活动

```http request
PUT /api/v2/user/events/{eventId}
```
| 参数 | 类型 | 描述 |
|----|----|----|
| `reason` | `string` | **必填**, 举报原因 |
响应:
```
Status: 201 Created
```
响应体:
```json5
{
  "message": "举报成功"
}
```

## 举报商品

```
POST /api/v2/mall/commodities/{commodity.id}/report
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `reason` | `string` | **可选**，举报原因 |

响应：

```
Status: 201 OK
```

```json5
{
  "message": ["操作成功"]
}
```

## 举报问题

```
POST /api/v2/wendas/{wenda.id}/reports
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `reason` | `string` | **可选**，举报原因 |

响应：

```
Status: 201 Created
```

```json5
{
  "message": ["操作成功"]
}
```

## 举报一个动态

```
POST /api/v2/feeds/{feedId}/reports
```

可选参数

| 名称 | 描述 |
|:----:|:-----|
| reason | 举报理由 |

响应

```
Http Status 201
```

```json
{
    "message": [
        "操作成功"
    ]
}
```
