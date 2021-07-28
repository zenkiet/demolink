<template><h1 id="buoi-thuc-hanh-2-lap-trinh-oop" tabindex="-1"><a class="header-anchor" href="#buoi-thuc-hanh-2-lap-trinh-oop" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-06-19-Executive Male.png" alt="Executive Male.png"> Buổi thực hành 2 - Lập trình OOP <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-07-40-Executive Female.png" alt="Executive Female.png"></h1>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png" alt="icons8-questions.png"> <strong>Bài 1:</strong> Cài đặt lớp <strong>Diem</strong> (Điểm trong không gian 2 chiều) gồm:</p>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png" alt="icons8-package.png"> Thuộc tính</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png" alt="icons8-data_quality.png"> Kiểu dữ liệu</th>
</tr>
</thead>
<tbody>
<tr>
<td>x</td>
<td>int</td>
</tr>
<tr>
<td>y</td>
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
<td>+ Hàm xây dựng mặc nhiên</td>
<td><code>Diem()</code></td>
</tr>
<tr>
<td>+ Hàm xây dựng có 2 tham số</td>
<td><code>Diem(int,int)</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png" alt="icons8-webhook.png"> Phương thức</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8-autograph.png"> Tên Hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Nhập toạ độ cho điểm từ bàn phím</td>
<td><code>void nhapDiem()</code></td>
</tr>
<tr>
<td>+ Hiển thị ra màn hình toạ độ điểm theo dạng <strong>(x,y)</strong></td>
<td><code>void hienThi()</code></td>
</tr>
<tr>
<td>+ Đời điểm đi độ dời <strong>(dx,dy)</strong></td>
<td><code>void doiDiem(int dx,int dy)</code></td>
</tr>
<tr>
<td>+ Lấy ra giá trị hoành độ của điểm</td>
<td><code>int giaTriX()</code></td>
</tr>
<tr>
<td>+ Lấy ra giá trị tung độ của điểm</td>
<td><code>int giaTriY()</code></td>
</tr>
<tr>
<td>+ Tính khoảng cách từ điểm đó đến gốc toạ độ</td>
<td><code>float khoangCach()</code></td>
</tr>
<tr>
<td>+ Tính khoảng cách từ điểm đến 1 điểm khác</td>
<td><code>khoangCach(Diem d)</code></td>
</tr>
</tbody>
</table>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-26-35-icons8-hand_with_pen.png" alt="icons8-hand_with_pen.png"> Viết lớp <code>SDDiem</code> có chứa hàm <code>main()</code> khai thác lớp vừa định nghĩa:</p>
<ul>
<li>Tạo ra điểm <code>A</code> toạ độ <strong>(3,4)</strong> ➨ Hiển thị toạ độ điểm <code>A</code> ra màn hình</li>
<li>Tạo ra điểm <code>B</code> với giá trị nhập từ <code>bàn phím</code> ➨ Hiển thị toạ độ điểm B ra màn hình</li>
<li>Tạo ra điểm <code>C</code> đối xuống với điểm B qua gốc toạ độ ➨Hiển thị toạ độ điểm <code>C</code> ra màn hình</li>
<li>Hiển thị ra màn hình khoảng cách từ điểm <code>B</code> tới tâm <code>O</code></li>
<li>HIển thị ra màn hình khoảng cách từ điểm <code>A</code> tới điểm <code>B</code></li>
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
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_1/Diem.java" target="_blank" rel="noopener noreferrer">Diem.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_1/SDDiem.java" target="_blank" rel="noopener noreferrer">SDDiem.java<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<hr>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png" alt="icons8-questions.png"> <strong>Bài 2:</strong> Cài đặt lớp <code>Date</code> gồm :</p>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png" alt="icons8-package.png"> Thuộc tính</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png" alt="icons8-data_quality.png"> Kiểu dữ liệu</th>
</tr>
</thead>
<tbody>
<tr>
<td>ngay</td>
<td>int</td>
</tr>
<tr>
<td>thang</td>
<td>int</td>
</tr>
<tr>
<td>nam</td>
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
<td>Hàm xây dựng mặc nhiên</td>
<td><code>Date()</code></td>
</tr>
<tr>
<td>Hàm xây dựng có 3 tham số</td>
<td><code>Date(int,int,int)</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png" alt="icons8-webhook.png"> Phương thức</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png" alt="icons8-autograph.png"> Tên hàm</th>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-05-25-Learning Material.png" alt="Learning Material.png"> Ví dụ</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Hiển thị thông tin <code>ngày</code> ra màn hình</td>
<td><code>void hienThiNgay()</code></td>
<td></td>
</tr>
<tr>
<td>+ Nhập giá trị từ <code>bàn phím</code>, nếu không hợp lệ yêu cầu nhập lại</td>
<td><code>void nhapDate()</code></td>
<td></td>
</tr>
<tr>
<td>+ Kiểm tra xem ngày có <strong>hợp lệ</strong> không</td>
<td><code>boolean hopLe()</code></td>
<td>Ngày <code>31/06/2000</code> và <code>29/2/1999</code> không hợp lệ</td>
</tr>
<tr>
<td>+ Tính ra ngày hôm sau là ngày nào</td>
<td><code>Date ngayHomSau()</code></td>
<td><code>30/06/2007</code> ➨ <code>01/07/2007</code></td>
</tr>
<tr>
<td>+ Cộng 1 ngày với số ngày <code>n</code> nào đó</td>
<td><code>Date congNgay(int n)</code></td>
<td><code>15/06/2000</code> cộng thêm <code>20</code> ngày ➨ <code>05/07/2000</code></td>
</tr>
</tbody>
</table>
</blockquote>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E Learning.png" alt="05123526E Learningpng"> Giải</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_2/Date.java" target="_blank" rel="noopener noreferrer">Date.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_2/SDDate.java" target="_blank" rel="noopener noreferrer">SDDate.java<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<hr>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png" alt="icons8-questions.png"> <strong>Bài 3:</strong> Cài đặt lớp <code>PhanSo</code> gồm :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png" alt="icons8-package.png"> Các thuộc tính:  <code>tuso</code> và <code>mauso</code> kiểu số nguyên.</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png" alt="icons8-construction.png"> Các hàm xây dựng gồm:</p>
<table>
<thead>
<tr>
<th>Hàm xây dựng</th>
<th>Tên hàm</th>
</tr>
</thead>
<tbody>
<tr>
<td>+ Hàm xây dựng mặc nhiên</td>
<td><code>PhanSo()</code></td>
</tr>
<tr>
<td>+ Hàm xây dựng gồm nhiều đối số</td>
<td><code>PhanSo(int tu,int mau)</code></td>
</tr>
</tbody>
</table>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png" alt="icons8-webhook.png"> Các phương thức khác gồm :</p>
<ul>
<li>
<p>Hàm nhập giá trị cho <code>1</code> phân số. Nếu phân số vừa nhập có mẫu số <code>= 0</code> thì <strong>yêu cầu nhập lại.</strong></p>
</li>
<li>
<p>Hàm hiển thị phân số theo dạng <code>tu / mau</code> hoặc <code>-tu/mau</code>.</p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-05-25-Learning Material.png" alt="Learning Material.png"> <em>Yêu cầu:</em> nếu <code>tử = 0</code> ➨ chỉ in ra số <code>0</code>, nếu <code>mẫu =1</code> thì ➨ in ra <code>tử số</code>.</p>
</blockquote>
</li>
<li>
<p>Hàm <code>nghịch đảo</code> phân số (làm thay đổi giá trị phân số) ➨ <code>void nghichDao()</code></p>
</li>
<li>
<p>Hàm tính ra phân số <code>nghịch đảo</code> của 1 phân số (phân số sẽ giữ nguyên nhưng hàm trả ra giá trị là phân số nghịch đảo của nó) ➨ <code>PhanSo giaTriNghichDao()</code></p>
</li>
<li>
<p>Hàm tính ra <code>giá trị thực</code> của phân số.</p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-05-25-Learning Material.png" alt="Learning Material.png"> <em>Ví dụ:</em> <code>1/2</code> ➨ <code>0.5</code></p>
</blockquote>
</li>
<li>
<p>Hàm so sánh lớn hơn với phân số a ➨ <code>boolean lonHon(PhanSo a)</code></p>
</li>
<li>
<p>Hàm <code>cộng</code>, <code>trừ</code>, <code>nhân</code>, <code>chia</code> phân số với 1 <code>phân số a</code> (Kết quả của hàm là 1 phân số.)  ➨ <code>PhanSo cong(PhanSo a)</code></p>
</li>
<li>
<p>Hàm <code>cộng</code>, <code>trừ</code>, <code>nhân</code>, <code>chia</code> phân số với 1 số nguyên (Kết quả của hàm là 1 phân số.) ➨ <code>PhanSo cong(int a)</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-26-35-icons8-hand_with_pen.png" alt="icons8-hand_with_pen.png"> Viết lớp <code>SDPhanSo</code> có chứa hàm <code>main()</code> sử dụng lớp <code>PhanSo</code> :</p>
</li>
<li>
<p>Tạo phân số <code>a = 3/7</code>, <code>b = 4/9</code>. Hiển thị giá trị chúng ra màn hình</p>
</li>
<li>
<p>Tạo 2 phân số <code>x</code> và <code>y</code>. Nhập giá trị cho <code>x</code> và <code>y</code> từ bàn phím.</p>
</li>
<li>
<p>Hiển thị giá trị <code>nghịch đảo</code> của phân số <code>x</code> ra màn hình (<em>không làm thay đổi giá trị của <code>x</code></em>)</p>
</li>
<li>
<p>Tính tổng <code>x</code> và <code>y</code> và in kết quả ra màn hình</p>
</li>
<li>
<p>Nhập vào 1 danh sách gồm <code>n</code> phân số (<em>n : nhập từ bàn phím</em>)</p>
</li>
<li>
<p>Tính tổng <code>n</code> phân số đó</p>
</li>
<li>
<p>Tìm phân số <code>lớn nhất</code>  trong danh sách phân số trên.</p>
</li>
<li>
<p>Sắp xếp danh sách phân số theo thứ tự tăng dần</p>
</li>
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
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_3/PhanSo.java" target="_blank" rel="noopener noreferrer">PhanSo.java<OutboundLink/></a></td>
</tr>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_3/SDPhanSo.java" target="_blank" rel="noopener noreferrer">SDPhanSo.java<OutboundLink/></a></td>
</tr>
</tbody>
</table>
</template>
