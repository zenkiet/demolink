<template><h1 id="canh-ke-đinh-ke-bac" tabindex="-1"><a class="header-anchor" href="#canh-ke-đinh-ke-bac" aria-hidden="true">#</a> Cạnh kề, đỉnh kề, bậc</h1>
<h3 id="lien-quan-giua-canh-va-đinh" tabindex="-1"><a class="header-anchor" href="#lien-quan-giua-canh-va-đinh" aria-hidden="true">#</a> Liên quan giữa cạnh và đỉnh</h3>
<table>
<thead>
<tr>
<th>Khái niệm</th>
<th>Định nghĩa</th>
<th>Trong đó</th>
<th>Dễ hiểu</th>
</tr>
</thead>
<tbody>
<tr>
<td>Kề (<code>Adjacent</code>)<br><em>hay</em> Láng giềng (<code>neibor</code>)</td>
<td><code>{u,v}</code> là một cạnh của <code>G</code> trong đồ thị <strong>vô hướng</strong></td>
<td><code>u</code> và <code>v</code> là đỉnh<br><code>G</code> là đồ thị <strong>vô hướng</strong></td>
<td>hai đỉnh nối với nhau bởi một cạnh<br>gọi là <strong>kề</strong></td>
</tr>
<tr>
<td>Liên thuộc (<code>Incident</code>)<br><em>hay</em> Kết nối (<code>Connect</code>)</td>
<td><code>e={u,v}</code></td>
<td><code>e</code> là cạnh nối <code>u</code> và <code>v</code><br><code>u</code> và <code>v</code> là đỉnh</td>
<td>cạnh nối hai đỉnh với nhau<br>gọi là <strong>liên thuộc</strong></td>
</tr>
<tr>
<td>Điểm đầu nút (<code>Endpoint</code>)</td>
<td><code>u</code> và <code>v</code></td>
<td></td>
<td>đỉnh còn được gọi là <strong>điểm đầu mút</strong></td>
</tr>
</tbody>
</table>
<h3 id="bac-cua-đinh" tabindex="-1"><a class="header-anchor" href="#bac-cua-đinh" aria-hidden="true">#</a> Bậc của đỉnh</h3>
<p><strong>Bậc</strong> (<code>degree</code>) của một đỉnh trên đồ thị <strong>vô hướng</strong> là số các cạnh liên thuộc với nó</p>
<blockquote>
<p>Riêng <code>khuyên</code> tại đỉnh được tính <code>2</code> lần cho bậc của nó.</p>
<p>Ký hiệu : <code>deg(v)</code> (<em>bậc của đỉnh <code>v</code></em>)</p>
</blockquote>
<p><strong>Ví dụ</strong>: Cho hình minh hoạ sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-22-54-20-Screen_Shot_2021-06-15_at_22.48.26-removebg-preview.png" alt="ScreenShot20210615at224826removebgpreviewpng"></p>
<p>Đặt các đỉnh lần lượt từ 1 tới 6</p>
<p>==&gt; Bậc của các định lần lượt như sau : <code>4</code>, <code>3</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>3</code></p>
<h3 id="đinh-ly-bat-tay-handshaking-theorem" tabindex="-1"><a class="header-anchor" href="#đinh-ly-bat-tay-handshaking-theorem" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-22-07-56-icons8-holding_hands.png" alt="icons8-holding_hands.png"> Định lý bắt tay (<code>Handshaking Theorem</code>)</h3>
<p>Cho <code>G=(V,E)</code> là một đồ thị <strong>vô hướng</strong> có <code>e</code> cạnh, Khi đó :</p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-22-05-09-Screen Shot 2021-06-16 at 22.05.01.png" alt="Screen Shot 2021-06-16 at 22.05.01.png" width="129">
<blockquote>
<p><strong>Ví dụ</strong>: Có bao nhiêu <strong>cạnh</strong> trong đồ thị có <code>10</code> đỉnh và mỗi <strong>đỉnh</strong> có <strong>bậc</strong> bằng <code>7</code>.</p>
<p>==&gt; Mỗi đỉnh có <strong>bậc</strong> là <code>7</code> và có <code>10</code> <strong>đỉnh</strong>, vậy tổng số <strong>bậc</strong> là <code>70</code></p>
<p>Áp dụng công thức : <code>2e = 70</code> =&gt; <code>e = 35</code> ==&gt; Vậy có <code>35</code> <strong>cạnh</strong></p>
</blockquote>
<h3 id="chung-minh-đinh-ly" tabindex="-1"><a class="header-anchor" href="#chung-minh-đinh-ly" aria-hidden="true">#</a> Chứng minh định lý</h3>
<p>Định nghĩa hàm <code>f</code> từ <code>e x v</code> tới <code>{0,1,2...}</code> ,  trong đó :</p>
<ul>
<li>
<p><code>f(e,v) = 1</code> nếu <code>e</code> có <code>2</code> <strong>đỉnh</strong> phân biệt và <code>v</code> là một trong <code>2</code> <strong>đỉnh</strong> đó</p>
</li>
<li>
<p><code>f(e,v) = 2</code> nếu <code>e</code> là một <code>khuyên</code> và <code>v</code> là <strong>đỉnh</strong> của <code>khuyên</code> này</p>
</li>
<li>
<p><code>f(e,v = 0)</code> nếu <code>v</code> không phải là <strong>đỉnh</strong> thuộc <strong>cạnh</strong> <code>e</code></p>
<blockquote>
<p>Trong đó : <code>e</code> là cạnh, <code>v</code> là đỉnh</p>
</blockquote>
</li>
</ul>
<p>==&gt; Với cạnh <code>e ∈ E</code> bất kỳ, ta có  <img title="" src="https://render.githubusercontent.com/render/math?math=$\sum_{v \in V} f(e, v)=2$" alt="math" width="142"></p>
<blockquote>
<img title="" src="https://render.githubusercontent.com/render/math?math=$\sum_{e \in E} 2=\sum_{e \in E} \sum_{v \in V} f(e, v)$" alt="1" width="187">
<p>=&gt;  <img title="" src="https://render.githubusercontent.com/render/math?math=$2|E|=\sum_{e \in E} 2=\sum_{e \in E} \sum_{v \in V} f(e, v)=\sum_{v \in V} \sum_{e \in E} f(e, v)$" alt="2" width="399"></p>
<p>Ta có : <code>deg(v)</code> = <img title="" src="https://render.githubusercontent.com/render/math?math=$\sum_{e \in E} f(e, v)$" alt="3" width="100"></p>
<p>=&gt; <img title="" src="https://render.githubusercontent.com/render/math?math=$2|E|=\sum_{v \in V} \operatorname{deg}(v)$" alt="4" width="124"></p>
</blockquote>
<hr>
<h2 id="đinh-ly-ve-so-đinh-bac-le" tabindex="-1"><a class="header-anchor" href="#đinh-ly-ve-so-đinh-bac-le" aria-hidden="true">#</a> Định lý về số đỉnh bậc lẻ</h2>
<p>Một đồ thị <strong>vô hướng</strong> có số lượng <code>đỉnh bậc lẻ</code> là một số <code>chẵn</code></p>
<p>==&gt; Không tồn một đồ thị <strong>vô hướng</strong> nào <strong>tổng</strong> số lượng <code>đỉnh bậc lẻ</code> là <code>1,3,5...</code></p>
<h3 id="chung-minh-đinh-ly-1" tabindex="-1"><a class="header-anchor" href="#chung-minh-đinh-ly-1" aria-hidden="true">#</a> Chứng minh định lý</h3>
<p>Giả sử <code>V1</code>, <code>V2</code> tương ứng là tập các <code>đỉnh bậc chẵn</code> và tập các <code>đỉnh bậc lẻ</code> của đồ thị <strong>vô hướng</strong> <code>G=(V,E)</code>. Khi đó :</p>
<blockquote>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/17-23-32-26-rendered_image.png" alt="rendered_image.png" width="356">
</blockquote>
<p>==&gt; Không tồn tại <strong>đỉnh</strong> nào vừa nằm tập <code>V1</code> và <code>V2</code></p>
<blockquote>
<p>Vì <code>deg(v)</code> là <code>chẵn</code></p>
</blockquote>
<hr>
<h2 id="lien-quan-giua-canh-va-đinh-1" tabindex="-1"><a class="header-anchor" href="#lien-quan-giua-canh-va-đinh-1" aria-hidden="true">#</a> Liên quan giữa cạnh và đỉnh</h2>
<p>Khi <code>(u,v)</code> là <strong>cạnh</strong> của đồ thị <strong>có hướng</strong> <code>G</code></p>
<ul>
<li>
<p><code>u</code> được gọi là <strong>nối tới</strong> <code>v</code> và <code>v</code> được gọi là <strong>nối từ</strong> <code>u</code></p>
</li>
<li>
<p>Đỉnh <code>u</code> được gọi là <strong>đỉnh đầu</strong> (<code>initial vertex</code>)</p>
</li>
<li>
<p>Đỉnh <code>v</code> được gọi là <strong>đỉnh cuối</strong> (<code>terminal</code> <em>hoặc</em> <code>vertex</code>)</p>
</li>
</ul>
<p>Cạnh <code>e=(u,v)</code> được gọi là đi từ <strong>đỉnh</strong> <code>u</code> tới <strong>đỉnh</strong> <code>v</code> (<em>hoặc đi ra <strong>đỉnh</strong> <code>u</code> vào <strong>đỉnh</strong> <code>v</code></em>)</p>
<hr>
<h3 id="bac-vao-va-bac-ra" tabindex="-1"><a class="header-anchor" href="#bac-vao-va-bac-ra" aria-hidden="true">#</a> bậc  vào và bậc ra</h3>
<p>Trong đồ thị <strong>có hướng</strong>, <strong>bậc vào</strong> (<code>in-degree</code>) của đỉnh <code>v</code></p>
<blockquote>
<p>Ký hiệu :  <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/17-23-42-23-202100529_329322822080103_4291452962804238252_n.png" alt="202100529_329322822080103_4291452962804238252_n.png" width="75"></p>
</blockquote>
<p><strong>Bậc ra</strong> (<code>out-degree</code>) của <strong>đỉnh</strong> <code>v</code> là số cạnh các <strong>đỉnh đầu</strong> là <code>v</code></p>
<blockquote>
<p>Ký hiệu : <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/17-23-43-32-202040183_920805022095649_8634727797493669511_n.png" alt="202040183_920805022095649_8634727797493669511_n.png" width="75"></p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-00-03-17-Screen Shot 2021-06-18 at 00.03.15.png" alt="Screen Shot 2021-06-18 at 00.03.15.png"></p>
<hr>
<h2 id="đinh-ly-ve-so-bac-đo-thi" tabindex="-1"><a class="header-anchor" href="#đinh-ly-ve-so-bac-đo-thi" aria-hidden="true">#</a> Định lý về số bậc đồ thị</h2>
<p>Cho <code>G=(V,E)</code> là một đồ thị <strong>có hướng</strong>, Khi đó:</p>
<blockquote>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-00-06-27-201904403_812332579415926_3124238451475860481_n.png" alt="201904403_812332579415926_3124238451475860481_n.png" width="289">
</blockquote>
<hr>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-00-07-06-Screen Shot 2021-06-18 at 00.07.05.png" alt="Screen Shot 2021-06-18 at 00.07.05.png"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-12-13-03-tẻm.png" alt="tẻm.png"></p>
<blockquote>
<p>Trà vinh là đỉnh treo</p>
<p>Phú quốc là đỉnh cô lập</p>
</blockquote>
<hr>
<h2 id="mot-so-đon-đo-thi-đac-biet" tabindex="-1"><a class="header-anchor" href="#mot-so-đon-đo-thi-đac-biet" aria-hidden="true">#</a> Một số đơn đồ thì đặc biệt</h2>
<table>
<thead>
<tr>
<th>Đồ thị (<code>Graph</code>)</th>
<th>Định nghĩa</th>
<th>Mô hình</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Đầy đủ (<code>Complete</code>)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Chính quy (<code>Regular</code>)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Vòng tròn (<code>Circle</code>)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Phân đôi (<code>Bipartite</code>)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Phân đôi đầy đủ (<code>Complete Bipartite</code>)</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>Vô hướng, không có khuyên</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-12-14-06-Screen Shot 2021-06-18 at 12.14.04.png" alt="Screen Shot 2021-06-18 at 12.14.04.png"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-12-16-10-Screen Shot 2021-06-18 at 12.16.09.png" alt="Screen Shot 2021-06-18 at 12.16.09.png"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-12-16-23-Screen Shot 2021-06-18 at 12.16.21.png" alt="Screen Shot 2021-06-18 at 12.16.21.png"></p>
<blockquote>
<p>Mối quan hệ giữa chính quy và đầy đủ</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-12-20-00-Screen Shot 2021-06-18 at 12.19.57.png" alt="Screen Shot 2021-06-18 at 12.19.57.png"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-12-20-52-Screen Shot 2021-06-18 at 12.20.50.png" alt="Screen Shot 2021-06-18 at 12.20.50.png"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-12-28-14-Screen Shot 2021-06-18 at 12.28.12.png" alt="Screen Shot 2021-06-18 at 12.28.12.png"></p>
<hr>
<h2 id="vi-du" tabindex="-1"><a class="header-anchor" href="#vi-du" aria-hidden="true">#</a> Ví dụ</h2>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/18-12-29-46-Screen Shot 2021-06-18 at 12.29.44.png" alt="Screen Shot 2021-06-18 at 12.29.44.png"></p>
</template>
