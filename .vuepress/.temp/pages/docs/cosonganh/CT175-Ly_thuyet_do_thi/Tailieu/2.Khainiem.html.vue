<template><h1 id="khai-niem-graph-theory" tabindex="-1"><a class="header-anchor" href="#khai-niem-graph-theory" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-56-27-fun-penguin-d-illustration-fun-penguin-d-illustration-99412100-removebg-preview.png" title="" alt="funpenguindillustrationfunpenguindillustration99412100removebgpreviewpng" width="50"> Khái niệm <code>Graph Theory</code> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-56-59-08-15-27-06-cat_ready.gif" title="" alt="08-15-27-06-cat_ready.gif" width="50"></h1>
<h2 id="_1-đinh-nghia" tabindex="-1"><a class="header-anchor" href="#_1-đinh-nghia" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-17-44-58-undertand.gif" title="" alt="undertand.gif" width="50">1. Định nghĩa</h2>
<p><code>Graph</code> là một cấu trúc rời rạc gồm các <strong>đỉnh</strong> và các <strong>cạnh</strong> nối các <strong>đỉnh đó</strong></p>
<blockquote>
<p>🧚 Ký hiệu <code>G = (V, E)</code> , trong đó</p>
<ul>
<li>
<p><code>V</code> là tập <strong>đỉnh</strong> (<code>vertex</code>)</p>
</li>
<li>
<p><code>E ⊆ V ₓ V</code> là tập hợp các <strong>cạnh</strong> (<code>edge</code>)</p>
</li>
</ul>
</blockquote>
<p>Có tổng cộng <code>5</code> đồ thị :</p>
<ul>
<li>
<p><strong>Đơn</strong> đồ thị (<code>Single Graph</code>)</p>
</li>
<li>
<p><strong>Đa</strong> đồ thị (<code>MultiGraph</code>)</p>
</li>
<li>
<p><strong>Giả</strong> đồ thị (<code>Pseudo Graph</code>)</p>
</li>
<li>
<p><strong>Đồ</strong> thị có hướng (<code>Directed Graph</code>)</p>
</li>
<li>
<p><strong>Đa</strong> đồ thị có hướng (<code>Directed MultiGraph</code>)</p>
</li>
</ul>
<hr>
<h2 id="_2-loai-đo-thi" tabindex="-1"><a class="header-anchor" href="#_2-loai-đo-thi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-48-54-tenor.gif" title="" alt="tenor.gif" width="50"> 2. Loại đồ thị</h2>
<h3 id="a-đinh-nghia" tabindex="-1"><a class="header-anchor" href="#a-đinh-nghia" aria-hidden="true">#</a> a. Định nghĩa</h3>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-52-10-icons8-typed.png" alt="icons8-typed.png"> Loại</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-51-50-icons8-agree.png" alt="icons8-agree.png"> Định nghĩa (<code>G = (V, E)</code>)</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-51-03-icons8-object.png" alt="icons8-object.png"> Mô hình</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Đơn</strong> đồ thị <br>(<code>Single Graph</code>)</td>
<td>Gồm một tập không rỗng <code>V</code> và một tập cạnh <code>E</code> là các cạnh không sắp thứ tự của các <strong>đỉnh</strong> phân biệt</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-20-02-23-output-onlinepngtools (3).png" alt="output-onlinepngtools (3).png"></td>
</tr>
<tr>
<td><strong>Đa</strong> đồ thị <br>(<code>MultiGraph</code>)</td>
<td>Gồm một tập các <strong>đỉnh</strong> <code>V</code>, một tập các <strong>cạnh</strong> <code>E</code> và một hàm <code>f</code> từ <code>E</code> tới <code>{{u, v}|u, v ∈ V, u ≠ v}</code><br>Các <strong>cạnh</strong> <code>e₁</code>, <code>e₂</code><br>Gọi là <strong>cạnh song song</strong> (<code>parallel</code>) <em>hoặc</em> <strong>cạnh bội</strong> (<code>multiple</code>)<br>Nếu <code>f(e₁) = f(e₂)</code></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-20-03-07-output-onlinepngtools (4).png" alt="output-onlinepngtools (4).png"></td>
</tr>
<tr>
<td><strong>Giả</strong> đồ thị <br>(<code>Pseudo Graph</code>)</td>
<td>Gồm một tập các <strong>đỉnh</strong> <code>V</code> và một tập các <strong>cạnh</strong> <code>E</code> và một hàm <code>f</code> từ <code>E</code> tới <code>{{u, v}|u, v ∈ V}</code><br>Một <strong>cạnh</strong> là <strong>khuyên</strong> (<code>loop</code>) nếu<br><code>f(e) = {u,u} = {u}</code> với đỉnh <code>u</code> nào đó</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-20-03-58-output-onlinepngtools (5).png" alt="output-onlinepngtools (5).png"></td>
</tr>
<tr>
<td><strong>Đồ</strong> thị có hướng<br> (<code>Directed Graph</code>)</td>
<td>Gồm tập các <strong>đỉnh</strong> <code>V</code> và một tập các <strong>cạnh</strong> <code>E</code> là các cặp <code>có thứ tự</code> của các phần tử <strong>thuộc</strong> <code>V</code><br>Các cạnh ở đây được gọi là <strong>cung</strong> (<code>arc</code>)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-20-05-18-output-onlinepngtools (6).png" alt="output-onlinepngtools (6).png"></td>
</tr>
<tr>
<td><strong>Đa</strong> đồ thị có hướng<br> (<code>Directed MultiGraph</code>)</td>
<td>Gồm một tập các <strong>đỉnh</strong> <code>V</code> và một tập các <strong>cạnh</strong> <code>E</code> và một hàm <code>f</code> từ <code>E</code> tới <code>{u, v |u,v ∈ V}</code><br>Các cạnh <code>e₁</code> và <code>e₂</code> là các <strong>cạnh bội</strong> nếu <code>f(e₁) = f(e₂)</code></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-20-05-22-output-onlinepngtools (7).png" alt="output-onlinepngtools (7).png"></td>
</tr>
</tbody>
</table>
<h3 id="b-tinh-chat" tabindex="-1"><a class="header-anchor" href="#b-tinh-chat" aria-hidden="true">#</a> b. Tính chất</h3>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-52-10-icons8-typed.png" alt="icons8-typed.png"> Loại</th>
<th>Cạnh có hướng</th>
<th>Cạnh bội</th>
<th>Khuyên</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Đơn</strong> đồ thị (<code>Single Graph</code>)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-29-icons8-delete.png" alt="icons8-delete.png"></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-29-icons8-delete.png" alt="icons8-delete.png"></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-29-icons8-delete.png" alt="icons8-delete.png"></td>
</tr>
<tr>
<td><strong>Đa</strong> đồ thị (<code>MultiGraph</code>)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-29-icons8-delete.png" alt="icons8-delete.png"></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-07-icons8-checkmark.png" alt="icons8-checkmark.png"></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-29-icons8-delete.png" alt="icons8-delete.png"></td>
</tr>
<tr>
<td><strong>Giả</strong> đồ thị (<code>Pseudo Graph</code>)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-29-icons8-delete.png" alt="icons8-delete.png"></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-07-icons8-checkmark.png" alt="icons8-checkmark.png"></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-07-icons8-checkmark.png" alt="icons8-checkmark.png"></td>
</tr>
<tr>
<td><strong>Đồ</strong> thị có hướng (<code>Directed Graph</code>)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-07-icons8-checkmark.png" alt="icons8-checkmark.png"></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-29-icons8-delete.png" alt="icons8-delete.png"></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-07-icons8-checkmark.png" alt="icons8-checkmark.png"></td>
</tr>
<tr>
<td><strong>Đa</strong> đồ thị có hướng (<code>Directed MultiGraph</code>)</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-07-icons8-checkmark.png" alt="icons8-checkmark.png"></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-07-icons8-checkmark.png" alt="icons8-checkmark.png"></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-24-07-icons8-checkmark.png" alt="icons8-checkmark.png"></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_3-cac-mo-hinh-đo-thi" tabindex="-1"><a class="header-anchor" href="#_3-cac-mo-hinh-đo-thi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-53-44-tenor.gif" title="" alt="tenor.gif" width="65"> 3. Các mô hình đồ thị</h2>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-53-23-icons8-graph.png" alt="icons8-graph.png"> Đồ thị</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-51-03-icons8-object.png" alt="icons8-object.png"> Mô hình</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-53-08-icons8-robot_2.png" alt="icons8-robot_2.png"> Ví dụ</th>
</tr>
</thead>
<tbody>
<tr>
<td>Quen biết</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-54-30-output-onlinepngtools.png" alt="output-onlinepngtools.png"></td>
<td>Trên trái đất có hơn <code>6</code> tỉ <strong>đỉnh</strong> và có thể hơn tỉ tỉ <strong>cạnh</strong></td>
</tr>
<tr>
<td>Ảnh hưởng</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-19-54-41-output-onlinepngtools (1).png" alt="output-onlinepngtools (1).png"></td>
<td><strong>Đỉnh</strong>: tác giả<br><strong>Cạnh:</strong> <code>2</code> người viết chung bài báo<br>==&gt; Đồ thị cộng tác (<em>2001</em>) có hơn <code>337000</code> <strong>đỉnh</strong> và <code>496200</code> <strong>cạnh</strong></td>
</tr>
<tr>
<td>Thi đấu vòng tròn</td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-19-58-55-output-onlinepngtools (2).png" alt="output-onlinepngtools (2).png"></td>
<td><strong>Đỉnh</strong>: Đội tham gia thi đấu<br>Giữa <code>2</code> <strong>đỉnh</strong> tồn tại đúng <code>1</code> <strong>cạnh</strong></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_4-vi-du-bai-tap" tabindex="-1"><a class="header-anchor" href="#_4-vi-du-bai-tap" aria-hidden="true">#</a> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-54-38-tenor.gif" alt="tenor.gif" width="50"> 4. Ví dụ bài tập</h2>
<h3 id="bai-1-xac-đinh-đo-thi" tabindex="-1"><a class="header-anchor" href="#bai-1-xac-đinh-đo-thi" aria-hidden="true">#</a> Bài 1. Xác định đồ thị</h3>
<p>Xác định các loại đồ thị sau :</p>
<blockquote>
<p>Để làm được bài này cần mẹo của mình như sau :</p>
<p>Ta phân ra có <code>khuyên</code> hay không  :</p>
<ul>
<li>
<p>Nếu <code>Có</code> : <strong>đơn</strong> hoặc <strong>đa</strong></p>
<ul>
<li>
<p>Kiểm tra có <code>cạnh bội</code> không ?</p>
<ul>
<li>
<p>Nếu <code>Có</code> ==&gt; <strong>đơn</strong></p>
</li>
<li>
<p>Nếu <code>Không</code> ==&gt; <strong>đa</strong></p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Nếu <code>Không</code> : <strong>gỉa</strong> <em>hoặc</em> <strong>có hướng</strong> <em>hoặc</em> <strong>đa có hướng</strong></p>
<ul>
<li>
<p>Kiểm tra có <strong>cạnh có hướng</strong> không ?</p>
<ul>
<li>
<p>Nếu <code>Có</code> ==&gt; <strong>đơn có hướng</strong>  và <strong>đa có hướng</strong></p>
<ul>
<li>
<p>Kiểm tra có <strong>cạnh bội</strong> không ?</p>
<ul>
<li>
<p>Nếu <code>Có</code> ==&gt; <strong>đơn có hướng</strong></p>
</li>
<li>
<p>Nếu <code>Không</code> ==&gt; <strong>đa có hướng</strong></p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Nếu <code>Không</code> ==&gt; <strong>giả</strong></p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</blockquote>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-51-03-icons8-object.png" alt="icons8-object.png"> Mô hình</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-55-25-icons8-solve.png" alt="icons8-solve.png"> Trả lời</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-55-47-icons8-why_quest.png" alt="icons8-why_quest.png"> Lý do</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-20-24-07-Screen_Shot_2021-06-15_at_20.23.45-removebg-preview.png" title="" alt="Screen_Shot_2021-06-15_at_20.23.45-removebg-preview.png" width="121"></td>
<td>Đơn đồ thị</td>
<td>Không <code>cạnh có hướng</code>, <code>cạnh bội</code> và <code>khuyên</code></td>
</tr>
<tr>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-20-24-16-Screen_Shot_2021-06-15_at_20.22.37-removebg-preview.png" title="" alt="Screen_Shot_2021-06-15_at_20.22.37-removebg-preview.png" width="226"></td>
<td>Đơn đồ thị có hướng</td>
<td>Có <code>khuyên</code>, <code>cạnh có hướng</code><br>Không <code>cạnh bội</code></td>
</tr>
<tr>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-20-24-24-Screen_Shot_2021-06-15_at_20.22.29-removebg-preview.png" title="" alt="Screen_Shot_2021-06-15_at_20.22.29-removebg-preview.png" width="162"></td>
<td>Giả đồ thị</td>
<td>Có <code>khuyên</code>, <code>cạnh bội</code><br>Không <code>cạnh có hướng</code></td>
</tr>
<tr>
<td><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-20-24-11-Screen_Shot_2021-06-15_at_20.22.43-removebg-preview.png" alt="Screen_Shot_2021-06-15_at_20.22.43-removebg-preview.png" width="165"></td>
<td>Đa đồ thị có hướng</td>
<td>Có <code>cạnh có hướng</code>, <code>cạnh bội</code> và <code>khuyên</code></td>
</tr>
</tbody>
</table>
<h3 id="bai-2-xay-dung-mo-hinh" tabindex="-1"><a class="header-anchor" href="#bai-2-xay-dung-mo-hinh" aria-hidden="true">#</a> Bài 2. Xây dựng mô hình</h3>
<p>Xây dưng đồ thị ảnh hưởng cho các thành viên lãnh đạo của một công ty nếu :</p>
<ul>
<li>
<p><code>Chủ tịch</code> có ảnh hưởng lên <code>giám đốc nghiên cứu và phát triển</code>, <code>giám đốc marketing</code>, <code>giám đốc điều hành</code></p>
</li>
<li>
<p><code>Giám đốc nghiên cứu và phát triển</code> có ảnh hưởng lên <code>giám đốc điều hành</code></p>
</li>
<li>
<p><code>Giám đốc Marketing</code> ảnh hưởng lên <code>giám đốc điều hành</code></p>
</li>
<li>
<p><strong>KHÔNG</strong> ai có thể ảnh hưởng tới <code>trưởng phòng tài chính</code></p>
</li>
<li>
<p><code>Trưởng phòng tài chính</code> không ảnh hưởng bất cứ ai</p>
</li>
</ul>
<p>Dữ liệu : chủ tịch, giám đốc nghiên cứu &amp; phát triển, giám đốc marketing, giám đốc điều hành, trưởng phòng tài chính</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/03-23-20-18-Screen Shot 2021-06-03 at 23.20.15.png" alt="Screen Shot 2021-06-03 at 23.20.15.png"></p>
</template>
