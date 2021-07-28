<template><h1 id="danh-sach-lien-ket" tabindex="-1"><a class="header-anchor" href="#danh-sach-lien-ket" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/11/06-20-21-36-icons8-link.png" title="" alt="icons8-link.png" width="50"> Danh sách Liên kết:</h1>
<p><strong>Danh sách liên kết</strong> là một cấu trúc dữ liệu, trong đó các phần tử không được lưu trữ ở bộ nhớ liên tiếp nhau như bên <strong>danh sách đặc</strong>, các liên kết với nhau được sử dụng bằng con trỏ trong hình vẽ dưới đây :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/11/06-20-33-15-Linkedlist.png" alt="Linkedlist.png"></p>
<p><strong>Lý thuyết:</strong></p>
<ul>
<li>Trong 1 cái <code>node</code> gồm <code>data</code> và con trỏ <code>Next</code></li>
<li><code>Head</code> nắm giữ Node đầu tiên (<strong>luôn là vậy</strong>)</li>
<li><code>Tail</code> nắm giữ Node cuối cùng (<strong>luôn là vậy</strong>)</li>
</ul>
<p><strong>Mô hình thực tế:</strong></p>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/11/06-20-41-29-depositphotos_81162780-stock-photo-baby-boy-playing-with-toy.jpg" title="" alt="depositphotos_81162780-stock-photo-baby-boy-playing-with-toy.jpg" width="393">
<p>Hãy nhìn ảnh đứa bé này và, tưởng tượng :</p>
<ul>
<li>Các <code>Node</code> là các toa tàu, <code>data</code> là những vật chứa trong toa tàu, con trỏ<code>Next</code> là mắc xích nối toa này với tua kia =&gt; con trỏ <code>Next</code> ở toa toà cuối cùng là <strong><code>trống rỗng</code></strong></li>
<li>Tay trái của đứa bé là <code>head</code> nằm cái toa tàu đầu, tai phải của bé là <code>tail</code> nắm toa tàu cuối</li>
</ul>
<p>==&gt; Đó là cách quản lí của <strong>Danh sách liên kết</strong></p>
<p><strong>Cách khai báo :</strong></p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">NODE</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">NODE</span><span class="token operator">*</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">NODE</span> Node<span class="token punctuation">;</span> <span class="token comment">// định nghĩa cho khỏi khai báo struct sau này </span>
<span class="token keyword">struct</span> <span class="token class-name">LIST</span><span class="token punctuation">{</span>
    Node <span class="token operator">*</span>head<span class="token punctuation">;</span>
    Node <span class="token operator">*</span>tail<span class="token punctuation">;</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">LIST</span> List<span class="token punctuation">;</span> <span class="token comment">// định nghĩa cho khỏi khai báo struct sau này</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>
