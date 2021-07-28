<template><h1 id="buoi-thuc-hanh-3-lap-trinh-oop" tabindex="-1"><a class="header-anchor" href="#buoi-thuc-hanh-3-lap-trinh-oop" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-06-19-Executive Male.png" alt="Executive Male.png"> Buổi thực hành 3 - Lập trình OOP <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-07-40-Executive Female.png" alt="Executive Female.png"></h1>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png" alt="icons8-questions.png"> <strong>Bài 1</strong> : cài đặt lớp <code>Gach</code> (<em>gạch lót nền</em>) như sau :</p>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png" alt="icons8-package.png"> Thuộc tính</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png" alt="icons8-data_quality.png"> Kiểu dữ liêu</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-33-30-icons8-consultation.png" alt="icons8-consultation.png"> Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td>- maso</td>
<td>String</td>
<td>Mã số</td>
</tr>
<tr>
<td>- mau</td>
<td>String</td>
<td>màu</td>
</tr>
<tr>
<td>- soLuong</td>
<td>int</td>
<td>số lượng viên gạch trong 1 hộp</td>
</tr>
<tr>
<td>- chieudaiGach</td>
<td>int</td>
<td>chiều dài viên gạch (<em>tính theo <code>cm</code></em>)</td>
</tr>
<tr>
<td>- chieurongGach</td>
<td>int</td>
<td>chiều ngang viên gạch (<em>tính theo <code>cm</code></em>)</td>
</tr>
<tr>
<td>- giaBan</td>
<td>long</td>
<td>giá bán <code>1</code> hộp</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png" alt="icons8-construction.png"> Hàm xây dựng</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8-autograph.png"> Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Mặc nhiên</td>
<td><code>Gach()</code></td>
</tr>
<tr>
<td>+ Hàm xây dựng 6 tham số</td>
<td><code>Gach(String,String,int,int,int,long)</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png" alt="icons8-webhook.png"> Phương thức</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8-autograph.png"> Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Nhập thông tin cho 1 hộp gạch</td>
<td><code>void nhapGach()</code></td>
</tr>
<tr>
<td>+ Hiển thị thông tin của 1 hộp gạch</td>
<td><code>void hienthiGach()</code></td>
</tr>
<tr>
<td>+ Tính giá bán lẻ của 1 viên gạch (<em>biết rằng giá bán lẻ cao hơn bán nguyên hộp là <code>20%</code></em>)</td>
<td><code>float giaBanLe()</code></td>
</tr>
<tr>
<td>+ Tính <strong>diện tích</strong> nền tối đa có thể lót được hộp gạch</td>
<td><code>float dienTichNen()</code></td>
</tr>
<tr>
<td>+ Tính <strong>số lượng</strong> hộp gạch ít nhất cần có khi lót 1 nền có diện tích là <code>D*N</code>  (<em>Quy định lót đúng chiều gạch , không cho xoay viên gạch</em>)</td>
<td><code>int soLuongHop(int D,int N)</code></td>
</tr>
</tbody>
</table>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-26-35-icons8-hand_with_pen.png" alt="icons8-hand_with_pen.png"> Viết lớp <code>SDGach</code> có chứa hàm <code>main()</code> thực hiện các công việc sau :</p>
<ul>
<li>Nhập 1 danh sách gồm <code>n</code> gạch lót nền (<em>với <code>n</code> được nhập từ bàn phím</em>)</li>
<li>Hiển thị ra màn hình thông tin các loại gạch vừa nhập</li>
<li>Hiển thị ra màn hình loại gạch có chi phí thấp nhất (<em>giá tiền/đơn vị diện tích</em>)</li>
<li>Tính ra chi phí mua gạch khi ta lót 1 diện tích có chiều ngang là <code>5m</code> và chiều dài là <code>20m</code>, khi ta dùng từng loại gạch trong danh sách trên.</li>
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
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_1/Gach.java" target="_blank" rel="noopener noreferrer">Gach.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_1/SDGach.java" target="_blank" rel="noopener noreferrer">SDGach.java<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<hr>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png" alt="icons8-questions.png"> <strong>Bài 2:</strong> Cài đặt lớp <code>DoanThang</code> (<em>đoạn thẳng</em>) gồm :</p>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png" alt="icons8-package.png"> Thuộc tính</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png" alt="icons8-data_quality.png">Kiểu dữ liệu</th>
</tr>
</thead>
<tbody>
<tr>
<td>- d1</td>
<td>int</td>
</tr>
<tr>
<td>- d2</td>
<td>int</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png" alt="icons8-construction.png"> Hàm xây dựng</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8-autograph.png"> Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Mặc nhiên</td>
<td><code>DoanThang()</code></td>
</tr>
<tr>
<td>+ 2 tham số</td>
<td><code>DoanThang(Diem,Diem)</code></td>
</tr>
<tr>
<td>+ 4 tham số</td>
<td><code>DoanThang(int ax,int ay,int bx,int by)</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png" alt="icons8-webhook.png"> Phương thức</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8-autograph.png"> Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Nhập toạ độ của đoạn thẳng</td>
<td><code>void nhapDoanThang()</code></td>
</tr>
<tr>
<td>+ Hiển thị giá trị 2 đầu mút của đoạn thẳng</td>
<td><code>void hienThiDoanThang()</code></td>
</tr>
<tr>
<td>+ Tịnh tiến đoạn thẳng đi 1 độ dời (<em>dx,dy</em>) nào đó</td>
<td><code>void tinhTien(int dx,int dy)</code></td>
</tr>
<tr>
<td>+ Tính độ dài đoạn thẳng.</td>
<td><code>float doDaiDoanThang()</code></td>
</tr>
<tr>
<td>+ Tính góc của đoạn thẳng với trục hoành</td>
<td><code>double gocDoanThang()</code></td>
</tr>
</tbody>
</table>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-26-35-icons8-hand_with_pen.png" alt="icons8-hand_with_pen.png"> Viết lớp <code>SDDoanThang</code> có chứa hàm <code>main()</code> thực hiện các công việc sau :</p>
<ul>
<li>Tạo 2 điểm là <code>A(2,5)</code> , <code>B(20,35)</code>. Tạo đoạn thẳng <code>AB</code>. Tịnh tiến <code>AB</code> đi đoạn <code>(5,3)</code></li>
<li>Tạo một đoạn thẳng bất kỳ <code>CD</code>. Nhập giá trị cho đoạn <code>CD</code> đó.</li>
<li>Hiển thị ra màn hình độ dài <code>CD</code>, góc <code>CD</code> với trục hoành</li>
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
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_2/DoanThang.java" target="_blank" rel="noopener noreferrer">DoanThang.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_2/SDDoanThang.java" target="_blank" rel="noopener noreferrer">SDDoanThang.java<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<hr>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png" alt="icons8-questions.png"> <strong>Bài 3:</strong> Cài đặt lớp <code>SinhVien</code> (<em>sinh viên</em>) gồm :</p>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png" alt="icons8-package.png"> Thuộc tính</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png" alt="icons8-data_quality.png"> Kiễu dữ liệu</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-33-30-icons8-consultation.png" alt="icons8-consultation.png"> Giải thích</th>
</tr>
</thead>
<tbody>
<tr>
<td>- maSV</td>
<td>String</td>
<td>Mã số Sinh Viên</td>
</tr>
<tr>
<td>- hoTen</td>
<td>String</td>
<td>Họ tên</td>
</tr>
<tr>
<td>- ngaySinh</td>
<td>Date</td>
<td>Ngày Sinh</td>
</tr>
<tr>
<td>- hpDangKy</td>
<td>int</td>
<td>số lượng HP đăng ký</td>
</tr>
<tr>
<td>- tenHPDangKy</td>
<td>mảng String</td>
<td>tên các học phần đăng ký</td>
</tr>
<tr>
<td>- diemHP</td>
<td>mảng String</td>
<td>điểm của các học phần</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png" alt="icons8-construction.png"> Hàm xây dựng</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8-autograph.png"> Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Mặc nhiên</td>
<td><code>SinhVien()</code></td>
</tr>
<tr>
<td>+ 6 tham số</td>
<td><code>SinhVien(String,String,Date,int,String,String[])</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png" alt="icons8-webhook.png"> Phương thức</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8-autograph.png"> Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Nhập thông tin cơ bản của Sinh Viên</td>
<td><code>void nhapSV()</code></td>
</tr>
<tr>
<td>+ Nhập điểm cho các học phần của sinh viên</td>
<td><code>void nhapDiemHP()</code></td>
</tr>
<tr>
<td>+ Xuất ra chuỗi là thông tin sinh viên (<em>dùng <code>toString()</code></em>)</td>
<td><code>void inThongTinSV()</code></td>
</tr>
<tr>
<td>+ Tính ra điểm trung bình của sinh viên theo thang điểm <code>4</code></td>
<td><code>float diemHP()</code></td>
</tr>
<tr>
<td>+ Đăng ký thêm 1 học phần cho sinh viên</td>
<td><code>void dangKyHP()</code></td>
</tr>
<tr>
<td>+ Xoá 1 học phần của sinh viên</td>
<td><code>void xoaHP</code></td>
</tr>
</tbody>
</table>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-26-35-icons8-hand_with_pen.png" alt="icons8-hand_with_pen.png"> Viết lớp <code>SDSinhVien</code> có chứa hàm <code>main()</code> gồm :</p>
<ul>
<li>Tạo sinh viên <code>a</code>. Nhập thông tin sinh viên <code>a</code>. Đăng ký thêm cho sinh viên <code>a</code> 1 học phần là <code>LTHDT</code>. Hiển thị thông tin của <code>a</code>.</li>
<li>Tạo một danh sách sinh viên, nhập thông tin cho danh sách trên</li>
<li>Tìm các sinh viên bị cảnh cáo học vụ</li>
<li>Tìm sinh viên có điểm trung bình cao nhất lớp.</li>
<li>Hiển thị danh sách sinh viên theo thứ tự <code>Alphabet</code> của Tên</li>
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
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_3/SinhVien.java" target="_blank" rel="noopener noreferrer">SinhVien.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_3/SDSinhVien.java" target="_blank" rel="noopener noreferrer">SDSinhVien.java<OutboundLink/></a></td>
</tr>
</tbody>
</table>
</template>
