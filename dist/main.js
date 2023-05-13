const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const nextBtn = document.getElementById("nextBtn");
const headerCart = document.getElementById("header-cart");
const cardCart = document.getElementById("cart-card");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const quantitySpan = document.getElementById("quantity");
const quantityBadge = document.getElementById("quantity-badge");
const quantityPrice = document.getElementById("quantity-price");
const totalPrice = document.getElementById("total-price");
const productInCart = document.getElementById("product-in-cart");
const emptyNotification = document.getElementById("empty-notification");
const deleteBtn = document.getElementById("delete-btn");
const addToCart = document.getElementById("add-to-cart");
const thumbnailImages = document.querySelectorAll(".thumbnail-image img");

let quantity = 0;
let previousIndex = -1;
let currentIndex = 0;
let nextIndex = 1;
let isAddToCart = false;
const SLIDES = document.getElementsByClassName("mySlides");
const TOTAL_SLIDES = SLIDES.length;

thumbnailImages.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    thumbnailImages.forEach((thumbnail) => {
      thumbnail.classList.remove("thumbnail-overlay");
    });
    this.classList.add("thumbnail-overlay");

    const images = document.querySelectorAll(".mySlides");
    images.forEach((image) => {
      image.classList.add("hidden");
    });

    const targetImageId = this.getAttribute("data-img");
    const targetImage = document.getElementById(targetImageId);
    targetImage.classList.remove("hidden");
  });
});

menuIcon.addEventListener("click", () => {
  overlay.classList.remove("opacity-0");
  overlay.classList.add("opacity-75");
  sidebar.classList.remove("max-laptop:hidden");
  nextBtn.classList.add("pointer-events-none");
  headerCart.classList.add("pointer-events-none");
  addToCart.classList.add("pointer-events-none");
});

closeIcon.addEventListener("click", () => {
  sidebar.classList.add("max-laptop:hidden");
  overlay.classList.remove("opacity-75");
  overlay.classList.add("opacity-0", "pointer-events-none");
  nextBtn.classList.remove("pointer-events-none");
  headerCart.classList.remove("pointer-events-none");
  addToCart.classList.remove("pointer-events-none");
});

headerCart.addEventListener("click", () => {
  cardCart.classList.toggle("hidden");
  if (!isAddToCart) emptyNotification.classList.remove("hidden");
});

function updateProductInCartVisibility() {
  if (quantity > 0) {
    productInCart.classList.remove("hidden");
    emptyNotification.classList.add("hidden");
  } else {
    productInCart.classList.add("hidden");
    emptyNotification.classList.remove("hidden");
  }
}

deleteBtn.addEventListener("click", () => {
  quantity = 0;
  quantitySpan.innerText = "0";
  quantityBadge.classList.add("hidden");
  updateProductInCartVisibility();
});

increaseButton.addEventListener("click", () => {
  quantity++;
  quantitySpan.innerText = String(quantity);
  quantityBadge.innerText = String(quantity);
  quantityPrice.innerText = `$125.00 x ${quantity}`;
  totalPrice.innerText = String(125 * quantity);
});

addToCart.addEventListener("click", () => {
  isAddToCart = true;
  if (quantity === 0) quantityBadge.classList.add("hidden");
  quantityBadge.classList.remove("hidden");
  productInCart.classList.remove("hidden");
  emptyNotification.classList.add("hidden");
  updateProductInCartVisibility();
});

decreaseButton.addEventListener("click", () => {
  if (quantity > 0) quantity--;
  quantityBadge.innerText = String(quantity);
  quantityPrice.innerText = `$125.00 x ${quantity}`;
  totalPrice.innerText = String(125 * quantity);
  if (quantity === 0) {
    productInCart.classList.add("hidden");
    emptyNotification.classList.remove("hidden");
  }
  quantitySpan.innerText = String(quantity);
});

function updateSlideVisibility() {
  for (let i = 0; i < TOTAL_SLIDES; i++) {
    SLIDES[i].classList.add("hidden");
  }
  SLIDES[currentIndex].classList.remove("hidden");
}

function moveToNextSlide() {
  previousIndex = currentIndex;
  currentIndex = (currentIndex + 1) % TOTAL_SLIDES;
  nextIndex = (currentIndex + 1) % TOTAL_SLIDES;
  updateSlideVisibility();
}

function moveToPreviousSlide() {
  nextIndex = currentIndex;
  currentIndex = (currentIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
  previousIndex = (currentIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
  updateSlideVisibility();
}

document.getElementById("nextBtn").addEventListener("click", moveToNextSlide);
document
  .getElementById("previousBtn")
  .addEventListener("click", moveToPreviousSlide);

// Initial state
updateSlideVisibility();
