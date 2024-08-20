class CustomButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const button = document.createElement('button');
    button.style.cssText = this.getAttribute('style') || '';
    button.addEventListener('click', () => this.dispatchEvent(new Event('onClick')));
    shadow.appendChild(button);
  }
}

customElements.define('custom-button', CustomButton);