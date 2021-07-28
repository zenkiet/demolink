<template><h1 id="ky-thuat-sap-xep" tabindex="-1"><a class="header-anchor" href="#ky-thuat-sap-xep" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-13-35-49-icons8-sort.png" alt="icons8-sort.png"> Kỹ thuật sắp xếp</h1>
<h2 id="_1-tong-quat-cac-sap-xep" tabindex="-1"><a class="header-anchor" href="#_1-tong-quat-cac-sap-xep" aria-hidden="true">#</a> 1. Tổng quát các sắp xếp</h2>
<table>
<thead>
<tr>
<th>Giải thuật</th>
<th>Độ phức tạp</th>
<th>Mô hình</th>
<th>Tham khảo</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bubble Sort</td>
<td>O(n²)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-09-17-bubblesort.gif" title="" alt="bubblesort.gif" width="324"></td>
<td><a href="https://youtu.be/nmhjrI-aW5o" target="_blank" rel="noopener noreferrer">GeeksforGeeks<OutboundLink/></a></td>
</tr>
<tr>
<td>Selection Sort</td>
<td>O(n²)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-13-57-selectionsort.gif" alt="selectionsort.gif"></td>
<td><a href="https://www.youtube.com/watch?v=xWBP4lzkoyM" target="_blank" rel="noopener noreferrer">GeeksforGeeks<OutboundLink/></a></td>
</tr>
<tr>
<td>Insertion Sort</td>
<td>O(n²)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-12-37-insertionsort.gif" alt="insertionsort.gif"></td>
<td><a href="https://www.youtube.com/watch?v=OGzPmgsI-pQ" target="_blank" rel="noopener noreferrer">GeeksforGeeks<OutboundLink/></a></td>
</tr>
<tr>
<td>QuickSort</td>
<td>O(n.logn)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-23-24-quicksort.gif" alt="quicksort.gif"></td>
<td><a href="https://youtu.be/PgBzjlCcFvc?list=RDCMUC0RhatS1pyxInC00YKjjBqQ" target="_blank" rel="noopener noreferrer">GeeksforGeeks<OutboundLink/></a></td>
</tr>
<tr>
<td>HeapSort</td>
<td>O(n.logn)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-19-28-heapsort.gif" alt="heapsort.gif"></td>
<td><a href="https://youtu.be/MtQL_ll5KhQ?list=RDCMUC0RhatS1pyxInC00YKjjBqQ" target="_blank" rel="noopener noreferrer">GeeksforGeeks<OutboundLink/></a></td>
</tr>
<tr>
<td>MergeSort</td>
<td>O(n.logn)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-21-20-mergesort.gif" alt="mergesort.gif"></td>
<td><a href="https://youtu.be/JSceec-wEyw?list=RDCMUC0RhatS1pyxInC00YKjjBqQ" target="_blank" rel="noopener noreferrer">GeeksforGeeks<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_2-cu-the-cac-giai-thuat" tabindex="-1"><a class="header-anchor" href="#_2-cu-the-cac-giai-thuat" aria-hidden="true">#</a> 2. Cụ thể các giải thuật</h2>
<h3 id="bubble-sort" tabindex="-1"><a class="header-anchor" href="#bubble-sort" aria-hidden="true">#</a> Bubble Sort : <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-09-17-bubblesort.gif" alt="bubblesort.gif" width="212"></h3>
<p>Thuật toán <code>sắp xếp</code> <strong>đơn giản nhất</strong> hoạt động bằng cách <strong>hoán đổi nhiều lần</strong> các phần tử liền kề nếu chúng không đúng thứ tự.</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token operator">*</span>a<span class="token punctuation">;</span>
    <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token operator">*</span>b<span class="token punctuation">;</span>
    <span class="token operator">*</span>b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">void</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="selection-sort" tabindex="-1"><a class="header-anchor" href="#selection-sort" aria-hidden="true">#</a> Selection Sort : <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-13-57-selectionsort.gif" alt="selectionsort.gif" width="225"></h3>
<p>Thuật toán <code>sắp xếp</code> bằng cách <strong>tìm phần tử nhỏ nhất</strong> <em>(xét theo thứ tự tăng dần)</em> từ phần chưa được sắp xếp và đặt nó ở đầu các phần tử chưa <code>sắp xếp</code></p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token operator">*</span>a<span class="token punctuation">;</span>
    <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token operator">*</span>b<span class="token punctuation">;</span>
    <span class="token operator">*</span>b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  
<span class="token keyword">void</span> <span class="token function">selectionSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">int</span> min_idx <span class="token operator">=</span> i<span class="token punctuation">;</span> 
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>min_idx<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                min_idx <span class="token operator">=</span> j<span class="token punctuation">;</span> 
            <span class="token punctuation">}</span>
            <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">[</span>min_idx<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="insertion-sort" tabindex="-1"><a class="header-anchor" href="#insertion-sort" aria-hidden="true">#</a> Insertion Sort : <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-12-37-insertionsort.gif" alt="insertionsort.gif" width="230"></h3>
<p>Thuật toán <code>sắp xếp</code> đơn giản tựa như bạn cầm tay để sắp xếp</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">insertionSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> key <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
            arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            j<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="quicksort" tabindex="-1"><a class="header-anchor" href="#quicksort" aria-hidden="true">#</a> QuickSort : <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-23-24-quicksort.gif" title="" alt="quicksort.gif" width="230"></h3>
<p>Thuật toán <code>sắp xếp</code> theo dạng chia nhỏ để trị, chọn ngẫu nhiên vị trí phần tử giá trị <code>pivot</code>, sau đó sắp xếp và phân vùng <code>pivot</code> hẹp dần.. như mô hình</p>
<blockquote>
<p>Bạn có thể chọn <code>pivot</code> như sau :</p>
<ul>
<li>
<p>là phần tử <code>đầu tiên</code></p>
</li>
<li>
<p>là phần tử <code>cuối cùng</code></p>
</li>
<li>
<p>là phần tử <code>giữa</code></p>
</li>
</ul>
</blockquote>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token operator">*</span>a<span class="token punctuation">;</span>
    <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token operator">*</span>b<span class="token punctuation">;</span>
    <span class="token operator">*</span>b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">int</span> <span class="token function">partition</span> <span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> low<span class="token punctuation">,</span> <span class="token keyword">int</span> high<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> pivot <span class="token operator">=</span> arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">;</span> 
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token punctuation">(</span>low <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> low<span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> high <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span><span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arr<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">void</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> low<span class="token punctuation">,</span> <span class="token keyword">int</span> high<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> pi <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> low<span class="token punctuation">,</span> pi <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">quickSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> pi <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="heapsort" tabindex="-1"><a class="header-anchor" href="#heapsort" aria-hidden="true">#</a> HeapSort :  <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-19-28-heapsort.gif" alt="heapsort.gif" width="203"></h3>
<p>Là một kỹ thuật <code>sắp xếp</code> dựa trên so sánh dựa trên cấu trúc dữ liệu <code>Binary Heap</code>, tương tự như <code>sắp xếp</code> lựa chọn trong đó đầu tiên chúng ta tìm phần tử tối thiểu và đặt phần tử tối thiểu ở đầu sau đólặp lại quá trình tương tự cho các phần tử còn lại.</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">heapify</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> largest <span class="token operator">=</span> i<span class="token punctuation">;</span> 
    <span class="token keyword">int</span> lelf <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
 
    <span class="token comment">// nếu nút con trái lớn hơn nút cha</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lelf <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span>
        largest <span class="token operator">=</span> left<span class="token punctuation">;</span>
 
    <span class="token comment">// nếu nút con phải lớn hơn nút lớn nhất</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span>
        largest <span class="token operator">=</span> right<span class="token punctuation">;</span>
 
    <span class="token comment">// nếu nút lớn nhất không phải nút cha</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>largest <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// đệ quy cây con</span>
        <span class="token function">heapify</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> n<span class="token punctuation">,</span> largest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">void</span> <span class="token function">heapSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// xây dựng cây heap</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
        <span class="token function">heapify</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> n<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//sắp xếp</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">heapify</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="mergesort" tabindex="-1"><a class="header-anchor" href="#mergesort" aria-hidden="true">#</a> MergeSort : <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-14-21-20-mergesort.gif" title="" alt="mergesort.gif" width="199"></h3>
<p>Giống như <code>Quick Sort</code>, đây là một thuật toán dạng chia nhỏ để trị, nó sẽ chia nhỏ mảng ra thành mảng đơn, và gộp lại, trong lúc gộp lại sẽ sắp xếp</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> n1 <span class="token operator">=</span> m <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n2 <span class="token operator">=</span> r <span class="token operator">-</span> m<span class="token punctuation">;</span>
 
    <span class="token comment">// tạo mảng tạm</span>
    <span class="token keyword">int</span> L<span class="token punctuation">[</span>n1<span class="token punctuation">]</span><span class="token punctuation">,</span> R<span class="token punctuation">[</span>n2<span class="token punctuation">]</span><span class="token punctuation">;</span>
 
    <span class="token comment">// sao chép dữ liệu mảng tạm của L và R</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        L<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>l <span class="token operator">+</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        R<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>m <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> j<span class="token punctuation">]</span><span class="token punctuation">;</span>
 
    <span class="token comment">// Hợp nhất 2 mảng tạp</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> k <span class="token operator">=</span> l<span class="token punctuation">;</span>
 
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n1 <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>L<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> R<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> L<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> R<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        k<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// Sao chép các phần tử còn lại của mảng L</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> L<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
        k<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Sao chép các phần tử còn lại của mảng R</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> R<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
        k<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">void</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> l<span class="token punctuation">,</span><span class="token keyword">int</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token operator">>=</span>r<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> m <span class="token operator">=</span>l<span class="token operator">+</span> <span class="token punctuation">(</span>r<span class="token operator">-</span>l<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token function">mergeSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>l<span class="token punctuation">,</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">mergeSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>m<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">merge</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>l<span class="token punctuation">,</span>m<span class="token punctuation">,</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div></template>
