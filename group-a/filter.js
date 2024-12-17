export default (targetElement, { currentFilter }) => {
  const newCounter = targetElement.cloneNode(true);

  Array.from(newCounter.querySelectorAll("li a"));
  forEach((counter) => {
    if (counter.textContent === currentFilter) {
      counter.classList.add("selected");
    } else {
      counter.classList.remove("selected");
    }
  });

  return newCounter;
};
