---
title: 更换RubyGems源
---

更新 RubyGems 版本：

```powershell
gem update --system
gem -v # 查看gems版本
```

换源：

```powershell
gem sources -l # 查看gems源
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/ # 移除 https://rubygems.org/ 源，添加 https://gems.ruby-china.com/ 源
gem sources -l
# 确保只有 gems.ruby-china.com
```

