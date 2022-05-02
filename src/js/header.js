const breakpoints = {
  sm: 700
}
const logo = document.querySelector('.logo');
const rootHtml = document.documentElement;
const distanceScrollTop = 100;

window.addEventListener('resize', decidesLogoWidthOnScroll);
window.addEventListener('load', decidesLogoWidthOnScroll);

function decidesLogoWidthOnScroll() {
  const isMatched = window.matchMedia(`(min-width: ${breakpoints.sm}px)`).matches;

  if (isMatched) {
    window.addEventListener('scroll', changeLogoWidth);
  } else {
    window.removeEventListener('scroll', changeLogoWidth);
  }
}

function changeLogoWidth() {
  const distance = rootHtml.scrollTop;
  
  if (distance > distanceScrollTop  ) {
    logo.classList.add('small');
  } else {
    logo.classList.remove('small');
  }
}