
## 🐧 常用 Linux 命令速查表

&gt; 持续更新，建议收藏。  
&gt; 所有示例均基于 Bash，适用于绝大多数 GNU/Linux 发行版。

---

### 1. 文件与目录操作

| 命令 | 常用选项 | 示例 | 说明 |
|---|---|---|---|
| `ls` | `-alh` | `ls -alh /var/log` | 列出目录内容（详细、人类可读） |
| `cd` | - | `cd ~` | 切换目录；`~` 代表家目录 |
| `pwd` | `-P` | `pwd` | 显示当前绝对路径 |
| `mkdir` | `-p` | `mkdir -p a/b/c` | 递归创建目录 |
| `rmdir` | - | `rmdir emptydir` | 仅删除**空**目录 |
| `cp` | `-av` | `cp -av src/ dst/` | 归档复制，保留属性并显示过程 |
| `mv` | `-i` | `mv -i old new` | 移动/重命名；`-i` 防止覆盖 |
| `rm` | `-rf` | `rm -rf node_modules` | 强制递归删除（**慎用**） |
| `touch` | - | `touch {1..10}.txt` | 批量创建空文件 |

---

### 2. 文件内容查看与搜索

| 命令 | 常用选项 | 示例 | 说明 |
|---|---|---|---|
| `cat` | `-n` | `cat -n /etc/passwd` | 一次性输出全部内容 |
| `less` | `-S` | `less /var/log/syslog` | 分页查看，可搜索 `/keyword` |
| `head` / `tail` | `-n 50 -f` | `tail -f -n 200 app.log` | 实时追踪日志 |
| `grep` | `-EiRn` | `grep -Rni "error" .` | 递归忽略大小写搜索 |
| `find` | `-type f -mtime` | `find . -type f -mtime +7` | 查找 7 天前修改的文件 |
| `locate` | `-i` | `locate -i *.conf` | 基于数据库快速查找（需 `updatedb`） |

---

### 3. 权限与用户

| 命令 | 常用选项 | 示例 | 说明 |
|---|---|---|---|
| `chmod` | `-R` | `chmod -R 755 project/` | 递归改权限 |
| `chown` | `-R` | `chown -R www-data:www-data html/` | 递归改属主/组 |
| `sudo` | `-E` | `sudo -E apt update` | 保留环境变量提权 |
| `useradd` / `usermod` | `-m -G` | `usermod -aG docker $USER` | 将当前用户加入 docker 组 |
| `passwd` | - | `passwd alice` | 修改用户密码 |

---

### 4. 进程与系统

| 命令 | 常用选项 | 示例 | 说明 |
|---|---|---|---|
| `ps` | `aux` / `ef` | `ps aux | grep nginx` | 静态进程快照 |
| `top` / `htop` | - | `htop` | 交互式进程查看器（需安装） |
| `kill` | `-9` | `kill -9 $(pidof python)` | 强制结束进程 |
| `systemctl` | `status start stop restart enable disable` | `systemctl restart sshd` | 管理 systemd 服务 |
| `journalctl` | `-fu` | `journalctl -fu nginx` | 实时查看服务日志 |
| `free` | `-h` | `free -h` | 人类可读内存信息 |
| `df` | `-h` | `df -h` | 磁盘使用率 |
| `uptime` | - | `uptime` | 系统负载与运行时间 |

---

### 5. 网络

| 命令 | 常用选项 | 示例 | 说明 |
|---|---|---|---|
| `ping` | `-c 4` | `ping -c 4 8.8.8.8` | 测试连通性 |
| `curl` | `-I` / `-s` | `curl -s https://ip.sb` | 获取公网 IP |
| `wget` | `-c` | `wget -c https://example.com/file.iso` | 断点续传下载 |
| `ss` | `-tulnp` | `ss -tulnp | grep :80` | 替代 `netstat`，查看监听端口 |
| `scp` | `-P -r` | `scp -P 2222 -r localdir user@host:/remote` | 加密远程复制 |
| `rsync` | `-avz --progress` | `rsync -avz local/ remote:/backup/` | 增量同步神器 |

---

### 6. 压缩与归档

| 命令 | 常用选项 | 示例 | 说明 |
|---|---|---|---|
| `tar` | `-czvf` / `-xzvf` | `tar czvf backup.tar.gz folder/` | 打包压缩 |
| `zip` / `unzip` | `-r` | `zip -r archive.zip dir/` | 兼容 Windows 的压缩 |
| `gzip` / `gunzip` | `-k` | `gzip -k big.log` | 单文件压缩，保留源文件 |

---

### 7. 软件包管理（选型）

| 发行族 | 命令 | 示例 |
|---|---|---|
| **Debian/Ubuntu** | `apt` | `sudo apt update && sudo apt install git` |
| **RHEL/CentOS** | `yum` / `dnf` | `sudo dnf install nginx` |
| **Arch** | `pacman` | `sudo pacman -Syu` |
| **通用** | `snap` / `flatpak` | `snap install code --classic` |

---

### 8.  Shell 快捷键 & 技巧

| 快捷键 | 功能 |
|---|---|
| `Ctrl + A` / `E` | 移动到行首/行尾 |
| `Ctrl + U` / `K` | 删除到行首/行尾 |
| `Ctrl + R` | 反向搜索历史命令 |
| `!!` | 重复上一条命令 |
| `!$` | 引用上一个命令的最后一个参数 |
| `Alt + .` | 依次插入历史最后一个参数 |

---

### 9. 一键复制配置（可选）

# 为当前用户添加彩色 ll 别名
echo "alias ll='ls -alh --color=auto'" &gt;&gt; ~/.bashrc
source ~/.bashrc

### 11. 文本处理三剑客 & 流水线

| 命令 | 经典组合 | 示例 | 说明 |
|---|---|---|---|
| `awk` | `'{}'` | `awk '{print $1,$4}' access.log` | 按列打印；`$NF` 代表最后一列 |
| `sed` | `-i 's///g'` | `sed -i 's/127.0.0.1/0.0.0.0/g' *.conf` | 就地替换 |
| `cut` | `-d' ' -f1` | `cut -d: -f1 /etc/passwd` | 按分隔符截取 |
| `sort` / `uniq` | `-nr` / `-c` | `sort access.log | uniq -c | sort -nr | head -20` | 高频 IP 统计 |
| `wc` | `-l` | `find . -name "*.py" | xargs wc -l` | 统计代码行数 |
| `xargs` | `-P 0 -I {}` | `cat urls.txt | xargs -P 4 -I {} wget {}` | 4 并发下载 |
| `tee` | `-a` | `make 2&gt;&1 | tee build.log` | 屏幕 + 文件双输出 |

---

### 12. 重定向与进程控制

| 场景 | 写法 | 示例 |
|---|---|---|
| 标准输出重定向 | `&gt;` / `&gt;&gt;` | `echo "done" &gt;&gt; result.txt` |
| 标准错误重定向 | `2&gt;` / `2&gt;&1` | `g++ main.cpp 2&gt; err.log` |
| 黑洞丢弃 | `/dev/null` | `ping -c 1 10.0.0.1 &gt; /dev/null 2&gt;&1 && echo "up"` |
| 后台运行 | `&` | `long_job.sh &gt; job.log 2&gt;&1 &` |
| 脱离终端 | `nohup` / `disown` | `nohup ./train.py &` |
| 多命令序列 | `;` `&&` `||` | `./configure && make -j$(nproc) && sudo make install` |
| 子 Shell | `()` | `(cd /tmp; tar czf ~/tmp.tgz .)` | 不影响当前目录 |

---

### 13. 定时与后台任务

| 命令 | 示例 | 说明 |
|---|---|---|
| `crontab` | `crontab -e` | 编辑用户级计划任务 |
| 格式 | `* * * * * command` | 分 时 日 月 周 |
| 实例 | `0 2 * * * /usr/local/bin/backup.sh` | 每天 02:00 执行备份 |
| `at` | `echo "reboot" | at 02:00` | 一次性任务 |
| `watch` | `watch -n 1 'df -h'` | 每秒刷新磁盘使用率 |

---

### 14. 磁盘与挂载

| 命令 | 常用选项 | 示例 |
|---|---|---|
| `lsblk` | `-f` | 树状查看块设备 |
| `blkid` | - | 查看 UUID |
| `fdisk` / `parted` | `-l` | 分区工具（MBR/GPT） |
| `mkfs.ext4` | `-L DATA` | 格式化分区 |
| `mount` | `-t auto` | `mount /dev/sdb1 /mnt` |
| `umount` | `-l` | 强制卸载 |
| `df` | `-Th` | 文件系统类型 + 人类可读 |
| `du` | `-h --max-depth=1` | 目录空间占用 |
| `ncdu` | - | 交互式磁盘分析（需安装） |

---

### 15. 日志与审计

| 文件/目录 | 说明 |
|---|---|
| `/var/log/syslog` 或 `/var/log/messages` | 系统总日志 |
| `/var/log/auth.log` 或 `/var/log/secure` | 认证日志（sudo/ssh） |
| `dmesg` | 内核环缓冲 |
| `journalctl` | `-k` 只看内核日志；`_SYSTEMD_UNIT=nginx.service` 过滤单元 |

---

### 16. 性能排查一图流（80% 场景够用）

```bash
# 1. 负载高
uptime
# 2. 谁占 CPU
ps -eo pid,ppid,%cpu,%mem,cmd --sort=-%cpu | head
# 3. 谁占内存
ps -eo pid,ppid,%cpu,%mem,cmd --sort=-%mem | head
# 4. 磁盘瓶颈
iostat -x 1  # 安装：sysstat
# 5. 网络连接数
ss -s
# 6. 最热文件
lsof | awk '{print $NF}' | sort | uniq -c | sort -nr | head -20
```