---
title: 升级Laravel与PHP
---

PHP从7.4升级到8.1+，涉及到很多新功能与优化项，包括命名参数、联合类型、注解、构造器属性提升、match 表达式、nullsafe 运算符、JIT，并改进了类型系统、错误处理、语法一致性。以及性能改进


Laravel从8升级到10，涉及到HTTP客户端改进，还有新的Eloquent关联关系类型以及其他各种错误修复和可用性改进

## 一、环境安装

1、更新php 至 8.1/8.2/8.3

在宝塔面板上面的软件商店安装

2、PHP安装以下扩展

```text
fileinfo
opcache
redis
exif
mbstring
```
<img :src="$withBase('/assets/img/v3/guide/installation/1725588348796.png')" />

3、PHP删除以下禁用函数

```text
putenv
symlink 
proc_open
shell_exec 
```
<img :src="$withBase('/assets/img/v3/guide/installation/1725588186222.png')" />

4、设置PHP命令行版本为新安装的php
<img :src="$withBase('/assets/img/v3/guide/installation/1725588495769.png')" />

5、要求 Composer 2.2.0 或更高版本
```
composer self-update
```

6、网站里面的PHP需要选择最新安装的版本
<img :src="$withBase('/assets/img/v3/guide/installation/1725589377798.png')" />


## 二、代码更新

1、 拉取最新代码

```
git pull ...
```

2、删除旧的composer依赖安并重新安装
```
rm -rf vendor
rm -rf composer.lock
composer install
```

3、清理程序缓存
```
php artisan optimize:clear
```

4、支付需要重新配置
```
微信需要申请API3密钥后，在后台重新配置

支付宝需要重新生成证书密钥配置支付宝后，在后台重新配置
```

## 三、更新问题

### （一）宝塔安装PHP8报错 configure: error: iconv does not support errno

1、 安装最新的iconv

```
wget https://ftp.gnu.org/pub/gnu/libiconv/libiconv-1.17.tar.gz
tar -xzvf libiconv-1.17.tar.gz
cd libiconv-1.17
./configure --prefix=/usr/local/libiconv
make && make install
```

2、新建文件 /etc/ld.so.conf.d/libiconv.conf
```
vim /etc/ld.so.conf.d/libiconv.conf

写入：/usr/local/libiconv/lib
保存

ldconfig
```

3、更新配置文件 vim ~/.zshrc 加入以下 后输入命令：source ~/.zshrc 
```
export CFLAGS="-I/usr/local/libiconv/include"
export LDFLAGS="-L/usr/local/libiconv/lib"
export LIBS="-liconv"
```

4、运行以下命令
```
ln -s /usr/local/libiconv/include/iconv.h /usr/include/iconv.h
ln -s /usr/local/libiconv/lib/libiconv.so /usr/lib/libiconv.so
```

5、把 php.sh 放入 /www/server/panel/install/php.sh 执行
[php.sh](/assets/img/v3/guide/installation/php.sh)

```
chattr +i /www/server/panel/install/php.sh
```

6、重新在宝塔面上面安装 php8.3 就可以安装成功了



