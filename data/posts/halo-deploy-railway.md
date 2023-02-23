---
title: 使用railway免费部署halo2.0博客系统 
published_at: 2022-09-24
tags: [railway,halo,博客,blog,免费]
---

# 简介

- halo是开源强大的建站工具，2.0又新增了很多不错的特性
- railway是容器托管平台，每个月提供5美元的免费额度，不休眠，不删数据，自定义域名，推荐
- 该套流程操作下来，1分钱不花就可以拥有自己的一个个人博客站点
- demo站点：https://halo-production-cd31.up.railway.app/

## 注册railway账号
- https://railway.app/ 上注册账号

## github上创建仓库
- fork官方halo项目到自己的github仓库，https://github.com/halo-dev/halo
- fork 的时候要注意fork所有的分支，因为main分支是默认开发分支，fork该分支可能不够稳定

## 本地构建项目
- halo2.0版本采用docker部署，不再提供编译好的jar包
- **所以需要本地编译构建好后，再上传到仓库**
- **++**记得修改gitnore文件，避免git提交的时候忽略构建的文件。**++**

- 克隆项目如果你已经 fork 了相关仓库，请将以下命令中的 halo-dev 替换为你的 GitHub 用户名。



```ssh
git clone https://github.com/halo-dev/halo

# 或者使用 ssh 的方式 clone（推荐）
git clone git@github.com:halo-dev/halo.git

# 切换到最新的 tag
cd halo
git checkout v2.0.0
git clone https://github.com/halo-dev/console

# 或者使用 ssh 的方式 clone（推荐）
git clone git@github.com:halo-dev/console.git

# 切换到最新的 tag
cd console
git checkout v2.0.0
```

提示请务必按照以上要求切换到最新的 tag，而不是直接使用 main 分支构建，main 分支是我们的开发分支。此文档以 2.0.0 为例，查看最新的 tag 可使用 git tag --column 查看。

## 构建 Console

```git
cd path/to/console
pnpm install
pnpm build:packages
pnpm build
```
构建完成之后，在 console 目录下产生的 dist 目录即为构建完成的文件。最后将 dist 目录的所有文件复制到 halo 项目的 src/main/resources/console 目录。

## 构建Fat Jar
构建之前需要修改 gradle.properties 中的 version 为当前 tag 的版本号，如：version=2.0.0

```
cd path/to/halo

# Windows
./gradlew.bat clean build -x check -x jar

# macOS / Linux
./gradlew clean build -x check -x jar
```

构建完成之后，在 halo 项目下产生的 build/libs/halo-2.0.0.jar 即为构建完成的文件。

## 构建 Docker 镜像

在进行之前，请确保已经完成上述操作，最终需要确认在 halo 项目的 build/libs/ 目录已经包含了 halo-2.0.0.jar 文件。
```git
cd path/to/halo
docker build -t halo-dev/halo:2.0.0 .
# 插件构建完成的版本
docker images | grep halo
```

## railway上创建数据库项目
我选择的是postgre，也可以选择mysql

为什么要创建数据库项目？因为halo默认采用的是h2数据库，docker重新部署后会导致数据重置丢失问题，而且railway也没有提供数据持久化的目录，所以我选择的是创建数据库项目

![参考](https://cdn.staticaly.com/gh/shijianzhong/pics@master/resume/image.1ftpna69kc68.webp)

图片里有password，在部署halo项目的时候会用到
## railway上创建halo项目
选择deploy from github repo，选择到自己的fork的halo项目

![图例](https://cdn.staticaly.com/gh/shijianzhong/pics@master/resume/image.5cf95w2g1f40.webp)
需要用到上图中的变量，发布即可
如果你看到了这一篇文章，希望能够安装成功并且使用愉快。

### 相关链接
官网：https://halo.run

文档：https://docs.halo.run

社区：https://bbs.halo.run

主题仓库：https://halo.run/themes.html

开源地址：https://github.com/halo-dev/halo

构建：https://docs.halo.run/developer-guide/core/build

变量：https://docs.halo.run/getting-started/install/docker

