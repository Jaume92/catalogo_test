// ================= SLIDERS =================

let sliders = [0, 0];

function changeSlide(product, direction) {

  const slides = document.querySelectorAll(`.slide-${product}`);

  if (!slides.length) return;

  slides.forEach(s => s.classList.remove("active"));

  sliders[product] =
    (sliders[product] + direction + slides.length) % slides.length;

  slides[sliders[product]].classList.add("active");
}

// Autoplay seguro
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

  if (size === 80) price = "Desde 4.200€";
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

  if (red) red.style.display = "none";
  if (blue) blue.style.display = "none";

  bg.style.display = "block";

  if (type === "red" && red) red.style.display = "block";
  if (type === "blue" && blue) blue.style.display = "block";

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

  document.body.style.overflow = scrollBackup || "auto";
}


// ================= NAV ACTIONS =================

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


// ================= WHATSAPP =================

function solicitarPresupuesto() {

  const phone = "34640837217";

  const mensaje = encodeURIComponent(
    "Hola, estoy interesado en una desbrozadora automática GRAPPA. Quiero solicitar presupuesto."
  );

  const url = `https://wa.me/${phone}?text=${mensaje}`;

  window.open(url, "_blank");
}


// ================= DOM READY =================

document.addEventListener("DOMContentLoaded", () => {

  // cerrar modal tocando fondo
  const bg = document.getElementById("modal-bg");

  if (bg) {
    bg.addEventListener("click", closeModal);
  }

  // ---------- BOTÓN WHATSAPP FLOTANTE ----------

  const waBtn = document.createElement("a");

  waBtn.href = "https://wa.me/34640837217";
  waBtn.target = "_blank";

  waBtn.style.position = "fixed";
  waBtn.style.bottom = "20px";
  waBtn.style.right = "20px";
  waBtn.style.width = "62px";
  waBtn.style.height = "62px";
  waBtn.style.background = "#25D366";
  waBtn.style.borderRadius = "50%";
  waBtn.style.display = "flex";
  waBtn.style.alignItems = "center";
  waBtn.style.justifyContent = "center";
  waBtn.style.fontSize = "28px";
  waBtn.style.color = "#fff";
  waBtn.style.textDecoration = "none";
  waBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";
  waBtn.style.zIndex = "9999";

  waBtn.innerHTML = "💬";

  document.body.appendChild(waBtn);


  // ---------- MOBILE SWIPE ----------

  document.querySelectorAll(".product-gallery").forEach((gallery, index) => {

    let startX = 0;
    let endX = 0;

    gallery.addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
    });

    gallery.addEventListener("touchend", e => {
      endX = e.changedTouches[0].clientX;

      const diff = startX - endX;

      if (Math.abs(diff) < 40) return;

      if (diff > 0) {
        changeSlide(index, 1);
      } else {
        changeSlide(index, -1);
      }

    });

  });

});
