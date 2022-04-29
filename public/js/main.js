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
  const btnInner = btn.innerHTML;
  
  btn.addEventListener('click', async (e) => {
    e.target.innerHTML = 'Cargando...';
    const constr = customElements.get('pw-dialog');
    
    if (constr === undefined) {
      const { PwDialog } = await import('./PwDialog.js')
      customElements.define(PwDialog.is, PwDialog);
    }

    btn.innerHTML = btnInner;
  });  