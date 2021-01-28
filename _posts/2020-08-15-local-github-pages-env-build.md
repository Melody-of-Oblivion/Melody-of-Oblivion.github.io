---
title: 本地搭建Github Pages的Jekyll环境
editdate: 2021-01-28
---

Github Pages [各依赖的版本](https://pages.github.com/versions/)（Dependency versions）。

找到 `ruby` 的版本，到 Ruby 的 [官网](https://rubyinstaller.org/) 下载对应版本的安装器安装（直接安装到盘的根目录），安装时注意带上 Devkit。

​    

安装完后，打开 ruby 自带的cmd `Start Command Prompt with Ruby`，输入

```powershell
gem install github-pages
```

会自动安装 Github Pages 最新的所有依赖。

```powershell
gem list
```

可以查看已安装的所有gem。

Github Pages 的依赖更新后，可以输入

```powershell
gem uninstall -aIx
```

卸载所有gem，之后再重新安装最新的依赖。

​    

在 `Start Command Prompt with Ruby` 中，cd 到本地的网页文件夹的位置后，输入

```powershell
jekyll serve
```

之后访问 [127.0.0.1:4000](http://127.0.0.1:4000/) 就可以看到网页的效果了。

