<template><h1 id="bai-tap-cac-cau-lenh-sql" tabindex="-1"><a class="header-anchor" href="#bai-tap-cac-cau-lenh-sql" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-12-52-icons8-guru.png" alt="icons8gurupng">Bài tập Các câu lệnh SQL <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-18-59-icons8-1_cute.png" alt="icons8-1_cute.png"></h1>
<h2 id="_1-ta-co-bang-danh-sach-cong-trinh-nhu-sau" tabindex="-1"><a class="header-anchor" href="#_1-ta-co-bang-danh-sach-cong-trinh-nhu-sau" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-17-41-icons8-database_view.png" alt="icons8-database_view.png">1.Ta có bảng danh sách công trình như sau :</h2>
<table>
<thead>
<tr>
<th>KienTrucSu</th>
<th>ChuThau</th>
<th>ChuNhan</th>
<th>CongNhan</th>
<th>CongTrinh</th>
<th>ThamGia</th>
<th>ThietKe</th>
</tr>
</thead>
<tbody>
<tr>
<td>MSKTS <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png" alt="icons8-red_square.png" width="15"></td>
<td>MSCT <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-59-icons8-blue_square.png" alt="icons8-blue_square.png" width="15"></td>
<td>MSCH <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-46-icons8-brown_square.png" alt="icons8-brown_square.png" width="15"></td>
<td>MSCN <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png" alt="icons8-yellow_square.png" width="15"></td>
<td>STTCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png" title="" alt="icons8-purple_square.png" width="15"></td>
<td>MSCN <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png" alt="icons8-yellow_square.png" width="15"></td>
<td>MSKTS <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png" alt="icons8-red_square.png" width="15"></td>
</tr>
<tr>
<td>HoTenKTS</td>
<td>TenThau</td>
<td>TenChu</td>
<td>HoTenCN</td>
<td>TenCT</td>
<td>STTCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png" title="" alt="icons8-purple_square.png" width="15"></td>
<td>STTCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png" title="" alt="icons8-purple_square.png" width="15"></td>
</tr>
<tr>
<td>NamSinhKTS</td>
<td>DienThoai</td>
<td>DiaChiChu</td>
<td>NamSinhCN</td>
<td>DiaChiCT</td>
<td>NgayTG</td>
<td>ThuLao</td>
</tr>
<tr>
<td>Phai</td>
<td>DiachiThau</td>
<td></td>
<td>NamVaoNghe</td>
<td>TinhThanh</td>
<td>SoNgay</td>
<td></td>
</tr>
<tr>
<td>NoiTN</td>
<td></td>
<td></td>
<td>ChuyenMon</td>
<td>KinhPhi</td>
<td></td>
<td></td>
</tr>
<tr>
<td>DiachiKTS</td>
<td></td>
<td></td>
<td></td>
<td>MSCH <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-46-icons8-brown_square.png" alt="icons8-brown_square.png" width="15"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>MSCT <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-59-icons8-blue_square.png" alt="icons8-blue_square.png" width="15"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>NgayBD</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-09-24-icons8-how_quest.png" alt="icons8-how_quest.png"> Cách bước chuẩn bị tài nguyên như sau :</p>
<ul>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-00-54-icons8-download.png" alt="icons8-download.png"> <strong>B1</strong>: Download <code>Database</code> <strong>công trình</strong> <a href="https://github.com/Zenfection/CTU/raw/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/congtrinh.bak" target="_blank" rel="noopener noreferrer">tại đây<OutboundLink/></a></p>
</li>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-01-06-icons8-restore.png" alt="icons8-restore.png"> <strong>B2</strong>: Restore file <code>congtrinh.bak</code>  <a href="https://www.youtube.com/watch?v=oo4C-As6caI" target="_blank" rel="noopener noreferrer">như sau<OutboundLink/></a></p>
</li>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-01-39-icons8-landlord.png" alt="icons8-landlord.png"> <strong>B3</strong>: Thiết lập chủ sở hữu cho <code>database</code> vừa <strong>Restore</strong> để có thể dùng được tính năng như <code>Database Diagram</code> ==&gt; làm <a href="https://www.youtube.com/watch?v=Xbxu2hrssHk" target="_blank" rel="noopener noreferrer">như sau <OutboundLink/></a></p>
</li>
</ul>
</blockquote>
<hr>
<h2 id="_2-danh-sach-cac-cau-hoi" tabindex="-1"><a class="header-anchor" href="#_2-danh-sach-cac-cau-hoi" aria-hidden="true">#</a> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-15-19-04-icons8-questionnaire.png" alt="icons8-questionnaire.png" width="40"> 2.Danh sách các câu hỏi</h2>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-24-29-icons8_google_code_30px.png" alt="icons8googlecode30pxpng"> Source Code</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/bai1/query_1.sql" target="_blank" rel="noopener noreferrer">query_1.sql<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 1</strong>. Cho biết <strong>tên</strong> và <strong>địa chỉ</strong> các <code>công trình</code> do <code>chủ thầu</code> <em>Hồng Xuân Trường</em> thi công</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> CongT<span class="token punctuation">.</span>TENCT<span class="token punctuation">,</span> CongT<span class="token punctuation">.</span>DIACHICT
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT
<span class="token keyword">WHERE</span> CongT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> ChuT<span class="token punctuation">.</span>MSCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>TENTHAU <span class="token operator">=</span> <span class="token string">'Hong Xuan Truong'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>⇨ <code>5</code> records</p>
<hr>
</details>
<blockquote>
<p><strong>Câu 2</strong>.  Cho biết biết <strong>tên</strong> và <strong>địa chỉ</strong> liên lạc của các <code>chủ thầu</code> thi công <code>công trình</code> ở <em>Cần Thơ</em> cho <code>kiến trúc sư</code> <em>Lê Kim Dung</em> <code>thiết kết</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> ChuT<span class="token punctuation">.</span>TENTHAU<span class="token punctuation">,</span> ChuT<span class="token punctuation">.</span>DIACHITHAU
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>MSCT
<span class="token operator">AND</span> KTS<span class="token punctuation">.</span>HOTENKTS <span class="token operator">=</span> <span class="token string">'Le Kim Dung'</span>
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>TINHTHANH <span class="token operator">=</span> <span class="token string">'can tho'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>⇨ <code>1</code> record</p>
<hr>
</details>
<blockquote>
<p><strong>Câu 3</strong>. Cho biết <strong>họ tên</strong> và <strong>nơi tốt nghiệp</strong> của các <code>kiến trúc sư</code> đã <code>thiết kế</code> <code>công trình</code> <em>Khách Sạn Quốc Tế</em> ở <em>Cần Thơ</em></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> KTS<span class="token punctuation">.</span>HOTENKTS<span class="token punctuation">,</span> KTS<span class="token punctuation">.</span>NOITN
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>TENCT <span class="token operator">=</span> <span class="token string">'Khach san quoc te'</span>
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>TINHTHANH <span class="token operator">=</span> <span class="token string">'can tho'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>⇨ <code>2</code> records</p>
<hr>
</details>
<blockquote>
<p><strong>Câu 4</strong>. Cho biết <strong>họ tên</strong>, <strong>năm sinh</strong>, <strong>năm vào nghề</strong> của các <code>công nhân</code> có <strong>chuyên môn</strong> <em>hàn</em> hoặc <em>điện</em> đã <code>tham gia</code> các <code>công trình</code>mà <em>Lê Văn Sơn</em> là <code>chủ thầu</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> CN<span class="token punctuation">.</span>HOTENCN<span class="token punctuation">,</span> CN<span class="token punctuation">.</span>NGAYSINH
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>MSCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>TENTHAU <span class="token operator">=</span> <span class="token string">'Le Van Son'</span>
<span class="token operator">AND</span> <span class="token punctuation">(</span>CN<span class="token punctuation">.</span>CHUYENMON <span class="token operator">=</span> <span class="token string">'han'</span> <span class="token operator">OR</span> CN<span class="token punctuation">.</span>CHUYENMON <span class="token operator">=</span> <span class="token string">'dien'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p>🔥 <strong>Năm vào nghề</strong> không có trong record <code>công nhân</code> nên <strong>bỏ nha</strong></p>
</blockquote>
<p>⇨ <code>19</code> records</p>
<hr>
</details>
<blockquote>
<p><strong>Câu 5</strong>. Cho biết <strong>họ tên</strong> <code>công nhân</code> <code>tham gia</code> <code>công trình</code> <em>Khách sạn Quốc Tế</em> ở <em>Cần Thơ</em> trong giai đoạn từ <em>ngày <u>15/12/1994</u> đến ngày <u>31/12/1994</u></em> và <em>số ngày tham gia</em> tương ứng là bao nhiêu</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> CN<span class="token punctuation">.</span>HOTENCN<span class="token punctuation">,</span> TG<span class="token punctuation">.</span>SONGAY
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>TENCT <span class="token operator">=</span> <span class="token string">'Khach san quoc te'</span>
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>TINHTHANH <span class="token operator">=</span> <span class="token string">'can tho'</span>
<span class="token operator">AND</span> <span class="token punctuation">(</span>CongT<span class="token punctuation">.</span>NGAYBD <span class="token operator">BETWEEN</span> <span class="token string">'1994-12-15'</span> <span class="token operator">AND</span>  <span class="token string">'1994-12-31'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>⇨ <code>41</code> records</p>
<hr>
</details>
<blockquote>
<p><strong>Câu 6</strong>. Cho biết <strong>tên</strong> và <strong>địa chỉ</strong> của <code>công trình</code> mà <code>công nhân</code> <em>Nguyễn Hồng Gấm</em> có <code>tham gia</code> vào ngày <u>18/12/1994</u></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> 
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> CN<span class="token punctuation">.</span>HOTENCN <span class="token operator">=</span> <span class="token string">'Nguyen Hong Gam'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>⇨ <code>3</code> records</p>
<hr>
</details>
<blockquote>
<p><strong>Câu 7</strong>.  Cho biết <strong>họ tên</strong> và <strong>năm sinh</strong> của các <code>kiến trúc sư</code> đã <strong>tốt nghiệp</strong> ở <em>thành phố Hồ Chí Minh</em> và đã <code>thiết kế</code> <code>công trình</code> có <strong>kinh phí</strong> trên <u>400 triệu đồng</u></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> KTS<span class="token punctuation">.</span>NOITN <span class="token operator">=</span> <span class="token string">'tphcm'</span>
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>KINHPHI <span class="token operator">></span> <span class="token number">400</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote>
<p>⚠️ <strong>Thay đổi</strong> <code>CongT.KINHPHI &gt; 400</code> nếu nó sai nhé</p>
</blockquote>
<p>⇨ <code>11</code> records</p>
<hr>
</details>
<blockquote>
<p><strong>Câu 8</strong>. Cho biết <strong>họ tên</strong> và <strong>chuyên môn</strong> của các <code>công nhân</code> <code>tham gia</code> vào các <code>công trình</code> do <code>kiến trúc sư</code> <em>Nguyễn Anh Thư</em> thiết kế</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> CN<span class="token punctuation">.</span>HOTENCN<span class="token punctuation">,</span> CN<span class="token punctuation">.</span>CHUYENMON
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> KTS<span class="token punctuation">.</span>HOTENKTS <span class="token operator">=</span> <span class="token string">'nguyen anh thu'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>⇨ <code>116</code> records</p>
<hr>
</details>
<blockquote>
<p><strong>Câu 9</strong>. Cho biết <strong>họ tên</strong> <code>chủ nhân</code> của các <code>công trình</code> do <code>kiến trúc sư</code> <em>Nguyễn Anh Thư</em> <code>thiết kế</code> và <code>chủ thầu</code> là <em>Hoàng Công Bình</em></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> ChuN<span class="token punctuation">.</span>TENCHU
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>chunhan <span class="token keyword">as</span> ChuN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK<span class="token punctuation">,</span>dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> ChuN<span class="token punctuation">.</span>MSCH <span class="token operator">=</span> CongT<span class="token punctuation">.</span>MSCH
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>MSCT
<span class="token operator">AND</span> KTS<span class="token punctuation">.</span>HOTENKTS <span class="token operator">=</span> <span class="token string">'nguyen anh thu'</span> 
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>TENTHAU <span class="token operator">=</span> <span class="token string">'hoang cong binh'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>⇨ <code>0</code> records</p>
<hr>
</details>
<blockquote>
<p><strong>Câu 10</strong>. Cho biết tên các <code>công trình</code> do các <code>kiến trúc sư</code> <strong>tốt nghiệp</strong> ở <em>thành phố Hồ Chí Minh</em> <code>thiết kế</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> CongT<span class="token punctuation">.</span>TENCT
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> KTS<span class="token punctuation">.</span>NOITN <span class="token operator">=</span> <span class="token string">'tphcm'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>⇨ <code>13</code> records</p>
<hr>
</details>
</template>
