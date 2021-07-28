<template><h1 id="đai-so-quan-he" tabindex="-1"><a class="header-anchor" href="#đai-so-quan-he" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-11-47-45-icons8-total_sales.png" alt="icons8-total_sales.png"> Đại số quan hệ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-11-47-29-icons8-connectivity_and_help.png" alt="icons8-connectivity_and_help.png"></h1>
<h2 id="_1-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#_1-gioi-thieu" aria-hidden="true">#</a> 1. Giới thiệu</h2>
<p>Có 8 phép đại số quan hệ như sau :</p>
<table>
<thead>
<tr>
<th>Phép</th>
<th>Mô tả</th>
<th>Ký hiệu</th>
<th>Ví dụ</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-25-53-icons8-compare.png" width="30">Hợp</td>
<td><strong>Gộp</strong> các bản ghi trong 2 quan hệ thành 1 quan hệ(<em>các bản ghi trùng nhau chỉ giữ lại một bản ghi</em>)</td>
<td><code>R ⋃ S = {t|t ∈ R hoặc t ∈ S}</code></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-37-41-Ảnh chụp Màn hình 2021-03-17 lúc 08.37.34.png" alt="Ảnh chụp Màn hình 2021-03-17 lúc 08.37.34.png" width="600"></td>
</tr>
<tr>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-28-38-icons8-venn_diagram.png" width="30"> Giao</td>
<td><strong>Chọn</strong> ra trong 2 quan hệ những bạn ghi trùng nhau</td>
<td><code>R ∩ S = {t|t ∈ R và t ∈ S}</code></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-40-41-Ảnh chụp Màn hình 2021-03-17 lúc 08.40.37.png" title="" alt="Ảnh chụp Màn hình 2021-03-17 lúc 08.40.37.png" width="334"></td>
</tr>
<tr>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-29-30-icons8-subtract.png" width="30"> Trừ</td>
<td><strong>Chọn</strong> ra các bản ghi chỉ có ở <code>R</code> mà không có ở <code>S</code></td>
<td><code>R - S = {t|t ∈ R hoặc t ∉ S}</code></td>
<td><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-41-28-Ảnh chụp Màn hình 2021-03-17 lúc 08.41.21.png" alt="Ảnh chụp Màn hình 2021-03-17 lúc 08.41.21.png" width="348"></td>
</tr>
<tr>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-31-38-icons8-asterisk.png" width="30"> Tích đề các</td>
<td><strong>Lấy</strong> mọi bản ghi của <code>R</code> &quot;gắn&quot; với mọi bản ghi của <code>S</code></td>
<td><code>R × S</code></td>
<td><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-42-48-Ảnh chụp Màn hình 2021-03-17 lúc 08.42.44.png" alt="Ảnh chụp Màn hình 2021-03-17 lúc 08.42.44.png" width="350"></td>
</tr>
<tr>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-32-11-icons8-division.png" width="30"> Chia</td>
<td>Trả về <strong>[các bộ với các thuộc tính chỉ có trong <code>R</code>]</strong> sao cho sự kết hợp của nó với <strong>[các bộ trong <code>S</code>]</strong> có mặt trong <code>R</code></td>
<td><code>R(z=x+y) ÷ S(y) = (x)</code></td>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-46-46-Ảnh chụp Màn hình 2021-03-17 lúc 08.46.38.png" title="" alt="Ảnh chụp Màn hình 2021-03-17 lúc 08.46.38.png" width="379"></td>
</tr>
<tr>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-32-50-icons8-cursor.png" width="30"> Chiếu</td>
<td><strong>Cắt dọc</strong> quan hệ để lấy ra dữ liệu một số thuộc tính quan hệ</td>
<td><code>R[X]</code><br>kí hiệu: <code>πₓ(R)</code></td>
<td><code>VD: πₙₐₘₑ (Subject)</code><br><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-48-25-Ảnh chụp Màn hình 2021-03-17 lúc 08.48.13.png" title="" alt="Ảnh chụp Màn hình 2021-03-17 lúc 08.48.13.png" width="293"></td>
</tr>
<tr>
<td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-33-23-icons8-multicast.png" width="30"> Chọn</td>
<td>Chọn bộ dữ liệu thoả mãn <strong>điều kiện</strong></td>
<td><code>σĐ(R)</code></td>
<td><code>VD: σName = 'Database'(Subject)</code><br><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-49-46-Ảnh chụp Màn hình 2021-03-17 lúc 08.49.29.png" alt="Ảnh chụp Màn hình 2021-03-17 lúc 08.49.29.png" width="325"></td>
</tr>
</tbody>
</table>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-33-40-icons8-connect.png" width="40"> 8. Phép kết nối</b></summary>
<br>
<p>Là việc lấy một bản ghi<code>R</code> &quot;gắn&quot; với một bản ghi <code>S</code> sao cho bản ghi kết quả thỏa mãn điều kiện kết nối.</p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-51-13-Ảnh chụp Màn hình 2021-03-17 lúc 08.51.05.png" alt="Ảnh chụp Màn hình 2021-03-17 lúc 08.51.05.png" width="388">
<h3 id="phep-ket-noi-tu-nhien" tabindex="-1"><a class="header-anchor" href="#phep-ket-noi-tu-nhien" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-52-55-icons8-connected.png" alt="icons8-connected.png"> Phép kết nối tự nhiên</h3>
<p>Kết nối  từng bản ghi <code>R</code> với từng bản ghi <code>S</code> ==&gt; được bảng mới lược bỏ đi bớt 1 cột thuộc tính chung</p>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-54-39-Ảnh chụp Màn hình 2021-03-17 lúc 08.53.40.png" title="" alt="asd" width="545">
<h3 id="phep-ket-noi" tabindex="-1"><a class="header-anchor" href="#phep-ket-noi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-52-55-icons8-connected.png" alt="icons8-connected.png"> Phép kết nối</h3>
<p>Là kết nối bằng nhưng trong trường hợp 2 thuộc tính cùng tên thì kết quả vẫn giữ lại 2 tên thuộc tính</p>
<h3 id="phep-ket-noi-ngoai" tabindex="-1"><a class="header-anchor" href="#phep-ket-noi-ngoai" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-52-55-icons8-connected.png" alt="icons8-connected.png"> Phép kết nối ngoài</h3>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-55-49-Ảnh chụp Màn hình 2021-03-17 lúc 08.55.42.png" title="" alt="Ảnh chụp Màn hình 2021-03-17 lúc 08.55.42.png" width="484">
</details>
</template>
