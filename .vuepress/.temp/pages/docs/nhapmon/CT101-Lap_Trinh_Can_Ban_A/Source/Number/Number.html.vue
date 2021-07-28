<template><h1 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h1>
<h3 id="_1-so-hoan-thien-perfect-number" tabindex="-1"><a class="header-anchor" href="#_1-so-hoan-thien-perfect-number" aria-hidden="true">#</a> 1.Số hoàn thiện (Perfect Number)</h3>
<p>Số hoàn thiện là một số nguyên dương mà tổng các ước nguyên dương chính thức của nó bằng chính nó</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token keyword">int</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer = "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            sum<span class="token operator">+=</span>i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum<span class="token operator">==</span>n<span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is a perfect number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d not is a perfect number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>6</td>
<td>6 is a perfect number</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/jkowijyw-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_2-day-fibonacci-fibonacci-series" tabindex="-1"><a class="header-anchor" href="#_2-day-fibonacci-fibonacci-series" aria-hidden="true">#</a> 2.Dãy Fibonacci (Fibonacci Series)</h3>
<p>Dãy Fibonacci là <strong>dãy vô hạn</strong> các <strong>số tự nhiên</strong> bắt đầu bằng 2 phần tử 0 và 1 hoặc 1 và 1, các phần tử sau đó được thiếp lập theo quy tắc mỗi phần tử luôn bằng tổng 2 phần tử trước nó.</p>
<p><strong><u>Công thức truy hồi sau đây:</u></strong></p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/07/22-16-14-55-Ảnh chụp Màn hình 2020-07-22 lúc 16.13.20.png" alt="Ảnh chụp Màn hình 2020-07-22 lúc 16.13.20.png" width="376">
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>n<span class="token punctuation">;</span>
    a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    b<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter length of the range : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Fibonacci Series : %d %d "</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        c<span class="token operator">=</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>
        a<span class="token operator">=</span>b<span class="token punctuation">;</span>
        b<span class="token operator">=</span>c<span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>5</td>
<td>0 1 1 2 3 5 8</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/xvvjdxat-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_3-giai-thua-cua-1-so-factorial-of-a-number" tabindex="-1"><a class="header-anchor" href="#_3-giai-thua-cua-1-so-factorial-of-a-number" aria-hidden="true">#</a> 3.Giai thừa của 1 số  (Factorial of a Number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token keyword">long</span> fact<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fact<span class="token operator">*=</span>i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Factorial of %d is %ld"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span>fact<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<td>5</td>
<td>120</td>
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
<h3 id="_4-so-tu-man-armstrong-number" tabindex="-1"><a class="header-anchor" href="#_4-so-tu-man-armstrong-number" aria-hidden="true">#</a> 4.Số tự mãn (Armstrong Number)</h3>
<p><strong>Số tự mãn</strong> cũng được gọi là <strong>số tuyệt hảo bất biến</strong>, là 1 số mà có tổng các chữ số mũ n (n≥2) bằng chính nó.</p>
<p><strong>Ví dụ</strong>: <img title="" src="https://latex.codecogs.com/gif.latex?\dpi{150} \bg_white 3^3+7^3+1^3%3D371" alt="" width="163"></p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">count_digit</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">,</span>n<span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>t<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    t<span class="token operator">=</span>n<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a<span class="token operator">=</span>t<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">;</span>
        b<span class="token operator">+=</span><span class="token function">pow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token function">count_digit</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token operator">/=</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token operator">==</span>n<span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is an Armstrong number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is not an Armstrong number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">count_digit</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n<span class="token operator">/=</span><span class="token number">10</span><span class="token punctuation">;</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>153</td>
<td>153 is an Armstrong number</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/jtepfreg-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_5-đao-nguoc-cua-1-so-reverse-of-a-number" tabindex="-1"><a class="header-anchor" href="#_5-đao-nguoc-cua-1-so-reverse-of-a-number" aria-hidden="true">#</a> 5.Đảo ngược của 1 số (Reverse of a number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span>t<span class="token punctuation">;</span>
    <span class="token keyword">int</span> reverse<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    t<span class="token operator">=</span>n<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        reverse<span class="token operator">*=</span><span class="token number">10</span><span class="token punctuation">;</span>
        reverse<span class="token operator">+=</span><span class="token punctuation">(</span>t<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token operator">/=</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Reverse of %d is = %d"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span>reverse<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>12345</td>
<td>54321</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/yggtldgc-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_6-tim-so-chan-hoac-le-find-even-or-odd-number" tabindex="-1"><a class="header-anchor" href="#_6-tim-so-chan-hoac-le-find-even-or-odd-number" aria-hidden="true">#</a> 6.Tìm số chẵn hoặc lẻ (Find Even or Odd number)</h3>
<p>Số chẵn là số chia hết cho 2, còn số lẻ thì không</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number = "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is Even number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is Odd number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>10</td>
<td>10 is Even number</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/kaevvfho-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_7-uoc-chung-lon-nhat-va-boi-chung-nho-nhat-hcf-lcm" tabindex="-1"><a class="header-anchor" href="#_7-uoc-chung-lon-nhat-va-boi-chung-nho-nhat-hcf-lcm" aria-hidden="true">#</a> 7. Ước chung lớn nhất và bội chung nhỏ nhất (HCF &amp; LCM)</h3>
<p>HCF : (ước chung lớn nhất): Là số nguyên lớn nhất là ước chung của a và b</p>
<p>LCM : (bội chung nhỏ nhất): là số nguyên nhỏ nhất chia hết cho cả a và b</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num1<span class="token punctuation">,</span>num2<span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>t<span class="token punctuation">,</span>gcd<span class="token punctuation">,</span>lcm<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 1 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 2 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    a<span class="token operator">=</span>num1<span class="token punctuation">;</span>
    b<span class="token operator">=</span>num2<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>b<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        t<span class="token operator">=</span>b<span class="token punctuation">;</span>
        b<span class="token operator">=</span>a<span class="token operator">%</span>b<span class="token punctuation">;</span>
        a<span class="token operator">=</span>t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    gcd <span class="token operator">=</span> a<span class="token punctuation">;</span>
    lcm <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token operator">/</span>gcd<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Greatest common divisor of %d and %d = %d\n"</span><span class="token punctuation">,</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">,</span>gcd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Least common multiple of %d and %d = %d\n"</span><span class="token punctuation">,</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">,</span>lcm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>2 5</td>
<td>GCD = 1 <br>LCD = 10</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/apigvkfx-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_8-hoan-đoi-2-so-swap-two-numbers" tabindex="-1"><a class="header-anchor" href="#_8-hoan-đoi-2-so-swap-two-numbers" aria-hidden="true">#</a> 8.Hoán đổi 2 số (Swap two numbers)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>temp<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 1 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 2 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    temp<span class="token operator">=</span>a<span class="token punctuation">;</span>
    a <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Number 1 = %d\n"</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Number 2 = %d\n"</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<td>3 6</td>
<td>6 3</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/pkzntgap-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_9-kiem-tra-chu-cai-la-nguyen-am-check-if-alphabet-is-vowel" tabindex="-1"><a class="header-anchor" href="#_9-kiem-tra-chu-cai-la-nguyen-am-check-if-alphabet-is-vowel" aria-hidden="true">#</a> 9.Kiểm tra chữ cái là nguyên âm (Check if Alphabet is Vowel)</h3>
<p>có 5 chữ nguyên âm là : anh (a), ốm (o), em (e), ú (u), ì (i) và cả chữ viết hoa của chúng.</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> ch<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter a character : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%c"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch<span class="token operator">==</span><span class="token string">'a'</span><span class="token operator">||</span>ch<span class="token operator">==</span><span class="token string">'A'</span><span class="token operator">||</span>ch<span class="token operator">==</span><span class="token string">'O'</span><span class="token operator">||</span>ch<span class="token operator">==</span><span class="token string">'o'</span><span class="token operator">||</span>ch<span class="token operator">==</span><span class="token string">'E'</span><span class="token operator">||</span>ch<span class="token operator">==</span><span class="token string">'e'</span><span class="token operator">||</span>ch<span class="token operator">==</span><span class="token string">'U'</span><span class="token operator">||</span>ch<span class="token operator">==</span><span class="token string">'u'</span><span class="token operator">||</span>ch<span class="token operator">==</span><span class="token string">'I'</span><span class="token operator">||</span>ch<span class="token operator">==</span><span class="token string">'i'</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%c is a Vowel.\n"</span><span class="token punctuation">,</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>    
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%c is not a Vowel.\n"</span><span class="token punctuation">,</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>a</td>
<td>a is a Vowel.</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/nivbzgmy-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_10-tong-cac-chu-so-cua-1-so-sum-digits-of-a-number" tabindex="-1"><a class="header-anchor" href="#_10-tong-cac-chu-so-cua-1-so-sum-digits-of-a-number" aria-hidden="true">#</a> 10. Tổng các chữ số của 1 số (Sum Digits of a Number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span>t<span class="token punctuation">;</span>
    <span class="token keyword">int</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    t<span class="token operator">=</span>n<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum<span class="token operator">+=</span><span class="token punctuation">(</span>t<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token operator">/=</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Sum of digits of %d is %d"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<td>1234</td>
<td>10</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/qntwiyke-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_11-tong-cac-chu-so-cua-1-so-su-dung-đe-quy-sum-digits-of-a-number-using-recursion" tabindex="-1"><a class="header-anchor" href="#_11-tong-cac-chu-so-cua-1-so-su-dung-đe-quy-sum-digits-of-a-number-using-recursion" aria-hidden="true">#</a> 11. Tổng các chữ số của 1 số sử dụng Đệ quy (Sum Digits of a number using recursion)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">sum_digits</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Sum digits of %d is %d"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span><span class="token function">sum_digits</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">sum_digits</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    sum<span class="token operator">=</span><span class="token punctuation">(</span>n<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">sum_digits</span><span class="token punctuation">(</span>n<span class="token operator">/</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>123</td>
<td>6</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/tnvowqxy-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_12-in-n-so-nguyen-to-đau-tien-print-primes-till-n" tabindex="-1"><a class="header-anchor" href="#_12-in-n-so-nguyen-to-đau-tien-print-primes-till-n" aria-hidden="true">#</a> 12. In n số nguyên tố đầu tiên (Print Primes till 'n')</h3>
<p>Số nguyên tố là số chia hết cho 1 và chính nó =&gt; bắt đầu từ 2</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">check_prime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number of prime numbers : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Frist %d prime numbers are : "</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>count <span class="token operator">&lt;</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">check_prime</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">check_prime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>6</td>
<td>2 3 5 7 11 13</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/utpenfoa-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_13-them-n-so-va-tinh-tong-no-add-n-numbers-and-sum" tabindex="-1"><a class="header-anchor" href="#_13-them-n-so-va-tinh-tong-no-add-n-numbers-and-sum" aria-hidden="true">#</a> 13. Thêm n số và tính tổng nó (Add 'n' numbers and Sum)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token keyword">int</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer you want add : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter %d integers number : "</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> value<span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sum<span class="token operator">+=</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Sum of entered number =  %d"</span><span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>4<br>1 2 3 4</td>
<td>10</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/khhuoyog-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_14-them-n-so-va-tinh-tong-no-bang-mang-add-n-numbers-and-sum-using-array" tabindex="-1"><a class="header-anchor" href="#_14-them-n-so-va-tinh-tong-no-bang-mang-add-n-numbers-and-sum-using-array" aria-hidden="true">#</a> 14.Thêm n số và tính tổng nó bằng Mảng (Add 'n' numbers and Sum using Array)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token keyword">int</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer you want add : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> M<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter %d integers number : "</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sum<span class="token operator">+=</span>M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Sum of entered numbers = %d"</span><span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>4<br>5 6 7 8</td>
<td>26</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/xvftwnfb-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_15-kiem-tra-so-nguyen-to-check-prime-number" tabindex="-1"><a class="header-anchor" href="#_15-kiem-tra-so-nguyen-to-check-prime-number" aria-hidden="true">#</a> 15. Kiểm tra số nguyên tố (Check prime number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">check_prime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer you want check : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">check_prime</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is a prime number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is not a prime number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">check_prime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>7</td>
<td>7 is a prime number</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/ljpinsbb-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_16-kiem-tra-so-đoi-xung-check-palinedrome" tabindex="-1"><a class="header-anchor" href="#_16-kiem-tra-so-đoi-xung-check-palinedrome" aria-hidden="true">#</a> 16. Kiểm tra số đối xứng (Check Palinedrome)</h3>
<p><strong>Palindrome</strong> là số mà viết ngược hay xuôi vẫn là nó, hiểu là <strong>số đối xứng</strong> cũng được</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span>temp<span class="token punctuation">;</span>
    <span class="token keyword">int</span> reserve<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer you want check : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    temp<span class="token operator">=</span>n<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>temp<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        reserve<span class="token operator">*=</span><span class="token number">10</span><span class="token punctuation">;</span>
        reserve<span class="token operator">+=</span><span class="token punctuation">(</span>temp<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        temp<span class="token operator">/=</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>reserve<span class="token operator">==</span>n<span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is a palindrome number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is not a palindrome number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<td>12321</td>
<td>12321 is a palindrome number</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/fxazpwap-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_17-hoan-vi-2-so-bang-xor-swap-two-number-using-bitwise-xor" tabindex="-1"><a class="header-anchor" href="#_17-hoan-vi-2-so-bang-xor-swap-two-number-using-bitwise-xor" aria-hidden="true">#</a> 17. Hoán vị 2 số bằng xor (Swap two number using bitwise xor)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">long</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 1 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%ld"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 2 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%ld"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    a<span class="token operator">^=</span>b<span class="token punctuation">;</span> 
    b<span class="token operator">^=</span>a<span class="token punctuation">;</span> 
    a<span class="token operator">^=</span>b<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Number 1 : %ld\n"</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Number 2 : %ld\n"</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<td>5 3</td>
<td>3 5</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/detwalcp-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_18-in-binh-phuong-1-toi-n-calculate-square-till-n-number" tabindex="-1"><a class="header-anchor" href="#_18-in-binh-phuong-1-toi-n-calculate-square-till-n-number" aria-hidden="true">#</a> 18. In bình phương 1 tới n (Calculate Square till 'n' number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the range : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> square<span class="token operator">=</span><span class="token function">pow</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Square of %d is %d\n"</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>square<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
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
<td>5</td>
<td>1 4 9 16 25</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/ivoinzaz-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_19-he-so-cua-1-so-factors-of-number" tabindex="-1"><a class="header-anchor" href="#_19-he-so-cua-1-so-factors-of-number" aria-hidden="true">#</a> 19. Hệ số của 1 số (Factors of Number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Factors of %d are : "</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
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
<td>26</td>
<td>1 2 13 26</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/vnjsdpyq-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_20-so-neon-neon-number" tabindex="-1"><a class="header-anchor" href="#_20-so-neon-neon-number" aria-hidden="true">#</a> 20.Số neon (Neon number)</h3>
<p><strong>Số neon</strong> là số mà <strong>tổng các chữ số trong bình phương của nó bằng chính nó</strong>:</p>
<p>Ví dụ: $9^2=81 , 8+1=9$</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span>sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number you want check : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> square <span class="token operator">=</span> <span class="token function">pow</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>square<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum<span class="token operator">+=</span><span class="token punctuation">(</span>square<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        square<span class="token operator">/=</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>sum<span class="token operator">==</span>n<span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is a neon number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is not a neon number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>9</td>
<td>9 is neon number</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/zmsisbqk-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_21-day-sin-sine-series" tabindex="-1"><a class="header-anchor" href="#_21-day-sin-sine-series" aria-hidden="true">#</a> 21. Dãy sin(Sine series)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token keyword">float</span> x<span class="token punctuation">,</span> val<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> t<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the value for x (in degrees): "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%f"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the value for n : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    val <span class="token operator">=</span> x<span class="token punctuation">;</span>
    x <span class="token operator">=</span> x <span class="token operator">*</span> <span class="token number">3.14159</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">;</span>
    t <span class="token operator">=</span> x<span class="token punctuation">;</span>
    sum <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        t <span class="token operator">=</span> <span class="token punctuation">(</span>t <span class="token operator">*</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span>
             x <span class="token operator">*</span> x<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sum <span class="token operator">=</span> sum <span class="token operator">+</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Sine value of %f is : %8.4f"</span><span class="token punctuation">,</span> val<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>45 1</td>
<td>0.7047</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/ojnuxkcn-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_22-in-5-so-tiep-theo-next-5-successive-numbers" tabindex="-1"><a class="header-anchor" href="#_22-in-5-so-tiep-theo-next-5-successive-numbers" aria-hidden="true">#</a> 22. In 5 số tiếp theo (Next 5 successive numbers)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Successive Numbers from %d: "</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>5</td>
<td>6 7 8 9 10</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/otytlhta-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_23-tong-cua-cac-binh-phuong-toi-n-sum-of-squares-till-n" tabindex="-1"><a class="header-anchor" href="#_23-tong-cua-cac-binh-phuong-toi-n-sum-of-squares-till-n" aria-hidden="true">#</a> 23. Tổng của các bình phương tới n (Sum of Squares till 'n')</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span>sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        sum<span class="token operator">+=</span><span class="token function">pow</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Sum of Squares till %d : %d"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<td>5</td>
<td>55</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/rxvatqxh-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_24-so-lon-nhat-trong-3-so-su-dung-toan-tu-largest-among-3-number-using-ternary-operator" tabindex="-1"><a class="header-anchor" href="#_24-so-lon-nhat-trong-3-so-su-dung-toan-tu-largest-among-3-number-using-ternary-operator" aria-hidden="true">#</a> 24. Số lớn nhất trong 3 số sử dụng toán tử ? (Largest among 3 number using ternary operator)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> big<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter 3 numbers: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d %d %d"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    big <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">></span> b <span class="token operator">&amp;&amp;</span> a <span class="token operator">></span> c <span class="token operator">?</span> a <span class="token operator">:</span> b <span class="token operator">></span> c <span class="token operator">?</span> b <span class="token operator">:</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"The biggest number is: %d"</span><span class="token punctuation">,</span> big<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>5 8 4</td>
<td>8</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/uouvjmfn-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_25-hoan-vi-2-so-su-dung-con-tro-swap-two-number-using-pointer" tabindex="-1"><a class="header-anchor" href="#_25-hoan-vi-2-so-su-dung-con-tro-swap-two-number-using-pointer" aria-hidden="true">#</a> 25. Hoán vị 2 số sử dụng con trỏ (Swap two number using Pointer)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 1 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 2 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr1<span class="token punctuation">,</span><span class="token operator">*</span>ptr2<span class="token punctuation">,</span><span class="token operator">*</span>temp<span class="token punctuation">;</span>
    ptr1<span class="token operator">=</span><span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
    ptr2<span class="token operator">=</span><span class="token operator">&amp;</span>b<span class="token punctuation">;</span>
    temp<span class="token operator">=</span>ptr1<span class="token punctuation">;</span>
    ptr1<span class="token operator">=</span>ptr2<span class="token punctuation">;</span>
    ptr2<span class="token operator">=</span>temp<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Number 1 = %d\n"</span><span class="token punctuation">,</span><span class="token operator">*</span>ptr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Number 2 = %d\n"</span><span class="token punctuation">,</span><span class="token operator">*</span>ptr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>3 5</td>
<td>5 3</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/kpbekgex-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_26-tinh-tong-n-so-sum-of-n-number" tabindex="-1"><a class="header-anchor" href="#_26-tinh-tong-n-so-sum-of-n-number" aria-hidden="true">#</a> 26. Tính tổng n số (Sum of n number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span>sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer you want add : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> M<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter %d numbers : "</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sum<span class="token operator">+=</span>M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Sum of %d numbers are = %d"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<td>5 <br>1 6 7 4 2</td>
<td>20</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/kpqzegfr-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_27-in-so-armtrong-toi-n-armtrong-numbers-till-n" tabindex="-1"><a class="header-anchor" href="#_27-in-so-armtrong-toi-n-armtrong-numbers-till-n" aria-hidden="true">#</a> 27. In số Armtrong tới n (Armtrong numbers till 'n')</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">count_digit</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">check_armtrong</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter an integer : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Armtrong numbers from 1 to %d : 1 "</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">check_armtrong</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">count_digit</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n<span class="token operator">/=</span><span class="token number">10</span><span class="token punctuation">;</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">check_armtrong</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>t<span class="token punctuation">;</span>
    t<span class="token operator">=</span>n<span class="token punctuation">;</span>
    <span class="token keyword">int</span> count<span class="token operator">=</span><span class="token function">count_digit</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a<span class="token operator">=</span>t<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">;</span>
        b<span class="token operator">+=</span><span class="token function">pow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token function">count_digit</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token operator">/=</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token operator">==</span>n<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>500</td>
<td>1 153 370 371 407</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/zonrahnf-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_28-kiem-tra-2-so-la-so-than-thien-check-whether-two-numbers-are-friendly-number" tabindex="-1"><a class="header-anchor" href="#_28-kiem-tra-2-so-la-so-than-thien-check-whether-two-numbers-are-friendly-number" aria-hidden="true">#</a> 28. Kiểm tra 2 số  là số thân thiện (Check whether two numbers are Friendly number )</h3>
<p><strong>Số thân thiện</strong> là số <strong>2 hay nhiều số tự nhiên</strong> nếu chúng có chung tỷ lệ giữa tổng các ước số của một số chia cho chính số đó</p>
<p><strong>Ví dụ:</strong></p>
<img title="" src="https://latex.codecogs.com/gif.latex?\dpi{150} \bg_white \frac{\phi(30)}{30}%3D\frac{1&plus;2&plus;3&plus;5&plus;6&plus;10&plus;15&plus;30}{30}%3D\frac{12}{5}" alt="" width="401">
<img title="" src="https://latex.codecogs.com/gif.latex?\dpi{150} \bg_white \frac{\phi(140)}{140}%3D\frac{1&plus;2&plus;4&plus;5&plus;7&plus;10&plus;14&plus;20&plus;28&plus;35&plus;70&plus;140}{140}%3D\frac{12}{5}" alt="" width="550">
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">double</span> <span class="token function">friendly</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num1<span class="token punctuation">,</span>num2<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 1 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 2: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">friendly</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token operator">==</span><span class="token function">friendly</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d and %d are Friendly number"</span><span class="token punctuation">,</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d and %d not are Friendly number"</span><span class="token punctuation">,</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">double</span> <span class="token function">friendly</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">double</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            sum<span class="token operator">+=</span>i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token operator">/</span>n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>30 140</td>
<td>30 and 140 are Friendly number</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/zvmgxqhs-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_29-kiem-tra-2-so-la-so-ban-be-check-whether-two-numbers-are-amicable-number" tabindex="-1"><a class="header-anchor" href="#_29-kiem-tra-2-so-la-so-ban-be-check-whether-two-numbers-are-amicable-number" aria-hidden="true">#</a> 29. Kiểm tra 2 số là số bạn bè (Check whether two numbers are Amicable number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">amicable</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> num1<span class="token punctuation">,</span>num2<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 1 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 2: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">amicable</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token operator">==</span>num2 <span class="token operator">&amp;&amp;</span> <span class="token function">amicable</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token operator">==</span>num1<span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d and %d are Amicable number"</span><span class="token punctuation">,</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d and %d are Amicable number"</span><span class="token punctuation">,</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">amicable</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
            sum<span class="token operator">+=</span>i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>220 284</td>
<td>220 and 284 are Amicable number</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/heiqnhwc-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_30-hoan-vi-2-so-khong-dung-bien-thu-3-swap-two-numbers-without-third-variable" tabindex="-1"><a class="header-anchor" href="#_30-hoan-vi-2-so-khong-dung-bien-thu-3-swap-two-numbers-without-third-variable" aria-hidden="true">#</a> 30. Hoán vị 2 số không dùng biến thứ 3 (Swap two numbers without third variable)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span>y<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 1 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number 2 : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    x<span class="token operator">=</span>x<span class="token operator">+</span>y<span class="token punctuation">;</span> 
    y<span class="token operator">=</span>x<span class="token operator">-</span>y<span class="token punctuation">;</span>
    x<span class="token operator">=</span>x<span class="token operator">-</span>y<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Number 1 = %d\n"</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Number 2 = %d\n"</span><span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<td>3 5</td>
<td>5 3</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/darlgsmb-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_31-tong-n-so-nguyen-to-đau-tien-sum-of-first-n-prime-number" tabindex="-1"><a class="header-anchor" href="#_31-tong-n-so-nguyen-to-đau-tien-sum-of-first-n-prime-number" aria-hidden="true">#</a> 31. Tổng n số nguyên tố đầu tiên (Sum of first n prime number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">check_prime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span>sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the number of prime number : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"First %d prime numbers are : "</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>n<span class="token operator">!=</span>count<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">check_prime</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sum<span class="token operator">+=</span>i<span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"\nSum of firse %d prime numbers = %d"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">check_prime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>10</td>
<td>2 3 5 7 11 13 17 19 23 29<br>sum=129</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/bwjzncio-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_32-so-lon-nhat-trong-n-so-largest-number-of-n-number" tabindex="-1"><a class="header-anchor" href="#_32-so-lon-nhat-trong-n-so-largest-number-of-n-number" aria-hidden="true">#</a> 32. Số lớn nhất trong n số (Largest number of 'n' number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">void</span> <span class="token function">input_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> M<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">max_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> M<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the range = "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> M<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">input_array</span><span class="token punctuation">(</span>M<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Largest of %d numbers are : %d"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span><span class="token function">max_array</span><span class="token punctuation">(</span>M<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">input_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> M<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter %d numbers : "</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">max_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> M<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> max<span class="token operator">=</span>M<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>max<span class="token operator">&lt;</span>M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            max<span class="token operator">=</span>M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>5<br>12 56 8 2 34</td>
<td>56</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/dxoqrpvc-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_33-trung-binh-cua-n-so-average-of-n-numbers" tabindex="-1"><a class="header-anchor" href="#_33-trung-binh-cua-n-so-average-of-n-numbers" aria-hidden="true">#</a> 33. Trung bình của n số (Average of 'n' numbers)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">void</span> <span class="token function">input_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> M<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> <span class="token function">average_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> M<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the range = "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> M<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">input_array</span><span class="token punctuation">(</span>M<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Average of %d numbers are = %.2lf"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span><span class="token function">average_array</span><span class="token punctuation">(</span>M<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">input_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> M<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter %d numbers : "</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">double</span> <span class="token function">average_array</span><span class="token punctuation">(</span><span class="token keyword">int</span> M<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">double</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        sum<span class="token operator">+=</span>M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token operator">/</span>n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>5<br>12 10 53 7 39</td>
<td>24.20</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/ytupwaoj-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_34-uoc-chung-lon-nhat-dung-euclid-gcd-using-euclid" tabindex="-1"><a class="header-anchor" href="#_34-uoc-chung-lon-nhat-dung-euclid-gcd-using-euclid" aria-hidden="true">#</a> 34. Ước chung lớn nhất dùng Euclid (GCD using Euclid)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">GCD</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter 2 numbers : \n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d %d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"GCD = %d"</span><span class="token punctuation">,</span><span class="token function">GCD</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">GCD</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">GCD</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>a<span class="token operator">%</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<td>24 56</td>
<td>8</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/zpesjpfm-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_35-tinh-tong-giai-thua-cua-day-n-n-sum-of-factorial-series-n-n" tabindex="-1"><a class="header-anchor" href="#_35-tinh-tong-giai-thua-cua-day-n-n-sum-of-factorial-series-n-n" aria-hidden="true">#</a> 35.Tính tổng giai thừa của dãy : n/n! (Sum of factorial Series n/n!)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token keyword">double</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the value : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">double</span> temp<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>i<span class="token operator">/</span><span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sum<span class="token operator">+=</span>temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Sum of Factorial Series = %lf"</span><span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> fact<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fact<span class="token operator">*=</span>i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fact<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>5</td>
<td>2.708333</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/mwjvzdkd-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_36-can-bac-2-cua-1-so-square-root-a-number" tabindex="-1"><a class="header-anchor" href="#_36-can-bac-2-cua-1-so-square-root-a-number" aria-hidden="true">#</a> 36. Căn bậc 2 của 1 số (Square root a number)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">double</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%lf"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Square root of %lf = %lf"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span><span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>25</td>
<td>5</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/rrvncwbu-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_37-bang-cuu-chuong-thu-n-n-th-multiplication-table" tabindex="-1"><a class="header-anchor" href="#_37-bang-cuu-chuong-thu-n-n-th-multiplication-table" aria-hidden="true">#</a> 37. Bảng cưu chương thứ 'n' ('n'th Multiplication Table)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the order : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d * %d = %d\n"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span>i<span class="token punctuation">,</span>n<span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>7</td>
<td>7 * 1 = 7<br/>7 * 2 = 14<br/>7 * 3 = 21<br/>7 * 4 = 28<br/>7 * 5 = 35<br/>7 * 6 = 42<br/>7 * 7 = 49<br/>7 * 8 = 56<br/>7 * 9 = 63<br/>7 * 10 = 70</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/mejbsecy-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_38-in-cac-so-nguyen-to-giua-2-khoang-display-prime-numbers-between-two-intervals" tabindex="-1"><a class="header-anchor" href="#_38-in-cac-so-nguyen-to-giua-2-khoang-display-prime-numbers-between-two-intervals" aria-hidden="true">#</a> 38. In các số nguyên tố giữa 2 khoảng (Display Prime numbers between two intervals)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">check_prime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n1<span class="token punctuation">,</span>n2<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter two numbers (intervals) : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d %d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n1<span class="token punctuation">,</span><span class="token operator">&amp;</span>n2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n1<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n2<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">check_prime</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">check_prime</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> 
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>10 50</td>
<td>11 13 17 19 23 29 31 37 41 43 47</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/swtcbgga-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_39-in-n-so-trong-day-fibonacci-fibonacci-series-of-n-range" tabindex="-1"><a class="header-anchor" href="#_39-in-n-so-trong-day-fibonacci-fibonacci-series-of-n-range" aria-hidden="true">#</a> 39.In n số trong dãy Fibonacci (Fibonacci series of n range)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the range : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Frist %d numbers Fibonacci Series : %d "</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span><span class="token function">fibonacci</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">1</span><span class="token operator">||</span>n<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<td>8</td>
<td>0 1 1         2       3       5       8       13</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/oetugyiu-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_40-tong-n-lan-trong-day-taylor-sum-of-n-terms-taylor-series" tabindex="-1"><a class="header-anchor" href="#_40-tong-n-lan-trong-day-taylor-sum-of-n-terms-taylor-series" aria-hidden="true">#</a> 40. Tổng n lần trong dãy Taylor (Sum of n terms Taylor series)</h3>
<p>một <strong>chuỗi Taylor</strong> của một <a href="https://vi.wikipedia.org/wiki/H%C3%A0m_s%E1%BB%91" title="Hàm số" target="_blank" rel="noopener noreferrer"><strong>hàm toán học</strong><OutboundLink/></a> <a href="https://vi.wikipedia.org/wiki/Kh%E1%BA%A3_vi" title="Khả vi" target="_blank" rel="noopener noreferrer"><strong>khả vi</strong><OutboundLink/></a> <a href="https://vi.wikipedia.org/wiki/S%E1%BB%91_th%E1%BB%B1c" title="Số thực" target="_blank" rel="noopener noreferrer"><strong>thực</strong><OutboundLink/></a> hay <a href="https://vi.wikipedia.org/wiki/S%E1%BB%91_ph%E1%BB%A9c" title="Số phức" target="_blank" rel="noopener noreferrer"><strong>phức</strong><OutboundLink/></a>, <em>f</em> định nghĩa trên <a href="https://vi.wikipedia.org/wiki/T%E1%BA%ADp_x%C3%A1c_%C4%91%E1%BB%8Bnh" title="Tập xác định" target="_blank" rel="noopener noreferrer"><strong>miền xác định</strong><OutboundLink/></a> (<em>a</em> − <em>r</em>, <em>a</em> + <em>r</em>) là một <a href="https://vi.wikipedia.org/w/index.php?title=Chu%E1%BB%97i_l%C5%A9y_th%E1%BB%ABa&amp;action=edit&amp;redlink=1" title="Chuỗi lũy thừa (trang chưa được viết)" target="_blank" rel="noopener noreferrer"><strong>chuỗi lũy thừa</strong><OutboundLink/></a>:</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/07/24-15-48-57-Ảnh chụp Màn hình 2020-07-24 lúc 15.48.34.png" alt="Ảnh chụp Màn hình 2020-07-24 lúc 15.48.34.png"></p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span>n<span class="token punctuation">,</span>fact<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the value : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the number of terms in the series : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fact<span class="token operator">=</span>fact<span class="token operator">*</span>i<span class="token punctuation">;</span>
        sum<span class="token operator">=</span>sum<span class="token operator">+</span><span class="token punctuation">(</span><span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token operator">/</span>fact<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Sum of %d Taylor Series = %lf"</span><span class="token punctuation">,</span>n<span class="token punctuation">,</span>sum<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>5 6</td>
<td>91.416667</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/iuiplrdf-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_41-chuyen-so-thanh-dang-la-ma-convert-numbers-to-roman-number" tabindex="-1"><a class="header-anchor" href="#_41-chuyen-so-thanh-dang-la-ma-convert-numbers-to-roman-number" aria-hidden="true">#</a> 41. Chuyển số thành dạng La Mã (Convert numbers to roman number)</h3>
<table>
<thead>
<tr>
<th>Ký tự</th>
<th>Số</th>
</tr>
</thead>
<tbody>
<tr>
<td>I</td>
<td>1</td>
</tr>
<tr>
<td>V</td>
<td>5</td>
</tr>
<tr>
<td>X</td>
<td>10</td>
</tr>
<tr>
<td>L</td>
<td>50</td>
</tr>
<tr>
<td>C</td>
<td>100</td>
</tr>
<tr>
<td>D</td>
<td>500</td>
</tr>
<tr>
<td>M</td>
<td>1000</td>
</tr>
</tbody>
</table>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">void</span> <span class="token function">predigit</span><span class="token punctuation">(</span><span class="token keyword">char</span> num1<span class="token punctuation">,</span> <span class="token keyword">char</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">postdigit</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> romanval<span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">long</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the n : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%ld"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Invalid n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">>=</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">postdigit</span><span class="token punctuation">(</span><span class="token string">'M'</span><span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">>=</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token number">500</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">postdigit</span><span class="token punctuation">(</span><span class="token string">'D'</span><span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">500</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">predigit</span><span class="token punctuation">(</span><span class="token string">'C'</span><span class="token punctuation">,</span> <span class="token string">'M'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">>=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">postdigit</span><span class="token punctuation">(</span><span class="token string">'C'</span><span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">predigit</span><span class="token punctuation">(</span><span class="token string">'L'</span><span class="token punctuation">,</span> <span class="token string">'D'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">500</span> <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">>=</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token number">50</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">postdigit</span><span class="token punctuation">(</span><span class="token string">'L'</span><span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                <span class="token function">predigit</span><span class="token punctuation">(</span><span class="token string">'X'</span><span class="token punctuation">,</span> <span class="token string">'C'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">>=</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">postdigit</span><span class="token punctuation">(</span><span class="token string">'X'</span><span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">predigit</span><span class="token punctuation">(</span><span class="token string">'X'</span><span class="token punctuation">,</span> <span class="token string">'L'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">50</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">>=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">postdigit</span><span class="token punctuation">(</span><span class="token string">'V'</span><span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">predigit</span><span class="token punctuation">(</span><span class="token string">'I'</span><span class="token punctuation">,</span> <span class="token string">'X'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">>=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">postdigit</span><span class="token punctuation">(</span><span class="token string">'I'</span><span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">predigit</span><span class="token punctuation">(</span><span class="token string">'I'</span><span class="token punctuation">,</span> <span class="token string">'V'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Roman n is : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%c"</span><span class="token punctuation">,</span> romanval<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">predigit</span><span class="token punctuation">(</span><span class="token keyword">char</span> num1<span class="token punctuation">,</span> <span class="token keyword">char</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    romanval<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> num1<span class="token punctuation">;</span>
    romanval<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">postdigit</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        romanval<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>66</td>
<td>LXVI</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/nowpyhvv-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_42-so-niven-niven-number" tabindex="-1"><a class="header-anchor" href="#_42-so-niven-niven-number" aria-hidden="true">#</a> 42. Số Niven (Niven number)</h3>
<p>Một số chia hết cho tổng các chữ số của nó được gọi là <strong>số niven</strong></p>
<p><strong>Ví dụ:</strong></p>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/07/24-16-22-07-HarshadNumber.png" title="" alt="HarshadNumber.png" width="277">
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">sum_digit</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter the number you want check : "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span><span class="token punctuation">(</span><span class="token function">sum_digit</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is a niven number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d is not a niven number"</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">sum_digit</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> t<span class="token punctuation">,</span>sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        t<span class="token operator">=</span>n<span class="token operator">%</span><span class="token number">10</span><span class="token punctuation">;</span>
        sum<span class="token operator">+=</span>t<span class="token punctuation">;</span>
        n<span class="token operator">/=</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>18</td>
<td>18 is a niven number</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/sznbwfpo-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
<hr>
<h3 id="_43-kiem-tra-so-nguyen-hay-so-thuc-check-number-is-integer-or-float" tabindex="-1"><a class="header-anchor" href="#_43-kiem-tra-so-nguyen-hay-so-thuc-check-number-is-integer-or-float" aria-hidden="true">#</a> 43.Kiểm tra số nguyên hay số thực (Check number is integer or float)</h3>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">float</span> n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter number =  "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%f"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>n<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"n is a integer number"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"n is a float number"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><table>
<thead>
<tr>
<th>Input</th>
<th>Output</th>
</tr>
</thead>
<tbody>
<tr>
<td>4.25</td>
<td>4.25 is float number</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><a href="https://repl.it/join/ntfhipwt-zenfection" target="_blank" rel="noopener noreferrer">Chạy thử<OutboundLink/></a></th>
</tr>
</thead>
</table>
</template>
