<template><h1 id="bai-1-mang-đien-bao" tabindex="-1"><a class="header-anchor" href="#bai-1-mang-đien-bao" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/07/26-18-26-40-icons8-broadcasting.png" width="50"> Bài 1: Mạng điện báo</h1>
<h2 id="i-gioi-thieu" tabindex="-1"><a class="header-anchor" href="#i-gioi-thieu" aria-hidden="true">#</a> I.Giới thiệu</h2>
<p>Là mạng sử dụng hệ thống mã <code>Morse</code> để mã hóa thông tin truyền đi.</p>
<blockquote>
<p>Mã <code>Morse</code> sử dụng hai tín hiệu <code>tít</code> (•) và <code>te</code> (<strong>-</strong>) có độ dài ngắn khác nhau để truyền thông tin</p>
<ul>
<li>
<p>Bên gửi sẽ lần lượt mã hóa từng ký tự của mã <code>Morse</code></p>
</li>
<li>
<p>Bên nhận sẽ thực hiện giải mã</p>
</li>
</ul>
<p>==&gt; Văn bản truyền đi gọi là <code>message</code> hay <code>telegram</code></p>
</blockquote>
<hr>
<h2 id="ii-lich-su" tabindex="-1"><a class="header-anchor" href="#ii-lich-su" aria-hidden="true">#</a> II.Lịch sử</h2>
<p>Vào năm <code>1851</code>, mạng thư tín đầu tiên được sử dụng để nối hai thành phố <code>London</code> và <code>Paris</code> ==&gt; Sau đó mở rộng thành toàn <strong>Châu Âu</strong></p>
<hr>
<h2 id="iii-cau-truc" tabindex="-1"><a class="header-anchor" href="#iii-cau-truc" aria-hidden="true">#</a> III.Cấu trúc</h2>
<p>Gồm 2 thành phần được nối lại với nhau bằng hệ thống dây dẫn truyền</p>
<ul>
<li>
<p>Trạm điện báo (<em><code>Telegraph Station</code></em>) : cho phép truyền và nhận các thông điệp dạng mã <code>Morse</code></p>
</li>
<li>
<p>Trạm chuyển điện báo (<em><code>Telegraph Switching</code></em>) : cho phép nhiều <code>trạm điện báo</code> sử dụng chung một đường truyền</p>
<blockquote>
<p>Tại <code>trạm chuyển điện báo</code> có một thao tác viên  nhận các điện báo gửi tới, xác định nơi cần chuyển tới <code>trạm điện báo</code>.</p>
<p>Nếu đường truyền nơi nhận đang được sử dụng, thao tác viên sẽ lưu lại và truyền đi khi đường truyền rãnh</p>
</blockquote>
</li>
</ul>
<hr>
<h2 id="iv-cai-thien" tabindex="-1"><a class="header-anchor" href="#iv-cai-thien" aria-hidden="true">#</a> IV.Cải thiện</h2>
<p>Để tăng tốc độ truyền tin thì :</p>
<ol>
<li>
<p>Hệ thống <code>Baudot</code> thay thế mã <code>Morse</code> bằng nhị phân <code>5 bits</code> (<em>có thể mã hóa cho <code>32</code> ký tự</em>)</p>
</li>
<li>
<p>Các trạm điện báo được thay thế bằng máy <code>teletype terminal</code></p>
</li>
<li>
<p>Hệ thống sử dụng kỹ thuật biến điệu (<em><code>MOdulation</code></em>) và đa hợp (<em><code>Multiplexing</code></em>) để truyền tải thông tin</p>
</li>
</ol>
</template>
