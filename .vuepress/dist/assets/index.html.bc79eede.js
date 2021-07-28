import{g as n,j as s,k as a,s as t,F as e,m as p,E as o}from"./vendor.bd533c15.js";const c={},l=t("h1",{id:"ms",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ms","aria-hidden":"true"},"#"),p(" ms")],-1),u={href:"https://travis-ci.org/zeit/ms",target:"_blank",rel:"noopener noreferrer"},r=t("img",{src:"https://travis-ci.org/zeit/ms.svg?branch=master",alt:"Build Status"},null,-1),i={href:"https://spectrum.chat/zeit",target:"_blank",rel:"noopener noreferrer"},m=t("img",{src:"https://withspectrum.github.io/badge/badge.svg",alt:"Join the community on Spectrum"},null,-1),k=o('<p>Use this package to easily convert various time formats to milliseconds.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;2 days&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// 172800000</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;1d&#39;</span><span class="token punctuation">)</span>      <span class="token comment">// 86400000</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;10h&#39;</span><span class="token punctuation">)</span>     <span class="token comment">// 36000000</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;2.5 hrs&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 9000000</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;2h&#39;</span><span class="token punctuation">)</span>      <span class="token comment">// 7200000</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;1m&#39;</span><span class="token punctuation">)</span>      <span class="token comment">// 60000</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;5s&#39;</span><span class="token punctuation">)</span>      <span class="token comment">// 5000</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;1y&#39;</span><span class="token punctuation">)</span>      <span class="token comment">// 31557600000</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;100&#39;</span><span class="token punctuation">)</span>     <span class="token comment">// 100</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;-3 days&#39;</span><span class="token punctuation">)</span> <span class="token comment">// -259200000</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;-1h&#39;</span><span class="token punctuation">)</span>     <span class="token comment">// -3600000</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;-200&#39;</span><span class="token punctuation">)</span>    <span class="token comment">// -200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="convert-from-milliseconds" tabindex="-1"><a class="header-anchor" href="#convert-from-milliseconds" aria-hidden="true">#</a> Convert from Milliseconds</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">ms</span><span class="token punctuation">(</span><span class="token number">60000</span><span class="token punctuation">)</span>             <span class="token comment">// &quot;1m&quot;</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">60000</span><span class="token punctuation">)</span>         <span class="token comment">// &quot;2m&quot;</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token number">60000</span><span class="token punctuation">)</span>        <span class="token comment">// &quot;-3m&quot;</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;10 hours&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// &quot;10h&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="time-format-written-out" tabindex="-1"><a class="header-anchor" href="#time-format-written-out" aria-hidden="true">#</a> Time Format Written-Out</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">ms</span><span class="token punctuation">(</span><span class="token number">60000</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> long<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>             <span class="token comment">// &quot;1 minute&quot;</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> long<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>         <span class="token comment">// &quot;2 minutes&quot;</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> long<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>        <span class="token comment">// &quot;-3 minutes&quot;</span>\n<span class="token function">ms</span><span class="token punctuation">(</span><span class="token function">ms</span><span class="token punctuation">(</span><span class="token string">&#39;10 hours&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> long<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>    <span class="token comment">// &quot;10 hours&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>',8),d=p("Works both in "),b={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},h=p("Node.js"),g=p(" and in the browser"),f=t("li",null,[p("If a number is supplied to "),t("code",null,"ms"),p(", a string with a unit is returned")],-1),v=t("li",null,[p("If a string that contains the number is supplied, it returns it as a number (e.g.: it returns "),t("code",null,"100"),p(" for "),t("code",null,"'100'"),p(")")],-1),q=t("li",null,"If you pass a string with a number and a valid unit, the number of equivalent milliseconds is returned",-1),y=t("h2",{id:"related-packages",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#related-packages","aria-hidden":"true"},"#"),p(" Related Packages")],-1),j={href:"https://github.com/knpwrs/ms.macro",target:"_blank",rel:"noopener noreferrer"},x=p("ms.macro"),w=p(" - Run "),_=t("code",null,"ms",-1),F=p(" as a macro at build-time."),I=t("h2",{id:"caught-a-bug",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#caught-a-bug","aria-hidden":"true"},"#"),p(" Caught a Bug?")],-1),z={href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"},W=p("Fork"),B=p(" this repository to your own GitHub account and then "),C={href:"https://help.github.com/articles/cloning-a-repository/",target:"_blank",rel:"noopener noreferrer"},E=p("clone"),L=p(" it to your local device"),N=t("li",null,[p("Link the package to the global module directory: "),t("code",null,"npm link")],-1),O=t("li",null,[p("Within the module you want to test your local development instance of ms, just link it to the dependencies: "),t("code",null,"npm link ms"),p(". Instead of the default one from npm, Node.js will now use your clone of ms!")],-1),R=t("p",null,[p("As always, you can run the tests using: "),t("code",null,"npm test")],-1);c.render=function(p,o){const c=n("OutboundLink");return s(),a(e,null,[l,t("p",null,[t("a",u,[r,t(c)]),t("a",i,[m,t(c)])]),k,t("ul",null,[t("li",null,[d,t("a",b,[h,t(c)]),g]),f,v,q]),y,t("ul",null,[t("li",null,[t("a",j,[x,t(c)]),w,_,F])]),I,t("ol",null,[t("li",null,[t("a",z,[W,t(c)]),B,t("a",C,[E,t(c)]),L]),N,O]),R],64)};export{c as default};