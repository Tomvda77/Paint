function changeImage() {
  const selectedCard = this.parentElement.parentElement;
  const oldImage = selectedCard.querySelector('img');
  console.log(selectedCard);
  oldImage.src = './images/underconstruction.jpg';
  oldImage.alt = 'Under Construction';
}

document.querySelector('a').onclick = changeImage;

let links = document.querySelectorAll('a');
for (let i = 0, len = links.length; i < len; i++)
  links[i].onclick = changeImage;
