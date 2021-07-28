<template><h1 id="quan-ly-tai-khoan-nguoi-dung-o-cung-va-he-thong-tap-tin" tabindex="-1"><a class="header-anchor" href="#quan-ly-tai-khoan-nguoi-dung-o-cung-va-he-thong-tap-tin" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-04-53-icons8-manager.png" alt="icons8-manager.png"> Quản lý tài khoản người dùng, ổ cứng và hệ thống tập tin <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-05-27-EXPERT SYSTEM.png" alt="EXPERT SYSTEM.png"></h1>
<h2 id="_1-cai-đat-centos" tabindex="-1"><a class="header-anchor" href="#_1-cai-đat-centos" aria-hidden="true">#</a> 1. Cài đặt CentOS <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-13-14-icons8-centos.png" title="" alt="icons8-centos.png" width="40"></h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" title="" alt="icons8-questions.png" width="30"> <strong>Câu 1.</strong> Thực hiện cài đặt <code>CentOS 6</code> (<em>hoặc <code>CentOS 7</code>, <code>8</code></em>) vào máy tính cá nhân (<em>hoặc máy ảo</em>) của bạn (<em>KHÔNG cần chụp màn hình minh hoạ</em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Link file ISO <a href="https://www.centos.org/download/" target="_blank" rel="noopener noreferrer">CentOS 8<OutboundLink/></a></p>
</details>
<hr>
<h2 id="_2-quan-li-tai-khoan" tabindex="-1"><a class="header-anchor" href="#_2-quan-li-tai-khoan" aria-hidden="true">#</a> 2. Quản lí tài khoản <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-33-54-icons8-networking_manager.png" title="" alt="icons8-networking_manager.png" width="40"></h2>
<p>Tìm hiểu và thực hiện các yêu cầu sau :</p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 2.1</strong>. Sử dụng lệnh <code>adduser</code> và <code>passwd</code> để tạo một tài khoản mới với tên đăng nhập có dạng <code>masosinhvien</code> (<em>ví dụ: <code>B1909935</code></em>)  (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8-screenshot.png">)</p>
<p>Quan sát để thấy rằng khi một tài khoản mới được tạo, thư mục cá nhân trong <code>/home</code> và nhóm cá nhân trong <code>/etc/group</code> ứng với tài khoản đó cũng được tạo theo.</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>Sử dụng tài khoản <code>root</code> để tạo người dùng mới như sau :</li>
</ul>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-00-36-8c66dc280146f318aa571.jpg" alt="8c66dc280146f318aa571.jpg"></p>
<ul>
<li>
<p>Sử dụng lệnh <code>ls</code> hiển thị danh sách các file trong thư mục :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-00-41-9a13345ce9321b6c42232.jpg" alt="9a13345ce9321b6c42232.jpg"></p>
</li>
<li>
<p>Sử dụng lệnh <code>cat</code> để xem nội dung bên trong file :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-00-34-8c6c7d23a04d52130b5c4.jpg" alt="8c6c7d23a04d52130b5c4.jpg"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-29-14-fd15315aec341e6a47253.jpg" alt="fd15315aec341e6a47253.jpg"></p>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 2.2</strong>. Mở file <code>/etc/shadow</code> và cho biết <strong>mật khẩu</strong> bạn vừa tạo cho tài khoản mới sử dụng giải thuật mã hoá nào ? Dựa vào đâu để biết điều đó ? (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng lệnh <code>cat</code> để xem nội dung bên trong file :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-01-12-2a04a263790d8b53d21c.jpg" alt="2a04a263790d8b53d21c.jpg"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-32-01-078991ee4a80b8dee191.png" alt="078991ee4a80b8dee191.png"></p>
<p>==&gt; <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-40-46-icons8-centos.png" alt="icons8-centos.png"><code>CentOS</code> sử dụng <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-40-55-sha512.png" title="" alt="sha512.png" width="30"><code>SHA512</code> để mã hoá mật khẩu, vì có ký hiệu <code>$6</code> trước dãy mật khẩu đã mã hoá</p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.3</strong>. Thiết lập <strong>ngày hết hạn</strong> cho <strong>tài khoản</strong> ở <code>2.1</code> là ngày <code>31/12/2020</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng (Yêu cầu người dùng <code>root</code>) :</p>
<ul>
<li><code>usermod -e &lt;date&gt; &lt;user&gt;</code> : đặt ngày hết hạn cho tài khoản cụ thể</li>
<li><code>chage -l &lt;user&gt;</code> : Hiển thị thông tin hết hạn tài khoản cụ thể</li>
</ul>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-43-22-f58088d2acbb5ee507aa.jpg" alt="f58088d2acbb5ee507aa.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.4</strong>. Tạo một nhóm <strong>người dùng</strong> với tên nhóm là <strong>mã lớp</strong> của bạn. Thêm <strong>tài khoản</strong> ở <code>2.1</code> vào nhóm vừa tạo (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng  (<em>yêu cầu người dùng <code>root</code></em>) :</p>
<ul>
<li><code>groupadd &lt;group&gt;</code> : thêm nhóm người dùng</li>
<li><code>usermod -a -G &lt;group&gt; &lt;user&gt;</code>  : thêm người dùng vào nhóm</li>
<li><code>groups &lt;user&gt;</code> : Kiểm tra người dùng thuộc tất cả nhóm nào</li>
</ul>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-44-59-473b60074d6ebf30e67f.jpg" alt="473b60074d6ebf30e67f.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.5</strong>. Thực hiện khoá tài khoản ở <code>2.1</code>, sau đó đăng nhập thử và quan sát (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng (<em>yêu cầu người dùng <code>root</code></em>) :</p>
<ul>
<li>
<p><code>usermod -L &lt;user&gt;</code> : khoá tài khoản người dùng</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-49-24-a308236c4805ba5be314.jpg" alt="a308236c4805ba5be314.jpg"></p>
<blockquote>
<p>⚠️ Sau khi <strong>khoá tài khoản</strong>, chuỗi mật khẩu mã hoá sẽ thêm <code>!</code> vào trước.</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-51-20-b5dac547ca2e3870613f.jpg" alt="b5dac547ca2e3870613f.jpg"></p>
</blockquote>
</li>
<li>
<p>Sử dụng lệnh <code>su</code> để chuyển tài khoản :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-53-13-465051cd5ea4acfaf5b5.jpg" alt="465051cd5ea4acfaf5b5.jpg"></p>
<blockquote>
<p>⚠️ Ở <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-40-46-icons8-centos.png" alt="icons8-centos.png"> <code>CentOS 8</code> khi ta <strong>khoá tài khoản</strong>, màn hình đăng nhập sẽ không có tài khoản đã khoá</p>
<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-54-32-499567e10988fbd6a299.jpg" title="" alt="499567e10988fbd6a299.jpg" width="243">
</blockquote>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2.6</strong>. Mở khoá tài khoản ở <code>2.1</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng (<em>yêu cầu tài khoản <code>root</code></em>) :</p>
<ul>
<li>
<p><code>usermod -U &lt;user&gt;</code> : Mở khoá tài khoản</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-57-45-53535b7a3013c24d9b02.jpg" alt="53535b7a3013c24d9b02.jpg"></p>
<blockquote>
<p>⚠️ Sau khi  <strong>mớ khoá</strong>, chuỗi mật khẩu sẽ xoá đi <code>!</code> trước nó ==&gt; trở lại như xưa</p>
</blockquote>
</li>
<li>
<p>Sử dụng lệnh <code>su</code> để chuyển đổi tài khoản (<em>từ tài khoản thường</em>) :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-59-02-0dc2abebc08232dc6b93.jpg" alt="0dc2abebc08232dc6b93.jpg"></p>
<blockquote>
<p>⚠️ Màn hình đăng nhập đã hiện thị tài khoản</p>
<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-59-32-8ad527cc4aa5b8fbe1b4.jpg" alt="8ad527cc4aa5b8fbe1b4.jpg" width="292">
</blockquote>
</li>
</ul>
</details>
<hr>
<h2 id="_3-quyen-root" tabindex="-1"><a class="header-anchor" href="#_3-quyen-root" aria-hidden="true">#</a> 3. Quyền root <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-40-22-icons8-rook.png" title="" alt="icons8-rook.png" width="40"></h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.1</strong>. Quyền <code>root</code> là gì &gt;</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Quyền <code>root</code> là quyền thực thi cao dưới người quản trị cao nhất.</p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.2</strong>. Nêu các ưu điểm của việc dùng <code>sudo</code> so vời dùng <code>su</code> (<em>chuyển sang tài khoản <code>root</code></em>)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Có sự khác biệt lớn giữa các lệnh <strong><code>su</code></strong> và <strong><code>sudo</code></strong>:</p>
<ul>
<li><strong><code>su</code></strong> chuyển bạn sang <strong>tài khoản người dùng <code>root</code></strong>.</li>
<li><strong><code>sudo</code></strong> chạy lệnh với <strong>đặc quyền <code>root</code></strong>.</li>
</ul>
<p>Về cơ bản, <strong><code>sudo</code></strong> là một <strong>binary setuid</strong> là thực hiện lệnh <strong><code>root</code></strong> thay mặt người dùng uỷ quyền khác.</p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.3</strong>. Mô tả các bước (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">) để cấp quyền <code>sudo</code> cho tài khoản ở <code>2.1</code>. Sau đó cho một ví dụ để kiểm chứng xem tài khoản này đã thực sự được cấp quyền hay chưa (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Để cho riêng người dùng quyền truy cập <strong><code>root</code></strong>, bạn cần thêm người dùng vào nhóm quyền truy cập <strong><code>root</code></strong>.</p>
<ul>
<li>
<p><strong>B1</strong> : Gõ lệnh <code>visudo</code> dưới tài khoản <code>root</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-05-59-7cf08edccfb43dea64a5.jpg" alt="7cf08edccfb43dea64a5.jpg"></p>
</li>
<li>
<p><strong>B2</strong> : Kéo xuống tìm và chỉnh sửa như sau :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-08-32-cf8f86a2c7ca35946cdb.jpg" alt="cf8f86a2c7ca35946cdb.jpg"></p>
<blockquote>
<p>💡 Tuy nhiên tôi khuyên bạn nên cấp quyền <code>root</code> cho <code>group</code>, vì ta có thể dễ dàng quản lí nó, <code>CentOS 8</code> đã tạo cho ta sẵn nhóm <code>wheel</code></p>
</blockquote>
</li>
<li>
<p><strong>B3</strong>: Thêm tài khoản vào nhóm <code>wheel</code> :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-09-44-d57f9451d53927677e28.jpg" alt="d57f9451d53927677e28.jpg"></p>
</li>
</ul>
<p>==&gt; Vậy là đã xong các bước cấp quyền <code>root</code> cho tài khoản , thử như sau :</p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-14-26-eca6a488e5e017be4ef1.jpg" alt="eca6a488e5e017be4ef1.jpg"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-14-33-dd1c8732c65a34046d4b.jpg" alt="dd1c8732c65a34046d4b.jpg"></p>
<p>==&gt; Vậy là chúng ta không cần tài khoản <code>root</code> vẫn có thể vào file <code>/etc/shadow</code></p>
</blockquote>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3.4</strong>. Thu hồi quyền <code>root</code> của một tài khoản ở <code>2.1</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng <code>gpasswd -d &amp;lt;user&amp;gt; &amp;lt;group&amp;gt;</code> : Xoá người dùng ra khỏi nhóm</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-17-33-6458a4abefc31d9d44d2.jpg" alt="6458a4abefc31d9d44d2.jpg"></p>
<p>==&gt; Vậy là đã thu hồi quyền <code>root</code> cho tài khoản, thử như sau :</p>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-17-37-51cca93fe25710094946.jpg" alt="51cca93fe25710094946.jpg"></p>
<p>==&gt; Vậy là tài khoản <code>B1909935_CTU</code> không thể truy cập vào file <code>/etc/shadow</code></p>
</blockquote>
</details>
<hr>
<h2 id="_4-đia-va-phan-vung-o-cung" tabindex="-1"><a class="header-anchor" href="#_4-đia-va-phan-vung-o-cung" aria-hidden="true">#</a> 4. Đĩa và phân vùng ổ cứng <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-43-48-icons8-ssd.png" title="" alt="icons8-ssd.png" width="40"></h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4.1</strong>. Thêm một ổ cứng vào máy ảo <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-45-54-icons8-centos.png" alt="icons8-centos.png"> <code>CentOS</code>. Nếu đã cài <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-45-54-icons8-centos.png" alt="icons8-centos.png"> <code>CentOS</code> trực tiếp vào máy tính cá nhân thì có thể sử dụng  1 <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-45-37-icons8-usb_memory_stick.png" alt="icons8-usb_memory_stick.png"><code>USB</code> để thay thế.</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Cắm <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-45-37-icons8-usb_memory_stick.png" alt="icons8usbmemorystickpng"><code>USB</code> vào máy và gõ lệnh <code>sudo fdisk -l</code> để xem thiết bị :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-21-45-196b4ebaa3d2518c08c3.jpg" alt="196b4ebaa3d2518c08c3.jpg"></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-22-30-78247bb4b6dc44821dcd.jpg" alt="78247bb4b6dc44821dcd.jpg"></p>
<p>==&gt; Vậy <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-45-37-icons8-usb_memory_stick.png" alt="icons8usbmemorystickpng"><code>USB</code> của ta là <code>/dev/sde</code> và có dung lượng <code>14.3GB</code></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4.2</strong>. Sử dụng lệnh <code>fdisk</code> và <code>mkfs</code> để tạo và <strong>format</strong> một phân vùng trên ổ cứng vừa mới thêm ở <code>4.1</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><strong>B1</strong> : Gõ lệnh <code>fdisk &lt;đưỡng dẫn ổ cứng&gt;</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-25-57-b80fcc8201eaf3b4aafb.jpg" alt="b80fcc8201eaf3b4aafb.jpg"></p>
<blockquote>
<p>💡 Gõ <code>m</code> để đọc hướng dẫn</p>
<p>==&gt; Nếu ố cứng có dữ liệu hãy gõ <code>d</code> để xoá ổ cứng</p>
</blockquote>
<p><strong>B2</strong> : Gõ <code>n</code> để tạo phân vùng mới</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-20-16-12-00371ca1d1c923977ad8 (1).jpg" alt="00371ca1d1c923977ad8 (1).jpg"></p>
<p><strong>B3:</strong> Gõ <code>w</code> để ghi phân vùng</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-20-16-35-bb709fe6528ea0d0f99f.jpg" alt="bb709fe6528ea0d0f99f.jpg"></p>
<p>==&gt; Đã tạo xong phân vùng cần thiết  <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-20-19-20-icons8-checkmark.png" alt="icons8-checkmark.png"></p>
<blockquote>
<p>💡 Kiểm tra bằng cách gõ <code>fdisk -l &lt;đường dẫn ổ cứng&gt;</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-20-16-09-97f5187ed51627487e07.jpg" alt="97f5187ed51627487e07.jpg"></p>
</blockquote>
<p>Sử dụng lệnh <code>mkfs.&lt;chuẩn file system&gt; &lt;đưỡng dẫn ổ cứng&gt;</code> để <strong>format</strong> ổ cứng theo chuẩn <code>file system</code> mình muốn :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-20-16-05-37b6493a8452760c2f43.jpg" alt="37b6493a8452760c2f43.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4.3</strong>. Tạo thư mục mới có tên <code>/data</code> bằng tài khoản <code>root</code>. <strong>Mount</strong> phân vùng ổ cứng ở <code>4.2</code> tới thư mục <code>/data</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng (<em>yêu cầu tài khoản <code>root</code></em>)</p>
<ul>
<li><code>mkdir</code> : tạo thư mục</li>
<li><code>mount &lt;đưỡng dẫn ổ cứng&gt; &lt;đưỡng dẫn thư mục&gt;</code> : Gắn ổ cứng vào đường dẫn cụ thể</li>
</ul>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-15-12-c3d6965b5b33a96df022.jpg" alt="c3d6965b5b33a96df022.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4.4</strong>. Thực hiện lệnh <code>df -h</code> để xem kết quả (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-27-18-8942f4cf39a7cbf992b6.jpg" alt="8942f4cf39a7cbf992b6.jpg"></p>
<blockquote>
<p>💡Ổ cứng <code>/dev/sde</code> có <code>15G</code>, khả dụng <code>14G</code> và đã sử dụng <code>41M(1%)</code> đã được mount vào trong <code>/data</code></p>
</blockquote>
</details>
<hr>
<h2 id="_5-phan-quyen-tren-he-thong-tap-tin" tabindex="-1"><a class="header-anchor" href="#_5-phan-quyen-tren-he-thong-tap-tin" aria-hidden="true">#</a> 5. Phân quyền trên hệ thống tập tin <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-49-01-icons8-remove_key.png" title="" alt="icons8-remove_key.png" width="40"></h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 5.1</strong>. Tạo nhóm người dùng <code>quantri</code>, thêm người dùng ở <code>2.1</code> vào nhóm <code>quantri</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Làm theo câu <a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT179-Quan_tri_he_thong/Thuchanh/buoi2.md#2-qu%E1%BA%A3n-l%C3%AD-t%C3%A0i-kho%E1%BA%A3n-" target="_blank" rel="noopener noreferrer">2.4<OutboundLink/></a> trên :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-30-11-d0e5c2e90b81f9dfa090.png" alt="d0e5c2e90b81f9dfa090.png"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 5.2</strong>. Chuyển nhóm <strong>chủ sỡ hữu</strong> của thư mục <code>/data</code> sang <code>quantri</code>. Phân quyền cho thư mục <code>/data</code> là chủ sở hữu có toàn quyền <code>read</code>, <code>write</code> và <code>execute</code>, nhóm chủ sở hữu có quyền <code>read</code> và <code>execute</code>, những người khác không có quyền gì (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p>Sử dụng lệnh <code>chgrp &lt;group&gt; &lt;đưỡng dẫn&gt;</code> : thay đổi nhóm sử dụng cho thư mục cụ thể</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-37-16-8225745b5d30af6ef621.png" alt="8225745b5d30af6ef621.png"></p>
<blockquote>
<p>💡 Như bạn đã thấy quyền sở hữu nhóm đổi qua <code>quantri</code></p>
</blockquote>
</li>
<li>
<p>Sử dụng lệnh <code>chmod &lt;option&gt; &lt;đưỡng dẫn thư mục&gt;</code> : thay đổi quyền cho thư mục</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-37-15-4243ac3d855677082e47.png" alt="4243ac3d855677082e47.png"></p>
<blockquote>
<p>💡 Như bạn đã thấy  :</p>
<ul>
<li><code>drwxr</code> là toàn quyền cho <code>user</code></li>
<li><code>x</code> là quyền thực thi cho <code>group</code></li>
<li><code>---</code> là không có quyền gì cho <code>other</code></li>
</ul>
</blockquote>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 5.3</strong>. Dùng tài khoản <code>root</code> tạo tập tin <code>/data/file1.txt</code>. Sau đó dùng tài khoản ở <code>2.1</code> tạo tập tin <code>/data/file2.txt</code>. Quan sát và cho biết kết quả trong <strong>2</strong> trường hợp (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>🤔 Sử dụng lệnh <code>nano</code> hoặc <code>gedit</code> để tạo file và ghi :</p>
<ul>
<li>
<p>Người dùng <code>root</code>  :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-29-04-af4067354e5ebc00e54f.jpg" alt="af4067354e5ebc00e54f.jpg"></p>
</li>
<li>
<p>Người dùng <code>B1909935_CTU</code> :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-28-51-a2ea37821ee9ecb7b5f8.jpg" alt="a2ea37821ee9ecb7b5f8.jpg"></p>
<blockquote>
<p>⚠️ Ngay lập tức sẽ lỗi vì <code>B1909935_CTU</code> nằm trong group <code>quantri</code> chỉ có quyền <code>x</code> (<em>thực thi</em>), không có quyền <code>w</code> (<em>ghi</em>)</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-33-06-f1c525b10cdafe84a7cb.jpg" alt="f1c525b10cdafe84a7cb.jpg"></p>
</blockquote>
</li>
</ul>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 5.4</strong>. Dùng tài khoản <code>2.1</code> <em>mở</em> và <em>thay đổi</em> nội dung tập tin <code>/data/file1.txt</code>, cho biết kết quả (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng lệnh <code>nano</code> ở  tài khoản <code>B1909935_CTU</code> :</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-35-14-4922ca4ae321117f4830.jpg" alt="4922ca4ae321117f4830.jpg"></p>
<blockquote>
<p>⚠️ Sẽ phát sinh ra lỗi không có quyền ghi</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-36-50-c731b25d9b3669683027.jpg" alt="c731b25d9b3669683027.jpg"></p>
<p>==&gt; Vì chủ sở hữu của <code>file1.txt</code> là <code>root</code>, và người dùng khác chỉ có quyền <code>r</code> (<em>đọc</em>) ==&gt; <code>B1909935_CTU</code> không thể <strong>ghi</strong></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-37-05-6f608306aa6d5833017c.png" alt="6f608306aa6d5833017c.png"></p>
</blockquote>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 5.5</strong>. cấp quyền cho tài khoản <code>2.1</code> có thể thay đổi nội dung tập tin <code>/data/file1.txt</code> (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Sử dụng lệnh <code>chmod &lt;option&gt; &lt;đường dẫn thư mục&gt;</code> để cấp quyền cho thư mục</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-40-18-4d648802a16953370a78.jpg" alt="4d648802a16953370a78.jpg"></p>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 5.6</strong>. Tạo thêm một tài khoản <strong>mới</strong>, dùng tài khoản này mở tập tin <code>/data/file1.txt</code>, cho biết quả kết quả (<em>Chụp màn hình minh hoạ</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Làm theo câu <a href="https://github.com/Zenfection/CTU/blob/main/HocPhan/CT179-Quan_tri_he_thong/Thuchanh/buoi2.md#2-qu%E1%BA%A3n-l%C3%AD-t%C3%A0i-kho%E1%BA%A3n-" target="_blank" rel="noopener noreferrer">2.1<OutboundLink/></a> để tạo người dùng mới</p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-41-52-6e3cd55afc310e6f5720.jpg" alt="6e3cd55afc310e6f5720.jpg"></p>
<p>Sử dụng lệnh sau để mở thư mục <code>/data/file1.txt</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">nano</span> /data/file1.txt 
<span class="token comment"># Thực thi lệnh ở người dùng newStudent vừa tạo</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>⚠️ Sẽ đưa ra lỗi không thể truy cập vào <code>/data</code></p>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-44-59-86dfe2bacbd1398f60c0.jpg" alt="86dfe2bacbd1398f60c0.jpg"></p>
<p>🤔 Vì trong câu <code>5.2</code>, chúng ta thiết lập <code>/data</code>, người khác không có quyền gì cả và nhóm sở hữu là <code>quantri</code>, tài khoản <code>newStudent</code> không thuộc nhóm đó.</p>
</blockquote>
</details>
</template>
