<template><div><h2 id="🐧-常用-linux-命令速查表" tabindex="-1"><a class="header-anchor" href="#🐧-常用-linux-命令速查表"><span>🐧 常用 Linux 命令速查表</span></a></h2>
<blockquote>
<p>所有示例均基于 Bash，适用于绝大多数 GNU/Linux 发行版。</p>
</blockquote>
<hr>
<h3 id="_1-文件与目录操作" tabindex="-1"><a class="header-anchor" href="#_1-文件与目录操作"><span>1. 文件与目录操作</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>常用选项</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ls</code></td>
<td><code v-pre>-alh</code></td>
<td><code v-pre>ls -alh /var/log</code></td>
<td>列出目录内容（详细、人类可读）</td>
</tr>
<tr>
<td><code v-pre>cd</code></td>
<td>-</td>
<td><code v-pre>cd ~</code></td>
<td>切换目录；<code v-pre>~</code> 代表家目录</td>
</tr>
<tr>
<td><code v-pre>pwd</code></td>
<td><code v-pre>-P</code></td>
<td><code v-pre>pwd</code></td>
<td>显示当前绝对路径</td>
</tr>
<tr>
<td><code v-pre>mkdir</code></td>
<td><code v-pre>-p</code></td>
<td><code v-pre>mkdir -p a/b/c</code></td>
<td>递归创建目录</td>
</tr>
<tr>
<td><code v-pre>rmdir</code></td>
<td>-</td>
<td><code v-pre>rmdir emptydir</code></td>
<td>仅删除<strong>空</strong>目录</td>
</tr>
<tr>
<td><code v-pre>cp</code></td>
<td><code v-pre>-av</code></td>
<td><code v-pre>cp -av src/ dst/</code></td>
<td>归档复制，保留属性并显示过程</td>
</tr>
<tr>
<td><code v-pre>mv</code></td>
<td><code v-pre>-i</code></td>
<td><code v-pre>mv -i old new</code></td>
<td>移动/重命名；<code v-pre>-i</code> 防止覆盖</td>
</tr>
<tr>
<td><code v-pre>rm</code></td>
<td><code v-pre>-rf</code></td>
<td><code v-pre>rm -rf node_modules</code></td>
<td>强制递归删除（<strong>慎用</strong>）</td>
</tr>
<tr>
<td><code v-pre>touch</code></td>
<td>-</td>
<td><code v-pre>touch {1..10}.txt</code></td>
<td>批量创建空文件</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-文件内容查看与搜索" tabindex="-1"><a class="header-anchor" href="#_2-文件内容查看与搜索"><span>2. 文件内容查看与搜索</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>常用选项</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>cat</code></td>
<td><code v-pre>-n</code></td>
<td><code v-pre>cat -n /etc/passwd</code></td>
<td>一次性输出全部内容</td>
</tr>
<tr>
<td><code v-pre>less</code></td>
<td><code v-pre>-S</code></td>
<td><code v-pre>less /var/log/syslog</code></td>
<td>分页查看，可搜索 <code v-pre>/keyword</code></td>
</tr>
<tr>
<td><code v-pre>head</code> / <code v-pre>tail</code></td>
<td><code v-pre>-n 50 -f</code></td>
<td><code v-pre>tail -f -n 200 app.log</code></td>
<td>实时追踪日志</td>
</tr>
<tr>
<td><code v-pre>grep</code></td>
<td><code v-pre>-EiRn</code></td>
<td><code v-pre>grep -Rni &quot;error&quot; .</code></td>
<td>递归忽略大小写搜索</td>
</tr>
<tr>
<td><code v-pre>find</code></td>
<td><code v-pre>-type f -mtime</code></td>
<td><code v-pre>find . -type f -mtime +7</code></td>
<td>查找 7 天前修改的文件</td>
</tr>
<tr>
<td><code v-pre>locate</code></td>
<td><code v-pre>-i</code></td>
<td><code v-pre>locate -i *.conf</code></td>
<td>基于数据库快速查找（需 <code v-pre>updatedb</code>）</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_3-权限与用户" tabindex="-1"><a class="header-anchor" href="#_3-权限与用户"><span>3. 权限与用户</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>常用选项</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>chmod</code></td>
<td><code v-pre>-R</code></td>
<td><code v-pre>chmod -R 755 project/</code></td>
<td>递归改权限</td>
</tr>
<tr>
<td><code v-pre>chown</code></td>
<td><code v-pre>-R</code></td>
<td><code v-pre>chown -R www-data:www-data html/</code></td>
<td>递归改属主/组</td>
</tr>
<tr>
<td><code v-pre>sudo</code></td>
<td><code v-pre>-E</code></td>
<td><code v-pre>sudo -E apt update</code></td>
<td>保留环境变量提权</td>
</tr>
<tr>
<td><code v-pre>useradd</code> / <code v-pre>usermod</code></td>
<td><code v-pre>-m -G</code></td>
<td><code v-pre>usermod -aG docker $USER</code></td>
<td>将当前用户加入 docker 组</td>
</tr>
<tr>
<td><code v-pre>passwd</code></td>
<td>-</td>
<td><code v-pre>passwd alice</code></td>
<td>修改用户密码</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_4-进程与系统" tabindex="-1"><a class="header-anchor" href="#_4-进程与系统"><span>4. 进程与系统</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>常用选项</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ps</code></td>
<td><code v-pre>aux</code> / <code v-pre>ef</code></td>
<td>`ps aux</td>
<td>grep nginx`</td>
</tr>
<tr>
<td><code v-pre>top</code> / <code v-pre>htop</code></td>
<td>-</td>
<td><code v-pre>htop</code></td>
<td>交互式进程查看器（需安装）</td>
</tr>
<tr>
<td><code v-pre>kill</code></td>
<td><code v-pre>-9</code></td>
<td><code v-pre>kill -9 $(pidof python)</code></td>
<td>强制结束进程</td>
</tr>
<tr>
<td><code v-pre>systemctl</code></td>
<td><code v-pre>status start stop restart enable disable</code></td>
<td><code v-pre>systemctl restart sshd</code></td>
<td>管理 systemd 服务</td>
</tr>
<tr>
<td><code v-pre>journalctl</code></td>
<td><code v-pre>-fu</code></td>
<td><code v-pre>journalctl -fu nginx</code></td>
<td>实时查看服务日志</td>
</tr>
<tr>
<td><code v-pre>free</code></td>
<td><code v-pre>-h</code></td>
<td><code v-pre>free -h</code></td>
<td>人类可读内存信息</td>
</tr>
<tr>
<td><code v-pre>df</code></td>
<td><code v-pre>-h</code></td>
<td><code v-pre>df -h</code></td>
<td>磁盘使用率</td>
</tr>
<tr>
<td><code v-pre>uptime</code></td>
<td>-</td>
<td><code v-pre>uptime</code></td>
<td>系统负载与运行时间</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_5-网络" tabindex="-1"><a class="header-anchor" href="#_5-网络"><span>5. 网络</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>常用选项</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ping</code></td>
<td><code v-pre>-c 4</code></td>
<td><code v-pre>ping -c 4 8.8.8.8</code></td>
<td>测试连通性</td>
</tr>
<tr>
<td><code v-pre>curl</code></td>
<td><code v-pre>-I</code> / <code v-pre>-s</code></td>
<td><code v-pre>curl -s https://ip.sb</code></td>
<td>获取公网 IP</td>
</tr>
<tr>
<td><code v-pre>wget</code></td>
<td><code v-pre>-c</code></td>
<td><code v-pre>wget -c https://example.com/file.iso</code></td>
<td>断点续传下载</td>
</tr>
<tr>
<td><code v-pre>ss</code></td>
<td><code v-pre>-tulnp</code></td>
<td>`ss -tulnp</td>
<td>grep :80`</td>
</tr>
<tr>
<td><code v-pre>scp</code></td>
<td><code v-pre>-P -r</code></td>
<td><code v-pre>scp -P 2222 -r localdir user@host:/remote</code></td>
<td>加密远程复制</td>
</tr>
<tr>
<td><code v-pre>rsync</code></td>
<td><code v-pre>-avz --progress</code></td>
<td><code v-pre>rsync -avz local/ remote:/backup/</code></td>
<td>增量同步神器</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_6-压缩与归档" tabindex="-1"><a class="header-anchor" href="#_6-压缩与归档"><span>6. 压缩与归档</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>常用选项</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>tar</code></td>
<td><code v-pre>-czvf</code> / <code v-pre>-xzvf</code></td>
<td><code v-pre>tar czvf backup.tar.gz folder/</code></td>
<td>打包压缩</td>
</tr>
<tr>
<td><code v-pre>zip</code> / <code v-pre>unzip</code></td>
<td><code v-pre>-r</code></td>
<td><code v-pre>zip -r archive.zip dir/</code></td>
<td>兼容 Windows 的压缩</td>
</tr>
<tr>
<td><code v-pre>gzip</code> / <code v-pre>gunzip</code></td>
<td><code v-pre>-k</code></td>
<td><code v-pre>gzip -k big.log</code></td>
<td>单文件压缩，保留源文件</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_7-软件包管理-选型" tabindex="-1"><a class="header-anchor" href="#_7-软件包管理-选型"><span>7. 软件包管理（选型）</span></a></h3>
<table>
<thead>
<tr>
<th>发行族</th>
<th>命令</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Debian/Ubuntu</strong></td>
<td><code v-pre>apt</code></td>
<td><code v-pre>sudo apt update &amp;&amp; sudo apt install git</code></td>
</tr>
<tr>
<td><strong>RHEL/CentOS</strong></td>
<td><code v-pre>yum</code> / <code v-pre>dnf</code></td>
<td><code v-pre>sudo dnf install nginx</code></td>
</tr>
<tr>
<td><strong>Arch</strong></td>
<td><code v-pre>pacman</code></td>
<td><code v-pre>sudo pacman -Syu</code></td>
</tr>
<tr>
<td><strong>通用</strong></td>
<td><code v-pre>snap</code> / <code v-pre>flatpak</code></td>
<td><code v-pre>snap install code --classic</code></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_8-shell-快捷键-技巧" tabindex="-1"><a class="header-anchor" href="#_8-shell-快捷键-技巧"><span>8.  Shell 快捷键 &amp; 技巧</span></a></h3>
<table>
<thead>
<tr>
<th>快捷键</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Ctrl + A</code> / <code v-pre>E</code></td>
<td>移动到行首/行尾</td>
</tr>
<tr>
<td><code v-pre>Ctrl + U</code> / <code v-pre>K</code></td>
<td>删除到行首/行尾</td>
</tr>
<tr>
<td><code v-pre>Ctrl + R</code></td>
<td>反向搜索历史命令</td>
</tr>
<tr>
<td><code v-pre>!!</code></td>
<td>重复上一条命令</td>
</tr>
<tr>
<td><code v-pre>!$</code></td>
<td>引用上一个命令的最后一个参数</td>
</tr>
<tr>
<td><code v-pre>Alt + .</code></td>
<td>依次插入历史最后一个参数</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_9-一键复制配置-可选" tabindex="-1"><a class="header-anchor" href="#_9-一键复制配置-可选"><span>9. 一键复制配置（可选）</span></a></h3>
<h1 id="为当前用户添加彩色-ll-别名" tabindex="-1"><a class="header-anchor" href="#为当前用户添加彩色-ll-别名"><span>为当前用户添加彩色 ll 别名</span></a></h1>
<p>echo &quot;alias ll='ls -alh --color=auto'&quot; &gt;&gt; ~/.bashrc
source ~/.bashrc</p>
<h3 id="_11-文本处理三剑客-流水线" tabindex="-1"><a class="header-anchor" href="#_11-文本处理三剑客-流水线"><span>11. 文本处理三剑客 &amp; 流水线</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>经典组合</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>awk</code></td>
<td><code v-pre>'{}'</code></td>
<td><code v-pre>awk '{print $1,$4}' access.log</code></td>
<td>按列打印；<code v-pre>$NF</code> 代表最后一列</td>
</tr>
<tr>
<td><code v-pre>sed</code></td>
<td><code v-pre>-i 's///g'</code></td>
<td><code v-pre>sed -i 's/127.0.0.1/0.0.0.0/g' *.conf</code></td>
<td>就地替换</td>
</tr>
<tr>
<td><code v-pre>cut</code></td>
<td><code v-pre>-d' ' -f1</code></td>
<td><code v-pre>cut -d: -f1 /etc/passwd</code></td>
<td>按分隔符截取</td>
</tr>
<tr>
<td><code v-pre>sort</code> / <code v-pre>uniq</code></td>
<td><code v-pre>-nr</code> / <code v-pre>-c</code></td>
<td>`sort access.log</td>
<td>uniq -c</td>
</tr>
<tr>
<td><code v-pre>wc</code></td>
<td><code v-pre>-l</code></td>
<td>`find . -name &quot;*.py&quot;</td>
<td>xargs wc -l`</td>
</tr>
<tr>
<td><code v-pre>xargs</code></td>
<td><code v-pre>-P 0 -I {}</code></td>
<td>`cat urls.txt</td>
<td>xargs -P 4 -I {} wget {}`</td>
</tr>
<tr>
<td><code v-pre>tee</code></td>
<td><code v-pre>-a</code></td>
<td>`make 2&gt;&amp;1</td>
<td>tee build.log`</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_12-重定向与进程控制" tabindex="-1"><a class="header-anchor" href="#_12-重定向与进程控制"><span>12. 重定向与进程控制</span></a></h3>
<table>
<thead>
<tr>
<th>场景</th>
<th>写法</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>标准输出重定向</td>
<td><code v-pre>&amp;gt;</code> / <code v-pre>&amp;gt;&amp;gt;</code></td>
<td><code v-pre>echo &quot;done&quot; &amp;gt;&amp;gt; result.txt</code></td>
</tr>
<tr>
<td>标准错误重定向</td>
<td><code v-pre>2&amp;gt;</code> / <code v-pre>2&amp;gt;&amp;1</code></td>
<td><code v-pre>g++ main.cpp 2&amp;gt; err.log</code></td>
</tr>
<tr>
<td>黑洞丢弃</td>
<td><code v-pre>/dev/null</code></td>
<td><code v-pre>ping -c 1 10.0.0.1 &amp;gt; /dev/null 2&amp;gt;&amp;1 &amp;&amp; echo &quot;up&quot;</code></td>
</tr>
<tr>
<td>后台运行</td>
<td><code v-pre>&amp;</code></td>
<td><code v-pre>long_job.sh &amp;gt; job.log 2&amp;gt;&amp;1 &amp;</code></td>
</tr>
<tr>
<td>脱离终端</td>
<td><code v-pre>nohup</code> / <code v-pre>disown</code></td>
<td><code v-pre>nohup ./train.py &amp;</code></td>
</tr>
<tr>
<td>多命令序列</td>
<td><code v-pre>;</code> <code v-pre>&amp;&amp;</code> `</td>
<td></td>
</tr>
<tr>
<td>子 Shell</td>
<td><code v-pre>()</code></td>
<td><code v-pre>(cd /tmp; tar czf ~/tmp.tgz .)</code></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_13-定时与后台任务" tabindex="-1"><a class="header-anchor" href="#_13-定时与后台任务"><span>13. 定时与后台任务</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>crontab</code></td>
<td><code v-pre>crontab -e</code></td>
<td>编辑用户级计划任务</td>
</tr>
<tr>
<td>格式</td>
<td><code v-pre>* * * * * command</code></td>
<td>分 时 日 月 周</td>
</tr>
<tr>
<td>实例</td>
<td><code v-pre>0 2 * * * /usr/local/bin/backup.sh</code></td>
<td>每天 02:00 执行备份</td>
</tr>
<tr>
<td><code v-pre>at</code></td>
<td>`echo &quot;reboot&quot;</td>
<td>at 02:00`</td>
</tr>
<tr>
<td><code v-pre>watch</code></td>
<td><code v-pre>watch -n 1 'df -h'</code></td>
<td>每秒刷新磁盘使用率</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_14-磁盘与挂载" tabindex="-1"><a class="header-anchor" href="#_14-磁盘与挂载"><span>14. 磁盘与挂载</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>常用选项</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>lsblk</code></td>
<td><code v-pre>-f</code></td>
<td>树状查看块设备</td>
</tr>
<tr>
<td><code v-pre>blkid</code></td>
<td>-</td>
<td>查看 UUID</td>
</tr>
<tr>
<td><code v-pre>fdisk</code> / <code v-pre>parted</code></td>
<td><code v-pre>-l</code></td>
<td>分区工具（MBR/GPT）</td>
</tr>
<tr>
<td><code v-pre>mkfs.ext4</code></td>
<td><code v-pre>-L DATA</code></td>
<td>格式化分区</td>
</tr>
<tr>
<td><code v-pre>mount</code></td>
<td><code v-pre>-t auto</code></td>
<td><code v-pre>mount /dev/sdb1 /mnt</code></td>
</tr>
<tr>
<td><code v-pre>umount</code></td>
<td><code v-pre>-l</code></td>
<td>强制卸载</td>
</tr>
<tr>
<td><code v-pre>df</code></td>
<td><code v-pre>-Th</code></td>
<td>文件系统类型 + 人类可读</td>
</tr>
<tr>
<td><code v-pre>du</code></td>
<td><code v-pre>-h --max-depth=1</code></td>
<td>目录空间占用</td>
</tr>
<tr>
<td><code v-pre>ncdu</code></td>
<td>-</td>
<td>交互式磁盘分析（需安装）</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_15-日志与审计" tabindex="-1"><a class="header-anchor" href="#_15-日志与审计"><span>15. 日志与审计</span></a></h3>
<table>
<thead>
<tr>
<th>文件/目录</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/var/log/syslog</code> 或 <code v-pre>/var/log/messages</code></td>
<td>系统总日志</td>
</tr>
<tr>
<td><code v-pre>/var/log/auth.log</code> 或 <code v-pre>/var/log/secure</code></td>
<td>认证日志（sudo/ssh）</td>
</tr>
<tr>
<td><code v-pre>dmesg</code></td>
<td>内核环缓冲</td>
</tr>
<tr>
<td><code v-pre>journalctl</code></td>
<td><code v-pre>-k</code> 只看内核日志；<code v-pre>_SYSTEMD_UNIT=nginx.service</code> 过滤单元</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_16-性能排查一图流-80-场景够用" tabindex="-1"><a class="header-anchor" href="#_16-性能排查一图流-80-场景够用"><span>16. 性能排查一图流（80% 场景够用）</span></a></h3>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre  class="shiki nord vp-code" style="background-color:#2e3440ff;color:#d8dee9ff" v-pre=" language-bash"><code><span class="line"><span class="line"><span style="color:#616E88"># 1. 负载高</span></span></span>
<span class="line"><span class="line"><span style="color:#88C0D0">uptime</span></span></span>
<span class="line"><span class="line"><span style="color:#616E88"># 2. 谁占 CPU</span></span></span>
<span class="line"><span class="line"><span style="color:#88C0D0">ps</span><span style="color:#A3BE8C"> -eo</span><span style="color:#A3BE8C"> pid,ppid,%cpu,%mem,cmd</span><span style="color:#A3BE8C"> --sort=-%cpu</span><span style="color:#81A1C1"> |</span><span style="color:#88C0D0"> head</span></span></span>
<span class="line"><span class="line"><span style="color:#616E88"># 3. 谁占内存</span></span></span>
<span class="line"><span class="line"><span style="color:#88C0D0">ps</span><span style="color:#A3BE8C"> -eo</span><span style="color:#A3BE8C"> pid,ppid,%cpu,%mem,cmd</span><span style="color:#A3BE8C"> --sort=-%mem</span><span style="color:#81A1C1"> |</span><span style="color:#88C0D0"> head</span></span></span>
<span class="line"><span class="line"><span style="color:#616E88"># 4. 磁盘瓶颈</span></span></span>
<span class="line"><span class="line"><span style="color:#88C0D0">iostat</span><span style="color:#A3BE8C"> -x</span><span style="color:#B48EAD"> 1</span><span style="color:#616E88">  # 安装：sysstat</span></span></span>
<span class="line"><span class="line"><span style="color:#616E88"># 5. 网络连接数</span></span></span>
<span class="line"><span class="line"><span style="color:#88C0D0">ss</span><span style="color:#A3BE8C"> -s</span></span></span>
<span class="line"><span class="line"><span style="color:#616E88"># 6. 最热文件</span></span></span>
<span class="line"><span class="line"><span style="color:#88C0D0">lsof</span><span style="color:#81A1C1"> |</span><span style="color:#88C0D0"> awk</span><span style="color:#ECEFF4"> '</span><span style="color:#A3BE8C">{print $NF}</span><span style="color:#ECEFF4">'</span><span style="color:#81A1C1"> |</span><span style="color:#88C0D0"> sort</span><span style="color:#81A1C1"> |</span><span style="color:#88C0D0"> uniq</span><span style="color:#A3BE8C"> -c</span><span style="color:#81A1C1"> |</span><span style="color:#88C0D0"> sort</span><span style="color:#A3BE8C"> -nr</span><span style="color:#81A1C1"> |</span><span style="color:#88C0D0"> head</span><span style="color:#A3BE8C"> -20</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


