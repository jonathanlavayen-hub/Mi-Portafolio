// Año
document.getElementById("year").textContent = new Date().getFullYear();

// Menú responsive
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Cerrar menú al hacer click en un link
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => menu.classList.remove("open"));
});

// Animaciones al hacer scroll (reveal)
const items = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

items.forEach(el => io.observe(el));

// Formulario (demo)
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Listo ✅ Recibí tu mensaje (demo). Si quieres, lo conecto a tu correo o WhatsApp.";
});
