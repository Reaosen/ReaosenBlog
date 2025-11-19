<template><div><h2 id="项目中最复杂的业务场景" tabindex="-1"><a class="header-anchor" href="#项目中最复杂的业务场景"><span>项目中最复杂的业务场景？</span></a></h2>
<p>“教师科研成果（论文/专利/软著）登记系统：</p>
<ul>
<li>
<p>审核流数据拆到 3 张不同业务表；</p>
</li>
<li>
<p>多表联合查询+级联更新，最大 SQL 关联 11 张表；</p>
</li>
<li>
<p>数据量 6 万条，接口 2 s → 0.3 s；</p>
</li>
<li>
<p>对接学校财务系统：手动+批量导入数据格式混乱，写 3 层数据清洗策略（正则+字典映射+权重打分），清洗准确率 99.7%，财务对账零差错。</p>
</li>
</ul>
<h2 id="sql-优化日常注意点" tabindex="-1"><a class="header-anchor" href="#sql-优化日常注意点"><span>SQL 优化日常注意点？</span></a></h2>
<ol>
<li>统一走索引：EXPLAIN 检查 type ≥ range，key 非 NULL；</li>
<li>最左前缀；LIKE ‘%xx’ 强制改写成 LIKE ‘xx%’ 或全文索引；</li>
<li>子查询改 JOIN，避免 SELECT *；</li>
<li>隐式类型转换禁用，列与参数同类型；</li>
<li>深分页用覆盖索引+ID 游标分页替换 LIMIT 100000,10；</li>
<li>高频统计走聚合中间表或 Redis，降低 90% 查询压力。</li>
</ol>
<h2 id="索引在什么情况下会失效" tabindex="-1"><a class="header-anchor" href="#索引在什么情况下会失效"><span>索引在什么情况下会失效？</span></a></h2>
<ol>
<li>违反最左前缀；</li>
<li>LIKE ‘%xx’ 或 LIKE ‘%xx%’；</li>
<li>列上包函数或隐式转换（如 WHERE DATE(gmt_create)=…）；</li>
<li>OR 两侧列未全部索引；</li>
<li>低选择性列（性别、状态）单独建索引；</li>
<li>MySQL 成本估算认为全表更快（&lt;20% 结果集）。</li>
</ol>
<h2 id="后端开启异步的-4-种常用方式" tabindex="-1"><a class="header-anchor" href="#后端开启异步的-4-种常用方式"><span>后端开启异步的 4 种常用方式？</span></a></h2>
<ol>
<li>@Async + @EnableAsync + 线程池（Spring）；</li>
<li>CompletableFuture.supplyAsync(…)；</li>
<li>@EventListener 事件驱动（Spring ApplicationEvent）；</li>
<li>MQ 消息队列（RocketMQ/Rabbit）彻底解耦。</li>
</ol>
<h2 id="缓存挡板在哪个节点写入" tabindex="-1"><a class="header-anchor" href="#缓存挡板在哪个节点写入"><span>缓存挡板在哪个节点写入？</span></a></h2>
<ol>
<li>读场景：先查缓存→miss→查 DB→回写缓存（Cache-Aside）。</li>
<li>写场景：双删策略——① 删缓存→② 更新 DB→③ 延迟 500 ms 再删（防并发脏读）。</li>
<li>首次预热：项目启动完成时，通过 ApplicationRunner 把热点榜单全表 scan 写缓存，避免第一个用户慢。</li>
</ol>
<h2 id="大文件上传1-用户等待久-2-浏览器-5-min-超时-3-连接池被长时间占用。解决方案" tabindex="-1"><a class="header-anchor" href="#大文件上传1-用户等待久-2-浏览器-5-min-超时-3-连接池被长时间占用。解决方案"><span>大文件上传① 用户等待久；② 浏览器 5 min 超时；③ 连接池被长时间占用。解决方案?</span></a></h2>
<ol>
<li>前端分片 5 MB/片，多线程上传，携带 chunkNumber+totalChunks+identifier；</li>
<li>后端异步：接收后立刻返回 202 Accepted + 上传 ID；</li>
<li>合并层：所有片传完发 /merge 请求，后端用 RandomAccessFile 按 offset 合并，合并完成回调前端；</li>
<li>秒传：先算 identifier（MD5），Redis 查已存在直接返回成功；</li>
<li>重传：片级失败重试 3 次，identifier+chunkNumber 做幂等；</li>
<li>连接池：上传接口单独走 Undertow 长连接 300 s，不影响业务连接池。</li>
</ol>
<h2 id="多线程合并文件时如何保证数据一致" tabindex="-1"><a class="header-anchor" href="#多线程合并文件时如何保证数据一致"><span>多线程合并文件时如何保证数据一致？</span></a></h2>
<ol>
<li>标识：文件维度 UUID + 总片数；</li>
<li>片顺序：本地文件名 UUID_${chunkNumber}.part；</li>
<li>合并前校验：收到片数=总片数 且 每片 MD5 匹配；</li>
<li>合并时用 synchronized(identifier.intern()) 或分布式锁；</li>
<li>合并完删除分片、写 Redis 完成标记，防重复合并。</li>
</ol>
<h2 id="如果发现内存溢出-应该怎么排查" tabindex="-1"><a class="header-anchor" href="#如果发现内存溢出-应该怎么排查"><span>如果发现内存溢出，应该怎么排查</span></a></h2>
<ol>
<li>查看关键报错信息，如java.lang.OutOfMemoryError。</li>
<li>使用内存映射分析工具对Dump出来的堆储存快照进行分析，分析清楚是内存溢出还是泄漏。</li>
<li>如果是内存溢出，则进一步通过工具查看泄漏对象到GC roots的引用链，修复应用程序中的内存泄漏。</li>
<li>如果不存在泄漏，则先检查代码中是否有死循环，递归等，再考虑增加堆内存的大小。</li>
</ol>
</div></template>


