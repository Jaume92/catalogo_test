const phone = "34600000000"; // TU NUMERO CON PREFIJO

function openWA(){
  const msg = encodeURIComponent("Hola, quiero información sobre desbrozadoras automáticas");
  window.open(`https://wa.me/${phone}?text=${msg}`,"_blank");
}

document.getElementById("whatsappBtn").onclick = openWA;
document.getElementById("whatsappBtn2").onclick = openWA;

// MENU MOBILE
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle.onclick = () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
};
