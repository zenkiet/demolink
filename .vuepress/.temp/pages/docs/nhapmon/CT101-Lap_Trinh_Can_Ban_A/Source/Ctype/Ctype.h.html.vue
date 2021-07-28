<template><h1 id="ctype-h" tabindex="-1"><a class="header-anchor" href="#ctype-h" aria-hidden="true">#</a> Ctype.h</h1>
<h2 id="_1-ham-isalnum" tabindex="-1"><a class="header-anchor" href="#_1-ham-isalnum" aria-hidden="true">#</a> 1. Hàm <code>isalnum </code></h2>
<p>Hàm <strong>kiểm tra xem ký tự đã truyền có phải là ký tự - số</strong> hay không.</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">char</span> c<span class="token punctuation">;</span>
       <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter any key : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       c<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isalnum</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is an alphanumeric"</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">else</span><span class="token punctuation">{</span>
           <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is not an alphanumeric"</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><br>2<br>d<br>\t<br>&quot; &quot;</td>
<td><br>|2| is an alphanumeric<br>|d| is an alphanumeric<br>|        |is not an alphanumeric<br>| |is not an alphanumeric</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_2-ham-isalpha" tabindex="-1"><a class="header-anchor" href="#_2-ham-isalpha" aria-hidden="true">#</a> 2. hàm <code>isalpha</code></h2>
<p>Hàm <strong>void isalnum(int c)</strong> kiểm tra xem ký tự đã truyền có phải là <strong>ký tự</strong> hay không</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">char</span> c<span class="token punctuation">;</span>
       <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter any key : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       c<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isalnum</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is an alphabet"</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">else</span><span class="token punctuation">{</span>
           <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is not an alphabet"</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><br>2<br>d<br>\t<br>&quot; &quot;</td>
<td><br>|2| is an alphabet<br>|d| is an alphabet<br>|        |is not an alphanbet<br>|  |is not an alphabet</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_3-ham-iscntrl" tabindex="-1"><a class="header-anchor" href="#_3-ham-iscntrl" aria-hidden="true">#</a> 3. Hàm <code>iscntrl</code></h2>
<p>Hàm <strong>trả về giá trị khác 0</strong> nếu <em>đối số</em> là một <a href="https://daynhauhoc.com/t/wiki-cac-ky-tu-dieu-khien-va-ky-tu-dac-biet-trong-c-c/2295" target="_blank" rel="noopener noreferrer"><strong>ký tự điều khiển</strong><OutboundLink/></a>. Nếu không, <strong>hàm trả về 0</strong></p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">char</span> str1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Learn \a code \t programing"</span><span class="token punctuation">;</span>
   <span class="token keyword">char</span> str2<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"by \n Zen"</span><span class="token punctuation">;</span>
   <span class="token comment">// in chuỗi tới khi gặp ký tự \a</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">iscntrl</span><span class="token punctuation">(</span>str1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">putchar</span><span class="token punctuation">(</span>str1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// in chuỗi cho tới khi gặp ký tự \n</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">iscntrl</span><span class="token punctuation">(</span>str2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">putchar</span><span class="token punctuation">(</span>str2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>Learn by</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_4-ham-isdigit" tabindex="-1"><a class="header-anchor" href="#_4-ham-isdigit" aria-hidden="true">#</a> 4. Hàm <code>isdigit</code></h2>
<p>Hàm này <strong>kiểm tra</strong> xem ký tự đã truyền có phải là <strong>chữ số thập phân</strong> không</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">char</span> c1<span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the character : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   c1<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isdigit</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is digit"</span><span class="token punctuation">,</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is not digit"</span><span class="token punctuation">,</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><br>h<br>2</td>
<td><br>|h| is not digit<br>|2| is digit</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_5-ham-isgraph" tabindex="-1"><a class="header-anchor" href="#_5-ham-isgraph" aria-hidden="true">#</a> 5. Hàm <code>isgraph</code></h2>
<p>Hàm <strong>kiểm tra ký tự graphical</strong> hay không</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">int</span> var<span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the character : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   var<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isgraph</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| can be printed"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| can't be printed"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><br>3<br>h<br>'  '</td>
<td><br>|3| can be printed<br>|h| can be printed<br>|  | can't be printed</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_6-ham-islower" tabindex="-1"><a class="header-anchor" href="#_6-ham-islower" aria-hidden="true">#</a> 6. Hàm <code>islower</code></h2>
<p>Hàm <strong>kiểm tra ký tự thường</strong> hay không</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">char</span> var<span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the character : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   var<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">islower</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is lowercase character"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is not lowercase character"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><br>a<br>Q<br>3</td>
<td><br>|a| is lowercase character<br>|Q| is not lowercase character<br>|3| is not lowercase character</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_7-ham-isprint" tabindex="-1"><a class="header-anchor" href="#_7-ham-isprint" aria-hidden="true">#</a> 7. Hàm <code>isprint</code></h2>
<p>Hàm kiểm tra <em>đối số</em> là <strong>ký tự có thể in được</strong> hay không.</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">char</span> var<span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the character : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   var<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isprint</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| can be printed"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| can't be printed"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><br>3<br>k<br>' '<br>'\t'</td>
<td><br>|3| can be printed<br>|k| can be printed<br>|  | can be printed<br>|        | can't be printed</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_8-ham-ispunct" tabindex="-1"><a class="header-anchor" href="#_8-ham-ispunct" aria-hidden="true">#</a> 8. Hàm <code>ispunct</code></h2>
<p>Hàm Kiểm <strong>tra ký tự <a href="https://www.rung.vn/dict/en_vn/Punctuation_character" target="_blank" rel="noopener noreferrer">punctuation<OutboundLink/></a></strong></p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">char</span> var<span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the character : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   var<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">ispunct</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is a punctuation character"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is not a punctuation character"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><br>t<br>1<br>!<br>.<br></td>
<td><br>|t| is not a punctuation character<br>|1| is not a punctuation character<br>|!| is a punctuation character<br>|.| is a punctuation character</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_9-ham-isspace" tabindex="-1"><a class="header-anchor" href="#_9-ham-isspace" aria-hidden="true">#</a> 9. Hàm <code>isspace</code></h2>
<p>Hàm <strong>kiểm tra ký tự có phải là khoảng trắng</strong> <em>(white-space)</em> hay không</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">char</span> var<span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the character : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   var<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isspace</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is a white-space character"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is not a white-space character"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><br>1<br>t<br>\t<br>'  '</td>
<td><br>|1| is not a white-space character<br>|t| is not a white-space character<br>|        | is a white-space character<br>|  | is a white-space character</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_10-ham-isupper" tabindex="-1"><a class="header-anchor" href="#_10-ham-isupper" aria-hidden="true">#</a> 10. Hàm <code>isupper</code></h2>
<p>Hàm <strong>kiểm tra ký tự phải in hoa</strong> hay không</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">char</span> var<span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the character : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   var<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isupper</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is upperCase character"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">else</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"|%c| is not upperCase character"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td><br>4<br>Q<br>t</td>
<td><br>|4| is not upperCase character<br>|Q| is upperCase character<br>|t| is not upperCase character</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_11-ham-isxdigit" tabindex="-1"><a class="header-anchor" href="#_11-ham-isxdigit" aria-hidden="true">#</a> 11. Hàm <code>isxdigit</code></h2>
<p>Hàm <strong>Kiểm tra ký tự có phải thập lục phân</strong> hay không</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">char</span> var<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the character : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">fgets</span><span class="token punctuation">(</span>var<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isxdigit</span><span class="token punctuation">(</span>var<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%sis hexadecimal character"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">else</span>
      <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%sis not hexadecimal character"</span><span class="token punctuation">,</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>0xE<br>zen</td>
<td>&quot;0xE&quot; is hexadecimal character<br>&quot;zen&quot; is not hexadecimal character</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_12-ham-tolower" tabindex="-1"><a class="header-anchor" href="#_12-ham-tolower" aria-hidden="true">#</a> 12. Hàm <code>tolower</code></h2>
<p>Hàm <strong>chuyển đổi các chữ cái thành chữ in thường</strong></p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">char</span> var<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the string : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">fgets</span><span class="token punctuation">(</span>var<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span>var<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">putchar</span><span class="token punctuation">(</span><span class="token function">tolower</span><span class="token punctuation">(</span>var<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>ZENfection</td>
<td>zenfection</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
<hr>
<h2 id="_13-ham-toupper" tabindex="-1"><a class="header-anchor" href="#_13-ham-toupper" aria-hidden="true">#</a> 13. Hàm <code>toupper</code></h2>
<p>Hàm <strong>chuyển đổi các chữ cái thành chữ in hoa</strong></p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">char</span> var<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the string : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">fgets</span><span class="token punctuation">(</span>var<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span>var<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">putchar</span><span class="token punctuation">(</span><span class="token function">toupper</span><span class="token punctuation">(</span>var<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>ZENfection</td>
<td>ZENFECTION</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="">Chạy thử</a></th>
</tr>
</thead>
</table>
</template>
