---
title: 利用FastGit服务加速Github访问
editdate: 2020-11-18
---

> **Fast Git** : Fast way to get github things.

[Fast Git](https://fastgit.org/) 是一个对于 GitHub.com 的镜像加速器，可以用来加速Github资源的访问速度。

接下来简单举例讲解使用方法：

1. **Clone仓库**

   将原来链接的 `github.com` 替换为 `hub.fastgit.org`

   ```
   # Github
   git clone https://github.com/author/repo
   # Fastgit
   git clone https://hub.fastgit.org/author/repo
   ```

2. **Release&源代码下载**

   Release下载就是将原来链接的 `github.com` 替换为 `download.fastgit.org`

   ```
   # Github
   https://github.com/A/A/releases/download/1.0/1.0.tar.gz
   # Fastgit
   https://download.fastgit.org/A/A/releases/download/1.0/1.0.tar.gz
   ```

   源代码下载是将原来链接的 `codeload.github.com` 替换为 `download.fastgit.org`

   ```
   # Github
   https://codeload.github.com/A/A/zip/master
   # Fastgit
   https://download.fastgit.org/A/A/archive/master.zip
   ```

3. **Raw下载**

   把原来的 `raw.githubusercontent.com` 改为 `raw.fastgit.org`

   ```
   # Github
   https://raw.githubusercontent.com/A/A/branch/file
   # Fastgit
   https://raw.fastgit.org/A/A/branch/file
   ```

   

