---
title: YUKI翻译器的文本提取问题
---

> 题外话：YUKI也咕咕咕好久没更新了

YUKI是用的**Textractor**来提取游戏中的文本

而目前YUKI带的还是32位的Textractor，在遇到64位的游戏时就可能会出问题。

注：打开exe后可以在<u>任务管理器</u>查看位数。

遇到这种情况时，可以手动换为64位的Textractor。

到Textractor的[下载页面](https://github.com/Artikash/Textractor/releases)下载最新的文件，下载 `Zip-Version` 的那个zip压缩包就行了。

下载完后打开压缩包，里面有分 x86 和 x64 两个文件夹，分别就是32位和64位的Textractor了。

提取出x64文件夹里的 `texthook.dll` 和 `TextractorCLI.exe` 这两个文件替换掉YUKI文件夹里的 `lib/textractor` 里的两个文件即可。

同理，要换回32位时就从x86文件夹里提取文件替换。

换成64位的Textractor总之还是试试Hcode，还有如果问题，那就只能尝试用带OCR的翻译器了，比如[MisakaTranslator](https://github.com/hanmin0822/MisakaTranslator/releases)。

