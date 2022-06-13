import { PwElement } from './PwElement.js';

class PwButton extends PwElement {
  static get is() {
    return 'pw-button';
  }

  constructor() {
    super();
    this.appendTemplate(template);
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
    const loader = front.querySelector('.loader');
    const content = front.querySelector('.content');

    if (newVal !== null) {
      loader.classList.add('show', 'rotate');
      content.classList.add('hidden');
    } else {
      loader.classList.remove('show', 'rotate');
      content.classList.remove('hidden');
    }
  }
}

const styles = /* css */`
  :host {
    display: inline-block;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
  }

  :host(:hover) .front {
    transform: translateY(-3px);
  }

  :host(:active) .front {
    transform: translateY(1px);
  }

  .layer {
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 20px;
  }

  .deep {
    background: var(--pw-button-bg-deep, linear-gradient(43deg, #4158D0 0%, #C850C0 100%));
    transform: translateY(2px);
  }

  .shadow {
    background: var(--pw-button-bg-deep, linear-gradient(43deg, #4158D0 0%, #C850C0 100%));
    transform: translateY(4px);
    filter: blur(3px);
  }

  .front {
    display: inline-block;
    position: relative;
    padding: 1rem;
    transition: transform 0.1s;
    background-color: white;
    border-radius: 17px;
    transform: translateY(-5px);
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .hidden {
    visibility: hidden;
  }

  .hide {
    display: none;
  }

  .show {
    display: block;
  }

  .spinner {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 50%;
    margin-left: -12px;
    margin-top: -15px;
    border-radius: 50%;
    border: 2px solid rgba(200, 0, 0, 0.5);
    border-top-color: rgb(200, 0, 0);
  }

  .rotate {
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    to { transform: rotate(360deg) }
  }
`;

const template = document.createElement('template');
template.innerHTML = /* html */`
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

customElements.define(PwButton.is, PwButton);