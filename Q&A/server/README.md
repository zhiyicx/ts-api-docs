---
id: Q&A
sidebarDepth: 4
title: 后端常见问题
---


# 后端常见问题集锦

## 存储相关
### 1. 使用本地存储创建上传任务时，出现401/403错误？
> http状态码中，401表示请求没有通过认证，所以此问题的终极原因就是请求没有通过认证

> 403表示无权操作

#### 问题排查
##### 403状态码
表示发起当前请求的用户没有上传附件的权限，请在后台管理中

<img :src="$withBase('/assets/img/Q&A/storage/roles.png')" />
<img :src="$withBase('/assets/img/Q&A/storage/storage-ability.png')" />
勾选**上传附件**权限

> 上面的图示中，我们默认发送当前请求的用户所在的用户组为`创始人`，你需要根据实际情况来处理

##### 401状态码
由于创建上传任务时使用 ``` URL::temporarySignedRoute ```创建了用于上传的临时url

此url包含了上传文件时所需要的参数，加密值以及时间限制

而验证加密值时，临时url和上传请求必须拥有的协议，即`http` 或者 `https`,


所以需要设置 `storage/configure/plus.yml`中的 `app.url` 和  `filesystem.disks.public.url`使用相同的协议
> 如果使用`https`,需要提前设置好nginx的站点配置使用ssl监听请求 

### 2. OSS 相关

#### OSS 配置说明

[查看说明](https://github.com/slimkit/thinksns-plus-guide/issues/46)

#### OSS 镜像回源规则怎么填写？

[查看说明](https://github.com/slimkit/thinksns-plus-guide/issues/45)

### 3. 客户端访问 服务端 返回 Unauthenticated , 怎么解决？

解决方案：

项目根目录下运行

```shell
php artisan jwt:secret --force
```

### 4. 提示 Too Many Attempts. 怎么办？

[查看解决方案](https://github.com/slimkit/thinksns-plus-guide/issues/37)

### 5. SQLSTATE[22003]错误
#### 5.1 常见为部署运行数据库迁移时 ```php artisan migrate --seed -v```
```sql
SQLSTATE[22003]: Numeric value out of range: 1264 Out of range value for column 'type' at row 1 (SQL: insert into `sign_config` (`created_at`, `day`, `type`, `updated_at`, `value`) values (2021-05-31 02:17:12, 1, 999, 2021-05-31 02:17:12, 1), (2021-05-31 02:17:12, 2, 999, 2021-05-31 02:17:12, 2), (2021-05-31 02:17:12, 3, 999, 2021-05-31 02:17:12, 3), (2021-05-31 02:17:12, 4, 999, 2021-05-31 02:17:12, 4), (2021-05-31 02:17:12, 5, 999, 2021-05-31 02:17:12, 5), (2021-05-31 02:17:12, 6, 999, 2021-05-31 02:17:12, 6), (2021-05-31 02:17:12, 7, 999, 2021-05-31 02:17:12, 7))
```
#### 5.2 运行中的错误
```sql
Syntax error or access violation: 1055 Expression #1 of ORDER BY clause is not in GROUP BY
```
以上两种情况都是使用了数据库的`严格模式`造成的
请修改配置文件 **storage/configure/plus.yml**中`mysql`连接中的**strict**为`false`