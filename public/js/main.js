const logo = document.querySelector('.logo');
const rootHtml = document.documentElement;
const distanceScrollTop = 100;

window.addEventListener('scroll', function() {
  const distance = rootHtml.scrollTop;
  if (distance > distanceScrollTop  ) {
    logo.classList.add('small');
  } else {
    logo.classList.remove('small');
  }
});

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