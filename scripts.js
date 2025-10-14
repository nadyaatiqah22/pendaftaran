// Jalankan script setelah halaman selesai dimuat
window.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Countdown menuju 30 Oktober 2025 pukul 23:00 WIB
  const countdownDate = new Date("Oct 30, 2025 23:00:00 GMT+0700").getTime();

  const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const elDays = document.getElementById("days");
    const elHours = document.getElementById("hours");
    const elMinutes = document.getElementById("minutes");
    const elSeconds = document.getElementById("seconds");

    if (!elDays || !elHours || !elMinutes || !elSeconds) return; // kalau elemen belum ada, keluar

    elDays.textContent = String(days).padStart(2, "0");
    elHours.textContent = String(hours).padStart(2, "0");
    elMinutes.textContent = String(minutes).padStart(2, "0");
    elSeconds.textContent = String(seconds).padStart(2, "0");

    // Jika waktu habis
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.querySelector(".countdown-box").style.display = "none";
      document.getElementById("countdown-message").textContent = "⛔ Pendaftaran Telah Ditutup.";
    }
  }, 1000);
});

// === IMAGE SLIDER ===
window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!slides || images.length === 0) return;

  let index = 0;

  function showSlide(i) {
    index = (i + images.length) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));

  // Auto slide setiap 5 detik
  setInterval(() => showSlide(index + 1), 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuToggle.textContent = navMenu.classList.contains("show") ? "✕" : "☰";
  });
});

// Navbar Toggle
const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Hero Animation on Load
window.addEventListener("load", () => {
  document.getElementById("hero-content").classList.add("show");
});

// Countdown
const countdownDate = new Date("Oct 30, 2025 23:00:00 GMT+0700").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = countdownDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = d.toString().padStart(2, "0");
  document.getElementById("hours").textContent = h.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = m.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = s.toString().padStart(2, "0");

  if (diff < 0) {
    clearInterval(timer);
    document.getElementById("countdown").style.display = "none";
    document.getElementById("countdown-message").textContent = "⛔ Pendaftaran Telah Ditutup.";
  }
}, 1000);


