<template><h1 id="gioi-thieu-ly-thuyet-đo-thi" tabindex="-1"><a class="header-anchor" href="#gioi-thieu-ly-thuyet-đo-thi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-09-14-Microphone.png" title="" alt="Microphonepng" width="50">Giới thiệu lý thuyết đồ thị <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-56-59-08-15-27-06-cat_ready.gif" title="" alt="08-15-27-06-cat_ready.gif" width="50"></h1>
<h2 id="_1-đinh-nghia" tabindex="-1"><a class="header-anchor" href="#_1-đinh-nghia" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-17-44-58-undertand.gif" title="" alt="undertand.gif" width="50">1. Định nghĩa</h2>
<p><code>Graph Theory</code> nghiên cứu các tính chất của <code>graph</code> là một tập các đối tượng gọi là các <strong>đỉnh</strong> (<em>nút</em>) nối với nhau bởi các <strong>cạnh</strong> (<em>cung</em>).</p>
<blockquote>
<p>💡 <strong>Cạnh</strong> có thể <code>có hướng</code> <em>hoặc</em> <code>vô hướng</code></p>
</blockquote>
<p><code>Graph</code> thường được vẽ dưới dạng một tập các <strong>điểm</strong> (<em>các</em> <strong>đỉnh</strong>) nối với nhau bằng cách <strong>đoạn thẳng</strong> (<em>các</em> <strong>cạnh</strong>)</p>
<hr>
<h2 id="_2-nguon-goc" tabindex="-1"><a class="header-anchor" href="#_2-nguon-goc" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-17-47-12-magnifier.gif" title="" alt="magnifier.gif" width="50"> 2. Nguồn gốc</h2>
<p>Bài toán <code>bảy cây cầu Euler</code> (<em>bảy cầu ở <code>Königsberg</code></em> ở Nga) bao gồm hai hòn đảo lớn nối với nhau và với đất liền với bảy cây cầu như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-17-52-00-Screen Shot 2021-06-15 at 17.51.50.png" alt="Screen Shot 2021-06-15 at 17.51.50.png"></p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-17-50-26-icons8-thinking_face.png" alt="icons8-thinking_face.png"> <strong>Yêu cầu bài toán :</strong> Tìm một tuyến đường mà đi qua mỗi cây cầu một lần và chỉ đúng một lần (<em>bất kể  điểm xuất phát hay điểm tới</em>)</p>
</blockquote>
<p>==&gt; Năm <code>1736</code>, <a href="https://en.wikipedia.org/wiki/Leonhard_Euler" target="_blank" rel="noopener noreferrer">Leonhard Euler<OutboundLink/></a> đã chứng minh rằng bài toán không có lời giải ==&gt; Kết quả này là cơ sở phát triển <code>Graph Theory</code></p>
<hr>
<h2 id="_3-lich-su" tabindex="-1"><a class="header-anchor" href="#_3-lich-su" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-06-42-january-january5th.gif" title="" alt="january-january5th.gif" width="50"> 3. Lịch sử</h2>
<p>Vào năm <code>1852</code>, <a href="https://en.wikipedia.org/wiki/Francis_Guthrie" target="_blank" rel="noopener noreferrer">Francis Guthrie<OutboundLink/></a> đưa ra bài toán bốn màu :</p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-17-50-26-icons8-thinking_face.png" alt="icons8-thinking_face.png"> <strong>Hỏi rằng</strong> : Liệu chỉ với bốn màu có thể tô màu một bản đồ bất kỳ sao cho <strong>KHÔNG</strong> có <code>2</code> nước nào cùng <strong>biên giới</strong> được tô <strong>cùng màu</strong> ?</p>
</blockquote>
<p>==&gt; Bài toán được như khai sinh ra <code>Graph Theory</code>, và nó được giải vào năm <code>1967</code> bởi <a href="https://en.wikipedia.org/wiki/Kenneth_Appel" target="_blank" rel="noopener noreferrer">Kenneth Appel<OutboundLink/></a> và <a href="https://en.wikipedia.org/wiki/Wolfgang_Haken" target="_blank" rel="noopener noreferrer">Wolfgang Haken<OutboundLink/></a></p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-03-59-icons8-image.png" alt="icons8-image.png"> Hình minh hoạ :</p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-17-58-52-fourcolormap.jpg" alt="fourcolormap.jpg" width="207">
</blockquote>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-58-06-icons8-name.png" alt="icons8-name.png"> Tên</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-58-10-icons8-image.png" alt="icons8-image.png"> Ảnh</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/16-14-58-16-icons8-new_year's_eve.png" alt="icons8-new_year's_eve.png"> Năm sinh</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Francis_Guthrie" target="_blank" rel="noopener noreferrer">Francis Guthrie<OutboundLink/></a></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-00-18-show-photo.jpg" title="" alt="show-photo.jpg" width="120"></td>
<td>1831 - 1899</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Kenneth_Appel" target="_blank" rel="noopener noreferrer">Kenneth Appel<OutboundLink/></a></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-02-23-ken-appel-150.jpg" title="" alt="ken-appel-150.jpg" width="122"></td>
<td>1932 - 2013</td>
</tr>
<tr>
<td><a href="https://en.wikipedia.org/wiki/Wolfgang_Haken" target="_blank" rel="noopener noreferrer">Wolfgang Haken<OutboundLink/></a></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/06/15-18-01-36-220px-Wolfgang_Haken_2008.jpg" title="" alt="220px-Wolfgang_Haken_2008.jpg" width="136"></td>
<td>1928 - ...</td>
</tr>
</tbody>
</table>
</template>
