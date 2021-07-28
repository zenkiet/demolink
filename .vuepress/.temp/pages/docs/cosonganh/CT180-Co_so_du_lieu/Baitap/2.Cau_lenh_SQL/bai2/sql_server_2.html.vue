<template><h1 id="bai-tap-cac-cau-lenh-sql" tabindex="-1"><a class="header-anchor" href="#bai-tap-cac-cau-lenh-sql" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-12-52-icons8-guru.png" alt="icons8gurupng">Bài tập Các câu lệnh SQL <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-46-27-icons8-2_cute.png" alt="icons8-2_cute.png"></h1>
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
<td>S</td>
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
<td><a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/bai2/query_2.sql" target="_blank" rel="noopener noreferrer">query_2.sql<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 1</strong>: Cho biết <strong>họ tên</strong> các <code>kiến trúc sư</code> vừa <code>thiết kế</code> các <code>công trình</code> do <code>chủ thầu</code> <em>Hoàng Xuân Bình</em> thi công, vừa <code>thiết kế</code> các <code>công trình</code> do <code>chủ thầu</code> <em>Lê Văn Sơn</em> thi công</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> KTS<span class="token punctuation">.</span>HOTENKTS
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT<span class="token punctuation">,</span>dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>MSCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>TENTHAU <span class="token operator">=</span> <span class="token string">'hoang cong binh'</span>

<span class="token keyword">INTERSECT</span>

<span class="token keyword">SELECT</span> KTS<span class="token punctuation">.</span>HOTENKTS
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT<span class="token punctuation">,</span>dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>MSCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>TENTHAU <span class="token operator">=</span> <span class="token string">'le van son'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>⇨  <code>3</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2</strong>: Cho biết <strong>tên</strong> <code>công trình</code> có <strong>kinh phí</strong> <em>cao nhất</em></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@MaxKINHPHI</span> <span class="token keyword">INT</span>

<span class="token keyword">SELECT</span>  <span class="token variable">@MaxKINHPHI</span> <span class="token operator">=</span> <span class="token function">MAX</span><span class="token punctuation">(</span>KINHPHI<span class="token punctuation">)</span> <span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh
<span class="token keyword">SELECT</span> TENCT
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh
<span class="token keyword">WHERE</span> KINHPHI <span class="token operator">=</span> <span class="token variable">@MaxKINHPHI</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>⇨  <code>1</code> record</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3</strong>: Cho biết <strong>họ tên</strong> các <code>công nhân</code> có <code>tham gia</code> các <code>công trình</code> ở <em>Cần thơ</em>, nhưng <u>không có</u> <code>tham gia</code> <code>công trình</code> ở <em>Vĩnh Long</em></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> CN<span class="token punctuation">.</span>HOTENCN
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>TINHTHANH <span class="token operator">=</span> <span class="token string">'can tho'</span>

<span class="token keyword">EXCEPT</span>

<span class="token keyword">SELECT</span> CN<span class="token punctuation">.</span>HOTENCN
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>TINHTHANH <span class="token operator">=</span> <span class="token string">'vinh long'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>⇨  <code>11</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4</strong>: Cho biết <strong>họ tên</strong> của các <code>chủ thầu</code> đã thi công các <code>công trình</code> có <strong>kinh phí</strong> <u>lớn hơn tất cả</u> các <strong>kinh phí</strong> của <code>công trình</code> do <code>chủ thầu</code> là <em>Hoàng Công Bình</em> thi công</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@MaxKINHPHI_hoangcongbinh</span> <span class="token keyword">INT</span>

<span class="token keyword">SELECT</span> <span class="token variable">@MaxKINHPHI_hoangcongbinh</span> <span class="token operator">=</span> <span class="token function">MAX</span><span class="token punctuation">(</span><span class="token keyword">CONVERT</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> CongT<span class="token punctuation">.</span>KINHPHI<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT<span class="token punctuation">,</span>dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>MSCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>TENTHAU <span class="token operator">=</span> <span class="token string">'hoang cong binh'</span>

<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> ChuT<span class="token punctuation">.</span>TENTHAU
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT<span class="token punctuation">,</span>dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> ChuT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>MSCT
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>KINHPHI <span class="token operator">></span> <span class="token variable">@MaxKINHPHI_hoangcongbinh</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote>
<p>💡 Dùng <code>CONVERT</code> chuyển sang <code>int</code> vì <code>CongT.KINHPHI</code> là <code>nvarchar</code></p>
</blockquote>
<p>⇨  <code>2</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 5</strong>: Cho biết <strong>họ tên</strong> các <code>kiến trúc sư</code> có <strong>thù lao</strong> <code>thiết kế</code> cho một <code>công trình</code> nao đó <u>dưới <strong>thù lao</strong> trung bình</u> của <u>tất cả</u> các <code>công trình</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@AVG_THULAO</span> <span class="token keyword">INT</span>

<span class="token keyword">SELECT</span> <span class="token variable">@AVG_THULAO</span> <span class="token operator">=</span> <span class="token function">AVG</span><span class="token punctuation">(</span><span class="token keyword">CONVERT</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> THULAO<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK<span class="token punctuation">,</span>dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span>dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT

<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> KTS<span class="token punctuation">.</span>HOTENKTS
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK<span class="token punctuation">,</span>dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span>dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>THULAO <span class="token operator">&lt;</span> <span class="token variable">@AVG_THULAO</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote>
<p>💡 Dùng <code>CONVERT</code> chuyển sang <code>int</code> vì <code>TK.THULAO</code> là <code>nvarchar</code></p>
</blockquote>
<p>⇨  <code>9</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 6</strong>: Cho biết <strong>họ tên</strong> và <strong>địa chỉ</strong> những <code>chủ thầu</code> là <code>chủ thầu</code> của các <code>công trình</code> có <strong>kinh phí</strong> <u>thấp nhất</u>.</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@Min_KINHPHI</span> <span class="token keyword">INT</span>

<span class="token keyword">SELECT</span> <span class="token variable">@Min_KINHPHI</span> <span class="token operator">=</span> <span class="token function">MIN</span><span class="token punctuation">(</span><span class="token keyword">CONVERT</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> CongT<span class="token punctuation">.</span>KINHPHI<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT
<span class="token keyword">WHERE</span> ChuT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>MSCT

<span class="token keyword">SELECT</span> ChuT<span class="token punctuation">.</span>TENTHAU<span class="token punctuation">,</span>ChuT<span class="token punctuation">.</span>DIACHITHAU
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT
<span class="token keyword">WHERE</span> ChuT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>MSCT
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>KINHPHI <span class="token operator">=</span> <span class="token variable">@Min_KINHPHI</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>⇨  <code>1</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 7</strong>: Cho biết <strong>họ tên</strong> và <strong>chuyên môn</strong> của các <code>công nhân</code> <code>tham gia</code> các <code>công trình</code> do <code>kiến trúc sư</code> <em>Lê Thanh Tùng</em> <code>thiết kế</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> CN<span class="token punctuation">.</span>HOTENCN<span class="token punctuation">,</span> CN<span class="token punctuation">.</span>CHUYENMON
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>kientrucsu <span class="token keyword">as</span> KTS<span class="token punctuation">,</span>dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thietke <span class="token keyword">as</span> TK<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TK<span class="token punctuation">.</span>MSKTS <span class="token operator">=</span> KTS<span class="token punctuation">.</span>MSKTS
<span class="token operator">AND</span> TK<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> KTS<span class="token punctuation">.</span>HOTENKTS <span class="token operator">=</span> <span class="token string">'le thanh tung'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>⇨  <code>59</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 8</strong>: Cho biết các <u>cặp</u> <strong>họ tên</strong> của các <code>chủ thầu</code> là <code>chủ thầu</code> của các <code>công trình</code> tại cùng một <strong>tỉnh thành</strong> nào đó.</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> <span class="token keyword">temp</span> <span class="token keyword">as</span> 
<span class="token keyword">SELECT</span> ChuT<span class="token punctuation">.</span>TENTHAU<span class="token punctuation">,</span> CongT<span class="token punctuation">.</span>TINHTHANH
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>chuthau <span class="token keyword">as</span> ChuT
<span class="token keyword">WHERE</span> CongT<span class="token punctuation">.</span>MSCT <span class="token operator">=</span> ChuT<span class="token punctuation">.</span>MSCT
GO

<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> a<span class="token punctuation">.</span>TENTHAU<span class="token punctuation">,</span>b<span class="token punctuation">.</span>TENTHAU 
<span class="token keyword">FROM</span> <span class="token keyword">temp</span> <span class="token keyword">as</span> a
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token keyword">temp</span> <span class="token keyword">as</span> b
<span class="token keyword">ON</span> a<span class="token punctuation">.</span>TINHTHANH <span class="token operator">=</span> b<span class="token punctuation">.</span>TINHTHANH
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>TENTHAU <span class="token operator">></span> b<span class="token punctuation">.</span>TENTHAU

<span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> <span class="token keyword">temp</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>⇨  <code>65</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 9</strong>: Cho biết các <u>cặp</u> <strong>họ tên</strong> của các <code>công nhân</code> có <code>tham gia</code> chung với nhau <u>ít nhất</u> <strong>2</strong> <code>công trình</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> <span class="token keyword">temp</span> <span class="token keyword">AS</span>
<span class="token keyword">SELECT</span> CN<span class="token punctuation">.</span>HOTENCN<span class="token punctuation">,</span> TG<span class="token punctuation">.</span>STTCT
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> CN<span class="token punctuation">.</span>HOTENCN<span class="token punctuation">,</span>TG<span class="token punctuation">.</span>STTCT
GO

<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> a<span class="token punctuation">.</span>HOTENCN<span class="token punctuation">,</span> b<span class="token punctuation">.</span>HOTENCN 
<span class="token keyword">FROM</span> <span class="token keyword">temp</span> <span class="token keyword">as</span> a
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token keyword">temp</span> <span class="token keyword">as</span> b
<span class="token keyword">ON</span> a<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> b<span class="token punctuation">.</span>STTCT
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>HOTENCN <span class="token operator">></span> b<span class="token punctuation">.</span>HOTENCN
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> a<span class="token punctuation">.</span>HOTENCN<span class="token punctuation">,</span> b<span class="token punctuation">.</span>HOTENCN
<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>STTCT<span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">2</span>

<span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> <span class="token keyword">temp</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>⇨  <code>900</code> records</p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 10</strong>: Cho biết <strong>họ tên</strong> <code>công nhân</code> <code>tham gia</code> các <code>công trình</code> có <strong>kinh phí</strong> <u>lớn hơn</u> <strong>kinh phí</strong> <u>trung bình</u> của các <code>công trình</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@AVG_KINHPHI</span> <span class="token keyword">INT</span>

<span class="token keyword">SELECT</span> <span class="token variable">@AVG_KINHPHI</span> <span class="token operator">=</span> <span class="token function">AVG</span><span class="token punctuation">(</span><span class="token keyword">CONVERT</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> CongT<span class="token punctuation">.</span>KINHPHI<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT

<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> CN<span class="token punctuation">.</span>HOTENCN
<span class="token keyword">FROM</span> dbo<span class="token punctuation">.</span>congtrinh <span class="token keyword">as</span> CongT<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>congnhan <span class="token keyword">as</span> CN<span class="token punctuation">,</span> dbo<span class="token punctuation">.</span>thamgia <span class="token keyword">as</span> TG
<span class="token keyword">WHERE</span> TG<span class="token punctuation">.</span>MSCN <span class="token operator">=</span> CN<span class="token punctuation">.</span>MSCN
<span class="token operator">AND</span> TG<span class="token punctuation">.</span>STTCT <span class="token operator">=</span> CongT<span class="token punctuation">.</span>STTCT
<span class="token operator">AND</span> CongT<span class="token punctuation">.</span>KINHPHI <span class="token operator">></span> <span class="token variable">@AVG_KINHPHI</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote>
<p>💡 Dùng <code>CONVERT</code> chuyển sang <code>int</code> vì <code>CongT.KINHPHI</code> là <code>nvarchar</code></p>
</blockquote>
<p>⇨ <code>51</code> records</p>
<hr>
</details>
</template>
