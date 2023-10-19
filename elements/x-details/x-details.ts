import { customElement } from 'lit/decorators.js';
import { html, LitElement, unsafeCSS } from 'lit';
import styles from './x-details.scss?inline';

@customElement('x-details')
class XDetails extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="container">
          <p>Hello Shadow DOM!</p>
        <slot></slot>
      </div>
    `;
  }
}

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'x-details': preact.JSX.HTMLAttributes;
    }
  }
}
