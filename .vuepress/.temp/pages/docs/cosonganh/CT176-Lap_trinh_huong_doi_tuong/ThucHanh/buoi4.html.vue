<template><h1 id="buoi-thuc-hanh-4-lap-trinh-oop" tabindex="-1"><a class="header-anchor" href="#buoi-thuc-hanh-4-lap-trinh-oop" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-06-19-Executive Male.png" alt="Executive Malepng"> Buổi thực hành 4 - Lập trình OOP <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-07-40-Executive Female.png" alt="Executive Femalepng"></h1>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png" alt="icons8-questions.png"> <strong>Bài 1:</strong> Cài đặt lớp <code>DiemMau</code> (<em>Diểm có màu</em>) <strong>thừa kế</strong> từ lớp <code>Diem</code> (<em>định nghĩa trong</em> <a href="https://github.com/Zenfection/HPCTU/blob/main/LTHDT/buoi2.md" target="_blank" rel="noopener noreferrer">buổi 2<OutboundLink/></a>, bổ sung thêm :</p>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png" alt="icons8-package.png"> Thuộc tính</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png" alt="icons8-data_quality.png"> Kiểu dữ liệu</th>
</tr>
</thead>
<tbody>
<tr>
<td>- màu</td>
<td>String</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png" alt="icons8-construction.png"> Hàm xây dựng</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8autographpng"> Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Mặc nhiên</td>
<td><code>DiemMau()</code></td>
</tr>
<tr>
<td>+ 3 đối số</td>
<td><code>DiemMau(int,int,String)</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png" alt="icons8-webhook.png"> Phương thức</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8autographpng"> Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Gán giá trị màu cho điểm</td>
<td><code>void ganMau(String mau)</code></td>
</tr>
<tr>
<td>+ Nhập màu</td>
<td><code>void nhapMau()</code></td>
</tr>
<tr>
<td>+ Hiển thị màu</td>
<td><code>void hienThiMau()</code></td>
</tr>
<tr>
<td>....</td>
<td>....</td>
</tr>
</tbody>
</table>
<p>Viết lớp <code>SDDiemMau</code> có hàm <code>main()</code> thực hiện các công việc sau :</p>
<ul>
<li>Tạo một điểm màu <code>A</code> có toạ độ là <code>(5,10)</code> và màu là trắng. Hiển thị thông tin ra màn hình</li>
<li>Tạo một điểm màu tổng quát <code>B</code>. Nhập giá trị từ bàn phím cho điểm <code>B</code>. Dời điểm <code>B</code> đi 1 độ dời <code>10,8</code>. Hiển thị toạ độ điểm B ra màn hình. Gán màu mới cho điểm <code>B</code> là màu <code>Vàng</code>.</li>
</ul>
</blockquote>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E Learning.png" alt="05123526E Learningpng"> Giải</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_1/DiemMau.java" target="_blank" rel="noopener noreferrer">DiemMau.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_1/SDDiemMau.java" target="_blank" rel="noopener noreferrer">SDDiemMau.java<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<hr>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png" alt="icons8-questions.png"> <strong>Bài 2:</strong> Cài đặt lớp <code>SinhVienCNTT</code> (<em>Sinh viên công nghệ thông tin</em>) <strong>thừa kế</strong> từ lớp <code>SinhVien</code> (<em>đã định nghĩa trong</em> <a href="https://github.com/Zenfection/HPCTU/blob/main/LTHDT/buoi3.md" target="_blank" rel="noopener noreferrer">buổi 3<OutboundLink/></a>), bổ sung thêm :</p>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png" alt="icons8-package.png"> Thuộc tính</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png" alt="icons8-data_quality.png"> Kiểu dữ liệu</th>
</tr>
</thead>
<tbody>
<tr>
<td>- taikhoan</td>
<td>String</td>
</tr>
<tr>
<td>- matkhau</td>
<td>String</td>
</tr>
<tr>
<td>- email</td>
<td>String</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png" alt="icons8-construction.png"> Hàm xây dựng</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8autographpng"> Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Mặc nhiên</td>
<td><code>SinhVienCNTT()</code></td>
</tr>
<tr>
<td>+ 4 đối số</td>
<td><code>SinhVienCNTT(SinhVien,String,String,String)</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png" alt="icons8-webhook.png"> Phương thức</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8autographpng"> Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Nhập thông tin Sinh Viên CNTT</td>
<td><code>void nhapSVCNTT()</code></td>
</tr>
<tr>
<td>+ Nạp đè phương thức <code>toString()</code> để xuất ra thông tin của một sinh viên <code>CNTT</code></td>
<td><code>void hienThiSVCNTT()</code></td>
</tr>
<tr>
<td>+ Đổi mật khẩu</td>
<td><code>void doiMatKhau(String newpass)</code></td>
</tr>
<tr>
<td>+ Lấy ra địa chỉ email của Sinh Viên</td>
<td><code>String getEmail()</code></td>
</tr>
</tbody>
</table>
<p>Viết lớp <code>SDSVCNTT</code> có hàm <code>main()</code> thực hiện các công việc sau :</p>
<ul>
<li>Tạo một danh sách gồm <code>n</code> sinh viên CNTT. Nhập thông tin cho danh sách đó.</li>
<li>Nhập vào một địa chỉ <code>email</code>. Tìm tài khoản  của sinh viên đó có địa chỉ <code>email</code> trên. Hiển thị kết quả học tập của Sinh Viên đó.</li>
</ul>
</blockquote>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E Learning.png" alt="05123526E Learningpng"> Giải</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_2/SVCNTT.java" target="_blank" rel="noopener noreferrer">SVCNTT.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_2/SDSVCNTT.java" target="_blank" rel="noopener noreferrer">SDSVCNTT.java<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<hr>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png" alt="icons8-questions.png"> <strong>Bài 3:</strong> Một nông trại có nuôi một số con vật như sau : <code>bò</code>,<code>heo</code>,<code>dê</code>. Tất cả các con vật trên đều có những thông tin chung như : <code>giống</code>,<code>màu lông</code>,<code>cân nặng</code>... nhưng tiếng kêu của các con vật là khác nhau.</p>
<p>Thiết kế sơ đồ thừa kế gồm các lớp :</p>
<ul>
<li>Lớp <code>ConVat</code> gồm các thông tin chung của các con vật nêu trên và phương thức <code>Keu()</code></li>
<li>Các lớp <code>Bo</code>,<code>Heo</code>,<code>De</code> thừa kế từ lớp <code>ConVat</code> và nạp đè phương thức <code>Keu()</code>.</li>
</ul>
<p>Viết lớp <code>SDConVat</code> chứa hàm <code>main()</code> thực hiện công việc sau :</p>
<ul>
<li>Tạo ra <code>n</code> con vật bất kỳ gồm 3 loại trên. Nhập thông tin cho các con vật.</li>
<li>Cho <code>n</code> con vật đó kêu.</li>
</ul>
<p>Giả sử nông trại bổ sung thêm 1 con vật nuôi khác là <code>Gà</code>. Hãy thêm lớp <code>Ga</code> vào thiết kế chương trình của mình và thực hiện lại. Quan sát kết quả.</p>
</blockquote>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E Learning.png" alt="05123526E Learningpng"> Giải</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_3/ConVat.java" target="_blank" rel="noopener noreferrer">ConVat.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_3/ConBo.java" target="_blank" rel="noopener noreferrer">ConBo.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_3/ConHeo.java" target="_blank" rel="noopener noreferrer">ConHeo.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_3/ConDe.java" target="_blank" rel="noopener noreferrer">ConDe.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_3/SDConVat.java" target="_blank" rel="noopener noreferrer">SDConVat<OutboundLink/></a></td>
</tr>
</tbody>
</table>
</template>
