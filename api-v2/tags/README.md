---
id: api-v2-tags
title: 标签
---

## 获取所有标签

```
GET /api/v2/api/v2/tags
```

### 响应

```
Status: 200 OK
```
```json
[
    {
        "id": 1,
        "name": "分类1",
        "weight": 5,
        "tags": [
            {
                "id": 1,
                "name": "标签1",
                "tag_category_id": 1,
                "weight": 5
            }
        ]
    }
]
```

| 字段 | 描述 |
|:----:|----|
| id | 分类 ID |
| name | 分类名称 |
| weight | 分类权重，越大越靠前 |
| tags | 分类下所有标签 |
| tags.*.id | 标签 ID |
| tags.*.name | 标签名称 |
| tags.*.tag_category_id | 如同 `id` 一样，都是分类ID。|
| tags.*.weight | 权重值，值越大排序越靠前 |



## 获取一个用户的标签

```
GET /api/v2/users/:user/tags
```

## 获取当前认证用户的标签

```
GET /api/v2/user/tags
```

响应

```
Status: 200 OK
```
```json
[
    {
        "id": 1,
        "name": "标签1",
        "tag_category_id": 1
    }
]
```

| 字段 | 描述 |
|:----:|----|
| id | 标签 ID。 |
| name | 标签名称 |
| tag_category_id | 标签分类 ID |

## 当前认证用户附加一个标签

```
PUT /api/v2/user/tags/:tag
```


响应

```
Status: 204 No Content
```

## 当前认证用户分离一个标签

```
DELETE /api/v2/user/tags/:tag
```


响应

```
Status: 204 No Content
```