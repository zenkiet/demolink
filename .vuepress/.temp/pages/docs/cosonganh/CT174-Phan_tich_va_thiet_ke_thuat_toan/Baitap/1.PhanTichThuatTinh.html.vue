<template><h1 id="bai-tap-phan-tich-thuat-toan" tabindex="-1"><a class="header-anchor" href="#bai-tap-phan-tich-thuat-toan" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-12-52-icons8-guru.png" alt="icons8gurupng">Bài tập Phân tích thuật toán <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-18-59-icons8-1_cute.png" alt="icons8-1_cute.png"></h1>
<h2 id="_1-dung-phuong-phap-truy-hoi" tabindex="-1"><a class="header-anchor" href="#_1-dung-phuong-phap-truy-hoi" aria-hidden="true">#</a> 1. Dùng phương pháp <code>truy</code> hồi</h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-10-40-27-icons8-questions.png" alt="icons8-questions.png"> <strong>Câu 1</strong>  : Giải Phương trình</p>
<ul>
<li>
<p><code>Cₙ = Cₙ₋₁ +n</code></p>
</li>
<li>
<p><code>C₁ = 1</code></p>
</li>
</ul>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p><code>Cₙ = Cₙ₋₁ + n</code></p>
<p><code>= Cₙ₋₂ + (n-1) + n</code></p>
<p><code>= Cₙ₋₃ + (n-2) + (n-1) + n</code></p>
<p>....</p>
<p><code>= C₁ + 2 +...+ (n-2) + (n-1) + n</code></p>
<p><code>= 1 + 2+...+(n-1)+n</code></p>
<p><code>= n(n+1)/2</code></p>
<p><code>= n²/2</code></p>
<p>==&gt; <code>O(n) = n²/2</code></p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-10-40-27-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2</strong> : Giải phương trình</p>
<ul>
<li>
<p><code>Cₙ = Cₙ/₂ + 1</code> (<em>n≥2</em>)</p>
</li>
<li>
<p><code>C₁ = 0</code></p>
</li>
</ul>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Đặt <code>n = 2ᵏ</code></p>
<p><code>C(2ᵏ) = C(2ᵏ⁻¹) + 1</code></p>
<p><code>= C(ᵏ⁻²) + 2</code></p>
<p><code>= C(ᵏ⁻³) + 3</code></p>
<p>...</p>
<p><code>Cₙ = k = logn</code></p>
<p><code>Cₙ ≈ logn</code></p>
<p>==&gt; <code>O(n) = logn</code></p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-10-40-27-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3</strong> : Giải phương trình</p>
<ul>
<li>
<p><code>Cₙ = 2Cₙ/₂ + n</code> (<em>n≥2</em>)</p>
</li>
<li>
<p><code>C₁ = 0</code></p>
</li>
</ul>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Đặt <code>n = 2ᵏ</code></p>
<p><code>C(2ᵏ)    = 2C(2ᵏ⁻¹) + 2ᵏ</code></p>
<p><code>C(2ᵏ)/2ᵏ = 2C(2ᵏ⁻¹) + 2ᵏ</code></p>
<p><code>= C(2ᵏ⁻¹)/2ᵏ⁻¹ + 1</code></p>
<p><code>= C(2ᵏ⁻²)/2ᵏ⁻² + 2</code></p>
<p>...</p>
<p><code>= k</code></p>
<p>==&gt; <code>C(2ᵏ) = k.2ᵏ</code></p>
<p>==&gt; <code>Cₙ = nlogn</code></p>
<p>==&gt; <code>O(n) = nlogn</code></p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-10-40-27-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4</strong> : Giải phương trình : <code>C(n) = 2C(√n) + logn</code></p>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<p>Đặt <code>k = logn</code> ==&gt; <code>n = 2ᵏ</code></p>
<p><code>C(2ᵏ) = 2(2ᵏ/²) + k</code></p>
<p>Đặt <code>S(k) = C(2ᵏ)</code></p>
<p><code>S(k) = 2S(k/2) + k</code></p>
<p><code>= k.logk</code></p>
<p><code>C(n) = logn.log(logn)</code></p>
<p>==&gt; <code>O(n) = logn.log(logn)</code></p>
<hr>
</details>
<hr>
<h2 id="_2-dung-phuong-phap-tong-quat" tabindex="-1"><a class="header-anchor" href="#_2-dung-phuong-phap-tong-quat" aria-hidden="true">#</a> 2. Dùng phương pháp <code>tổng quát</code></h2>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-10-40-27-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 1</strong>. Giải phương trình :</p>
<ul>
<li>
<p><code>T(1) = 1</code></p>
</li>
<li>
<p><code>T(n) = 4T(n/2) + n</code></p>
</li>
</ul>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p>Phương trình trên có dạng <code>tổng quát</code></p>
</li>
<li>
<p><code>d(n) = n</code> là <strong>hàm nhân</strong></p>
<ul>
<li>
<p><code>a</code> = 4</p>
</li>
<li>
<p><code>b</code> = 2</p>
<p>==&gt; <code>d(b)</code> =  <code>d(2)</code> = 2</p>
<p>==&gt; <code>a</code> &gt; <code>d(b)</code></p>
</li>
</ul>
</li>
</ul>
<p>==&gt; Sử dụng công thức <code>T(n)</code> = <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-11-44-45-Screen Shot 2021-05-11 at 11.44.37.png" alt="Screen Shot 20210511 at 114437png" width="62"> = <code>O(n²)</code></p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-10-40-27-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 2</strong>. Giải phương trình :</p>
<ul>
<li>
<p><code>T(1) = 1</code></p>
</li>
<li>
<p><code>T(n) = 4T(n/2) + n²</code></p>
</li>
</ul>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p>Phương trình trên có dạng <code>tổng quát</code></p>
</li>
<li>
<p><code>d(n) = n²</code> là <strong>hàm nhân</strong></p>
<ul>
<li>
<p><code>a</code> = 4</p>
</li>
<li>
<p><code>b</code> = 2</p>
<p>==&gt; <code>d(b)</code> = <code>d(2)</code> = 2² = 4</p>
<p>==&gt; <code>a</code> = <code>d(b)</code></p>
</li>
</ul>
</li>
</ul>
<p>==&gt; Sử dụng công thức <code>T(n)</code> = <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-11-46-18-Screen Shot 2021-05-11 at 11.46.01.png" alt="Screen Shot 2021-05-11 at 11.46.01.png" width="104"> = <code>O(n².logn)</code></p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-10-40-27-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 3</strong>. Giải phương trình:</p>
<ul>
<li>
<p><code>T(1) = 1</code></p>
</li>
<li>
<p><code>T(n) = 4T(n/2) + n³</code></p>
</li>
</ul>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p>Phương trình trên có dạng <code>tổng quát</code></p>
</li>
<li>
<p><code>d(n) = n³</code> là <strong>hàm nhân</strong></p>
<ul>
<li>
<p><code>a</code> = 4</p>
</li>
<li>
<p><code>b</code> = 2</p>
<p>==&gt; <code>d(b)</code> = <code>d(2)</code> = 2³ = 8</p>
<p>==&gt; <code>a</code> &lt; <code>d(b)</code></p>
</li>
</ul>
</li>
</ul>
<p>==&gt; Sử dụng công thức <code>T(n)</code> = <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-11-45-22-Screen Shot 2021-05-11 at 11.45.20.png" title="" alt="Screen Shot 2021-05-11 at 11.45.20.png" width="81"> = <code>O(n³)</code></p>
<hr>
</details>
<blockquote>
<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-10-40-27-icons8-questions.png" alt="icons8questionspng"> <strong>Câu 4</strong>. Giải phương trình:</p>
<ul>
<li>
<p><code>T(1) = 1</code></p>
</li>
<li>
<p><code>T(n) = 2T(n/2) + n.logn</code></p>
</li>
</ul>
</blockquote>
<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>
<br>
<ul>
<li>
<p>Phương trình trên là dạng <code>tổng quát</code></p>
<ul>
<li>
<p><code>a</code> = 2</p>
</li>
<li>
<p><code>b</code> = 2</p>
</li>
</ul>
</li>
<li>
<p><code>d(n) = n.logn</code> <strong>không</strong> phải là <strong>hàm nhân</strong></p>
<ul>
<li>
<p><strong>Nghiệm thuần nhất</strong> : <code>nˡᵒᵍᵇ⁽ᵃ⁾</code> = <code>n</code></p>
</li>
<li>
<p><strong>Nghiệm riêng</strong> : <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-13-13-21-Screen Shot 2021-05-11 at 13.13.08.png" alt="Screen Shot 2021-05-11 at 13.13.08.png" width="108">  = <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-13-20-33-Screen Shot 2021-05-11 at 13.20.21.png" title="" alt="Screen Shot 2021-05-11 at 13.20.21.png" width="132"></p>
<p>= <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-13-21-15-Screen Shot 2021-05-11 at 13.20.58.png" alt="Screen Shot 2021-05-11 at 13.20.58.png" width="84"> = <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/11-13-21-44-Screen Shot 2021-05-11 at 13.21.06.png" title="" alt="Screen Shot 2021-05-11 at 13.21.06.png" width="95"></p>
<p>= <code>O(2ᵏ.n²)</code></p>
<p>==&gt; Theo cách giải đệ quy tổng quát : <code>b = nᵏ</code> nên <code>k = logᵦn</code> và <code>k = logn</code></p>
<p>==&gt; Nghiện riêng : <code>O(n².logn)</code></p>
</li>
</ul>
</li>
</ul>
<p>==&gt; <code>nghiệm riêng</code> &gt; <code>nghiệm thuần nhất</code></p>
<p>==&gt; <code>T(n) = O(n².logn)</code></p>
<hr>
</details></template>
