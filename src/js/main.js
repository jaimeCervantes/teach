import './header.js';
import './PwButton.js';

preparePwDialog();

function preparePwDialog() {
  const btn = document.getElementById('free');

  btn.addEventListener('click', async (e) => {
    e.target.isLoading = true;
    const constr = customElements.get('pw-dialog');    
    if (constr === undefined) {
      const { PwDialog } = await import('./PwDialog.js')
      customElements.define(PwDialog.is, PwDialog);
    }

    e.target.isLoading = false;
  }); 
} 