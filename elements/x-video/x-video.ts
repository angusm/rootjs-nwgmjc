import { ContentVisibility, contentVisibilityContext } from '@/utils/content-visibility-context';
import { ContextConsumer } from '@lit-labs/context';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';

@customElement('x-video')
export class XVideo extends LitElement {
  @query('video')
  private videoElement: HTMLVideoElement;

  @property({type: Boolean, attribute: 'replay-on-visiblity-change'})
  private replayOnVisibilityChange: boolean;

  /**
   * When the visibility context changes, play or reset the video.
   */
  private visibilityConsumer = new ContextConsumer(
    this,
    contentVisibilityContext,
    (value: ContentVisibility) => {
      if (!this.videoElement) {
        return;
      }
      console.log('Callback', this.replayOnVisibilityChange);
      if (value.visible && this.replayOnVisibilityChange) {
        // Play.
        console.log('playing video');
        this.videoElement.play();
      } else {
        // Reset.
        console.log('pausing video');
        this.videoElement.pause();
        this.videoElement.currentTime = 0;
      }
    },
    true
  );

  render() {
    return html`<video
      src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
      muted
      style="width: 100%; aspect-ratio: 16/9;"
    ></video>`;
  }
}

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'x-video': preact.JSX.HTMLAttributes;
    }
  }
}
