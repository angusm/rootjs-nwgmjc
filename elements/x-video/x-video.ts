import { contentVisibilityContext } from "@/utils/content-visibility-context";
import { consume } from "@lit-labs/context";
import { LitElement, html } from "lit";

export class XVideo extends LitElement {

    @consume({context: contentVisibilityContext, subscribe: true})
    visibility: Boolean;

    render() {
        return html`<video>
            </video>`;
    }
}

declare module 'preact' {
    namespace JSX {
      interface IntrinsicElements {
        'x-video': preact.JSX.HTMLAttributes;
      }
    }
  }