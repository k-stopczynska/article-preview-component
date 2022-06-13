const shareIcon = document.querySelector('.share-icon');
const socials = document.querySelector('.socials');
const author = document.querySelector('.author');

function socialDisplay(e) {
  if (`${window.innerWidth}` < 920)
{  socials.classList.add('active');
  author.classList.add('inactive');
  shareIcon.classList.add('stay');
  socials.classList.remove('desktop-active');
}
if (`${window.innerWidth}` >= 920) {
  socials.classList.add('desktop-active');
  socials.classList.remove('active');
  author.classList.remove('inactive');
  shareIcon.classList.remove('stay');
}
}
shareIcon.addEventListener('click', socialDisplay);