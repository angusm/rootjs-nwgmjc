import { createContext } from '@lit-labs/context';

/** Whether the content is visible. */
export type ContentVisibility = {
  visible: Boolean;
};

export const contentVisibilityContext =
  createContext<ContentVisibility>('content-visibility');
