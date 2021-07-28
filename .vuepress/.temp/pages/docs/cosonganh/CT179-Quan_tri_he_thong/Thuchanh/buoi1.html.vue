<template><h1 id="buoi-thuc-hanh-1-quan-tri-he-thong" tabindex="-1"><a class="header-anchor" href="#buoi-thuc-hanh-1-quan-tri-he-thong" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-33-52-Multi Agent System.png" title="" alt="Multi Agent System.png" width="50"> Buổi thực hành 1 - Quản trị hệ thống <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-33-54-EXPERT SYSTEM.png" title="" alt="EXPERT SYSTEM.png" width="50"></h1>
<h2 id="_1-su-dung-linux" tabindex="-1"><a class="header-anchor" href="#_1-su-dung-linux" aria-hidden="true">#</a> 1. Sử dụng Linux <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-34-29-icons8-linux.png" alt="icons8linuxpng" width="40"></h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"><strong>1.1</strong> Linux distribution (gọi tắt là distro) là gì? Giữa các distro giống và khác nhau thế nào?</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><code>Linux distro</code> tức là bản phân phối <code>Linux</code> là một hệ điều hành được tạo nên từ nhân <code>Linux</code> và thường có trình quản lí gói (<em>package management</em>)</p>
<blockquote>
<p>💡 Cũng có thể nói <code>Linux</code> chỉ là một cái nhân <em>(<code>kernel</code>)</em>, còn <code>Linux distro</code> mới là hệ điều hành</p>
</blockquote>
<p>Mỗi <code>Linux Distro</code> được tạo ra hướng tới một người dùng hay mục đích cụ thể nào đó và đó là sự khác nhau chính vì thế nó đã được chia ra rất nhiều nhánh nhứ <code>RedHat</code>, <code>Debian</code> ,<code>Arch</code>...  ==&gt; Điểm giống nhau giữa chúng là điều sử dụng nhân <code>Linux</code>.</p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>1.2</strong> Kể tên ít nhất 3 Linux distro và một vài thông tin mổ tả về các bản distro này.</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-19-38-33131755.png" title="" alt="33131755.png" width="30"> <a href="https://pop.system76.com/" target="_blank" rel="noopener noreferrer">PopOS<OutboundLink/></a> : là một <code>Linux Distro</code> dựa trên <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-25-39-icons8-ubuntu.png" title="" alt="icons8-ubuntu.png" width="30"> <a href="https://ubuntu.com/download" target="_blank" rel="noopener noreferrer">Ubuntu<OutboundLink/></a>, làm tốt hơn <code>Ubuntu</code>, hỗ trợ mọi phần cứng tốt hơn, và có phiên bản riêng cho <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-27-58-icons8-nvidia.png" title="" alt="icons8-nvidia.png" width="30"> <code>Nvidia</code> . Sử dụng gói quản lí <code>apt</code> và môi trường mặc định là <code>GNOME</code>, được phát triển hướng đến các lập trình viên <code>FullStack</code>, đồng thời cũng là một <code>Linux Distro</code> được đánh giá về hiệu suất và giao diện trong những năm gần đây.</p>
<blockquote>
<p>💡 <code>PopOS</code> không sử dụng <code>Grub Bootloader</code> mà sử dụng <code>systemd</code>, mang độ ổn định cao và tốc độ boot được tối ưu rất nhiều</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-21-33-1024px-Manjaro-logo.svg.png" title="" alt="1024px-Manjaro-logo.svg.png" width="30"> <a href="https://manjaro.org/" target="_blank" rel="noopener noreferrer">Manjaro<OutboundLink/></a> : là một <code>Linux Distro</code> dựa trên <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-33-15-1024px-Archlinux-icon-crystal-64.svg.png" title="" alt="1024px-Archlinux-icon-crystal-64.svg.png" width="30"> <a href="https://archlinux.org/" target="_blank" rel="noopener noreferrer">Arch<OutboundLink/></a>, sử dụng gói quản lý <code>pacman</code> và có 4 tuỳ chọn về môi trường như <code>XFCE</code>, <code>KDE Plasma</code>, <code>GNOME</code>, <code>Architect</code>, được phát triển hướng tới người dùng bắt đầu với <code>Linux</code> với giao diện thân thiện dễ dùng và cài đặt mọi thứ dễ dàng và là một trong những <code>Linux Distro</code> nổi tiếng trên thế giới.</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-41-21-mxlinux-512.png" title="" alt="mxlinux-512.png" width="30"> <a href="https://mxlinux.org/" target="_blank" rel="noopener noreferrer">Mxlinux<OutboundLink/></a> : là một <code>Linux Distro</code> dựa trên <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-42-01-icons8-debian.png" title="" alt="icons8-debian.png" width="30"> <a href="https://www.debian.org/" target="_blank" rel="noopener noreferrer">Debian<OutboundLink/></a>, sử dụng gói quản lí <code>apt</code> và có 3 tuỳ chọn môi trường gồm : <code>XFCE</code>, <code>KDE</code>, <code>FluxBox</code>, được phát triển để chạy mượt mà trên các thiết bị cũ  như <code>dưới 2GB RAM</code>, <code>CPU Pentium</code>, điều mà các hệ điều hành khác không làm được, và được đánh giá <code>top1</code> trong <a href="https://distrowatch.com/" target="_blank" rel="noopener noreferrer">DistroWatch<OutboundLink/></a></p>
</details>
<hr>
<h2 id="_2-cai-đat-centos" tabindex="-1"><a class="header-anchor" href="#_2-cai-đat-centos" aria-hidden="true">#</a> 2. Cài đặt CentOS</h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> Thực hiện cài đặt CentOS 6 (hoặc CentOS 7/8) vào máy tính cá nhân (hoặc máy ảo) của bạn. Trong quá trình cài đặt, tạo một tài khoản có tên đăng nhập (login name) là mã số sinh viên của bạn. Sau khi hoàn thành cài đặt, chụp màn hình đăng nhập có chứa login name để chứng tỏ hoàn thành việc cài đặt.</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-34-15-86d69cfb2765d43b8d74.jpg" alt="86d69cfb2765d43b8d74.jpg"></p>
</details>
<hr>
<h2 id="_3-shell-va-lenh-linux-co-ban" tabindex="-1"><a class="header-anchor" href="#_3-shell-va-lenh-linux-co-ban" aria-hidden="true">#</a> 3. Shell và lệnh Linux cơ bản <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-39-02-icons8-command_line.png" title="" alt="icons8-command_line.png" width="40"></h2>
<blockquote>
<p>Tìm hiểu về thực hiện các yêu cầu sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>3.1</strong>. <code>Shell</code> là gì ? Kể tên một số <code>shell</code> trong <code>Linux</code>. Làm sao để biết <code>shell</code> nào sử dụng bởi <code>Linux</code> ?</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><strong><code>Shell</code></strong> là một <strong>giao diện dòng lệnh</strong>, hoặc là một <strong>giao diện người dùng</strong> đơn giản dựa trên văn bản cho phép truy cập vào dịch vụ cơ bản <strong>hệ điều hành</strong>. Có nhiều <code>shell</code> nhưng chúng cơ bản là hoạt động giống nhau.</p>
<p>Một số <strong><code>shell</code></strong> khác bao gồm <strong><code>zsh</code></strong> (<strong>Z shell</strong>), <strong><code>ksh</code></strong> (<strong>Korn shell</strong>), <strong><code>ash</code></strong>(<strong>Almquist shell</strong>), <strong><code>fish</code></strong>(<strong>friendly interactive shell</strong>), và nhiều nữa ...</p>
<p>Để biết <code>Linux</code> đang sử dụng <code>Linux</code> nào ta có thể dùng lệnh sau :</p>
<ul>
<li>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>3.2</strong>. Để tìm kiếm thông tin hướng dẫn về một lệnh hoặc tiện ích nào đó trong <code>Linux</code>, ta có thể sử dụng câu lệnh nào ? Cho ví dụ (<em>chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30"></em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng lệnh <code>man</code> như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-34-54-f6997ae7ff790c275568.jpg" alt="f6997ae7ff790c275568.jpg"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-34-57-da0a9f491ad7e989b0c6.jpg" alt="da0a9f491ad7e989b0c6.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"><strong>3.3</strong> . Cho biết <strong>công dụng</strong> của lệnh <code>pwd</code> và <code>cd</code>. Cho ví dụ (<em>chụp ảnh minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8screenshotpng" width="35">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p><code>pwd</code> (<em>Present Working Directory</em>) : Hiển thị đường dẫn thư mục hiện tại</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-35-47-d764a2f92267d1398876.jpg" alt="d764a2f92267d1398876.jpg"></p>
</li>
<li>
<p><code>cd</code> (<em>Change Directory</em>) : Thay đổi thư mục làm việc hiện tại</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-36-54-edd4904910d7e389bac6.jpg" alt="edd4904910d7e389bac6.jpg"></p>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>3.4</strong>. Cho biết <strong>công dụng</strong> của lệnh <code>ls</code> và vài <strong>tuỳ chọn</strong> của nó. Cho ví dụ (<em>chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30"></em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><code>ls</code> (<em>List</em>) : Hiện thị các tệp tin trong thư mục</p>
<blockquote>
<p>🧚 Và các tuỳ chọn sau :</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Mô tả</th>
</tr>
</thead>
<tbody>
<tr>
<td>-a</td>
<td>Liệt kê bao gồm file ẩn</td>
</tr>
<tr>
<td>-l</td>
<td>Liệt kê kèm thêm hiển thị các quyền</td>
</tr>
<tr>
<td>-s</td>
<td>Liệt kê kích thước tệp tin</td>
</tr>
</tbody>
</table>
</blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-43-03-3edfa45324cdd7938edc.jpg" alt="3edfa45324cdd7938edc.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"><strong>3.5</strong>. Dùng <strong>công cụ</strong> <code>gedit</code> để tạo tệp tin có tên là <code>thoduyen</code> với nội dung là 8 câu đầu trong bài thơ <strong>Duyên</strong> của <strong>Xuân Diệu</strong> (<em>chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30"></em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-44-53-c8407edbf445071b5e54.jpg" alt="c8407edbf445071b5e54.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>3.6</strong>. Cho biết <strong>công dụng</strong> của lệnh <code>cat</code>, <code>more</code>, <code>less</code>,<code>head</code>,<code>tail</code>. Cho ví dụ (<em>chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30"></em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><code>cat</code> : hiển thị nội dung file</p>
<p><code>more</code> : xem nội dung file lớn</p>
<p><code>less</code> : xem nội dung file lớn có tính năng cuộn</p>
<p><code>head</code> : hiển thị nội dung file (<em>thêm tuỳ chọn -n --&gt; lấy từ trên xuống n dòng</em>)</p>
<p><code>tail</code> : hiển thị nội dung file (<em>thêm tuỳ chọn -n --&gt; lấy từ dưới lên n dòng</em>)</p>
<ul>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-47-28-4d5139f8aa6659380077.jpg" alt="4d5139f8aa6659380077.jpg"></p>
</li>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-47-32-930763e0f07e03205a6f.jpg" alt="930763e0f07e03205a6f.jpg"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-47-39-c0064ddcde422d1c7453.jpg" alt="c0064ddcde422d1c7453.jpg"></p>
</li>
<li>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-47-43-cb02b13521abd2f58bba.jpg" alt="cb02b13521abd2f58bba.jpg"></p>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>3.7</strong>. Cho biết <strong>công dụng</strong> của lệnh <code>grep</code>. Cho ví dụ (<em>chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30"></em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Cách sử dụng cơ bản của lệnh <strong><code>grep</code></strong> để tìm kiếm chuỗi xác định trong file cụ thể như sau:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">"some_string"</span> some_file
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-53-59-18429414098afad4a39b.jpg" alt="18429414098afad4a39b.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>3.8</strong>. Cho biết <strong>công dụng</strong> của lệnh <code>cp</code> và <code>mv</code>. Cho ví dụ (<em>chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30"></em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p><code>cp</code> (<em>Copy</em>) : Tạo bản sao một file
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-57-15-214301089c966fc83687.jpg" alt="214301089c966fc83687.jpg"></p>
</li>
<li>
<p><code>mv</code> (<em>Move</em>) : Di chuyển file
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-57-20-4e80a93734a9c7f79eb8.jpg" alt="4e80a93734a9c7f79eb8.jpg"></p>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>3.9</strong>. Cho biết công dụng của lệnh <code>mkdir</code> và <code>rm</code>. Cho ví dụ (<em>chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30"></em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><code>mkdir</code> (<em>Make Directory</em>) : Tạo thư mục</p>
<p><code>rm</code> (<em>Remove</em>) : Xoá thư mục</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-19-00-27-ced60ec0ef5e1c00454f.jpg" alt="ced60ec0ef5e1c00454f.jpg"></p>
</details>
<hr>
<h2 id="_4-rpm-cap-nhat-va-cac-đat-cac-package" tabindex="-1"><a class="header-anchor" href="#_4-rpm-cap-nhat-va-cac-đat-cac-package" aria-hidden="true">#</a> 4. RPM, cập nhật và các đặt các package <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-49-55-docker-service-rpm-logo.png" title="" alt="docker-service-rpm-logo.png" width="40"></h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>4.1</strong>. Các tệp tin có phần mở rộng <code>.rpm</code> và <code>.deb</code> có chức năng gì ?</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><code>.rpm</code> (<em>RedHat Package Manager</em>)  đây là gói <code>package</code> thuộc nhánh <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-19-02-25-icons8-redhat.png" title="" alt="icons8-redhat.png" width="30"> <code>Redhat</code> như <code>centOS</code></p>
<p><code>.deb</code> (<em>Debian Package Manager</em>) đây là gói <code>package</code> thuộc nhánh <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-42-01-icons8-debian.png" title="" alt="icons8-debian.png" width="30"> <code>Debian</code> như <code>Ubuntu</code></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>4.2</strong> . Thay vì đòi hỏi người dùng phải biết trước đường dẫn <em>download file</em> <code>.rpm</code> khi cài đặt/cập nhật ứng dụng có một lệnh trong <code>RHEL/CentOS</code> cho phép truy xuất đến kho file <code>.rpm</code>, sau đó hệ thống sẽ <em>download file</em> thích hợp về để thực hiện cài đặt/cập nhật. <strong>Lệnh</strong> đó là <strong>lệnh</strong> nào ?</p>
</blockquote>
<h3 id="giai" tabindex="-1"><a class="header-anchor" href="#giai" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" title="" alt="icons8-consultation.png" width="40"> Giải</h3>
<p>Sử dụng lệnh <code>yum</code></p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>4.3</strong>. Cài đặt trình soạn thảo <code>nano</code> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-57-45-large.png" title="" alt="large.png" width="25"> (<em>chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">, nếu đã cài sẵn thì chụp thông báo</em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">nano</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-06-54-55-db3dd5b9f91f0a41530e.jpg" alt="db3dd5b9f91f0a41530e.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>4.4</strong>. Cài đặt trình duyệt thuần văn bản (<em>text-based web browsr</em>) <code>lynx</code>, thực hiện truy cập vào <strong>website</strong> <code>https://ctu.edu.vn/</code> (<em>chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30"></em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">lynx</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-07-01-04-727356237e858ddbd494.jpg" alt="727356237e858ddbd494.jpg">
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-07-01-16-386002082aaed9f080bf.jpg" alt="386002082aaed9f080bf.jpg"></p>
</li>
<li>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">lynx</span> https://ctu.edu.vn/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-07-01-45-3eaa75515df7aea9f7e6.jpg" alt="3eaa75515df7aea9f7e6.jpg"></p>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"><strong>4.5</strong>. Gỡ bỏ chương trình <code>lynx</code> ra khỏi hệ thống (<em>chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30"></em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">lynx</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-07-02-52-5b09f5b0dc162f487607.jpg" alt="5b09f5b0dc162f487607.jpg"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-07-02-55-b300e4b5cd133e4d6702.jpg" alt="b300e4b5cd133e4d6702.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> <strong>4.6</strong>. Lệnh nào thực hiện cập nhật tất cả ứng dụng hệ thống ?</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng câu lệnh dưới đây :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> yum update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details></template>
