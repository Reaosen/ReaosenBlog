1. 查看当前状态
```shell
svn info
```

2. 切换分支
```shell
svn switch http://svn.example.com/repo/branches/测试分支名
# 或简写
svn sw http://svn.example.com/repo/branches/test
```

3. 更新、提交、确认
```shell
svn up                # 先更新
svn st                # 确认修改
svn ci -m "提交到测试分支"
```