ecosytemItems = document.querySelectorAll(".ecosystem__grid__item");
prevBtn = document.querySelector("#ecoPrevBtn");
nextBtn = document.querySelector("#ecoNextBtn");

let ecosystemIndex = 0;

function showEcosystemItem(index) {
  ecosytemItems.forEach((item) => {
    item.classList.remove("ecosystem__grid__item--active");
  });

  ecosytemItems[index].classList.add("ecosystem__grid__item--active");
}

function showNextEcosystemItem() {
  ecosystemIndex = (ecosystemIndex + 1) % ecosytemItems.length;
  showEcosystemItem(ecosystemIndex);
}

function showPrevEcosystemItem() {
  ecosystemIndex =
    (ecosystemIndex - 1 + ecosytemItems.length) % ecosytemItems.length;
  showEcosystemItem(ecosystemIndex);
}

nextBtn.addEventListener("click", showNextEcosystemItem);
prevBtn.addEventListener("click", showPrevEcosystemItem);

showEcosystemItem(ecosystemIndex);

// change item every 5 seconds if mobile view
if (window.innerWidth < 640) {
  setInterval(showNextEcosystemItem, 5000);
}
