const mainImage = document.getElementById("mainImage");
const heartZone = document.querySelector(".heart-zone");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

let currentPage = 1;

// Ocultar botones al inicio
btn1.style.display = "none";
btn2.style.display = "none";
btn3.style.display = "none";

// Función de cambio con animación
function changePage(image, page) {
  mainImage.style.opacity = "0";
  setTimeout(() => {
    mainImage.src = image;
  }, 700);
  setTimeout(() => {
    mainImage.style.opacity = "1";
    currentPage = page;
  }, 900);
}

// Hoja 1 → Hoja 2 (corazón)
heartZone.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentPage !== 1) return;
  changePage("images/hoja2.png", 2);
  heartZone.style.display = "none";
});

// Hoja 2 → Hoja 3 (pantalla completa)
document.addEventListener("click", () => {
  if (currentPage !== 2) return;
  changePage("images/hoja3.png", 3);
});

// Hoja 3 → Hoja 4 (pantalla completa)
document.addEventListener("click", () => {
  if (currentPage !== 3) return;
  changePage("images/hoja4.png", 4);

  setTimeout(() => {
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
  }, 900);
});

// Hoja 4 → Hoja 5 (Sí)
btn1.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentPage !== 4) return;
  changePage("images/hoja5.png", 5);
});

btn2.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentPage !== 4) return;
  changePage("images/hoja5.png", 5);
});

// Botón "No" (no hace nada)
btn3.addEventListener("click", (e) => {
  e.stopPropagation();
});