---
id: api-v2-aboutus
title: 关于我们
---

## 关于我们页面

```
GET /api/v2/aboutus
```

响应

```
Status 200 Ok
```

HTML 页面


## 查询各类协议
> 根据类型来查看相关的条款
```http request
GET /api/v2/show-term
```
| 参数 | 类型 | 描述 |
|:----:|----|----|
| `type` | `string` | **必须**，暂时支持{`user_agreement`: 用户协议, `privacy_agreement`: 隐私政策} |

响应
```
Status: 200 OK
```

```json5
    {
        url: 'https://thinksns.zhibocloud.cn',
        content: '# 用户协议',
    }
```
