---
sidebarDepth: 3
id: api-v2-easemob
title: 环信
---
# 环信用户管理

- [注册环信用户](#注册环信用户)
- [重置用户环信密码](#重置用户环信密码)
- [获取环信用户密码](#获取环信用户密码)
- [环信群组管理](#环信群组管理)

## 注册环信用户

- [注册单个环信用户](#注册单个环信用户)
- [批量注册环信用户](#批量注册环信用户);
- [为未注册环信用户注册环信](#为未注册环信用户注册环信);

```
POST /api/v2/easemob/register/:user_id
```

### 响应

```
Status: 201 OK
```

## 批量注册环信用户

```
POST /api/v2/easemob/register
```

### 参数

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| user_ids | string | 多个以英文 "," 隔开 |

### 响应

```
Status: 201 OK
```

## 为未注册环信用户注册环信

```
POST /api/v2/easemob/register-old-users
```

### 响应

```
Status: 201 OK
```


## 重置用户环信密码

```
PUT /api/v2/easemob/password
```

### 响应

```
Status: 201 OK
```

## 获取环信用户密码

```
GET /api/v2/easemob/password
```

### 响应

```
Status: 201 OK
```

```json
{
    "message": [
        "成功"
    ],
    "im_pwd_hash": "2daefb9dcd6d7d7898b62cf85d0a9fc3"
}
```

| 名称 | 类型 | 描述 |
|:----:|:--:|----|
| im_pwd_hash | string | 环信登录密码 |


# 环信群组管理

- [获取群信息](#获取群信息);
- [创建群组](#创建群组)
- [修改群信息](#修改群信息);
- [删除群组](#删除群组);
- [批量获取群头像](#批量获取群头像);
- [批量添加群成员](#批量添加群成员);
- [批量移除群成员](#批量移除群成员);

## 获取群信息（可批量查询）

```
GET /api/v2/easemob/group
```

### 参数

| 参数 | 类型  | 描述 |
|:----:|:----:|----|
| im_group_id | string | 单个群id或多个id用英文,连接 |

### 响应

```
Status: 200 OK
```

```json
[
    {
        "id": "36036128342017",
        "name": "花儿巷",
        "description": "来自花儿巷的朋友",
        "membersonly": false,
        "allowinvites": true,
        "maxusers": 300,
        "owner": "1",
        "created": 1513765130162,
        "custom": "",
        "affiliations_count": 5,
        "affiliations": [
            {
                "id": 1,
                "name": "root",
                "bio": null,
                "sex": 0,
                "location": null,
                "created_at": "2017-12-17 14:34:13",
                "updated_at": "2017-12-17 14:34:13",
                "is_owner": 1,
                "avatar": null,
                "bg": null,
                "verified": null,
                "extra": null,
                "certification": null
            }
        ],
        "public": true,
        "group_face": ""
    }
]
```

| 名称 | 类型 | 描述 |
|:----:|:--:|------|
| id | sting | 群组ID |
| name | sting | 群组名称 |
| description | sting | 群组描述 |
| membersonly | bool | 加入群组是否需要群主或者群管理员审批。true：是，false：否 |
| allowinvites | bool | 是否允许群成员邀请别人加入此群。 true：允许群成员邀请人加入此群，false：只有群主才可以往群里加人 |
| maxusers | int | 群成员上限，创建群组的时候设置 |
| owner | string | 群主的环信 uid |
| created | long | 群组创建时间 |
| affiliations_count | int | 现有成员总数 |
| public | bool | 群组类型：true：公开群，false：私有群 |
| group_face | string | 群组头像(可选)，未设置时不返回 |
| affiliations | array | 群组成员列表 |
| affiliations.*.id | int | 用户uid |
| affiliations.*.name | string | 用户昵称 |
| affiliations.*.bio | string | 用户描述 |
| affiliations.*.sex | int | 用户性别，0 - Unknown, 1 - 男, 2 - 女 |
| affiliations.*.location | string | 用户的位置信息 |
| affiliations.*.created_at | string | 用户注册时间 |
| affiliations.*.updated_at | string | 用户核心资料更新时间 |
| affiliations.*.is_owner | int | 是否是群主，0-否，1-是 |
| affiliations.*.avatar | dictionary | 用户头像接口地址 |
| affiliations.*.bg | dictionary | 用户背景图片地址 |
| affiliations.*.verified | dictionary | 用户的认证信息 |
| affiliations.*.certification | dictionary | 用户认证分类 |

## 获取简易群信息（可批量查询）

```
GET /api/v2/easemob/groups
```

### 参数

|    参数     |  类型  | 描述                        |
| :---------: | :----: | --------------------------- |
| im_group_id | string | 单个群id或多个id用英文,连接 |

### 返回值

|         参数          |  类型  | 描述                                                         |
| :-------------------: | :----: | ------------------------------------------------------------ |
|          id           | sting  | 群组ID                                                       |
|         name          | sting  | 群组名称                                                     |
|      description      | sting  | 群组描述                                                     |
|      membersonly      |  bool  | 加入群组是否需要群主或者群管理员审批。true：是，false：否    |
|     allowinvites      |  bool  | 是否允许群成员邀请别人加入此群。 true：允许群成员邀请人加入此群，false：只有群主才可以往群里加人 |
|       maxusers        |  int   | 群成员上限，创建群组的时候设置                               |
|  affiliations_count   |  int   | 现有成员总数                                                 |
|        public         |  bool  | 群组类型：true：公开群，false：私有群                        |
|     affiliations      | array  | 群组成员列表                                                 |
| affiliations.*.member | string | 用户uid                                                      |



## 创建群组

```
POST /api/v2/easemob/group
```

### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| groupname | string | 必须，群组名称 |
| desc | string | 必须，群组描述 |
| public | bool | 是否是公开群，默认是true |
| maxusers | int | 群组成员最大数（包括群主），值为数值类型，默认值200，最大值2000 |
| members_only | bool | 加入群是否需要群主或者群管理员审批，默认是false |
| allowinvites | bool | 是否允许群成员邀请别人加入此群。 true：允许群成员邀请人加入此群，false：只有群主或者管理员才可以往群里加人。 |
| members | string | 群组成员，多个以英文 "," 隔开 |

### 响应

```
Status: 201 OK
```

```json
{
    "message": [
        "成功"
    ],
    "im_group_id": "39992137154562"
}
```

| 名称 | 描述 |
|:----:|----|
| im_group_id | 群组ID |

## 修改群信息

```
PATCH /api/v2/easemob/group
```

### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| im_group_id | string | 必须，群组ID |
| groupname | string | 必须，群组名称 |
| desc | string | 必须，群组描述 |
| public | bool | 是否是公开群，默认是true |
| maxusers | int | 群组成员最大数（包括群主），值为数值类型，默认值200，最大值2000 |
| members_only | bool | 加入群是否需要群主或者群管理员审批，默认是false |
| allowinvites | bool | 是否允许群成员邀请别人加入此群。 true：允许群成员邀请人加入此群，false：只有群主或者管理员才可以往群里加人。 |
| group_face | string | 群组头像 |
| new_owner_user | string | 新群组管理员 |

### 响应

```
Status: 201 OK
```

```json
{
    "groupname": "花儿巷",
    "desc": "来自花儿巷的朋友",
    "public": true,
    "maxusers": 300,
    "members_only": false,
    "allowinvites": true,
    "group_face": "",
    "im_group_id": "36036128342017"
}
```

## 删除群组

```
DELETE /api/v2/easemob/group
```

### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| im_group_id | int | 必须，群组ID |

### 响应

```
Status: 204 OK
```

## 批量获取群头像

```
GET /api/v2/easemob/group/face
```

### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| im_group_id | string | 必须，群组ID,多个以英文 "," 隔开 |

### 响应

```
Status: 200 OK
```

```json
[
    {
        "im_group_id": "36036128342017",
        "group_face": 0
    }
]
```

| 名称 | 类型 | 描述 |
|:----:|----|----|
| im_group_id | string | 群组ID |
| group_face | string | 群组头像 |

## 批量添加群成员

```
POST /api/v2/easemob/group/member
```

### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| im_group_id | int | 必须，群组ID |
| members | string | 必须，群组成员,多个以英文 "," 隔开 |

### 响应

```
Status: 201 OK
```

## 批量移除群成员

```
DELETE /api/v2/easemob/group/member
```

### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| im_group_id | int | 必须，群组ID |
| members | string | 必须，群组成员,多个以英文 "," 隔开 |

### 响应

```
Status: 204 OK
```

