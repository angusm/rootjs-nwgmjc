import { createContext } from '@lit-labs/context';

/** Whether the content is visible. */
export type ContentVisibility = Boolean;

export const contentVisibilityContext =
  createContext<ContentVisibility>('content-visibility');
