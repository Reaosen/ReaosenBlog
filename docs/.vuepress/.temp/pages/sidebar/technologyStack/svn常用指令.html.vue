<template><div><ol>
<li>查看当前状态</li>
</ol>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre  class="shiki nord vp-code" style="background-color:#2e3440ff;color:#d8dee9ff" v-pre=" language-bash"><code><span class="line"><span class="line"><span style="color:#88C0D0">svn</span><span style="color:#A3BE8C"> info</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>切换分支</li>
</ol>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre  class="shiki nord vp-code" style="background-color:#2e3440ff;color:#d8dee9ff" v-pre=" language-bash"><code><span class="line"><span class="line"><span style="color:#88C0D0">svn</span><span style="color:#A3BE8C"> switch</span><span style="color:#A3BE8C"> http://svn.example.com/repo/branches/测试分支名</span></span></span>
<span class="line"><span class="line"><span style="color:#616E88"># 或简写</span></span></span>
<span class="line"><span class="line"><span style="color:#88C0D0">svn</span><span style="color:#A3BE8C"> sw</span><span style="color:#A3BE8C"> http://svn.example.com/repo/branches/test</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>更新、提交、确认</li>
</ol>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre  class="shiki nord vp-code" style="background-color:#2e3440ff;color:#d8dee9ff" v-pre=" language-bash"><code><span class="line"><span class="line"><span style="color:#88C0D0">svn</span><span style="color:#A3BE8C"> up</span><span style="color:#616E88">                # 先更新</span></span></span>
<span class="line"><span class="line"><span style="color:#88C0D0">svn</span><span style="color:#A3BE8C"> st</span><span style="color:#616E88">                # 确认修改</span></span></span>
<span class="line"><span class="line"><span style="color:#88C0D0">svn</span><span style="color:#A3BE8C"> ci</span><span style="color:#A3BE8C"> -m</span><span style="color:#ECEFF4"> "</span><span style="color:#A3BE8C">提交到测试分支</span><span style="color:#ECEFF4">"</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


