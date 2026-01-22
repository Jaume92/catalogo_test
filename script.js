// ====== CONFIG ======
const WHATSAPP_PHONE = "34600000000"; // <-- pon aquí el número, con prefijo país (España: 34) SIN +, SIN espacios

function waLink(text) {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${msg}`;
}

// ====== NAV MOBILE ======
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ====== YEAR ======
document.getElementById("year").textContent = new Date().getFullYear();

// ====== WHATSAPP CTA ======
const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnWhatsapp2 = document.getElementById("btnWhatsapp2");

function openWhatsAppDefault() {
  const text = "Hola, quiero información sobre desbrozadoras automáticas. ¿Me pasas modelos y precios?";
  window.open(waLink(text), "_blank", "noopener");
}

if (btnWhatsapp) btnWhatsapp.addEventListener("click", (e) => { e.preventDefault(); openWhatsAppDefault(); });
if (btnWhatsapp2) btnWhatsapp2.addEventListener("click", (e) => { e.preventDefault(); openWhatsAppDefault(); });

// ====== MODEL PREFILL (cuando haces click en "Pedir presupuesto" de una card) ======
const modelSelect = document.getElementById("modelSelect");
document.querySelectorAll('[data-model]').forEach(el => {
  el.addEventListener("click", () => {
    const m = el.getAttribute("data-model");
    if (modelSelect && m) modelSelect.value = m;
  });
});

// ====== MODAL ======
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalCta = document.getElementById("modalCta");

function openModal(title, text, model) {
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalCta.setAttribute("data-model", model || "");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll('[data-open="modal"]').forEach(btn => {
  btn.addEventListener("click", () => {
    const model = btn.getAttribute("data-model") || "Modelo";
    const text = `Detalles del modelo ${model}. (Aquí metes motor, ancho, uso, garantía, etc.)`;
    openModal(`Modelo ${model}`, text, model);
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.matches('[data-close="modal"]') || e.target.classList.contains("modal__backdrop")) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// ====== FEEDBACK TAB -> usa el mismo modal ======
const feedbackTab = document.getElementById("feedbackTab");
if (feedbackTab) {
  feedbackTab.addEventListener("click", () => {
    openModal(
      "Retroalimentación",
      "¿Qué quieres mejorar? (copy, fotos, precios, botón WhatsApp fijo, catálogo, etc.)",
      ""
    );
  });
}

// ====== FORM -> abre WhatsApp con mensaje preparado ======
const form = document.getElementById("leadForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const model = (fd.get("model") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();

    const text =
      `Hola, soy ${name} (${phone}). ` +
      `Quiero presupuesto${model ? " para el modelo " + model : ""}. ` +
      `${message ? "Detalles: " + message : ""}`;

    window.open(waLink(text), "_blank", "noopener");
  });
}
