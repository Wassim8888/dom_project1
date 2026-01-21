// Select elements
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const trashBtns = document.querySelectorAll(".fa-trash-alt");
const heartBtns = document.querySelectorAll(".fa-heart");
const totalPriceEl = document.querySelector(".total");

// Function to update total price
function updateTotal() {
  let total = 0;
  const cards = document.querySelectorAll(".card-body");

  cards.forEach((card) => {
    const quantity = Number(card.querySelector(".quantity").textContent);
    const unitPrice = Number(
      card.querySelector(".unit-price").textContent.replace("$", ""),
    );
    total += quantity * unitPrice;
  });

  totalPriceEl.textContent = `${total} $`;
}

/* ======================
   PLUS BUTTON
====================== */
plusBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const quantitySpan = this.nextElementSibling;
    quantitySpan.textContent = Number(quantitySpan.textContent) + 1;
    updateTotal();
  });
});

/* ======================
   MINUS BUTTON
====================== */
minusBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const quantitySpan = this.previousElementSibling;
    if (Number(quantitySpan.textContent) > 0) {
      quantitySpan.textContent = Number(quantitySpan.textContent) - 1;
      updateTotal();
    }
  });
});

/* ======================
   DELETE BUTTON
====================== */
trashBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.closest(".card-body").remove();
    updateTotal();
  });
});

/* ======================
   HEART BUTTON
====================== */
heartBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("liked");
    this.style.color = this.classList.contains("liked") ? "red" : "black";
  });
});
