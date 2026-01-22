// ================= SLIDERS =================

let sliders = [0, 0]; // índice por producto

function changeSlide(product, direction) {

  const slides = document.querySelectorAll(`.slide-${product}`);

  if (!slides.length) return;

  slides.forEach(s => s.classList.remove("active"));

  sliders[product] =
    (sliders[product] + direction + slides.length) % slides.length;

  slides[sliders[product]].classList.add("active");
}

// Autoplay seguro SOLO si existen sliders
setInterval(() => {

  if (document.querySelector(".slide-0")) {
    changeSlide(0, 1);
  }

  if (document.querySelector(".slide-1")) {
    changeSlide(1, 1);
  }

}, 4000);


// ================= PRECIOS =================

function setModel(product, size, btn) {

  let price = "";

  if (size === 80) price = "Desde 4200€";
  if (size === 100) price = "Desde 4.300€";
  if (size === 120) price = "Desde 4.700€";

  const priceBox = document.getElementById(`price-${product}`);

  if (priceBox) {
    priceBox.innerText = price;
  }

  const buttons = btn.parentElement.querySelectorAll("button");

  buttons.forEach(b => b.classList.remove("active"));

  btn.classList.add("active");
}


// ================= MODAL =================

let scrollBackup = "";

function openModal(type) {

  const bg = document.getElementById("modal-bg");
  const red = document.getElementById("modal-red");
  const blue = document.getElementById("modal-blue");

  // limpiar estado anterior
  if (red) red.style.display = "none";
  if (blue) blue.style.display = "none";

  bg.style.display = "block";

  if (type === "red" && red) red.style.display = "block";
  if (type === "blue" && blue) blue.style.display = "block";

  // guardar scroll original
  scrollBackup = document.body.style.overflow;
  document.body.style.overflow = "hidden";
}

function closeModal() {

  const bg = document.getElementById("modal-bg");
  const red = document.getElementById("modal-red");
  const blue = document.getElementById("modal-blue");

  bg.style.display = "none";

  if (red) red.style.display = "none";
  if (blue) blue.style.display = "none";

  // restaurar scroll correctamente
  document.body.style.overflow = scrollBackup || "auto";
}


// Cerrar tocando fondo oscuro
document.addEventListener("DOMContentLoaded", () => {

  const bg = document.getElementById("modal-bg");

  if (bg) {
    bg.addEventListener("click", closeModal);
  }

});


function solicitarPresupuesto() {

  const mensaje = encodeURIComponent(
    "Hola, estoy interesado en una desbrozadora automática GRAPPA. Quiero solicitar presupuesto."
  );

  const url = `https://wa.me/${34640837217}?text=${mensaje}`;

  window.open(url, "_blank");
}

function scrollToModels() {
  document.getElementById("productos").scrollIntoView({
    behavior: "smooth"
  });
}


function scrollToContact() {
  document.getElementById("contacto").scrollIntoView({
    behavior: "smooth"
  });
}
// ================= MOBILE SWIPE SLIDER =================

let startX = 0;
let endX = 0;

document.querySelectorAll(".product-gallery").forEach((gallery, index) => {

  gallery.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  gallery.addEventListener("touchend", e => {
    endX = e.changedTouches[0].clientX;

    handleSwipe(index);
  });

});

function handleSwipe(productIndex){

  const diff = startX - endX;

  // sensibilidad swipe
  if(Math.abs(diff) < 40) return;

  if(diff > 0){
    // swipe izquierda → siguiente
    changeSlide(productIndex, 1);
  } else {
    // swipe derecha → anterior
    changeSlide(productIndex, -1);
  }

}
