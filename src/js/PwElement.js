export class PwElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.appendTemplate(this.buildTemplate(this.render()));
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

  buildTemplate(tpl) {
    const template = document.createElement('template');

    template.innerHTML = tpl;

    return template;
  }

  appendTemplate(template) {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}