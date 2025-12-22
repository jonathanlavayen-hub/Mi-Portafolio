const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.getElementById("sendBtn").addEventListener("click", () => {
  const hint = document.getElementById("formHint");
  hint.textContent = "Listo: aquí se conectaría a un servicio de formularios o a tu backend.";
});
