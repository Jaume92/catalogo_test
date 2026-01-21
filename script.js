// Modal "Ver ficha" + WhatsApp con modelo
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalWa = document.getElementById("modalWa");

const WA_NUMBER = "34633897821";

function openModal(model, price){
  modalTitle.textContent = model;
  modalPrice.textContent = price;

  const msg = `Hola, quiero información y disponibilidad de la ${model} (${price}).`;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  modalWa.href = url;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".btn--card").forEach(btn => {
  btn.addEventListener("click", () => {
    openModal(btn.dataset.model, btn.dataset.price);
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.dataset.close === "true") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
