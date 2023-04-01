---
title: 如何给Centos 7新建一个用户并授权
date: 2021-12-11 09:01:41
updated: 2021-12-11 09:01:41
description: 因为root用户权限太大，不宜直接使用，最好新建一个用户，并赋予对应权限。这篇文章简述如何操作步骤。
categories: 
  - Linux

tags: 
  - Linux
  - Centos

keywords: linux,centos,

cover: https://cos.meixuhong.com/imgs/centos.png
---

因为root用户权限太大，不宜直接使用，最好新建一个用户，并赋予对应权限。这篇文章简述如何操作步骤。

#### 1.新建用户与用户组

```shell
$ sudo  adduser testuser  #新建testuser 用户 
$ sudo  passwd testuser   #给testuser 用户设置密码

$sudo groupadd testgroup #新建test工作组
$sudo useradd -g testgroup testuse #/新建testuser用户并增加到testgroup工作组
```

#### 2.给已有的用户增加工作组

```shell
$sudo usermod -G groupname username #给已有的用户增加工作组 
```

#### 3.删除用户账号

```shell
$sudo userdel testuser 
$sudo groupdel testgroup 
$sudo usermod –G testgroup testuser   #强制删除该用户的主目录和主目录下的所有文件和子目录
```

####  4.用户授权

> 新创建的用户并不能使用sudo命令，需要给他添加授权



```shell
# 1）添加sudoers文件可写权限
$sudo chmod -v u+w /etc/sudoers

#2）修改/etc/sudoers文件，给用户testuser提供sudo权限，且不需要输入密码
$sudo echo "testuser   ALL=(ALL:ALL) NOPASSWD: ALL" >> /etc/sudoers
#如果需要用户testuser输入密码，修改为/etc/sudoers内容为：testuser   ALL=(ALL)  ALL

#3）收回sudoers文件可写权限
$sudo chmod -v u-w /etc/sudoers
```

-----

文章首发公众号-，欢迎关注，不定期更新。

--------

全文完。
