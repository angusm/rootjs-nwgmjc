import { createContext } from '@lit-labs/context';

export type ContentVisibility = Boolean;

/** Whether the content is visible. */
export const contentVisibilityContext =
  createContext<ContentVisibility>('content-visibility');
