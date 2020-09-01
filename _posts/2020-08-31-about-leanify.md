---
title: 关于Leanify
editdate: 2020-09-01
---

以下 <u>不完全/简要</u>~~（抄太多了）~~ 摘自 [Leanify的Readme](https://github.com/JayXon/Leanify/blob/master/README.md) ~~（渣翻确信）~~，仅用于做个记录。

![嗯](https://i.loli.net/2020/08/31/vIpVWPFXBZni4wA.jpg)

## Leanify

**Leanify** 是个轻量无损的文件 **压缩器(minifier)** / **优化器(optimizer)**。

它能移除没用的数据（如调试信息(debug infomation)、注释(comments)、元数据(metadata)等）并再压缩文件以缩小体积，而且不会降低图像的品质哦。

## Disclaimer - 免责声明

**使用Leanify前请先备份文件！**

## Features - 特性

- 支持递归压缩。~~（比如ZIP里一个APK里一个PNG）~~
- 支持多种<a href="#file-formats">文件格式</a>。
- <u>轻量</u>，单文件，小于 1MB，无外部依赖。
- 一切都是在<u>内存中完成</u>，没有临时文件。
- <u>跨平台</u>，支持<u>Windows、Linux、Mac</u>。
- 支持递归遍历目录。
- 能够靠数据而不是名字识别文件格式。

## <span id="file-formats">File Formats - 文件格式</span>

#### APK file (.apk)

基于 <a href="#zip">ZIP</a>。

> 注意修改 `APK` 中的文件会破坏数字签名，要安装需要重新签名。
>
> 如果你不想修改 `APK` 中的文件就使用 `-d 1` 选项。

#### 漫画档案 (.cbt, .cbz)

`cbt` 基于 <a href="#tar">tar</a>。`cbz` 基于 <a href="#zip">ZIP</a>。

#### Comic book archive (.cbt, .cbz)

基于 <a href="#xml">XML</a> 和 <a href="#zip">ZIP</a>。

不支持 Office文档 1997-2003 (.doc, .xls, .ppt)。

#### Data URL (.html .htm .js .css)

查找 `data:image/*;base64` 并处理 base64 编译嵌入的图像。

#### Design Web Format (.dwf, dwfx)

基于 <a href="#zip">ZIP</a>。

#### EPUB file (.epub)

基于 <a href="#zip">ZIP</a>。

#### FictionBook (.fb2, .fb2.zip)

基于 <a href="#xml">XML</a>。

处理嵌入的图像。

#### GFT file (.gft)

这是QQ的一种图像容器格式。

处理内部的图像。

#### gzip file (.gz, .tgz)

处理内部的文件并重压缩Deflate流。

移除所有可选的部分：`FEXTRA`,  `FNAME`, `FCOMMENT`, `FHCRC`。

#### Icon file (.ico)

将 256x256 的BMP转换为 <a href="#png">PNG</a>。

处理内部的 <a href="#png">PNG</a>，如果存在。

#### Java archive (.jar)

基于 <a href="#zip">ZIP</a>。

#### JPEG image (.jpeg, .jpg, .jpe, .jif, .jfif, .jfi, .thm)

移除所有应用程序的标记（比如`EXIF`(用 `--keep-exif` 来保留)，`ICC profile`，`XMP`）和注释(comments)。

使用 `mozjpeg` 优化。

#### Lua object file (.lua, .luac)

移除所有调试信息：

- 源名称 (Source name)
- 行定义和最后一行定义 (Line defined and last line defined)
- 源行位置列表 (Source line position list)
- 本地列表 (Local list)
- Upvalue变量列表 (Upvalue list)

#### OpenDocument (.odt, .ods, .odp, .odb, .odg, .odf)

基于 <a href="#xml">XML</a> 和 <a href="#zip">ZIP</a>。

#### OpenRaster (.ora)

基于 OpenDocument 和 <a href="#png">PNG</a>。

#### PE file (.exe, .dll, .ocx, .scr, .cpl)

处理嵌入的资源。

移除可执行文件中的 `Relocation Table`。

移除不正式的 `Rich Header`。

重叠 `PE Header` 和 `DOS Header`。

#### <span id="png">PNG image (.png, .apng)</span>

移除所有辅助块，除了：

- `tRNS`：透明的信息 (transparent information)
- `fdAT`, `fcTL`, `acTL`：这些块由 `APNG` 使用 (These chunks are used by `APNG`)
- `npTc`：安卓的9Patch图像 (Android 9Patch images (*.9.png) )

使用 `ZopfliPNG` 优化。

#### RDB archive (.rdb)

这是QQ的一种归档格式。

处理内部的所有文件。

#### Flash file (.swf)

处理嵌入的图像。

使用 `LZMA` 重压缩。

移除元数据标记 (Metadata Tag)。

#### SVG image (.svg, .svgz)

基于 <a href="#xml">XML</a>。

移除元数据。

缩小属性中的空格。

移除空的属性。

移除空文本元素和容器元素。

#### <span id="tar">tar archive (.tar)</span>

处理内部所有文件。

#### <span id="xml">XML document (.xml, .xsl, .xslt)</span>

移除所有注释、没用的空格 (spaces)、缩进 (tabs)、换行(line breaks)。

#### XPInstall (.xpi)

基于 <a href="#zip">ZIP</a>。

> 注意修改 `xpi` 中的文件会破坏数字签名，要安装需要重新签名。

#### XPS document (.xps, .oxps)

基于 <a href="#xml">XML</a> 和 <a href="#zip">ZIP</a>。

#### <span id="zip">ZIP archive (.zip)</span>

处理内部所有文件并用 [Zopfil](https://github.com/google/zopfli) 重压缩Deflate流。

如果 `DEFLATE` 让文件变大就使用 `STORE` 方法。

移除 `Local file header` 中多余的字段 (extra field)。

移除 `Data descriptor structure`，将那些信息写入 `Local file header`。

移除 `Central directory file header` 中多余的字段和文件注释。

移除 `End of central directory record` 中的注释。

## Downloads - 下载

[稳定发行版](https://github.com/JayXon/Leanify/releases/)

## Usage - 用法

```
用法: leanify [options] 文件路径
  -i, --iteration <iteration>   越多的迭代次数得到更好的结果，但是也更耗时，默认是15。
  -d, --max_depth <max depth>   最大递归深度，默认无限制，设为1将会禁用递归缩小。
  -f, --fastmode                快速模式，不会再压缩。
  -q, --quiet                   无输出到标准输出。
  -v, --verbose                 详细输出。
  --keep-exif                   不移除Exif。
```

## Compiling - 编译

#### Windows

- Visual Studio 2015+

  使用 Leanify.vcxproj

- gcc 5+

  `build_gcc.bat` 或 `mingw32-make`