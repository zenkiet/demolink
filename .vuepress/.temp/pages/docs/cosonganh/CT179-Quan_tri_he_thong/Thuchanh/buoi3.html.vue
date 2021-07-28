<template><h1 id="su-dung-shell-scripting-quan-li-tien-trinh-tap-tin-nhat-ky-he-thong" tabindex="-1"><a class="header-anchor" href="#su-dung-shell-scripting-quan-li-tien-trinh-tap-tin-nhat-ky-he-thong" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-29-20-AMBIENT USER EXPERIENCE.png" alt="AMBIENT USER EXPERIENCE.png"> Sử dụng <code>Shell Scripting</code>, quản lí tiến trình, tập tin nhật ký hệ thống <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-28-49-MULTI AGENT SYSTEM.png" alt="MULTI AGENT SYSTEM.png"></h1>
<h2 id="_1-cai-đat-centos" tabindex="-1"><a class="header-anchor" href="#_1-cai-đat-centos" aria-hidden="true">#</a> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-29-34-icons8-centos.png" alt="icons8-centos.png" width="40"> 1.Cài đặt CentOS</h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 1.</strong> Thực hiện cài đặt <code>CentOS 6</code> (<em>hoặc <code>CentOS 7</code>, <code>8</code></em>) vào máy tính cá nhân (<em>hoặc máy ảo</em>) của bạn (<em>KHÔNG cần chụp màn hình minh hoạ</em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Link file ISO <a href="https://www.centos.org/download/" target="_blank" rel="noopener noreferrer">CentOS 8<OutboundLink/></a></p>
</details>
<hr>
<h2 id="_2-quan-tri-voi-shell-scripting" tabindex="-1"><a class="header-anchor" href="#_2-quan-tri-voi-shell-scripting" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-32-09-icons8-source_code.png" title="" alt="icons8-source_code.png" width="40"> 2. Quản trị với <code>shell scripting</code></h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 2.1</strong>. Thực hiện các lệnh bên dưới và cho biết kết quả của chúng (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">hostname</span>
$ <span class="token function">hostname</span> -I
$ <span class="token function">whoami</span>
$ <span class="token function">df</span> -H
$ <span class="token function">ps</span> -eo pid,%mem,%cpu,comm --sort -rss
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p><code>hostname</code> : Kiểm tra host hiện tại</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-19-51-06-db0997500f9efdc0a48f.jpeg" alt="db0997500f9efdc0a48f.jpeg"></p>
</li>
<li>
<p><code>hostname -I</code> : Hiển thị tất cả địa chỉ <code>IPv4</code> mạng của host ()</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-19-51-01-91cff89660589206cb49.jpeg" alt="91cff89660589206cb49.jpeg"></p>
</li>
<li>
<p><code>whoami</code> (<em>Who Am I</em>): hiển thị ra người dùng đang thao tác</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-19-51-04-c9aa14fc8c327e6c2723.jpeg" alt="c9aa14fc8c327e6c2723.jpeg"></p>
</li>
<li>
<p><code>df -H</code> : Kiểm tra thông tin tất cả ổ cứng</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-19-50-56-57c59f93075df503ac4c.jpeg" alt="57c59f93075df503ac4c.jpeg"></p>
</li>
<li>
<p><code>ps -eo pid,%mem,%cpu,comm --sort -rss | head -n 3</code> : <em>Giải thích bên dưới</em></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-19-50-50-36faeaac7262803cd973.jpeg" alt="36faeaac7262803cd973.jpeg"></p>
<blockquote>
<p>💡 Giải thích chi tiết :</p>
<ul>
<li>
<p><code>ps</code> (<em>Process Status</em>) : công cụ quản lí tiến trình</p>
</li>
<li>
<p><code>-eo</code> : Hiển thị tất cả tiến trình có chọn lọc</p>
</li>
<li>
<p><code>pid</code> (<em>Process ID</em>) : Mã tiến trình</p>
</li>
<li>
<p><code>%mem,%cpu</code> : Sử dụng bộ nhớ và vi xử lý tiến trình (<em><code>%</code></em>)</p>
</li>
<li>
<p><code>comm</code> : đường dẫn của tiến trình</p>
</li>
<li>
<p><code>--sort</code> : sắp xếp tiến trình</p>
</li>
<li>
<p><code>-rss</code> (<em>resident set size</em>) : đi chung với <code>vsz</code>, hiển thị <strong>dung lượng bộ nhớ</strong> được <strong>phân bổ</strong> cho tiến trình trong <code>RAM</code></p>
</li>
<li>
<p><code>| head -n 3</code> : sử dụng <strong>ống dẫn</strong> (<code>pipe</code>) để hiển thị 3 dòng đầu tiên</p>
</li>
</ul>
</blockquote>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 2.2</strong>. Viết <code>shell script</code> có tên <code>info.sh</code> thực hiện tất cả lệnh ở <code>2.1</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p>Sử dụng <code>gedit + &lt;file&gt;</code> để tạo file như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-21-00-51-e0a0ab1c42d2b08ce9c3.jpeg" alt="e0a0ab1c42d2b08ce9c3.jpeg"></p>
</li>
<li>
<p>Sử dụng lệnh <code>bash + &lt;file&gt;</code> để thực thi file :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-21-00-56-7113cbae2260d03e8971.jpeg" alt="7113cbae2260d03e8971.jpeg"></p>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 2.3</strong>. Viết <code>shell script</code> có tên <code>backup.sh</code> thực hiện :</p>
<ul>
<li>
<p>In ra ngày giờ hiện tại</p>
</li>
<li>
<p>Nén toàn bộ thư mục <code>/home</code> thành tập tin <code>/tmp/&lt;YYYY-MM-DD&gt;.tar</code> (<em>YYYY-MM-DD</em> là ngày hiện tại, ví dụ : 2020-04-22.tar)</p>
</li>
<li>
<p>In thông tin đầy đủ của tập tin <code>/tpmn/&lt;YYYY-MM-DD&gt;.tar</code></p>
</li>
<li>
<p>In ra thông tin thông báo <code>&quot;Sao lưu thành công!!!!&quot;</code></p>
</li>
<li>
<p>Thực thi <code>backup.sh</code> để kiểm tra (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</li>
</ul>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p>Sử dụng <code>gedit + &lt;file&gt;</code> để tạo file như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-01-15-63a7056934a0c6fe9fb1.jpeg" alt="63a7056934a0c6fe9fb1.jpeg"></p>
</li>
<li>
<p>Sử dụng lệnh <code>bash + &lt;file&gt;</code> để thực thi file :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-01-08-56752abb1b72e92cb063.jpeg" alt="56752abb1b72e92cb063.jpeg"></p>
</li>
</ul>
</details>
<hr>
<h2 id="_3-len-lich-cong-viec-đinh-ky-voi-cron" tabindex="-1"><a class="header-anchor" href="#_3-len-lich-cong-viec-đinh-ky-voi-cron" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-33-09-crontab.png" title="" alt="crontab.png" width="98">3. Lên lịch công việc định kỳ với <code>cron</code></h2>
<p><code>Cron</code> là một tiện ích trong <code>Linux</code> cho phép máy tính thiết lập thời gian biểu để thực hiện công việc một cách định kỳ. Một <strong>file</strong>  <code>crontab</code> chứa danh sách các lệnh sẽ được thực thi, kèm theo thông tin về thời điểm lặp lại việc thực thi. Để hiệu chỉnh <strong>file</strong> <code>crontab</code> với trình soạn thảo <code>nano</code>, ta dùng lệnh sau :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">EDITOR</span><span class="token operator">=</span>nano
$ <span class="token function">crontab</span> -e
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Cho biết cú pháp để thực hiện các yêu cầu từ <strong>file</strong> <code>crontab</code> :</p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 3.1</strong>. Chạy lệnh <code>date</code> mỗi phút một lần, sau đó khi kết quả vào cuối tập tin <code>/tmp/date.txt</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Dùng lệnh <code>export EDITOR=&lt;tên editor&gt;</code>, để thay đổi trình chỉnh sửa mặc định</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-24-20-8245ae92bd5b4f05164a.jpeg" alt="8245ae92bd5b4f05164a.jpeg"></p>
<blockquote>
<p>💡 Giải thích :</p>
<p><code>crontab -e</code> : chỉnh sửa file <code>crontab</code></p>
<p><code>crontab -l</code> : xem file <code>crontab</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-15-23-68981e4e0d87ffd9a696.jpeg" alt="68981e4e0d87ffd9a696.jpeg"></p>
<p><code>crontab -r</code> : xoá file <code>crontab</code></p>
</blockquote>
<p>==&gt; Sau một phút tự động sẽ cập nhật giờ trong file <code>/tmp/data.txt</code> :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-15-25-c7ef2b2638efcab193fe.jpeg" alt="c7ef2b2638efcab193fe.jpeg"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-15-16-121d92d4811d73432a0c.jpeg" alt="121d92d4811d73432a0c.jpeg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 3.2</strong>. Thực thi <code>backup.sh</code> ở <code>2.3</code> vào <code>23:00 giờ ngày 10,20 và 30</code> <strong>hằng tháng</strong> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-15-26-c93589fd9a34686a3125.jpeg" alt="c93589fd9a34686a3125.jpeg"></p>
<p>==&gt; Cứ mỗi <code>23h ngày 10,20,30</code> hằng tháng tự động sẽ thực thi file <code>backup.sh</code></p>
</details>
<hr>
<h2 id="_4-thao-tac-voi-tien-trinh" tabindex="-1"><a class="header-anchor" href="#_4-thao-tac-voi-tien-trinh" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-34-27-icons8-processor.png" title="" alt="icons8-processor.png" width="40"> 4. Thao tác với tiến trình</h2>
<p>Tìm hiểu và thực hiện các yêu cầu sau :</p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 4.1</strong>. Mở trình duyệt <code>Firefox</code>. Sau đó dùng lệnh <code>ps -aux</code> <em>hoặc</em> <code>pgrep</code> tìm <strong>PID</strong> của <code>Firefox</code>.</p>
<p>Tiếp theo, dùng lệnh <code>kill</code> để tạm dừng tiến trình <code>Firefox</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">). Điều gì xảy ra khi bạn dịch chuyển cửa sổ <code>Firefox</code> <em>hoặc</em> nhấn chọn <strong>menu</strong> của nó ngay lúc này ?</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p>Sử dụng lệnh <code>pgrep</code> để tìm ID tiến trình :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-47-43-69041d6b7ba289fcd0b3.jpeg" alt="69041d6b7ba289fcd0b3.jpeg"></p>
</li>
<li>
<p>Sử dụng lệnh <code>kill -s STOP &lt;PID&gt;</code> sẽ tạm dừng tiến trình :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-47-40-30a757c83101c35f9a10.jpeg" alt="30a757c83101c35f9a10.jpeg"></p>
<blockquote>
<p>💡 Ngay lập tức ta không thể thao tác được gì từ <code>Firefox</code></p>
</blockquote>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 4.2</strong>. Dùng lệnh <code>kill</code> để phục hồi trạng thái trước đó của <code>Firefox</code> và quan sát kết quả (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng lệnh sau đây để khôi phục tiến trình vừa dùng :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">kill</span> -s CONT <span class="token operator">&lt;</span>PID<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-50-54-Ảnh chụp Màn hình 2021-04-12 lúc 12.50.48.png" alt="Ảnh chụp Màn hình 2021-04-12 lúc 12.50.48.png"></p>
<blockquote>
<p>💡 Ngay lập tức ta có thể thao tác <code>Firefox</code> lại bình thường</p>
</blockquote>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 4.3</strong>. Dùng lệnh <code>kill</code> để huỷ tiến trình <code>Firefox</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng lênh sau đây để thoát tiến trình ngay lập tức :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">kill</span> -s KILL <span class="token operator">&lt;</span>PID<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-52-30-Ảnh chụp Màn hình 2021-04-12 lúc 12.52.22.png" alt="Ảnh chụp Màn hình 2021-04-12 lúc 12.52.22.png"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-51-38-ef8c72e3142ae674bf3b.jpeg" alt="ef8c72e3142ae674bf3b.jpeg"></p>
<blockquote>
<p>💡 Tiến trình <code>Firefox</code> ngay lập tức sẽ bị tắt đi.</p>
</blockquote>
</details>
<hr>
<h2 id="_5-tap-tin-log" tabindex="-1"><a class="header-anchor" href="#_5-tap-tin-log" aria-hidden="true">#</a> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-35-02-icons8-file.png" alt="icons8-file.png" width="40"> 5. Tập tin log</h2>
<p>Tìm hiểu và thực hiện yê cầu sau :</p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 5.1</strong>. Tìm thông tin về người dùng, thời gian của lần <strong>đăng nhập</strong> sau cùng vào <strong>hệ thống</strong> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng lệnh <code>last</code> để hiển thị thông tin nhật ký đăng nhập trên máy:</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-59-26-aa6a590e2cc7de9987d6.jpeg" alt="aa6a590e2cc7de9987d6.jpeg"></p>
<blockquote>
<p>💡 Nhưng ta có thể sử dụng lệnh <code>last</code> kèm theo <strong>ống dẫn</strong> <code>head -n -1</code> để hiển thị thời gian đăng nhập cuối cùng như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-53-40-6c47c620b3e941b718f8.jpeg" alt="6c47c620b3e941b718f8.jpeg"></p>
</blockquote>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 5.2</strong>. Tạo một người dùng mới</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng lệnh <code>adduser</code> hoặc <code>useradd</code> để tạo người dùng mới (<em>dùng tài khoản root</em>) (<em>Mình tạo tên <code>newUser</code></em>)</p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 5.3</strong>. Tìm <strong>thời gian</strong> người dùng ở <code>5.2</code> được tạo ra (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Thông tin tạo người dùng nằm trong file <code>/var/log/secure</code>, sử dụng lệnh <code>cat</code> để in ra (<em>dùng tài khoản <code>root</code></em>)</p>
<blockquote>
<p>💡 Ta nên kèm theo <strong>ống dẫn</strong> để tìm kiếm nhanh hơn như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-13-00-09-b2ad08ca7d038f5dd612.png" alt="b2ad08ca7d038f5dd612.png"></p>
</blockquote>
</details></template>
