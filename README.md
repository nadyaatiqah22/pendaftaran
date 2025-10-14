<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
  <title>EventName 2025</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="bg-gray-50 text-gray-800">
    
  <!-- HEADER -->
  <header class="bg-gradient-to-r from-green-800 to-lime-400 text-white p-6 flex justify-between items-center shadow-md">
    <h1 class="text-xl font-bold">EventName 2025</h1>
    <button id="menu-toggle" class="text-2xl md:hidden">☰</button>
    <ul id="nav-menu" class="hidden md:flex space-x-6">
      <li><a href="#about" class="bg-yellow-400 text-indigo-700 px-3 py-1 rounded-md"">Tentang</a></li>
      <li><a href="#schedule" class="bg-yellow-400 text-indigo-700 px-3 py-1 rounded-md"">Jadwal</a></li>
      <li><a href="#sponsor" class="bg-yellow-400 text-indigo-700 px-3 py-1 rounded-md"">Sponsor</a></li>
      <li><a href="#register" class="bg-yellow-400 text-indigo-700 px-3 py-1 rounded-md">Daftar</a></li>
    </ul>
  </header>

    <!-- Navigasi -->
    <ul class="nav" id="nav-menu">
      <li><a href="#about">Tentang</a></li>
      <li><a href="#schedule">Jadwal</a></li>
      <li><a href="#sponsor">Sponsor</a></li>
      <li><a href="#daftar">daftar</a></li>

    </ul>
  </div>
</header>


  <!-- HERO -->
<section class="hero h-screen flex flex-col justify-center items-center text-center bg-cover bg-center" style="background-image: url('gambar8.jpg');">
    <div class="bg-black bg-opacity-50 p-8 rounded-xl text-white transition-all duration-700 transform scale-90 opacity-0" id="hero-content">
      <h1 class="text-4xl font-bold mb-2">Selamat Datang di <span class="text-yellow-400">EventName 2025</span></h1>
      <p class="mb-6">Konferensi Inovasi Digital Terbesar Tahun Ini!</p>
      <a href="#register" class="bg-yellow-400 text-indigo-800 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">Daftar Sekarang</a>
    </div>
  </section>

  <section id="gallery" class="section alt-bg" >
  <div class="container">
    <h2>Galeri Event</h2>
    <div class="slider">
      <div class="slides">
        <img src="gambar1.jpg" alt="Foto 1">
        <img src="gambar2.jpg" alt="Foto 2">
        <img src="gambar3.jpg" alt="Foto 3">
        <img src="gambar4.jpg" alt="Foto 4">
        <img src="gambar5.jpg" alt="Foto 5">
        <img src="gambar6.jpg" alt="Foto 6">
        <img src="gambar7.jpg" alt="Foto 7">
      </div>
      <button class="prev">&#10094;</button>
      <button class="next">&#10095;</button>
    </div>
  </div>
</section>


  <!-- TENTANG -->
  <section id="about" class="section container">
    <h2>Tentang Event</h2>
    <p style="text-align:center;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, dui at venenatis mattis, justo purus imperdiet ex, non lobortis quam lacus a quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum et suscipit massa. Etiam luctus semper sapien, non cursus neque egestas nec. Proin hendrerit efficitur pharetra. Duis efficitur mi eget ligula pretium rutrum at eu metus. Mauris sagittis vel lorem id fringilla. Etiam tempor feugiat tellus, convallis elementum ligula egestas vitae. Duis malesuada nunc non massa bibendum, id porta nibh accumsan. Phasellus id nisi ut augue consectetur tincidunt. Aliquam tempor dignissim sapien, at suscipit arcu commodo in. Ut sollicitudin neque ac dui interdum, sit amet tristique nisi vulputate. In hac habitasse platea dictumst. Vivamus fermentum, libero sed fringilla posuere, elit ante tristique nunc, in dictum lorem nibh id enim. Praesent dignissim ut tellus ut congue. Donec augue lectus, rutrum nec erat nec, fermentum porta ligula. Etiam sed maximus risus. Aenean posuere mi quis egestas volutpat. 
    </p> 
      
  </section>

<!-- COUNTDOWN -->
  <section id="countdown" class="section container">
    <h2>Waktu Pendaftaran</h2>
    <p class="small" style="text-align:center;">Pendaftaran ditutup pada <strong>30 Oktober 2025 pukul 23:00 WIB</strong></p>
    
    <div class="countdown-box">
      <div><span id="days">00</span><small>Hari</small></div>
      <div><span id="hours">00</span><small>Jam</small></div>
      <div><span id="minutes">00</span><small>Menit</small></div>
      <div><span id="seconds">00</span><small>Detik</small></div>
    </div>

    <p id="countdown-message" class="countdown-message"></p>
  </section>


  <!-- JADWAL -->
  <section id="schedule" class="section alt-bg container">
    <h2>Jadwal Singkat</h2>
    <ul class="timeline">
      <li class="py-12 bg-white text-center"><strong>08:00</strong> - Registrasi Peserta & Welcome Coffee</li>
      <li class="py-12 bg-white text-center"><strong>09:00</strong> - Opening & Keynote Speaker</li>
      <li class="py-12 bg-white text-center"><strong>11:00</strong> - Panel Diskusi & Workshop</li>
      <li class="py-12 bg-white text-center"><strong>13:00</strong> - Lunch & Networking</li>
      <li class="py-12 bg-white text-center"><strong>15:00</strong> - Sesi Inspiratif</li>
      <li class="py-12 bg-white text-center"><strong>17:00</strong> - Penutupan</li>
    </ul>
  </section>

  <!-- SPONSOR -->
  <section id="sponsor" class="section container">
    <h2>Sponsor & Partner</h2>
    <div class="sponsors">
      <img src="sponsor1.png" alt="Sponsor 1">
      <img src="sponsor2.png" alt="Sponsor 2">
      <img src="sponsor3.png" alt="Sponsor 3">
    </div>
  </section>

  <!-- PENDAFTARAN -->
  <section id="register" class="section alt-bg container">
    <h2>Pendaftaran Peserta</h2>
    
    <p style="text-align:center;">Pilih kategori yang sesuai dan isi formulir pendaftaran melalui Google Form berikut:</p>
    <div class="register-buttons">
      <a href="https://forms.gle/link-form-umum" target="_blank" class="btn-primary">Pendaftaran Peserta Umum</a>
      <a href="https://forms.gle/link-form-vip" target="_blank" class="btn-secondary">Pendaftaran VIP</a>
      <a href="https://forms.gle/link-form-sponsor" target="_blank" class="btn-secondary">Pendaftaran Sponsor</a>
      <a href="https://forms.gle/link-form-ukurankaos" target="_blank" class="btn-secondary">Pemesanan Ukuran Kaos</a>
    </div>
  </section>

  <!-- KONTAK -->
  <section id="contact" class="section container">
    <h2>Kontak Person</h2>
    <div class="contacts">
      <div class="contact-card">
        <h3>📞 Admin 1</h3>
        <p>Nama: <strong>Lia</strong></p>
        <p>WhatsApp: <a href="https://wa.me/6285854477399" target="_blank">+62 858-5447-7399</a></p>
      </div>
      <div class="contact-card">
        <h3>📞 Admin 2</h3>
        <p>Nama: <strong>Nadya</strong></p>
        <p>WhatsApp: <a href="https://wa.me/6289676341551" target="_blank">+62 896-7634-1551</a></p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <p>© 2025 EventName • All Rights Reserved</p>
  </footer>

  <script src="scripts.js"></script>
</body>
</html>
