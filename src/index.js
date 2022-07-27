export const paintCards = (elem) => {
  let elementsArr = [...document.querySelectorAll(elem)];

  elementsArr.forEach(function (item, i) {
    if (i % 2 === 0) {
      item.style.backgroundColor = 'red';
    }
  });
};

export const findElement = (elem, searchEl) => {
  let nextEl = document.querySelector(elem).nextElementSibling;

  while (nextEl.classList.contains(searchEl) === false) {
    nextEl = nextEl.nextElementSibling;
  }

  return (nextEl.style.backgroundColor = 'blue');
};
