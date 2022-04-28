const breakpoints = {
  sm: 700
};

const logo = document.querySelector('.logo');
const rootHtml = document.documentElement;

window.addEventListener('resize', decidesLogoWidthOnScroll);
window.addEventListener('load', decidesLogoWidthOnScroll);

function decidesLogoWidthOnScroll() {
  const isMatched = window.matchMedia(`(min-width: ${breakpoints.sm}px)`).matches;

  if (isMatched) {
    window.addEventListener('scroll', changeLogoWidth);
  } else {
    window.removeEventListener('scroll',changeLogoWidth)
  }
}

function changeLogoWidth() {
  const distance = rootHtml.scrollTop;

  if (distance > 100  ) {
    logo.classList.add('small')
  } else {
    logo.classList.remove('small');
  }
}

  const btn = document.getElementById('free');
  const btnFront = btn.querySelector('.btn__front');
  
  btn.addEventListener('click', async (e) => {
    const btnFronInner = btnFront.innerHTML;

    e.target.parentNode.querySelector('.btn__front').innerHTML = 'Cargando...';
    
    const { PwDialog } = await import('./PwDialog.js');
    customElements.define(PwDialog.is(), PwDialog);
    
    btnFront.innerHTML = btnFronInner;
  });  