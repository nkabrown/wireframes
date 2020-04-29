// construct needed number of columns
const layout = () => {
  // determine exact number of columns to fit in available space
  const availableWidth = document.getElementsByClassName('slider-view')[0].clientWidth;
  // calculate remainder of dividing by min-width and the distribute across available columns
  const remainder = availableWidth % 225;
  const num = Math.floor(availableWidth / 225);
  const adjustment = Math.floor(remainder / num);
  const width = adjustment + 225;

  const fragment = document.getElementById('column');
  const view = document.getElementsByClassName('slider-view')[0];

  [...Array(num).keys()].forEach(col => {
    const column = fragment.content.cloneNode(true);
    column.firstElementChild.setAttribute('style', `width: ${width}px`);
    view.appendChild(column);
  });
};

layout();

// querySelectorAll returns a nodeList with can be iterated over
// with array methods
const placards = document.querySelectorAll('.placard');

placards.forEach(placard => {
  placard.addEventListener('click', () => {
    const container = document.getElementsByClassName('content')[0];
    const drawer = document.getElementsByClassName('image-drawer')[0];
    if (drawer.getAttribute('mode') == 'open') {
      drawer.setAttribute('mode', 'closed');
      container.style.minWidth = '100%';
    } else {
      drawer.setAttribute('mode', 'open');
      container.style.minWidth = '82%';
    }
  });
});
