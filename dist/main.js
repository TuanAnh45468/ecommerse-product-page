const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");

let previousIndex = -1;
let currentIndex = 0;
let nextIndex = 1;
const SLIDES = document.getElementsByClassName("mySlides");
const TOTAL_SLIDES = SLIDES.length;

menuIcon.addEventListener("click", () => {
  overlay.classList.remove("opacity-0", "pointer-event-none");
  overlay.classList.add("opacity-75");
  sidebar.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  overlay.classList.add("opacity-0", "pointer-event-none");
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
