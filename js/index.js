const filterBtns = document.querySelectorAll('.filter .btn');
const galleryItems = document.querySelectorAll('.gallery .item');
const loadMoreBtn = document.querySelector('.load-more .btn');
let visibleItems = 6;

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    const filter = this.getAttribute('data-filter');
    console.log(filter)
    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.parentElement.classList.remove('hide');
      } else {
        item.parentElement.classList.add('hide');
      }
    });
    visibleItems = 6;
    showItems();
  });
});

loadMoreBtn.addEventListener('click', function() {
    visibleItems = galleryItems.length;
    showItems();
  });
  
  function showItems() {
    galleryItems.forEach((item, index) => {
      if (index < visibleItems) {
        item.parentElement.classList.remove('hidden');
      } else {
        item.parentElement.classList.add('hidden');
      }
    });
  
    if (visibleItems >= galleryItems.length) {
      loadMoreBtn.classList.add('hidden');
    } else {
      loadMoreBtn.classList.remove('hidden');
    }
  }

// to top button
let toTopBtn = document.getElementById("to-top-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    toTopBtn.style.display = "flex";
  } else {
    toTopBtn.style.display = "none";
  }
});
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//////////////////
const bgImages = document.querySelectorAll('.creative-slider-bg-image');
const overlay = document.querySelector('.creative-slider-overlay');
const overlayText = document.querySelector('.creative-slider-overlay-text');
const prevBtn = document.querySelector('.creative-slider-prev');
const nextBtn = document.querySelector('.creative-slider-next');

let currentIndex = 0;

function showImage(index) {
  bgImages.forEach(image => image.classList.remove('active'));
  bgImages[index].classList.add('active');
}

function showOverlayText() {
  overlay.classList.add('active');
  overlayText.classList.add('active');
}

function hideOverlayText() {
  overlay.classList.remove('active');
  overlayText.classList.remove('active');
}

function slidePrev() {
  hideOverlayText();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = bgImages.length - 1;
  }
  showImage(currentIndex);
  setTimeout(showOverlayText, 500);
}

function slideNext() {
  hideOverlayText();
  currentIndex++;
  if (currentIndex >= bgImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
  setTimeout(showOverlayText, 500);
}

showImage(currentIndex);
showOverlayText();

prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);

setInterval(slideNext, 5000);

