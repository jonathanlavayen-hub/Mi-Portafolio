// Año
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menú responsive
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
}

// Animaciones al hacer scroll (reveal)
function initReveal() {
  const items = document.querySelectorAll(".reveal");

  // Si no existen elementos con .reveal, no hay nada que animar
  if (!items.length) return;

  // Si el navegador no soporta IntersectionObserver, mostramos todo
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("show"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));
}

initReveal();

// Formulario (demo)
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (msg) msg.textContent = "Enviado ✅ (demo). Si quieres, lo conecto a tu correo o WhatsApp.";
  });
}
