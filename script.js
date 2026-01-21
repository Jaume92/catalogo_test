const rojaImages = [
  "assets/images/roja1.jpeg",
  "assets/images/roja2.jpeg",
  "assets/images/roja3.jpeg"
];

const azulImages = [
  "assets/images/azul1.jpeg",
  "assets/images/azul2.jpeg"
];

let rojaIndex = 0;
let azulIndex = 0;

function nextSlide(type){

  if(type==="roja"){
    rojaIndex = (rojaIndex+1)%rojaImages.length;
    document.getElementById("roja-img").src = rojaImages[rojaIndex];
  }

  if(type==="azul"){
    azulIndex = (azulIndex+1)%azulImages.length;
    document.getElementById("azul-img").src = azulImages[azulIndex];
  }
}

function prevSlide(type){

  if(type==="roja"){
    rojaIndex = (rojaIndex-1+rojaImages.length)%rojaImages.length;
    document.getElementById("roja-img").src = rojaImages[rojaIndex];
  }

  if(type==="azul"){
    azulIndex = (azulIndex-1+azulImages.length)%azulImages.length;
    document.getElementById("azul-img").src = azulImages[azulIndex];
  }
}

// VARIANTES ROJA

let selectedModel = "CL-800 (80cm)";
let selectedPrice = 4300;

function setModel(model, price, el){

  selectedModel = model;
  selectedPrice = price;

  document.getElementById("grappaPrice").innerText =
    `${price} € + IVA`;

  document.querySelectorAll(".variant").forEach(btn=>{
    btn.classList.remove("active");
  });

  el.classList.add("active");
}

// WHATSAPP

function sendGrappa(){

  const msg = `Hola, quiero presupuesto para la Grappa ${selectedModel} (${selectedPrice}€ + IVA)`;
  const url = `https://wa.me/34633897821?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
}
