import { PwElement } from './PwElement.js';
import styles from './PwButton-styles.js';

class PwButton extends PwElement {
  static get is() {
    return 'pw-button';
  }

  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['is-loading'];
  }

  set isLoading(value) {
    if (Boolean(value) && !this.hasAttribute('is-loading')) {
      this.setAttribute('is-loading', '');
    }
    
    if (!Boolean(value) && this.hasAttribute('is-loading')) {
      this.removeAttribute('is-loading');
    }
  }

  get isLoading() {
    return this.hasAttribute('is-loading');
  }

  on_isloadingChanged(attrName, oldVal, newVal) {
    const front = this.shadowRoot.querySelector('.front');
    const loader = front.querySelector('.spinner');
    const content = front.querySelector('.content');

    if (newVal !== null) {
      loader.classList.add('show', 'rotate');
      content.classList.add('hidden');
    } else {
      loader.classList.remove('show', 'rotate');
      content.classList.remove('hidden');
    }
  }

  render() {
    return /* html */`
      <style>
        ${styles}
      </style>
    
      <span class="layer shadow"></span>
      <span class="layer deep"></span>
      <span class="front">
        <span class="content">
          <slot></slot>
        </span>
        <span class="spinner hide"></span>
      </span>
    `;
  }
}

customElements.define(PwButton.is, PwButton);