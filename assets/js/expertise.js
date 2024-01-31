const expertiseItems = document.querySelectorAll(".expertise__grid__item");
const expertiseGrid = document.querySelector(".expertise__grid");
const sliderIndicators = document.querySelectorAll(
  ".expertise__slider-indicator"
);

let expertiseIndex = 0;

function showExpertiseItem(index) {
  expertiseItems.forEach((item) => {
    item.classList.remove("expertise__grid__item--active");
  });

  sliderIndicators.forEach((indicator) => {
    indicator.classList.remove("slider__indicators-item--active");
  });

  expertiseItems[index].classList.add("expertise__grid__item--active");
  sliderIndicators[index].classList.add("slider__indicators-item--active");
}

function showNextExpertiseItem() {
  expertiseIndex = (expertiseIndex + 1) % expertiseItems.length;
  showExpertiseItem(expertiseIndex);
}

function showPrevExpertiseItem() {
  expertiseIndex =
    (expertiseIndex - 1 + expertiseItems.length) % expertiseItems.length;
  showExpertiseItem(expertiseIndex);
}

showExpertiseItem(expertiseIndex);

// handle swipe events on expertise grid items
let xDown = null;
let yDown = null;

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    evt.preventDefault(); // Empêcher le scroll vertical
    if (xDiff > 0) {
      showNextExpertiseItem();
    } else {
      showPrevExpertiseItem();
    }
  }

  xDown = null;
  yDown = null;
}

expertiseGrid.addEventListener("touchstart", handleTouchStart);
expertiseGrid.addEventListener("touchmove", handleTouchMove);
