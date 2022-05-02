import './header.js';
import './PwButton.js';

preparePwDialog();

function preparePwDialog() {
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
} 