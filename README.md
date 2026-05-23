<!DOCTYPE html>

<html>

<head>

<title>
NutriPlan MBG
</title>

<link
rel="stylesheet"
href="style.css">

<meta
name="viewport"
content="width=device-width, initial-scale=1">

</head>



<body>



<!-- NAVBAR -->

<nav>

<div class="brand">

<img
src="assets/undip.jpeg"
class="logo-kampus">

<div>

<h3>

NutriPlan MBG

</h3>

<p>

Universitas Diponegoro

</p>

</div>

</div>



<div class="menu">

<a href="#home">

Beranda

</a>

<a href="#hasil">

Parameter

</a>
<a href="#alur">

Metode

</a>

<a href="#tim">

Tim

</a>

<a
href="#simulation-result"
class="nav-button">

Simulasi

</a>

</div>

</nav>






<!-- HERO -->

<section
id="home"
class="hero">



<div class="hero-left">



<div class="hero-tag">

🍱 Nutrition Optimizer

</div>



<h1>

Sistem Optimasi
Menu Bergizi Gratis

</h1>



<h4>

Berbasis
Chance Constrained Programming
dan
Genetic Algorithm

</h4>



<p>

Model optimasi untuk menghasilkan
rekomendasi menu bergizi
yang memenuhi kebutuhan gizi
dan efisien secara biaya.

</p>

<div class="dataset-info">

53 Menu
•

32 Tambahan
•

CCP + GA

</div>

<div class="simulasi-panel">

<h3>

Jalankan Simulasi

</h3>



<select id="jenis">

<option>

Menu Basah

</option>

<option>

Menu Kering

</option>

</select>



<input
type="number"
id="budget"
value="15000"
placeholder="Target Biaya">



<select
id="prioritas">

<option>

Protein Tinggi

</option>

<option>

Serat Tinggi

</option>

<option>

Energi Tinggi

</option>

<option>

Biaya Minimum

</option>

</select>


<div class="hero-stats">

<div>

53+

<span>

Menu

</span>

</div>



<div>

95%

<span>

CCP

</span>

</div>



<div>

GA

<span>

Optimasi

</span>

</div>

</div>
<button
type="button"
onclick="generateMenu()">

🧬 Jalankan Optimasi

</button>



</div>

</div>






<div class="hero-right">

<img
id="herombg"
src="assets/mbgwow.jpeg"
class="hero-image"
alt="Menu MBG"
loading="eager">

</div>



</section>






<!-- HASIL OPTIMASI -->

<section>

<div
id="simulation-result">

</div>

</section>







<!-- PARAMETER -->

<section
id="hasil"
class="hasil">

<div>

<h2>

Parameter Model

</h2>



<p
class="desc">

Model menggunakan
Chance Constrained Programming (CCP)
dengan confidence level 95%.

</p>



<div class="stat-container">

<div class="stat">

<h3>
500
</h3>

<p>
Minimum Energi
</p>

</div>



<div class="stat">

<h3>
15 g
</h3>

<p>
Minimum Protein
</p>

</div>



<div class="stat">

<h3>
20 g
</h3>

<p>
Minimum Lemak
</p>

</div>



<div class="stat">

<h3>
100 g
</h3>

<p>
Minimum Karbohidrat
</p>

</div>



<div class="stat">

<h3>
5 g
</h3>

<p>
Minimum Serat
</p>

</div>



<div class="stat">

<h3>
Rp15.000
</h3>

<p>
Target Biaya
</p>

</div>



<div class="stat">

<h3>
95%
</h3>

<p>
Confidence CCP
</p>

</div>

</div>

</div>

</section>








<!-- METODE -->

<section
id="alur"
class="alur">

<div class="judul-kiri">

<h2>

Metode Optimasi

</h2>



<p
class="desc">

Input →
Constraint →
CCP →
Fitness →
GA →
Output

</p>

</div>



<div class="alur-container">

<div class="alur-box">

<div class="nomor">

01

</div>

<h3>

📥 Dataset

</h3>

<p>

Menu Basah<br>
Menu Kering<br>
Item Tambahan

</p>

</div>





<div class="alur-box">

<div class="nomor">

02

</div>

<h3>

📊 Constraint

</h3>

<p>

Energi ≥ 500<br>
Protein ≥ 15<br>
Biaya ≤ 15000

</p>

</div>





<div class="alur-box">

<div class="nomor">

03

</div>

<h3>

🧬 Optimasi

</h3>

<div class="flow-inline">

<span>CCP</span>

<div class="panah">→</div>

<span>Fitness</span>

<div class="panah">→</div>

<span>GA</span>

</div>

</div>





<div class="alur-box">

<div class="nomor">

04

</div>

<h3>

🍱 Output

</h3>

<p>

Top 6 Menu<br>
Total Gizi<br>
Total Biaya

</p>

</div>

</div>

</section>








<!-- TIM -->

<section
id="tim"
class="tim">

<h2>

Tim Peneliti

</h2>



<div class="tim-container">

<div class="member">

<h3>

Viola Izzatul Umami

</h3>

<p>

Matematika S1

</p>

</div>



<div class="member">

<h3>

Titis Setyo Widanti

</h3>

<p>

Matematika S1

</p>

</div>



<div class="member">

<h3>

Yosi Risti Putika Sari

</h3>

<p>

Matematika S1

</p>

</div>

</div>

</section>







<footer>

NutriPlan MBG © 2026 —
Universitas Diponegoro

</footer>





<script
src="data/menuData.js">
</script>

<script
src="script.js">
</script>



</body>

</html>
