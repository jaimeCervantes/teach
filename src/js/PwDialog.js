export class PwDialog extends HTMLElement {
  static get is() {
    return 'pw-dialog';
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

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (newVal === oldVal) {
      return;
    }

    const methodName = `on_${attrName.replace('-', '')}Changed`;
    if (typeof this[methodName] === 'function') {
      this[methodName](attrName, oldVal, newVal);
    }
  }

  on_openChanged() {
    const dialog = this.shadowRoot.querySelector('dialog');
    if (newVal !== null) {
      dialog.setAttribute('open', '');
    } else {
      dialog.removeAttribute('open');
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // Add event listeners
  }

  disconnectedCallback() {
    // remove event listeners
  }
}


const template = document.createElement('template');
template.innerHTML = /*html*/`
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