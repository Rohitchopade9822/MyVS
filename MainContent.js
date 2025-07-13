document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".highlights li");
  let index = 0;

  function showNextItem() {
    if (index < listItems.length) {
      listItems[index].classList.add("visible");
      index++;
      setTimeout(showNextItem, 1000); // 1 second delay
    }
  }

  showNextItem();
});
