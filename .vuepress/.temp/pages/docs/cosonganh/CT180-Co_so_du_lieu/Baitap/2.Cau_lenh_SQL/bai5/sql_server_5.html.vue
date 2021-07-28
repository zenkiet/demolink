<template><h1 id="bai-tap-cac-cau-lenh-sql" tabindex="-1"><a class="header-anchor" href="#bai-tap-cac-cau-lenh-sql" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-12-52-icons8-guru.png" alt="icons8gurupng"> Bài tập Các câu lệnh SQL <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-17-21-09-icons8-5_cute.png" alt="icons8-5_cute.png"></h1>
<h2 id="_1-ta-co-bang-danh-sach-cong-trinh-nhu-sau" tabindex="-1"><a class="header-anchor" href="#_1-ta-co-bang-danh-sach-cong-trinh-nhu-sau" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-17-41-icons8-database_view.png" alt="icons8-database_view.png"> 1.Ta có bảng danh sách công trình như sau :</h2>
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
<td>MSKTS <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png" alt="icons8redsquarepng"></td>
<td>MSCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-59-icons8-blue_square.png" alt="icons8bluesquarepng"></td>
<td>MSCH <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-46-icons8-brown_square.png" alt="icons8brownsquarepng"></td>
<td>MSCN <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png" alt="icons8yellowsquarepng"></td>
<td>STTCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png" alt="icons8purplesquarepng"></td>
<td>MSCN <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png" alt="icons8yellowsquarepng"></td>
<td>MSKTS <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png" alt="icons8redsquarepng"></td>
</tr>
<tr>
<td>HoTenKTS</td>
<td>TenThau</td>
<td>TenChu</td>
<td>HoTenCN</td>
<td>TenCT</td>
<td>STTCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png" alt="icons8purplesquarepng"></td>
<td>STTCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png" alt="icons8purplesquarepng"></td>
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
<td>MSCH <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-46-icons8-brown_square.png" alt="icons8brownsquarepng"></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>MSCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-59-icons8-blue_square.png" alt="icons8bluesquarepng"></td>
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
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-09-24-icons8-how_quest.png" alt="icons8howquestpng"> Cách bước chuẩn bị tài nguyên như sau :</p>
<ul>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-00-54-icons8-download.png" alt="icons8downloadpng"> <strong>B1</strong>: Download <code>Database</code> <strong>công trình</strong> <a href="https://github.com/Zenfection/CTU/raw/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/congtrinh.bak" target="_blank" rel="noopener noreferrer">tại đây<OutboundLink/></a></p>
</li>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-01-06-icons8-restore.png" alt="icons8restorepng"> <strong>B2</strong>: Restore file <code>congtrinh.bak</code> <a href="https://www.youtube.com/watch?v=oo4C-As6caI" target="_blank" rel="noopener noreferrer">như sau<OutboundLink/></a></p>
</li>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-01-39-icons8-landlord.png" alt="icons8landlordpng"> <strong>B3</strong>: Thiết lập chủ sở hữu cho <code>database</code> vừa <strong>Restore</strong> để có thể dùng được tính năng như <code>Database Diagram</code> ==&gt; làm <a href="https://www.youtube.com/watch?v=Xbxu2hrssHk" target="_blank" rel="noopener noreferrer">như sau<OutboundLink/></a></p>
</li>
</ul>
</blockquote>
<hr>
<h2 id="_2-danh-sach-cac-cau-hoi" tabindex="-1"><a class="header-anchor" href="#_2-danh-sach-cac-cau-hoi" aria-hidden="true">#</a> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-15-19-04-icons8-questionnaire.png" alt="icons8-questionnaire.png" width="40"> 2.Danh sách các câu hỏi</h2>
<table>
<thead>
<tr>
<th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-24-29-icons8_google_code_30px.png" alt="icons8googlecode30pxpng"> Source Code</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/bai1/query_5.sql" target="_blank" rel="noopener noreferrer">query_5.sql<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 1</strong>: Cho biết <strong>mã số</strong>, <strong>họ tên</strong> <code>công nhân</code> và <strong>tên</strong> <code>công trình</code> mà <code>công nhân</code> đó <code>tham gia</code> kể cả <code>công nhân</code> không có <code>tham gia</code> <code>công trình</code> nào.</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>⇨</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2</strong>: Cho biết <strong>mã số</strong>, <strong>họ tên</strong> <code>công nhân</code> <u>không</u> <code>tham gia</code> <code>công trình</code> nào.</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> CN<span class="token punctuation">.</span>MSCN<span class="token punctuation">,</span>CN<span class="token punctuation">.</span>HOTENCN
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN

<span class="token keyword">EXCEPT</span>

<span class="token keyword">SELECT</span> CN<span class="token punctuation">.</span>MSCN<span class="token punctuation">,</span> CN<span class="token punctuation">.</span>HOTENCN
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>⇨  <code>7</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3</strong>: Cho  biết <strong>số</strong> <code>công nhân</code> <code>tham gia</code> vào mỗi <code>công trình</code>, kể cả <code>công trình</code> không có <code>công nhân</code> <code>tham gia</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> <span class="token keyword">temp</span> <span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> TENCT
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh 

<span class="token keyword">EXCEPT</span>

<span class="token keyword">SELECT</span> CongT<span class="token punctuation">.</span>TENCT
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
GO

<span class="token keyword">SELECT</span> CongT<span class="token punctuation">.</span>TENCT<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> CongT<span class="token punctuation">.</span>TENCT

<span class="token keyword">UNION</span>

<span class="token keyword">SELECT</span> TENCT<span class="token punctuation">,</span> <span class="token number">0</span>
<span class="token keyword">FROM</span> <span class="token keyword">temp</span>
GO

<span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> <span class="token keyword">temp</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>⇨  50 <code>records</code></p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4</strong>: Cho biết <strong>số</strong> <code>công trình</code> mà mỗi <code>công nhân</code> <code>tham gia</code>, kể cả <code>công nhân</code> <u>không có</u> <code>tham gia</code> <code>công trình</code> nào</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> <span class="token keyword">temp</span> <span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> CN<span class="token punctuation">.</span>HOTENCN
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN

<span class="token keyword">EXCEPT</span>

<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> CN<span class="token punctuation">.</span>HOTENCN
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
GO


<span class="token keyword">SELECT</span> CN<span class="token punctuation">.</span>HOTENCN<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">as</span> So_CT_TG
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> CN<span class="token punctuation">.</span>HOTENCN

<span class="token keyword">UNION</span>

<span class="token keyword">SELECT</span> HOTENCN<span class="token punctuation">,</span> <span class="token number">0</span>
<span class="token keyword">FROM</span> <span class="token keyword">temp</span>
GO

<span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> <span class="token keyword">temp</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>⇨  <code>52</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 5</strong>: Cho biết <strong>họ tên</strong> và <strong>nơi  tốt nghiệp</strong> của <code>kiến trúc sư</code> <u>không</u> <code>thiết kế</code> <code>công trình</code> nào</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> KTS<span class="token punctuation">.</span>HOTENKTS<span class="token punctuation">,</span> KTS<span class="token punctuation">.</span>NOITN
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS

<span class="token keyword">EXCEPT</span>

<span class="token keyword">SELECT</span> KTS<span class="token punctuation">.</span>HOTENKTS<span class="token punctuation">,</span> KTS<span class="token punctuation">.</span>NOITN
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>⇨  <code>10</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 6</strong>: Cho biết <strong>tên</strong> <code>công trình</code> mà chưa có <code>kiến trúc sư</code> nào <code>thiết kế</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> CongT<span class="token punctuation">.</span>TENCT
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT

<span class="token keyword">EXCEPT</span>

<span class="token keyword">SELECT</span> CongT<span class="token punctuation">.</span>TENCT
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>⇨  <code>40</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 7</strong>: Viết <strong>thủ tục</strong> cho biết <u>tổng</u> <strong>kinh phí</strong> các <code>công trình</code> theo từng <strong>tỉnh thành</strong></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> sumKINHPHI_for_TINHTHANH
<span class="token keyword">AS</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> CongT<span class="token punctuation">.</span>TINHTHANH<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span><span class="token keyword">CONVERT</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> CongT<span class="token punctuation">.</span>KINHPHI<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT
    <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> CongT<span class="token punctuation">.</span>TINHTHANH
<span class="token keyword">END</span>
GO

<span class="token keyword">EXEC</span>  sumKINHPHI_for_TINHTHANH
GO

<span class="token comment">--DROP PROCEDURE sumKINHPHI_for_TINHTHANH</span>
<span class="token comment">--Thực hiện lệnh drop nếu muốn xoá</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>⇨  <code>7</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 8</strong>: Viết <strong>thủ tục</strong> cho biết <strong>kinh phí</strong> <u>nhỏ nhất</u> của các <code>công trình</code> ở <strong>tỉnh thành</strong>, với <strong>tỉnh thành</strong> là <u>tham số</u></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">PROC</span> minKINHPHI_for_TINHTHANH
<span class="token variable">@tinhthanh</span> NVARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token keyword">AS</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">SELECT</span> CongT<span class="token punctuation">.</span>TINHTHANH<span class="token punctuation">,</span> <span class="token function">MIN</span><span class="token punctuation">(</span><span class="token keyword">CONVERT</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> CongT<span class="token punctuation">.</span>KINHPHI<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> minKINHPHI
    <span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT
    <span class="token keyword">WHERE</span> CongT<span class="token punctuation">.</span>TINHTHANH <span class="token operator">=</span> <span class="token variable">@tinhthanh</span>
    <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> CongT<span class="token punctuation">.</span>TINHTHANH
<span class="token keyword">END</span>
GO

<span class="token keyword">EXEC</span> minKINHPHI_for_TINHTHANH <span class="token variable">@tinhthanh</span> <span class="token operator">=</span> <span class="token string">'&lt;tên tỉnh thành>'</span>
GO

<span class="token comment">--DROP PROC minKINHPHI_for_TINHTHANH</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>⇨  <code>1</code> record</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 9</strong>: Viết <strong>hàm</strong> đếm <strong>số</strong> <code>kiến trúc sư</code> đã <code>thiết kế</code> <code>công trình</code>. In kết quả lên màn hình</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> dbo<span class="token punctuation">.</span>count_KTS_TK<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">RETURNS</span> <span class="token keyword">INT</span>
<span class="token keyword">AS</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">DECLARE</span> <span class="token variable">@count</span> <span class="token keyword">INT</span>

    <span class="token keyword">SELECT</span> <span class="token variable">@count</span> <span class="token operator">=</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
    <span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK
    <span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
    <span class="token operator">AND</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS

    <span class="token keyword">RETURN</span> <span class="token variable">@count</span>
<span class="token keyword">END</span>
GO

<span class="token keyword">PRINT</span> dbo<span class="token punctuation">.</span>count_KTS_TK<span class="token punctuation">(</span><span class="token punctuation">)</span>
GO

<span class="token comment">--DROP FUNCTION dbo.count_KTS_TK</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>⇨  <code>1</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 10</strong>: Viết <strong>hàm</strong> đếm <strong>số</strong> <code>kiến trúc sư</code> <code>thiết kế</code> <code>công trình</code> ở <strong>tỉnh thành</strong>, vởi <strong>tỉnh thành</strong> là <u>tham số</u>. In kết quả lên màn hình</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> countKTS_for_TINHTHANH<span class="token punctuation">(</span><span class="token variable">@tinhthanh</span> NVARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">RETURNS</span> <span class="token keyword">TABLE</span>
<span class="token keyword">AS</span>
    <span class="token keyword">RETURN</span>
    <span class="token keyword">SELECT</span> KTS<span class="token punctuation">.</span>HOTENKTS<span class="token punctuation">,</span> CongT<span class="token punctuation">.</span>TINHTHANH
    <span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK
    <span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
    <span class="token operator">AND</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
    <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> KTS<span class="token punctuation">.</span>HOTENKTS<span class="token punctuation">,</span> CongT<span class="token punctuation">.</span>TINHTHANH
    <span class="token keyword">HAVING</span> CongT<span class="token punctuation">.</span>TINHTHANH <span class="token operator">=</span> <span class="token variable">@tinhthanh</span>
GO

<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>countKTS_for_TINHTHANH<span class="token punctuation">(</span><span class="token string">'&lt;tên tỉnh thành>'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
GO 

<span class="token comment">--DROP FUNCTION countKTS_for_TINHTHANH</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>⇨  Tuỳ đầu vào ==&gt; records</p>
<hr>
</details></template>
