document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) e.target.classList.add("show");
  }
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

// Cursor blob follow
const blob = document.getElementById("cursorBlob");
let mouseX = 0, mouseY = 0, bx = 0, by = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateBlob(){
  bx += (mouseX - bx) * 0.06;
  by += (mouseY - by) * 0.06;
  blob.style.left = bx + "px";
  blob.style.top = by + "px";
  requestAnimationFrame(animateBlob);
}
animateBlob();

// Portfolio filter
const filterBtns = document.querySelectorAll(".fBtn");
const works = document.querySelectorAll(".work");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const f = btn.dataset.filter;
    works.forEach(w => {
      const cat = w.dataset.cat;
      const show = (f === "all" || f === cat);
      w.style.display = show ? "" : "none";
    });
  });
});

// Lead form -> WhatsApp
const leadForm = document.getElementById("leadForm");
leadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(leadForm);

  const nombre = (data.get("nombre") || "").toString().trim();
  const servicio = (data.get("servicio") || "").toString().trim();
  const mensaje = (data.get("mensaje") || "").toString().trim();

  const text =
    `Hola Jonathan, soy ${nombre}. ` +
    `Me interesa: ${servicio}. ` +
    `Mensaje: ${mensaje}`;

  const url = `https://wa.me/593986718265?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

// Mobile menu
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const mLinks = document.querySelectorAll(".mLink");

burger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
  mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
});

mLinks.forEach(l => l.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}));

