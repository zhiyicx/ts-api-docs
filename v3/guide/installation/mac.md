---
title: Mac本地安装
---

## **Mac本地安装TS**

本文用于ThinkSNS3在Mac电脑本地部署参考。



## 一、环境安装

1、更新brew 至 4.2.4

brew update 待执行完毕后，使用**brew -v**查看版本

2、安装icu4c 版本73.x

```text
brew install  icu4c
```

3、安装PHP 7.4

```text
brew tap shivammathur/php

brew install shivammathur/php/php@7.4
```

执行完毕后，**Php -v**查看版本
如果输出PHP 7.4.33即可，如果报错则可能是icu4c版本不对，或者其他问题根据提示进行排查处理

4、安装PhpWebStudy

通过[官网](https://www.macphpstudy.com/help-1-1.html)下载对应芯片版本的PhpWebStudy

3、通过PhpWebStudy安装Nginx、MySql、Redis

setup-brew源切-换切换到清华大学下载源（点击“切换”按钮等待顶部弹窗提示成功）

如果下载很慢或者提示下载失败尝试切换其他下载源

安装nginx，选中nginx-版本管理-等待刷新出列表，点击安装（1.25即可）-等待安装完毕右上角出现“确认”按钮，其他相同操作即可

nginx需要配置最大文件限制，否则上传视频会报错。选中nginx-配置文件，然后在**server{}**中**listen**下一行粘贴以下代码(可根据需求自行调整大小)。

```
client_max_body_size 20M;
```

**注意版本PHP 7.4.33，Mysql 5.7，redis 7.0**

4、安装nvm

```text
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

5、通过nvm安装npm 建议14.16.0

```text
nvm install v14.16.0
```

6、通过git将项目代码clone到电脑本地某一个文件夹



## 二、项目部署
打开项目代码文件夹

### 1.复制配置文件

1. 复制项目根目录/storage/configure/plus.yml.example 为 plus.yml
2. 复制项目根目录/storage/configure/.env.example 为 .env

### 2. 配置plus.yml文件

主要是修改以下参数

```text
app.env # 测试：local，生产：production
app.debug # 开启Debug
app.url # 域名，带http，例如http://ts.cn

cache.default # 改为 redis
cache.prefix # 同一个服务器多个ts，就需要修改

database.mysql # mysql信息
database.mysql.database # 表名称，务必和新建的表保持一致，例如：plus
database.mysql.username # sql管理员名称，例如：root
database.mysql.password # sql管理员密码，例如：root

filesystems.disks.public.url # https://域名/storage，例如：http://ts.cn/storage
```



## 三、创建项目站点

1、打开PhpWebStudy-Hosts-添加，name输入本地域名，例如:ts.cn

2、alias可不填，mark可写备注，root path 选择项目/public，子站默认关闭

3、PHP默认74、Port默认80、8080、SSL默认关闭

4、模板输入框填入：

```
location / {
	try_files $uri $uri/ /index.php$is_args$query_string;
}
```

5、点击右上角“保存”



## 四、创建数据库站点

1、下载phpMyAdmin

[官网](https://www.phpmyadmin.net/)点击“download”下载源码

2、解压得到类似phpMyAdmin-5.2.1-all-languages，复制到项目根目录

3、配置数据库空密码登录

修改phpMyAdmin/libraries/config.default.php里的 $cfg['Servers'][$i]['AllowNoPassword'] = false 为 $cfg['Servers'][$i]['AllowNoPassword'] = true

4、打开PhpWebStudy-Hosts-添加，name输入本地域名，例如:**mysql.io**

5、alias可不填，mark可写备注，root path 选择项目/phpMyAdmin文件夹，子站默认关闭

6、PHP默认74、Port默认80、8080、SSL默认关闭

7、点击右上角“保存”

8、浏览器输入**mysql.io**，账号root 密码默认为空，点击"登录"，进入管理页面后设置账号密码

**该账号密码需要和plus.yml中sql账号信息保持一致**



## 五、配置以及项目编译

1、打开终端，进入项目目录

```
cd 项目文件夹 
```

2、安装依赖

```text
composer install
```

3、迁移数据库  

```text
php artisan migrate
```

4、数据库初始化数据 

```text
php artisan db:seed
```

5、创建新密钥

```text
php artisan app:key-generate
```

6、上传文件软链 

```text
php artisan storage:link
```

7、发布资源

```text
php artisan vendor:publish --all
```



## 六、测试以及其他

1、访问后台，域名/admin，管理员账号root 密码root，网址为创建站点时输入地址

```text
例如：http://ts.cn/admin
```

2、后续修改后编译需要使用npm v14.16.0版本，如果本地有多个npm版本可通过nvm use v14.16.0进行切换
