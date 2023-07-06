---
id: api-v2-aboutus
title: 关于我们
---

## 关于我们页面

```
GET /api/v2/api/v2/aboutus
```

响应

```
Status 200 Ok
```

返回值：完整的HTML 页面


## 查询各类协议
> 根据类型来查看相关的条款
```http request
GET /api/v2/show-term
```
| 参数 | 类型 | 描述 |
|:----:|----|----|
| `type` | `string` | **必须**，支持{`user_agreement`: 用户协议, `privacy_agreement`: 隐私政策} |

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

|  参数   | 类型   | 描述                                                      |
| :-----: | ------ | --------------------------------------------------------- |
|   url   | string | 后台配置的url完整地址（含协议头，如http://），app优先使用 |
| content | string | 后台配置的文本信息，支持富文本                            |

