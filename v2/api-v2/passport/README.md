---
id: api-v2-jwt-authorization
title: Json Web Token 授权
---

# 登录/注册

- [用户注册](#register)
- [用户登录](#login)
- [小程序注册登录](#miniprogram-login)
- [用户退出](#logout)
- [刷新 Token](#refresh)

<a name="register"></a>
## 用户注册 


```
POST api/v2/users
```

### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| phone | `string` |  Required, User China phone bumber. |
| name | `string`  | Required, User registerByPhone name. |
| verifiable_type | `string`  | Required, Notification serve verification type. `sms`|
| verifiable_code | `string`  | Required, Verification code.|

### 响应

```
Status: 200 OK
```
```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lcmdlLnRoaW5rc25zLXBsdXMuY29tL2FwaS92Mi91c2VycyIsImlhdCI6MTcyNTUwMTYxOSwiZXhwIjoxNzI2Nzk3NjE5LCJuYmYiOjE3MjU1MDE2MTksImp0aSI6ImhCaUZxTmpVWmtWUkI1ZHkiLCJzdWIiOjM4MDQsInBydiI6IjQ4ZTQ1MzgzMWNlYmE1ZTU3YTQ3NWU2ODY0OWNmZGVlNmU5N2Q4ZDIifQ.1G3iHlaQqf-U_XD1lpGSyxaUDPMN5vs1kPDZ7CV61NM",
    "ttl": 21600,
    "refresh_ttl": 43200
}
```

| 字段 | 描述 |
|:----:|----|
| token_type | Token 类型 |
| ttl | 过期时间，单位分钟 |
| refresh_ttl | 刷新过期时间，单位分钟 |




<a name="login"></a>
## 用户登录 

```
POST api/v2/auth/login
```

### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| login | `string` | **必须**，用户认证字段，可以是 `name` 、 `email` 和 `phone` 。 |
| verifiable_code | `string` | **可选**，登录验证码。 |
| password | `string` | **可选**，用户密码。 |


>`password` 或者 `verifiable_code` 必须选择一个，如果选择 `verifiable_code` 进行登录。那么 `login` 字段只能是 `phone` 或者 `email`。

### 响应

```
Status: 200 OK
```
```json
{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcGx1cy5pby9hcGkvdjIvYXV0aC9sb2dpbiIsImlhdCI6MTUxNTU3NDE0MSwiZXhwIjoxNTE1NTc3NzQxLCJuYmYiOjE1MTU1NzQxNDEsImp0aSI6Imx1MWtFcDd1UjZpWnoxV3giLCJzdWIiOjEsInBydiI6IjQ4ZTQ1MzgzMWNlYmE1ZTU3YTQ3NWU2ODY0OWNmZGVlNmU5N2Q4ZDIifQ.0_u1dgb-rSr2o7nIx4Q1n1NNcr1LMAtgTbKsFFdUvmg",
    "token_type": "bearer",
    "expires_in": 60,
    "refresh_ttl": 20160
}
```

| 字段 | 描述 |
|:----:|----|
| access_token | 授权 Token |
| token_type | Token 类型 |
| expires_in | 过期时间，单位分钟 |
| refresh_ttl | 刷新过期时间，单位分钟 |



<a name="miniprogram-login"></a>
## 小程序注册登录 

```
POST api/v2/wechat/mini-program
```

### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| code | `string` | **必填**，通过微信小程序的接口 `wx.login` 获取到的code。 |


### 响应

```
Status: 200 OK
```
```json
{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcGx1cy5pby9hcGkvdjIvYXV0aC9sb2dpbiIsImlhdCI6MTUxNTU3NDE0MSwiZXhwIjoxNTE1NTc3NzQxLCJuYmYiOjE1MTU1NzQxNDEsImp0aSI6Imx1MWtFcDd1UjZpWnoxV3giLCJzdWIiOjEsInBydiI6IjQ4ZTQ1MzgzMWNlYmE1ZTU3YTQ3NWU2ODY0OWNmZGVlNmU5N2Q4ZDIifQ.0_u1dgb-rSr2o7nIx4Q1n1NNcr1LMAtgTbKsFFdUvmg",
    "token_type": "bearer",
    "expires_in": 60,
    "refresh_ttl": 20160
}
```

| 字段 | 描述 |
|:----:|----|
| access_token | 授权 Token |
| token_type | Token 类型 |
| expires_in | 过期时间，单位分钟 |
| refresh_ttl | 刷新过期时间，单位分钟 |




<a name="logout"></a>
## 用户退出 

```
POST|PUT|PATCH|GET   api/v2/auth/logout
```

> 需要 `认证`

### 响应

```
Status: 200 OK
```
```json
{
    "message": "退出成功"
}
```

<a name="refresh"></a>
## 刷新 Token 

```
POST|PUT|PATCH|GET    api/v2/auth/refresh
```

> 需要 `认证`

### 响应

见 [用户登录](#login)
