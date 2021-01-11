## 1. 使用本地存储创建上传任务时，出现401/403错误？
> http状态码中，401表示请求没有通过认证，所以此问题的终极原因就是请求没有通过认证


> 403表示无权操作

### 问题排查
#### 403状态码
表示发起当前请求的用户没有上传附件的权限，请在后台管理中

<img :src="$withBase('/assets/img/Q&A/storage/roles.png')" />
<img :src="$withBase('/assets/img/Q&A/storage/storage-ability.png')" />
勾选**上传附件**权限

> 上面的图示中，我们默认发送当前请求的用户所在的用户组为`创始人`，你需要根据实际情况来处理

#### 401状态码
由于创建上传任务时使用 ``` URL::temporarySignedRoute ```创建了用于上传的临时url

此url包含了上传文件时所需要的参数，加密值以及时间限制

而验证加密值时，临时url和上传请求必须拥有的协议，即`http` 或者 `https`,


所以需要设置 `storage/configure/plus.yml`中的 `app.url` 和  `filesystem.disks.public.url`使用相同的协议
> 如果使用`https`,需要提前设置好nginx的站点配置使用ssl监听请求 
