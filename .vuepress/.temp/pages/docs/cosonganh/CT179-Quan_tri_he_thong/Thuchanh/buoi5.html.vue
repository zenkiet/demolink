<template><h1 id="samba-dns-va-firewall" tabindex="-1"><a class="header-anchor" href="#samba-dns-va-firewall" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-46-11-icons8-dns.png" alt="icons8-dns.png"><code>SAMBA</code>, <code>DNS</code> và <code>Firewall</code> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-45-59-icons8-firewall.png" alt="icons8-firewall.png"></h1>
<h2 id="_1-cai-đat-centos" tabindex="-1"><a class="header-anchor" href="#_1-cai-đat-centos" aria-hidden="true">#</a> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-29-34-icons8-centos.png" alt="icons8-centos.png" width="40"> 1. Cài đặt CentOS</h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 1.1</strong> Thực hiện cài đặt <code>CentOS 6</code> (<em>hoặc <code>CentOS 7</code>, <code>8</code></em>) vào máy tính cá nhân (<em>hoặc máy ảo</em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Link file ISO <a href="https://www.centos.org/download/" target="_blank" rel="noopener noreferrer">CentOS 8<OutboundLink/></a></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 1.2</strong> Cài đặt dịch vụ <code>Web Server</code> trên máy ảo. Tạo một trang web đơn giản <code>index.html</code> lưu vào thư mục <code>/var/www/html/myweb</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Đã làm trong bài thực hành <a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT179-Quan_tri_he_thong/Thuchanh/buoi4.md" target="_blank" rel="noopener noreferrer">Buổi 4<OutboundLink/></a></p>
</details>
<hr>
<h2 id="_2-cai-đat-va-cau-hinh-samba" tabindex="-1"><a class="header-anchor" href="#_2-cai-đat-va-cau-hinh-samba" aria-hidden="true">#</a> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-49-34-linux_windows.png" alt="linux_windows.png" width="40"> 2. Cài đặt và cấu hình <code>SAMBA</code></h2>
<p><code>Samba</code> là dịch vụ chia sẻ <code>file</code> giữa các nền tảng khác nhau như <code>Windows</code> và <code>Linux</code> bằng cách sử dụng giao thức <code>SMB/CIFS</code>.</p>
<p>Thực hiện các yêu cầu sau và Chụp màn hình minh hoạ<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng"></p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.1</strong>. Cài đặt dịch vụ <code>Samba</code>  bằng lệnh :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ yum <span class="token function">install</span> samba
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-18-16-Screenshot from 2021-05-09 11-04-12.png" alt="Screenshot from 2021-05-09 11-04-12.png"></p>
<p>==&gt; Bạn có thể gõ <code>samba --version</code> để kiểm tra đã cài đặt chưa.</p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.2</strong>. Tạo người dùng và nhóm người dùng chia sẻ dữ liệu:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ adduser tuanthai
$ <span class="token function">passwd</span> tuanthai
$ <span class="token function">groupadd</span> lecturers
$ <span class="token function">usermod</span> -aG lecturers tuanthai
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-04-43-Screenshot from 2021-05-09 11-06-34.png" alt="Screenshot from 2021-05-09 11-06-34.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.3</strong>. Tạo thư mục cần chia sẻ và phân quyền :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> /data
$ <span class="token function">chgrp</span> lecturers /data
$ <span class="token function">chmod</span> -R <span class="token number">775</span> /data
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-06-02-Screenshot from 2021-05-09 11-12-45.png" alt="Screenshot from 2021-05-09 11-12-45.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.4</strong>. Cấu hình dịch vụ <code>SAMBA</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cp</span> /etc/samba/smb.conf /etc/samba/smb.conf.orig
$ <span class="token function">nano</span> /etc/samba/smb.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-textile ext-textile line-numbers-mode"><pre v-pre class="language-textile"><code><span class="token phrase">...
[data]
    comment = Shared folder for lecturers
    path = /data
    browsable = yes
    writable = yes
    read only = no
    valid users = @lecturers
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-06-49-Screenshot from 2021-05-09 11-16-49.png" alt="Screenshot from 2021-05-09 11-16-49.png"></p>
<blockquote>
<p>💡 Giải thích chi tiết :</p>
<ul>
<li>
<p><code>comment</code> : chú thích</p>
</li>
<li>
<p><code>path</code> : đường dẫn đến thư mục cần kết nối <code>Samba</code></p>
</li>
<li>
<p><code>browsafe</code> : kiểm soát việc chia sẻ file có được nhìn thấy trong chế độ thực</p>
</li>
<li>
<p><code>writable</code> : Cho phép ghi file (<em>đảo ngược với <code>read only</code></em>)</p>
</li>
<li>
<p><code>read only</code>  : Chỉ cho phép đọc (<em>đảo ngược với <code>read only</code></em>)</p>
</li>
<li>
<p><code>valid users</code> : người dùng có hiệu lực</p>
</li>
</ul>
</blockquote>
<p>==&gt; Tham khảo cách <code>config</code> <a href="https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html" target="_blank" rel="noopener noreferrer">tại đây<OutboundLink/></a></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.5</strong>. Thêm người dùng cho dịch vụ <code>SAMBA</code> bằng lệnh :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ smbpasswd -a tuanthai
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-07-42-Screenshot from 2021-05-09 11-17-34.png" alt="Screenshot from 2021-05-09 11-17-34.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.6</strong>. Cấu hình <code>SELINUX</code> cho phép <code>Samba</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ setsebool -P samba_export_all_rw on
$ setsebool -P samba_enable_home_dirs on
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p><code>samba_export_all_rw</code> : cho phép xuất bất kỳ <code>files</code> hay <code>diretories</code> nào, cho phép quyền <strong>đọc</strong> và <strong>ghi</strong></p>
</li>
<li>
<p><code>samba_enable_home_dirs on</code> : cho phép chia sẻ thư mục chính của người dùng</p>
</li>
</ul>
<p>==&gt; Tham khảo <a href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/managing_confined_services/sect-managing_confined_services-samba-booleans" target="_blank" rel="noopener noreferrer">tại đây<OutboundLink/></a></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.7</strong>. Tắt tường lửa</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">service</span> iptables stop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-10-12-Screenshot from 2021-05-09 11-19-36.png" alt="Screenshot from 2021-05-09 11-19-36.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.8</strong>. Khởi động lại dịch vụ <code>Samba</code> :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">service</span> smb start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-10-55-Screenshot from 2021-05-09 11-20-05.png" alt="Screenshot from 2021-05-09 11-20-05.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.9</strong>. Trên máy <code>Windows</code>, bật tính năng hỗ trợ <code>SMB1</code> :</p>
<p>Mở <code>Control Panel</code> ➞ <code>Programs</code> ➞ <code>Turn Windows feature on or off</code> ➞ <code>SMB 1.0/CIFS FIle Sharing Support</code> ➞ Chọn <code>SMB 1.0/CIFS Client</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-13-07-32-Screen Shot 2021-05-07 at 13.07.25.png" alt="Screen Shot 2021-05-07 at 13.07.25.png"></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Cài <code>CentOS</code> trên ổ cứng, không sử dụng máy ảo, nên không làm bước này</p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.10</strong>. Trên <code>File Exployer</code>, chọn tính năng <code>Add a network location</code> để kết nối tới <code>Samba server</code> sử dụng địa chỉ <code>\\&lt;IP máy CentOS&gt;\data</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Thực hiện các bước sau để kết nối giao thức <code>Samba</code> trên <code>CentOS</code> :</p>
<ul>
<li>
<p><strong>B1</strong>: Vào <code>Nautilus</code> (<em>hay còn gọi là Finder</em>) ⇨ Chọn <code>Other Locations</code> ⇨ Điền <code>IP</code> của máy chạy <code>Samba</code> ⇨ Chọn <code>Connect</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-12-52-Screenshot from 2021-05-09 12-03-12.png" alt="Screenshot from 2021-05-09 12-03-12.png"></p>
</li>
<li>
<p><strong>B2</strong>: Chọn <code>Registerd User</code> và điền <em>tài khoản</em> và <em>mật khẩu</em> đăng ký <code>Samba</code> ở trên ⇨ Chọn <code>Connect</code></p>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-14-31-Screenshot from 2021-05-09 12-24-39.png" title="" alt="Screenshot from 2021-05-09 12-24-39.png" width="344">
</li>
<li>
<p><strong>B3</strong>: Bạn có thể tạo <code>file</code> (<em>ví dụ tạo <code>file1</code> như sau</em>)</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-16-48-Screenshot from 2021-05-09 12-19-10.png" alt="Screenshot from 2021-05-09 12-19-10.png"></p>
<blockquote>
<p>💡 Vào máy kết nối <code>Samba</code> kiểm tra như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-17-11-Screenshot from 2021-05-09 12-19-36.png" alt="Screenshot from 2021-05-09 12-19-36.png"></p>
<p>==&gt; Như đã thấy <code>file1</code> đã xuất hiện</p>
</blockquote>
</li>
</ul>
</details>
<hr>
<h2 id="_3-cai-đat-va-cau-hinh-dich-vu-dns" tabindex="-1"><a class="header-anchor" href="#_3-cai-đat-va-cau-hinh-dich-vu-dns" aria-hidden="true">#</a> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-49-54-icons8-dns.png" alt="icons8-dns.png" width="40"> 3. Cài đặt và cấu hình dịch vụ <code>DNS</code></h2>
<p><code>DNS</code> (<em>Domain Name System</em>) là giải pháp dùng tên miền thay cho địa chỉ <code>IP</code> khó nhớ khi sử dụng các dịch vụ mạng. Truy cập đến <code>website</code> của <code>Khoa CNTT-ĐH Cần Thơ</code> bằng địa chỉ nào dễ hơn ?</p>
<table>
<thead>
<tr>
<th>http://203.162.36.146</th>
<th>http://cit.ctu.edu.vn</th>
</tr>
</thead>
</table>
<p>Bạn cần phải cài đặt phần mềm <code>BIND</code> trên <code>CentOS</code> để phân giải tên miền <code>qtht.com.vn</code></p>
<p>Thực hiện các yêu cầu sau và Chụp màn hình minh hoạ<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng"></p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.1</strong>. Cài đặt <code>BIND</code> và các công cụ cần thiết :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ yum <span class="token function">install</span> <span class="token builtin class-name">bind</span> bind-utils
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-04-46-Screenshot from 2021-05-09 12-33-54.png" alt="Screenshot from 2021-05-09 12-33-54.png"></p>
<p>==&gt; Bạn có thể gõ <code>named -v</code> để kiểm tra <code>bind-utils</code> đã cài chưa.</p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.2</strong>. Cài hình <code>DNS server</code> :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">nano</span> /etc/named.conf 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<div class="language-textile ext-textile line-numbers-mode"><pre v-pre class="language-textile"><code><span class="token phrase">...
option {
    listen-on port 53 { 127.0.0.1; any;};
    ...
    allow-query    { localhost; any;};
    recursion yes;
    ...
};</span>

<span class="token phrase">loggin {
    ...
    };
};</span>

<span class="token phrase">zone "." IN {
    ...
};</span>

<span class="token phrase">zone "&lt;tên miền>" IN {
    type master;
    file "forward.qtht";
    allow-update { none; };
};</span>

<span class="token phrase">zone "&lt;24bit mạng đảo chiều>.in-addr.arpa" IN {
    type master;
    file "reverse.qtht";
    allow-update { none; };
};
...
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></blockquote>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-10-02-Screenshot from 2021-05-09 12-36-20.png" alt="Screenshot from 2021-05-09 12-36-20.png"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-28-17-Screenshot from 2021-05-09 13-17-02.png" alt="Screenshot from 2021-05-09 13-17-02.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.3</strong>. Tạo tập tin cấu hình phân giải xuôi:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cp</span> /var/named/named.localhost /var/named/forward.qtht
$ <span class="token function">chgrp</span> named /var/named/forward.qtht
$ <span class="token function">nano</span> /var/named/forward.qtht
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<div class="language-textile ext-textile line-numbers-mode"><pre v-pre class="language-textile"><code><span class="token phrase">$TTL 1D
<span class="token inline"><span class="token punctuation">@</span><span class="token code keyword">   IN  SOA </span><span class="token punctuation">@</span></span> &lt;tên miền>. (
0     ;Serial
1D    ;Refresh
1H    ;Retry
1W    ;Expire
3H    ;Minimum TTL
)
@    IN    NS    dns.qtht.com.vn.
dns  IN    A    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IP</span> <span class="token attr-name">máy</span><span class="token punctuation">></span></span>
<span class="token phrase">www  IN    A    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IP</span> <span class="token attr-name">máy</span><span class="token punctuation">></span></span>
<span class="token phrase">htql IN    A    8.8.8.8
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-26-57-Screenshot from 2021-05-09 08-35-44.png" alt="Screenshot from 2021-05-09 08-35-44.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.4</strong>. Tạo tập tin cấu hình phân giải ngược :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cp</span> /var/named/forward.qtht /var/named/reverse.qtht
$ <span class="token function">chgrp</span> named /var/named/reverse.qtht
$ <span class="token function">nano</span> /var/named/reverse.qtht
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<div class="language-textile ext-textile line-numbers-mode"><pre v-pre class="language-textile"><code><span class="token phrase">$TTL 1D
<span class="token inline"><span class="token punctuation">@</span><span class="token code keyword">   IN  SOA </span><span class="token punctuation">@</span></span> qtht.com.vn. (
0    ;Serial
1D    ;Refresh
1H    ;Retry
1W    ;Expire
3H    ;Minimum TTL
)
@    IN   NS   dns.qtht.com.vn.
dns  IN   A    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IP</span> <span class="token attr-name">máy</span><span class="token punctuation">></span></span>
<span class="token phrase">245  IN   PTR  www.qtht.com.vn.
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></blockquote>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-38-46-Screenshot from 2021-05-09 08-36-00.png" alt="Screenshot from 2021-05-09 08-36-00.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.5</strong>. Tắt tường lửa</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">service</span> iptables stop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-10-12-Screenshot from 2021-05-09 11-19-36.png" alt="Screenshot from 2021-05-09 11-19-36.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.6</strong>. Khởi động dịch vụ <code>DNS</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">service</span> named start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-40-08-Screenshot from 2021-05-09 13-09-56.png" alt="Screenshot from 2021-05-09 13-09-56.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.7</strong>. Kiểm tra kết quả</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ nslookip www.qtht.com.vn <span class="token operator">&lt;</span>địa chỉ IP máy<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p>Phân giải xuôi</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-40-53-Screenshot from 2021-05-09 08-38-46.png" alt="Screenshot from 2021-05-09 08-38-46.png"></p>
</li>
<li>
<p>Phân giải ngược</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-41-47-Screenshot from 2021-05-09 08-38-37.png" alt="Screenshot from 2021-05-09 08-38-37.png"></p>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.8</strong>. Trên máy vật lý, cấu hình <code>DNS Server</code> là <code>IP</code> của máy ảo <code>CentOS</code>. Sau đó mở trình duyệt <code>web</code> và truy cập vào địa chỉ <code>http://www.qtht.com.vn/myweb</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-42-52-Screenshot from 2021-05-09 08-33-53.png" alt="Screenshot from 2021-05-09 08-33-53.png"></p>
<blockquote>
<p>💡 Cũng có thể dùng điện thoại để kết nối (<em>Yêu cầu xài chung <code>Wifi</code> và thiết lập <code>DNS custom</code></em> )</p>
<p><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-47-58-a4d2f03b003ff561ac2e.png" alt="a4d2f03b003ff561ac2e.png" width="293"><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-48-19-8f08fed60ed2fb8ca2c3.png" alt="8f08fed60ed2fb8ca2c3.png" width="293"></p>
</blockquote>
</details>
<hr>
<h2 id="_4-cau-hinh-tuong-lua-iptables" tabindex="-1"><a class="header-anchor" href="#_4-cau-hinh-tuong-lua-iptables" aria-hidden="true">#</a> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-50-15-icons8-firewall.png" alt="icons8-firewall.png" width="40"> 4. Cấu hình tường lửa <code>iptables</code></h2>
<p><code>iptables</code> là một bộ công cụ được tích hợp trên hệ điều hành <code>Linux</code> để thực hiện chức năng tường lửa theo cơ chế lọc gói tin (<code>package filtering</code>). <code>Iptables</code> theo dõi lưu lượng mạng <strong>đến</strong> và <strong>đi</strong> của một máy tính và lọc nó dựa trên các luật (<code>rules</code>) do người dùng tự định nghĩa trước đó.</p>
<p>Thực hiện các yêu cầu sau và Chụp màn hình minh hoạ<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng"></p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4.1</strong>. Thực thi tường lửa</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">service</span> iptables start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-55-08-Screenshot from 2021-05-09 09-13-04.png" alt="Screenshot from 2021-05-09 09-13-04.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4.2</strong>. Hiển thị các <code>rules</code> hiện có trên <code>iptables</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables -v -L --line-numbers
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-56-01-Screenshot from 2021-05-09 09-18-28.png" alt="Screenshot from 2021-05-09 09-18-28.png"></p>
<blockquote>
<p>💡 Giải thích cụ thể :</p>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-57-56-iptables_filter.png" title="" alt="iptables_filter.png" width="525">
<table>
<thead>
<tr>
<th>Giải thích</th>
<th>INPUT</th>
<th>FORWARD</th>
<th>OUTPUT</th>
</tr>
</thead>
<tbody>
<tr>
<td>Trừu tượng</td>
<td>Kiểm soát các gói đến từ <code>route</code> đến <code>server</code> của bạn</td>
<td>Kiểm soát các gói bắt nguồn từ <code>server</code> của bạn đến <code>nhà mạng</code></td>
<td>Kiểm soát các gói được chuyển tiếp bởi <code>server</code> của bạn</td>
</tr>
<tr>
<td>Dễ hiểu</td>
<td>Lọc các gói dành cho <code>server</code> củ bạn</td>
<td>Lọc các gói đến <code>server</code> của bạn mà <code>card wifi</code> khác có thể truy cập</td>
<td>Lọc các gói có nguồn gốc từ <code>server</code> của bạn</td>
</tr>
</tbody>
</table>
</blockquote>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4.3</strong>. Tạo <code>rules</code> cho phép các máy khác truy cập tới dịch vụ <code>Web</code> trên <code>server</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables -A INPUT -p tcp --dport <span class="token number">80</span> -j ACCEPT
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Tham khảo cách dùng <code>iptables</code> căn bản <a href="https://hocvps.com/iptables/" target="_blank" rel="noopener noreferrer">tại đây<OutboundLink/></a></p>
<ul>
<li>
<p><strong>Trước</strong> khi cho máy khác truy cập với dịch vụ <code>Web Server</code> :</p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-22-49-33363b9e5d9fa8c1f18e.png" alt="33363b9e5d9fa8c1f18e.png" width="229">
</li>
<li>
<p><strong>Sau</strong> khi cho máy khác truy cập tới dịch vụ <code>Web Server</code> bằng lệnh trên :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-24-12-Screenshot from 2021-05-09 09-50-53.png" alt="Screenshot from 2021-05-09 09-50-53.png"></p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-47-58-a4d2f03b003ff561ac2e.png" alt="a4d2f03b003ff561ac2e.png" width="227">
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4.4</strong>. Tạo <code>rules</code> để cho máy vật lý có thể <code>ping</code> tới <code>server</code>, các máy khác <strong>KHÔNG</strong> <code>ping</code> được</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables -I INPUT <span class="token number">2</span> -p icmp -s <span class="token operator">&lt;</span>IP cho phép<span class="token operator">></span> -j ACCEPT
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-26-32-1406098-200.png" title="" alt="1406098-200.png" width="35"> <a href="https://termux.com/" target="_blank" rel="noopener noreferrer">Termux<OutboundLink/></a> của <code>Android</code> để thao tác các lệnh</p>
<blockquote>
<p>🤔 <code>Android</code> đang sử dụng chung mạng <code>Wifi</code> của máy dùng <code>iptables</code> và có IP như sau : <code>192.168.10.101</code> (<em>riêng máy này thôi !</em>)</p>
</blockquote>
<ul>
<li>
<p>Trước khi thiết lập <code>rules</code> chặn <code>ping</code>  :</p>
<ul>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-23-icons8-android.png" alt="icons8-android.png"><code>Android</code> sử dụng <code>ping</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-29-10-bd39e9ee27ead2b48bfb.jpeg" alt="bd39e9ee27ead2b48bfb.jpeg"></p>
</li>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-36-icons8-centos.png" alt="icons8-centos.png"> <code>CentOS</code> sử dụng <code>ping</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-30-42-Screenshot from 2021-05-09 09-54-50.png" alt="Screenshot from 2021-05-09 09-54-50.png"></p>
</li>
</ul>
<p>==&gt; Cả hai vẫn <code>ping</code> được</p>
</li>
<li>
<p><strong>Sau</strong> khi thiết lập <code>rules</code> chặn <code>ping</code> bằng lệnh trên :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-35-55-Screenshot from 2021-05-09 09-58-15.png" alt="Screenshot from 2021-05-09 09-58-15.png"></p>
<blockquote>
<p>🤔 <code>qtht.com.vn</code> tương đương <code>192.168.10.135</code> vì đã cấu hình <code>DNS</code> bên trên</p>
</blockquote>
<ul>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-23-icons8-android.png" alt="icons8androidpng"><code>Android</code> sử dụng <code>ping</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-34-38-3924f2fe3cfac9a490eb.png" alt="3924f2fe3cfac9a490eb.png"></p>
</li>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-36-icons8-centos.png" alt="icons8centospng"> <code>CentOS</code> sử dụng <code>ping</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-30-42-Screenshot from 2021-05-09 09-54-50.png" alt="Screenshot from 2021-05-09 09-54-50.png"></p>
</li>
</ul>
</li>
</ul>
<p>==&gt; Sau khi thiết lập <code>rules</code> chỉ có máy có <code>IP:192.168.10.135</code> là <code>ping</code> được đến <code>server</code>.</p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4.5</strong>. Tạo <code>rules</code> để <strong>KHÔNG</strong> cho người dùng trên máy <code>CentOS</code> truy cập tới địa chỉ <code>facebook.com</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables -A OUTPUT -p tcp -m string --string facebook --algo kmp -j REJECT
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng lệnh trên để gửi gói truy cập đến <code>server</code> của <code>Facebook</code> :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-32-04-Screenshot from 2021-05-09 10-13-39.png" alt="Screenshot from 2021-05-09 10-13-39.png"></p>
<p>==&gt; Sau khi đã áp dụng <code>rules</code> thì chúng ta không thể truy cập <code>facebook</code> được nữa :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-34-18-Screenshot from 2021-05-09 10-16-54.png" alt="Screenshot from 2021-05-09 10-16-54.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4.6</strong>. Lưu và phục hồi các <code>rules</code> của <code>iptables</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cp</span> /etc/sysconfig/iptables /etc/sysconfig/iptables.orig
$ iptables-save <span class="token operator">></span> /etc/sysconfig/iptables
$ iptables-restore <span class="token operator">&lt;</span> /etc/sysconfig/iptables
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Trước khi tắt <code>iptables</code>, ta nên <strong>sao lưu</strong> (<em>backup</em>) lại <code>rules</code> bằng lệnh :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables-save <span class="token operator">></span> /etc/sysconfig/iptables
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>🤔 Vì sau khi <strong>tắt</strong> <code>iptables</code> và <strong>khởi động</strong> lại, các <code>rules</code> thiết lập trước đó sẽ reset như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-37-00-Screenshot from 2021-05-09 10-20-30.png" alt="Screenshot from 2021-05-09 10-20-30.png"></p>
</blockquote>
<p>==&gt; Khi đó ta có thể <strong>khôi phục</strong> (<em>restore</em>) lại <code>rules</code> đã <strong>sao lưu</strong> (<em>backup</em>) bằng lệnh sau:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ iptables-restore <span class="token operator">&lt;</span> /etc/sysconfig/iptables
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>🧚 Kết quả như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-39-11-Screenshot from 2021-05-09 10-20-59.png" alt="Screenshot from 2021-05-09 10-20-59.png"></p>
<p>(<em>Vì mình đã xoá <code>rules</code> chặn <code>facebook</code> trước đó nên không còn ở OUTPUT nữa</em>)</p>
</blockquote>
</details></template>
