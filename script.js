// ---------- SLIDERS ----------

let sliders = [0,0];

function changeSlide(product, direction) {

  const slides = document.querySelectorAll(`.slide-${product}`);

  slides.forEach(s => s.classList.remove("active"));

  sliders[product] = (sliders[product] + direction + slides.length) % slides.length;

  slides[sliders[product]].classList.add("active");
}

// Autoplay
setInterval(() => {
  changeSlide(0,1);
  changeSlide(1,1);
}, 4000);


// ---------- PRECIOS ----------

function setModel(product, size, btn) {

  let price = "";

  if(size === 80) price = "Desde 3.900€";
  if(size === 100) price = "Desde 4.300€";
  if(size === 120) price = "Desde 5.200€";

  document.getElementById(`price-${product}`).innerText = price;

  const buttons = btn.parentElement.querySelectorAll("button");
  buttons.forEach(b => b.classList.remove("active"));

  btn.classList.add("active");
}


// ---------- MODAL ----------

function openModal(type) {

  document.getElementById("modal-bg").style.display = "block";

  if(type === "red") {
    document.getElementById("modal-red").style.display = "block";
  }

  if(type === "blue") {
    document.getElementById("modal-blue").style.display = "block";
  }
}

function closeModal() {

  document.getElementById("modal-bg").style.display = "none";
  document.getElementById("modal-red").style.display = "none";
  document.getElementById("modal-blue").style.display = "none";
}
