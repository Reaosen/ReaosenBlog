<template><div><h4 id="tomcat服务器在idea中乱码解决方案" tabindex="-1"><a class="header-anchor" href="#tomcat服务器在idea中乱码解决方案"><span>Tomcat服务器在Idea中乱码解决方案</span></a></h4>
<ol>
<li>打开Idea中的Tomcat服务器编辑，选择启动/链接(Startup/Connection)，将传递环境变量(Pass environment variables)打勾。</li>
<li>在下方添加环境变量:<div class="language-java line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre  class="shiki nord vp-code" style="background-color:#2e3440ff;color:#d8dee9ff" v-pre=" language-java"><code><span class="line"><span class="line"><span style="color:#616E88">//Name Value</span></span></span>
<span class="line"><span class="line"><span style="color:#D8DEE9FF">JAVA_TOOL_OPTIONS   </span><span style="color:#81A1C1">-</span><span style="color:#D8DEE9">Dfile</span><span style="color:#ECEFF4">.</span><span style="color:#D8DEE9">encoding</span><span style="color:#81A1C1">=</span><span style="color:#D8DEE9FF">UTF</span><span style="color:#81A1C1">-</span><span style="color:#B48EAD">8</span></span></span>
<span class="line"><span class="line"><span style="color:#D8DEE9FF">JAVA_OPTS   </span><span style="color:#81A1C1">-</span><span style="color:#D8DEE9">Dfile</span><span style="color:#ECEFF4">.</span><span style="color:#D8DEE9">encoding</span><span style="color:#81A1C1">=</span><span style="color:#D8DEE9FF">UTF</span><span style="color:#81A1C1">-</span><span style="color:#B48EAD">8</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>选择服务器(server)，在虚拟机选项(VM options)填写<code v-pre>-Dfile.encoding=UTF-8</code></li>
</ol>
<p>可能是因为windows的默认编码是GBK，所以idea的控制台编码默认也是GBK，所以需要设置成UTF-8</p>
<blockquote>
<p>参考链接: <a href="https://blog.csdn.net/CNpeaceful/article/details/135679808" target="_blank" rel="noopener noreferrer">【已解决】解决Tomcat在IDEA控制台乱码问题，详细的保姆级别教程！</a></p>
</blockquote>
</div></template>


