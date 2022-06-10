export class PwElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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

  appendTemplate(template) {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}