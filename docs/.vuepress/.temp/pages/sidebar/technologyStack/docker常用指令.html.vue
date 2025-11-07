<template><div><h1 id="🐳-docker-常用命令速查表" tabindex="-1"><a class="header-anchor" href="#🐳-docker-常用命令速查表"><span>🐳 Docker 常用命令速查表</span></a></h1>
<hr>
<h2 id="_1-生命周期一条龙" tabindex="-1"><a class="header-anchor" href="#_1-生命周期一条龙"><span>1. 生命周期一条龙</span></a></h2>
<table>
<thead>
<tr>
<th>阶段</th>
<th>命令</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>拉镜像</td>
<td><code v-pre>docker pull</code></td>
<td><code v-pre>docker pull nginx:1.25-alpine</code></td>
</tr>
<tr>
<td>起容器</td>
<td><code v-pre>docker run</code></td>
<td><code v-pre>docker run -d --name web -p 80:80 nginx:1.25-alpine</code></td>
</tr>
<tr>
<td>看容器</td>
<td><code v-pre>docker ps</code></td>
<td><code v-pre>docker ps -a</code></td>
</tr>
<tr>
<td>停/起</td>
<td><code v-pre>docker stop/start/restart</code></td>
<td><code v-pre>docker stop web</code></td>
</tr>
<tr>
<td>删容器</td>
<td><code v-pre>docker rm</code></td>
<td><code v-pre>docker rm -f web</code></td>
</tr>
<tr>
<td>删镜像</td>
<td><code v-pre>docker rmi</code></td>
<td><code v-pre>docker rmi nginx:1.25-alpine</code></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_2-镜像管理" tabindex="-1"><a class="header-anchor" href="#_2-镜像管理"><span>2. 镜像管理</span></a></h2>
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
<td><code v-pre>docker images</code></td>
<td><code v-pre>-q</code> 只显 ID</td>
<td><code v-pre>docker images --format &quot;table {{.Repository}}:{{.Tag}}\t{{.Size}}&quot;</code></td>
</tr>
<tr>
<td><code v-pre>docker build</code></td>
<td><code v-pre>-t</code> 打标签；<code v-pre>--no-cache</code></td>
<td><code v-pre>docker build -t demo:1.0 .</code></td>
</tr>
<tr>
<td><code v-pre>docker tag</code></td>
<td>-</td>
<td><code v-pre>docker tag demo:1.0 reg.example.com/demo:1.0</code></td>
</tr>
<tr>
<td><code v-pre>docker push</code></td>
<td>-</td>
<td><code v-pre>docker push reg.example.com/demo:1.0</code></td>
</tr>
<tr>
<td><code v-pre>docker pull</code></td>
<td>-</td>
<td><code v-pre>docker pull reg.example.com/demo:1.0</code></td>
</tr>
<tr>
<td><code v-pre>docker save</code></td>
<td><code v-pre>-o</code></td>
<td>`docker save demo:1.0</td>
</tr>
<tr>
<td><code v-pre>docker load</code></td>
<td><code v-pre>-i</code></td>
<td>`gunzip -c demo.tgz</td>
</tr>
<tr>
<td><code v-pre>docker image prune</code></td>
<td><code v-pre>-a -f</code></td>
<td>清理 dangling/无用镜像</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_3-容器日常操作" tabindex="-1"><a class="header-anchor" href="#_3-容器日常操作"><span>3. 容器日常操作</span></a></h2>
<table>
<thead>
<tr>
<th>场景</th>
<th>命令</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>交互进入</td>
<td><code v-pre>docker exec</code></td>
<td><code v-pre>docker exec -it web bash</code></td>
</tr>
<tr>
<td>看日志</td>
<td><code v-pre>docker logs</code></td>
<td><code v-pre>docker logs -f --tail 200 web</code></td>
</tr>
<tr>
<td>实时资源</td>
<td><code v-pre>docker stats</code></td>
<td><code v-pre>docker stats --no-stream</code></td>
</tr>
<tr>
<td>复制文件</td>
<td><code v-pre>docker cp</code></td>
<td><code v-pre>docker cp web:/etc/nginx/nginx.conf .</code></td>
</tr>
<tr>
<td>导出容器</td>
<td><code v-pre>docker export</code></td>
<td><code v-pre>docker export web &amp;gt; web.tar</code></td>
</tr>
<tr>
<td>导入为镜像</td>
<td><code v-pre>docker import</code></td>
<td>`cat web.tar</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_4-端口-卷-环境变量" tabindex="-1"><a class="header-anchor" href="#_4-端口-卷-环境变量"><span>4. 端口/卷/环境变量</span></a></h2>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre  class="shiki nord vp-code" style="background-color:#2e3440ff;color:#d8dee9ff" v-pre=" language-bash"><code><span class="line"><span class="line"><span style="color:#616E88"># 一次性写法模板</span></span></span>
<span class="line"><span class="line"><span style="color:#88C0D0">docker</span><span style="color:#A3BE8C"> run</span><span style="color:#A3BE8C"> -d</span><span style="color:#EBCB8B"> \</span></span></span>
<span class="line"><span class="line"><span style="color:#A3BE8C">  --name</span><span style="color:#A3BE8C"> mysql</span><span style="color:#EBCB8B"> \</span></span></span>
<span class="line"><span class="line"><span style="color:#A3BE8C">  -p</span><span style="color:#A3BE8C"> 3306:3306</span><span style="color:#EBCB8B"> \</span></span></span>
<span class="line"><span class="line"><span style="color:#A3BE8C">  -e</span><span style="color:#A3BE8C"> MYSQL_ROOT_PASSWORD=</span><span style="color:#B48EAD">123456</span><span style="color:#EBCB8B"> \</span></span></span>
<span class="line"><span class="line"><span style="color:#A3BE8C">  -v</span><span style="color:#A3BE8C"> mysql-data:/var/lib/mysql</span><span style="color:#EBCB8B"> \</span></span></span>
<span class="line"><span class="line"><span style="color:#A3BE8C">  -v</span><span style="color:#D8DEE9"> $PWD</span><span style="color:#A3BE8C">/conf.d:/etc/mysql/conf.d:ro</span><span style="color:#EBCB8B"> \</span></span></span>
<span class="line"><span class="line"><span style="color:#A3BE8C">  --restart=unless-stopped</span><span style="color:#EBCB8B"> \</span></span></span>
<span class="line"><span class="line"><span style="color:#A3BE8C">  mysql:8.0</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>-p 宿主机:容器</code></td>
<td>端口映射；可多次</td>
</tr>
<tr>
<td><code v-pre>-v 宿主机:容器[:ro]</code></td>
<td>绑定挂载；<code v-pre>ro</code> 只读</td>
</tr>
<tr>
<td><code v-pre>--mount</code></td>
<td>更 verbose 的卷语法，推荐生产</td>
</tr>
<tr>
<td><code v-pre>-e KEY=VAL</code></td>
<td>环境变量；可文件 <code v-pre>--env-file .env</code></td>
</tr>
<tr>
<td><code v-pre>--restart</code></td>
<td><code v-pre>no</code>/<code v-pre>on-failure</code>/<code v-pre>always</code>/<code v-pre>unless-stopped</code></td>
</tr>
</tbody>
</table>
<h2 id="_5-卷-网络" tabindex="-1"><a class="header-anchor" href="#_5-卷-网络"><span>5. 卷 &amp; 网络</span></a></h2>
<table>
<thead>
<tr>
<th>任务</th>
<th>命令</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>创建卷</td>
<td><code v-pre>docker volume create</code></td>
<td><code v-pre>docker volume create pgdata</code></td>
</tr>
<tr>
<td>列出卷</td>
<td><code v-pre>docker volume ls</code></td>
<td>-</td>
</tr>
<tr>
<td>清理无用卷</td>
<td><code v-pre>docker volume prune</code></td>
<td>-</td>
</tr>
<tr>
<td>创建网络</td>
<td><code v-pre>docker network create</code></td>
<td><code v-pre>docker network create frontend</code></td>
</tr>
<tr>
<td>查看网络</td>
<td><code v-pre>docker network ls</code></td>
<td>-</td>
</tr>
<tr>
<td>连接容器</td>
<td><code v-pre>--network</code></td>
<td><code v-pre>docker run -d --name redis --network frontend redis:7-alpine</code></td>
</tr>
<tr>
<td>断开/连接</td>
<td><code v-pre>docker network disconnect/connect</code></td>
<td>热调整网络</td>
</tr>
</tbody>
</table>
<h2 id="_6-docker-compose-精简" tabindex="-1"><a class="header-anchor" href="#_6-docker-compose-精简"><span>6. Docker Compose（精简）</span></a></h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>docker compose up -d</code></td>
<td>后台启动所有服务</td>
</tr>
<tr>
<td><code v-pre>docker compose down</code></td>
<td>停止并移除容器/网络</td>
</tr>
<tr>
<td><code v-pre>docker compose logs -f</code></td>
<td>聚合日志</td>
</tr>
<tr>
<td><code v-pre>docker compose exec web bash</code></td>
<td>进入服务容器</td>
</tr>
<tr>
<td><code v-pre>docker compose build</code></td>
<td>重新构建镜像</td>
</tr>
<tr>
<td><code v-pre>docker compose pull</code></td>
<td>更新基础镜像</td>
</tr>
<tr>
<td><code v-pre>docker compose restart</code></td>
<td>重启服务</td>
</tr>
</tbody>
</table>
<h2 id="_7-调试" tabindex="-1"><a class="header-anchor" href="#_7-调试"><span>7. 调试</span></a></h2>
<table>
<thead>
<tr>
<th>场景</th>
<th>命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>容器无法启动</td>
<td><code v-pre>docker logs &lt;id&gt;</code> 先看；再加 <code v-pre>--entrypoint sh</code> 覆盖调试</td>
</tr>
<tr>
<td>网络不通</td>
<td><code v-pre>docker network inspect &lt;net&gt;</code> 看 IPAM；<code v-pre>docker exec</code> 进容器 <code v-pre>ping</code></td>
</tr>
<tr>
<td>镜像多大</td>
<td><code v-pre>docker history --no-trunc &lt;img&gt;</code> 逐层尺寸</td>
</tr>
<tr>
<td>进入无 shell 镜像</td>
<td><code v-pre>docker run --rm -it --entrypoint sh myimg</code></td>
</tr>
<tr>
<td>查看实时事件</td>
<td><code v-pre>docker events</code></td>
</tr>
</tbody>
</table>
</div></template>


