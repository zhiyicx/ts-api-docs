---
title: windows本地安装
---

## 一、安装phpstudy以及环境配置
### 1. 下载并安装

[官网](https://www.xp.cn)
[下载地址](https://public.xp.cn/upgrades/phpStudy_64.zip)

下载解压，安装到自定义目录，安装时不知道选什么就用默认的

<img :src="$withBase('/assets/img/v3/guide/installation/16877682316371.jpg')" />


### 2. 安装php8.1
<p></p>
<img :src="$withBase('/assets/img/v3/guide/installation/16877682700886.jpg')" />


### 3. 软件管理/工具-安装redis与composer
<p></p>
<img :src="$withBase('/assets/img/v3/guide/installation/16877684101727.jpg')" />

### 4. 首页-Mysql设置字符集和引擎
```
字符集设置为utf8mb4，引擎设置为InnoDB
```

<img :src="$withBase('/assets/img/v3/guide/installation/16877687296054.jpg')" />


### 5. php开启扩展：redis/Opcache
<p></p>
<img :src="$withBase('/assets/img/v3/guide/installation/16877683327610.jpg')" />


### 6. 开启服务
```
开启Mysql/Nginx/Redis
```
<p></p>

<img :src="$withBase('/assets/img/v3/guide/installation/16877690721588.jpg')" />


## 二、安装git，并且拉取代码
    也可以安装git可视化工具，具体按照自己习惯

### 1. 安装git自行百度

### 2. 代码放入phpstudy/WWW目录
    E:\Service\phpStudy\WWW


### 三、修改配置文件

### 1. 复制配置文件

1. 复制项目根目录/storage/configure/plus.yml.example 为 plus.yml
2. 复制项目根目录/storage/configure/.env.example 为 .env
    
### 2. 配置plus.yml文件
主要是修改以下参数
```
app.env # 测试：local，生产：production
app.debug # 开启Debug
app.url # 域名，带http

cache.default # 改为 redis
cache.prefix # 同一个服务器多个ts，就需要修改

database.mysql # mysql信息

filesystems.disks.public.url # https://域名/storage
```

## 四、创建网站站点
### 1. 创建站点
<p></p>
<img :src="$withBase('/assets/img/v3/guide/installation/16877693420669.jpg')" />

### 2. 配置伪静态
```
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

<img :src="$withBase('/assets/img/v3/guide/installation/16877694132909.jpg')" />

### 3. 确认创建

### 4. 管理网站设置-php版本为7.4

<img :src="$withBase('/assets/img/v3/guide/installation/16877696685007.jpg')" />

### 5. 网站管理设置-php扩展
```
勾上 exif/redis
```

<img :src="$withBase('/assets/img/v3/guide/installation/16877697947157.jpg')" />

## 五. 编译
### 1. 进入命令工具
```
1. 网站管理设置--进入composer
2. php版本选择php8.1
3. 确认。进入下一步骤
```

<img :src="$withBase('/assets/img/v3/guide/installation/16877700236916.jpg')" />

### 2. 执行一下命令
```
# 进入项目根目录
cd ../

# 安装依赖
composer install

# 迁移数据库
php artisan migrate

# 数据库初始化数据 
php artisan db:seed

# 创建新密钥
php artisan app:key-generate

# 上传文件软链   
php artisan storage:link

# 发布资源   
php artisan vendor:publish --all

```

## 六、访问网站
### 1. 访问域名，进入后台
```
http://ts.cn
```

### 2. 默认账号密码：root root