ecosytemItems = document.querySelectorAll(".ecosystem__grid__item");

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

// change item every 5 seconds if mobile view
if (window.innerWidth < 640) {
  ecosytemItems.forEach((item) => {
    item.removeAttribute("data-aos");
  });
  showEcosystemItem(ecosystemIndex);
  setInterval(showNextEcosystemItem, 4000);
}
