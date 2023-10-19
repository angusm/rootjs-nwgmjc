import { customElement, query } from 'lit/decorators.js';
import { html, LitElement, unsafeCSS } from 'lit';
import { provide } from '@lit-labs/context';
import styles from './x-details.scss?inline';
import { ContentVisibility, contentVisibilityContext } from '@/utils/content-visibility-context';

@customElement('x-details')
class XDetails extends LitElement {
  static styles = unsafeCSS(styles);

  @query('details')
  private detailsElement: HTMLDetailsElement;

  @provide({ context: contentVisibilityContext })
  private contentVisibility: ContentVisibility = false;

  private updateContentVisibility() {
    // When the details element toggles, update the content visibility context.
    this.contentVisibility = this.detailsElement.open;
  }

  render() {
    return html`
      <details @toggle=${() => this.updateContentVisibility()}>
        <summary>
          <slot name="summary"></slot>
        </summary>
        <slot></slot>
      </details>
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
