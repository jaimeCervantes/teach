class PwButton extends HTMLElement {
  static get is() {
    return 'pw-button';
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          position: relative;
          background-color: transparent;
          font-size: 2rem;
          padding: 0;
          border: none;
          cursor: pointer;
          outline: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          color: black;
        }
        
        :host(:hover) .front {
          transform: translateY(-3px);
        }
        
        :host(:active) .front {
          transform: translateY(1px) scale(0.98);
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
          filter: blur(4px);
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
      </style>

      <span class="layer shadow"></span>
      <span class="layer deep"></span>
      <span class="front">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define(PwButton.is, PwButton);