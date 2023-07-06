---
sidebarDepth: 2
title: 邀请
---


# 邀请

## 邀请配置

> 邀请配置在启动接口中返回`invite`，配置详情如下：

```json5
{
  // 是否启用邀请功能
  "enable": false,
  
  // 邀请者在邀请用户注册后可获得的积分数量
  "inviter_score": 0,

  // 受邀者注册成功后可获得的积分数量
  "invitee_score": 0,
  
  // 拷贝邀请码时，需要复制到剪贴板的内容
  "copy_content": "{邀请码}",
  
  // APP下载地址，用于生成二维码
  "app_download_url": "https://domain/path",
  
  // 用于计算邀请码的基数，36进制大写(用户ID+code_base)
  "code_base": 60947423,
}
```

## 邀请码

> 邀请码在用户信息中返回，key为`invite_code`；算法：36进制大写(用户ID+config.code_base)

## 设置邀请码

> 已设置邀请码的用户，不能再次设置。已设置邀请码的，用户信息中会有`inviter`表示邀请者ID

```
PATCH /api/v2/user/inviter
```

输入：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `invite_code` | `string` | **必须**，邀请码 |

响应：

```
Status: 204 No Content
```

## 我邀请的用户

> 列表按最后注册的用户排最前面返回数据

```
GET /api/v2/user/invited-users
```

查询：

| 参数 | 类型 | 描述 |
|:----:|----|----|
| `limit` | `integer` | **可选**，要获取的数量 |
| `offset` | `integer` | **可选**，偏移量，默认0 |

响应：

```
Status: 200 OK
```
```json5
{
  "scores_count": 0, // 累计获得的积分数量
  "users_count": 0, // 累计邀请的用户数量
  "users": [{ /*用户数据*/ }]
}
```
