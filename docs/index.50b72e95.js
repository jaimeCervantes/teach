function n(n,e,t,r){Object.defineProperty(n,e,{get:t,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequiredfe1;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in r){var e=r[n];delete r[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,e){r[n]=e},e.parcelRequiredfe1=o),o.register("27Lyk",(function(e,t){var r,o;n(e.exports,"register",(()=>r),(n=>r=n)),n(e.exports,"resolve",(()=>o),(n=>o=n));var s={};r=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)s[e[t]]=n[e[t]]},o=function(n){var e=s[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o.register("eaql2",(function(n,e){n.exports=import("./"+o("27Lyk").resolve("aNpnw")).then((()=>o("6sEsr")))})),o("27Lyk").register(JSON.parse('{"fzFkW":"index.50b72e95.js","aNpnw":"PwDialog.4e8372b4.js"}'));const s=700,a=document.querySelector(".logo"),i=document.documentElement;function l(){window.matchMedia(`(min-width: ${s}px)`).matches?window.addEventListener("scroll",d):window.removeEventListener("scroll",d)}function d(){i.scrollTop>100?a.classList.add("small"):a.classList.remove("small")}window.addEventListener("resize",l),window.addEventListener("load",l);class c extends HTMLElement{static get is(){return"pw-button"}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML='\n      <style>\n        :host {\n          display: inline-block;\n          position: relative;\n          background-color: transparent;\n          font-size: 2rem;\n          padding: 0;\n          border: none;\n          cursor: pointer;\n          outline: none;\n          user-select: none;\n          -webkit-tap-highlight-color: transparent;\n          color: black;\n          font-weight: bold;\n        }\n        \n        :host(:hover) .front {\n          transform: translateY(-3px);\n        }\n        \n        :host(:active) .front {\n          transform: translateY(1px) scale(0.98);\n        }\n        \n        .layer {\n          display: inline-block;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          border-radius: 20px;\n        }\n        \n        .deep {\n          background: var(--pw-button-bg-deep, linear-gradient(43deg, #4158D0 0%, #C850C0 100%));\n          transform: translateY(2px);\n        }\n        \n        .shadow {\n          background: var(--pw-button-bg-deep, linear-gradient(43deg, #4158D0 0%, #C850C0 100%));\n          transform: translateY(4px);\n          filter: blur(4px);\n        }\n        \n        .front {\n          display: inline-block;\n          position: relative;\n          padding: 1rem;\n          transition: transform 0.1s;\n          background-color: white;\n          border-radius: 17px;\n          transform: translateY(-5px);\n          border: 1px solid rgba(0, 0, 0, 0.2);\n        }\n      </style>\n\n      <span class="layer shadow"></span>\n      <span class="layer deep"></span>\n      <span class="front">\n        <slot></slot>\n      </span>\n    '}}customElements.define(c.is,c),function(){const n=document.getElementById("free"),e=n.innerHTML;n.addEventListener("click",(async t=>{t.target.innerHTML="Cargando...";if(void 0===customElements.get("pw-dialog")){const{PwDialog:n}=await o("eaql2");customElements.define(n.is,n)}n.innerHTML=e}))}();
//# sourceMappingURL=index.50b72e95.js.map
