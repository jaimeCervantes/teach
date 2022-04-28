export class PwDialog extends HTMLElement {
  static is() {
    return 'pw-dialog';
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <dialog open>
        <h1>Hola</h1>
      </dialog>
    `;
  }
}