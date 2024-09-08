function changeImage() {
  const selectedCard = this.parentElement.parentElement;
  const Image = selectedCard.querySelector('img');
  const oldSrc = Image.src;
  const oldAlt = Image.alt;
  Image.src = './images/underconstruction.jpg';
  Image.alt = 'Under Construction';
  setTimeout(() => {
    // wait 1.5 seconds
    Image.src = oldSrc;
    Image.alt = oldAlt;
  }, 1500);
  return false; //don't jump to top of page
}

document.querySelector('a').onclick = changeImage;

let links = document.querySelectorAll('a');
for (let i = 0, len = links.length; i < len; i++)
  links[i].onclick = changeImage;
