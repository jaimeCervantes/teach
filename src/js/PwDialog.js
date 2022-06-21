import { PwElement } from './PwElement.js';
export class PwDialog extends PwElement {
  static get is() {
    return 'pw-dialog';
  }

  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['open'];
  }

  get open() {
    return this.getAttribute('open');
  }

  set open(value) {
    if (Boolean(value)) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }

  on_openChanged(attrName, oldVal, newVal) {
    const dialog = this.shadowRoot.querySelector('dialog');
    if (newVal !== null) {
      dialog.setAttribute('open', '');
    } else {
      dialog.removeAttribute('open');
    }
  }

  render () {
    return /*html*/`
    <style>
      dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
      }
    </style>
    <dialog>
      <h1>Hola</h1>
    </dialog>
    `;
  }
}