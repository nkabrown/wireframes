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
